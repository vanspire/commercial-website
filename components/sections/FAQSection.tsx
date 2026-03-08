'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: "Why is Vanspire considered one of the best software solutions providers in India?",
    answer: "Vanspire engineers enterprise-grade software, ensuring high customizability, security, and exceptional performance. We do not just build apps; we build robust architectures designed to scale rapidly and securely, setting the benchmark for the best website and mobile app development."
  },
  {
    question: "Do you offer complete digital transformation consulting?",
    answer: "Yes. In addition to technical execution like IoT solutions and cloud migration, our strategic consulting arm maps out systemic changes necessary for an organization to thrive digitally. We ensure your technological investments align perfectly with long-term business goals."
  },
  {
    question: "What makes your digital marketing services the best in Kerala?",
    answer: "Our digital marketing goes beyond vanity metrics. As the best digital marketing company in the region, we employ data-driven, conversion-focused strategies that increase market share, drive organic visibility, and guarantee tangible ROI through advanced SEO, performance marketing, and branding."
  },
  {
    question: "What technology stack do you specialize in?",
    answer: "We specialize in modern, scalable technology stacks including Next.js, React, Node.js, enterprise databases, AWS/GCP cloud environments, and advanced IoT connectivity solutions to ensure performance, security, and maintainability."
  }
];

export default function FAQSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section ref={ref} className="section-pad bg-brand-offwhite">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="text-label text-brand-muted mb-5"
            >
              Frequently Asked Questions
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(2rem,4vw,3.5rem)] font-light tracking-[-0.04em] text-brand-black leading-[1.08] mb-6"
            >
              Expertise &<br />Clarity
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-[15px] font-light text-brand-muted leading-[1.85]"
            >
              Understanding our approach to scaling highly effective web development, mobile applications, and long-term tech enterprise solutions.
            </motion.p>
          </div>

          <div className="lg:col-span-7">
            <div className="w-full border-t border-brand-border">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                  className="border-b border-brand-border overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
                  >
                    <h3 className="text-[17px] sm:text-[19px] font-medium text-brand-black pr-8">
                      {faq.question}
                    </h3>
                    <ChevronDown
                      className={`w-5 h-5 text-brand-muted transition-transform duration-300 flex-shrink-0 ${
                        openIndex === i ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {openIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="pb-6 text-[15px] font-light text-brand-muted leading-[1.8]">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
