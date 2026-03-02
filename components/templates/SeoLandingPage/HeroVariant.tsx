import Image from 'next/image'
import Button from '@/components/ui/Button'
import { SeoLandingPageProps } from './types'

export default function HeroVariant({ data }: { data: SeoLandingPageProps['hero'] }) {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-32 pb-20 overflow-hidden bg-brand-light">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="max-w-xl">
            {/* Strict H1 requirement for SEO */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-brand-black mb-6 leading-[1.1]">
              {data.heading}
            </h1>
            <p className="text-xl text-brand-gray mb-10 leading-relaxed max-w-lg">
              {data.subheading}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href={data.ctaLink} variant="primary" size="lg">
                {data.ctaText}
              </Button>
            </div>
          </div>
          
          <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden transform lg:-rotate-2 transition-transform hover:rotate-0 duration-500 shadow-2xl">
            <Image
              src={data.imageUrl}
              alt={data.imageAlt}
              fill
              className="object-cover"
              priority={true} // Strict LCP optimization: Preload hero image
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Dark gradient overlay for brand consistency */}
            <div className="absolute inset-0 bg-brand-black/10 mix-blend-multiply" />
          </div>
        </div>
      </div>
    </section>
  )
}
