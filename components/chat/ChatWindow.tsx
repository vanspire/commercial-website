'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import SuggestedQuestions from './SuggestedQuestions'
import ChatMessage, { Message } from './ChatMessage'
import TypingIndicator from './TypingIndicator'
import { findBestMatch } from '@/lib/matchEngine'

const GREETING: Message = {
  id: 'greeting',
  role: 'bot',
  text: "Hello. I'm Eon, Vanspire's enterprise brain - I can help you understand our services, technology platforms, and how we work. What would you like to know?",
}

function generateId() {
  return Math.random().toString(36).slice(2, 9)
}

function generateFollowUpQuestions(lastMessage: string) {
  const text = lastMessage.toLowerCase()
  if (text.includes('hms') || text.includes('hospital')) {
    return [
      { id: 'f1', label: 'What features does the HMS include?' },
      { id: 'f2', label: 'How does HMS implementation work?' },
      { id: 'f3', label: 'Can it integrate with existing systems?' },
    ]
  }
  if (text.includes('erp') || text.includes('sap') || text.includes('odoo')) {
    return [
      { id: 'f1', label: 'What ERP systems do you implement?' },
      { id: 'f2', label: 'How long does ERP deployment take?' },
      { id: 'f3', label: 'Do you offer ERP support?' },
    ]
  }
  if (text.includes('digital solutions') || text.includes('web')) {
    return [
      { id: 'f1', label: 'Do you build custom web platforms?' },
      { id: 'f2', label: 'What tech stack do you use?' },
      { id: 'f3', label: 'Do you build mobile apps?' },
    ]
  }
  if (text.includes('cloud') || text.includes('aws')) {
    return [
      { id: 'f1', label: 'Do you migrate legacy systems to cloud?' },
      { id: 'f2', label: 'How do you ensure cloud security?' },
      { id: 'f3', label: 'Do you offer managed infrastructure?' },
    ]
  }
  return [
    { id: 'f1', label: 'How much does a project cost?' },
    { id: 'f2', label: 'How can I contact Vanspire?' },
    { id: 'f3', label: 'What industries do you work with?' },
  ]
}

interface ChatWindowProps {
  onClose: () => void
}

export default function ChatWindow({ onClose }: ChatWindowProps) {
  const [messages, setMessages] = useState<Message[]>([GREETING])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [showSuggested, setShowSuggested] = useState(true)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  useEffect(() => {
    // Small delay so animation completes before focus
    const t = setTimeout(() => inputRef.current?.focus(), 400)
    return () => clearTimeout(t)
  }, [])

  async function handleSend(text?: string) {
    const query = (text ?? input).trim()
    if (!query || isTyping) return

    setInput('')
    setShowSuggested(false)

    const userMsg: Message = {
      id: generateId(),
      role: 'user',
      text: query,
    }
    setMessages((prev) => [...prev, userMsg])
    setIsTyping(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: query }),
      })

      if (!res.ok) throw new Error('API Request Failed')

      const data = await res.json()

      const botMsg: Message = {
        id: generateId(),
        role: 'bot',
        text: data.reply,
      }
      setMessages((prev) => [...prev, botMsg])
    } catch (error) {
      console.error('Chat Error:', error)
      const errorMsg: Message = {
        id: generateId(),
        role: 'bot',
        text: 'I encountered an issue connecting to my semantic core. Please check your internet connection and verify that the Groq API key is valid in your `.env.local` file. If the issue persists, feel free to [contact our team](https://vanspire.in/contact).',
      }
      setMessages((prev) => [...prev, errorMsg])
    } finally {
      setIsTyping(false)
    }
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  function handleSuggestedSelect(question: string) {
    handleSend(question)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 16, scale: 0.97 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col bg-[#111111] border border-[#2a2a2a] shadow-2xl shadow-black/40 rounded-2xl overflow-hidden"
      style={{ width: 'min(380px, calc(100vw - 32px))', height: 'min(560px, calc(100dvh - 100px))' }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-[#2a2a2a] flex-shrink-0 bg-[#111111]">
        <div className="flex items-center gap-3">
          {/* Status dot */}
          <div className="relative flex-shrink-0">
            <div className="w-8.5 h-8.5 rounded-full overflow-hidden bg-[#1e1e1e] flex items-center justify-center border border-[#3d3d3d]">
              <Image src="/brain.webp" alt="Eon Avatar" width={32} height={32} className="w-full h-full object-cover" />
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 block w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#111111]" />
          </div>
          <div>
            <p className="text-[13px] font-medium text-white leading-tight">Eon</p>
            <p className="text-[11px] text-[#888888] leading-tight">Our Enterprise Brain</p>
          </div>
        </div>
        <button
          onClick={onClose}
          aria-label="Close chat"
          className="w-8 h-8 flex items-center justify-center rounded-full text-[#888888] hover:bg-[#2a2a2a] hover:text-white transition-colors"
        >
          <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
            <path d="M3 3L13 13M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Body - scrollable */}
      <div className="flex-1 flex flex-col overflow-y-auto overscroll-contain px-4 pt-4 pb-2 gap-3">
        {/* Messages */}
        {messages.map((msg, i) => (
          <ChatMessage key={msg.id} message={msg} index={i} />
        ))}

        {/* Typing indicator */}
        <AnimatePresence>
          {isTyping && (
            <motion.div
              key="typing"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex justify-start"
            >
              <div className="bg-[#1e1e1e] border border-[#2a2a2a] rounded-2xl rounded-bl-sm">
                <TypingIndicator />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Suggested questions */}
        <AnimatePresence>
          {showSuggested && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="-mx-4"
            >
              <SuggestedQuestions 
                onSelect={handleSuggestedSelect} 
                questions={
                  messages.length > 1
                    ? generateFollowUpQuestions(messages[messages.length - 1].text)
                    : undefined
                }
              />
            </motion.div>
          )}
        </AnimatePresence>

        <div ref={bottomRef} className="h-1 flex-shrink-0" />
      </div>

      {/* Input bar */}
      <div className="flex-shrink-0 border-t border-[#2a2a2a] px-4 py-3 bg-[#111111]">
        <div className="flex items-center gap-2 bg-[#1a1a1a] rounded-xl px-4 py-2.5 border border-[#2a2a2a] focus-within:border-[#555555] transition-colors">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about our services…"
            className="flex-1 bg-transparent text-[13.5px] font-light text-white placeholder:text-[#ffffff]/80 outline-none min-w-0"
            aria-label="Chat input"
          />
          <motion.button
            onClick={() => handleSend()}
            disabled={!input.trim() || isTyping}
            whileTap={{ scale: 0.9 }}
            aria-label="Send message"
            className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-white text-[#0a0a0a] disabled:opacity-20 transition-opacity"
          >
             <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.button>
        </div>
        <p className="text-[10px] text-center text-[#ffffff]/40 mt-2 tracking-wide">
          Eon · Our Enterprise Brain
        </p>
      </div>
    </motion.div>
  )
}
