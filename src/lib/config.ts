/**
 * Main configuration file for the Lawyer Hero template
 * Follows SOLID principles and provides internationalization support
 */

import { US_SAMPLE_DATA } from '@/constants/sample-data'
import { FORM_SUBJECTS, WORKING_HOURS } from '@/constants/countries'
import { AppConfig } from '@/types'

// ============================================================================
// COUNTRY SELECTION
// ============================================================================

// Change this to switch between different countries
export const CURRENT_COUNTRY = 'US' as const

// ============================================================================
// MAIN CONFIGURATION
// ============================================================================

export const appConfig: AppConfig = {
    lawyer: US_SAMPLE_DATA.lawyer,
    services: US_SAMPLE_DATA.services,
    contactInfo: US_SAMPLE_DATA.contactInfo,
    statistics: US_SAMPLE_DATA.statistics,
    formSubjects: FORM_SUBJECTS[CURRENT_COUNTRY] || FORM_SUBJECTS.US,
    aboutHighlights: US_SAMPLE_DATA.aboutSection.highlights,
    whyChooseUs: US_SAMPLE_DATA.aboutSection.whyChooseUs
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
// ANIMATION CONFIGURATION
// ============================================================================

export const animationConfig = {
    duration: {
        fast: 0.2,
        normal: 0.3,
        slow: 0.6
    },
    easing: {
        easeOut: 'easeOut',
        easeInOut: 'easeInOut'
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
    title: 'Sarah Johnson, Esq. - Experienced Attorney',
    description: 'Experienced attorney specializing in civil litigation and family law. Providing comprehensive legal services in New York.',
    keywords: 'attorney, lawyer, civil litigation, family law, New York, legal services',
    author: 'Sarah Johnson, Esq.',
    ogImage: '/og-image.jpg',
    twitterHandle: '@sarahjohnsonlaw'
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
// VALIDATION RULES
// ============================================================================

export const validationRules = {
    name: {
        required: true,
        minLength: 2,
        maxLength: 50
    },
    email: {
        required: true,
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },
    phone: {
        required: false,
        pattern: /^[\+]?[1-9][\d]{0,15}$/
    },
    subject: {
        required: true,
        minLength: 1,
        maxLength: 100
    },
    message: {
        required: true,
        minLength: 10,
        maxLength: 1000
    }
}

// ============================================================================
// EXPORT DEFAULT CONFIGURATION
// ============================================================================

export default appConfig 