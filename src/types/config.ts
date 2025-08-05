/**
 * Configuration Types
 * 
 * Tipos específicos para configurações da aplicação
 * 
 * @author Bruno Cordeiro
 * @version 1.0.0
 */

// ============================================================================
// APP CONFIGURATION TYPES
// ============================================================================

export interface AppConfig {
    name: string
    version: string
    description: string
    author: string
    url: string
}

export interface SEOConfig {
    title: {
        default: string
        services: string
        contact: string
        about: string
    }
    description: {
        default: string
        services: string
        contact: string
        about: string
    }
    keywords: {
        default: string
        services: string
        contact: string
        about: string
    }
    author: string
    ogImage: string
    twitterHandle: string
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

export interface BreakpointsConfig {
    sm: number
    md: number
    lg: number
    xl: number
    '2xl': number
}

export interface AnimationConfig {
    duration: {
        fast: number
        normal: number
        slow: number
        slower: number
    }
    easing: {
        easeOut: string
        easeInOut: string
        easeIn: string
    }
    delay: {
        none: number
        small: number
        medium: number
        large: number
    }
}

export interface FormConfig {
    maxLength: {
        name: number
        email: number
        phone: number
        subject: number
        message: number
    }
    minLength: {
        name: number
        email: number
        subject: number
        message: number
    }
    patterns: {
        name: RegExp
        email: RegExp
        phone: RegExp
    }
}

export interface ContactFormConfig {
    requiredFields: string[]
    optionalFields: string[]
    maxMessageLength: number
    autoComplete: {
        name: string
        email: string
        phone: string
        subject: string
        message: string
    }
}

// ============================================================================
// ENVIRONMENT TYPES
// ============================================================================

export interface EnvironmentConfig {
    // App
    NEXT_PUBLIC_APP_NAME: string
    NEXT_PUBLIC_APP_VERSION: string
    NEXT_PUBLIC_APP_URL: string

    // Contact
    NEXT_PUBLIC_LAWYER_EMAIL: string
    NEXT_PUBLIC_LAWYER_PHONE: string
    NEXT_PUBLIC_LAWYER_WHATSAPP: string
    NEXT_PUBLIC_LAWYER_ADDRESS: string

    // Social Media
    NEXT_PUBLIC_TWITTER_HANDLE: string
    NEXT_PUBLIC_LINKEDIN_URL: string
    NEXT_PUBLIC_INSTAGRAM_URL: string

    // Analytics
    NEXT_PUBLIC_GA_TRACKING_ID: string
    NEXT_PUBLIC_GTM_ID: string

    // External Services
    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: string
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY: string

    // API
    API_BASE_URL: string
    API_KEY: string

    // Email
    EMAIL_SERVICE_API_KEY: string
    EMAIL_FROM_ADDRESS: string

    // Database
    DATABASE_URL: string

    // Authentication
    JWT_SECRET: string
    SESSION_SECRET: string

    // File Storage
    CLOUDINARY_CLOUD_NAME: string
    CLOUDINARY_API_KEY: string
    CLOUDINARY_API_SECRET: string

    // Payment
    STRIPE_PUBLISHABLE_KEY: string
    STRIPE_SECRET_KEY: string

    // Monitoring
    SENTRY_DSN: string
    LOG_LEVEL: string
}

// ============================================================================
// LOCALIZATION TYPES
// ============================================================================

export interface LocalizationConfig {
    country: string
    language: string
    currency: string
    dateFormat: string
    legalSystem: 'common-law' | 'civil-law' | 'mixed'
    timezone: string
    phoneCode: string
}

export interface CountryConfig {
    name: string
    code: string
    phoneCode: string
    currency: string
    language: string
    legalSystem: 'common-law' | 'civil-law' | 'mixed'
    timezone: string
    dateFormat: string
    workingHours: {
        start: string
        end: string
        timezone: string
    }
    holidays: string[]
    formSubjects: Array<{
        value: string
        label: string
    }>
}

// ============================================================================
// FEATURE FLAGS TYPES
// ============================================================================

export interface FeatureFlags {
    // UI Features
    enableDarkMode: boolean
    enableAnimations: boolean
    enableNotifications: boolean
    enableSoundEffects: boolean

