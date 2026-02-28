'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'

export default function CTASection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="relative section-pad bg-white overflow-hidden">
      {/* Background image - muted */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2000&q=80"
          alt=""
          className="w-full h-full object-cover opacity-[0.04]"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 container-site">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-label text-brand-muted mb-6"
          >
            Start the Conversation
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(2.2rem,5vw,4.5rem)] font-light tracking-[-0.04em] text-brand-black leading-[1.05] mb-8"
          >
            Let&apos;s Build Something<br />
            <span className="italic text-brand-muted">That Lasts</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-[16px] font-light text-brand-muted max-w-2xl mx-auto mb-14 leading-[1.8]"
          >
            Whether you&apos;re exploring a technology solution, a long-term partnership,
            or a shared vision - Vanspire is built for conversations that matter.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 h-[56px] px-12 bg-brand-black text-white text-[14px] font-medium tracking-wide hover:bg-brand-muted transition-all duration-300"
            >
              Start a Conversation
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
          </motion.div>

          {/* Subtle divider below */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-24 w-full h-px bg-brand-border origin-left"
          />
        </div>
      </div>
    </section>
  )
}
