import MotionWrapper from '@/components/ui/MotionWrapper'
import SectionLabel from '@/components/ui/SectionLabel'
import Link from 'next/link'

const pillars = [
  {
    number: '01',
    title: 'Vision-led structure',
    description:
      'Every venture begins with a clearly defined thesis. We build with intent - not opportunism - anchored to long-term value creation.',
  },
  {
    number: '02',
    title: 'Technology as infrastructure',
    description:
      'Our first active vertical treats technology not as a service, but as core infrastructure - the foundation on which everything else is built.',
  },
  {
    number: '03',
    title: 'Compounding growth model',
    description:
      'Ventures within Vanspire share resources, expertise, and equity discipline. Each addition strengthens the whole.',
  },
]

export default function WhyVanspire() {
  return (
    <section className="section-pad bg-white border-t border-brand-border">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left */}
          <MotionWrapper>
            <SectionLabel>Why Vanspire</SectionLabel>
            <h2 className="text-display-md text-brand-black mb-6">
              Structured for the long term.
            </h2>
            <p className="text-body text-brand-muted mb-8">
              We are not a startup studio. We&apos;re not an agency. Vanspire is a deliberate,
              structured brand group - building ventures that compound in value over time,
              each one connected by shared principles and enterprise-grade execution.
            </p>
            <Link
              href="/about"
              className="text-[13px] font-medium text-brand-black underline underline-offset-4 hover:no-underline transition-all"
            >
              Learn about our philosophy →
            </Link>
          </MotionWrapper>

          {/* Right - pillars */}
          <div className="space-y-0">
            {pillars.map((pillar, i) => (
              <MotionWrapper key={pillar.number} delay={i * 0.1}>
                <div className="py-8 border-b border-brand-border first:border-t first:border-brand-border">
                  <div className="flex items-start gap-6">
                    <span className="text-label text-brand-border mt-1">{pillar.number}</span>
                    <div>
                      <h3 className="text-[17px] font-medium text-brand-black mb-2 tracking-tight">
                        {pillar.title}
                      </h3>
                      <p className="text-[15px] font-light text-brand-muted leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
