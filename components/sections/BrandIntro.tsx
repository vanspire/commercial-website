import MotionWrapper from '@/components/ui/MotionWrapper'
import SectionLabel from '@/components/ui/SectionLabel'

export default function BrandIntro() {
  return (
    <section className="section-pad bg-white">
      <div className="container-site">
        <div className="max-w-4xl">
          <MotionWrapper>
            <SectionLabel>The Group</SectionLabel>
          </MotionWrapper>
          <MotionWrapper delay={0.1}>
            <h2 className="text-display-md text-brand-black mb-8">
              We are Vanspire.<br />
              A group built for what&apos;s next.
            </h2>
          </MotionWrapper>
          <MotionWrapper delay={0.2}>
            <p className="text-body-lg text-brand-muted mb-6">
              Vanspire is not a product. It is not a service. It is a deliberate structure - a
              brand group designed to house, nurture, and scale ventures across industries as
              opportunities mature.
            </p>
          </MotionWrapper>
          <MotionWrapper delay={0.3}>
            <p className="text-body text-brand-muted">
              We started with Technology because that&apos;s where leverage lives in 2024 and beyond.
              Our methodology is disciplined: one venture at a time, fully operational before the
              next begins. This is how compounding group value is built.
            </p>
          </MotionWrapper>
        </div>

        {/* Stats row */}
        <MotionWrapper delay={0.15} className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-px bg-brand-border">
          {[
            { value: '1', label: 'Active Venture' },
            { value: '∞', label: 'Future Verticals' },
            { value: '100%', label: 'Enterprise Focus' },
          ].map((stat) => (
            <div key={stat.label} className="bg-white px-8 py-10">
              <p className="text-5xl md:text-6xl font-light tracking-tightest text-brand-black mb-2">
                {stat.value}
              </p>
              <p className="text-[13px] font-light text-brand-muted uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}
        </MotionWrapper>
      </div>
    </section>
  )
}
