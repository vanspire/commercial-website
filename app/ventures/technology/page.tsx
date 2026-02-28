import type { Metadata } from 'next'
import MotionWrapper from '@/components/ui/MotionWrapper'
import SectionLabel from '@/components/ui/SectionLabel'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Vanspire Technology | Enterprise Software & Cloud',
  description:
    'Vanspire Technology builds enterprise web platforms, custom software, cloud infrastructure, IoT systems, and delivers digital transformation consulting. Production-grade. Scalable. Reliable.',
  keywords: [
    'software development company',
    'enterprise web development',
    'scalable cloud systems',
    'IoT development solutions',
    'digital transformation consulting',
    'custom software engineering',
    'cloud infrastructure architecture',
  ],
  openGraph: {
    title: 'Vanspire Technology | Enterprise Software, Cloud & IoT',
    description:
      'Enterprise-grade web platforms, custom software engineering, cloud architecture, and IoT solutions. Built for scale, built to last.',
    url: '/ventures/technology',
  },
  alternates: { canonical: '/ventures/technology' },
}

const services = [
  {
    id: '01',
    title: 'Web & Platform Development',
    description:
      'We architect and build enterprise-grade web platforms that are designed for scale from day one. Our approach goes beyond templating - we engineer full-stack systems with performant front-ends, robust APIs, and maintainable codebases. Whether you need a customer portal, SaaS platform, or complex multi-tenant application, we deliver production-ready solutions that your teams can operate and your business can grow on. Every platform is built with accessibility, security, and long-term maintainability as non-negotiables.',
  },
  {
    id: '02',
    title: 'Custom Software Engineering',
    description:
      'Off-the-shelf software rarely fits complex operational requirements. Our custom software engineering practice designs and builds purpose-built systems that align precisely with your business logic, data flows, and integration landscape. We engage at the architecture level - not just the feature level - ensuring that the software we deliver becomes a true asset, not a liability. From internal tooling to mission-critical enterprise applications, we bring structured engineering discipline to every engagement.',
  },
  {
    id: '03',
    title: 'Cloud & Infrastructure Architecture',
    description:
      'Scalable cloud infrastructure is not a luxury - it is the foundation of resilient enterprise software. Our cloud and infrastructure practice designs, provisions, and optimises architectures across AWS, GCP, and Azure. We focus on reliability, cost efficiency, security compliance, and developer experience. From greenfield cloud migrations to hybrid infrastructure design and DevOps pipeline optimisation, we bring enterprise-grade cloud expertise to organisations across industries.',
  },
  {
    id: '04',
    title: 'IoT & Smart Systems',
    description:
      'The convergence of physical and digital systems creates profound opportunity for organisations that are prepared to capture it. Our IoT and smart systems practice designs connected device architectures, real-time data pipelines, edge computing solutions, and smart facility management systems. We bridge embedded hardware, communication protocols, cloud backends, and operational dashboards into coherent, maintainable systems. Whether you are building a smart factory, connected fleet, or building management solution, we bring the full stack to your IoT ambition.',
  },
  {
    id: '05',
    title: 'Digital Transformation Consulting',
    description:
      'Technology adoption without strategy is expensive. Our digital transformation consulting practice works with leadership teams to design transformation roadmaps that are grounded in business outcomes, not technology trends. We assess your current technology landscape, identify leverage points, and design phased programmes that de-risk transformation while accelerating value delivery. We stay engaged through implementation - not just advisory - ensuring the strategy translates into working systems.',
  },
]

const process = [
  {
    step: '01',
    name: 'Discovery',
    description:
      'We begin every engagement with deep discovery - understanding your business context, technical landscape, constraints, and success criteria. This phase includes stakeholder interviews, system audits, and requirement workshops.',
  },
  {
    step: '02',
    name: 'Architecture',
    description:
      'Before any code is written, we design the system architecture. We produce technical design documents, data flow diagrams, infrastructure blueprints, and API contracts. Architecture reviews include security and scalability assessments.',
  },
  {
    step: '03',
    name: 'Development',
    description:
      'Engineering follows a structured sprint cadence with regular demos, automated testing, code reviews, and documented progress. We maintain a shared project management workspace and provide weekly written updates.',
  },
  {
    step: '04',
    name: 'Deployment',
    description:
      'Production deployments are managed with zero-downtime strategies, staged rollouts, and automated rollback capability. We configure monitoring, alerting, and logging before handover. Nothing ships without a deployment checklist.',
  },
  {
    step: '05',
    name: 'Scaling',
    description:
      'Post-launch, we support scaling through performance optimisation, infrastructure right-sizing, feature iteration, and ongoing architecture evolution. We are a long-term partner - not a one-time vendor.',
  },
]

