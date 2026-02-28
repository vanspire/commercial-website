import type { Metadata } from 'next'
import Link from 'next/link'
import MotionWrapper from '@/components/ui/MotionWrapper'
import SectionLabel from '@/components/ui/SectionLabel'

export const metadata: Metadata = {
  title: 'Custom Application Development Services | Vanspire Technology',
  description:
    'Vanspire builds custom business applications designed around real workflows - not generic templates. Mobile, desktop, and web applications engineered for operational precision and long-term scalability.',
  keywords: [
    'custom application development',
    'business workflow apps',
    'scalable mobile applications',
    'enterprise app development India',
    'bespoke software development',
    'workflow automation software',
    'custom enterprise applications',
  ],
  openGraph: {
    title: 'Custom Application Development | Vanspire Technology',
    description: 'Business applications built around how your organisation actually works - not how generic platforms assume it does.',
    url: '/ventures/technology/services/application-development',
  },
  alternates: { canonical: '/ventures/technology/services/application-development' },
}

export default function ApplicationDevelopmentPage() {
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
              Application<br />Development
            </h1>
          </MotionWrapper>
          <MotionWrapper delay={0.2}>
            <p className="text-[17px] font-light text-brand-muted max-w-2xl leading-[1.85]">
              Custom applications designed around real business workflows. Off-the-shelf software
              rarely fits complex operational requirements - we build precisely what your
              business actually needs.
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
                  Software that fits your operations - not the other way around.
                </h2>
              </MotionWrapper>
              <MotionWrapper delay={0.1}>
                <div className="space-y-5 text-[15px] font-light text-brand-muted leading-[1.85]">
                  <p>
                    Generic software forces organisations to adapt their workflows to the
                    limitations of tools built for someone else. This creates inefficiency,
                    workarounds, and compounding operational debt that erodes productivity
                    quietly over years.
                  </p>
                  <p>
                    Custom application development starts from a fundamentally different premise:
                    the software should serve your business model, not the reverse. At Vanspire
                    Technology, we engage at the architecture level - understanding your processes,
                    data flows, and integration requirements - before writing a single line of code.
                  </p>
                  <p>
                    The result is software that fits precisely, operates reliably, scales with
                    your growth, and becomes a genuine operational asset rather than a recurring
                    source of friction.
                  </p>
                </div>
              </MotionWrapper>

              <MotionWrapper delay={0.2} className="mt-12">
                <h3 className="text-[18px] font-medium text-brand-black mb-6 tracking-tight">Application types we build</h3>
                <div className="space-y-4">
                  {[
                    { t: 'Web Applications', d: 'Browser-based business tools, management systems, dashboards, and internal platforms.' },
                    { t: 'Mobile Applications', d: 'iOS and Android applications for field operations, customer engagement, and internal workflows.' },
                    { t: 'Desktop Applications', d: 'Electron-based and native desktop tools for high-performance operational environments.' },
                    { t: 'Internal Business Tools', d: 'CRM systems, inventory management, HR tools, and operations software built around your model.' },
                    { t: 'Workflow Automation Systems', d: 'Automated pipelines that reduce manual intervention and eliminate repetitive operational overhead.' },
                    { t: 'Data & Reporting Applications', d: 'Custom analytics platforms, reporting tools, and decision-support systems.' },
                  ].map((item) => (
                    <div key={item.t} className="border-b border-brand-border pb-4">
                      <h4 className="text-[15px] font-medium text-brand-black mb-1">{item.t}</h4>
                      <p className="text-[14px] font-light text-brand-muted">{item.d}</p>
                    </div>
                  ))}
                </div>
              </MotionWrapper>

              <MotionWrapper delay={0.3} className="mt-12">
                <h3 className="text-[18px] font-medium text-brand-black mb-4 tracking-tight">The cost of the wrong application</h3>
                <p className="text-[15px] font-light text-brand-muted leading-[1.85]">
                  Poorly designed applications compound their costs in ways that are not immediately
                  visible - slowed workflows, workarounds that become policy, data quality problems,
                  and eventually the full cost of replacement. Custom development is an investment.
                  The alternative is a recurring tax on your operations.
                </p>
              </MotionWrapper>

              <MotionWrapper delay={0.35} className="mt-12">
                <h3 className="text-[18px] font-medium text-brand-black mb-4 tracking-tight">Technologies we use</h3>
                <p className="text-[15px] font-light text-brand-muted leading-[1.85] mb-5">
                  We are technology-agnostic in our selection - choosing tools based on your
                  requirements, not vendor relationships or internal convenience.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['React Native', 'Next.js', 'Flutter', 'Swift', 'Kotlin', 'Electron', 'Node.js', 'Python', 'TypeScript', 'PostgreSQL', 'MongoDB', 'Redis'].map((tech) => (
                    <span key={tech} className="text-[12px] font-medium text-brand-muted border border-brand-border px-3 py-1">
                      {tech}
                    </span>
                  ))}
                </div>
              </MotionWrapper>
            </div>

            <div className="lg:col-span-5">
              <MotionWrapper delay={0.15}>
                <img
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=80"
                  alt="Application development"
                  className="w-full h-[320px] object-cover mb-8"
                />
                <div className="bg-brand-offwhite p-8">
                  <p className="text-label text-brand-muted mb-4">Related Services</p>
                  <div className="space-y-3">
                    {[
                      { t: 'Software & Web Platforms', h: '/ventures/technology/services/software-web-platforms' },
                      { t: 'Cloud & System Architecture', h: '/ventures/technology/services/cloud-system-architecture' },
                      { t: 'IoT & Smart Solutions', h: '/ventures/technology/services/iot-smart-solutions' },
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
              Have an application in mind?
            </h2>
            <p className="text-[15px] font-light text-white/50 mb-10 leading-[1.85]">
              The best custom applications start with a thorough discovery process. Tell us about
              the operational challenge you are solving and we will assess the scope, architecture,
              and delivery timeline.
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
