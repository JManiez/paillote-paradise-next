import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.pailloteparadise.fr'
  return [
    { url: base + '/', lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: base + '/restaurant', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: base + '/bar', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: base + '/piscine-transats', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: base + '/soirees', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: base + '/privatisation', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: base + '/galerie', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: base + '/contact', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: base + '/mentions-legales', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: base + '/politique-confidentialite', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: base + '/seo/restaurant-paillote-aigues-mortes', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: base + '/seo/piscine-privee-camargue', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: base + '/seo/soiree-dimanche-aigues-mortes', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: base + '/seo/paillote-camargue', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: base + '/seo/brunch-dimanche-aigues-mortes', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: base + '/seo/privatisation-domaine-camargue', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  ]
}
