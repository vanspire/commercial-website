import { knowledgeGraph, KnowledgeTopic, IntentType } from './knowledgeBase'

const STOP_WORDS = new Set([
  'a', 'an', 'the', 'is', 'are', 'was', 'were', 'be', 'been', 'being',
  'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could',
  'should', 'may', 'might', 'can', 'i', 'me', 'my', 'we', 'our', 'you',
  'your', 'it', 'its', 'this', 'that', 'these', 'those', 'to', 'of',
  'in', 'on', 'at', 'for', 'with', 'by', 'from', 'up', 'about', 'into',
  'through', 'during', 'more', 'some', 'any', 'all', 'both', 'also',
  'very', 'just', 'so', 'and', 'or', 'but', 'if', 'than', 'there',
  'tell', 'know', 'think', 'look', 'see', 'use', 'go', 'want', 'need', 'make',
])

const NORMALIZATIONS: Record<string, string> = {
  'hms': 'hospital management system',
  'pms': 'hospital management system',
  'emr': 'hospital',
  'ehr': 'hospital',
  'app': 'application',
  'apps': 'application',
  'websites': 'website',
  'sites': 'website',
  'apis': 'api',
  'modernize': 'modernisation',
  'modernise': 'modernisation',
  'aws': 'cloud',
  'azure': 'cloud',
  'gcp': 'cloud',
  'devops': 'cloud',
  'kubernetes': 'cloud',
  'integrate': 'integration',
  'integrating': 'integration',
  'implement': 'implementation',
  'implementing': 'implementation',
  'transform': 'transformation',
  'transforming': 'transformation',
  'pricing': 'price',
  'prices': 'price',
  'costs': 'cost',
  'fees': 'price',
  'rates': 'price',
  'quote': 'price',
  'hire': 'contact',
  'reach': 'contact',
  'hello': 'contact',
  'hi': 'contact',
}

// Map keywords to specific intents to boost accuracy
const INTENT_HEURISTICS: Record<IntentType, string[]> = {
  learn_service: ['what is', 'what do you do', 'services', 'offer', 'provide', 'help with', 'can you'],
  learn_product: ['demo', 'software', 'platform', 'system', 'tool', 'product'],
  compare_services: ['difference', 'vs', 'versus', 'compare', 'better', 'choose'],
  implementation_details: ['how does it work', 'process', 'timeline', 'how long', 'steps', 'methodology'],
  technical_explanation: ['stack', 'technologies', 'framework', 'architecture', 'infrastructure', 'security', 'api', 'cloud'],
  pricing_inquiry: ['price', 'cost', 'much', 'budget', 'quote', 'estimate', 'payment', 'fee'],
  contact_request: ['contact', 'hire', 'talk', 'meet', 'message', 'email', 'get in touch', 'reach out', 'call'],
  general_question: ['who', 'where', 'about', 'company', 'philosophy', 'team', 'location', 'based'],
}

function normalizeQuery(raw: string): string {
  let q = raw.toLowerCase()
  q = q.replace(/[^\w\s'-]/g, ' ')
  for (const [from, to] of Object.entries(NORMALIZATIONS)) {
    q = q.replace(new RegExp(`\\b${from}\\b`, 'gi'), to)
  }
  return q.trim()
}

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .split(/\s+/)
    .filter((t) => t.length > 1)
}

function detectIntents(normalizedQuery: string): Map<IntentType, number> {
  const intentScores = new Map<IntentType, number>()
  
  for (const [intent, keywords] of Object.entries(INTENT_HEURISTICS)) {
    let score = 0
    for (const kw of keywords) {
      if (normalizedQuery.includes(kw)) {
        score += kw.split(' ').length * 2 // longer phrases carry more weight
      }
    }
    if (score > 0) {
      intentScores.set(intent as IntentType, score)
    }
  }
  return intentScores
}

export interface MatchResult {
  topic: KnowledgeTopic | null
  primaryIntent: IntentType | null
  response: string
  cta?: { label: string; href: string }
  type: 'match' | 'fallback'
}

export function findBestMatch(rawQuery: string): MatchResult {
  const normalizedQuery = normalizeQuery(rawQuery)
  const queryTokens = tokenize(normalizedQuery).filter((t) => !STOP_WORDS.has(t))
  
  // 1. Detect Intents
  const intentScores = detectIntents(normalizedQuery)
  let primaryIntent: IntentType | null = null
  let maxIntentScore = 0
  
  for (const [intent, score] of Array.from(intentScores.entries())) {
    if (score > maxIntentScore) {
      maxIntentScore = score
      primaryIntent = intent
    }
  }

  // 2. Score Topics
  let bestTopic: KnowledgeTopic | null = null
  let bestTopicScore = 0

  for (const topic of knowledgeGraph) {
    let score = 0
    const textCorpus = [topic.title, topic.description, ...topic.keyConcepts].map(t => t.toLowerCase())

    // Lexical match
    for (const token of queryTokens) {
      for (const text of textCorpus) {
        if (text.includes(token)) {
          score += 1
          if (text === token) score += 1 // Exact token match bonus
        }
      }
    }

    // Exact concept match
    for (const concept of topic.keyConcepts) {
      if (normalizedQuery.includes(concept.toLowerCase())) {
        score += concept.split(' ').length * 3
      }
    }

    // Intent alignment boost -> If the detected intent is heavily matched by this topic, boost
    if (primaryIntent && topic.intents.includes(primaryIntent)) {
      score *= 1.5 // 50% boost if it satisfies the user's primary intent
    }

    if (score > bestTopicScore) {
      bestTopicScore = score
      bestTopic = topic
    }
  }

  // 3. Construct Response
  const MIN_SCORE = 3

  if (bestTopic && bestTopicScore >= MIN_SCORE) {
    // If it's a contact or pricing intent, we can provide specialized answers, otherwise fallback to detailed explanation
    let responseText = bestTopic.detailedExplanation
    
    // Simple response templating based on intent
    if (primaryIntent === 'pricing_inquiry' && bestTopic.id !== 'pricing') {
       responseText = `While every ${bestTopic.title} project is unique, we scope and price individually based on your requirements. \n\n${bestTopic.description}`
    }

    return {
      topic: bestTopic,
      primaryIntent,
      response: responseText,
      cta: bestTopic.url ? { label: `Learn more about ${bestTopic.title}`, href: bestTopic.url } : undefined,
      type: 'match'
    }
  }

  // Fallback
  return {
    topic: null,
    primaryIntent,
    response: "I may not have complete details on that topic yet, but our team would be happy to help. Vanspire covers Digital Solutions, ERP Implementation, Hospital Management Systems, Enterprise System Integration, and Cloud Infrastructure. Feel free to ask me about any of these - or reach out directly and we'll get back to you promptly.",
    cta: { label: 'Contact Our Team', href: '/contact' },
    type: 'fallback'
  }
}

