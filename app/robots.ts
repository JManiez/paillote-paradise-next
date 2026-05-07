import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: ['/scripts/'] },
      { userAgent: 'Googlebot-Image', allow: '/assets/images/' },
    ],
    sitemap: 'https://www.pailloteparadise.fr/sitemap.xml',
  }
}
