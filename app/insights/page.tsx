import type { Metadata } from 'next'
import Link from 'next/link'
import MotionWrapper from '@/components/ui/MotionWrapper'
import SectionLabel from '@/components/ui/SectionLabel'

export const metadata: Metadata = {
  title: 'Vanspire Insights | Enterprise Technology & Digital Strategy',
  description:
    'Vanspire Insights - thought leadership on enterprise software, cloud architecture, digital transformation, and technology strategy. Written for leaders who build for the long term.',
  keywords: [
    'enterprise technology insights',
    'digital transformation thought leadership',
    'cloud architecture blog',
    'enterprise software strategy',
    'technology leadership articles',
    'Vanspire insights',
    'IT strategy perspectives',
  ],
  openGraph: {
    title: 'Vanspire Insights | Enterprise Technology & Digital Strategy',
    description: 'Perspectives on enterprise technology, systems thinking, and digital transformation from the Vanspire team.',
    url: '/insights',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Vanspire Insights' }],
  },
  alternates: { canonical: '/insights' },
}

const articles = [
  {
    category: 'Systems Architecture',
    title: 'Building Scalable Digital Systems for Long-Term Growth',
    excerpt:
      'Why most companies build fragile systems - and the architectural principles that separate software built to endure from software built to ship.',
    date: 'February 2026',
    readTime: '7 min read',
    slug: '/insights/building-scalable-digital-systems',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80',
    keywords: ['Scalable Systems', 'Architecture', 'Enterprise Software'],
  },
  {
    category: 'Digital Transformation',
    title: 'Designing Future-Ready Enterprise Technology Strategies',
    excerpt:
      'Strategic thinking beyond short-term technology decisions. How enterprise leaders can build technology programmes that remain relevant as business and market conditions evolve.',
    date: 'January 2026',
    readTime: '8 min read',
    slug: '/insights/future-ready-enterprise-technology-strategy',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=80',
    keywords: ['Strategy', 'Digital Transformation', 'Enterprise IT'],
  },
]

export default function InsightsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-24 md:pt-52 md:pb-32 bg-white">
        <div className="container-site">
          <MotionWrapper>
            <SectionLabel>Insights</SectionLabel>
          </MotionWrapper>
          <MotionWrapper delay={0.1}>
            <h1 className="text-[clamp(2.5rem,6vw,5.5rem)] font-light tracking-[-0.04em] text-brand-black leading-[1.02] mt-4 mb-8 max-w-4xl">
              We write about<br />
              <em className="not-italic text-brand-muted">what we think</em><br />
              actually matters.
            </h1>
          </MotionWrapper>
          <MotionWrapper delay={0.2}>
            <p className="text-[17px] font-light text-brand-muted max-w-2xl leading-[1.85]">
              Perspectives on enterprise technology, digital transformation, and systems
              thinking. Written for leaders who are building for the long term - not
              chasing trend lists or recycling conference keynotes.
            </p>
          </MotionWrapper>
        </div>
      </section>

      <div className="divider" />

      {/* Articles */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {articles.map((article, i) => (
              <MotionWrapper key={article.slug} delay={i * 0.1}>
                <Link href={article.slug} className="group block">
                  <div className="overflow-hidden mb-7">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-[280px] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-[11px] font-medium uppercase tracking-widest text-brand-muted border border-brand-border px-3 py-1">
                      {article.category}
                    </span>
                    <span className="text-[12px] font-light text-brand-muted">{article.date}</span>
                    <span className="text-[12px] font-light text-brand-muted">{article.readTime}</span>
                  </div>
                  <h2 className="text-[22px] md:text-[26px] font-light tracking-[-0.02em] text-brand-black mb-4 leading-[1.2] group-hover:text-brand-muted transition-colors duration-300">
                    {article.title}
                  </h2>
                  <p className="text-[14px] font-light text-brand-muted leading-relaxed mb-6">
                    {article.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {article.keywords.map((kw) => (
                      <span key={kw} className="text-[11px] text-brand-muted font-light">#{kw}</span>
                    ))}
                  </div>
                  <span className="text-[13px] font-medium text-brand-black inline-flex items-center gap-1 border-b border-brand-black/20 pb-1 group-hover:gap-3 transition-all duration-300">
                    Read article →
                  </span>
                </Link>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Related section */}
      <section className="section-pad bg-brand-offwhite">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <MotionWrapper>
              <h3 className="text-[17px] font-medium text-brand-black mb-3 tracking-tight">Topics we cover</h3>
              <ul className="space-y-2">
                {['Enterprise Software', 'Cloud Architecture', 'Digital Transformation', 'Systems Design', 'Technology Strategy', 'IoT & Smart Systems'].map((t) => (
                  <li key={t} className="text-[14px] font-light text-brand-muted">{t}</li>
                ))}
              </ul>
            </MotionWrapper>
            <MotionWrapper delay={0.1}>
              <h3 className="text-[17px] font-medium text-brand-black mb-3 tracking-tight">Our services</h3>
              <ul className="space-y-2">
                {[
                  { t: 'Software & Web Platforms', h: '/ventures/technology/services/software-web-platforms' },
                  { t: 'Cloud Architecture', h: '/ventures/technology/services/cloud-system-architecture' },
                  { t: 'Digital Transformation', h: '/ventures/technology/services/digital-transformation' },
                ].map((s) => (
                  <li key={s.t}>
                    <Link href={s.h} className="text-[14px] font-light text-brand-muted hover:text-brand-black transition-colors">
                      {s.t} →
                    </Link>
                  </li>
                ))}
              </ul>
            </MotionWrapper>
            <MotionWrapper delay={0.2}>
              <h3 className="text-[17px] font-medium text-brand-black mb-3 tracking-tight">Work with Vanspire</h3>
              <p className="text-[14px] font-light text-brand-muted mb-4 leading-relaxed">
                If our thinking resonates, we&apos;d welcome a conversation about your technology challenges.
              </p>
              <Link href="/contact" className="text-[13px] font-medium text-brand-black border-b border-brand-black/20 pb-1 hover:border-brand-black transition-all">
                Start a Conversation →
              </Link>
            </MotionWrapper>
          </div>
        </div>
      </section>
    </>
  )
}
