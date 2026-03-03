'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import FadeInView from '@/components/ui/FadeInView'
import ServiceCTA from '@/components/services/ServiceCTA'

const erpPhases = [
  { num: '01', title: 'Requirements Analysis', body: 'Deep discovery of current business processes, pain points, and strategic objectives - the foundation of a successful ERP engagement.' },
  { num: '02', title: 'Platform Selection', body: 'Vendor-neutral evaluation of ERP platforms against your specific operational, budget, and scalability requirements.' },
  { num: '03', title: 'Implementation Design', body: 'Detailed system configuration design, integration architecture, data migration planning, and change impact analysis.' },
  { num: '04', title: 'Build & Configure', body: 'Controlled configuration, customisation, and integration development with continuous testing and stakeholder validation.' },
  { num: '05', title: 'Data Migration', body: 'Structured extraction, transformation, and loading of legacy data with validation checkpoints and rollback procedures.' },
  { num: '06', title: 'Go-Live & Stabilise', body: 'Managed cutover execution, hypercare support period, and systematic handover to internal operations team.' },
]

function ERPIllustration() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <div ref={ref} className="w-full max-w-md mx-auto">
      <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        {/* Central hub */}
        <motion.circle cx="200" cy="150" r="40"
          stroke="#0a0a0a" strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={inView ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration: 1, ease: 'easeInOut' }}
        />
        <motion.text x="200" y="144" textAnchor="middle" fill="#0a0a0a" fillOpacity="0.5" fontSize="9" fontFamily="system-ui"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.8 }}>
          ERP
        </motion.text>
        <motion.text x="200" y="158" textAnchor="middle" fill="#0a0a0a" fillOpacity="0.3" fontSize="8" fontFamily="system-ui"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.9 }}>
          PLATFORM
        </motion.text>

        {/* Satellite modules */}
        {[
          { label: 'Finance', x: 80, y: 60 },
          { label: 'HR', x: 320, y: 60 },
          { label: 'Supply Chain', x: 50, y: 200 },
          { label: 'CRM', x: 340, y: 200 },
          { label: 'Manufacturing', x: 200, y: 30 },
          { label: 'Analytics', x: 200, y: 270 },
        ].map((mod, i) => {
          const dx = mod.x - 200
          const dy = mod.y - 150
          const dist = Math.sqrt(dx * dx + dy * dy)
          const nx = 200 + (dx / dist) * 40
          const ny = 150 + (dy / dist) * 40
          const ex = mod.x + (mod.x < 200 ? 30 : -30)

          return (
            <motion.g key={mod.label}
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1 + i * 0.15, duration: 0.4, type: 'spring' }}
            >
              <line x1={nx} y1={ny} x2={ex} y2={mod.y} stroke="#0a0a0a" strokeWidth="1" strokeOpacity="0.15" strokeDasharray="4 3"/>
              <rect x={mod.x - (mod.x < 200 ? 60 : 0)} y={mod.y - 14} width={60} height={28} rx="5"
                stroke="#0a0a0a" strokeWidth="1" strokeOpacity="0.25" fill="white"/>
              <text x={mod.x + (mod.x < 200 ? -30 : 30)} y={mod.y + 4} textAnchor="middle"
                fill="#0a0a0a" fillOpacity="0.4" fontSize="8" fontFamily="system-ui">{mod.label}</text>
            </motion.g>
          )
        })}

        {/* Pulsing rings */}
        {[1, 2].map((ring) => (
          <motion.circle key={ring} cx="200" cy="150" r={40 + ring * 18}
            stroke="#0a0a0a" strokeWidth="0.5" strokeOpacity="0.06"
            animate={inView ? { scale: [1, 1.05, 1], opacity: [0.06, 0.12, 0.06] } : {}}
            transition={{ repeat: Infinity, duration: 3 + ring, delay: ring * 0.5 }}
          />
        ))}
      </svg>
    </div>
  )
}

