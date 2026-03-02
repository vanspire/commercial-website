import { Metadata } from 'next'
import SeoLandingPage from '@/components/templates/SeoLandingPage'

const pageData = {
  location: "Kerala",
  hero: {
    heading: "Best Digital Marketing Company in Kerala",
    subheading: "Data-driven strategies, localized local SEO, and performance marketing designed specifically for the Kerala market and global audience.",
    ctaText: "Get a Free Kerala Market Digital Audit",
    ctaLink: "/contact",
    imageUrl: "/ogimage.webp", // Replace with an optimized local image later
    imageAlt: "Digital Marketing Experts in Kerala analyzing data",
  },
  stats: {
    title: "Why Kerala Businesses Choose Vanspire",
    data: [
      { value: "98%", label: "Client Retention Rate in Kerala" },
      { value: "400+", label: "Regional Campaigns Managed" },
      { value: "2.5x", label: "Average ROI Increase" },
      { value: "100%", label: "Data-Driven Decisions" }
    ]
  },
  services: {
    title: "Our Kerala Digital Marketing Services",
    items: [
      {
        title: "Search Engine Optimization (SEO)",
        description: "Dominate local search in Kochi, Trivandrum, and Calicut. We optimize for high-intent regional keywords to drive organic traffic that converts."
      },
      {
        title: "Social Media Marketing",
        description: "Engage the highly active Kerala social media audience with culturally relevant, high-impact campaigns across Meta, LinkedIn, and YouTube."
      },
      {
        title: "Performance Ads (PPC)",
        description: "Maximize your ad spend with precision-targeted Google and Facebook Ads designed for Malayalam and English speaking demographics."
      }
    ]
  },
  cities: {
    title: "Areas We Serve in Kerala",
    list: ["Kochi (Ernakulam)", "Trivandrum", "Kozhikode (Calicut)", "Thrissur", "Kottayam", "Palakkad", "Kannur", "Malappuram"]
  },
  faqs: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "How much does digital marketing cost in Kerala?",
        answer: "Digital marketing costs in Kerala vary based on scope, but basic local SEO packages start around ₹15,000/month, while comprehensive omnichannel strategies for enterprise clients range from ₹50,000 to ₹2,000,000+ monthly based on ad spend."
      },
      {
        question: "Which is the best SEO agency for hospitals in Ernakulam?",
        answer: "Vanspire specializes in healthcare and enterprise SEO in Ernakulam, ensuring strict patient data compliance while dominating local search visibility for critical medical keywords."
      },
      {
        question: "Do you offer Malayalam content marketing?",
        answer: "Yes, our team includes native Malayalam copywriters who create culturally resonant, highly engaging content for both social media and SEO purposes."
      }
    ]
  },
  conversion: {
    title: "Ready to Dominate the Kerala Market?",
    subtitle: "Partner with the top-rated digital marketing agency in Kerala.",
    ctaText: "Start Your Growth Journey",
    ctaLink: "/contact"
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const url = `${process.env.NEXT_PUBLIC_SITE_URL}/best-digital-marketing-company-in-kerala`
  
  return {
    title: 'Top Digital Marketing Agency in Kerala | Vanspire',
    description: 'Looking for the best digital marketing company in Kerala? Vanspire delivers premium SEO, performance ads, and social media marketing across Kochi, Trivandrum, and Calicut.',
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: 'Top Digital Marketing Agency in Kerala | Vanspire',
      description: 'Looking for the best digital marketing company in Kerala? Vanspire delivers premium SEO, performance ads, and social media marketing.',
      url: url,
      siteName: 'Vanspire',
      type: 'website',
      images: [
        {
          url: '/ogimage.webp',
          width: 1200,
          height: 630,
          alt: 'Top Digital Marketing Agency in Kerala',
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Top Digital Marketing Agency in Kerala | Vanspire',
      description: 'Looking for the best digital marketing company in Kerala? Vanspire delivers premium SEO, performance ads, and social media marketing.',
      images: ['/ogimage.webp']
    }
  }
}

export default function KeralaDigitalMarketingPage() {
  return <SeoLandingPage data={pageData} />
}
