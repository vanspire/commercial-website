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

  function handleSend(text?: string) {
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

    // Simulate a short "thinking" delay - feels natural, not instant
    const delay = 800 + Math.random() * 600
    setTimeout(() => {
      const result = findBestMatch(query)

      const botMsg: Message = {
        id: generateId(),
        role: 'bot',
        text: result.entry.detailed,
        cta: result.entry.cta,
      }
      setMessages((prev) => [...prev, botMsg])
      setIsTyping(false)
    }, delay)
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
      <div className="flex-1 overflow-y-auto overscroll-contain">
        {/* Messages */}
        <div className="px-4 pt-4 pb-2 flex flex-col gap-3">
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
          <div ref={bottomRef} />
        </div>

        {/* Suggested questions */}
        <AnimatePresence>
          {showSuggested && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <SuggestedQuestions onSelect={handleSuggestedSelect} />
            </motion.div>
          )}
        </AnimatePresence>
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
