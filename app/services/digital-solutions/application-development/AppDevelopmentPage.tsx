'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import FadeInView from '@/components/ui/FadeInView'
import ServiceCTA from '@/components/services/ServiceCTA'

const deliverables = [
  'iOS & Android native app development',
  'Cross-platform development (React Native, Flutter)',
  'Enterprise workflow applications',
  'Offline-first mobile architectures',
  'Secure device & biometric authentication',
  'Push notification systems',
  'App Store & Play Store deployment',
  'Post-launch maintenance & iteration',
]

const useCases = [
  { title: 'Field Operations Apps', body: 'Mobile applications for field teams - logistics, inspection, maintenance, and service workflows - built to operate reliably in low-connectivity environments.' },
  { title: 'Healthcare Companion Apps', body: 'Patient-facing and clinician-facing mobile tools tightly integrated with backend HMS or EMR platforms for real-time data access.' },
  { title: 'Enterprise Internal Tools', body: 'Organisation-wide apps replacing legacy desktop processes with accessible, secure, mobile-first interfaces.' },
  { title: 'Customer-Facing Product Apps', body: 'B2C and B2B customer applications driving engagement, transactions, and long-term retention through thoughtful UX and performance.' },
]

function AppIllustration() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <div ref={ref} className="w-full max-w-md mx-auto">
      <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        {/* Phone 1 */}
        <motion.rect x="80" y="20" width="100" height="180" rx="12" stroke="#0a0a0a" strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }} animate={inView ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration: 1, ease: 'easeInOut' }}
        />
        <motion.rect x="80" y="20" width="100" height="32" rx="12" fill="#0a0a0a" fillOpacity="0.06"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.8 }}
        />
        <motion.circle cx="130" cy="36" r="3" fill="#0a0a0a" fillOpacity="0.3"
          initial={{ scale: 0 }} animate={inView ? { scale: 1 } : {}} transition={{ delay: 1 }}
        />
        {/* App content lines */}
        {[70, 90, 110, 130].map((y, i) => (
          <motion.rect key={y} x="96" y={y} width={i % 2 === 0 ? 68 : 50} height="8" rx="4"
            fill="#0a0a0a" fillOpacity={i === 0 ? 0.6 : 0.15}
            initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
            transition={{ delay: 1.2 + i * 0.1 }}
          />
        ))}
        {/* Bottom nav */}
        <motion.rect x="80" y="170" width="100" height="30" rx="8" fill="#0a0a0a" fillOpacity="0.06"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 1.7 }}
        />
        {[100, 118, 136, 154].map((cx, i) => (
          <motion.circle key={cx} cx={cx} cy="185" r="4" fill="#0a0a0a" fillOpacity={i === 0 ? 0.7 : 0.2}
            initial={{ scale: 0 }} animate={inView ? { scale: 1 } : {}} transition={{ delay: 1.8 + i * 0.08 }}
          />
        ))}

        {/* Phone 2 overlapping */}
        <motion.rect x="200" y="50" width="100" height="180" rx="12" stroke="#0a0a0a" strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }} animate={inView ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.3, ease: 'easeInOut' }}
        />
        <motion.rect x="200" y="50" width="100" height="32" rx="12" fill="#0a0a0a" fillOpacity="0.06"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 1.1 }}
        />
        {/* Dashboard chart bars */}
        {[12, 22, 16, 28, 20, 32].map((h, i) => (
          <motion.rect key={i} x={212 + i * 14} y={148 - h} width="10" height={h} rx="2"
            fill="#0a0a0a" fillOpacity={0.1 + i * 0.05}
            initial={{ scaleY: 0 }} animate={inView ? { scaleY: 1 } : {}}
            style={{ transformOrigin: `${212 + i * 14 + 5}px 148px` }}
            transition={{ delay: 1.6 + i * 0.08, duration: 0.5 }}
          />
        ))}
        <motion.rect x="210" y="110" width="80" height="10" rx="4" fill="#0a0a0a" fillOpacity="0.6"
          initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}} transition={{ delay: 1.4 }}
        />
        <motion.rect x="210" y="126" width="55" height="7" rx="4" fill="#0a0a0a" fillOpacity="0.2"
          initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}} transition={{ delay: 1.5 }}
        />

        {/* Connection line */}
        <motion.path d="M180 100 Q190 120 200 130" stroke="#0a0a0a" strokeWidth="1" strokeOpacity="0.2"
          strokeDasharray="4 4" initial={{ pathLength: 0 }} animate={inView ? { pathLength: 1 } : {}}
          transition={{ delay: 2, duration: 0.5 }}
        />

        {/* Floating badge */}
        <motion.rect x="290" y="30" width="100" height="36" rx="6" fill="white" stroke="#0a0a0a" strokeWidth="1" strokeOpacity="0.15"
          initial={{ opacity: 0, y: -10 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 2.2, duration: 0.5 }}
        />
        <motion.circle cx="306" cy="48" r="6" fill="#0a0a0a" fillOpacity="0.1"
          initial={{ scale: 0 }} animate={inView ? { scale: 1 } : {}} transition={{ delay: 2.4 }}
        />
        <motion.rect x="318" y="43" width="60" height="6" rx="3" fill="#0a0a0a" fillOpacity="0.25"
          initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}} transition={{ delay: 2.5 }}
        />
      </svg>
    </div>
  )
}

