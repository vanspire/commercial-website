import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import MotionWrapper from '@/components/ui/MotionWrapper'
import SectionLabel from '@/components/ui/SectionLabel'
import CTASection from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'About Vanspire | Vision, Philosophy & The Team Behind the Brand',
  description:
    'Vanspire is a future-focused brand group built to last. Learn about our founding vision, long-term philosophy, structured growth model, and the team driving Vanspire forward.',
  keywords: [
    'about Vanspire',
    'brand group vision',
    'future-focused technology company India',
    'enterprise brand philosophy',
    'technology venture founders',
    'long-term business strategy',
  ],
  openGraph: {
    title: 'About Vanspire | Vision, Philosophy & Team',
    description:
      'A future-focused brand group built with discipline, vision, and long-term intent. Meet the people and philosophy behind Vanspire.',
    url: '/about',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'About Vanspire' }],
  },
  alternates: { canonical: '/about' },
}

const team = [
  {
    name: 'Adithyan N Dileep',
    role: 'Founder & Chief Executive',
    bio: 'Adithyan founded Vanspire with a clear thesis: that the most enduring companies are built deliberately, not reactively. He leads group strategy, venture selection, and long-term capital allocation across all Vanspire verticals.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Arun Krishnan',
    role: 'Head of Technology',
    bio: 'Arun leads the technology vertical - overseeing all engineering operations, system architecture decisions, and client delivery. He brings deep expertise in cloud infrastructure and enterprise platform development.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Priya Menon',
    role: 'Strategy & Growth',
    bio: 'Priya shapes how Vanspire identifies, evaluates, and enters new venture opportunities. She is focused on long-term positioning, market research, and operational frameworks for sustainable expansion.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80',
  },
]

