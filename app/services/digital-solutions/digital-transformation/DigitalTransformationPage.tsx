'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import FadeInView from '@/components/ui/FadeInView'
import ServiceCTA from '@/components/services/ServiceCTA'

const phases = [
  { num: '01', title: 'Discovery & Assessment', body: 'Comprehensive audit of existing systems, processes, and organisational readiness. Identifies the true cost of the status quo.' },
  { num: '02', title: 'Strategy & Roadmap', body: 'A prioritised, phased transformation roadmap aligned to business objectives, budget realities, and risk tolerance.' },
  { num: '03', title: 'Architecture & Design', body: 'Target architecture definition - the blueprint for the future-state digital environment your organisation is building toward.' },
  { num: '04', title: 'Implementation', body: 'Controlled, iterative execution with continuous validation against business outcomes, not just technical milestones.' },
  { num: '05', title: 'Change Management', body: 'People and process transformation at pace with the technology - because adoption determines whether change delivers value.' },
  { num: '06', title: 'Optimise & Iterate', body: 'Post-implementation refinement based on operational data, user feedback, and evolving business requirements.' },
]

function TransformIllustration() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <div ref={ref} className="w-full max-w-md mx-auto">
      <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        {/* Before state - left */}
        <motion.rect x="20" y="80" width="120" height="140" rx="6"
          stroke="#0a0a0a" strokeWidth="1.5" strokeOpacity="0.3" strokeDasharray="6 4"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6 }}
        />
        <motion.text x="80" y="50" textAnchor="middle" fill="#0a0a0a" fillOpacity="0.25" fontSize="9" fontFamily="system-ui"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.4 }}>
          LEGACY SYSTEMS
        </motion.text>
        {/* Legacy boxes */}
        {[[35, 95], [35, 120], [35, 145], [35, 170], [80, 95], [80, 145]].map(([x, y], i) => (
          <motion.rect key={`${x}-${y}`} x={x} y={y} width="50" height="18" rx="3"
            fill="#0a0a0a" fillOpacity={0.06 + i * 0.01} stroke="#0a0a0a" strokeWidth="0.5" strokeOpacity="0.2"
            initial={{ opacity: 0, x: -10 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5 + i * 0.08 }}
          />
        ))}

        {/* Arrow / transformation zone */}
        <motion.path d="M148 150 C160 130 200 120 220 150 C200 180 160 170 148 150Z"
          fill="#0a0a0a" fillOpacity="0.04" stroke="#0a0a0a" strokeWidth="1" strokeOpacity="0.15"
          initial={{ opacity: 0, scaleX: 0 }} animate={inView ? { opacity: 1, scaleX: 1 } : {}}
          style={{ transformOrigin: '150px 150px' }}
          transition={{ delay: 1.2, duration: 0.6 }}
        />
        <motion.path d="M165 143 L215 150 L165 157" stroke="#0a0a0a" strokeWidth="1.5" strokeOpacity="0.3"
          strokeLinecap="round" strokeLinejoin="round"
          initial={{ pathLength: 0 }} animate={inView ? { pathLength: 1 } : {}}
          transition={{ delay: 1.6, duration: 0.5 }}
        />
        <motion.text x="183" y="133" textAnchor="middle" fill="#0a0a0a" fillOpacity="0.2" fontSize="8" fontFamily="system-ui"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 1.8 }}>
          TRANSFORM
        </motion.text>

        {/* After state - right */}
        <motion.rect x="240" y="60" width="140" height="180" rx="8"
          stroke="#0a0a0a" strokeWidth="1.5" strokeOpacity="0.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={inView ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.8, ease: 'easeInOut' }}
        />
        <motion.text x="310" y="47" textAnchor="middle" fill="#0a0a0a" fillOpacity="0.35" fontSize="9" fontFamily="system-ui"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 2.6 }}>
          DIGITAL PLATFORM
        </motion.text>
        {/* Modern UI elements */}
        <motion.rect x="255" y="75" width="110" height="28" rx="4" fill="#0a0a0a" fillOpacity="0.06"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 2.3 }}
        />
        {[2, 2.4, 2.6].map((delay, i) => (
          <motion.rect key={i} x={263 + i * 34} y="82" width="26" height="12" rx="3"
            fill="#0a0a0a" fillOpacity={0.1 + i * 0.05}
            initial={{ scale: 0 }} animate={inView ? { scale: 1 } : {}}
            transition={{ delay, type: 'spring' }}
          />
        ))}
        {/* Chart bars */}
        {[24, 36, 20, 44, 32, 50].map((h, i) => (
          <motion.rect key={i} x={258 + i * 17} y={168 - h} width="12" height={h} rx="3"
            fill="#0a0a0a" fillOpacity={0.08 + i * 0.04}
            initial={{ scaleY: 0 }} animate={inView ? { scaleY: 1 } : {}}
            style={{ transformOrigin: `${258 + i * 17 + 6}px 168px` }}
            transition={{ delay: 2.2 + i * 0.08, duration: 0.5 }}
          />
        ))}
        <motion.rect x="255" y="178" width="110" height="12" rx="4" fill="#0a0a0a" fillOpacity="0.06"
          initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}} transition={{ delay: 2.8 }}
        />
        <motion.rect x="255" y="196" width="80" height="10" rx="4" fill="#0a0a0a" fillOpacity="0.04"
          initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}} transition={{ delay: 2.9 }}
        />
        <motion.rect x="255" y="212" width="50" height="18" rx="4" fill="#0a0a0a" fillOpacity="0.7"
          initial={{ scale: 0 }} animate={inView ? { scale: 1 } : {}}
          transition={{ delay: 3, type: 'spring' }}
        />
        {/* Glow dot */}
        <motion.circle cx="370" cy="70" r="5" fill="#0a0a0a" fillOpacity="0.5"
          animate={inView ? { opacity: [0.2, 0.8, 0.2] } : {}}
          transition={{ repeat: Infinity, duration: 2, delay: 3 }}
        />
      </svg>
    </div>
  )
}

