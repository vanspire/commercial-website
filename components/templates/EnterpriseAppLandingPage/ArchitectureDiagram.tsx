'use client'

import { motion } from 'framer-motion'
import { EnterpriseAppLandingPageProps } from './types'
import { Server, Database, Cloud, Smartphone, ArrowRight } from 'lucide-react'

export default function ArchitectureDiagram({ data }: { data: EnterpriseAppLandingPageProps['architecture'] }) {
  if (!data) return null;

  return (
    <section className="py-24 md:py-32 bg-brand-light relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-5xl font-medium tracking-tight text-brand-black leading-tight mb-6"
          >
            {data.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-brand-gray font-light"
          >
            {data.description}
          </motion.p>
        </div>

        {/* Visual Architecture Diagram */}
        <div className="max-w-5xl mx-auto mb-24 relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
            
            {/* Frontend */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full md:w-1/4 bg-white p-6 rounded-2xl border border-brand-border/60 shadow-lg relative z-10 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-brand-black flex items-center justify-center text-white mb-4 shadow-xl">
                <Smartphone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-medium text-brand-black tracking-tight mb-2">Native Client</h3>
              <p className="text-sm text-brand-gray">iOS & Android</p>
            </motion.div>

            {/* Connecting Arrow 1 */}
            <div className="hidden md:flex flex-1 items-center justify-center relative z-0">
              <div className="h-0.5 w-full bg-gradient-to-r from-brand-border to-brand-black"></div>
              <ArrowRight className="absolute text-brand-black w-6 h-6 right-2 -mt-3 bg-brand-light" />
              <ArrowRight className="absolute text-brand-border w-6 h-6 left-2 mt-3 rotate-180 bg-brand-light" />
            </div>
            
            <div className="md:hidden flex h-12 w-0.5 bg-gradient-to-b from-brand-border to-brand-black my-2 relative">
               <ArrowRight className="absolute text-brand-black w-5 h-5 bottom-0 -ml-2.5 rotate-90 bg-brand-light" />
            </div>

            {/* API / Cloud Layer */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="w-full md:w-1/4 bg-white p-6 rounded-2xl border border-brand-black shadow-xl relative z-10 flex flex-col items-center text-center ring-4 ring-brand-black/5"
            >
              <div className="w-16 h-16 rounded-full bg-brand-light flex items-center justify-center text-brand-black border border-brand-border mb-4">
                <Cloud className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-medium text-brand-black tracking-tight mb-2">Cloud Gateway</h3>
              <p className="text-sm text-brand-gray">Load balanced API</p>
            </motion.div>

            {/* Connecting Arrow 2 */}
            <div className="hidden md:flex flex-1 items-center justify-center relative z-0">
              <div className="h-0.5 w-full bg-gradient-to-r from-brand-black to-brand-border"></div>
              <ArrowRight className="absolute text-brand-gray w-6 h-6 right-2 -mt-3 bg-brand-light" />
              <ArrowRight className="absolute text-brand-black w-6 h-6 left-2 mt-3 rotate-180 bg-brand-light" />
            </div>
            
            <div className="md:hidden flex h-12 w-0.5 bg-gradient-to-b from-brand-black to-brand-border my-2 relative">
               <ArrowRight className="absolute text-brand-gray w-5 h-5 bottom-0 -ml-2.5 rotate-90 bg-brand-light" />
            </div>

            {/* Backend & DB Layer */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="w-full md:w-1/4 flex flex-col gap-4 relative z-10"
            >
              <div className="bg-white p-4 rounded-2xl border border-brand-border/60 shadow-md flex items-center gap-4">
                <div className="p-3 bg-brand-light rounded-xl border border-brand-border/50"><Server className="w-5 h-5 text-brand-black" /></div>
                <div><h4 className="font-medium text-brand-black tracking-tight">Microservices</h4><p className="text-xs text-brand-gray">Node.js, Python</p></div>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-brand-border/60 shadow-md flex items-center gap-4">
                <div className="p-3 bg-brand-light rounded-xl border border-brand-border/50"><Database className="w-5 h-5 text-brand-black" /></div>
                <div><h4 className="font-medium text-brand-black tracking-tight">Data Lake</h4><p className="text-xs text-brand-gray">PostgreSQL, Redis</p></div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + (idx * 0.1) }}
              className="p-6 md:p-8 bg-white rounded-2xl border border-brand-border/60 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-xl font-medium tracking-tight text-brand-black mb-3">{feature.title}</h3>
              <p className="text-brand-gray leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
