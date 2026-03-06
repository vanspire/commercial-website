'use client'

import { motion } from 'framer-motion'

const SUGGESTED = [
  { id: 'q1', label: 'Tell me about Digital Solutions' },
  { id: 'q2', label: 'What is your Hospital Management System?' },
  { id: 'q3', label: 'Do you offer ERP implementation?' },
  { id: 'q4', label: 'What is Enterprise System Integration?' },
  { id: 'q5', label: 'How do I work with Vanspire?' },
]

interface SuggestedQuestionsProps {
  onSelect: (question: string) => void
}

export default function SuggestedQuestions({ onSelect }: SuggestedQuestionsProps) {
  return (
    <div className="px-4 pb-4 pt-1">
      <p className="text-[10.5px] uppercase tracking-widest text-[#ffffff]/50 mb-3">
        Suggested questions
      </p>
      <div className="flex flex-col gap-1.5">
        {SUGGESTED.map((q, i) => (
          <motion.button
            key={q.id}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.15 + i * 0.07, ease: 'easeOut' }}
            onClick={() => onSelect(q.label)}
            className="text-left text-[13px] font-light text-[#aaaaaa] border border-[#2a2a2a] px-3.5 py-2.5 rounded-lg hover:border-[#555555] hover:bg-[#1e1e1e] hover:text-white transition-all duration-200 leading-[1.4]"
          >
            {q.label}
          </motion.button>
        ))}
      </div>
    </div>
  )
}
