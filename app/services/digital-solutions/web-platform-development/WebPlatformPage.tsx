'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import FadeInView from '@/components/ui/FadeInView'
import ServiceCTA from '@/components/services/ServiceCTA'

const deliverables = [
  'Custom CMS & content architecture',
  'High-performance Next.js / React frontends',
  'Multi-tenant SaaS platform development',
  'API design, integration, and management',
  'Progressive Web App (PWA) capabilities',
  'Web performance optimisation (Core Web Vitals)',
  'Accessibility compliance (WCAG 2.1)',
  'Ongoing maintenance and feature iteration',
]

const useCases = [
  { title: 'Enterprise Portals', body: 'Internal operations portals used by hundreds of staff across multiple departments — built for reliability and role-based access control.' },
  { title: 'SaaS Product Platforms', body: 'Multi-tenant platforms designed to serve thousands of end users with consistent performance and secure data isolation.' },
  { title: 'B2B Commerce Systems', body: 'Complex procurement and transaction platforms integrating with ERP, inventory, and logistics systems.' },
  { title: 'Public Sector Platforms', body: 'Large-scale citizen-facing platforms demanding high availability, accessibility compliance, and data sovereignty.' },
]

function DrawingIllustration() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <div ref={ref} className="w-full max-w-md mx-auto">
      <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        {/* Browser frame */}
        <motion.rect
          x="20" y="20" width="360" height="260" rx="8"
          stroke="#0a0a0a" strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={inView ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        />
        {/* Browser toolbar */}
        <motion.rect
          x="20" y="20" width="360" height="36" rx="8"
          fill="#0a0a0a" fillOpacity="0.04"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
        />
        {/* Dots */}
        {[52, 68, 84].map((cx, i) => (
          <motion.circle key={cx} cx={cx} cy="38" r="4" fill="#0a0a0a" fillOpacity="0.2"
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ delay: 1 + i * 0.1, duration: 0.3 }}
          />
        ))}
        {/* URL bar */}
        <motion.rect
          x="110" y="29" width="200" height="18" rx="4"
          stroke="#0a0a0a" strokeWidth="1" strokeOpacity="0.15"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ delay: 1.2, duration: 0.5 }}
        />
        {/* Nav links */}
        {[0, 1, 2, 3].map((i) => (
          <motion.rect
            key={i} x={40 + i * 70} y="80" width={50} height="8" rx="4"
            fill="#0a0a0a" fillOpacity={i === 0 ? 0.7 : 0.15}
            initial={{ scaleX: 0, originX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ delay: 1.4 + i * 0.08, duration: 0.4 }}
          />
        ))}
        {/* Hero content lines */}
        <motion.rect x="40" y="110" width="200" height="14" rx="4" fill="#0a0a0a" fillOpacity="0.7"
          initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
          transition={{ delay: 1.7, duration: 0.5 }}
        />
        <motion.rect x="40" y="132" width="160" height="10" rx="4" fill="#0a0a0a" fillOpacity="0.3"
          initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
          transition={{ delay: 1.85, duration: 0.5 }}
        />
        <motion.rect x="40" y="150" width="120" height="10" rx="4" fill="#0a0a0a" fillOpacity="0.2"
          initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
          transition={{ delay: 2, duration: 0.4 }}
        />
        {/* CTA button */}
        <motion.rect
          x="40" y="172" width="100" height="28" rx="4" fill="#0a0a0a" fillOpacity="0.8"
          initial={{ scale: 0 }} animate={inView ? { scale: 1 } : {}}
          transition={{ delay: 2.2, duration: 0.3, type: 'spring' }}
        />
        {/* Feature cards */}
        {[0, 1, 2].map((i) => (
          <motion.rect
            key={i} x={40 + i * 110} y="220" width="90" height="48" rx="4"
            stroke="#0a0a0a" strokeWidth="1" strokeOpacity="0.15"
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 2.4 + i * 0.15, duration: 0.5 }}
          />
        ))}
        {/* Right side image placeholder */}
        <motion.rect
          x="260" y="100" width="110" height="110" rx="4"
          stroke="#0a0a0a" strokeWidth="1.5" strokeOpacity="0.12"
          fill="#0a0a0a" fillOpacity="0.03"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 1.9, duration: 0.6 }}
        />
        <motion.line x1="270" y1="110" x2="360" y2="200" stroke="#0a0a0a" strokeOpacity="0.07" strokeWidth="1"
          initial={{ pathLength: 0 }} animate={inView ? { pathLength: 1 } : {}}
          transition={{ delay: 2.1, duration: 0.5 }}
        />
        <motion.line x1="360" y1="110" x2="270" y2="200" stroke="#0a0a0a" strokeOpacity="0.07" strokeWidth="1"
          initial={{ pathLength: 0 }} animate={inView ? { pathLength: 1 } : {}}
          transition={{ delay: 2.2, duration: 0.5 }}
        />
      </svg>
    </div>
  )
}

