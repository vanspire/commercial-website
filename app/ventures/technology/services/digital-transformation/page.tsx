import type { Metadata } from 'next'
import Link from 'next/link'
import MotionWrapper from '@/components/ui/MotionWrapper'
import SectionLabel from '@/components/ui/SectionLabel'

export const metadata: Metadata = {
  title: 'Digital Transformation Consulting | Enterprise Modernisation | Vanspire',
  description:
    'Vanspire provides digital transformation consulting that translates strategy into working systems. We help enterprise organisations modernise operations, replace legacy technology, and build sustainable technology capabilities.',
  keywords: [
    'digital transformation consulting',
    'enterprise modernisation',
    'business technology transformation',
    'legacy system replacement',
    'IT strategy consulting India',
    'enterprise digital strategy',
    'technology-led business transformation',
  ],
  openGraph: {
    title: 'Digital Transformation Consulting | Vanspire Technology',
    description: 'Structured digital transformation for enterprise organisations. Strategy that translates into working systems, not slide decks.',
    url: '/ventures/technology/services/digital-transformation',
  },
  alternates: { canonical: '/ventures/technology/services/digital-transformation' },
}

export default function DigitalTransformationPage() {
  return (
    <>
      <section className="pt-40 pb-24 md:pt-52 md:pb-32 bg-white">
        <div className="container-site">
          <MotionWrapper>
            <SectionLabel>
              <Link href="/ventures/technology" className="hover:text-brand-black transition-colors">Technology</Link>
              {' / '}Service
            </SectionLabel>
          </MotionWrapper>
          <MotionWrapper delay={0.1}>
            <h1 className="text-[clamp(2.5rem,5.5vw,5rem)] font-light tracking-[-0.04em] text-brand-black leading-[1.02] mt-4 mb-8 max-w-4xl">
              Digital<br />Transformation
            </h1>
          </MotionWrapper>
          <MotionWrapper delay={0.2}>
            <p className="text-[17px] font-light text-brand-muted max-w-2xl leading-[1.85]">
              Modernising operations through technology-led thinking. We work with leadership
              teams to design transformation roadmaps grounded in business outcomes - then
              stay engaged through implementation.
            </p>
          </MotionWrapper>
        </div>
      </section>

      <div className="divider" />

      <section className="section-pad bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7">
              <MotionWrapper>
                <h2 className="text-[clamp(1.6rem,3vw,2.5rem)] font-light tracking-[-0.03em] text-brand-black mb-6">
                  Strategy without implementation is expensive fiction.
                </h2>
              </MotionWrapper>
              <MotionWrapper delay={0.1}>
                <div className="space-y-5 text-[15px] font-light text-brand-muted leading-[1.85]">
                  <p>
                    The digital transformation industry is littered with failed programmes.
                    The failure point is rarely technology. It is unclear ownership, misaligned
                    incentives, technology decisions made without operational context, and strategy
                    that was never genuinely operationalised beyond a presentation to the board.
                  </p>
                  <p>
                    At Vanspire Technology, our digital transformation practice begins where most
                    consultancies end - at implementation. We do not deliver transformation roadmaps
                    and disengage. We assess your current technology landscape, identify the highest-impact
                    interventions, and then build the systems, processes, and capabilities that make
                    the transformation real.
                  </p>
                  <p>
                    Our approach is deliberately narrow in scope at any given phase. We prioritise
                    programmes that de-risk transformation while accelerating value delivery - avoiding
                    the multi-year, all-or-nothing transformation programmes that have defined an
                    era of corporate technology failure.
                  </p>
                </div>
              </MotionWrapper>

              <MotionWrapper delay={0.2} className="mt-12">
                <h3 className="text-[18px] font-medium text-brand-black mb-6 tracking-tight">Transformation services</h3>
                <div className="space-y-4">
                  {[
                    { t: 'Technology Landscape Assessment', d: 'Comprehensive audit of your existing systems, integration architecture, data flows, and technical debt profile.' },
                    { t: 'Transformation Roadmap Design', d: 'Phased, prioritised transformation plans with clear milestones, business outcomes, and risk mitigation at every stage.' },
                    { t: 'Legacy System Modernisation', d: 'Structured approaches to replacing or rehabilitating legacy systems - without disrupting live operations.' },
                    { t: 'Process Digitisation', d: 'Converting manual, paper-based, or disconnected processes into digital workflows with appropriate tooling.' },
                    { t: 'Technology Capability Building', d: 'Training programmes, team structure recommendations, and tooling selection to build internal digital capability.' },
                    { t: 'Change Management Support', d: 'Stakeholder engagement, communication frameworks, and adoption support for technology-driven operational change.' },
                  ].map((item) => (
                    <div key={item.t} className="border-b border-brand-border pb-4">
                      <h4 className="text-[15px] font-medium text-brand-black mb-1">{item.t}</h4>
                      <p className="text-[14px] font-light text-brand-muted">{item.d}</p>
                    </div>
                  ))}
                </div>
              </MotionWrapper>

              <MotionWrapper delay={0.3} className="mt-12">
                <h3 className="text-[18px] font-medium text-brand-black mb-4 tracking-tight">What separates programmes that scale from those that stall</h3>
                <p className="text-[15px] font-light text-brand-muted leading-[1.85] mb-5">
                  Based on our experience, the consistent differentiators in successful digital
                  transformation programmes are:
                </p>
                <ul className="space-y-2">
                  {[
                    'Executive sponsorship with genuine accountability - not ceremonial support',
                    'Transformation scoped to outcomes, not technologies',
                    'Phased delivery that creates value before the programme is complete',
                    'Internal capability building alongside external delivery',
                    'Measurement frameworks that track operational outcomes, not activity metrics',
                  ].map((s) => (
                    <li key={s} className="flex items-start gap-3 text-[14px] font-light text-brand-muted">
                      <div className="w-1 h-1 rounded-full bg-brand-black mt-[10px] flex-shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </MotionWrapper>

              <MotionWrapper delay={0.35} className="mt-8">
                <Link
                  href="/insights/future-ready-enterprise-technology-strategy"
                  className="inline-flex items-center gap-2 text-[13px] font-medium text-brand-black border-b border-brand-black/20 pb-1 hover:border-brand-black transition-all"
                >
                  Read: Designing Future-Ready Enterprise Technology Strategies →
                </Link>
              </MotionWrapper>
            </div>

            <div className="lg:col-span-5">
              <MotionWrapper delay={0.15}>
                <img
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=80"
                  alt="Digital transformation strategy"
                  className="w-full h-[320px] object-cover mb-8"
                />
                <div className="bg-brand-offwhite p-8">
                  <p className="text-label text-brand-muted mb-4">Related Services</p>
                  <div className="space-y-3">
                    {[
                      { t: 'Software & Web Platforms', h: '/ventures/technology/services/software-web-platforms' },
                      { t: 'Cloud & System Architecture', h: '/ventures/technology/services/cloud-system-architecture' },
                      { t: 'Application Development', h: '/ventures/technology/services/application-development' },
                    ].map((s) => (
                      <Link key={s.t} href={s.h} className="block text-[14px] font-light text-brand-muted hover:text-brand-black transition-colors border-b border-brand-border pb-3 last:border-0">
                        {s.t} →
                      </Link>
                    ))}
                  </div>
                </div>
              </MotionWrapper>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#060608]">
        <div className="container-site max-w-3xl">
          <MotionWrapper>
            <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-light tracking-[-0.04em] text-white mb-6">
              Planning a transformation programme?
            </h2>
            <p className="text-[15px] font-light text-white/50 mb-10 leading-[1.85]">
              We begin every transformation engagement with a structured discovery - reviewing
              your operational landscape, technology estate, and strategic objectives before
              recommending scope or approach.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 h-[52px] px-10 bg-white text-[#060608] text-[14px] font-medium hover:bg-white/90 transition-all">
              Start a Conversation →
            </Link>
          </MotionWrapper>
        </div>
      </section>
    </>
  )
}
