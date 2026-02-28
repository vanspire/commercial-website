import type { Metadata } from 'next'
import Link from 'next/link'
import MotionWrapper from '@/components/ui/MotionWrapper'
import SectionLabel from '@/components/ui/SectionLabel'
import CTASection from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Vanspire Ventures | Technology & Multi-Sector Brand Group',
  description:
    'Vanspire operates through focused, high-conviction ventures. Technology is our active vertical - building enterprise software, cloud systems, and digital platforms. Designed for deliberate multi-sector expansion.',
  keywords: [
    'technology venture India',
    'enterprise software company',
    'brand group ventures',
    'digital transformation services',
    'multi-sector technology company',
    'scalable venture model',
  ],
  openGraph: {
    title: 'Vanspire Ventures | Technology & Beyond',
    description:
      'Vanspire ventures are built with enterprise standards and long-term intent. Technology is active. More verticals coming.',
    url: '/ventures',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Vanspire Ventures' }],
  },
  alternates: { canonical: '/ventures' },
}

const futureVerticals = [
  { name: 'Manufacturing', desc: 'Production, supply chain, and smart factory systems.' },
  { name: 'Engineering Services', desc: 'Industrial and mechanical engineering vertical.' },
  { name: 'Healthcare Technology', desc: 'Digital health platforms and clinical infrastructure.' },
  { name: 'Financial Infrastructure', desc: 'Fintech, payments, and core banking systems.' },
]

export default function VenturesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-0 md:pt-52 overflow-hidden bg-[#060608]">
        <div className="container-site pb-24 md:pb-32">
          <MotionWrapper>
            <SectionLabel light>The Ventures</SectionLabel>
          </MotionWrapper>
          <MotionWrapper delay={0.1}>
            <h1 className="text-[clamp(2.5rem,6vw,5.5rem)] font-light tracking-[-0.04em] text-white leading-[1.02] mt-4 mb-8 max-w-4xl">
              One Group.<br />
              <em className="not-italic text-white/40">Many Verticals.</em><br />
              One Standard.
            </h1>
          </MotionWrapper>
          <MotionWrapper delay={0.2}>
            <p className="text-[17px] font-light text-white/50 max-w-2xl leading-[1.85]">
              Vanspire deploys focus, expertise, and brand capital into deliberate ventures.
              Each one operates independently but benefits from the group&apos;s infrastructure,
              discipline, and reputation.
            </p>
          </MotionWrapper>
        </div>
        <div className="w-full h-[400px] md:h-[500px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80"
            alt="Vanspire group brand - designed across sectors"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060608] via-transparent to-transparent" />
        </div>
      </section>

      {/* Active Venture - Technology */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <MotionWrapper className="mb-12">
            <SectionLabel>Active Vertical</SectionLabel>
            <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-light tracking-[-0.04em] text-brand-black mt-4 leading-[1.1]">
              Technology
            </h2>
          </MotionWrapper>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <MotionWrapper className="lg:col-span-5">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
                alt="Vanspire Technology Venture"
                className="w-full h-[320px] object-cover"
              />
            </MotionWrapper>

            <MotionWrapper delay={0.15} className="lg:col-span-7 flex flex-col justify-center">
              <span className="text-label text-emerald-600 mb-4 block">● Active since 2024</span>
              <p className="text-[16px] font-light text-brand-muted leading-[1.85] mb-6">
                The Technology venture is Vanspire&apos;s first and fully operational vertical.
                We design and build enterprise web platforms, custom software, cloud infrastructure,
                IoT systems, and provide digital transformation consulting for organisations
                ready to scale intelligently.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {['Web & Platform Development', 'Application Development', 'Cloud Architecture', 'IoT Solutions', 'Digital Transformation'].map((tag) => (
                  <span key={tag} className="text-[11px] font-medium text-brand-muted border border-brand-border px-3 py-1">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-6">
                <Link
                  href="/ventures/technology"
                  className="inline-flex items-center gap-2 h-[48px] px-8 bg-brand-black text-white text-[13px] font-medium hover:bg-brand-muted transition-colors"
                >
                  Explore Technology →
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center h-[48px] px-8 border border-brand-border text-brand-black text-[13px] font-light hover:border-brand-black transition-colors"
                >
                  Start a Project
                </Link>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* The Group Model */}
      <section className="section-pad bg-brand-offwhite">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <MotionWrapper>
              <SectionLabel className="justify-center">The Model</SectionLabel>
              <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-light tracking-[-0.04em] text-brand-black mt-4 leading-[1.1]">
                How the Vanspire venture model works
              </h2>
              <p className="text-[15px] font-light text-brand-muted mt-6 leading-[1.85]">
                Unlike a conglomerate that acquires companies or an agency that adds services,
                Vanspire builds from the ground up - one focused venture at a time, each with
                its own team, brand, and operational depth.
              </p>
            </MotionWrapper>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-brand-border">
            {[
              { n: '01', t: 'Thesis First', d: 'Every vertical begins with a documented thesis - a clear case for why the market needs this and why Vanspire is positioned to deliver it.' },
              { n: '02', t: 'Build Operationally', d: 'We don\'t launch with intentions. We build full operational capability, then open for business. Quality over announcements.' },
              { n: '03', t: 'Expand with Discipline', d: 'Once a venture achieves operational stability, group resources help seed the next. Each success funds the next beginning.' },
            ].map((item, i) => (
              <MotionWrapper key={item.n} delay={i * 0.1}>
                <div className="bg-brand-offwhite p-10 md:p-12">
                  <span className="text-label text-brand-border block mb-6">{item.n}</span>
                  <h3 className="text-[18px] font-medium text-brand-black mb-3 tracking-tight">{item.t}</h3>
                  <p className="text-[14px] font-light text-brand-muted leading-relaxed">{item.d}</p>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Future Verticals */}
      <section className="section-pad bg-[#060608]">
        <div className="container-site">
          <MotionWrapper className="mb-16">
            <SectionLabel light>Future Verticals</SectionLabel>
            <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-light tracking-[-0.04em] text-white mt-4 leading-[1.1]">
              The roadmap is long by design.
            </h2>
            <p className="text-[15px] font-light text-white/40 mt-4 max-w-2xl leading-[1.85]">
              These verticals represent areas where Vanspire&apos;s expertise and infrastructure
              will create natural entry advantages. Timelines are intentionally undisclosed.
              We activate ventures when they are ready - not when they are announced.
            </p>
          </MotionWrapper>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
            {futureVerticals.map((v, i) => (
              <MotionWrapper key={v.name} delay={i * 0.08}>
                <div className="bg-[#060608] p-8 h-full">
                  <span className="text-label text-white/20 block mb-4">Planned</span>
                  <h3 className="text-[18px] font-light text-white/40 mb-3 tracking-tight">{v.name}</h3>
                  <p className="text-[13px] font-light text-white/25 leading-relaxed">{v.desc}</p>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
