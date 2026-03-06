'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import FadeInView from '@/components/ui/FadeInView'

interface ServiceCTAProps {
  headline?: string
  subtext?: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
}

export default function ServiceCTA({
  headline = 'Ready to get started?',
  subtext = 'Let\'s discuss how we can help your organisation move forward with clarity and confidence.',
  primaryLabel = 'Start a Conversation',
  primaryHref = '/contact',
  secondaryLabel = 'Explore All Services',
  secondaryHref = '/services',
}: ServiceCTAProps) {
  return (
    <section className="section-pad bg-brand-black text-white overflow-hidden relative">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      <div className="container-site relative z-10">
        <FadeInView>
          <p className="text-label text-white/30 mb-5">Next Steps</p>
          <h2 className="text-display-md text-white mb-6 max-w-2xl">{headline}</h2>
          <p className="text-[16px] font-light text-white/50 leading-[1.8] max-w-xl mb-10">{subtext}</p>
          <div className="flex flex-wrap gap-4">
            <motion.div whileHover={{ scale: 0.98 }} whileTap={{ scale: 0.96 }}>
              <Link
                href={primaryHref}
                className="inline-flex items-center gap-3 h-[52px] px-8 bg-white text-brand-black text-[14px] font-medium hover:bg-white/90 transition-all duration-300"
              >
                {primaryLabel}
                <span>→</span>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 0.98 }} whileTap={{ scale: 0.96 }}>
              <Link
                href={secondaryHref}
                className="inline-flex items-center h-[52px] px-8 border border-white/20 text-white text-[14px] font-light hover:border-white/60 transition-all duration-300"
              >
                {secondaryLabel}
              </Link>
            </motion.div>
          </div>
        </FadeInView>
      </div>
    </section>
  )
}
