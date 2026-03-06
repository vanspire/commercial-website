export interface KnowledgeEntry {
  id: string;
  keywords: string[];
  intent: string[];
  summary: string;
  detailed: string;
  url: string;
  cta?: { label: string; href: string };
}
export const knowledgeBase: KnowledgeEntry[] = [
  // ─── SERVICES HUB ─────────────────────────────────────────────────────────
  {
    id: "services-overview",
    keywords: [
      "services",
      "what do you do",
      "what you offer",
      "solutions",
      "capabilities",
      "what vanspire does",
      "offerings",
      "products",
    ],
    intent: ["overview", "explore", "general"],
    summary:
      "Vanspire delivers two core pillars: Digital Solutions (web, apps, cloud) and Integration & Implementation (ERP, HMS, enterprise integrations).",
    detailed:
      "Vanspire operates across two service pillars:\n\n**Digital Solutions** - Web Platform Development, Application Development (mobile & cross-platform), Cloud Infrastructure, and Digital Transformation.\n\n**Integration & Implementation** - ERP Implementation across SAP, Oracle, Microsoft Dynamics, Odoo, and ERPNext; Hospital Management System (HMS) as a SaaS product; and Enterprise System Integration for API design, middleware, and event-driven architecture.\n\nEvery engagement is scoped individually - no off-the-shelf retainers.",
    url: "/services",
    cta: { label: "Explore All Services", href: "/services" },
  },
  // ─── DIGITAL SOLUTIONS PILLAR ─────────────────────────────────────────────
  {
    id: "digital-solutions",
    keywords: [
      "digital solutions",
      "digital",
      "technology services",
      "web development",
      "app development",
      "cloud",
      "digital transformation",
      "platform engineering",
      "software development",
      "tech solutions",
    ],
    intent: ["explore", "overview", "learn"],
    summary:
      "Digital Solutions covers web platforms, mobile apps, cloud infrastructure, and digital transformation programmes.",
    detailed:
      "Vanspire's Digital Solutions pillar covers four areas:\n\n1. **Web Platform Development** - scalable, SEO-optimised web applications and portals built for performance.\n2. **Application Development** - cross-platform mobile applications (iOS & Android) with native-quality UX.\n3. **Cloud Infrastructure** - multi-cloud strategy, migration, DevOps pipelines, and managed infrastructure.\n4. **Digital Transformation** - end-to-end modernisation of legacy systems and processes into future-ready architectures.\n\nAll solutions are built to enterprise standards - not MVPs.",
    url: "/services/digital-solutions",
    cta: {
      label: "View Digital Solutions",
      href: "/services/digital-solutions",
    },
  },
  // ─── WEB PLATFORM DEVELOPMENT ─────────────────────────────────────────────
  {
    id: "web-platform",
    keywords: [
      "web platform",
      "website",
      "web app",
      "web application",
      "portal",
      "frontend",
      "next.js",
      "react",
      "web development",
      "landing page",
      "ecommerce",
      "saas website",
    ],
    intent: ["build", "develop", "launch"],
    summary:
      "Vanspire builds scalable, performant web platforms and portals - from marketing sites to complex SaaS interfaces.",
    detailed:
      "Web Platform Development at Vanspire covers everything from high-performance marketing websites to full-stack web applications and SaaS dashboards.\n\nKey capabilities:\n- Next.js and React-based architectures optimised for Core Web Vitals\n- SEO-first engineering with structured data and metadata strategy\n- API-driven frontends connected to any backend or third-party service\n- Design systems, CMS integration, and long-term maintainability\n\nEvery web platform is built for scale, speed, and conversion - not just aesthetics.",
    url: "/services/digital-solutions",
    cta: { label: "Discuss Your Web Project", href: "/contact" },
  },
  // ─── APPLICATION DEVELOPMENT ──────────────────────────────────────────────
  {
    id: "app-development",
    keywords: [
      "mobile app",
      "app development",
      "ios",
      "android",
      "react native",
      "flutter",
      "cross-platform",
      "application",
      "mobile development",
      "smartphone app",
    ],
    intent: ["build", "develop", "create"],
    summary:
      "Vanspire builds cross-platform mobile applications for iOS and Android with native-quality performance.",
    detailed:
      "Vanspire's Application Development practice focuses on cross-platform mobile engineering using React Native and Flutter - delivering apps that look and feel native on both iOS and Android.\n\nWhat we handle:\n- Full product lifecycle from wireframe to App Store / Play Store deployment\n- Offline-capable architectures for field or healthcare contexts\n- Integration with ERP, HMS, and third-party APIs\n- Ongoing maintenance, CI/CD pipelines, and performance optimisation\n\nWe do not build throwaway apps. Every application is engineered for longevity.",
    url: "/services/digital-solutions",
    cta: { label: "Start Your App Project", href: "/contact" },
  },
  // ─── CLOUD INFRASTRUCTURE ─────────────────────────────────────────────────
  {
    id: "cloud-infrastructure",
    keywords: [
      "cloud",
      "cloud infrastructure",
      "aws",
      "azure",
      "google cloud",
      "gcp",
      "devops",
      "kubernetes",
      "docker",
      "ci/cd",
      "infrastructure",
      "hosting",
      "server",
      "deployment",
      "uptime",
      "scalability",
      "multi-cloud",
      "cloud migration",
    ],
    intent: ["migrate", "scale", "deploy", "optimise"],
    summary:
      "Vanspire architects and manages cloud infrastructure on AWS, Azure, and GCP - with DevOps pipelines and enterprise-grade reliability.",
    detailed:
      "Cloud Infrastructure at Vanspire covers the full spectrum of multi-cloud strategy and managed infrastructure:\n\n- **Cloud Migration** - lift-and-shift, re-platforming, and re-architecting legacy systems to AWS, Azure, or GCP\n- **DevOps & CI/CD** - automated pipelines, containerisation (Docker/Kubernetes), infrastructure-as-code\n- **Managed Infrastructure** - monitoring, alerting, cost optimisation, disaster recovery\n- **Security & Compliance** - VPC, IAM, encryption at rest/in-transit, compliance readiness\n\nWe design for 99.9%+ uptime with cost-efficiency built in from day one.",
    url: "/services/digital-solutions",
    cta: { label: "Plan Your Cloud Strategy", href: "/contact" },
  },
  // ─── DIGITAL TRANSFORMATION ───────────────────────────────────────────────
  {
    id: "digital-transformation",
    keywords: [
      "digital transformation",
      "legacy",
      "modernisation",
      "modernization",
      "process automation",
      "workflow",
      "future-ready",
      "agile",
      "change management",
      "business transformation",
      "digitise",
      "digitize",
    ],
    intent: ["transform", "modernise", "automate"],
    summary:
      "Vanspire leads end-to-end digital transformation programmes - from strategy and architecture to execution and change management.",
    detailed:
      "Digital Transformation at Vanspire is not a buzzword engagement. It is a structured programme to move organisations from legacy systems and manual processes to scalable, automated, and future-ready architectures.\n\nWhat this involves:\n- **Assessment** - technology audit, bottleneck mapping, and transformation roadmap\n- **Architecture Design** - microservices, event-driven systems, API-first design\n- **Migration & Build** - phased replacement of legacy systems with zero business disruption\n- **Change Management** - training, documentation, and adoption support for internal teams\n\nWe treat transformation as infrastructure investment, not a one-time project.",
    url: "/services/digital-solutions",
    cta: { label: "Start the Conversation", href: "/contact" },
  },
  // ─── ERP IMPLEMENTATION ───────────────────────────────────────────────────
  {
    id: "erp-implementation",
    keywords: [
      "erp",
      "erp implementation",
      "sap",
      "oracle",
      "microsoft dynamics",
      "dynamics 365",
      "odoo",
      "erpnext",
      "enterprise resource planning",
      "erp deployment",
      "erp migration",
      "erp consulting",
      "erp rollout",
      "erp support",
    ],
    intent: ["implement", "deploy", "migrate", "consult"],
    summary:
      "Vanspire implements ERP systems across SAP, Oracle, Microsoft Dynamics, Odoo, and ERPNext - using a structured 6-phase methodology.",
    detailed:
      "ERP Implementation at Vanspire follows a disciplined 6-phase methodology:\n\n1. **Analysis** - business process mapping, gap analysis, and requirements documentation\n2. **Platform Selection** - recommending the right ERP (SAP, Oracle, Dynamics 365, Odoo, ERPNext) based on scale, industry, and budget\n3. **Design** - system architecture, module configuration, and integration design\n4. **Build** - custom development, third-party integrations, data model setup\n5. **Migration** - historical data cleaning, validation, and cutover planning\n6. **Go-Live & Support** - hypercare support, training, and post-deployment stabilisation\n\nSupported platforms: SAP S/4HANA, Oracle ERP Cloud, Microsoft Dynamics 365, Odoo, ERPNext.\n\nWe do not do rapid deployments. Every ERP goes live when it is ready.",
    url: "/services/integration/erp-implementation",
    cta: { label: "Discuss ERP Implementation", href: "/contact" },
  },
  // ─── HOSPITAL MANAGEMENT SYSTEM ───────────────────────────────────────────
  {
    id: "hms",
    keywords: [
      "hms",
      "hospital management system",
      "hospital software",
      "clinic software",
      "healthcare system",
      "patient management",
      "emr",
      "ehr",
      "medical records",
      "op module",
      "ip module",
      "pharmacy module",
      "billing module",
      "lab module",
      "radiology",
      "lims",
      "hospital saas",
      "healthcare saas",
      "nabh",
      "abdm",
      "healthcare compliance",
      "pms",
      "hospital erp",
    ],
    intent: ["demo", "deploy", "learn", "purchase"],
    summary:
      "Vanspire HMS is a proprietary, enterprise SaaS platform for hospitals and clinics - covering OP, IP, Pharmacy, Billing, Lab, Radiology, Admin, and Analytics.",
    detailed:
      "Vanspire HMS is a fully integrated Hospital Management System built as enterprise SaaS - designed for multi-specialty hospitals, clinics, and healthcare groups.\n\n**8 Core Modules:**\n1. **OP Management** - appointment scheduling, queue management, OPD workflows\n2. **IP Management** - ward management, bed allocation, nursing notes, discharge summaries\n3. **Pharmacy** - inventory management, prescription fulfillment, drug interaction checks\n4. **Billing & Finance** - insurance claims, cashless processing, financial reporting\n5. **Laboratory (LIMS)** - test ordering, sample tracking, result reporting and notifications\n6. **Radiology** - DICOM integration, imaging workflows, radiology reporting\n7. **Admin & HR** - staff scheduling, role-based access, department management\n8. **Analytics & Reporting** - real-time dashboards, operational KPIs, compliance reports\n\n**Compliance:** ABDM-ready, NABH-aligned, DPDP Act compliant.\n**Deployment:** Cloud (multi-tenant SaaS) and on-premise options available.",
    url: "/services/integration/hospital-management-system",
    cta: { label: "Request a HMS Demo", href: "/contact" },
  },
  // ─── ENTERPRISE SYSTEM INTEGRATION ────────────────────────────────────────
  {
    id: "enterprise-integration",
    keywords: [
      "enterprise integration",
      "system integration",
      "api integration",
      "middleware",
      "ipaas",
      "mulesoft",
      "kafka",
      "esb",
      "enterprise service bus",
      "webhook",
      "data sync",
      "api design",
      "microservices",
      "event-driven",
      "hub and spoke",
      "third party integration",
      "saas integration",
      "erp integration",
    ],
    intent: ["integrate", "connect", "sync", "automate"],
    summary:
      "Vanspire designs and builds enterprise integration architectures - connecting ERP, CRM, HMS, and SaaS systems through APIs, middleware, and event messaging.",
    detailed:
      "Enterprise System Integration solves the problem of disconnected systems creating data silos, manual reconciliation, and operational friction.\n\nVanspire's approach uses a **hub-and-spoke architecture** - a central integration layer that all systems communicate through, rather than point-to-point connections that become unmaintainable.\n\n**Technical stack:**\n- REST & GraphQL API design and documentation\n- Enterprise Service Bus (ESB) and iPaaS platforms (MuleSoft, Dell Boomi, Workato)\n- Event streaming with Apache Kafka and RabbitMQ\n- Webhook design and event-driven workflows\n- Data transformation, mapping, and validation layers\n\n**Deliverables:** Integration architecture diagrams, API documentation, monitoring dashboards, and runbooks.",
    url: "/services/integration/enterprise-system-integration",
    cta: { label: "Plan Your Integration", href: "/contact" },
  },
  // ─── ABOUT / PHILOSOPHY ───────────────────────────────────────────────────
  {
    id: "about",
    keywords: [
      "about",
      "about vanspire",
      "who are you",
      "company",
      "founded",
      "team",
      "philosophy",
      "values",
      "vision",
      "mission",
      "what is vanspire",
      "vanspire story",
      "leadership",
      "founding",
      "culture",
    ],
    intent: ["learn", "understand", "trust"],
    summary:
      "Vanspire is a future-focused brand group building scalable systems and ventures - starting with technology and expanding with purpose.",
    detailed:
      "Vanspire is a brand group - not a typical IT firm. We build technology systems, implement enterprise platforms, and grow as a group of ventures that compound over time.\n\n**Founding Philosophy (four pillars):**\n1. **Discipline over velocity** - we do not rush delivery. Quality is non-negotiable.\n2. **Technology as infrastructure** - software is a long-term asset, not a short-term expense.\n3. **Enterprise-grade by default** - every engagement is built to the standards of large enterprises, regardless of client size.\n4. **Compounding group value** - our work, knowledge, and ventures compound across engagements.\n\n**Our approach:** Vanspire does not scale via headcount alone. We scale via systems, specialisation, and deliberate growth.",
    url: "/about",
    cta: { label: "Learn About Vanspire", href: "/about" },
  },
  // ─── CONTACT / HOW TO WORK WITH US ────────────────────────────────────────
  {
    id: "contact",
    keywords: [
      "contact",
      "get in touch",
      "how to work with vanspire",
      "hire",
      "start a project",
      "reach out",
      "talk to team",
      "inquiry",
      "enquiry",
      "collaborate",
      "schedule a call",
      "book a meeting",
      "proposal",
    ],
    intent: ["contact", "engage", "hire", "start"],
    summary:
      "Every Vanspire engagement starts with a scoped conversation - no generic proposals, no off-the-shelf packages.",
    detailed:
      "To work with Vanspire, the process is straightforward:\n\n1. **Reach out** via our contact page or email hello@vanspire.in\n2. **Discovery call** - we understand your challenge, goals, and constraints\n3. **Scoped proposal** - tailored to your exact requirements, not a package\n4. **Engagement begins** - with clearly defined milestones and deliverables\n\nVanspire does not take every project. We take on work where we can deliver meaningful, enterprise-grade outcomes.\n\nWe are based in Kerala, India, and work with clients across India and internationally.",
    url: "/contact",
    cta: { label: "Get in Touch", href: "/contact" },
  },
  // ─── PRICING ──────────────────────────────────────────────────────────────
  {
    id: "pricing",
    keywords: [
      "price",
      "pricing",
      "cost",
      "how much",
      "rates",
      "fees",
      "budget",
      "quote",
      "estimate",
      "package",
      "retainer",
      "payment",
    ],
    intent: ["price", "cost", "budget"],
    summary:
      "Vanspire does not publish standard pricing. Every engagement is scoped and priced individually based on requirements.",
    detailed:
      "Vanspire does not have standard pricing tiers or retainer packages. Every project is scoped individually based on:\n\n- Complexity and scale of the requirement\n- Timelines and delivery milestones\n- Technology stack and integration depth\n- Ongoing support requirements\n\nThis ensures you pay for exactly what you need - not a bundled package designed for someone else.\n\nTo get an accurate estimate, reach out and we will schedule a scoping conversation with no obligation.",
    url: "/contact",
    cta: { label: "Request a Scoped Estimate", href: "/contact" },
  },
  // ─── VENTURES / GROUP ─────────────────────────────────────────────────────
  {
    id: "ventures",
    keywords: [
      "ventures",
      "brand group",
      "vanspire group",
      "verticals",
      "subsidiaries",
      "expansions",
      "future products",
      "what else does vanspire build",
      "group structure",
    ],
    intent: ["learn", "explore"],
    summary:
      "Vanspire is structured as a brand group - technology services is the current focus, with planned verticals expanding over time.",
    detailed:
      "Vanspire is not purely a services company. It is structured as a brand group - a collection of ventures that compound value over time.\n\n**Current focus:** Technology services - Digital Solutions, ERP Implementation, Hospital Management System, and Enterprise Integration.\n\n**Structure:** The technology arm funds and informs future verticals. Each venture is designed to generate compounding returns - in knowledge, infrastructure, and revenue.\n\n**Philosophy:** We build with patience. Vanspire does not launch ventures for optics - each one is expected to operate with discipline and enterprise standards from day one.",
    url: "/about",
    cta: { label: "Learn More About Vanspire", href: "/about" },
  },
];
