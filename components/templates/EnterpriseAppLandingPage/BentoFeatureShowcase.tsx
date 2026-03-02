'use client'

import { motion } from 'framer-motion'
import { EnterpriseAppLandingPageProps } from './types'
import { CheckCircle2 } from 'lucide-react'

export default function BentoFeatureShowcase({ data }: { data: EnterpriseAppLandingPageProps['bentoFeatures'] }) {
  if (!data) return null;

  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="mb-16 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-5xl font-medium tracking-tight text-brand-black leading-tight max-w-2xl"
          >
            {data.title}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {data.items.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`group bg-brand-light/40 overflow-hidden rounded-3xl p-8 md:p-12 border border-brand-border/60 hover:shadow-xl hover:border-brand-black/10 transition-all duration-500 relative flex flex-col justify-end min-h-[300px] md:min-h-[400px] ${
                item.span === 2 ? 'md:col-span-2' : 'md:col-span-1'
              }`}
            >
              {/* Abstract decorative background tailored for enterprise "Bento" look */}
              <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-white rounded-bl-[100px] border-b border-l border-brand-border/50 opacity-40 group-hover:scale-105 transition-transform duration-700 ease-out origin-top-right"></div>
              
              <div className="relative z-10 max-w-xl">
                <CheckCircle2 className="w-8 h-8 text-brand-black mb-6 opacity-30 group-hover:opacity-100 transition-opacity duration-300" />
                <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-brand-black mb-4">
                  {item.title}
                </h3>
                <p className="text-lg text-brand-gray leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
