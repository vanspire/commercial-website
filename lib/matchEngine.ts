import { knowledgeBase, KnowledgeEntry } from './knowledgeBase'

// Words to strip during normalisation
const STOP_WORDS = new Set([
  'a', 'an', 'the', 'is', 'are', 'was', 'were', 'be', 'been', 'being',
  'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could',
  'should', 'may', 'might', 'can', 'i', 'me', 'my', 'we', 'our', 'you',
  'your', 'it', 'its', 'this', 'that', 'these', 'those', 'to', 'of',
  'in', 'on', 'at', 'for', 'with', 'by', 'from', 'up', 'about', 'into',
  'through', 'during', 'more', 'some', 'any', 'all', 'both', 'also',
  'very', 'just', 'so', 'and', 'or', 'but', 'if', 'than', 'there',
  'what', 'how', 'who', 'when', 'where', 'which', 'like', 'get', 'give',
  'know', 'think', 'look', 'see', 'use', 'go', 'want', 'need', 'make',
])

// Common synonyms and abbreviation expansions applied before matching
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

function normalizeQuery(raw: string): string {
  let q = raw.toLowerCase()
  // Strip punctuation except hyphens
  q = q.replace(/[^\w\s'-]/g, ' ')
  // Apply synonym/abbreviation normalisations
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

function scoreEntry(
  queryTokens: string[],
  normalizedQuery: string,
  entry: KnowledgeEntry,
): number {
  let score = 0

  for (const keyword of entry.keywords) {
    const kw = keyword.toLowerCase()

    // Exact phrase match in normalised query - longer phrases score higher
    if (normalizedQuery.includes(kw)) {
      score += kw.split(' ').length * 4
    } else {
      // Partial token-level match
      const kwTokens = tokenize(kw)
      for (const kwToken of kwTokens) {
        if (STOP_WORDS.has(kwToken)) continue
        for (const qToken of queryTokens) {
          if (qToken === kwToken) {
            score += 2
          } else if (
            qToken.length > 4 &&
            (qToken.startsWith(kwToken) || kwToken.startsWith(qToken))
          ) {
            score += 1 // partial prefix match
          }
        }
      }
    }
  }

  // Small boost for matching an intent word
  for (const intent of entry.intent) {
    if (normalizedQuery.includes(intent)) {
      score += 1
    }
  }

  return score
}

export interface MatchResult {
  entry: KnowledgeEntry
  score: number
  type: 'match' | 'fallback'
}

export function findBestMatch(rawQuery: string): MatchResult {
  const MIN_SCORE = 2

  const normalizedQuery = normalizeQuery(rawQuery)
  const queryTokens = tokenize(normalizedQuery).filter((t) => !STOP_WORDS.has(t))

  let bestScore = 0
  let bestEntry: KnowledgeEntry | null = null

  for (const entry of knowledgeBase) {
    const score = scoreEntry(queryTokens, normalizedQuery, entry)
    if (score > bestScore) {
      bestScore = score
      bestEntry = entry
    }
  }

  if (bestEntry && bestScore >= MIN_SCORE) {
    return { entry: bestEntry, score: bestScore, type: 'match' }
  }

  // Fallback - below confidence threshold
  return {
    entry: {
      id: 'fallback',
      keywords: [],
      intent: [],
      summary: "I may not have full details on that just yet.",
      detailed:
        "I may not have complete details on that topic yet, but our team would be happy to help. Vanspire covers Digital Solutions, ERP Implementation, Hospital Management Systems, Enterprise System Integration, and Cloud Infrastructure. Feel free to ask me about any of these - or reach out directly and we'll get back to you promptly.",
      url: '/contact',
      cta: { label: 'Contact Our Team', href: '/contact' },
    },
    score: 0,
    type: 'fallback',
  }
}

export function formatResponse(result: MatchResult): string {
  return result.entry.detailed
}