export default function AppDevelopmentPage() {
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
                  <span className="text-brand-black">Application Development</span>
                </nav>
                <p className="text-label text-brand-muted mb-4">Digital Solutions</p>
                <h1 className="text-[clamp(2rem,4.5vw,4rem)] font-light tracking-[-0.04em] text-brand-black leading-[1.05] mb-6">
                  Application<br />Development
                </h1>
                <p className="text-[17px] font-light text-brand-muted leading-[1.8] mb-8 max-w-xl">
                  Cross-platform and native mobile applications built around real enterprise workflows - not wireframe concepts. We engineer for reliability, security, and the operational realities your teams face daily.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-3 h-[50px] px-8 bg-brand-black text-white text-[14px] font-medium hover:bg-brand-muted transition-all duration-300">
                  Discuss Your App <span>→</span>
                </Link>
              </FadeInView>
            </div>
            <FadeInView delay={0.2}><AppIllustration /></FadeInView>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-site max-w-3xl">
          <FadeInView>
            <p className="text-label text-brand-muted mb-5">The Challenge</p>
            <h2 className="text-[clamp(1.6rem,3vw,2.5rem)] font-light tracking-tighter text-brand-black mb-6">
              Enterprise apps fail when they're built for demos, not operations.
            </h2>
            <div className="space-y-4 text-[16px] font-light text-brand-muted leading-[1.85]">
              <p>Many enterprise mobile applications fail not in the demo environment but in production - where offline connectivity, data synchronisation, device fragmentation, and security compliance become the real requirements.</p>
              <p>The gap between an app that looks polished and one that actually performs in the hands of 500 field operatives is significant. Bridging that gap requires deep understanding of the operational context before writing a single line of code.</p>
              <p>Vanspire approaches every application engagement with an operations-first mindset - understanding workflows, failure modes, and technical constraints before making architectural decisions.</p>
            </div>
          </FadeInView>
        </div>
      </section>

      <section className="section-pad bg-brand-offwhite">
        <div className="container-site">
          <FadeInView>
            <p className="text-label text-brand-muted mb-5">What We Deliver</p>
            <h2 className="text-[clamp(1.6rem,3vw,2.5rem)] font-light tracking-tighter text-brand-black mb-12">Full-cycle application engineering</h2>
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

      <section className="section-pad bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeInView>
              <p className="text-label text-brand-muted mb-5">Technical Approach</p>
              <h2 className="text-[clamp(1.6rem,3vw,2.5rem)] font-light tracking-tighter text-brand-black mb-6">Built for production, not prototypes</h2>
              <div className="space-y-5 text-[15px] font-light text-brand-muted leading-[1.85]">
                <p>We standardise on React Native for cross-platform development where code sharing is strategically valuable, and native Swift/Kotlin where platform-specific performance is non-negotiable.</p>
                <p>Security is embedded at the application layer - certificate pinning, biometric authentication, encrypted local storage, and secure API communication are default architecture decisions, not optional additions.</p>
                <p>For enterprise deployments, we configure Mobile Device Management (MDM) compatibility and enterprise distribution pipelines ensuring controlled, auditable releases.</p>
              </div>
            </FadeInView>
            <FadeInView delay={0.15}>
              <div className="space-y-4">
                {[
                  { label: 'Cross-platform', tech: 'React Native, Expo, Flutter' },
                  { label: 'Native iOS', tech: 'Swift, SwiftUI, Xcode' },
                  { label: 'Native Android', tech: 'Kotlin, Jetpack Compose' },
                  { label: 'Backend', tech: 'REST, GraphQL, WebSockets' },
                  { label: 'Auth', tech: 'OAuth2, Biometrics, SSO, SAML' },
                  { label: 'Distribution', tech: 'App Store, Play Store, MDM, TestFlight' },
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

      <section className="section-pad bg-brand-offwhite">
        <div className="container-site">
          <FadeInView>
            <p className="text-label text-brand-muted mb-5">Use Cases</p>
            <h2 className="text-[clamp(1.6rem,3vw,2.5rem)] font-light tracking-tighter text-brand-black mb-12">Applications for complex operational environments</h2>
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

      <section className="section-pad-sm bg-white">
        <div className="container-site">
          <FadeInView>
            <p className="text-label text-brand-muted mb-6">Related Services</p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'Web Platform Development', href: '/services/digital-solutions/web-platform-development' },
                { label: 'Cloud Infrastructure', href: '/services/digital-solutions/cloud-infrastructure' },
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
        headline="Let's build your application."
        subtext="Tell us about your use case, user base, and operational environment. We'll design an approach that actually works."
        primaryLabel="Get in Touch"
        primaryHref="/contact"
        secondaryLabel="Back to Services"
        secondaryHref="/services"
      />
    </>
  )
}
