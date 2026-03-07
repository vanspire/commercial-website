import { AI_CONTEXT } from './lib/aiContext'
import Groq from 'groq-sdk'

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
})

async function test() {
  const systemPrompt = `
You are Vanspire's AI assistant.

Your purpose is to help visitors understand Vanspire's services, solutions, and products.
You must only answer using the knowledge provided below.

If a question is unrelated to Vanspire or its services, politely guide the user back to topics related to:
- Digital Solutions
- ERP Implementation
- Hospital Management System
- Enterprise System Integration
- Cloud Infrastructure

Response style:
- Clear and professional
- Short paragraphs
- Avoid unnecessary technical jargon
- Suggest relevant Vanspire services where appropriate
- Format links when helpful (e.g. [Vanspire](https://vanspire.in/about), [Contact](https://vanspire.in/contact), [Services](https://vanspire.in/services)) using standard markdown text. Use absolute URLs starting with https://vanspire.in.

Knowledge Base:
${JSON.stringify(AI_CONTEXT, null, 2)}
`

  const completion = await groq.chat.completions.create({
    model: 'llama-3.1-8b-instant',
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: 'hy' },
    ],
    temperature: 0.4,
    max_tokens: 1024,
  })

  console.log(completion.choices[0]?.message?.content)
}

test()
