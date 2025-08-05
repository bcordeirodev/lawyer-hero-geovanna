import { MetadataRoute } from 'next'
import { LAWYER_DATA } from '@/constants/data'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://geovannanery.com'

    const staticPages = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 1,
        },
        {
            url: `${baseUrl}/sobre`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/contato`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
    ]

    const servicePages = LAWYER_DATA.services.map((service) => ({
        url: `${baseUrl}/servicos/${service.id}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.9,
    }))

    return [...staticPages, ...servicePages]
} 