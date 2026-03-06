'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import FadeInView from '@/components/ui/FadeInView'
import ServiceCTA from '@/components/services/ServiceCTA'

const modules = [
  {
    id: 'op',
    title: 'Outpatient (OP)',
    description: 'Complete outpatient management - appointment scheduling, doctor availability, registration, consultation workflow, prescription generation, and follow-up scheduling in a unified clinical interface.',
    features: ['Online & in-person appointment booking', 'Doctor schedule & availability management', 'Digital consultation records', 'e-Prescription with drug database', 'Token display & queue management'],
  },
  {
    id: 'ip',
    title: 'Inpatient (IP)',
    description: 'End-to-end inpatient admission management - from bed allocation and ward management to nursing workflows, discharge planning, and inter-department coordination.',
    features: ['Bed management & ward allocation', 'Nursing station workflows', 'Daily clinical charting', 'Discharge summary generation', 'Diet & meal management'],
  },
  {
    id: 'pharmacy',
    title: 'Pharmacy',
    description: 'Integrated pharmacy management with complete inventory control, prescription processing, drug interaction alerts, and supplier management - connected to clinical modules for zero data re-entry.',
    features: ['e-Prescription integration', 'Drug inventory & expiry management', 'Drug interaction alerts', 'Supplier & purchase orders', 'FIFO dispensing'],
  },
  {
    id: 'billing',
    title: 'Billing & Finance',
    description: 'Comprehensive revenue management from service billing to insurance claims processing - designed to reduce revenue leakage and accelerate collections.',
    features: ['OP & IP billing automation', 'Insurance & TPA management', 'Credit facility management', 'Collection dashboards', 'GST-compliant invoicing'],
  },
  {
    id: 'lab',
    title: 'Laboratory (LIMS)',
    description: 'Full laboratory information management - test requisition, sample tracking, result entry, verification workflow, and automated report delivery to clinicians and patients.',
    features: ['Test request & sample tracking', 'Result entry & validation', 'Critical value alerting', 'Lab report generation & delivery', 'Machine interface integration (HL7)'],
  },
  {
    id: 'radiology',
    title: 'Radiology & Imaging',
    description: 'Radiology workflow management from requisition to report - integrated with PACS systems for image storage and retrieval, with radiologist reporting tools and automated delivery.',
    features: ['Radiology order management', 'PACS/DICOM integration', 'Radiologist reporting interface', 'Film tracking & control', 'Automated report delivery'],
  },
  {
    id: 'admin',
    title: 'Administration',
    description: 'Complete back-office administration - staff management, payroll, leave, procurement, asset management, and facility operations in a unified administrative environment.',
    features: ['Staff & HR management', 'Payroll integration', 'Procurement & vendors', 'Asset & equipment management', 'Facility & housekeeping management'],
  },
  {
    id: 'reports',
    title: 'Analytics & Reports',
    description: 'Real-time operational dashboards and regulatory reporting for hospital management - financial performance, clinical productivity, bed occupancy, and custom report builders.',
    features: ['Real-time operational dashboards', 'Financial performance reports', 'Clinical productivity metrics', 'Regulatory & compliance reports', 'Custom report builder'],
  },
]

