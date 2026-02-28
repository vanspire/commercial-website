'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'

export default function CurrentFocus() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="section-pad bg-[#060608] text-white overflow-hidden">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left - content */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-label text-white/30 mb-5"
            >
              Our Current Focus
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(2rem,4vw,3.5rem)] font-light tracking-[-0.04em] text-white leading-[1.1] mb-8"
            >
              Technology &amp;<br />Digital Systems
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-4 mb-10"
            >
              <p className="text-[16px] font-light text-white/60 leading-[1.8]">
                Technology is where the Vanspire journey begins. Through our technology venture,
                we design and build software, platforms, and digital systems that help businesses
                operate, grow, and adapt in a rapidly changing world.
              </p>
              <p className="text-[14px] font-light text-white/30 italic">
                This vertical represents our present capabilities - not the limits of our ambition.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <Link
                href="/ventures/technology"
                className="group inline-flex items-center gap-3 text-white text-[14px] font-medium border-b border-white/20 pb-1 hover:border-white/60 transition-all duration-300"
              >
                Explore Technology Venture
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </motion.div>
          </div>

          {/* Right - image with overlay */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            animate={inView ? { opacity: 1, scale: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[420px] lg:h-[520px] overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
              alt="Technology and digital systems"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060608]/80 via-transparent to-transparent" />

            {/* Floating stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-4"
            >
              {[
                { v: '50+', l: 'Projects' },
                { v: '5', l: 'Capabilities' },
                { v: '100%', l: 'Enterprise' },
              ].map((s) => (
                <div key={s.l} className="text-center">
                  <p className="text-2xl font-light text-white tracking-tight">{s.v}</p>
                  <p className="text-[10px] uppercase tracking-widest text-white/40 mt-1">{s.l}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
