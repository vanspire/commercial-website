'use client'

import { motion } from 'framer-motion'
import { EnterpriseAppLandingPageProps } from './types'

export default function TechStack({ data }: { data: EnterpriseAppLandingPageProps['techStack'] }) {
  if (!data) return null;

  return (
    <section className="py-24 md:py-32 bg-white border-y border-brand-border/50 relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-5xl font-medium tracking-tight text-brand-black leading-tight"
          >
            {data.title}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {data.categories.map((category, catIdx) => (
            <motion.div 
              key={catIdx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.1, duration: 0.5 }}
              className="flex flex-col"
            >
              <h3 className="text-sm font-semibold tracking-widest uppercase text-brand-gray mb-6 border-b border-brand-border/60 pb-4">
                {category.name}
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {category.technologies.map((tech, techIdx) => (
                  <div 
                    key={techIdx} 
                    className="group relative flex flex-col items-center justify-center p-6 bg-brand-light/30 rounded-2xl border border-brand-border/50 hover:bg-white hover:border-brand-black/20 hover:shadow-lg transition-all duration-300"
                  >
                    {/* Inline SVG Placeholder - In reality, we'd pass SVG tags or img paths */}
                    <div className="w-10 h-10 mb-3 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-brand-black/5" />
                    </div>
                    
                    <span className="text-sm font-medium text-brand-black">{tech.name}</span>
                    
                    {/* Tooltip */}
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-2 bg-brand-black text-white text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-20 pointer-events-none">
                      {tech.tooltip}
                      {/* Tooltip arrow */}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-brand-black" />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
