'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ChatWindow from './ChatWindow'

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Chat window */}
      <div
        className="fixed bottom-[88px] right-5 z-[9998]"
        style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
        aria-live="polite"
      >
        <AnimatePresence>
          {isOpen && (
            <ChatWindow key="chat-window" onClose={() => setIsOpen(false)} />
          )}
        </AnimatePresence>
      </div>

      {/* Floating button */}
      <div className="fixed bottom-5 right-5 z-[9999]">
        <motion.button
          onClick={() => setIsOpen((prev) => !prev)}
          animate={isOpen ? {} : {
            boxShadow: [
              '0 0 0 0px rgba(10,10,10,0.15)',
              '0 0 0 8px rgba(10,10,10,0.04)',
              '0 0 0 0px rgba(10,10,10,0.0)',
            ],
          }}
          transition={isOpen ? {} : {
            duration: 2.8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.93 }}
          aria-label={isOpen ? 'Close assistant' : 'Open Vanspire assistant'}
          aria-expanded={isOpen}
          className="w-[52px] h-[52px] rounded-full bg-[#0a0a0a] text-white shadow-lg shadow-black/20 flex items-center justify-center transition-colors"
        >
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.span
                key="close"
                initial={{ opacity: 0, rotate: -45 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 45 }}
                transition={{ duration: 0.2 }}
              >
                <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
                  <path d="M3 3L13 13M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </motion.span>
            ) : (
              <motion.span
                key="open"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.7 }}
                transition={{ duration: 0.2 }}
              >
                {/* Chat bubble icon */}
                <svg viewBox="0 0 20 20" fill="none" className="w-[18px] h-[18px]">
                  <path
                    d="M2 5.5A2.5 2.5 0 014.5 3h11A2.5 2.5 0 0118 5.5v6A2.5 2.5 0 0115.5 14H11l-3 3v-3H4.5A2.5 2.5 0 012 11.5v-6z"
                    fill="white"
                    fillOpacity="0.9"
                  />
                </svg>
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Tooltip hint - disappears on first open */}
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 8, transition: { duration: 0.15 } }}
              transition={{ delay: 2, duration: 0.4 }}
              className="absolute right-full mr-3 top-1/2 -translate-y-1/2 pointer-events-none"
            >
              <span className="whitespace-nowrap bg-[#0a0a0a] text-white text-[11px] font-light px-3 py-1.5 rounded-lg shadow-md">
                Ask Eon
                <span className="absolute right-[-5px] top-1/2 -translate-y-1/2 border-l-[5px] border-l-[#0a0a0a] border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent" />
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}
