'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import FadeInView from '@/components/ui/FadeInView'
import ServiceCTA from '@/components/services/ServiceCTA'

const deliverables = [
  'Cloud architecture design & review',
  'Multi-cloud & hybrid cloud strategy',
  'Kubernetes & container orchestration',
  'Infrastructure as Code (Terraform, Pulumi)',
  'Cloud security & compliance (SOC2, ISO27001)',
  'Cost optimisation & FinOps',
  'Disaster recovery & business continuity',
  'Cloud monitoring, alerting & observability',
]

const useCases = [
  { title: 'Platform Migration', body: 'Structured migration of legacy on-premise infrastructure to cloud providers with zero-downtime transition planning and rollback safety nets.' },
  { title: 'High-Availability Systems', body: 'Multi-region, auto-scaling cloud infrastructure for SaaS platforms and enterprise applications demanding five-nines uptime.' },
  { title: 'Data Platform Infrastructure', body: 'Scalable data lake, warehouse, and pipeline infrastructure on cloud-native services to power analytics, ML, and reporting workloads.' },
  { title: 'Cost-Optimised Architectures', body: 'Infrastructure audits and re-architecturing for organisations spending significantly more on cloud than their workloads require.' },
]

function CloudIllustration() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <div ref={ref} className="w-full max-w-md mx-auto">
      <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        {/* Main cloud */}
        <motion.path
          d="M200 80 C240 80 270 100 270 130 C300 130 320 148 320 170 C320 192 300 210 280 210 L120 210 C96 210 80 196 80 178 C80 158 98 144 118 146 C118 112 156 80 200 80Z"
          stroke="#0a0a0a" strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={inView ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration: 1.4, ease: 'easeInOut' }}
        />
        {/* Cloud fill */}
        <motion.path
          d="M200 80 C240 80 270 100 270 130 C300 130 320 148 320 170 C320 192 300 210 280 210 L120 210 C96 210 80 196 80 178 C80 158 98 144 118 146 C118 112 156 80 200 80Z"
          fill="#0a0a0a" fillOpacity="0.03"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 1.2 }}
        />
        {/* Server nodes inside cloud */}
        {[140, 200, 260].map((cx, i) => (
          <motion.g key={cx}
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 1.6 + i * 0.15, duration: 0.4, type: 'spring' }}
          >
            <rect x={cx - 16} y="155" width="32" height="28" rx="4" stroke="#0a0a0a" strokeWidth="1" strokeOpacity="0.4" fill="white"/>
            <rect x={cx - 10} y="162" width="20" height="4" rx="2" fill="#0a0a0a" fillOpacity="0.2"/>
            <rect x={cx - 10} y="170" width="14" height="4" rx="2" fill="#0a0a0a" fillOpacity="0.15"/>
            <circle cx={cx + 12} cy="163" r="3" fill="#0a0a0a" fillOpacity={0.2 + i * 0.1}/>
          </motion.g>
        ))}
        {/* Connection lines between nodes */}
        {[[156, 200], [216, 260]].map(([x1, x2], i) => (
          <motion.line key={i} x1={x1} y1="169" x2={x2} y2="169" stroke="#0a0a0a" strokeWidth="1" strokeOpacity="0.2"
            strokeDasharray="4 3"
            initial={{ pathLength: 0 }} animate={inView ? { pathLength: 1 } : {}}
            transition={{ delay: 2.2 + i * 0.1, duration: 0.4 }}
          />
        ))}
        {/* Arrow from cloud down */}
        <motion.line x1="200" y1="210" x2="200" y2="250" stroke="#0a0a0a" strokeWidth="1.5" strokeOpacity="0.2"
          initial={{ pathLength: 0 }} animate={inView ? { pathLength: 1 } : {}} transition={{ delay: 2.5 }}
        />
        <motion.path d="M194 244 L200 254 L206 244" stroke="#0a0a0a" strokeWidth="1.5" strokeOpacity="0.2"
          initial={{ pathLength: 0 }} animate={inView ? { pathLength: 1 } : {}} transition={{ delay: 2.6 }}
        />
        {/* Ground elements - three boxes */}
        {[80, 175, 270].map((x, i) => (
          <motion.g key={x}
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 2.7 + i * 0.12, duration: 0.5 }}
          >
            <rect x={x} y="258" width="60" height="28" rx="4" stroke="#0a0a0a" strokeWidth="1" strokeOpacity="0.2"/>
            <rect x={x + 8} y="266" width="44" height="5" rx="2" fill="#0a0a0a" fillOpacity="0.15"/>
            <rect x={x + 8} y="275" width="28" height="4" rx="2" fill="#0a0a0a" fillOpacity="0.08"/>
          </motion.g>
        ))}
        {/* Upward sync arrows */}
        {[110, 205, 300].map((x, i) => (
          <motion.path key={x} d={`M${x} 258 L${x} 242`} stroke="#0a0a0a" strokeWidth="1" strokeOpacity="0.15"
            strokeDasharray="3 3"
            initial={{ pathLength: 0 }} animate={inView ? { pathLength: 1 } : {}}
            transition={{ delay: 2.9 + i * 0.1, duration: 0.3 }}
          />
        ))}
        {/* Top label */}
        <motion.text x="200" y="60" textAnchor="middle" fill="#0a0a0a" fillOpacity="0.3" fontSize="10" fontFamily="system-ui"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 1.8 }}
        >CLOUD INFRASTRUCTURE</motion.text>
      </svg>
    </div>
  )
}

