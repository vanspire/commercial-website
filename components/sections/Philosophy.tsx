'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const alignments = [
  {
    number: '01',
    title: 'A clear problem worth solving',
    description: 'We don\'t build for the sake of building. Every venture starts with a real, validated problem.',
  },
  {
    number: '02',
    title: 'The expertise to solve it well',
    description: 'We only enter spaces where we can genuinely deliver - not just participate.',
  },
  {
    number: '03',
    title: 'The foundation to sustain it responsibly',
    description: 'Long-term thinking means building with the infrastructure to last, not just to launch.',
  },
]

export default function Philosophy() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="section-pad bg-white overflow-hidden">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

          {/* Left - sticky-ish block */}
          <div className="lg:col-span-5">
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="text-label text-brand-muted mb-5"
            >
              Our Philosophy
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(2rem,4vw,3.5rem)] font-light tracking-[-0.04em] text-brand-black leading-[1.08] mb-8"
            >
              Our Approach<br />to Building
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-4"
            >
              <p className="text-[15px] font-light text-brand-muted leading-[1.85]">
                We don&apos;t chase trends. We study timing, capability, and long-term value.
              </p>
              <p className="text-[15px] font-light text-brand-muted leading-[1.85]">
                Vanspire ventures are created only when three things align:
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10"
            >
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80"
                alt="Strategic thinking"
                className="w-full h-[220px] object-cover"
              />
            </motion.div>
          </div>

          {/* Right - alignment points */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="space-y-0">
              {alignments.map((item, i) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, x: 40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.2 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="group py-10 border-b border-brand-border first:border-t"
                >
                  <div className="flex items-start gap-8">
                    <span className="text-label text-brand-border w-8 flex-shrink-0 mt-1">
                      {item.number}
                    </span>
                    <div>
                      <h3 className="text-[19px] md:text-[22px] font-light tracking-tight text-brand-black mb-3 group-hover:text-brand-black/70 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-[14px] font-light text-brand-muted leading-relaxed max-w-lg">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="mt-10 text-[14px] italic font-light text-brand-muted"
            >
              This philosophy allows us to grow without dilution - and scale without compromise.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}
