'use client'

import { motion } from 'framer-motion'
import { EnterpriseAppLandingPageProps } from './types'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function EnterpriseCTA({ data }: { data: EnterpriseAppLandingPageProps['conversion'] }) {
  if (!data) return null;

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto bg-brand-black rounded-[2.5rem] p-10 md:p-20 text-center relative overflow-hidden shadow-2xl"
        >
          {/* Internal gradient mask */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-brand-black to-brand-black opacity-60"></div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-medium text-white tracking-tight mb-6 leading-tight max-w-3xl mx-auto">
              {data.title}
            </h2>
            <p className="text-xl md:text-2xl text-white/70 font-light max-w-2xl mx-auto mb-12">
              {data.subtitle}
            </p>
            
            <div className="flex justify-center">
              <Link 
                href={data.ctaLink} 
                className="inline-flex items-center justify-center gap-2 h-16 px-10 bg-white text-brand-black text-lg font-medium hover:scale-[1.02] hover:bg-brand-light transition-all duration-300 rounded-full shadow-xl shadow-white/5 group"
              >
                {data.ctaText}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
