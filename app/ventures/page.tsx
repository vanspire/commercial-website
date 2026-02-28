import type { Metadata } from 'next'
import MotionWrapper from '@/components/ui/MotionWrapper'
import SectionLabel from '@/components/ui/SectionLabel'
import Link from 'next/link'
import CTASection from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Our Ventures',
  description:
    'Vanspire operates through focused, high-conviction ventures. Technology is our active vertical - building enterprise software, cloud systems, and digital platforms. More ventures to follow.',
  keywords: [
    'technology venture',
    'digital transformation services',
    'software innovation',
    'enterprise technology company',
    'brand group ventures',
  ],
  openGraph: {
    title: 'Vanspire Ventures | Technology & Beyond',
    description:
      'Vanspire ventures are built with enterprise standards and long-term intent. Technology is active. More verticals coming.',
    url: '/ventures',
  },
  alternates: { canonical: '/ventures' },
}

const ventures = [
  {
    name: 'Technology',
    tagline: 'Enterprise software, cloud, and digital infrastructure.',
    status: 'Active',
    description:
      'The Technology venture is Vanspire\'s first and fully operational vertical. We build enterprise web platforms, custom software systems, cloud and infrastructure architecture, IoT & smart systems, and provide digital transformation consulting for organisations ready to scale.',
    href: '/ventures/technology',
    capabilities: [
      'Web & Platform Development',
      'Custom Software Engineering',
      'Cloud & Infrastructure Architecture',
      'IoT & Smart Systems',
      'Digital Transformation Consulting',
    ],
  },
]

const upcoming = [
  { name: 'Manufacturing', description: 'Production, supply chain, and smart factory systems.' },
  { name: 'Engineering', description: 'Industrial and mechanical engineering services vertical.' },
  { name: 'Healthcare Technology', description: 'Digital health platforms and clinical infrastructure.' },
  { name: 'Financial Infrastructure', description: 'Fintech, payments, and core banking systems.' },
]

export default function VenturesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-24 md:pt-48 md:pb-28 bg-white">
        <div className="container-site">
          <MotionWrapper>
            <SectionLabel>The Ventures</SectionLabel>
          </MotionWrapper>
          <MotionWrapper delay={0.1}>
            <h1 className="text-display-lg text-brand-black max-w-3xl mt-4 mb-8">
              One group.<br />Multiple verticals.<br />One standard.
            </h1>
          </MotionWrapper>
          <MotionWrapper delay={0.2}>
            <p className="text-body-lg text-brand-muted max-w-2xl">
              Vanspire deploys capital, talent, and brand into focused ventures. Each one
              operates independently but shares the group&apos;s infrastructure, discipline,
              and reputation.
            </p>
          </MotionWrapper>
        </div>
      </section>

      <div className="divider" />

      {/* Active ventures */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <MotionWrapper className="mb-12">
            <SectionLabel>Active Verticals</SectionLabel>
          </MotionWrapper>

          {ventures.map((v, i) => (
            <MotionWrapper key={v.name} delay={i * 0.1}>
              <div className="border border-brand-border p-10 md:p-14 mb-6 group hover:border-brand-black transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-16">
                  {/* Left */}
                  <div className="md:w-1/3">
                    <span className="text-label text-brand-muted block mb-3">{v.status}</span>
                    <h2 className="text-3xl md:text-4xl font-light tracking-tight text-brand-black mb-3">
                      {v.name}
                    </h2>
                    <p className="text-[15px] font-light text-brand-muted">{v.tagline}</p>
                  </div>

                  {/* Right */}
                  <div className="md:w-2/3">
                    <p className="text-[15px] font-light text-brand-muted leading-relaxed mb-8">
                      {v.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {v.capabilities.map((cap) => (
                        <span key={cap} className="text-[11px] font-medium text-brand-muted border border-brand-border px-3 py-1">
                          {cap}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={v.href}
                      className="inline-flex items-center gap-2 text-[13px] font-medium text-brand-black group-hover:gap-4 transition-all duration-300"
                    >
                      View Technology Venture →
                    </Link>
                  </div>
                </div>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </section>

      {/* Upcoming ventures */}
      <section className="section-pad bg-brand-offwhite">
        <div className="container-site">
          <MotionWrapper className="mb-12">
            <SectionLabel>Future Verticals</SectionLabel>
            <h2 className="text-display-md text-brand-black max-w-xl mt-4">
              The roadmap is long.
            </h2>
            <p className="text-body text-brand-muted max-w-xl mt-4">
              These verticals represent areas where Vanspire&apos;s accumulated expertise
              and infrastructure will create natural entry advantages. Timelines are
              intentionally undisclosed - we activate ventures when they are ready.
            </p>
          </MotionWrapper>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-brand-border">
            {upcoming.map((item, i) => (
              <MotionWrapper key={item.name} delay={i * 0.08}>
                <div className="bg-brand-offwhite p-8 h-full">
                  <span className="text-label text-brand-border block mb-4">Planned</span>
                  <h3 className="text-[18px] font-light text-brand-black/40 mb-3 tracking-tight">
                    {item.name}
                  </h3>
                  <p className="text-[13px] font-light text-brand-muted/60 leading-relaxed">
                    {item.description}
                  </p>
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