export default function WebPlatformPage() {
  return (
    <>
      {/* Hero */}
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
                  <span className="text-brand-black">Web Platform Development</span>
                </nav>
                <p className="text-label text-brand-muted mb-4">Digital Solutions</p>
                <h1 className="text-[clamp(2rem,4.5vw,4rem)] font-light tracking-[-0.04em] text-brand-black leading-[1.05] mb-6">
                  Web Platform<br />Development
                </h1>
                <p className="text-[17px] font-light text-brand-muted leading-[1.8] mb-8 max-w-xl">
                  Scalable, performant web platforms built for enterprises that cannot afford mediocre digital infrastructure. We architect for longevity, design for users, and engineer for resilience.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="inline-flex items-center gap-3 h-[50px] px-8 bg-brand-black text-white text-[14px] font-medium hover:bg-brand-muted transition-all duration-300">
                    Discuss Your Platform <span>→</span>
                  </Link>
                </div>
              </FadeInView>
            </div>
            <FadeInView delay={0.2}>
              <DrawingIllustration />
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <div className="max-w-3xl">
            <FadeInView>
              <p className="text-label text-brand-muted mb-5">The Challenge</p>
              <h2 className="text-[clamp(1.6rem,3vw,2.5rem)] font-light tracking-tighter text-brand-black mb-6">
                Most web platforms underdeliver — not because of missing features, but because of missing foundations.
              </h2>
              <div className="space-y-4 text-[16px] font-light text-brand-muted leading-[1.85]">
                <p>
                  Enterprises frequently adopt web platforms that solve today's problem while creating tomorrow's liability. Built quickly, structured poorly, and scaled painfully — the accumulation of technical debt becomes a competitive disadvantage.
                </p>
                <p>
                  The core issue is rarely technology. It is architecture. A platform built without long-horizon thinking will require expensive re-architecture within 18–24 months. Vanspire's approach prevents this by making architectural rigour the default, not the exception.
                </p>
                <p>
                  We believe a well-structured web platform is a strategic business asset — one that reduces operational friction, accelerates team velocity, and compounds value over time.
                </p>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* What We Deliver */}
      <section className="section-pad bg-brand-offwhite">
        <div className="container-site">
          <FadeInView>
            <p className="text-label text-brand-muted mb-5">What We Deliver</p>
            <h2 className="text-[clamp(1.6rem,3vw,2.5rem)] font-light tracking-tighter text-brand-black mb-12">
              Capabilities across the full platform stack
            </h2>
          </FadeInView>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {deliverables.map((item, i) => (
              <FadeInView key={item} delay={i * 0.07}>
                <div className="flex items-start gap-4 p-6 bg-white border border-brand-border">
                  <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full border border-brand-black/20 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-black" />
                  </span>
                  <span className="text-[15px] font-light text-brand-black">{item}</span>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Depth */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeInView>
              <p className="text-label text-brand-muted mb-5">Our Technical Approach</p>
              <h2 className="text-[clamp(1.6rem,3vw,2.5rem)] font-light tracking-tighter text-brand-black mb-6">
                Architecture-first engineering
              </h2>
              <div className="space-y-5 text-[15px] font-light text-brand-muted leading-[1.85]">
                <p>
                  Every platform engagement begins with architecture definition. We establish the right data model, component boundaries, API contracts, and state management patterns before writing production code.
                </p>
                <p>
                  Our preferred stack centres on Next.js for server-side rendering and edge performance, TypeScript for type safety at scale, and purpose-selected databases (PostgreSQL, MongoDB, Redis) matched to access patterns.
                </p>
                <p>
                  We implement CI/CD pipelines, automated testing suites, and observability tooling from day one — because production reliability is not an afterthought.
                </p>
              </div>
            </FadeInView>
            <FadeInView delay={0.15}>
              <div className="space-y-4">
                {[
                  { label: 'Frontend', tech: 'Next.js, React, TypeScript, Tailwind CSS' },
                  { label: 'Backend', tech: 'Node.js, REST APIs, GraphQL, tRPC' },
                  { label: 'Database', tech: 'PostgreSQL, MongoDB, Redis, Supabase' },
                  { label: 'Infra', tech: 'Vercel, AWS, Docker, GitHub Actions' },
                  { label: 'Testing', tech: 'Jest, Playwright, Vitest, Cypress' },
                  { label: 'Monitoring', tech: 'Sentry, Datadog, Vercel Analytics' },
                ].map((row, i) => (
                  <FadeInView key={row.label} delay={i * 0.05}>
                    <div className="flex items-start gap-6 py-4 border-b border-brand-border last:border-0">
                      <span className="text-[13px] uppercase tracking-widest text-brand-muted w-24 flex-shrink-0 pt-0.5">{row.label}</span>
                      <span className="text-[14px] font-light text-brand-black">{row.tech}</span>
                    </div>
                  </FadeInView>
                ))}
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-pad bg-brand-offwhite">
        <div className="container-site">
          <FadeInView>
            <p className="text-label text-brand-muted mb-5">Use Cases</p>
            <h2 className="text-[clamp(1.6rem,3vw,2.5rem)] font-light tracking-tighter text-brand-black mb-12">
              Platforms built for real operational complexity
            </h2>
          </FadeInView>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCases.map((uc, i) => (
              <FadeInView key={uc.title} delay={i * 0.1}>
                <div className="p-8 bg-white border border-brand-border h-full">
                  <h3 className="text-[17px] font-light tracking-tight text-brand-black mb-3">{uc.title}</h3>
                  <p className="text-[14px] font-light text-brand-muted leading-[1.75]">{uc.body}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="section-pad-sm bg-white">
        <div className="container-site">
          <FadeInView>
            <p className="text-label text-brand-muted mb-6">Related Services</p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'Application Development', href: '/services/digital-solutions/application-development' },
                { label: 'Cloud Infrastructure', href: '/services/digital-solutions/cloud-infrastructure' },
                { label: 'Digital Transformation', href: '/services/digital-solutions/digital-transformation' },
                { label: 'All Services', href: '/services' },
              ].map((link) => (
                <Link key={link.href} href={link.href}
                  className="inline-flex items-center h-[40px] px-5 border border-brand-border text-[13px] font-light text-brand-muted hover:text-brand-black hover:border-brand-black transition-all duration-200">
                  {link.label}
                </Link>
              ))}
            </div>
          </FadeInView>
        </div>
      </section>

      <ServiceCTA
        headline="Let's architect your next platform."
        subtext="Tell us about your platform requirements. We'll assess whether there's a fit and outline a structured engagement."
        primaryLabel="Start the Conversation"
        primaryHref="/contact"
        secondaryLabel="Back to Services"
        secondaryHref="/services"
      />
    </>
  )
}