const growthStages = [
  { step: '01', title: 'Define the Thesis', desc: 'Every venture begins with a documented thesis - a clear articulation of the problem, the market, and the structural edge Vanspire brings.' },
  { step: '02', title: 'Build with Depth', desc: 'We develop full operational capability before launching. No half-built products. No premature scaling.' },
  { step: '03', title: 'Establish, Then Expand', desc: 'Once a venture reaches operational stability, group resources become available to seed the next. Each success funds the next beginning.' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-24 md:pt-52 md:pb-32 bg-white">
        <div className="container-site">
          <MotionWrapper>
            <SectionLabel>Who We Are</SectionLabel>
          </MotionWrapper>
          <MotionWrapper delay={0.1}>
            <h1 className="text-[clamp(2.5rem,6vw,5.5rem)] font-light tracking-[-0.04em] text-brand-black leading-[1.02] mt-4 mb-8 max-w-4xl">
              We built Vanspire<br />
              <em className="not-italic text-brand-muted">to last.</em>
            </h1>
          </MotionWrapper>
          <MotionWrapper delay={0.2}>
            <p className="text-[17px] font-light text-brand-muted max-w-2xl leading-[1.85]">
              Most companies are built to exit. Vanspire is built to endure. From the very
              first line of code written under this group, every decision has been made
              with permanence in mind - not short-term optics.
            </p>
          </MotionWrapper>
        </div>
      </section>

      <div className="divider" />

      {/* Vision Statement */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <MotionWrapper className="lg:col-span-4">
              <SectionLabel>Vision</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-light tracking-tight text-brand-black mt-4">
                Where we are headed
              </h2>
            </MotionWrapper>

            <MotionWrapper delay={0.15} className="lg:col-span-8">
              <blockquote className="text-[clamp(1.4rem,2.5vw,2.2rem)] font-light text-brand-black leading-snug tracking-tight border-l-2 border-brand-black pl-8 mb-8">
                &ldquo;To become a multi-vertical brand group known for building
                technology-driven enterprises that stand the test of time.&rdquo;
              </blockquote>
              <p className="text-[16px] font-light text-brand-muted leading-[1.85] mb-5">
                Vanspire was founded on a single thesis: the infrastructure of business is
                increasingly digital, and the companies that own that infrastructure - not
                just use it - will define the next era of industry.
              </p>
              <p className="text-[16px] font-light text-brand-muted leading-[1.85]">
                We started with Technology because it is the most leveraged first move.
                Every subsequent venture will be chosen not for speed-to-market, but for
                long-term systemic relevance.
              </p>
            </MotionWrapper>
          </div>

          <MotionWrapper delay={0.2} className="mt-16">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80"
              alt="Vanspire vision - long-term enterprise thinking"
              className="w-full h-[320px] md:h-[420px] object-cover"
            />
          </MotionWrapper>
        </div>
      </section>

      <div className="divider" />

      {/* Why Vanspire Exists */}
      <section className="section-pad bg-brand-offwhite">
        <div className="container-site">
          <MotionWrapper className="mb-16">
            <SectionLabel>Founding Philosophy</SectionLabel>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-light tracking-[-0.04em] text-brand-black mt-4 max-w-2xl leading-[1.08]">
              Why Vanspire Exists
            </h2>
          </MotionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-brand-border">
            {[
              {
                title: 'Discipline over velocity',
                body: 'We do not sprint to the next opportunity. Every venture within Vanspire is fully operational before the next begins. This is how we ensure quality compounds, not technical debt.',
              },
              {
                title: 'Technology as infrastructure',
                body: 'Technology is not one of our services - it is the backbone of everything we build. Our first vertical treats software, cloud, and systems as fundamental enterprise infrastructure.',
              },
              {
                title: 'Enterprise-grade by default',
                body: 'We build to institutional standards from day one. Whether working with a startup or a large corporation, our output is production-grade, documented, and built to last.',
              },
              {
                title: 'Compounding group value',
                body: 'Each venture shares resources, reputation, and principles with the group. As Vanspire expands, every addition strengthens the whole - not just its individual parts.',
              },
            ].map((v, i) => (
              <MotionWrapper key={v.title} delay={i * 0.08}>
                <div className="bg-brand-offwhite p-10 md:p-12 h-full">
                  <h3 className="text-[18px] font-medium text-brand-black mb-4 tracking-tight">{v.title}</h3>
                  <p className="text-[15px] font-light text-brand-muted leading-relaxed">{v.body}</p>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Structured Growth Model */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <MotionWrapper className="lg:col-span-5">
              <SectionLabel>Growth Model</SectionLabel>
              <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-light tracking-[-0.04em] text-brand-black mt-4 mb-8 leading-[1.1]">
                Structured for<br />Deliberate Growth
              </h2>
              <p className="text-[15px] font-light text-brand-muted leading-[1.85] mb-6">
                Vanspire is structured as a group brand - similar in philosophy to how the
                world's most enduring conglomerates operate, but leaner, faster, and
                technology-native.
              </p>
              <p className="text-[15px] font-light text-brand-muted leading-[1.85]">
                Future verticals may include manufacturing, engineering, healthcare technology,
                financial infrastructure, and education - each selected based on where
                Vanspire's accumulated expertise creates the most defensible position.
              </p>
              <Link
                href="/ventures"
                className="inline-flex items-center gap-2 mt-8 text-[13px] font-medium text-brand-black border-b border-brand-black/20 pb-1 hover:border-brand-black transition-all"
              >
                Explore Our Ventures →
              </Link>
            </MotionWrapper>

            <div className="lg:col-span-7">
              <div className="space-y-0">
                {growthStages.map((s, i) => (
                  <MotionWrapper key={s.step} delay={i * 0.12}>
                    <div className="py-10 border-b border-brand-border first:border-t">
                      <div className="flex gap-8">
                        <span className="text-label text-brand-border w-8 flex-shrink-0 mt-1">{s.step}</span>
                        <div>
                          <h3 className="text-[18px] font-medium text-brand-black mb-2 tracking-tight">{s.title}</h3>
                          <p className="text-[15px] font-light text-brand-muted leading-relaxed">{s.desc}</p>
                        </div>
                      </div>
                    </div>
                  </MotionWrapper>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      {/* <section className="section-pad bg-brand-offwhite">
        <div className="container-site">
          <MotionWrapper className="mb-16">
            <SectionLabel>The Team</SectionLabel>
            <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-light tracking-[-0.04em] text-brand-black mt-4 max-w-2xl leading-[1.1]">
              The People Behind Vanspire
            </h2>
          </MotionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <MotionWrapper key={member.name} delay={i * 0.12}>
                <div className="group">
                  <div className="overflow-hidden mb-6">
                    <img
                      src={member.image}
                      alt={`${member.name} - ${member.role} at Vanspire`}
                      className="w-full h-[320px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    />
                  </div>
                  <p className="text-label text-brand-muted mb-1">{member.role}</p>
                  <h3 className="text-[20px] font-light tracking-tight text-brand-black mb-3">{member.name}</h3>
                  <p className="text-[14px] font-light text-brand-muted leading-relaxed">{member.bio}</p>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section> */}

      <CTASection />
    </>
  )
}
