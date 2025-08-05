import { Metadata } from 'next'
import { LAWYER_DATA } from '@/constants/data'
import { SEO_CONFIG, generateKeywords, generateServiceKeywords } from './seo'

export interface MetadataOptions {
    title?: string
    description?: string
    image?: string
    url?: string
    service?: string
}

export function generateMetadata(options: MetadataOptions = {}): Metadata {
    const { lawyer } = LAWYER_DATA

    const defaultTitle = `${lawyer.name} - ${lawyer.title}`
    const defaultDescription = lawyer.description
    const defaultImage = `${SEO_CONFIG.siteImage}?name=${encodeURIComponent(lawyer.name)}&title=${encodeURIComponent(lawyer.title)}`

    const title = options.title || defaultTitle
    const description = options.description || defaultDescription
    const image = options.image || defaultImage
    const url = options.url || SEO_CONFIG.siteUrl

    return {
        title,
        description,
        keywords: generateKeywords(),
        authors: [{ name: lawyer.name }],
        creator: lawyer.name,
        publisher: lawyer.name,
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
        openGraph: {
            title,
            description,
            url,
            siteName: SEO_CONFIG.siteName,
            images: [
                {
                    url: image,
                    width: 1200,
                    height: 630,
                    alt: `${lawyer.name} - ${lawyer.title}`,
                },
            ],
            locale: SEO_CONFIG.locale,
            type: SEO_CONFIG.type,
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [image],
            creator: '@advocaciageovanna',
        },
        alternates: {
            canonical: url,
        },
        other: {
            'geo.region': 'BR-SP',
            'geo.placename': 'São Paulo',
            'geo.position': '-23.5505;-46.6333',
            'ICBM': '-23.5505, -46.6333',
        },
    }
}

export function generateServiceMetadata(serviceId: string): Metadata {
    const service = LAWYER_DATA.services.find(s => s.id === serviceId)
    const { lawyer } = LAWYER_DATA

    if (!service) {
        return generateMetadata()
    }

    const title = `${service.title} - ${lawyer.name}`
    const description = `${service.description} ${lawyer.name} oferece assessoria especializada em ${service.title.toLowerCase()}.`
    const image = `${SEO_CONFIG.siteImage}?name=${encodeURIComponent(lawyer.name)}&title=${encodeURIComponent(service.title)}&service=${encodeURIComponent(service.id)}`

    const metadata = generateMetadata({
        title,
        description,
        image,
        service: service.id,
    })

    // Override keywords for service-specific pages
    return {
        ...metadata,
        keywords: generateServiceKeywords(serviceId),
    }
}

export function generateStructuredData() {
    const { lawyer } = LAWYER_DATA

    return {
        '@context': 'https://schema.org',
        '@type': 'LegalService',
        name: `${lawyer.name} - Advocacia`,
        description: lawyer.description,
        url: 'https://geovannanery.com',
        telephone: lawyer.contact.phone,
        email: lawyer.contact.email,
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'São Paulo',
            addressRegion: 'SP',
            addressCountry: 'BR',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: -23.5505,
            longitude: -46.6333,
        },
        openingHours: lawyer.contact.workingHours,
        priceRange: '$$',
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Serviços Jurídicos',
            itemListElement: LAWYER_DATA.services.map((service, index) => ({
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: service.title,
                    description: service.description,
                },
                position: index + 1,
            })),
        },
        employee: {
            '@type': 'Person',
            name: lawyer.name,
            jobTitle: lawyer.title,
            description: lawyer.description,
            alumniOf: {
                '@type': 'Organization',
                name: 'OAB/SP',
            },
        },
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            reviewCount: '150',
        },
    }
} 