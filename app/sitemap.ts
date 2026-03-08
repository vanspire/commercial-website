import { type MetadataRoute } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vanspire.in'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    // Core pages
    { url: `${siteUrl}/`, lastModified, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${siteUrl}/about`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${siteUrl}/insights`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${siteUrl}/contact`, lastModified, changeFrequency: 'yearly', priority: 0.85 },

    // Services
    { url: `${siteUrl}/services`, lastModified, changeFrequency: 'monthly', priority: 0.95 },

    // Technology Services
    { url: `${siteUrl}/ventures/technology/services/software-web-platforms`, lastModified, changeFrequency: 'monthly', priority: 0.88 },
    { url: `${siteUrl}/ventures/technology/services/application-development`, lastModified, changeFrequency: 'monthly', priority: 0.88 },
    { url: `${siteUrl}/ventures/technology/services/cloud-system-architecture`, lastModified, changeFrequency: 'monthly', priority: 0.88 },
    { url: `${siteUrl}/ventures/technology/services/iot-smart-solutions`, lastModified, changeFrequency: 'monthly', priority: 0.88 },
    { url: `${siteUrl}/ventures/technology/services/digital-transformation`, lastModified, changeFrequency: 'monthly', priority: 0.88 },

    // Ventures
    { url: `${siteUrl}/ventures`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteUrl}/ventures/technology`, lastModified, changeFrequency: 'monthly', priority: 0.85 },

    // Insights
    { url: `${siteUrl}/insights/building-scalable-digital-systems`, lastModified, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${siteUrl}/insights/future-ready-enterprise-technology-strategy`, lastModified, changeFrequency: 'monthly', priority: 0.75 },

    // SEO Landing Pages
    { url: `${siteUrl}/best-website-development-company-in-kochi`, lastModified, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${siteUrl}/best-digital-marketing-company-in-kerala`, lastModified, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${siteUrl}/best-mobile-app-development-company-in-india`, lastModified, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${siteUrl}/iot-and-software-solutions`, lastModified, changeFrequency: 'monthly', priority: 0.85 },

    // Legal
    { url: `${siteUrl}/terms`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${siteUrl}/privacy`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
  ]
}
