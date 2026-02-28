import { type MetadataRoute } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vanspire.in'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const routes = [
    '',
    '/about',
    '/ventures',
    '/ventures/technology',
    '/insights',
    '/contact',
    '/terms',
    '/privacy',
  ]

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route === '/ventures/technology' ? 0.9 : 0.8,
  }))
}
