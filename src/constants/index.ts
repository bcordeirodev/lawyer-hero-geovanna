/**
 * Centralized constants
 * Provides reusable constants following DRY principle
 */

// ============================================================================
// APP CONSTANTS
// ============================================================================

export const APP_CONFIG = {
    name: 'LawyerHero',
    version: '1.0.0',
    description: 'Professional lawyer landing page',
    author: 'Dra. Geovanna Nery',
    url: 'https://geovannanery.com'
} as const

// ============================================================================
// BREAKPOINTS
// ============================================================================

export const BREAKPOINTS = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536
} as const

// ============================================================================
// ANIMATION CONSTANTS
// ============================================================================

export const ANIMATION = {
    duration: {
        fast: 0.2,
        normal: 0.3,
        slow: 0.6,
        slower: 0.8
    },
    easing: {
        easeOut: 'easeOut',
        easeInOut: 'easeInOut',
        easeIn: 'easeIn'
    },
    delay: {
        none: 0,
        small: 0.1,
        medium: 0.2,
        large: 0.3
    }
} as const

// ============================================================================
// FORM CONSTANTS
// ============================================================================

export const FORM = {
    maxLength: {
        name: 50,
        email: 100,
        phone: 20,
        subject: 100,
        message: 1000
    },
    minLength: {
        name: 2,
        email: 5,
        subject: 1,
        message: 10
    },
    patterns: {
        name: /^[a-zA-ZÀ-ÿ\s]+$/,
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        phone: /^[\+]?[1-9][\d]{0,15}$/
    }
} as const

// ============================================================================
// SEO CONSTANTS
// ============================================================================

export const SEO = {
    title: {
        default: 'Dra. Geovanna Nery - Advogada Especialista',
        services: 'Áreas de Atuação - Dra. Geovanna Nery',
        contact: 'Contato - Dra. Geovanna Nery',
        about: 'Sobre - Dra. Geovanna Nery'
    },
    description: {
        default: 'Advogada especializada em direito civil, empresarial e família. Assessoria jurídica personalizada em São Paulo.',
        services: 'Conheça nossas áreas de atuação: direito civil, empresarial e família. Assessoria jurídica especializada.',
        contact: 'Entre em contato com Dra. Geovanna Nery para assessoria jurídica personalizada.',
        about: 'Conheça Dra. Geovanna Nery, advogada especialista com mais de 8 anos de experiência.'
    },
    keywords: {
        default: 'advogada, direito civil, direito empresarial, direito família, São Paulo, assessoria jurídica',
        services: 'direito civil, direito empresarial, direito família, advocacia, São Paulo',
        contact: 'contato advogada, assessoria jurídica, São Paulo',
        about: 'advogada São Paulo, experiência jurídica, especialista direito'
    }
} as const

// ============================================================================
// SOCIAL MEDIA
// ============================================================================

export const SOCIAL = {
    whatsapp: '+5511999999999',
    email: 'contato@geovannanery.com',
    phone: '+55 11 99999-9999',
    linkedin: 'https://linkedin.com/in/geovannanery',
    instagram: 'https://instagram.com/geovannanery'
} as const

// ============================================================================
// CONTACT INFORMATION
// ============================================================================

export const CONTACT = {
    address: {
        street: 'Rua das Flores, 123',
        neighborhood: 'Vila Madalena',
        city: 'São Paulo',
        state: 'SP',
        zipCode: '01234-567',
        country: 'Brasil'
    },
    hours: {
        weekdays: '09:00 - 18:00',
        saturday: '09:00 - 12:00',
        sunday: 'Fechado'
    },
    emergency: {
        phone: '+55 11 99999-9999',
        available: '24/7'
    }
} as const

// ============================================================================
// SERVICES CATEGORIES
// ============================================================================

export const SERVICE_CATEGORIES = {
    civil: 'Direito Civil',
    business: 'Direito Empresarial',
    family: 'Direito de Família',
    labor: 'Direito do Trabalho',
    realEstate: 'Direito Imobiliário',
    consumer: 'Direito do Consumidor',
    inheritance: 'Direito Sucessório',
    contracts: 'Contratos',
    litigation: 'Contencioso',
    consulting: 'Consultoria'
} as const

