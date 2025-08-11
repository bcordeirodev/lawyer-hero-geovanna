/**
 * Centralized constants
 * Provides reusable constants following DRY principle
 * 
 * NOTE: Most configurations have been moved to @/lib/core/config.ts
 * This file now contains only unique constants not duplicated elsewhere
 */

import { lawyerConfig } from '@/lib/core/config'

// ============================================================================
// APP CONSTANTS
// ============================================================================

export const APP_CONFIG = {
    name: 'LawyerHero',
    version: '1.0.0',
    description: 'Professional lawyer landing page',
    author: lawyerConfig.name,
    url: 'https://geovannanery.com'
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
        text: `${lawyerConfig.name} é muito competente e dedicada. Recomendo fortemente.`,
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
// STATISTICS (Simplificado - usando dados do config)
// ============================================================================

export const STATISTICS = [
    {
        id: 1,
        label: 'Anos de Experiência',
        value: `${lawyerConfig.statistics.experience}+`,
        icon: 'briefcase'
    },
    {
        id: 2,
        label: 'Casos Resolvidos',
        value: `${lawyerConfig.statistics.casesResolved || '150+'}`,
        icon: 'check-circle'
    },
    {
        id: 3,
        label: 'Taxa de Sucesso',
        value: `${lawyerConfig.statistics.successRate || '95%'}`,
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
// RE-EXPORTS FROM CONFIG (Para manter compatibilidade)
// ============================================================================

// Re-export configurations from the centralized config
export {
    coreAnimationConfig as ANIMATION, breakpoints as BREAKPOINTS, contactDetailsConfig as CONTACT, formValidationConfig as FORM, navigationConfig as NAVIGATION, seoConfig as SEO,
    socialConfig as SOCIAL, themeConfig as THEME
} from '@/lib/core/config'