export default function TechnologyPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-24 md:pt-48 md:pb-28 bg-brand-black text-white">
        <div className="container-site">
          <MotionWrapper>
            <SectionLabel light>Vanspire Venture · Active</SectionLabel>
          </MotionWrapper>
          <MotionWrapper delay={0.1}>
            <h1 className="text-display-lg text-white max-w-3xl mt-4 mb-8">
              Technology
            </h1>
          </MotionWrapper>
          <MotionWrapper delay={0.2}>
            <p className="text-body-lg text-white/50 max-w-2xl mb-10">
              Enterprise software, cloud infrastructure, IoT systems, and digital
              transformation. Built for organisations that think in decades, not quarters.
            </p>
          </MotionWrapper>
          <MotionWrapper delay={0.3}>
            <Link
              href="/contact"
              className="inline-flex items-center h-[52px] px-10 bg-white text-brand-black text-[14px] font-medium hover:bg-white/90 transition-all duration-300"
            >
              Start a Conversation
            </Link>
          </MotionWrapper>
        </div>
      </section>

      {/* Services */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <MotionWrapper className="mb-16">
            <SectionLabel>Services</SectionLabel>
            <h2 className="text-display-md text-brand-black max-w-xl mt-4">
              What we build.
            </h2>
          </MotionWrapper>

          <div className="divide-y divide-brand-border">
            {services.map((svc, i) => (
              <MotionWrapper key={svc.id} delay={i * 0.08}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 py-12">
                  <div className="lg:col-span-1">
                    <span className="text-label text-brand-border">{svc.id}</span>
                  </div>
                  <div className="lg:col-span-4">
                    <h3 className="text-xl md:text-2xl font-light tracking-tight text-brand-black">
                      {svc.title}
                    </h3>
                  </div>
                  <div className="lg:col-span-7">
                    <p className="text-[15px] font-light text-brand-muted leading-[1.85]">
                      {svc.description}
                    </p>
                  </div>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-pad bg-brand-offwhite">
        <div className="container-site">
          <MotionWrapper className="mb-16">
            <SectionLabel>How We Work</SectionLabel>
            <h2 className="text-display-md text-brand-black max-w-xl mt-4">
              A structured process.<br />Every time.
            </h2>
          </MotionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-brand-border">
            {process.map((step, i) => (
              <MotionWrapper key={step.step} delay={i * 0.08}>
                <div className="bg-brand-offwhite p-8 h-full">
                  <span className="text-label text-brand-border block mb-6">{step.step}</span>
                  <h3 className="text-[17px] font-medium text-brand-black mb-4 tracking-tight">
                    {step.name}
                  </h3>
                  <p className="text-[13px] font-light text-brand-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section-pad bg-brand-black">
        <div className="container-site">
          <div className="max-w-3xl">
            <MotionWrapper>
              <SectionLabel light>Enterprise-Level Engagement</SectionLabel>
              <h2 className="text-display-md text-white mt-4 mb-6">
                Ready to build something that scales?
              </h2>
              <p className="text-body text-white/50 mb-10">
                We work with organisations that take their technology seriously.
                If you are looking for a capable, structured, and honest technology
                partner - let&apos;s begin with a conversation.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center h-[52px] px-10 bg-white text-brand-black text-[14px] font-medium hover:bg-white/90 transition-all"
                >
                  Start a Conversation
                </Link>
                <Link
                  href="/ventures"
                  className="inline-flex items-center h-[52px] px-10 border border-white/20 text-white text-[14px] font-light hover:border-white/50 transition-all"
                >
                  All Ventures
                </Link>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>
    </>
  )
}
