import MotionWrapper from '@/components/ui/MotionWrapper'
import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="section-pad bg-brand-black">
      <div className="container-site text-center">
        <MotionWrapper>
          <p className="text-label text-white/30 mb-6">Ready to engage</p>
          <h2 className="text-display-lg text-white mb-6 max-w-3xl mx-auto">
            Let&apos;s build something that matters.
          </h2>
          <p className="text-body-lg text-white/50 max-w-xl mx-auto mb-12">
            Whether you need an enterprise technology partner or want to understand
            how Vanspire is structured - we&apos;re ready to talk.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center h-[52px] px-10 bg-white text-brand-black text-[14px] font-medium hover:bg-white/90 transition-all duration-300"
            >
              Get in Touch
            </Link>
            <Link
              href="/ventures/technology"
              className="inline-flex items-center h-[52px] px-10 border border-white/20 text-white text-[14px] font-light hover:border-white/50 transition-all duration-300"
            >
              Explore Technology
            </Link>
          </div>
        </MotionWrapper>
      </div>
    </section>
  )
}