    // Functionality
    enableContactForm: boolean
    enableWhatsAppIntegration: boolean
    enableEmailIntegration: boolean
    enablePhoneIntegration: boolean

    // Analytics
    enableGoogleAnalytics: boolean
    enableGoogleTagManager: boolean
    enableFacebookPixel: boolean

    // External Services
    enableGoogleMaps: boolean
    enableRecaptcha: boolean
    enableStripePayments: boolean

    // Performance
    enableImageOptimization: boolean
    enableCodeSplitting: boolean
    enableServiceWorker: boolean

    // Development
    enableDebugMode: boolean
    enableHotReload: boolean
    enableErrorBoundary: boolean
}

// ============================================================================
// VALIDATION TYPES
// ============================================================================

export interface ValidationConfig {
    // Form validation
    enableRealTimeValidation: boolean
    enableServerValidation: boolean
    showValidationErrors: boolean

    // Input validation
    enableEmailValidation: boolean
    enablePhoneValidation: boolean
    enableNameValidation: boolean

    // Security
    enableCSRFProtection: boolean
    enableRateLimiting: boolean
    enableInputSanitization: boolean
}

// ============================================================================
// PERFORMANCE TYPES
// ============================================================================

export interface PerformanceConfig {
    // Image optimization
    imageQuality: number
    imageFormat: 'webp' | 'avif' | 'jpeg' | 'png'
    enableLazyLoading: boolean

    // Code optimization
    enableCodeSplitting: boolean
    enableTreeShaking: boolean
    enableMinification: boolean

    // Caching
    enableBrowserCaching: boolean
    enableCDN: boolean
    cacheDuration: number

    // Monitoring
    enablePerformanceMonitoring: boolean
    enableErrorTracking: boolean
    enableUserAnalytics: boolean
}

// ============================================================================
// SECURITY TYPES
// ============================================================================

export interface SecurityConfig {
    // Headers
    enableSecurityHeaders: boolean
    enableCSP: boolean
    enableHSTS: boolean

    // Authentication
    enableJWT: boolean
    enableSessionManagement: boolean
    enableOAuth: boolean

    // Data protection
    enableDataEncryption: boolean
    enableInputSanitization: boolean
    enableOutputEncoding: boolean

    // Monitoring
    enableSecurityMonitoring: boolean
    enableAuditLogging: boolean
    enableThreatDetection: boolean
}

// ============================================================================
// INTEGRATION TYPES
// ============================================================================

export interface IntegrationConfig {
    // Email services
    emailProvider: 'sendgrid' | 'mailgun' | 'ses' | 'smtp'
    emailApiKey: string
    emailFromAddress: string

    // SMS services
    smsProvider: 'twilio' | 'aws-sns' | 'nexmo'
    smsApiKey: string
    smsFromNumber: string

    // Payment services
    paymentProvider: 'stripe' | 'paypal' | 'mercadopago'
    paymentApiKey: string

    // Storage services
    storageProvider: 'cloudinary' | 'aws-s3' | 'firebase'
    storageApiKey: string

    // Analytics services
    analyticsProvider: 'google' | 'mixpanel' | 'amplitude'
    analyticsApiKey: string
}

// ============================================================================
// MONITORING TYPES
// ============================================================================

export interface MonitoringConfig {
    // Error tracking
    errorTrackingProvider: 'sentry' | 'rollbar' | 'bugsnag'
    errorTrackingDsn: string

    // Performance monitoring
    performanceProvider: 'newrelic' | 'datadog' | 'appdynamics'
    performanceApiKey: string

    // Logging
    loggingProvider: 'winston' | 'pino' | 'bunyan'
    logLevel: 'error' | 'warn' | 'info' | 'debug'

    // Uptime monitoring
    uptimeProvider: 'pingdom' | 'uptimerobot' | 'statuscake'
    uptimeApiKey: string
} 