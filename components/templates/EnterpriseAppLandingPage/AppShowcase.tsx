'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { EnterpriseAppLandingPageProps } from './types'
import { Activity, Server, Zap, Users } from 'lucide-react'

export default function AppShowcase({ data }: { data: EnterpriseAppLandingPageProps['showcase'] }) {
  const sectionRef = useRef<HTMLElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })

  // Subtle scroll parallax for the mockup image
  const imageY = useTransform(scrollYProgress, [0, 1], ['10%', '-10%'])

  const metricIcons = [Users, Activity, Zap, Server]

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-brand-black relative overflow-hidden text-white border-t border-white/10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Content Left */}
          <div className="flex-1 w-full lg:max-w-xl z-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-8 leading-tight">
                Architected for Scale.<br/>Built for Reality.
              </h2>
              
              <div className="space-y-6 mb-12">
                {data.features.map((feature, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-white mt-2.5 shrink-0 opacity-70" />
                    <div>
                      <h3 className="text-lg font-medium tracking-wide mb-1 opacity-90">{feature.title}</h3>
                      <p className="text-white/60 font-light leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Visual Right / Metrics */}
          <div className="flex-1 w-full relative">
            <motion.div 
              style={{ y: imageY }}
              className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 aspect-[4/5] sm:aspect-video lg:aspect-square flex items-center justify-center p-8 backdrop-blur-sm"
            >
              {/* Decorative Mockup Abstract Shape */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-20"></div>
              
              {/* Metrics Grid Overlay */}
              <div className="grid grid-cols-2 gap-4 w-full h-full p-4 md:p-8">
                {data.metrics.map((metric, idx) => {
                  const Icon = metricIcons[idx % metricIcons.length]
                  return (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 flex flex-col justify-center gap-3 hover:bg-white/10 transition-colors"
                    >
                      <Icon className="w-6 h-6 text-white/50" />
                      <div>
                        <div className="text-3xl md:text-4xl font-light tracking-tighter mb-1">{metric.value}</div>
                        <div className="text-xs md:text-sm text-white/60 font-medium tracking-widest uppercase">{metric.label}</div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
