'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import FadeInView from '@/components/ui/FadeInView'
import ServiceCTA from '@/components/services/ServiceCTA'

const digitalServices = [
  {
    title: 'Web Platform Development',
    description: 'Scalable web platforms engineered for performance, reliability, and long-term growth.',
    href: '/services/digital-solutions/web-platform-development',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <rect x="4" y="8" width="40" height="28" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="4" y1="16" x2="44" y2="16" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="10" cy="12" r="1.5" fill="currentColor"/>
        <circle cx="16" cy="12" r="1.5" fill="currentColor"/>
        <circle cx="22" cy="12" r="1.5" fill="currentColor"/>
        <line x1="16" y1="36" x2="32" y2="36" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="24" y1="36" x2="24" y2="40" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="16" y1="40" x2="32" y2="40" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    title: 'Application Development',
    description: 'Cross-platform mobile and desktop applications built for real-world enterprise workflows.',
    href: '/services/digital-solutions/application-development',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <rect x="14" y="4" width="20" height="40" rx="3" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="14" y1="10" x2="34" y2="10" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="14" y1="38" x2="34" y2="38" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="24" cy="41" r="1.5" fill="currentColor"/>
        <rect x="19" y="20" width="10" height="2" rx="1" fill="currentColor"/>
        <rect x="19" y="25" width="6" height="2" rx="1" fill="currentColor"/>
      </svg>
    ),
  },
  {
    title: 'Cloud Infrastructure',
    description: 'Resilient, secure cloud architecture designed for uptime, scalability, and cost efficiency.',
    href: '/services/digital-solutions/cloud-infrastructure',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <path d="M36 28a8 8 0 00-8-8 10 10 0 00-19.6 2.4A7 7 0 0012 36h24a6 6 0 000-8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <line x1="20" y1="36" x2="20" y2="42" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="28" y1="36" x2="28" y2="42" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="16" y1="42" x2="32" y2="42" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    title: 'Digital Transformation',
    description: 'Strategic modernisation of legacy systems into agile, future-ready digital operations.',
    href: '/services/digital-solutions/digital-transformation',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <path d="M8 24h8l6-12 8 24 6-12h8" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round"/>
        <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4"/>
      </svg>
    ),
  },
]

const integrationServices = [
  {
    title: 'ERP Implementation',
    description: 'End-to-end ERP deployment, customisation, and change management for operational clarity.',
    href: '/services/integration/erp-implementation',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="28" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="16" y="28" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="12" y1="20" x2="12" y2="28" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="36" y1="20" x2="36" y2="28" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="12" y1="28" x2="24" y2="28" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="36" y1="28" x2="24" y2="28" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    title: 'Hospital Management System',
    description: 'A proprietary SaaS platform purpose-built for modern healthcare facility operations.',
    href: '/services/integration/hospital-management-system',
    badge: 'Proprietary SaaS',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <rect x="8" y="8" width="32" height="36" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="24" y1="18" x2="24" y2="30" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <line x1="18" y1="24" x2="30" y2="24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <line x1="14" y1="36" x2="20" y2="36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="28" y1="36" x2="34" y2="36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M16 8V6a2 2 0 014 0v2M28 8V6a2 2 0 014 0v2" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    title: 'Enterprise System Integration',
    description: 'Seamless middleware and API integration across complex enterprise technology stacks.',
    href: '/services/integration/enterprise-system-integration',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <circle cx="10" cy="24" r="5" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="38" cy="12" r="5" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="38" cy="36" r="5" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="15" y1="22" x2="33" y2="14" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="15" y1="26" x2="33" y2="34" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="24" cy="24" r="3" fill="currentColor" opacity="0.3"/>
      </svg>
    ),
  },
]