export default function DigitalTransformationPage() {
  return (
    <>
      <section className="pt-36 pb-20 md:pt-44 md:pb-28 bg-brand-offwhite overflow-hidden">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <FadeInView>
                <nav className="flex items-center gap-2 text-[12px] font-light text-brand-muted mb-6">
                  <Link href="/services" className="hover:text-brand-black transition-colors">Services</Link>
                  <span>/</span>
                  <Link href="/services" className="hover:text-brand-black transition-colors">Digital Solutions</Link>
                  <span>/</span>
                  <span className="text-brand-black">Digital Transformation</span>
                </nav>
                <p className="text-label text-brand-muted mb-4">Digital Solutions</p>
                <h1 className="text-[clamp(2rem,4.5vw,4rem)] font-light tracking-[-0.04em] text-brand-black leading-[1.05] mb-6">
                  Digital<br />Transformation
                </h1>
                <p className="text-[17px] font-light text-brand-muted leading-[1.8] mb-8 max-w-xl">
                  Strategic modernisation of legacy systems and processes into agile, scalable, and technology-native operations - executed with methodical rigour, not transformation theatre.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-3 h-[50px] px-8 bg-brand-black text-white text-[14px] font-medium hover:bg-brand-muted transition-all duration-300">
                  Begin Your Assessment <span>→</span>
                </Link>
              </FadeInView>
            </div>
            <FadeInView delay={0.2}><TransformIllustration /></FadeInView>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-site max-w-3xl">
          <FadeInView>
            <p className="text-label text-brand-muted mb-5">The Challenge</p>
            <h2 className="text-[clamp(1.6rem,3vw,2.5rem)] font-light tracking-tighter text-brand-black mb-6">
              Most transformation programmes deliver change. Far fewer deliver value.
            </h2>
            <div className="space-y-4 text-[16px] font-light text-brand-muted leading-[1.85]">
              <p>Digital transformation has become a ubiquitous term - and with ubiquity has come dilution. The majority of transformation programmes fail to deliver their promised business outcomes, not because of technology failure, but because of insufficient planning, misaligned incentives, and inadequate attention to human factors.</p>
              <p>The organisations that succeed in transformation share a common trait: they treat it as a strategic programme of work, not a technology procurement exercise. Technology is the enabler. The transformation is organisational.</p>
              <p>Vanspire structures transformation engagements around business outcomes, not deliverables. Every technical decision is tied to a measurable operational improvement - cost reduction, cycle time compression, error rate elimination, or revenue enablement.</p>
            </div>
          </FadeInView>
        </div>
      </section>

      <section className="section-pad bg-brand-offwhite">
        <div className="container-site">
          <FadeInView>
            <p className="text-label text-brand-muted mb-5">Our Methodology</p>
            <h2 className="text-[clamp(1.6rem,3vw,2.5rem)] font-light tracking-tighter text-brand-black mb-12">A structured six-phase approach</h2>
          </FadeInView>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {phases.map((phase, i) => (
              <FadeInView key={phase.num} delay={i * 0.1}>
                <div className="p-8 bg-white border border-brand-border h-full">
                  <p className="text-[11px] uppercase tracking-widest text-brand-muted mb-4">{phase.num}</p>
                  <h3 className="text-[17px] font-light tracking-tight text-brand-black mb-3">{phase.title}</h3>
                  <p className="text-[14px] font-light text-brand-muted leading-[1.75]">{phase.body}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-site max-w-3xl">
          <FadeInView>
            <p className="text-label text-brand-muted mb-5">What We Deliver</p>
            <h2 className="text-[clamp(1.6rem,3vw,2.5rem)] font-light tracking-tighter text-brand-black mb-8">Transformation across systems, processes, and operations</h2>
            <div className="space-y-4 text-[16px] font-light text-brand-muted leading-[1.85]">
              <p>Transformation engagements with Vanspire deliver modernised technology infrastructure, re-engineered business processes, integrated data environments, and organisational capability uplift - structured and measurable at every stage.</p>
              <p>We maintain a single transformation office function that spans technology delivery, process design, change management, and stakeholder communication - reducing the coordination overhead that typically erodes transformation programmes.</p>
            </div>
          </FadeInView>
          <FadeInView delay={0.15}>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Legacy system modernisation', 'Process re-engineering', 'Data architecture transformation',
                'Integration architecture design', 'Governance framework setup', 'Org capability development',
              ].map((item, i) => (
                <div key={item} className="flex items-start gap-4 py-3 border-b border-brand-border last:border-0">
                  <span className="mt-1 flex-shrink-0 w-4 h-4 rounded-full border border-brand-black/20 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-black" />
                  </span>
                  <span className="text-[14px] font-light text-brand-black">{item}</span>
                </div>
              ))}
            </div>
          </FadeInView>
        </div>
      </section>

      <section className="section-pad-sm bg-white">
        <div className="container-site">
          <FadeInView>
            <p className="text-label text-brand-muted mb-6">Related Services</p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'ERP Implementation', href: '/services/integration/erp-implementation' },
                { label: 'Enterprise System Integration', href: '/services/integration/enterprise-system-integration' },
                { label: 'Cloud Infrastructure', href: '/services/digital-solutions/cloud-infrastructure' },
                { label: 'All Services', href: '/services' },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="inline-flex items-center h-[40px] px-5 border border-brand-border text-[13px] font-light text-brand-muted hover:text-brand-black hover:border-brand-black transition-all duration-200">
                  {link.label}
                </Link>
              ))}
            </div>
          </FadeInView>
        </div>
      </section>

      <ServiceCTA
        headline="Transformation begins with clarity."
        subtext="We start every engagement with an honest assessment of where you are and what change will actually cost - in time, money, and organisational energy. The result is a transformation that's scoped to succeed."
        primaryLabel="Start the Conversation"
        primaryHref="/contact"
        secondaryLabel="Back to Services"
        secondaryHref="/services"
      />
    </>
  )
}
