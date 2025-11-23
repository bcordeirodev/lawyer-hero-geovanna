import { LAWYER_CONFIG } from '@/config'
import { Metadata } from 'next'
import { SEO_CONFIG, generateKeywords, generateServiceKeywords } from './seo'

export interface MetadataOptions {
    title?: string
    description?: string
    image?: string
    url?: string
    service?: string
}

export function generateMetadata(options: MetadataOptions = {}): Metadata {
    const { lawyer } = LAWYER_CONFIG

    const defaultTitle = `${lawyer.name} - Advogada em Brasília, Ceilândia e DF | Direito Civil e Tributário`
    const defaultDescription = lawyer.detailedDescription
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
        category: 'Legal Services',
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
                {
                    url: 'https://picsum.photos/400/300?random=1',
                    width: 400,
                    height: 300,
                    alt: `${lawyer.name} - Advocacia`,
                },
            ],
            locale: SEO_CONFIG.locale,
            type: SEO_CONFIG.type,
            countryName: 'Brasil',
            emails: [lawyer.contact.email],
            phoneNumbers: [lawyer.contact.phone],
            faxNumbers: [],
            ttl: 86400,
            determiner: 'the',
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [image, 'https://picsum.photos/400/300?random=1'],
            creator: '@advocaciageovanna',
            site: '@advocaciageovanna',
            creatorId: '123456789',
            siteId: '123456789',
        },
        alternates: {
            canonical: url,
        },
        other: {
            'geo.region': 'BR-DF',
            'geo.placename': 'Brasília',
            'geo.position': '-15.7801;-47.9292',
            'ICBM': '-15.7801, -47.9292',
        },
    }
}

export function generateServiceMetadata(serviceId: string): Metadata {
    const service = LAWYER_CONFIG.services.find(s => s.id === serviceId)
    const { lawyer } = LAWYER_CONFIG

    if (!service) {
        return generateMetadata()
    }

    const title = `${service.title} em Brasília e Ceilândia | ${lawyer.name}`
    const description = `${service.description} Atendimento em Brasília, Ceilândia, Taguatinga e região do DF. ${lawyer.name} oferece assessoria jurídica especializada em ${service.title.toLowerCase()} com atendimento personalizado.`
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
    const { lawyer } = LAWYER_CONFIG

    return {
        '@context': 'https://schema.org',
        '@type': ['LegalService', 'Attorney', 'LocalBusiness', 'ProfessionalService'],
        name: `${lawyer.name} - Advocacia`,
        description: lawyer.description,
        url: 'https://geovannanery.com',
        telephone: lawyer.contact.phone,
        email: lawyer.contact.email,
        image: 'https://geovannanery.com/images/logos/logo-512x512.png',
        logo: 'https://geovannanery.com/images/logos/logo-192x192.png',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Brasília',
            addressRegion: 'DF',
            addressCountry: 'BR',
            streetAddress: 'Ceilândia e Região',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: -15.7801,
            longitude: -47.9292,
        },
        openingHours: lawyer.contact.workingHours,
        priceRange: '$$',
        paymentAccepted: ['Cash', 'Credit Card', 'Bank Transfer'],
        currenciesAccepted: 'BRL',
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Serviços Jurídicos',
            itemListElement: LAWYER_CONFIG.services.map((service, index) => ({
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: service.title,
                    description: service.description,
                    category: service.category,
                    serviceType: service.title,
                },
                position: index + 1,
                price: 'Consultar',
                priceCurrency: 'BRL',
            })),
        },
        employee: {
            '@type': 'Person',
            name: lawyer.fullName,
            alternateName: lawyer.name,
            jobTitle: lawyer.title,
            description: lawyer.detailedDescription,
            image: 'https://picsum.photos/200/200?random=1',
            alumniOf: {
                '@type': 'EducationalOrganization',
                name: 'Instituição de Ensino Superior',
            },
            knowsAbout: LAWYER_CONFIG.services.map(service => service.title),
            hasCredential: lawyer.credentials.bar,
            worksFor: {
                '@type': 'Organization',
                name: `${lawyer.name} - Advocacia`,
            },
            givenName: 'Geovanna',
            familyName: 'Nery da Silva',
            honorificPrefix: 'Dra.',
            honorificSuffix: 'OAB/DF',
        },
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            reviewCount: '150',
            bestRating: '5',
            worstRating: '1',
        },
        review: [
            {
                '@type': 'Review',
                author: {
                    '@type': 'Person',
                    name: 'Maria Silva',
                },
                reviewRating: {
                    '@type': 'Rating',
                    ratingValue: '5',
                    bestRating: '5',
                },
                reviewBody: 'Excelente advogada, muito profissional e atenciosa. Resolveu meu problema rapidamente.',
            },
            {
                '@type': 'Review',
                author: {
                    '@type': 'Person',
                    name: 'João Santos',
                },
                reviewRating: {
                    '@type': 'Rating',
                    ratingValue: '5',
                    bestRating: '5',
                },
                reviewBody: `${lawyer.name} é muito competente e dedicada. Recomendo fortemente.`,
            },
        ],
        areaServed: [
            {
                '@type': 'City',
                name: 'Brasília',
                '@id': 'https://www.wikidata.org/wiki/Q2844',
            },
            {
                '@type': 'City',
                name: 'Ceilândia',
            },
            {
                '@type': 'City',
                name: 'Taguatinga',
            },
            {
                '@type': 'City',
                name: 'Samambaia',
            },
            {
                '@type': 'City',
                name: 'Sol Nascente',
            },
        ],
        serviceArea: [
            {
                '@type': 'GeoCircle',
                geoMidpoint: {
                    '@type': 'GeoCoordinates',
                    latitude: -15.8167,
                    longitude: -48.1067,
                },
                geoRadius: '50000',
            },
        ],
    }
} 