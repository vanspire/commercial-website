'use client'

import { motion } from 'framer-motion'
import { EnterpriseAppLandingPageProps } from './types'

export default function AgileTimeline({ data }: { data: EnterpriseAppLandingPageProps['timeline'] }) {
  if (!data) return null;

  return (
    <section className="py-24 md:py-32 bg-brand-light border-y border-brand-border/50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-medium tracking-tight text-brand-black"
          >
            {data.title}
          </motion.h2>
        </div>

        <div className="relative border-l-2 border-brand-border/80 ml-4 md:mx-auto md:border-l-0">
          {data.steps.map((step, idx) => {
            const isEven = idx % 2 === 0
            return (
              <div key={idx} className="mb-12 md:mb-0 relative flex items-center justify-between w-full md:even:flex-row-reverse">
                
                {/* Center Line for Desktop */}
                <div className="hidden md:block absolute left-1/2 bottom-0 top-0 w-px bg-brand-border/80 -translate-x-1/2"></div>
                
                {/* Node icon */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="absolute -left-[9px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-brand-black ring-4 ring-white z-10"
                ></motion.div>
                
                {/* Desktop Empty Spacer */}
                <div className="hidden md:block w-[45%]"></div>
                
                {/* Content Card */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -30 : 30, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="w-full pl-8 md:pl-0 md:w-[45%] md:py-8"
                >
                  <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-brand-border/60 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <span className="text-xs font-bold tracking-widest uppercase text-brand-gray/60 mb-2 block">
                      Phase {idx + 1}: {step.phase}
                    </span>
                    <h3 className="text-xl md:text-2xl font-medium tracking-tight text-brand-black mb-3">
                      {step.title}
                    </h3>
                    <p className="text-brand-gray text-base md:text-lg leading-relaxed font-light">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
