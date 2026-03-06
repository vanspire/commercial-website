'use client'

import { useState } from 'react'
import { SeoLandingPageProps } from './types'
import SectionLabel from '@/components/ui/SectionLabel'
import { Plus, Minus } from 'lucide-react'

export default function FAQVariant({ data }: { data: SeoLandingPageProps['faqs'] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  if (!data || !data.items) return null;

  return (
    <section className="py-24 bg-brand-light relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-border to-transparent opacity-50"></div>
      
      <div className="container mx-auto px-4 md:px-8 max-w-4xl relative z-10">
        <div className="mb-16 text-center">
          <SectionLabel className="mb-6 justify-center">Common Questions</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-brand-black leading-tight">
            {data.title}
          </h2>
        </div>

        <div className="space-y-4">
          {data.items.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div 
                key={index} 
                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen ? 'border-brand-black/20 shadow-md' : 'border-brand-border/60 shadow-sm hover:border-brand-black/20 hover:shadow-md'
                }`}
              >
                <button
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <h3 className="text-lg md:text-xl font-medium text-brand-black pr-8 tracking-tight">
                    {faq.question}
                  </h3>
                  <div className={`shrink-0 w-8 h-8 flex items-center justify-center border rounded-full transition-colors duration-300 ${isOpen ? 'border-brand-black bg-brand-black text-white' : 'border-brand-border text-brand-black'}`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                
                <div 
                  className={`px-6 md:px-8 overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? 'max-h-96 pb-8 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-brand-gray leading-relaxed text-base md:text-lg">
                    {faq.answer}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
