'use client'

import { motion } from 'framer-motion'
import { EnterpriseAppLandingPageProps } from './types'
import { TrendingUp, PieChart, Shield, Zap } from 'lucide-react'

export default function IndustrySolutions({ data }: { data: EnterpriseAppLandingPageProps['solutions'] }) {
  if (!data) return null;

  const outcomeIcons = [TrendingUp, PieChart, Zap, Shield]

  return (
    <section className="py-24 md:py-32 bg-white relative">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-5xl font-medium tracking-tight text-brand-black mb-6 leading-tight"
          >
            {data.title}
          </motion.h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Business Outcomes (Left) */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-xl font-medium tracking-wide uppercase text-brand-gray mb-8">Business Outcomes</h3>
            <div className="space-y-6 md:space-y-8">
              {data.outcomes.map((outcome, idx) => {
                const Icon = outcomeIcons[idx % outcomeIcons.length]
                return (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-6 items-start"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-brand-light flex items-center justify-center shrink-0 border border-brand-border/60 shadow-sm mt-1">
                      <Icon className="w-5 h-5 text-brand-black" />
                    </div>
                    <div>
                      <h4 className="text-xl font-medium text-brand-black mb-2 tracking-tight">{outcome.title}</h4>
                      <p className="text-brand-gray leading-relaxed">{outcome.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Industry Expertise (Right) */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-xl font-medium tracking-wide uppercase text-brand-gray mb-8">Industry Expertise</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {data.industries.map((industry, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (idx * 0.1) }}
                  className="bg-brand-light/30 border border-brand-border/60 p-6 rounded-2xl hover:bg-white hover:shadow-lg hover:border-brand-black/20 hover:-translate-y-1 transition-all duration-300 group"
                >
                  <h4 className="font-medium text-brand-black text-lg mb-2 tracking-tight group-hover:text-brand-black">{industry.name}</h4>
                  <p className="text-sm text-brand-gray/80 leading-relaxed font-light">{industry.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
