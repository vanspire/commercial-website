import type { Metadata } from 'next'
import MotionWrapper from '@/components/ui/MotionWrapper'
import SectionLabel from '@/components/ui/SectionLabel'
import CTASection from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'About Vanspire',
  description:
    'Vanspire is a future-focused brand group built on the belief that the most valuable companies of the next decade will be those that scaled with discipline, not speed. Learn about our philosophy and founding vision.',
  keywords: [
    'future-focused technology company',
    'technology-driven growth',
    'enterprise brand group',
    'scalable digital systems',
    'technology venture India',
  ],
  openGraph: {
    title: 'About Vanspire | Our Vision & Philosophy',
    description:
      'Vanspire is a future-focused brand group built on disciplined growth and technology-first thinking. Learn about our founding philosophy.',
    url: '/about',
  },
  alternates: {
    canonical: '/about',
  },
}

const values = [
  {
    title: 'Discipline over velocity',
    description:
      'We do not sprint to the next opportunity. Every venture within Vanspire is operational before the next begins. This is how we ensure quality compounds, not debt.',
  },
  {
    title: 'Technology as infrastructure',
    description:
      'Technology is not one of our services - it is the backbone of everything we build. Our first vertical treats software, cloud, and systems engineering as fundamental infrastructure.',
  },
  {
    title: 'Compounding group value',
    description:
      'Each venture shares resources, reputation, and principles with the group. As Vanspire expands, every addition strengthens the whole - not just its individual parts.',
  },
  {
    title: 'Enterprise-grade by default',
    description:
      'We build to institutional standards from day one. Whether we are working with a startup or a large enterprise, our output is production-grade, documented, and maintainable.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-24 md:pt-48 md:pb-28 bg-white">
        <div className="container-site">
          <MotionWrapper>
            <SectionLabel>Our Story</SectionLabel>
          </MotionWrapper>
          <MotionWrapper delay={0.1}>
            <h1 className="text-display-lg text-brand-black max-w-3xl mt-4 mb-8">
              We built Vanspire to last.
            </h1>
          </MotionWrapper>
          <MotionWrapper delay={0.2}>
            <p className="text-body-lg text-brand-muted max-w-2xl">
              Most companies are built to exit. Vanspire is built to endure. From the
              first line of code written under this group, every decision has been made
              with permanence in mind.
            </p>
          </MotionWrapper>
        </div>
      </section>

      <div className="divider" />

      {/* Vision Statement */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <MotionWrapper className="lg:col-span-4">
              <SectionLabel>Vision</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-light tracking-tight text-brand-black mt-4">
                Where we are headed
              </h2>
            </MotionWrapper>

            <MotionWrapper delay={0.1} className="lg:col-span-8">
              <blockquote className="text-2xl md:text-3xl font-light text-brand-black leading-snug tracking-tight border-l-2 border-brand-black pl-8 mb-8">
                &ldquo;To become a respected, multi-vertical brand group - known for building
                technology-driven enterprises that stand the test of time.&rdquo;
              </blockquote>
              <p className="text-body text-brand-muted">
                Vanspire was founded on a single thesis: that the infrastructure of business
                is increasingly digital, and the companies that own that infrastructure - not
                just use it - will define the next era of industry. We started with Technology
                because it is the most leveraged first move. Every subsequent venture will be
                chosen not for speed-to-market, but for long-term systemic relevance.
              </p>
            </MotionWrapper>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Founding Philosophy */}
      <section className="section-pad bg-brand-offwhite">
        <div className="container-site">
          <MotionWrapper className="mb-16">
            <SectionLabel>Philosophy</SectionLabel>
            <h2 className="text-display-md text-brand-black max-w-xl mt-4">
              Built on four founding principles.
            </h2>
          </MotionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-brand-border">
            {values.map((val, i) => (
              <MotionWrapper key={val.title} delay={i * 0.1}>
                <div className="bg-brand-offwhite p-10 md:p-12 h-full">
                  <h3 className="text-[18px] font-medium text-brand-black mb-4 tracking-tight">
                    {val.title}
                  </h3>
                  <p className="text-[15px] font-light text-brand-muted leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Expansion Intent */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center">
            <MotionWrapper>
              <SectionLabel className="justify-center">Long-Term Structure</SectionLabel>
              <h2 className="text-display-md text-brand-black mt-4 mb-6">
                The group model.
              </h2>
              <p className="text-body text-brand-muted mb-6">
                Vanspire is structured as a brand group - similar in philosophy to how
                the world&apos;s most enduring conglomerates are built, but leaner, faster,
                and technology-native. Our model is simple: launch one venture at full
                operational capacity, then expand.
              </p>
              <p className="text-body text-brand-muted">
                Future verticals may include manufacturing, engineering, healthcare technology,
                financial infrastructure, or education - each selected based on where
                Vanspire&apos;s accumulated technology and operational expertise creates the
                most defensible competitive position. We do not rush this process. Patience
                is a core principle.
              </p>
            </MotionWrapper>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
