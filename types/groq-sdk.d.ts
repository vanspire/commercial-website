declare module 'groq-sdk' {
  export default class Groq {
    constructor(options: { apiKey?: string; environment?: string; timeout?: number; maxRetries?: number })
    chat: {
      completions: {
        create(params: {
          model: string
          messages: Array<{ role: 'system' | 'user' | 'assistant'; content: string }>
          temperature?: number
          max_tokens?: number
          top_p?: number
          stream?: boolean
          stop?: string | string[]
        }): Promise<{
          id: string
          object: string
          created: number
          model: string
          choices: Array<{
            index: number
            message?: { role: string; content: string }
            finish_reason: string
          }>
          usage?: { prompt_tokens: number; completion_tokens: number; total_tokens: number }
        }>
      }
    }
  }
}
