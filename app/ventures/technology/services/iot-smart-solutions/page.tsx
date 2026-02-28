import type { Metadata } from 'next'
import Link from 'next/link'
import MotionWrapper from '@/components/ui/MotionWrapper'
import SectionLabel from '@/components/ui/SectionLabel'

export const metadata: Metadata = {
  title: 'IoT & Smart Solutions | Connected Systems & Device Integration | Vanspire',
  description:
    'Vanspire builds IoT systems and smart solutions that connect physical environments with digital intelligence. From industrial IoT to smart building systems - secure, scalable, and production-ready.',
  keywords: [
    'IoT development services',
    'smart system integration',
    'connected devices architecture',
    'industrial IoT solutions India',
    'smart building technology',
    'IoT platform development',
    'device connectivity solutions',
  ],
  openGraph: {
    title: 'IoT & Smart Solutions | Vanspire Technology',
    description: 'Connected systems that bridge physical and digital environments. Industrial IoT, smart sensors, device management platforms.',
    url: '/ventures/technology/services/iot-smart-solutions',
  },
  alternates: { canonical: '/ventures/technology/services/iot-smart-solutions' },
}

export default function IoTSmartSolutionsPage() {
  return (
    <>
      <section className="pt-40 pb-24 md:pt-52 md:pb-32 bg-white">
        <div className="container-site">
          <MotionWrapper>
            <SectionLabel>
              <Link href="/ventures/technology" className="hover:text-brand-black transition-colors">Technology</Link>
              {' / '}Service
            </SectionLabel>
          </MotionWrapper>
          <MotionWrapper delay={0.1}>
            <h1 className="text-[clamp(2.5rem,5.5vw,5rem)] font-light tracking-[-0.04em] text-brand-black leading-[1.02] mt-4 mb-8 max-w-4xl">
              IoT &amp; Smart<br />Solutions
            </h1>
          </MotionWrapper>
          <MotionWrapper delay={0.2}>
            <p className="text-[17px] font-light text-brand-muted max-w-2xl leading-[1.85]">
              Connected systems bridging physical and digital environments. We design and
              deploy IoT architectures that turn operational data into actionable intelligence -
              securely, reliably, and at scale.
            </p>
          </MotionWrapper>
        </div>
      </section>

      <div className="divider" />

      <section className="section-pad bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7">
              <MotionWrapper>
                <h2 className="text-[clamp(1.6rem,3vw,2.5rem)] font-light tracking-[-0.03em] text-brand-black mb-6">
                  When the physical world generates data, what do you do with it?
                </h2>
              </MotionWrapper>
              <MotionWrapper delay={0.1}>
                <div className="space-y-5 text-[15px] font-light text-brand-muted leading-[1.85]">
                  <p>
                    The Internet of Things represents one of the most significant operational
                    opportunities for modern organisations - the ability to collect real-world
                    data, monitor physical assets remotely, automate responses, and build
                    intelligence into environments that previously operated without digital visibility.
                  </p>
                  <p>
                    But IoT implementations fail more often than they succeed. The causes are
                    consistent: poor device management architectures, insecure connectivity layers,
                    data pipelines that cannot scale, and platforms built without operational
                    durability in mind. The result is fragile systems that generate more overhead
                    than value.
                  </p>
                  <p>
                    At Vanspire Technology, we design IoT systems from the ground up - beginning
                    with the use case and working backwards to the right architecture. Every system
                    we build considers connectivity, security, data processing, and management
                    as equal priorities from day one.
                  </p>
                </div>
              </MotionWrapper>

              <MotionWrapper delay={0.2} className="mt-12">
                <h3 className="text-[18px] font-medium text-brand-black mb-6 tracking-tight">IoT service areas</h3>
                <div className="space-y-4">
                  {[
                    { t: 'IoT Platform Development', d: 'Custom device management platforms, data ingestion pipelines, and real-time dashboards for operational visibility.' },
                    { t: 'Industrial IoT (IIoT)', d: 'Manufacturing automation, predictive maintenance systems, and production line monitoring architectures.' },
                    { t: 'Smart Building & Facility Systems', d: 'Energy management, access control, environmental monitoring, and occupancy analytics.' },
                    { t: 'Sensor Integration & Firmware', d: 'Hardware integration, embedded system development, and over-the-air (OTA) firmware management.' },
                    { t: 'IoT Security Architecture', d: 'Device authentication, encrypted communication, network segmentation, and security audit services.' },
                    { t: 'Edge Computing Solutions', d: 'Processing intelligence at the edge to reduce latency, bandwidth consumption, and cloud dependency.' },
                  ].map((item) => (
                    <div key={item.t} className="border-b border-brand-border pb-4">
                      <h4 className="text-[15px] font-medium text-brand-black mb-1">{item.t}</h4>
                      <p className="text-[14px] font-light text-brand-muted">{item.d}</p>
                    </div>
                  ))}
                </div>
              </MotionWrapper>

              <MotionWrapper delay={0.3} className="mt-12">
                <h3 className="text-[18px] font-medium text-brand-black mb-4 tracking-tight">The IoT security imperative</h3>
                <p className="text-[15px] font-light text-brand-muted leading-[1.85]">
                  IoT devices represent one of the largest attack surfaces in modern enterprise
                  environments. Poorly secured devices have been the source of major infrastructure
                  breaches globally. Our IoT implementations treat security as an architectural
                  requirement - not a retrofit. Every system we deliver includes device identity
                  management, encrypted communications, network isolation, and ongoing vulnerability
                  monitoring as standard components.
                </p>
              </MotionWrapper>
            </div>

            <div className="lg:col-span-5">
              <MotionWrapper delay={0.15}>
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80"
                  alt="IoT and smart systems"
                  className="w-full h-[320px] object-cover mb-8"
                />
                <div className="bg-brand-offwhite p-8">
                  <p className="text-label text-brand-muted mb-4">Related Services</p>
                  <div className="space-y-3">
                    {[
                      { t: 'Cloud & System Architecture', h: '/ventures/technology/services/cloud-system-architecture' },
                      { t: 'Application Development', h: '/ventures/technology/services/application-development' },
                      { t: 'Digital Transformation', h: '/ventures/technology/services/digital-transformation' },
                    ].map((s) => (
                      <Link key={s.t} href={s.h} className="block text-[14px] font-light text-brand-muted hover:text-brand-black transition-colors border-b border-brand-border pb-3 last:border-0">
                        {s.t} →
                      </Link>
                    ))}
                  </div>
                </div>
              </MotionWrapper>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#060608]">
        <div className="container-site max-w-3xl">
          <MotionWrapper>
            <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-light tracking-[-0.04em] text-white mb-6">
              Connecting your physical and digital operations?
            </h2>
            <p className="text-[15px] font-light text-white/50 mb-10 leading-[1.85]">
              IoT engagements begin with a comprehensive use-case assessment - mapping data
              sources, connectivity requirements, and business outcomes before any hardware
              or software decisions are made.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 h-[52px] px-10 bg-white text-[#060608] text-[14px] font-medium hover:bg-white/90 transition-all">
              Start a Conversation →
            </Link>
          </MotionWrapper>
        </div>
      </section>
    </>
  )
}
