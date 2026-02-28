'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function FutureReady() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="section-pad bg-brand-offwhite overflow-hidden">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

          {/* Left - image */}
          <motion.div
            initial={{ opacity: 0, x: -40, scale: 0.96 }}
            animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-2 lg:order-1"
          >
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
              alt="Designed for expansion - modern architecture symbolizing growth"
              className="w-full h-[380px] md:h-[480px] object-cover"
            />
            {/* Corner accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-brand-black/10" />
          </motion.div>

          {/* Right - content */}
          <div className="order-1 lg:order-2">
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="text-label text-brand-muted mb-5"
            >
              Looking Ahead
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(2rem,4vw,3.5rem)] font-light tracking-[-0.04em] text-brand-black leading-[1.08] mb-8"
            >
              Designed for<br />Expansion
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-5"
            >
              <p className="text-[15px] md:text-[16px] font-light text-brand-muted leading-[1.85]">
                Vanspire is structured as a group brand - enabling the creation of independent
                ventures across multiple industries as opportunities evolve.
              </p>
              <p className="text-[15px] md:text-[16px] font-light text-brand-muted leading-[1.85]">
                New verticals will be introduced only when the market, the moment, and our
                readiness align.
              </p>
              <p className="text-[15px] font-medium text-brand-black pt-2">
                Growth, for us, is deliberate - not rushed.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
