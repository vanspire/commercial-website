'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import FadeInView from '@/components/ui/FadeInView'
import ServiceCTA from '@/components/services/ServiceCTA'

function IntegrationIllustration() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const systems = [
    { label: 'CRM', x: 60, y: 80 },
    { label: 'ERP', x: 60, y: 160 },
    { label: 'HRM', x: 60, y: 240 },
    { label: 'Analytics', x: 320, y: 80 },
    { label: 'E-Commerce', x: 320, y: 160 },
    { label: 'Custom API', x: 320, y: 240 },
  ]

  return (
    <div ref={ref} className="w-full max-w-md mx-auto">
      <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        {/* Integration middleware */}
        <motion.rect x="155" y="110" width="90" height="80" rx="8"
          stroke="#0a0a0a" strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={inView ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        />
        <motion.rect x="155" y="110" width="90" height="80" rx="8" fill="#0a0a0a" fillOpacity="0.03"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.6 }}
        />
        <motion.text x="200" y="147" textAnchor="middle" fill="#0a0a0a" fillOpacity="0.45" fontSize="8.5" fontFamily="system-ui"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.8 }}>
          INTEGRATION
        </motion.text>
        <motion.text x="200" y="162" textAnchor="middle" fill="#0a0a0a" fillOpacity="0.3" fontSize="8" fontFamily="system-ui"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.9 }}>
          HUB
        </motion.text>

        {/* Data flow dots animation */}
        {[130, 150, 170].map((y, i) => (
          <motion.circle key={y} cx="155" cy={y} r="3" fill="#0a0a0a" fillOpacity="0.15"
            animate={inView ? { cx: [155, 200] } : {}}
            transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.5, ease: 'linear' }}
          />
        ))}

        {/* Left systems */}
        {systems.slice(0, 3).map((sys, i) => (
          <motion.g key={sys.label}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 1 + i * 0.15, duration: 0.5 }}
          >
            <rect x={sys.x} y={sys.y - 14} width="65" height="28" rx="5"
              stroke="#0a0a0a" strokeWidth="1" strokeOpacity="0.2" fill="white"/>
            <text x={sys.x + 32} y={sys.y + 5} textAnchor="middle"
              fill="#0a0a0a" fillOpacity="0.4" fontSize="9" fontFamily="system-ui">{sys.label}</text>
            <motion.line x1={sys.x + 65} y1={sys.y} x2="155" y2="150"
              stroke="#0a0a0a" strokeWidth="1" strokeOpacity="0.12" strokeDasharray="5 4"
              initial={{ pathLength: 0 }} animate={inView ? { pathLength: 1 } : {}}
              transition={{ delay: 1.3 + i * 0.15, duration: 0.4 }}
            />
          </motion.g>
        ))}

        {/* Right systems */}
        {systems.slice(3).map((sys, i) => (
          <motion.g key={sys.label}
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 1.5 + i * 0.15, duration: 0.5 }}
          >
            <rect x={sys.x - 65} y={sys.y - 14} width="65" height="28" rx="5"
              stroke="#0a0a0a" strokeWidth="1" strokeOpacity="0.2" fill="white"/>
            <text x={sys.x - 32} y={sys.y + 5} textAnchor="middle"
              fill="#0a0a0a" fillOpacity="0.4" fontSize="9" fontFamily="system-ui">{sys.label}</text>
            <motion.line x1="245" y1="150" x2={sys.x - 65} y2={sys.y}
              stroke="#0a0a0a" strokeWidth="1" strokeOpacity="0.12" strokeDasharray="5 4"
              initial={{ pathLength: 0 }} animate={inView ? { pathLength: 1 } : {}}
              transition={{ delay: 1.7 + i * 0.15, duration: 0.4 }}
            />
          </motion.g>
        ))}
      </svg>
    </div>
  )
}

