'use client'

import { motion } from 'framer-motion'
import { EnterpriseAppLandingPageProps } from './types'
import { MapPin } from 'lucide-react'

export default function NationwideCoverage({ data }: { data: EnterpriseAppLandingPageProps['coverage'] }) {
  if (!data) return null;

  return (
    <section className="py-24 md:py-32 bg-brand-light border-y border-brand-border/50 relative overflow-hidden">
      {/* Decorative SVG Map Background Placeholder */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-[120%] opacity-[0.03] pointer-events-none mix-blend-multiply">
        <svg viewBox="0 0 100 100" className="w-full h-full text-brand-black" fill="currentColor">
          <circle cx="50" cy="50" r="40" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-medium tracking-tight text-brand-black leading-tight mb-6"
            >
              {data.title}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-brand-gray leading-relaxed font-light"
            >
              {data.description}
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {data.cities.map((city, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + (idx * 0.05) }}
              className="bg-white p-6 rounded-2xl border border-brand-border/60 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center text-center group"
            >
              <div className="w-10 h-10 rounded-full bg-brand-light flex items-center justify-center mb-3 group-hover:bg-brand-black transition-colors duration-300">
                 <MapPin className="w-5 h-5 text-brand-gray group-hover:text-white transition-colors duration-300" />
              </div>
              <span className="font-medium text-brand-black tracking-tight">{city}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
