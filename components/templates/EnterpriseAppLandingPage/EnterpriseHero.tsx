'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { EnterpriseAppLandingPageProps } from './types'
import Link from 'next/link'
import { ArrowRight, Code2 } from 'lucide-react'

export default function EnterpriseHero({ data }: { data: EnterpriseAppLandingPageProps['hero'] }) {
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Parallax configuration for the background
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })
  
  const yBackground = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-brand-black pt-[85px]"
    >
      {/* Parallax Background */}
      <motion.div 
        style={{ y: yBackground }}
        className="absolute inset-x-0 -top-[20%] h-[140%] w-full z-0 opacity-40 pointer-events-none"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-white/10 via-brand-black to-brand-black"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </motion.div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div 
          style={{ opacity: opacityText }}
          className="max-w-5xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm font-medium tracking-wide mb-8 backdrop-blur-sm">
              <Code2 className="w-4 h-4" />
              Enterprise App Engineering
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-medium text-white mb-8 tracking-tighter leading-[1.05]"
          >
            {data.heading}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-2xl text-white/60 mb-12 max-w-3xl mx-auto font-light leading-relaxed tracking-wide"
          >
            {data.subheading}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link 
              href={data.primaryCtaLink} 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-14 px-8 bg-white text-brand-black text-[15px] font-medium hover:bg-brand-light hover:-translate-y-1 transition-all duration-300 rounded-full shadow-xl shadow-white/5 group"
            >
              {data.primaryCtaText}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            <Link 
              href={data.secondaryCtaLink} 
              className="w-full sm:w-auto inline-flex items-center justify-center h-14 px-8 bg-transparent text-white text-[15px] font-medium border border-white/20 hover:bg-white/10 hover:border-white transition-all duration-300 rounded-full"
            >
              {data.secondaryCtaText}
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-black to-transparent pointer-events-none z-20"></div>
    </section>
  )
}
