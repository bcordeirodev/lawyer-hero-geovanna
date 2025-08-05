import { LAWYER_DATA } from '@/constants/data'

interface ServiceStructuredDataProps {
    serviceId: string
}

export function ServiceStructuredData({ serviceId }: ServiceStructuredDataProps) {
    const service = LAWYER_DATA.services.find(s => s.id === serviceId)
    const { lawyer } = LAWYER_DATA

    if (!service) {
        return null
    }

    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: service.title,
        description: service.description,
        provider: {
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
        },
        areaServed: {
            '@type': 'Place',
            name: 'São Paulo, SP',
        },
        serviceType: service.title,
        category: service.category,
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: service.title,
            itemListElement: service.features.map((feature, index) => ({
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: feature,
                },
                position: index + 1,
            })),
        },
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(structuredData),
            }}
        />
    )
} 