import { LAWYER_DATA } from '@/constants/data'

export const SEO_CONFIG = {
    siteName: `${LAWYER_DATA.lawyer.name} - Advocacia`,
    siteUrl: 'https://geovannanery.com',
    siteDescription: LAWYER_DATA.lawyer.description,
    siteImage: '/api/og',
    twitterHandle: '@advocaciageovanna',
    locale: 'pt_BR',
    type: 'website' as const,
}

export const generateCanonicalUrl = (path: string = '') => {
    return `${SEO_CONFIG.siteUrl}${path}`
}

export const generateServiceUrl = (serviceId: string) => {
    return `${SEO_CONFIG.siteUrl}/servicos/${serviceId}`
}

export const generateOpenGraphUrl = (path: string = '') => {
    return `${SEO_CONFIG.siteUrl}${path}`
}

export const generateTwitterCardUrl = (path: string = '') => {
    return `${SEO_CONFIG.siteUrl}${path}`
}

export const generateKeywords = (additionalKeywords: string[] = []) => {
    const baseKeywords = [
        'advogada',
        'direito civil',
        'direito empresarial',
        'direito família',
        'São Paulo',
        'assessoria jurídica',
        LAWYER_DATA.lawyer.name,
        LAWYER_DATA.lawyer.credentials.bar,
        ...LAWYER_DATA.services.map(service => service.title.toLowerCase()),
        ...additionalKeywords,
    ]

    return baseKeywords.join(', ')
}

export const generateServiceKeywords = (serviceId: string) => {
    const service = LAWYER_DATA.services.find(s => s.id === serviceId)
    if (!service) return generateKeywords()

    const serviceKeywords = [
        service.title.toLowerCase(),
        ...service.features.map(feature => feature.toLowerCase()),
        'advocacia',
        'advogado',
        'direito',
        'jurídico',
        'consulta',
        'assessoria',
    ]

    return generateKeywords(serviceKeywords)
} 