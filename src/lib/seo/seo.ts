
import { LAWYER_CONFIG } from '@/config'

export const SEO_CONFIG = {
    siteName: `${LAWYER_CONFIG.lawyer.name} - Advocacia`,
    siteUrl: 'https://geovannanery.com',
    siteDescription: LAWYER_CONFIG.lawyer.description,
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
        // Localização - Termos Prioritários
        'advogada Brasília',
        'advogado Ceilândia',
        'advogada Ceilândia',
        'advogado DF',
        'advogada DF',
        'advogado Distrito Federal',
        'advogado Brasília DF',
        'escritório advocacia Ceilândia',
        'escritório advocacia Brasília',

        // Áreas de Atuação + Localização
        'advogado direito civil Brasília',
        'advogado direito família Ceilândia',
        'advogado trabalhista Brasília',
        'advogado tributário DF',
        'advogada direito consumidor Brasília',

        // Regiões Administrativas do DF
        'advogado Taguatinga',
        'advogado Samambaia',
        'advogado Sol Nascente',
        'advogado Águas Claras',
        'advogado Vicente Pires',

        // Termos Gerais
        'advogada',
        'advogado',
        'direito civil',
        'direito empresarial',
        'direito família',
        'direito tributário',
        'direito trabalhista',
        'direito saúde',
        'assessoria jurídica',
        'consultoria jurídica',
        'advogado online',

        // Nome e Credenciais
        LAWYER_CONFIG.lawyer.name,
        'Geovanna Nery',
        LAWYER_CONFIG.lawyer.credentials.bar,
        'OAB DF',

        // Serviços
        ...LAWYER_CONFIG.services.map(service => service.title.toLowerCase()),
        ...LAWYER_CONFIG.services.map(service => `${service.title.toLowerCase()} Brasília`),
        ...LAWYER_CONFIG.services.map(service => `${service.title.toLowerCase()} Ceilândia`),

        // Adicional
        ...additionalKeywords,
    ]

    return baseKeywords.join(', ')
}

export const generateServiceKeywords = (serviceId: string) => {
    const service = LAWYER_CONFIG.services.find(s => s.id === serviceId)
    if (!service) return generateKeywords()

    const serviceKeywords = [
        // Serviço específico
        service.title.toLowerCase(),
        `${service.title.toLowerCase()} Brasília`,
        `${service.title.toLowerCase()} Ceilândia`,
        `${service.title.toLowerCase()} DF`,
        `${service.title.toLowerCase()} Distrito Federal`,

        // Features do serviço + localização
        ...service.features.map(feature => feature.toLowerCase()),
        ...service.features.map(feature => `${feature.toLowerCase()} Brasília`),
        ...service.features.map(feature => `${feature.toLowerCase()} Ceilândia`),

        // Termos relacionados
        'advocacia',
        'advogado',
        'advogada',
        'direito',
        'jurídico',
        'consulta jurídica',
        'assessoria',
        'consultoria',
        'atendimento jurídico',

        // Localização
        'Brasília',
        'Ceilândia',
        'DF',
        'Distrito Federal',
    ]

    return generateKeywords(serviceKeywords)
} 