import Groq from 'groq-sdk'
import { AI_CONTEXT } from '@/lib/aiContext'

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
})

export async function POST(req: Request) {
  try {
    const { message } = await req.json()

    if (!message) {
      return Response.json({ error: 'Message is required' }, { status: 400 })
    }

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
        { role: 'user', content: message },
      ],
      temperature: 0.4,
      max_tokens: 1024,
    })

    const reply = completion.choices[0]?.message?.content || "I'm sorry, I encountered an issue generating a response. Please try again or reach out to us at hello@vanspire.in."

    return Response.json({ reply })
  } catch (error) {
    console.error('Groq AI API Error:', error)
    return Response.json(
      { reply: "I'm currently experiencing technical difficulties connecting to my semantic core. Please try again in a moment." },
      { status: 500 }
    )
  }
}
