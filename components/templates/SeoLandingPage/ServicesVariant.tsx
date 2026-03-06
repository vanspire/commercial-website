import { SeoLandingPageProps } from './types'
import SectionLabel from '@/components/ui/SectionLabel'
import { ArrowRight } from 'lucide-react'

export default function ServicesVariant({ data }: { data: SeoLandingPageProps['services'] }) {
  if (!data || !data.items) return null;

  return (
    <section className="py-24 bg-gradient-to-b from-brand-light to-white relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-border to-transparent opacity-50"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl mb-16">
          <SectionLabel className="mb-6">Our Expertise</SectionLabel>
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-medium tracking-tight text-brand-black leading-tight">
            {data.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.items.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-8 md:p-10 rounded-2xl border border-brand-border/60 shadow-sm hover:shadow-lg hover:border-brand-black/20 hover:-translate-y-1 transition-all duration-500 group flex flex-col h-full"
            >
              <h3 className="text-2xl font-medium mb-4 flex items-start justify-between tracking-tight text-brand-black group-hover:text-brand-black transition-colors">
                <span>{item.title}</span>
                <ArrowRight className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shrink-0 mt-1" />
              </h3>
              <p className="text-brand-gray leading-relaxed text-sm md:text-base flex-1">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