// ============================================================================
// LEGAL DOCUMENTS
// ============================================================================

export const LEGAL_DOCUMENTS = {
    contracts: [
        'Contratos de Compra e Venda',
        'Contratos de Locação',
        'Contratos de Prestação de Serviços',
        'Contratos Empresariais',
        'Acordos e Convenções'
    ],
    family: [
        'Divórcio',
        'Guarda de Filhos',
        'Pensão Alimentícia',
        'Inventário',
        'Testamento',
        'Adoção'
    ],
    business: [
        'Constituição de Empresas',
        'Contratos Sociais',
        'Fusões e Aquisições',
        'Compliance',
        'Recuperação Judicial'
    ]
} as const

// ============================================================================
// TESTIMONIALS
// ============================================================================

export const TESTIMONIALS = [
    {
        id: 1,
        name: 'Maria Silva',
        rating: 5,
        text: 'Excelente advogada, muito profissional e atenciosa. Resolveu meu problema rapidamente.',
        service: 'Direito Civil',
        date: '2024-01-15'
    },
    {
        id: 2,
        name: 'João Santos',
        rating: 5,
        text: 'Dra. Geovanna é muito competente e dedicada. Recomendo fortemente.',
        service: 'Direito Empresarial',
        date: '2024-01-10'
    },
    {
        id: 3,
        name: 'Ana Costa',
        rating: 5,
        text: 'Atendimento excepcional e conhecimento técnico impecável.',
        service: 'Direito de Família',
        date: '2024-01-05'
    }
] as const

// ============================================================================
// STATISTICS
// ============================================================================

export const STATISTICS = [
    {
        id: 1,
        label: 'Anos de Experiência',
        value: '8+',
        icon: 'briefcase'
    },
    {
        id: 2,
        label: 'Casos Resolvidos',
        value: '500+',
        icon: 'check-circle'
    },
    {
        id: 3,
        label: 'Taxa de Sucesso',
        value: '95%',
        icon: 'trending-up'
    },
    {
        id: 4,
        label: 'Clientes Satisfeitos',
        value: '200+',
        icon: 'users'
    }
] as const

// ============================================================================
// NAVIGATION
// ============================================================================

export const NAVIGATION = {
    main: [
        { name: 'Início', href: '#home' },
        { name: 'Serviços', href: '#services' },
        { name: 'Sobre', href: '#about' },
        { name: 'Contato', href: '#contact' }
    ],
    services: [
        { name: 'Direito Civil', href: '/servicos/direito-civil' },
        { name: 'Direito Empresarial', href: '/servicos/direito-empresarial' },
        { name: 'Direito de Família', href: '/servicos/direito-familia' }
    ],
    legal: [
        { name: 'Política de Privacidade', href: '/politica-privacidade' },
        { name: 'Termos de Uso', href: '/termos-uso' },
        { name: 'Cookies', href: '/cookies' }
    ]
} as const

// ============================================================================
// THEME CONSTANTS
// ============================================================================

export const THEME = {
    colors: {
        primary: {
            light: '#eab308',
            dark: '#b8860b'
        },
        secondary: {
            light: '#ca8a04',
            dark: '#daa520'
        },
        background: {
            primary: {
                light: '#f5f5f0',
                dark: '#0a0f1a'
            },
            secondary: {
                light: '#f0f0e8',
                dark: '#1e293b'
            }
        },
        text: {
            primary: {
                light: '#1a1a1a',
                dark: '#f8fafc'
            },
            secondary: {
                light: '#4a4a4a',
                dark: '#e2e8f0'
            }
        },
        border: {
            primary: {
                light: '#d1d5db',
                dark: '#334155'
            },
            secondary: {
                light: '#9ca3af',
                dark: '#475569'
            }
        }
    },
    spacing: {
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        '2xl': '3rem',
        '3xl': '4rem'
    },
    borderRadius: {
        sm: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        full: '9999px'
    }
} as const 