function HMSIllustration() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const modulePositions = [
    { label: 'OP', x: 80, y: 60 }, { label: 'IP', x: 200, y: 40 }, { label: 'Pharmacy', x: 320, y: 60 },
    { label: 'Lab', x: 50, y: 170 }, { label: 'Billing', x: 350, y: 170 },
    { label: 'Admin', x: 80, y: 270 }, { label: 'Radiology', x: 200, y: 280 }, { label: 'Analytics', x: 320, y: 270 },
  ]

  return (
    <div ref={ref} className="w-full max-w-md mx-auto">
      <svg viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        {/* Core platform */}
        <motion.rect x="148" y="120" width="104" height="80" rx="10"
          stroke="#0a0a0a" strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={inView ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration: 1, ease: 'easeInOut' }}
        />
        <motion.rect x="148" y="120" width="104" height="80" rx="10" fill="#0a0a0a" fillOpacity="0.05"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.8 }}
        />
        {/* Cross symbol */}
        <motion.path d="M193 148 L207 148 M200 141 L200 175"
          stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round"
          initial={{ pathLength: 0 }} animate={inView ? { pathLength: 1 } : {}}
          transition={{ delay: 0.9, duration: 0.5 }}
        />
        <motion.text x="200" y="208" textAnchor="middle" fill="#0a0a0a" fillOpacity="0.3" fontSize="8" fontFamily="system-ui"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 1 }}>
          HMS CORE
        </motion.text>

        {/* Module nodes */}
        {modulePositions.map((mod, i) => {
          const dx = mod.x - 200
          const dy = mod.y - 160
          const dist = Math.sqrt(dx * dx + dy * dy)
          const nx = 200 + (dx / dist) * 52
          const ny = 160 + (dy / dist) * 40

          return (
            <motion.g key={mod.label}
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1.2 + i * 0.12, duration: 0.4, type: 'spring' }}
            >
              <motion.line
                x1={nx} y1={ny} x2={mod.x} y2={mod.y}
                stroke="#0a0a0a" strokeWidth="1" strokeOpacity="0.12" strokeDasharray="4 3"
                initial={{ pathLength: 0 }} animate={inView ? { pathLength: 1 } : {}}
                transition={{ delay: 1.4 + i * 0.12, duration: 0.3 }}
              />
              <circle cx={mod.x} cy={mod.y} r="22" stroke="#0a0a0a" strokeWidth="1" strokeOpacity="0.2" fill="white"/>
              <text x={mod.x} y={mod.y + 4} textAnchor="middle" fill="#0a0a0a" fillOpacity="0.45" fontSize="7.5" fontFamily="system-ui">{mod.label}</text>
            </motion.g>
          )
        })}

        {/* Pulsing ring */}
        <motion.circle cx="200" cy="160" r="60"
          stroke="#0a0a0a" strokeWidth="0.5" strokeOpacity="0.06"
          animate={inView ? { r: [60, 70, 60], opacity: [0.06, 0.1, 0.06] } : {}}
          transition={{ repeat: Infinity, duration: 3 }}
        />
      </svg>
    </div>
  )
}

