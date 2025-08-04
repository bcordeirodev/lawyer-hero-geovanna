/**
 * Country-specific configurations for the Lawyer Hero template
 * Supports multiple legal systems and jurisdictions
 */

import { Country, LocalizationConfig } from '@/types'

// ============================================================================
// COUNTRY CONFIGURATIONS
// ============================================================================

export const COUNTRY_CONFIGS: Record<Country, LocalizationConfig> = {
    US: {
        country: 'US',
        language: 'en',
        currency: 'USD',
        dateFormat: 'MM/DD/YYYY',
        legalSystem: 'common-law'
    },
    UK: {
        country: 'UK',
        language: 'en',
        currency: 'GBP',
        dateFormat: 'DD/MM/YYYY',
        legalSystem: 'common-law'
    },
    CA: {
        country: 'CA',
        language: 'en',
        currency: 'CAD',
        dateFormat: 'MM/DD/YYYY',
        legalSystem: 'common-law'
    },
    AU: {
        country: 'AU',
        language: 'en',
        currency: 'AUD',
        dateFormat: 'DD/MM/YYYY',
        legalSystem: 'common-law'
    },
    BR: {
        country: 'BR',
        language: 'pt',
        currency: 'BRL',
        dateFormat: 'DD/MM/YYYY',
        legalSystem: 'civil-law'
    },
    DE: {
        country: 'DE',
        language: 'de',
        currency: 'EUR',
        dateFormat: 'DD.MM.YYYY',
        legalSystem: 'civil-law'
    },
    FR: {
        country: 'FR',
        language: 'fr',
        currency: 'EUR',
        dateFormat: 'DD/MM/YYYY',
        legalSystem: 'civil-law'
    },
    ES: {
        country: 'ES',
        language: 'es',
        currency: 'EUR',
        dateFormat: 'DD/MM/YYYY',
        legalSystem: 'civil-law'
    },
    IT: {
        country: 'IT',
        language: 'it',
        currency: 'EUR',
        dateFormat: 'DD/MM/YYYY',
        legalSystem: 'civil-law'
    }
}

// ============================================================================
// LEGAL SYSTEM CONFIGURATIONS
// ============================================================================

export const LEGAL_SYSTEMS = {
    'common-law': {
        name: 'Common Law',
        description: 'Based on judicial decisions and precedents',
        countries: ['US', 'UK', 'CA', 'AU']
    },
    'civil-law': {
        name: 'Civil Law',
        description: 'Based on codified statutes and regulations',
        countries: ['BR', 'DE', 'FR', 'ES', 'IT']
    },
    'mixed': {
        name: 'Mixed System',
        description: 'Combines elements of both common and civil law',
        countries: []
    }
}

// ============================================================================
// BAR ASSOCIATION NAMES
// ============================================================================

export const BAR_ASSOCIATIONS = {
    US: 'State Bar Association',
    UK: 'Bar Council',
    CA: 'Law Society',
    AU: 'Law Society',
    BR: 'OAB (Ordem dos Advogados do Brasil)',
    DE: 'Rechtsanwaltskammer',
    FR: 'Barreau',
    ES: 'Colegio de Abogados',
    IT: 'Ordine degli Avvocati'
}

// ============================================================================
// LEGAL SERVICE CATEGORIES
// ============================================================================

export const LEGAL_CATEGORIES = {
    'common-law': [
        'Civil Litigation',
        'Criminal Defense',
        'Family Law',
        'Business Law',
        'Real Estate Law',
        'Employment Law',
        'Intellectual Property',
        'Immigration Law',
        'Personal Injury',
        'Estate Planning',
        'Tax Law',
        'Bankruptcy Law'
    ],
    'civil-law': [
        'Civil Law',
        'Criminal Law',
        'Family Law',
        'Commercial Law',
        'Real Estate Law',
        'Labor Law',
        'Intellectual Property',
        'Immigration Law',
        'Administrative Law',
        'Succession Law',
        'Tax Law',
        'Bankruptcy Law'
    ]
}

// ============================================================================
// CONTACT FORM SUBJECTS BY COUNTRY
// ============================================================================

export const FORM_SUBJECTS = {
    US: [
        { value: '', label: 'Select a subject' },
        { value: 'consultation', label: 'Schedule Consultation' },
        { value: 'legal-question', label: 'Legal Question' },
        { value: 'case-evaluation', label: 'Case Evaluation' },
        { value: 'document-review', label: 'Document Review' },
        { value: 'other', label: 'Other' }
    ],
    UK: [
        { value: '', label: 'Select a subject' },
        { value: 'consultation', label: 'Schedule Consultation' },
        { value: 'legal-question', label: 'Legal Question' },
        { value: 'case-evaluation', label: 'Case Evaluation' },
        { value: 'document-review', label: 'Document Review' },
        { value: 'other', label: 'Other' }
    ],
    BR: [
        { value: '', label: 'Selecione um assunto' },
        { value: 'consulta', label: 'Agendar Consulta' },
        { value: 'duvida', label: 'Dúvida Jurídica' },
        { value: 'orçamento', label: 'Solicitar Orçamento' },
        { value: 'outro', label: 'Outro' }
    ]
}

// ============================================================================
// WORKING HOURS BY COUNTRY
// ============================================================================

export const WORKING_HOURS = {
    US: 'Monday - Friday: 9:00 AM - 6:00 PM',
    UK: 'Monday - Friday: 9:00 AM - 6:00 PM',
    CA: 'Monday - Friday: 9:00 AM - 6:00 PM',
    AU: 'Monday - Friday: 9:00 AM - 6:00 PM',
    BR: 'Segunda a Sexta: 9h às 18h',
    DE: 'Montag - Freitag: 9:00 - 18:00',
    FR: 'Lundi - Vendredi: 9h00 - 18h00',
    ES: 'Lunes - Viernes: 9:00 - 18:00',
    IT: 'Lunedì - Venerdì: 9:00 - 18:00'
} 