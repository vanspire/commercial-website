'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const capabilities = [
  {
    icon: '⬡',
    title: 'Software & Web Platforms',
    description: 'Scalable digital products built for performance and longevity.',
  },
  {
    icon: '⬡',
    title: 'Application Development',
    description: 'Custom applications designed around real business workflows.',
  },
  {
    icon: '⬡',
    title: 'Cloud & System Architecture',
    description: 'Secure, scalable infrastructure built for growth.',
  },
  {
    icon: '⬡',
    title: 'IoT & Smart Solutions',
    description: 'Connected systems bridging physical and digital environments.',
  },
  {
    icon: '⬡',
    title: 'Digital Transformation',
    description: 'Modernizing operations through technology-led thinking.',
  },
]

export default function Capabilities() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="section-pad bg-brand-offwhite overflow-hidden">
      <div className="container-site">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-label text-brand-muted mb-4">Capabilities</p>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-light tracking-[-0.04em] text-brand-black leading-[1.08]">
              What We<br />Build Today
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <img
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=900&q=80"
              alt="Technology capabilities"
              className="w-full h-[200px] object-cover"
            />
          </motion.div>
        </div>

        {/* Capabilities grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-brand-border">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group bg-brand-offwhite p-10 md:p-12 hover:bg-white transition-colors duration-300"
            >
              {/* Number */}
              <span className="text-label text-brand-border block mb-6">
                {String(i + 1).padStart(2, '0')}
              </span>

              <h3 className="text-[18px] md:text-[20px] font-light tracking-tight text-brand-black mb-3 group-hover:text-brand-black transition-colors">
                {cap.title}
              </h3>
              <p className="text-[14px] font-light text-brand-muted leading-relaxed">
                {cap.description}
              </p>

              {/* Hover indicator */}
              <div className="mt-8 w-0 group-hover:w-8 h-px bg-brand-black transition-all duration-500" />
            </motion.div>
          ))}

          {/* 6th placeholder - "More coming" */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.58 }}
            className="bg-[#060608] p-10 md:p-12 flex flex-col justify-end"
          >
            <p className="text-[11px] uppercase tracking-widest text-white/30 mb-4">
              And growing
            </p>
            <h3 className="text-[20px] font-light text-white/60 leading-snug tracking-tight">
              Our capabilities expand as the market demands.
            </h3>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
