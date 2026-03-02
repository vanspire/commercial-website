import { SeoLandingPageProps } from './types'
import SectionLabel from '@/components/ui/SectionLabel'

export default function StatsVariant({ data }: { data: SeoLandingPageProps['stats'] }) {
  if (!data || !data.data || data.data.length === 0) return null;

  return (
    <section className="py-24 bg-white border-b border-brand-border">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <SectionLabel className="mb-6 justify-center">Market Intelligence</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-brand-black">
            {data.title}
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {data.data.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <span className="text-5xl md:text-6xl font-light text-brand-black mb-4">
                {stat.value}
              </span>
              <span className="text-sm md:text-base font-medium text-brand-gray">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
