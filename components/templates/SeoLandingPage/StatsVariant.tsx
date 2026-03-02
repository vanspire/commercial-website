import { SeoLandingPageProps } from './types'
import SectionLabel from '@/components/ui/SectionLabel'

export default function StatsVariant({ data }: { data: SeoLandingPageProps['stats'] }) {
  if (!data || !data.data || data.data.length === 0) return null;

  return (
    <section className="py-24 bg-gradient-to-t from-brand-light to-white border-b border-brand-border/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <SectionLabel className="mb-6 justify-center">Market Intelligence</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-brand-black leading-tight">
            {data.title}
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {data.data.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-sm border border-brand-border/60 hover:shadow-md transition-shadow duration-300">
              <span className="text-5xl md:text-6xl font-light text-brand-black mb-4 tracking-tighter">
                {stat.value}
              </span>
              <span className="text-sm md:text-base font-medium text-brand-gray leading-snug">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
