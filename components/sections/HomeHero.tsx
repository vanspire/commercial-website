// Homepage Hero section - full viewport, black overlay, Vanspire brand copy
'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import MotionWrapper from '@/components/ui/MotionWrapper'

export default function HomeHero() {
  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden bg-brand-black">
      {/* Background pattern - subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end container-site pb-20 md:pb-24 lg:pb-28">
        <MotionWrapper delay={0.1}>
          <p className="text-label text-white/40 mb-6">
            Vanspire - A Brand Group
          </p>
        </MotionWrapper>

        <MotionWrapper delay={0.2}>
          <h1 className="text-display-xl text-white max-w-4xl mb-8 !font-light">
            Building ventures<br />
            for the future.
          </h1>
        </MotionWrapper>

        <MotionWrapper delay={0.3}>
          <p className="text-body-lg text-white/50 max-w-xl mb-10 font-light">
            Vanspire is a future-focused brand group. We build technology-driven
            ventures structured for long-term, compounding growth.
          </p>
        </MotionWrapper>

        <MotionWrapper delay={0.4} className="flex flex-wrap gap-4">
          <Link
            href="/ventures"
            className="inline-flex items-center h-[50px] px-8 bg-white text-brand-black text-[14px] font-medium hover:bg-white/90 transition-all duration-300"
          >
            Explore Our Ventures
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center h-[50px] px-8 border border-white/30 text-white text-[14px] font-light hover:border-white/70 transition-all duration-300"
          >
            Who We Are
          </Link>
        </MotionWrapper>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <div className="w-px h-12 bg-white animate-pulse" />
      </div>
    </section>
  )
}
