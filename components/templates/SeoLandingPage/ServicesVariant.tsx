import { SeoLandingPageProps } from './types'
import SectionLabel from '@/components/ui/SectionLabel'
import { ArrowRight } from 'lucide-react'

export default function ServicesVariant({ data }: { data: SeoLandingPageProps['services'] }) {
  if (!data || !data.items) return null;

  return (
    <section className="py-24 bg-brand-light">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mb-16">
          <SectionLabel className="mb-6">Our Expertise</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-brand-black">
            {data.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.items.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-8 md:p-10 border border-brand-border hover:border-brand-black transition-colors duration-300 group"
            >
              <h3 className="text-xl font-medium mb-4 flex items-center justify-between">
                <span>{item.title}</span>
                <ArrowRight className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </h3>
              <p className="text-brand-gray leading-relaxed text-sm md:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
