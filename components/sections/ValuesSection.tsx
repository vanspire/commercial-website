'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const principles = [
  'Long-term thinking',
  'Systems over shortcuts',
  'Design with intent',
  'Scalable foundations',
  'Responsible growth',
]

export default function ValuesSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="section-pad bg-[#060608] text-white overflow-hidden">
      <div className="container-site">

        {/* Wide header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mb-20"
        >
          <p className="text-label text-white/30 mb-5">Principles</p>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-light tracking-[-0.04em] text-white leading-[1.08]">
            Principles That Guide<br />Every Vanspire Venture
          </h2>
        </motion.div>

        {/* Full-width image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.02 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative mb-20 overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80"
            alt="Team working with shared principles"
            className="w-full h-[300px] md:h-[420px] object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#060608] via-transparent to-[#060608]" />
        </motion.div>

        {/* Principles list - full-width horizontal on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-white/5">
          {principles.map((principle, i) => (
            <motion.div
              key={principle}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-[#060608] px-8 py-10 overflow-hidden"
            >
              {/* Hover fill */}
              <div className="absolute inset-0 bg-white/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <span className="text-label text-white/20 block mb-4">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="text-[16px] md:text-[17px] font-light text-white leading-snug tracking-tight">
                {principle}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Constant note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-12 text-[13px] font-light text-white/25 text-center italic"
        >
          These principles remain constant - regardless of industry.
        </motion.p>
      </div>
    </section>
  )
}