export default function CloudInfrastructurePage() {
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
                  <span className="text-brand-black">Cloud Infrastructure</span>
                </nav>
                <p className="text-label text-brand-muted mb-4">Digital Solutions</p>
                <h1 className="text-[clamp(2rem,4.5vw,4rem)] font-light tracking-[-0.04em] text-brand-black leading-[1.05] mb-6">
                  Cloud<br />Infrastructure
                </h1>
                <p className="text-[17px] font-light text-brand-muted leading-[1.8] mb-8 max-w-xl">
                  Resilient, secure, and cost-efficient cloud architecture across AWS, Azure, and GCP - engineered for mission-critical workloads and built to scale without operational surprises.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-3 h-[50px] px-8 bg-brand-black text-white text-[14px] font-medium hover:bg-brand-muted transition-all duration-300">
                  Assess Your Infrastructure <span>→</span>
                </Link>
              </FadeInView>
            </div>
            <FadeInView delay={0.2}><CloudIllustration /></FadeInView>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-site max-w-3xl">
          <FadeInView>
            <p className="text-label text-brand-muted mb-5">The Challenge</p>
            <h2 className="text-[clamp(1.6rem,3vw,2.5rem)] font-light tracking-tighter text-brand-black mb-6">
              Cloud bills grow. Reliability erodes. Security gaps widen. Usually simultaneously.
            </h2>
            <div className="space-y-4 text-[16px] font-light text-brand-muted leading-[1.85]">
              <p>The promise of cloud infrastructure is operational agility and elastic scalability. The reality, for many organisations, is spiralling costs, fragile architectures, and security compliance gaps that surface at the worst possible moments.</p>
              <p>Poorly structured cloud environments accrue technical debt faster than any other part of the stack. A single poorly-designed VPC, over-provisioned EC2 fleet, or missing IAM policy can cost hundreds of thousands - in spend, in downtime, or in compliance remediation.</p>
              <p>Vanspire designs cloud infrastructure with the discipline of long-term operational ownership. Every decision is documented, every resource is tagged, and every security control is implemented deliberately - not opportunistically.</p>
            </div>
          </FadeInView>
        </div>
      </section>

      <section className="section-pad bg-brand-offwhite">
        <div className="container-site">
          <FadeInView>
            <p className="text-label text-brand-muted mb-5">What We Deliver</p>
            <h2 className="text-[clamp(1.6rem,3vw,2.5rem)] font-light tracking-tighter text-brand-black mb-12">Cloud engineering across the full spectrum</h2>
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
              <h2 className="text-[clamp(1.6rem,3vw,2.5rem)] font-light tracking-tighter text-brand-black mb-6">Infrastructure as code. Security as default.</h2>
              <div className="space-y-5 text-[15px] font-light text-brand-muted leading-[1.85]">
                <p>We implement all infrastructure through code - Terraform or Pulumi - ensuring every resource is version-controlled, reviewable, and reproducible. No click-ops. No undocumented resources.</p>
                <p>Security controls are not retrofitted. IAM least-privilege, network segmentation, encryption at rest and in transit, secrets management, and vulnerability scanning are baseline requirements on every engagement.</p>
                <p>Cost governance is built in from the start - resource tagging taxonomies, budget alerts, right-sizing analysis, and reserved capacity planning prevent the cloud waste that compounds silently over months.</p>
              </div>
            </FadeInView>
            <FadeInView delay={0.15}>
              <div className="space-y-4">
                {[
                  { label: 'Providers', tech: 'AWS, Google Cloud, Microsoft Azure' },
                  { label: 'IaC', tech: 'Terraform, Pulumi, AWS CDK' },
                  { label: 'Containers', tech: 'Kubernetes, Docker, ECS, GKE' },
                  { label: 'CI/CD', tech: 'GitHub Actions, ArgoCD, Flux' },
                  { label: 'Security', tech: 'AWS GuardDuty, Vault, Cloud Armor' },
                  { label: 'Observability', tech: 'Datadog, Prometheus, Grafana, CloudWatch' },
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
            <h2 className="text-[clamp(1.6rem,3vw,2.5rem)] font-light tracking-tighter text-brand-black mb-12">Infrastructure for complex operational requirements</h2>
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
                { label: 'Application Development', href: '/services/digital-solutions/application-development' },
                { label: 'Enterprise System Integration', href: '/services/integration/enterprise-system-integration' },
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
        headline="Let's assess your cloud infrastructure."
        subtext="We offer architecture review engagements to identify risks, inefficiencies, and opportunities before they become operational issues."
        primaryLabel="Request an Assessment"
        primaryHref="/contact"
        secondaryLabel="Back to Services"
        secondaryHref="/services"
      />
    </>
  )
}
