/**
 * TypeScript types for the Lawyer Hero template
 * Provides type safety and better development experience
 */

// ============================================================================
// LAWYER TYPES
// ============================================================================

export interface Lawyer {
    name: string
    title: string
    description: string
    credentials: {
        bar: string
        location: string
    }
    statistics: {
        experience: string
        casesResolved: string
        successRate: string
    }
    contact: {
        email: string
        phone: string
        workingHours: string
    }
    photo: {
        placeholder: string
        alt: string
    }
}

// ============================================================================
// SERVICE TYPES
// ============================================================================

export interface LegalService {
    id: string
    title: string
    description: string
    icon: React.ComponentType<{ className?: string }>
    features: string[]
    gradient: string
    category: 'civil' | 'criminal' | 'family' | 'business' | 'real-estate' | 'employment' | 'intellectual-property' | 'immigration' | 'health' | 'tax' | 'environmental'
}

// ============================================================================
// CONTACT TYPES
// ============================================================================

export interface ContactInfo {
    icon: React.ComponentType<{ className?: string }>
    label: string
    value: string
    type: 'phone' | 'email' | 'address' | 'hours'
}

export interface FormSubject {
    value: string
    label: string
}

export interface ContactForm {
    subjects: FormSubject[]
}

// ============================================================================
// STATISTICS TYPES
// ============================================================================

export interface Statistic {
    id: number
    name: string
    value: string
    icon: React.ComponentType<{ className?: string }>
}

// ============================================================================
// ABOUT TYPES
// ============================================================================

export interface AboutSection {
    highlights: string[]
    whyChooseUs: string[]
}

// ============================================================================
// COMPONENT PROPS TYPES
// ============================================================================

export interface SectionProps {
    id: string
    children: React.ReactNode
    className?: string
    backgroundPattern?: boolean
    container?: boolean
}

export interface SectionHeaderProps {
    badge?: {
        text: string
        icon?: React.ReactNode
    }
    title: string
    description?: string
    className?: string
}

export interface AnimatedCardProps {
    children: React.ReactNode
    index?: number
    className?: string
    hoverEffect?: boolean
}

export interface ContactFormData {
    name: string
    email: string
    phone: string
    subject: string
    message: string
}

// ============================================================================
// CONFIGURATION TYPES
// ============================================================================

export interface AppConfig {
    lawyer: Lawyer
    services: LegalService[]
    contactInfo: ContactInfo[]
    statistics: Statistic[]
    formSubjects: FormSubject[]
    aboutHighlights: string[]
    whyChooseUs: string[]
}

export interface ThemeConfig {
    colors: {
        primary: string
        secondary: string
        accent: string
        background: string
        text: string
    }
    gradients: {
        primary: string
        secondary: string
    }
}

// ============================================================================
// UTILITY TYPES
// ============================================================================

export type Country = 'US' | 'UK' | 'CA' | 'AU' | 'BR' | 'DE' | 'FR' | 'ES' | 'IT'

export interface LocalizationConfig {
    country: Country
    language: string
    currency: string
    dateFormat: string
    legalSystem: 'common-law' | 'civil-law' | 'mixed'
} 