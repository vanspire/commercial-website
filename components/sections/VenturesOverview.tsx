import MotionWrapper from '@/components/ui/MotionWrapper'
import SectionLabel from '@/components/ui/SectionLabel'
import Link from 'next/link'

const ventures = [
  {
    label: 'Active Venture',
    name: 'Technology',
    description:
      'Enterprise web platforms, custom software engineering, cloud infrastructure, IoT systems, and digital transformation consulting. Our Technology vertical is the operational engine of Vanspire - active, growing, and client-ready.',
    href: '/ventures/technology',
    status: 'active',
    tags: ['Web & Platform Development', 'Cloud Infrastructure', 'Custom Software', 'IoT & Smart Systems'],
  },
  {
    label: 'Coming Soon',
    name: 'Next Venture',
    description:
      'Vanspire is designed to expand. Future verticals will be announced as the group matures. Each new venture will follow our disciplined thesis framework before activation.',
    href: '/ventures',
    status: 'upcoming',
    tags: [],
  },
]

export default function VenturesOverview() {
  return (
    <section className="section-pad bg-brand-offwhite">
      <div className="container-site">
        <MotionWrapper className="mb-16">
          <SectionLabel>Our Ventures</SectionLabel>
          <h2 className="text-display-md text-brand-black max-w-xl">
            One group. Multiple ventures. One standard.
          </h2>
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ventures.map((v, i) => (
            <MotionWrapper key={v.name} delay={i * 0.15}>
              <div
                className={`group relative border p-10 md:p-12 flex flex-col h-full transition-all duration-300 ${
                  v.status === 'active'
                    ? 'bg-white border-brand-border hover:border-brand-black cursor-pointer'
                    : 'bg-white/50 border-brand-border opacity-60'
                }`}
              >
                {/* Label */}
                <span
                  className={`text-label mb-6 block ${
                    v.status === 'active' ? 'text-brand-muted' : 'text-brand-border'
                  }`}
                >
                  {v.label}
                </span>

                {/* Name */}
                <h3 className="text-2xl md:text-3xl font-light tracking-tight text-brand-black mb-4">
                  {v.name}
                </h3>

                {/* Description */}
                <p className="text-[15px] font-light text-brand-muted leading-relaxed mb-8 flex-1">
                  {v.description}
                </p>

                {/* Tags */}
                {v.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-8">
                    {v.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium text-brand-muted border border-brand-border px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* CTA */}
                {v.status === 'active' && (
                  <Link
                    href={v.href}
                    className="inline-flex items-center gap-2 text-[13px] font-medium text-brand-black group-hover:gap-4 transition-all duration-300"
                  >
                    Explore Technology <span>→</span>
                  </Link>
                )}
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
