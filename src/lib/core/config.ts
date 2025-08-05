/**
 * Main configuration file for the Lawyer Hero template
 * Follows SOLID principles and provides internationalization support
 */

import { LAWYER_DATA } from '@/constants/data'
import { FORM_SUBJECTS, WORKING_HOURS } from '@/constants/countries'
import { Lawyer, LegalService, ContactInfo, Statistic, FormSubject } from '@/types'

// ============================================================================
// COUNTRY SELECTION
// ============================================================================

// Change this to switch between different countries
export const CURRENT_COUNTRY = 'BR' as const

// ============================================================================
// MAIN CONFIGURATION
// ============================================================================

export const appConfig = {
    lawyer: LAWYER_DATA.lawyer,
    services: LAWYER_DATA.services,
    contactInfo: LAWYER_DATA.contactInfo,
    statistics: LAWYER_DATA.statistics,
    formSubjects: FORM_SUBJECTS[CURRENT_COUNTRY] || FORM_SUBJECTS.BR,
    aboutHighlights: LAWYER_DATA.aboutSection.highlights,
    whyChooseUs: LAWYER_DATA.aboutSection.whyChooseUs
}

// ============================================================================
// EXPORTED CONFIGURATIONS FOR EASY ACCESS
// ============================================================================

export const lawyerConfig = appConfig.lawyer
export const servicesConfig = appConfig.services
export const contactConfig = appConfig.contactInfo
export const statisticsConfig = appConfig.statistics
export const formConfig = { subjects: appConfig.formSubjects }
export const aboutConfig = {
    highlights: appConfig.aboutHighlights,
    whyChooseUs: appConfig.whyChooseUs
}

// ============================================================================
// THEME CONFIGURATION
// ============================================================================

export const themeConfig = {
    colors: {
        primary: 'blue',
        secondary: 'indigo',
        accent: 'cyan',
        background: 'slate',
        text: 'white'
    },
    gradients: {
        primary: 'from-blue-500 to-indigo-500',
        secondary: 'from-cyan-500 to-blue-500'
    }
}



// ============================================================================
// RESPONSIVE BREAKPOINTS
// ============================================================================

export const breakpoints = {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
}

// ============================================================================
// SEO CONFIGURATION
// ============================================================================

export const seoConfig = {
    title: 'Dra. Geovanna Nery - Advogada Especialista',
    description: 'Advogada especializada em direito civil, empresarial e família. Assessoria jurídica personalizada em São Paulo.',
    keywords: 'advogada, direito civil, direito empresarial, direito família, São Paulo, assessoria jurídica',
    author: 'Dra. Geovanna Nery',
    ogImage: '/og-image.jpg',
    twitterHandle: '@geovannanery'
}

// ============================================================================
// CONTACT FORM CONFIGURATION
// ============================================================================

export const contactFormConfig = {
    requiredFields: ['name', 'email', 'subject', 'message'],
    optionalFields: ['phone'],
    maxMessageLength: 1000,
    autoComplete: {
        name: 'name',
        email: 'email',
        phone: 'tel',
        subject: 'off',
        message: 'off'
    }
}



// ============================================================================
// EXPORT DEFAULT CONFIGURATION
// ============================================================================

export default appConfig 