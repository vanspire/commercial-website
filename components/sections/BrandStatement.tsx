'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function BrandStatement() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="section-pad bg-white overflow-hidden">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* Left - large statement */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-label text-brand-muted mb-5">What Vanspire Is</p>
              <h2 className="text-[clamp(2rem,4.5vw,3.8rem)] font-light tracking-[-0.04em] text-brand-black leading-[1.08] mb-0">
                One Brand.{' '}
                <span className="italic text-brand-muted">Built to Grow</span>{' '}
                Across Sectors.
              </h2>
            </motion.div>
          </div>

          {/* Right - content */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-5"
            >
              <p className="text-[16px] md:text-[17px] font-light text-brand-muted leading-[1.8]">
                Vanspire is designed as a long-term brand platform - not a single-service company.
                We build focused ventures that solve real problems today, while laying the groundwork
                for expansion into new industries tomorrow.
              </p>
              <div className="space-y-3 pt-4 border-t border-brand-border">
                {[
                  'Every step we take is intentional.',
                  'Every venture is built to scale.',
                ].map((line, i) => (
                  <motion.div
                    key={line}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + i * 0.12, ease: 'easeOut' }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-1 h-1 rounded-full bg-brand-black mt-[10px] flex-shrink-0" />
                    <p className="text-[15px] font-medium text-brand-black">{line}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Wide image strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80"
            alt="Vanspire - Modern workspace and vision"
            className="w-full h-[280px] md:h-[380px] object-cover"
          />
        </motion.div>
      </div>
    </section>
  )
}
