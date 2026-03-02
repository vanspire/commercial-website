'use client'

import { motion } from 'framer-motion'
import { EnterpriseAppLandingPageProps } from './types'
import { CheckCircle } from 'lucide-react'

export default function SecurityCompliance({ data }: { data: EnterpriseAppLandingPageProps['security'] }) {
  if (!data) return null;

  return (
    <section className="py-24 md:py-32 bg-brand-black text-white relative overflow-hidden">
      {/* Abstract dark tech background */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 w-full [mask-image:linear-gradient(to_bottom,transparent,white)] z-0 opacity-20 pointer-events-none">
         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="flex-1">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl lg:text-5xl font-medium tracking-tight mb-6 leading-tight"
            >
              {data.title}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-white/70 font-light leading-relaxed mb-10 max-w-xl"
            >
              {data.description}
            </motion.p>
          </div>

          <div className="flex-1 w-full bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-md shadow-2xl">
            <div className="space-y-6">
              {data.items.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-4 pb-6 border-b border-white/10 last:border-0 last:pb-0 group hover:translate-x-1 transition-transform duration-300"
                >
                  <CheckCircle className="w-6 h-6 text-white/40 group-hover:text-white transition-colors duration-300 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xl font-medium tracking-tight mb-2 opacity-90">{item.title}</h4>
                    <span className="inline-block px-3 py-1 bg-white/5 text-white/60 text-xs font-semibold tracking-widest uppercase rounded">
                      {item.highlight}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
