import type { Metadata } from 'next'
import Link from 'next/link'
import MotionWrapper from '@/components/ui/MotionWrapper'
import SectionLabel from '@/components/ui/SectionLabel'

export const metadata: Metadata = {
  title: 'Enterprise Web & Software Platform Development | Vanspire Technology',
  description:
    'Vanspire builds enterprise-grade web platforms and software systems designed for scale, performance, and longevity. Custom portals, SaaS platforms, multi-tenant applications - production-ready from day one.',
  keywords: [
    'enterprise web development',
    'scalable web platforms',
    'custom web solutions India',
    'SaaS platform development',
    'enterprise software engineering',
    'multi-tenant web application',
    'production-grade web development',
  ],
  openGraph: {
    title: 'Software & Web Platform Development | Vanspire Technology',
    description: 'Enterprise-grade web platforms built for scale, performance, and long-term maintainability.',
    url: '/ventures/technology/services/software-web-platforms',
  },
  alternates: { canonical: '/ventures/technology/services/software-web-platforms' },
}

export default function SoftwareWebPlatformsPage() {
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
              Software &amp;<br />Web Platforms
            </h1>
          </MotionWrapper>
          <MotionWrapper delay={0.2}>
            <p className="text-[17px] font-light text-brand-muted max-w-2xl leading-[1.85]">
              Scalable digital products built for performance and longevity. We engineer
              full-stack systems with performant front-ends, robust APIs, and maintainable
              codebases that your teams can operate and your business can grow on.
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
                  Built for the long term, from day one.
                </h2>
              </MotionWrapper>
              <MotionWrapper delay={0.1}>
                <div className="space-y-5 text-[15px] font-light text-brand-muted leading-[1.85]">
                  <p>
                    Enterprise web platforms are not just websites. They are mission-critical
                    infrastructure - tools that thousands of users, internal teams, and integrations
                    depend on daily. Most companies discover this too late, after building something
                    that cannot scale, cannot be maintained, and costs more to fix than rebuild.
                  </p>
                  <p>
                    At Vanspire Technology, we architect and build web platforms that are designed
                    for scale from the first technical decision. Our approach goes beyond templating
                    or framework assembly. We engineer complete systems: performant, accessible,
                    secure, and built with the architectural foresight that separates software assets
                    from software liabilities.
                  </p>
                  <p>
                    Whether you need a customer-facing portal, an internal business platform,
                    a SaaS product, or a complex multi-tenant application - our process ensures
                    that what we deliver is production-ready, documentated, and owned by you.
                  </p>
                </div>
              </MotionWrapper>

              <MotionWrapper delay={0.2} className="mt-12">
                <h3 className="text-[18px] font-medium text-brand-black mb-6 tracking-tight">What this service covers</h3>
                <div className="space-y-4">
                  {[
                    { t: 'Full-Stack Web Application Development', d: 'React, Next.js, Node.js, TypeScript - chosen based on your specific requirements, not our preferences.' },
                    { t: 'SaaS Platform Architecture & Build', d: 'Multi-tenant systems with role-based access, billing integration, and isolated data environments.' },
                    { t: 'Enterprise Portal Development', d: 'Customer portals, partner portals, internal dashboards - built for daily operational use at scale.' },
                    { t: 'API Design & Integration', d: 'RESTful and GraphQL APIs, third-party integrations, and well-documented interface contracts.' },
                    { t: 'Performance & Accessibility Engineering', d: 'Core Web Vitals optimization, WCAG compliance, and SEO-ready output as standard deliverables.' },
                    { t: 'Ongoing Platform Maintenance', d: 'We do not disappear after launch. Structured support, dependency management, and uptime ownership.' },
                  ].map((item) => (
                    <div key={item.t} className="border-b border-brand-border pb-4">
                      <h4 className="text-[15px] font-medium text-brand-black mb-1">{item.t}</h4>
                      <p className="text-[14px] font-light text-brand-muted">{item.d}</p>
                    </div>
                  ))}
                </div>
              </MotionWrapper>

              <MotionWrapper delay={0.3} className="mt-12">
                <h3 className="text-[18px] font-medium text-brand-black mb-4 tracking-tight">Who this is for</h3>
                <p className="text-[15px] font-light text-brand-muted leading-[1.85]">
                  This service is designed for businesses that have outgrown off-the-shelf solutions
                  or need a platform built specifically for their operational model. Our typical
                  engagements involve B2B SaaS companies launching their core product, large
                  enterprises replacing fragile legacy systems, or organisations building
                  customer-facing platforms that require both scale and precision.
                </p>
              </MotionWrapper>

              <MotionWrapper delay={0.35} className="mt-12">
                <h3 className="text-[18px] font-medium text-brand-black mb-4 tracking-tight">Our engineering standards</h3>
                <p className="text-[15px] font-light text-brand-muted leading-[1.85] mb-4">
                  Every platform we build adheres to a set of non-negotiable engineering standards:
                </p>
                <ul className="space-y-2">
                  {[
                    'Automated test coverage across critical user journeys',
                    'CI/CD pipeline with staging and production environments from the start',
                    'Comprehensive technical documentation delivered at handover',
                    'Secure coding practices and regular dependency audits',
                    'Semantic HTML, accessibility compliance, and SEO readiness by default',
                  ].map((s) => (
                    <li key={s} className="flex items-start gap-3 text-[14px] font-light text-brand-muted">
                      <div className="w-1 h-1 rounded-full bg-brand-black mt-[10px] flex-shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </MotionWrapper>
            </div>

            <div className="lg:col-span-5">
              <MotionWrapper delay={0.15}>
                <img
                  src="https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=900&q=80"
                  alt="Web platform development"
                  className="w-full h-[320px] object-cover mb-8"
                />
                <div className="bg-brand-offwhite p-8">
                  <p className="text-label text-brand-muted mb-4">Related Services</p>
                  <div className="space-y-3">
                    {[
                      { t: 'Application Development', h: '/ventures/technology/services/application-development' },
                      { t: 'Cloud & System Architecture', h: '/ventures/technology/services/cloud-system-architecture' },
                      { t: 'Digital Transformation', h: '/ventures/technology/services/digital-transformation' },
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
              Ready to build your platform?
            </h2>
            <p className="text-[15px] font-light text-white/50 mb-10 leading-[1.85]">
              Enterprise web platform engagements start with a discovery conversation. We review
              your requirements, existing infrastructure, and goals - then return with a structured
              proposal within five business days.
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
