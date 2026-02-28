import type { Metadata } from 'next'
import Link from 'next/link'
import MotionWrapper from '@/components/ui/MotionWrapper'
import SectionLabel from '@/components/ui/SectionLabel'

export const metadata: Metadata = {
  title: 'Vanspire Technology | Enterprise Software, Cloud & Digital Systems',
  description:
    'Vanspire Technology builds enterprise web platforms, custom software, cloud infrastructure, IoT systems, and delivers digital transformation consulting. Production-grade. Scalable. Built to last.',
  keywords: [
    'enterprise web development India',
    'custom software development company',
    'cloud architecture services',
    'IoT development solutions',
    'digital transformation consulting',
    'scalable web platforms',
    'enterprise application development',
  ],
  openGraph: {
    title: 'Vanspire Technology | Enterprise Software, Cloud & Digital Systems',
    description:
      'Enterprise-grade web platforms, custom software engineering, cloud architecture, and IoT solutions. Built for scale, built to last.',
    url: '/ventures/technology',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Vanspire Technology' }],
  },
  alternates: { canonical: '/ventures/technology' },
}

const services = [
  {
    id: '01',
    title: 'Software & Web Platforms',
    short: 'Scalable digital products built for performance and longevity.',
    href: '/ventures/technology/services/software-web-platforms',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '02',
    title: 'Application Development',
    short: 'Custom applications designed around real business workflows.',
    href: '/ventures/technology/services/application-development',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '03',
    title: 'Cloud & System Architecture',
    short: 'Secure, scalable infrastructure built for growth.',
    href: '/ventures/technology/services/cloud-system-architecture',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '04',
    title: 'IoT & Smart Solutions',
    short: 'Connected systems bridging physical and digital environments.',
    href: '/ventures/technology/services/iot-smart-solutions',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '05',
    title: 'Digital Transformation',
    short: 'Modernizing operations through technology-led thinking.',
    href: '/ventures/technology/services/digital-transformation',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80',
  },
]

const process = [
  { step: '01', name: 'Discovery', desc: 'Deep discovery of your business context, technical landscape, and success criteria through workshops and audits.' },
  { step: '02', name: 'Architecture', desc: 'System architecture design, data flow mapping, infrastructure blueprints, and API contracts before code begins.' },
  { step: '03', name: 'Development', desc: 'Structured sprint cadence with automated testing, code reviews, and documented progress. Weekly written updates.' },
  { step: '04', name: 'Deployment', desc: 'Zero-downtime production deployments with staged rollouts, monitoring configuration, and automated rollback.' },
  { step: '05', name: 'Scaling', desc: 'Ongoing performance optimisation, infrastructure evolution, and feature iteration as a long-term partner.' },
]

export default function TechnologyPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-24 md:pt-52 md:pb-32 bg-[#060608] relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=80"
            alt=""
            className="w-full h-full object-cover opacity-10"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#060608] via-[#060608]/80 to-transparent" />
        </div>
        <div className="container-site relative z-10">
          <MotionWrapper>
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-white/40">Vanspire Venture · Active</span>
            </div>
          </MotionWrapper>
          <MotionWrapper delay={0.1}>
            <h1 className="text-[clamp(3rem,7vw,6.5rem)] font-light tracking-[-0.04em] text-white leading-[1.0] mt-2 mb-8">
              Technology
            </h1>
          </MotionWrapper>
          <MotionWrapper delay={0.2}>
            <p className="text-[17px] font-light text-white/50 max-w-2xl mb-10 leading-[1.85]">
              Enterprise software, cloud infrastructure, IoT systems, and digital transformation.
              Built for organisations that think in decades, not quarters.
            </p>
          </MotionWrapper>
          <MotionWrapper delay={0.3}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 h-[54px] px-10 bg-white text-[#060608] text-[14px] font-medium hover:bg-white/90 transition-all"
            >
              Start a Conversation →
            </Link>
          </MotionWrapper>
        </div>
      </section>

      {/* Services */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <MotionWrapper className="mb-16">
            <SectionLabel>Services</SectionLabel>
            <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-light tracking-[-0.04em] text-brand-black mt-4 leading-[1.1]">
              What we build.
            </h2>
            <p className="text-[15px] font-light text-brand-muted mt-4 max-w-xl">
              Five focused service areas. Each with dedicated expertise, structured delivery, and long-term support.
            </p>
          </MotionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <MotionWrapper key={svc.id} delay={i * 0.08}>
                <Link href={svc.href} className="group block border border-brand-border hover:border-brand-black transition-all duration-300">
                  <div className="overflow-hidden">
                    <img
                      src={svc.image}
                      alt={svc.title}
                      className="w-full h-[180px] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-8">
                    <span className="text-label text-brand-border block mb-3">{svc.id}</span>
                    <h3 className="text-[18px] font-light tracking-tight text-brand-black mb-3">{svc.title}</h3>
                    <p className="text-[14px] font-light text-brand-muted leading-relaxed mb-6">{svc.short}</p>
                    <span className="text-[12px] font-medium text-brand-black inline-flex items-center gap-1 group-hover:gap-3 transition-all duration-300">
                      Learn more →
                    </span>
                  </div>
                </Link>
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
            <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-light tracking-[-0.04em] text-brand-black mt-4 leading-[1.1]">
              A structured process.<br />Every engagement.
            </h2>
          </MotionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-brand-border">
            {process.map((p, i) => (
              <MotionWrapper key={p.step} delay={i * 0.08}>
                <div className="bg-brand-offwhite p-8 h-full">
                  <span className="text-label text-brand-border block mb-6">{p.step}</span>
                  <h3 className="text-[16px] font-medium text-brand-black mb-3 tracking-tight">{p.name}</h3>
                  <p className="text-[13px] font-light text-brand-muted leading-relaxed">{p.desc}</p>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Insights link */}
      <section className="py-20 bg-white border-t border-brand-border">
        <div className="container-site flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="text-label text-brand-muted mb-2">From Our Insights</p>
            <h3 className="text-[20px] font-light tracking-tight text-brand-black">
              Read how we think about enterprise technology
            </h3>
          </div>
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-[13px] font-medium text-brand-black border-b border-brand-black/20 pb-1 hover:border-brand-black transition-all flex-shrink-0"
          >
            View All Insights →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-[#060608]">
        <div className="container-site max-w-3xl">
          <MotionWrapper>
            <SectionLabel light>Enterprise Engagement</SectionLabel>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-light tracking-[-0.04em] text-white mt-4 mb-6 leading-[1.08]">
              Ready to build something<br />
              <em className="not-italic text-white/40">that scales?</em>
            </h2>
            <p className="text-[15px] font-light text-white/50 mb-10 max-w-xl leading-[1.85]">
              We work with organisations that take their technology seriously. If you are
              looking for a capable, structured, and honest technology partner - let&apos;s begin
              with a conversation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 h-[52px] px-10 bg-white text-[#060608] text-[14px] font-medium hover:bg-white/90 transition-all">
                Start a Conversation →
              </Link>
              <Link href="/ventures" className="inline-flex items-center h-[52px] px-10 border border-white/20 text-white text-[14px] font-light hover:border-white/50 transition-all">
                All Ventures
              </Link>
            </div>
          </MotionWrapper>
        </div>
      </section>
    </>
  )
}