function ModuleCard({ module, index }: { module: typeof modules[0], index: number }) {
  const [expanded, setExpanded] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="border border-brand-border bg-white overflow-hidden"
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left p-6 flex items-start justify-between gap-4 hover:bg-brand-offwhite/50 transition-colors"
      >
        <div>
          <span className="text-[11px] uppercase tracking-widest text-brand-muted">{String(index + 1).padStart(2, '0')}</span>
          <h3 className="text-[17px] font-light tracking-tight text-brand-black mt-1">{module.title}</h3>
        </div>
        <motion.span
          animate={{ rotate: expanded ? 45 : 0 }}
          className="text-brand-muted text-xl font-light flex-shrink-0 mt-1"
        >+</motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: expanded ? 'auto' : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-6 border-t border-brand-border pt-5">
          <p className="text-[14px] font-light text-brand-muted leading-[1.75] mb-5">{module.description}</p>
          <ul className="space-y-2">
            {module.features.map((f) => (
              <li key={f} className="flex items-center gap-3 text-[13px] font-light text-brand-black">
                <span className="flex-shrink-0 w-1 h-1 rounded-full bg-brand-muted" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function HMSPage() {
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
                  <span className="text-brand-black">Hospital Management System</span>
                </nav>
                <div className="inline-flex items-center px-3 py-1.5 bg-brand-black text-white text-[10px] uppercase tracking-widest mb-5">
                  Proprietary SaaS Product
                </div>
                <h1 className="text-[clamp(2rem,4.5vw,4rem)] font-light tracking-[-0.04em] text-brand-black leading-[1.05] mb-3">
                  Vanspire HMS
                </h1>
                <p className="text-[1.1rem] font-light text-brand-muted mb-4">Hospital Management System</p>
                <p className="text-[17px] font-light text-brand-muted leading-[1.8] mb-8 max-w-xl">
                  A complete, enterprise-grade SaaS platform engineered for modern healthcare facilities - from small clinics to multi-facility hospital networks. One integrated system for every clinical, administrative, and financial workflow.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="inline-flex items-center gap-3 h-[50px] px-8 bg-brand-black text-white text-[14px] font-medium hover:bg-brand-muted transition-all duration-300">
                    Request a Demo <span>→</span>
                  </Link>
                  <Link href="/contact" className="inline-flex items-center h-[50px] px-8 border border-brand-border text-brand-black text-[14px] font-light hover:border-brand-black transition-all duration-300">
                    Talk to Our Team
                  </Link>
                </div>
              </FadeInView>
            </div>
            <FadeInView delay={0.2}>
              <HMSIllustration />
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-10 bg-brand-black text-white">
        <div className="container-site">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { v: '8+', l: 'Core Modules' },
              { v: '100+', l: 'Sub-features' },
              { v: 'Cloud', l: 'Deployment' },
              { v: '24/7', l: 'Support SLA' },
            ].map((s, i) => (
              <FadeInView key={s.l} delay={i * 0.1}>
                <div className="text-center md:text-left">
                  <p className="text-3xl font-light tracking-tight text-white mb-1">{s.v}</p>
                  <p className="text-[11px] uppercase tracking-widest text-white/40">{s.l}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Product Intro */}
      <section className="section-pad bg-white">
        <div className="container-site max-w-3xl">
          <FadeInView>
            <p className="text-label text-brand-muted mb-5">About Vanspire HMS</p>
            <h2 className="text-[clamp(1.6rem,3vw,2.5rem)] font-light tracking-tighter text-brand-black mb-6">
              Healthcare operations are too complex for generic software.
            </h2>
            <div className="space-y-5 text-[16px] font-light text-brand-muted leading-[1.85]">
              <p>
                Most hospitals operate across three to five disconnected software systems - a billing tool that doesn't talk to clinical records, a pharmacy system that requires manual updates from prescriptions, and an administrative platform that operates entirely independently. The result is data silos, manual reconciliation, revenue leakage, and clinical staff who spend more time navigating software than treating patients.
              </p>
              <p>
                Vanspire HMS is a proprietary, purpose-built SaaS platform that unifies every clinical, administrative, and financial workflow in a single integrated system. Built from the ground up for Indian healthcare workflows, regulatory requirements, and operational realities - HMS is not an adaptation of generic ERP software. It is healthcare management software designed by people who understand healthcare operations.
              </p>
              <p>
                The system is built cloud-native, deployed on secure, India-regional infrastructure, and designed to scale from a single-specialty clinic to a multi-facility hospital network without architectural change.
              </p>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Core Modules */}
      <section className="section-pad bg-brand-offwhite">
        <div className="container-site">
          <FadeInView>
            <p className="text-label text-brand-muted mb-5">Core Modules</p>
            <h2 className="text-[clamp(1.6rem,3vw,2.5rem)] font-light tracking-tighter text-brand-black mb-4">
              Every clinical and administrative function, integrated.
            </h2>
            <p className="text-[15px] font-light text-brand-muted mb-12 max-w-2xl">
              Each module is independently functional and deeply integrated with all others - data entered once flows across the entire system.
            </p>
          </FadeInView>
          <div className="space-y-2">
            {modules.map((mod, i) => (
              <ModuleCard key={mod.id} module={mod} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeInView>
              <p className="text-label text-brand-muted mb-5">Platform Architecture</p>
              <h2 className="text-[clamp(1.6rem,3vw,2.5rem)] font-light tracking-tighter text-brand-black mb-6">
                Cloud-native. API-first. Built to scale.
              </h2>
              <div className="space-y-5 text-[15px] font-light text-brand-muted leading-[1.85]">
                <p>Vanspire HMS is built on a microservices architecture - each clinical domain is an independently deployable service with its own data store and API surface. This enables hospital-specific module activation, isolated scaling during high-demand periods, and zero-downtime feature updates.</p>
                <p>The API layer is built on OpenAPI 3.0 specifications, enabling integration with medical devices, third-party diagnostic systems, insurance portals, and custom hospital systems through standardised, documented contracts.</p>
                <p>The frontend is designed mobile-first - accessible on tablets at nursing stations, smartphones for field clinicians, and desktop workstations for administration teams - with a single codebase and consistent experience across surfaces.</p>
              </div>
            </FadeInView>
            <FadeInView delay={0.15}>
              <div className="space-y-4">
                {[
                  { label: 'Deployment', tech: 'AWS India Region (ap-south-1), Multi-AZ' },
                  { label: 'Architecture', tech: 'Microservices, Event-driven, API-first' },
                  { label: 'Database', tech: 'PostgreSQL (primary), Redis (cache), S3 (documents)' },
                  { label: 'Frontend', tech: 'Next.js, React, Progressive Web App (PWA)' },
                  { label: 'Integrations', tech: 'HL7 FHIR, DICOM, insurance portal APIs' },
                  { label: 'Auth', tech: 'Role-based access control (RBAC), MFA, SSO' },
                  { label: 'Compliance', tech: 'ABDM-ready, NABH-aligned, DPDP Act' },
                  { label: 'Uptime SLA', tech: '99.9% production uptime commitment' },
                ].map((row, i) => (
                  <FadeInView key={row.label} delay={i * 0.05}>
                    <div className="flex items-start gap-6 py-4 border-b border-brand-border last:border-0">
                      <span className="text-[12px] uppercase tracking-widest text-brand-muted w-28 flex-shrink-0 pt-0.5">{row.label}</span>
                      <span className="text-[13px] font-light text-brand-black">{row.tech}</span>
                    </div>
                  </FadeInView>
                ))}
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="section-pad bg-brand-offwhite">
        <div className="container-site">
          <FadeInView>
            <p className="text-label text-brand-muted mb-5">Security & Compliance</p>
            <h2 className="text-[clamp(1.6rem,3vw,2.5rem)] font-light tracking-tighter text-brand-black mb-4">
              Patient data requires uncompromising security.
            </h2>
            <p className="text-[15px] font-light text-brand-muted mb-12 max-w-2xl">
              HMS is designed to meet the security expectations of enterprise healthcare - from data encryption to role-based access controls and full audit trails.
            </p>
          </FadeInView>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: 'Data Encryption', body: 'AES-256 encryption at rest for all patient and financial data. TLS 1.3 for all data in transit. No unencrypted sensitive data outside the platform boundary.' },
              { title: 'Role-Based Access Control', body: 'Granular RBAC with 30+ pre-defined roles across clinical, administrative, and finance functions. Custom role definition available for complex organisational structures.' },
              { title: 'Audit Trails', body: 'Immutable audit logs for every data access, modification, and deletion across the platform. Exportable for compliance reporting and internal review.' },
              { title: 'ABDM Readiness', body: 'Aligned with Ayushman Bharat Digital Mission (ABDM) architecture for ABHA number integration, HFR registration, and interoperability with national health systems.' },
              { title: 'Backup & Recovery', body: 'Automated daily backups with 30-day retention. Point-in-time recovery to within 5 minutes. Cross-region backup replication for disaster recovery compliance.' },
              { title: 'Penetration Testing', body: 'Annual security assessments by independent third-party security firms. Vulnerabilities addressed under a structured responsible disclosure programme.' },
            ].map((item, i) => (
              <FadeInView key={item.title} delay={i * 0.09}>
                <div className="p-8 bg-white border border-brand-border h-full">
                  <h3 className="text-[16px] font-light tracking-tight text-brand-black mb-3">{item.title}</h3>
                  <p className="text-[13px] font-light text-brand-muted leading-[1.75]">{item.body}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Deployment Models */}
      <section className="section-pad bg-white">
        <div className="container-site max-w-4xl">
          <FadeInView>
            <p className="text-label text-brand-muted mb-5">Deployment Models</p>
            <h2 className="text-[clamp(1.6rem,3vw,2.5rem)] font-light tracking-tighter text-brand-black mb-12">
              Flexible deployment to match your operational and compliance requirements.
            </h2>
          </FadeInView>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { title: 'Multi-Tenant SaaS', badge: 'Recommended', body: 'Hosted on Vanspire\'s managed cloud infrastructure. Fastest deployment, lowest initial cost, automatic updates, and shared infrastructure with complete data isolation. Ideal for facilities up to 300 beds.' },
              { title: 'Dedicated Cloud', badge: 'Enterprise', body: 'Dedicated cloud infrastructure within your own cloud account, managed by Vanspire. Complete data sovereignty with the operational convenience of managed service. Recommended for large hospitals and groups.' },
              { title: 'On-Premise', badge: 'Custom', body: 'Deployed on your own servers or private data centre. Suitable for facilities with specific regulatory requirements, government mandates, or existing infrastructure investments. Available with optional managed services.' },
            ].map((model, i) => (
              <FadeInView key={model.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="p-8 border border-brand-border bg-white h-full"
                >
                  <span className="inline-block text-[10px] uppercase tracking-widest px-2 py-1 bg-brand-offwhite text-brand-muted mb-4">{model.badge}</span>
                  <h3 className="text-[17px] font-light tracking-tight text-brand-black mb-4">{model.title}</h3>
                  <p className="text-[13px] font-light text-brand-muted leading-[1.75]">{model.body}</p>
                </motion.div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Scalability */}
      <section className="section-pad bg-brand-offwhite">
        <div className="container-site max-w-3xl">
          <FadeInView>
            <p className="text-label text-brand-muted mb-5">Scalability</p>
            <h2 className="text-[clamp(1.6rem,3vw,2.5rem)] font-light tracking-tighter text-brand-black mb-6">
              Architected to grow with your organisation.
            </h2>
            <div className="space-y-5 text-[16px] font-light text-brand-muted leading-[1.85]">
              <p>Vanspire HMS is designed to scale from a 20-bed clinic to a 2,000-bed multi-specialty hospital without platform change. The microservices architecture allows individual modules to scale independently - pharmacy during peak prescription hours, billing during morning discharge periods - without impacting the rest of the system.</p>
              <p>Multi-facility support is built into the core data model. A hospital group operating across five cities can manage all locations from a single HMS instance, with facility-level data segregation, consolidated reporting across the group, and central procurement visibility.</p>
              <p>Pricing scales with your usage - we operate a fair, transparent SaaS pricing model tied to bed count and active users, not to the number of integrations or modules you activate. Growth should not be penalised.</p>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <FadeInView>
            <p className="text-label text-brand-muted mb-5">Who Uses Vanspire HMS</p>
            <h2 className="text-[clamp(1.6rem,3vw,2.5rem)] font-light tracking-tighter text-brand-black mb-12">
              Built for modern healthcare facilities at every scale.
            </h2>
          </FadeInView>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Multi-specialty Hospitals', body: 'Large hospitals with complex clinical workflows across 10+ specialties, 200+ beds, and multiple revenue cycle requirements benefit from HMS\'s comprehensive module coverage and deep integration between clinical and financial workflows.' },
              { title: 'Specialty Clinics & Day Care', body: 'Focused facilities - orthopaedic clinics, IVF centres, dialysis centres - need purpose-configured modules without the overhead of unused features. HMS delivers configurable module activation to match your clinical scope.' },
              { title: 'Hospital Groups & Networks', body: 'Multi-facility healthcare groups centralise procurement, HR, finance, and clinical protocols across all facilities from a single HMS instance, with local operational autonomy maintained at the facility level.' },
              { title: 'Diagnostic Centres', body: 'Standalone or hospital-linked diagnostic centres benefit from Vanspire HMS\'s Laboratory Information System (LIMS) and Radiology modules, with online report delivery directly to patients and referring clinicians.' },
            ].map((uc, i) => (
              <FadeInView key={uc.title} delay={i * 0.1}>
                <div className="p-8 bg-brand-offwhite border border-brand-border h-full">
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

      {/* Demo CTA */}
      <section className="section-pad bg-brand-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}/>
        <div className="container-site relative z-10">
          <div className="max-w-3xl">
            <FadeInView>
              <p className="text-label text-white/30 mb-5">Get Started with HMS</p>
              <h2 className="text-display-md text-white mb-6">
                See Vanspire HMS<br />in your environment.
              </h2>
              <p className="text-[16px] font-light text-white/50 leading-[1.8] max-w-xl mb-10">
                We offer structured product demonstrations tailored to your facility type, size, and specific operational challenges. Our team will walk through the modules most relevant to your use case - not a generic sales deck.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
                {[
                  { num: '01', label: 'Submit your inquiry through our contact form' },
                  { num: '02', label: 'Our team schedules a discovery call to understand your requirements' },
                  { num: '03', label: 'Receive a customised product demonstration and proposal' },
                ].map((step) => (
                  <div key={step.num} className="border border-white/10 p-5">
                    <p className="text-[11px] uppercase tracking-widest text-white/30 mb-2">{step.num}</p>
                    <p className="text-[13px] font-light text-white/60 leading-[1.6]">{step.label}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <motion.div whileHover={{ scale: 0.98 }} whileTap={{ scale: 0.96 }}>
                  <Link href="/contact" className="inline-flex items-center gap-3 h-[52px] px-8 bg-white text-brand-black text-[14px] font-medium hover:bg-white/90 transition-all duration-300">
                    Request a Demo <span>→</span>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 0.98 }} whileTap={{ scale: 0.96 }}>
                  <Link href="/services" className="inline-flex items-center h-[52px] px-8 border border-white/20 text-white text-[14px] font-light hover:border-white/60 transition-all duration-300">
                    Explore All Services
                  </Link>
                </motion.div>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>
    </>
  )
}
