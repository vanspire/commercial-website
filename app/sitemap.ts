import { type MetadataRoute } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vanspire.in'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    { url: `${siteUrl}/`, lastModified, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${siteUrl}/about`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${siteUrl}/ventures`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${siteUrl}/ventures/technology`, lastModified, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${siteUrl}/ventures/technology/services/software-web-platforms`, lastModified, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${siteUrl}/ventures/technology/services/application-development`, lastModified, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${siteUrl}/ventures/technology/services/cloud-system-architecture`, lastModified, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${siteUrl}/ventures/technology/services/iot-smart-solutions`, lastModified, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${siteUrl}/ventures/technology/services/digital-transformation`, lastModified, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${siteUrl}/insights`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${siteUrl}/insights/building-scalable-digital-systems`, lastModified, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${siteUrl}/insights/future-ready-enterprise-technology-strategy`, lastModified, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${siteUrl}/contact`, lastModified, changeFrequency: 'yearly', priority: 0.8 },
    { url: `${siteUrl}/terms`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${siteUrl}/privacy`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
  ]
}