function PillarCard({ service, index }: { service: typeof digitalServices[0] & { badge?: string }, index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link href={service.href} className="group block h-full">
        <motion.div
          whileHover={{ y: -6 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative h-full p-8 border border-brand-border bg-white overflow-hidden transition-shadow duration-300 hover:shadow-xl hover:shadow-brand-black/5"
        >
          {/* Animated border accent */}
          <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-brand-black transition-all duration-500 group-hover:w-full" />

          {/* Badge */}
          {'badge' in service && service.badge && (
            <span className="inline-flex items-center px-2.5 py-0.5 text-[10px] uppercase tracking-widest font-medium bg-brand-black text-white mb-4">
              {service.badge}
            </span>
          )}

          {/* Icon */}
          <div className="mb-6 text-brand-black/60 group-hover:text-brand-black transition-colors duration-300">
            {service.icon}
          </div>

          <h3 className="text-[18px] font-light tracking-tight text-brand-black mb-3 group-hover:text-brand-black transition-colors">
            {service.title}
          </h3>
          <p className="text-[14px] font-light text-brand-muted leading-[1.75] mb-6">
            {service.description}
          </p>

          <span className="inline-flex items-center gap-2 text-[13px] font-medium text-brand-black opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
            Learn more <span>→</span>
          </span>
        </motion.div>
      </Link>
    </motion.div>
  )
}

export default function ServicesHubPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-24 md:pt-44 md:pb-32 bg-brand-offwhite relative overflow-hidden">
        {/* SVG pattern background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-services" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <rect width="40" height="40" fill="none" stroke="#000" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-services)"/>
          </svg>
        </div>

        <div className="container-site relative z-10">
          <FadeInView>
            <p className="text-label text-brand-muted mb-5">Enterprise Technology Services</p>
          </FadeInView>
          <FadeInView delay={0.1}>
            <h1 className="text-[clamp(2.4rem,5.5vw,5rem)] font-light tracking-[-0.04em] text-brand-black leading-[1.05] mb-6 max-w-4xl">
              Engineering Systems Built for<br />
              <em className="not-italic text-brand-muted">Decades, Not Quarters</em>
            </h1>
          </FadeInView>
          <FadeInView delay={0.2}>
            <p className="text-[17px] font-light text-brand-muted leading-[1.8] max-w-2xl mb-10">
              Vanspire engineers and integrates enterprise-grade technology systems designed for uncompromising long-term operational depth. As a leading software solutions and web development company, our work spans from architecting dynamic digital platforms to executing complex enterprise system integrations. Every solution we deliver is structured, highly secure, deliberately engineered, and built to scale globally.
            </p>
          </FadeInView>
          <FadeInView delay={0.3}>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 h-[52px] px-8 bg-brand-black text-white text-[14px] font-medium hover:bg-brand-muted transition-all duration-300"
              >
                Discuss Your Project <span>→</span>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center h-[52px] px-8 border border-brand-border text-brand-black text-[14px] font-light hover:border-brand-black transition-all duration-300"
              >
                About Vanspire
              </Link>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Divider with animated line */}
      <div className="container-site">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="origin-left h-px bg-brand-border"
        />
      </div>

      {/* Digital Solutions Pillar */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <FadeInView>
            <div className="mb-14">
              <p className="text-label text-brand-muted mb-4">Pillar 01</p>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-light tracking-tighter text-brand-black max-w-xl">
                  Digital Solutions
                </h2>
                <p className="text-[15px] font-light text-brand-muted leading-[1.75] max-w-md">
                  End-to-end digital product and platform engineering - from conception to deployment and beyond.
                </p>
              </div>
            </div>
          </FadeInView>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {digitalServices.map((service, i) => (
              <PillarCard key={service.href} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container-site">
        <div className="h-px bg-brand-border" />
      </div>

      {/* Integration & Implementation Pillar */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <FadeInView>
            <div className="mb-14">
              <p className="text-label text-brand-muted mb-4">Pillar 02</p>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-light tracking-tighter text-brand-black max-w-xl">
                  Integration &amp; Implementation
                </h2>
                <p className="text-[15px] font-light text-brand-muted leading-[1.75] max-w-md">
                  Complex enterprise systems integration, ERP deployment, and proprietary SaaS platforms built for sectors that cannot afford operational failure.
                </p>
              </div>
            </div>
          </FadeInView>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {integrationServices.map((service, i) => (
              <PillarCard key={service.href} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Vanspire band */}
      <section className="section-pad-sm bg-brand-offwhite">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { num: '01', heading: 'Systems Thinking', body: 'We approach every software engineering engagement as an interconnected enterprise ecosystem, never as a collection of isolated deliverables. Your new platform connects flawlessly to your existing operations.' },
              { num: '02', heading: 'Enterprise Rigour', body: 'Our rigorous QA processes, exhaustive architectural documentation, and military-grade security standards consistently meet and exceed the expectations of massive multinational organizations.' },
              { num: '03', heading: 'Long-horizon Design', body: 'We build exclusively for what comes next. By leveraging serverless infrastructure and highly modular codebases, we ensure your platforms are designed to adapt, perform, and dominate over time.' },
            ].map((item, i) => (
              <FadeInView key={item.num} delay={i * 0.12}>
                <p className="text-[11px] uppercase tracking-widest text-brand-muted mb-3">{item.num}</p>
                <h3 className="text-[18px] font-light tracking-tight text-brand-black mb-3">{item.heading}</h3>
                <p className="text-[14px] font-light text-brand-muted leading-[1.75]">{item.body}</p>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      <ServiceCTA
        headline="Ready to build what matters?"
        subtext="Whether you're modernising an existing system or building something entirely new, we bring the structure, expertise, and long-term perspective your project deserves."
        primaryLabel="Start a Conversation"
        primaryHref="/contact"
        secondaryLabel="View About"
        secondaryHref="/about"
      />
    </>
  )
}
