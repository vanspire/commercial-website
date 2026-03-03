'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export interface Message {
  id: string
  role: 'user' | 'bot'
  text: string
  cta?: { label: string; href: string }
}

interface ChatMessageProps {
  message: Message
  index: number
}

export default function ChatMessage({ message, index }: ChatMessageProps) {
  const isUser = message.role === 'user'

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
      className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}
    >
      <div
        className={`max-w-[82%] ${
          isUser
            ? 'bg-white text-[#0a0a0a] rounded-2xl rounded-br-sm px-4 py-3'
            : 'bg-[#1e1e1e] text-[#e5e5e5] border border-[#5e5e5e] rounded-2xl rounded-bl-sm px-4 py-3'
        }`}
      >
        {/* Message text - render line breaks */}
        {message.text.split('\n\n').map((para, pIdx) => (
          <p
            key={pIdx}
            className={`text-[13.5px] font-light leading-[1.7] ${
              pIdx > 0 ? 'mt-2' : ''
            } ${isUser ? 'text-[#0a0a0a]' : 'text-[#d4d4d4]'}`}
          >
            {para}
          </p>
        ))}

        {/* CTA link for bot messages */}
        {!isUser && message.cta && (
          <Link
            href={message.cta.href}
            className="inline-flex items-center gap-1.5 mt-3 text-[12px] font-medium text-white border-b border-white/20 pb-0.5 hover:border-white transition-colors"
          >
            {message.cta.label} <span>→</span>
          </Link>
        )}
      </div>

    </motion.div>
  )
}
