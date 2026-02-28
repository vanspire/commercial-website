'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import MotionWrapper from '@/components/ui/MotionWrapper'

export default function HomeHero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section ref={ref} className="relative w-full h-screen min-h-[700px] overflow-hidden bg-[#060608]">
      {/* Parallax background image */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2070&q=80"
          alt=""
          className="w-full h-full object-cover opacity-30"
          aria-hidden="true"
        />
      </motion.div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#060608]/60 via-[#060608]/40 to-[#060608]" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#060608]/80 via-transparent to-transparent" />

      {/* Subtle animated grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.06 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 z-[2]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-10 h-full flex flex-col justify-center container-site">
        <MotionWrapper delay={0.1}>
          <div className="inline-flex items-center gap-3 ml-2 mb-5">
            <div className="w-8 h-px bg-white/40" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-white/40 font-light">
              Vanspire - A Brand Group
            </span>
          </div>
        </MotionWrapper>

        <MotionWrapper delay={0.2}>
          <h1 className="text-[clamp(2.8rem,7vw,6.1rem)] font-light tracking-[-0.04em] text-white leading-[1.02] mb-6 max-w-5xl">
            Building the Foundations<br />
            <em className="not-italic text-white/50">for Tomorrow's</em><br />
            Industries
          </h1>
        </MotionWrapper>

        <MotionWrapper delay={0.35}>
          <p className="text-[clamp(1rem,1.6vw,1rem)] font-light text-white/50 max-w-2xl mb-10 leading-relaxed">
            Vanspire is a future-focused brand group creating scalable systems, solutions,
            and ventures - starting with technology and expanding with purpose.
          </p>
        </MotionWrapper>

        <MotionWrapper delay={0.45} className="flex flex-wrap gap-4">
          <Link
            href="/ventures/technology"
            className="group inline-flex items-center gap-3 h-[54px] px-9 bg-white text-[#060608] text-[14px] font-medium tracking-wide hover:bg-white/90 transition-all duration-300"
          >
            Explore Our Work
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center h-[54px] px-9 border border-white/20 text-white text-[14px] font-light tracking-wide hover:border-white/60 transition-all duration-300"
          >
            Plan With Vanspire
          </Link>
        </MotionWrapper>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <div className="w-px h-16 bg-gradient-to-b from-white/30 to-transparent" />
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/20">Scroll</span>
      </motion.div>
    </section>
  )
}
