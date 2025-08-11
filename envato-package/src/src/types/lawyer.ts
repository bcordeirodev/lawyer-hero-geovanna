/**
 * Lawyer Types
 * 
 * Tipos específicos para dados do advogado e informações profissionais
 * 
 * @author Bruno Cordeiro
 * @version 1.0.0
 */


// ============================================================================
// LAWYER CORE TYPES
// ============================================================================

export interface Lawyer {
    name: string
    fullName: string
    title: string
    description: string
    detailedDescription: string
    credentials: LawyerCredentials
    statistics: LawyerStatistics
    contact: LawyerContact
    photo: LawyerPhoto
}

export interface LawyerCredentials {
    bar: string
    location: string
}

export interface LawyerStatistics {
    experience: string
    casesResolved: string
    successRate: string
}

export interface LawyerContact {
    email: string
    phone: string
    workingHours: string
}

export interface LawyerPhoto {
    placeholder: string
    alt: string
}

// ============================================================================
// SERVICE TYPES
// ============================================================================

export type ServiceCategory =
    | 'civil'
    | 'business'
    | 'family'
    | 'real-estate'
    | 'health'
    | 'tax'

export interface LegalService {
    id: string
    title: string
    description: string
    icon: React.ComponentType<{ className?: string }>
    features: string[]
    gradient: string
    category: ServiceCategory
}

// ============================================================================
// CONTACT TYPES
// ============================================================================

export type ContactMethod = 'whatsapp' | 'email' | 'phone' | 'address' | 'hours'

export interface ContactInfo {
    icon: React.ComponentType<{ className?: string }>
    label: string
    value: string
    type: ContactMethod
    href?: string
}

export interface ContactPreferences {
    preferredMethod: ContactMethod
    preferredTime: 'morning' | 'afternoon' | 'evening' | 'anytime'
    allowNotifications: boolean
    lastContact?: Date
}

export interface ContactHistory {
    id: string
    method: ContactMethod
    success: boolean
    timestamp: Date
    details?: string
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
// FORM TYPES
// ============================================================================

export interface ContactFormData {
    name: string
    email: string
    phone: string
    subject: string
    message: string
}

export interface FormSubject {
    value: string
    label: string
}

// ============================================================================
// CONFIGURATION TYPES
// ============================================================================

export interface LawyerConfig {
    lawyer: Lawyer
    services: LegalService[]
    contactInfo: ContactInfo[]
    statistics: Statistic[]
    aboutSection: AboutSection
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