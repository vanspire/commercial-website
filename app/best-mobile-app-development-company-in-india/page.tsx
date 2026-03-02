import { Metadata } from 'next'
import EnterpriseAppLandingPage from '@/components/templates/EnterpriseAppLandingPage'

const pageData = {
  location: "India",
  hero: {
    heading: "Best Mobile App Development Company in India",
    subheading: "Architecting high-performance, enterprise-grade mobile applications. We deliver scalable UI/UX, robust cloud infrastructure, and national-scale deployments tailored for complex business logic.",
    primaryCtaText: "Discuss Your Project",
    primaryCtaLink: "/contact",
    secondaryCtaText: "Explore Tech Stack",
    secondaryCtaLink: "#tech-stack"
  },
  showcase: {
    metrics: [
      { label: "Concurrent Users", value: "1M+" },
      { label: "Uptime SLA", value: "99.9%" },
      { label: "API Response", value: "<1s" },
      { label: "App Store Rating", value: "4.9" }
    ],
    features: [
      { title: "Scalable Microservices", description: "Backend infrastructure designed to auto-scale during peak loads seamlessly without degradation." },
      { title: "Offline-First Sync", description: "Intelligent core data syncing allows field operations to continue even during network outages." },
      { title: "Native Level Fluidity", description: "Achieving 60fps scrolling and animations through rigorous render profiling and engine optimization." }
    ]
  },
  techStack: {
    title: "Enterprise Technology Stack",
    categories: [
      {
        name: "Mobile Platforms",
        technologies: [
          { name: "Swift", iconPath: "", tooltip: "Native iOS Development" },
          { name: "Kotlin", iconPath: "", tooltip: "Native Android Development" },
          { name: "Flutter", iconPath: "", tooltip: "High-performance Cross-Platform" },
          { name: "React Native", iconPath: "", tooltip: "Agile Cross-Platform" }
        ]
      },
      {
        name: "Backend Infrastructure",
        technologies: [
          { name: "Node.js", iconPath: "", tooltip: "High-Concurrency Async API" },
          { name: "Python", iconPath: "", tooltip: "Data Processing & AI" },
          { name: "PostgreSQL", iconPath: "", tooltip: "Relational Data Lake" },
          { name: "Redis", iconPath: "", tooltip: "In-memory Data Chaching" }
        ]
      }
    ]
  },
  architecture: {
    title: "System Architecture & Data Flow",
    description: "Visualizing our decoupled, high-availability mobile deployment strategy designed for millions of endpoints.",
    features: [
      { title: "Decoupled Architecture", description: "Frontend clients talk exclusively to unified API gateways, isolating internal database logic securely behind firewalls." },
      { title: "Global CDN Edge", description: "Static assets and localized app payloads are distributed globally ensuring millisecond load times anywhere in India." },
      { title: "Continuous Integration", description: "Automated test pipelines validate code commits before generating zero-downtime over-the-air updates or store binaries." }
    ]
  },
  bentoFeatures: {
    title: "Capabilities Designed for Enterprise Logic",
    items: [
      { title: "High-Volume Transaction Processing", description: "Engineered payment gateways and ledger systems capable of sustaining thousands of secure financial transactions per second.", span: 2 },
      { title: "Real-Time Data Streams", description: "WebSockets and gRPC integration for instant messaging, live market updates, and live GPS tracking dashboards.", span: 1 },
      { title: "Legacy System Integration", description: "Custom middleware development to bridge modern mobile interfaces with secure, on-premise legacy mainframes safely.", span: 1 }
    ]
  },
  timeline: {
    title: "Agile Development Process",
    steps: [
      { phase: "Discovery", title: "Strategy & Architecture", description: "We define precise technical PRDs, user journeys, and robust cloud topology diagrams before writing a single line of code." },
      { phase: "Prototyping", title: "UI/UX & Interactive Mockups", description: "Vanspire's design team crafts high-fidelity, clickable prototypes mirroring the final native app experience." },
      { phase: "Sprints", title: "Agile Engineering Sprints", description: "Iterative, transparent 2-week development sprints delivering testable beta builds continuously to your stakeholders." },
      { phase: "QA", title: "Penetration & Load Testing", description: "Rigorous automated scripts test boundaries, memory leaks, battery consumption, and OWASP security vulnerabilities." },
      { phase: "Deployment", title: "Cloud Scaling & Launch", description: "Managed deployment to AWS/GCP and seamless navigation of Apple App Store and Google Play Store compliance checks." }
    ]
  },
  solutions: {
    title: "Driving Measurable ROI Through Mobile Innovation",
    outcomes: [
      { title: "Reduce Operational Cost", description: "Automate manual field workflows and digitize paper trails, massively cutting processing overhead." },
      { title: "Increase Direct Revenue", description: "Frictionless UI/UX drastically reduces cart abandonment and boosts in-app purchase conversion rates." },
      { title: "Improve Engagement", description: "Smart push notifications and gamified loyalty loops increase Daily Active Users and lifetime retention." },
      { title: "Faster Time to Market", description: "Our modular codebase components accelerate launch timelines by up to 40% against industry averages." }
    ],
    industries: [
      { name: "Fintech & Banking", description: "Secure ledgers, KYC compliance, and real-time transaction monitoring systems." },
      { name: "Healthcare & Telemed", description: "HIPAA-compliant video streaming and secure patient record caching." },
      { name: "Logistics & Fleet", description: "Real-time routing, offline sync, and complex asset tracking logic." },
      { name: "E-Commerce", description: "High-concurrency catalogs, instant checkout workflows, and AR try-ons." }
    ]
  },
  security: {
    title: "Enterprise Security & Compliance",
    description: "Security is not an afterthought; it is integrated into the foundation of our mobile architecture from Day One.",
    items: [
      { title: "End-to-End Payload Encryption", highlight: "AES-256" },
      { title: "Biometric Secure Authentication", highlight: "Zero-Trust" },
      { title: "Global Privacy & Data Protection", highlight: "GDPR Ready" },
      { title: "Regular Penetration Testing", highlight: "OWASP Top 10" }
    ]
  },
  coverage: {
    title: "Nationwide Service Delivery Network",
    description: "Vanspire operates cross-functional engineering pods delivering premium applications to leading enterprises across India's major tech hubs.",
    cities: ["Bangalore", "Mumbai", "Pune", "Hyderabad", "Delhi NCR"]
  },
  conversion: {
    title: "Ready to Scale Your Mobile Presence?",
    subtitle: "Partner with India's leading enterprise mobile architects.",
    ctaText: "Schedule a Technical Consultation",
    ctaLink: "/contact"
  }
}

export function generateMetadata(): Metadata {
  const pageTitle = "Best Mobile App Development Company in India | Enterprise SaaS"
  const pageDescription = "Vanspire is the best mobile app development company in India specializing in scalable iOS/Android apps, enterprise security, and cloud architectures."
  const canonicalUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/best-mobile-app-development-company-in-india`

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: canonicalUrl,
      type: "website",
      locale: "en_IN",
      siteName: "Vanspire Innovations",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
    }
  }
}

export default function MobileAppIndiaPage() {
  return (
    <div id="tech-stack" className="min-h-screen">
       <EnterpriseAppLandingPage data={pageData} />
    </div>
  )
}