export default function EnterpriseIntegrationPage() {
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
                  <span className="text-brand-black">Enterprise System Integration</span>
                </nav>
                <p className="text-label text-brand-muted mb-4">Integration & Implementation</p>
                <h1 className="text-[clamp(2rem,4.5vw,4rem)] font-light tracking-[-0.04em] text-brand-black leading-[1.05] mb-6">
                  Enterprise System<br />Integration
                </h1>
                <p className="text-[17px] font-light text-brand-muted leading-[1.8] mb-8 max-w-xl">
                  Seamless connection across complex enterprise technology stacks — APIs, middleware, event-driven architectures, and real-time data synchronisation that eliminates operational silos.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-3 h-[50px] px-8 bg-brand-black text-white text-[14px] font-medium hover:bg-brand-muted transition-all duration-300">
                  Map Your Integration <span>→</span>
                </Link>
              </FadeInView>
            </div>
            <FadeInView delay={0.2}><IntegrationIllustration /></FadeInView>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-site max-w-3xl">
          <FadeInView>
            <p className="text-label text-brand-muted mb-5">The Challenge</p>
            <h2 className="text-[clamp(1.6rem,3vw,2.5rem)] font-light tracking-tighter text-brand-black mb-6">
              Disconnected systems are the hidden tax on every enterprise operation.
            </h2>
            <div className="space-y-4 text-[16px] font-light text-brand-muted leading-[1.85]">
              <p>The average enterprise operates across 15–30 distinct software systems. When these systems don't communicate, data is manually rekeyed, decisions are made on stale information, and teams spend hours each week on reconciliation tasks that should not exist.</p>
              <p>Point-to-point integrations — the instinctive solution — create a web of dependencies that becomes progressively more fragile and expensive to maintain. Every new system addition multiplies the complexity.</p>
              <p>Vanspire designs enterprise integration architectures that are structured, maintainable, and built to scale as your system landscape evolves. We implement integration layers that reduce coupling, improve observability, and create systems that actually behave as one entity.</p>
            </div>
          </FadeInView>
        </div>
      </section>

      <section className="section-pad bg-brand-offwhite">
        <div className="container-site">
          <FadeInView>
            <p className="text-label text-brand-muted mb-5">What We Deliver</p>
            <h2 className="text-[clamp(1.6rem,3vw,2.5rem)] font-light tracking-tighter text-brand-black mb-12">Integration across the enterprise stack</h2>
          </FadeInView>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'API design, documentation, and management', 'Enterprise Service Bus (ESB) implementation',
              'Event-driven architecture design', 'Real-time and batch data synchronisation',
              'iPaaS platform implementation', 'Legacy system API wrapping',
              'Webhook and event pipeline design', 'Integration monitoring and alerting',
            ].map((item, i) => (
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <FadeInView>
              <p className="text-label text-brand-muted mb-5">Technical Approach</p>
              <h2 className="text-[clamp(1.6rem,3vw,2.5rem)] font-light tracking-tighter text-brand-black mb-6">Hub architecture. Loose coupling. High resilience.</h2>
              <div className="space-y-4 text-[15px] font-light text-brand-muted leading-[1.85]">
                <p>We favour hub-and-spoke integration architectures over point-to-point meshes — centralising integration logic, enforcing data contracts, and providing a single observability surface for all system interactions.</p>
                <p>Where event-driven patterns suit the operational model, we implement event streaming architectures using Apache Kafka or managed equivalents, enabling real-time data propagation with the resilience and replayability enterprises require.</p>
                <p>Every integration is version-controlled, documented, and monitored with appropriate alerting — so failures surface immediately, before they cascade through dependent systems.</p>
              </div>
            </FadeInView>
            <FadeInView delay={0.15}>
              <div className="space-y-4">
                {[
                  { label: 'API layer', tech: 'REST, GraphQL, gRPC, OpenAPI 3.0' },
                  { label: 'Messaging', tech: 'Apache Kafka, RabbitMQ, AWS SQS/SNS' },
                  { label: 'iPaaS', tech: 'MuleSoft, Azure Integration Services, n8n' },
                  { label: 'ETL/ELT', tech: 'Apache Airflow, dbt, Fivetran' },
                  { label: 'DataFormats', tech: 'JSON, XML, EDI, HL7, FHIR' },
                  { label: 'Monitoring', tech: 'Datadog, Elastic, custom dashboards' },
                ].map((row, i) => (
                  <FadeInView key={row.label} delay={i * 0.05}>
                    <div className="flex items-start gap-6 py-4 border-b border-brand-border last:border-0">
                      <span className="text-[13px] uppercase tracking-widest text-brand-muted w-28 flex-shrink-0 pt-0.5">{row.label}</span>
                      <span className="text-[14px] font-light text-brand-black">{row.tech}</span>
                    </div>
                  </FadeInView>
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
                { label: 'ERP Implementation', href: '/services/integration/erp-implementation' },
                { label: 'Hospital Management System', href: '/services/integration/hospital-management-system' },
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
        headline="Eliminate your integration complexity."
        subtext="Tell us about your current system landscape and where things break. We'll design an integration architecture that removes the friction."
        primaryLabel="Start the Conversation"
        primaryHref="/contact"
        secondaryLabel="Back to Services"
        secondaryHref="/services"
      />
    </>
  )
}
