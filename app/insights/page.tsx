import type { Metadata } from 'next'
import MotionWrapper from '@/components/ui/MotionWrapper'
import SectionLabel from '@/components/ui/SectionLabel'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Insights',
  description:
    'Vanspire Insights - thought leadership, perspectives, and analysis on technology, enterprise systems, digital transformation, and the future of business. Written for leaders, not followers.',
  keywords: [
    'technology insights',
    'enterprise software blog',
    'digital transformation analysis',
    'technology leadership',
    'cloud infrastructure perspectives',
  ],
  openGraph: {
    title: 'Vanspire Insights | Thought Leadership',
    description:
      'Perspectives on technology, enterprise systems, and the future of business - from the team at Vanspire.',
    url: '/insights',
  },
  alternates: { canonical: '/insights' },
}

// Placeholder articles - structured for future CMS integration
const articles = [
  {
    category: 'Digital Transformation',
    title: 'Why most digital transformation programmes fail before they begin',
    excerpt:
      'The failure point of most digital transformation programmes is not technology - it is unclear ownership, misaligned incentives, and strategy that was never operationalised. We examine what separates programmes that scale from those that stall.',
    date: 'February 2026',
    readTime: '6 min read',
    slug: '#',
  },
  {
    category: 'Cloud Architecture',
    title: 'The hidden cost of under-architected cloud infrastructure',
    excerpt:
      'Organisations that rush to cloud without architectural discipline pay a compounding tax - in reliability incidents, engineering time, and cost overruns. This is how to architect for what your business will need in three years, not three months.',
    date: 'January 2026',
    readTime: '8 min read',
    slug: '#',
  },
  {
    category: 'Enterprise Software',
    title: 'Build vs buy: a framework for enterprise software decisions',
    excerpt:
      'The build vs buy decision is rarely about cost. It is about competitive advantage, integration surface area, and long-term operational ownership. We break down the evaluation framework we use with our enterprise clients.',
    date: 'January 2026',
    readTime: '5 min read',
    slug: '#',
  },
]

export default function InsightsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-24 md:pt-48 md:pb-28 bg-white">
        <div className="container-site">
          <MotionWrapper>
            <SectionLabel>Insights</SectionLabel>
          </MotionWrapper>
          <MotionWrapper delay={0.1}>
            <h1 className="text-display-lg text-brand-black max-w-3xl mt-4 mb-8">
              Thought leadership,<br />without the noise.
            </h1>
          </MotionWrapper>
          <MotionWrapper delay={0.2}>
            <p className="text-body-lg text-brand-muted max-w-2xl">
              We write about technology, enterprise systems, and the future of business.
              Our Insights are for leaders who want structured perspectives - not trend
              lists or opinion recycled from Twitter.
            </p>
          </MotionWrapper>
        </div>
      </section>

      <div className="divider" />

      {/* Articles */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <div className="divide-y divide-brand-border">
            {articles.map((article, i) => (
              <MotionWrapper key={article.title} delay={i * 0.1}>
                <article className="py-12 group">
                  <Link href={article.slug} className="block">
                    <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-16">
                      {/* Meta */}
                      <div className="md:w-48 flex-shrink-0">
                        <span className="text-label text-brand-muted block mb-1">
                          {article.category}
                        </span>
                        <span className="text-[12px] font-light text-brand-border">
                          {article.date} · {article.readTime}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h2 className="text-[20px] md:text-[22px] font-light tracking-tight text-brand-black mb-3 group-hover:text-brand-muted transition-colors duration-200">
                          {article.title}
                        </h2>
                        <p className="text-[14px] font-light text-brand-muted leading-relaxed mb-4 max-w-2xl">
                          {article.excerpt}
                        </p>
                        <span className="text-[13px] font-medium text-brand-black inline-flex items-center gap-1 group-hover:gap-3 transition-all duration-300">
                          Read article →
                        </span>
                      </div>
                    </div>
                  </Link>
                </article>
              </MotionWrapper>
            ))}
          </div>

          {/* Future articles placeholder */}
          <MotionWrapper delay={0.3} className="mt-12 py-12 border-t border-brand-border text-center">
            <p className="text-[14px] font-light text-brand-muted">
              More insights are published regularly. Subscribe via the footer to be notified.
            </p>
          </MotionWrapper>
        </div>
      </section>
    </>
  )
}