export default function ERPImplementationPage() {
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
                  <span className="text-brand-black">ERP Implementation</span>
                </nav>
                <p className="text-label text-brand-muted mb-4">Integration & Implementation</p>
                <h1 className="text-[clamp(2rem,4.5vw,4rem)] font-light tracking-[-0.04em] text-brand-black leading-[1.05] mb-6">
                  ERP<br />Implementation
                </h1>
                <p className="text-[17px] font-light text-brand-muted leading-[1.8] mb-8 max-w-xl">
                  End-to-end ERP deployment, configuration, and change management for enterprises seeking a single source of operational truth - delivered without the failures that define most ERP programmes.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-3 h-[50px] px-8 bg-brand-black text-white text-[14px] font-medium hover:bg-brand-muted transition-all duration-300">
                  Discuss Your ERP Requirements <span>→</span>
                </Link>
              </FadeInView>
            </div>
            <FadeInView delay={0.2}><ERPIllustration /></FadeInView>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-site max-w-3xl">
          <FadeInView>
            <p className="text-label text-brand-muted mb-5">The Challenge</p>
            <h2 className="text-[clamp(1.6rem,3vw,2.5rem)] font-light tracking-tighter text-brand-black mb-6">
              ERP implementations fail at an alarming rate - and the causes are almost always predictable.
            </h2>
            <div className="space-y-4 text-[16px] font-light text-brand-muted leading-[1.85]">
              <p>Research consistently indicates that over 50% of ERP implementations run significantly over budget, over time, or fail to deliver expected outcomes. The root causes are not mysterious - inadequate requirements definition, underestimated data complexity, insufficient change management, and over-customisation top the list.</p>
              <p>Vanspire approaches ERP engagement with a fundamentally different lens. We spend proportionally more time on the front end - understanding process, data, and organisational readiness - because every hour invested pre-implementation saves five in remediation.</p>
              <p>Our implementation methodology is designed to compress the gap between expectation and operational reality, delivering systems that people actually use and that generate the business value the investment promised.</p>
            </div>
          </FadeInView>
        </div>
      </section>

      <section className="section-pad bg-brand-offwhite">
        <div className="container-site">
          <FadeInView>
            <p className="text-label text-brand-muted mb-5">Implementation Methodology</p>
            <h2 className="text-[clamp(1.6rem,3vw,2.5rem)] font-light tracking-tighter text-brand-black mb-12">Structured for delivery, not just deployment</h2>
          </FadeInView>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {erpPhases.map((phase, i) => (
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
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <FadeInView>
              <p className="text-label text-brand-muted mb-5">What We Deliver</p>
              <h2 className="text-[clamp(1.6rem,3vw,2.5rem)] font-light tracking-tighter text-brand-black mb-6">Full-lifecycle ERP ownership</h2>
              <div className="space-y-3">
                {[
                  'End-to-end implementation management', 'Business process re-engineering', 'Data migration and validation',
                  'System integration design', 'User training and adoption programmes', 'Post-go-live hypercare support',
                  'Reporting and analytics setup', 'Long-term technical support',
                ].map((item, i) => (
                  <FadeInView key={item} delay={i * 0.05}>
                    <div className="flex items-center gap-4 py-3 border-b border-brand-border last:border-0">
                      <span className="flex-shrink-0 w-4 h-4 rounded-full border border-brand-black/20 flex items-center justify-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-black" />
                      </span>
                      <span className="text-[14px] font-light text-brand-black">{item}</span>
                    </div>
                  </FadeInView>
                ))}
              </div>
            </FadeInView>
            <FadeInView delay={0.15}>
              <p className="text-label text-brand-muted mb-5">Platform Expertise</p>
              <h2 className="text-[clamp(1.6rem,3vw,2.5rem)] font-light tracking-tighter text-brand-black mb-6">Vendor-neutral implementation</h2>
              <p className="text-[15px] font-light text-brand-muted leading-[1.85] mb-8">We implement and integrate across major ERP platforms, ensuring the recommendation is driven by your operational requirements, not our vendor relationships.</p>
              <div className="space-y-3">
                {[
                  { platform: 'SAP', desc: 'S/4HANA, Business One, ByDesign' },
                  { platform: 'Oracle', desc: 'ERP Cloud, NetSuite, JD Edwards' },
                  { platform: 'Microsoft', desc: 'Dynamics 365 Finance & Operations' },
                  { platform: 'Open Source', desc: 'Odoo, ERPNext' },
                ].map((row) => (
                  <div key={row.platform} className="flex items-start gap-6 py-4 border-b border-brand-border last:border-0">
                    <span className="text-[13px] font-medium text-brand-black w-28 flex-shrink-0">{row.platform}</span>
                    <span className="text-[13px] font-light text-brand-muted">{row.desc}</span>
                  </div>
                ))}
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      <section className="section-pad-sm bg-white">
        <div className="container-site">
          <FadeInView>
            <p className="text-label text-brand-muted mb-6">Related Services</p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'Hospital Management System', href: '/services/integration/hospital-management-system' },
                { label: 'Enterprise System Integration', href: '/services/integration/enterprise-system-integration' },
                { label: 'Digital Transformation', href: '/services/digital-solutions/digital-transformation' },
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
        headline="Let's design your ERP programme."
        subtext="We start with an honest assessment of your readiness, requirements, and risks - before proposing a single platform or committing to a timeline."
        primaryLabel="Begin the Assessment"
        primaryHref="/contact"
        secondaryLabel="Back to Services"
        secondaryHref="/services"
      />
    </>
  )
}
