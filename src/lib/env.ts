/**
 * Environment Variables Loader
 * 
 * Utilitário para carregar variáveis de ambiente de forma tipada
 * e segura, com validação e valores padrão
 * 
 * @author Bruno Cordeiro
 * @version 1.0.0
 */

// ============================================================================
// ENVIRONMENT TYPES
// ============================================================================

export interface EnvironmentConfig {
    // App
    APP_NAME: string
    APP_VERSION: string
    APP_URL: string

    // Analytics
    GA_TRACKING_ID?: string
    GTM_ID?: string

    // External Services
    GOOGLE_MAPS_API_KEY?: string
    RECAPTCHA_SITE_KEY?: string

    // Email
    EMAIL_SERVICE_API_KEY?: string
    EMAIL_FROM_ADDRESS?: string
    EMAIL_FROM_NAME?: string

    // Development
    NODE_ENV: string
    DEBUG_MODE: boolean

    // Feature Flags
    ENABLE_DARK_MODE: boolean
    ENABLE_ANIMATIONS: boolean
    ENABLE_NOTIFICATIONS: boolean
    ENABLE_CONTACT_FORM: boolean
    ENABLE_WHATSAPP_INTEGRATION: boolean
    ENABLE_EMAIL_INTEGRATION: boolean
    ENABLE_GOOGLE_ANALYTICS: boolean
    ENABLE_GOOGLE_TAG_MANAGER: boolean
    ENABLE_GOOGLE_MAPS: boolean
    ENABLE_RECAPTCHA: boolean
    ENABLE_IMAGE_OPTIMIZATION: boolean
    ENABLE_CODE_SPLITTING: boolean
    ENABLE_SECURITY_HEADERS: boolean

    // Security
    RATE_LIMIT_MAX_REQUESTS: number
    RATE_LIMIT_WINDOW_MS: number

    // Localization
    DEFAULT_COUNTRY: string
    DEFAULT_LANGUAGE: string
    DEFAULT_CURRENCY: string
    DEFAULT_TIMEZONE: string

    // Performance
    IMAGE_QUALITY: number
    IMAGE_FORMAT: string
    ENABLE_LAZY_LOADING: boolean
    ENABLE_BROWSER_CACHING: boolean
    CACHE_DURATION: number
}

// ============================================================================
// ENVIRONMENT VALIDATION
// ============================================================================

/**
 * Valida se uma variável de ambiente está definida
 * @param name - Nome da variável
 * @param value - Valor da variável
 * @param required - Se a variável é obrigatória
 */
function validateEnvVar(name: string, value: string | undefined, required: boolean = false): string | undefined {
    if (required && !value) {
        console.warn(`⚠️  Variável de ambiente obrigatória não definida: ${name}`)
        return undefined
    }
    return value
}

/**
 * Converte string para boolean
 * @param value - Valor string
 * @param defaultValue - Valor padrão
 */
function parseBoolean(value: string | undefined, defaultValue: boolean = false): boolean {
    if (!value) return defaultValue
    return value.toLowerCase() === 'true'
}

/**
 * Converte string para number
 * @param value - Valor string
 * @param defaultValue - Valor padrão
 */
function parseNumber(value: string | undefined, defaultValue: number = 0): number {
    if (!value) return defaultValue
    const parsed = parseInt(value, 10)
    return isNaN(parsed) ? defaultValue : parsed
}

// ============================================================================
// ENVIRONMENT LOADER
// ============================================================================

/**
 * Carrega e valida as variáveis de ambiente
 * @returns Configuração de ambiente tipada
 */
export function loadEnvironmentConfig(): EnvironmentConfig {
    return {
        // App
        APP_NAME: validateEnvVar('NEXT_PUBLIC_APP_NAME', process.env.NEXT_PUBLIC_APP_NAME) || 'LawyerHero',
        APP_VERSION: validateEnvVar('NEXT_PUBLIC_APP_VERSION', process.env.NEXT_PUBLIC_APP_VERSION) || '1.0.0',
        APP_URL: validateEnvVar('NEXT_PUBLIC_APP_URL', process.env.NEXT_PUBLIC_APP_URL) || 'https://geovannanery.com',

        // Analytics
        GA_TRACKING_ID: validateEnvVar('NEXT_PUBLIC_GA_TRACKING_ID', process.env.NEXT_PUBLIC_GA_TRACKING_ID),
        GTM_ID: validateEnvVar('NEXT_PUBLIC_GTM_ID', process.env.NEXT_PUBLIC_GTM_ID),

        // External Services
        GOOGLE_MAPS_API_KEY: validateEnvVar('NEXT_PUBLIC_GOOGLE_MAPS_API_KEY', process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY),
        RECAPTCHA_SITE_KEY: validateEnvVar('NEXT_PUBLIC_RECAPTCHA_SITE_KEY', process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY),

        // Email
        EMAIL_SERVICE_API_KEY: validateEnvVar('EMAIL_SERVICE_API_KEY', process.env.EMAIL_SERVICE_API_KEY),
        EMAIL_FROM_ADDRESS: validateEnvVar('EMAIL_FROM_ADDRESS', process.env.EMAIL_FROM_ADDRESS),
        EMAIL_FROM_NAME: validateEnvVar('EMAIL_FROM_NAME', process.env.EMAIL_FROM_NAME),

        // Development
        NODE_ENV: validateEnvVar('NODE_ENV', process.env.NODE_ENV) || 'development',
        DEBUG_MODE: parseBoolean(process.env.NEXT_PUBLIC_DEBUG_MODE, false),

        // Feature Flags
        ENABLE_DARK_MODE: parseBoolean(process.env.NEXT_PUBLIC_ENABLE_DARK_MODE, true),
        ENABLE_ANIMATIONS: parseBoolean(process.env.NEXT_PUBLIC_ENABLE_ANIMATIONS, true),
        ENABLE_NOTIFICATIONS: parseBoolean(process.env.NEXT_PUBLIC_ENABLE_NOTIFICATIONS, true),
        ENABLE_CONTACT_FORM: parseBoolean(process.env.NEXT_PUBLIC_ENABLE_CONTACT_FORM, true),
        ENABLE_WHATSAPP_INTEGRATION: parseBoolean(process.env.NEXT_PUBLIC_ENABLE_WHATSAPP_INTEGRATION, true),
        ENABLE_EMAIL_INTEGRATION: parseBoolean(process.env.NEXT_PUBLIC_ENABLE_EMAIL_INTEGRATION, true),
        ENABLE_GOOGLE_ANALYTICS: parseBoolean(process.env.NEXT_PUBLIC_ENABLE_GOOGLE_ANALYTICS, false),
        ENABLE_GOOGLE_TAG_MANAGER: parseBoolean(process.env.NEXT_PUBLIC_ENABLE_GOOGLE_TAG_MANAGER, false),
        ENABLE_GOOGLE_MAPS: parseBoolean(process.env.NEXT_PUBLIC_ENABLE_GOOGLE_MAPS, false),
        ENABLE_RECAPTCHA: parseBoolean(process.env.NEXT_PUBLIC_ENABLE_RECAPTCHA, false),
        ENABLE_IMAGE_OPTIMIZATION: parseBoolean(process.env.NEXT_PUBLIC_ENABLE_IMAGE_OPTIMIZATION, true),
        ENABLE_CODE_SPLITTING: parseBoolean(process.env.NEXT_PUBLIC_ENABLE_CODE_SPLITTING, true),
        ENABLE_SECURITY_HEADERS: parseBoolean(process.env.NEXT_PUBLIC_ENABLE_SECURITY_HEADERS, true),

        // Security
        RATE_LIMIT_MAX_REQUESTS: parseNumber(process.env.RATE_LIMIT_MAX_REQUESTS, 100),
        RATE_LIMIT_WINDOW_MS: parseNumber(process.env.RATE_LIMIT_WINDOW_MS, 900000),

        // Localization
        DEFAULT_COUNTRY: validateEnvVar('NEXT_PUBLIC_DEFAULT_COUNTRY', process.env.NEXT_PUBLIC_DEFAULT_COUNTRY) || 'BR',
        DEFAULT_LANGUAGE: validateEnvVar('NEXT_PUBLIC_DEFAULT_LANGUAGE', process.env.NEXT_PUBLIC_DEFAULT_LANGUAGE) || 'pt-BR',
        DEFAULT_CURRENCY: validateEnvVar('NEXT_PUBLIC_DEFAULT_CURRENCY', process.env.NEXT_PUBLIC_DEFAULT_CURRENCY) || 'BRL',
        DEFAULT_TIMEZONE: validateEnvVar('NEXT_PUBLIC_DEFAULT_TIMEZONE', process.env.NEXT_PUBLIC_DEFAULT_TIMEZONE) || 'America/Sao_Paulo',

        // Performance
        IMAGE_QUALITY: parseNumber(process.env.NEXT_PUBLIC_IMAGE_QUALITY, 80),
        IMAGE_FORMAT: validateEnvVar('NEXT_PUBLIC_IMAGE_FORMAT', process.env.NEXT_PUBLIC_IMAGE_FORMAT) || 'webp',
        ENABLE_LAZY_LOADING: parseBoolean(process.env.NEXT_PUBLIC_ENABLE_LAZY_LOADING, true),
        ENABLE_BROWSER_CACHING: parseBoolean(process.env.NEXT_PUBLIC_ENABLE_BROWSER_CACHING, true),
        CACHE_DURATION: parseNumber(process.env.NEXT_PUBLIC_CACHE_DURATION, 3600)
    }
}

// ============================================================================
// ENVIRONMENT UTILITIES
// ============================================================================

/**
 * Verifica se está em modo de desenvolvimento
 */
export function isDevelopment(): boolean {
    return process.env.NODE_ENV === 'development'
}

/**
 * Verifica se está em modo de produção
 */
export function isProduction(): boolean {
    return process.env.NODE_ENV === 'production'
}

/**
 * Verifica se o modo debug está ativado
 */
export function isDebugMode(): boolean {
    return parseBoolean(process.env.NEXT_PUBLIC_DEBUG_MODE, false)
}

/**
 * Obtém a configuração de ambiente
 */
export const env = loadEnvironmentConfig()

/**
 * Verifica se uma feature está habilitada
 * @param feature - Nome da feature
 */
export function isFeatureEnabled(feature: keyof Pick<EnvironmentConfig,
    | 'ENABLE_DARK_MODE'
    | 'ENABLE_ANIMATIONS'
    | 'ENABLE_NOTIFICATIONS'
    | 'ENABLE_CONTACT_FORM'
    | 'ENABLE_WHATSAPP_INTEGRATION'
    | 'ENABLE_EMAIL_INTEGRATION'
    | 'ENABLE_GOOGLE_ANALYTICS'
    | 'ENABLE_GOOGLE_TAG_MANAGER'
    | 'ENABLE_GOOGLE_MAPS'
    | 'ENABLE_RECAPTCHA'
    | 'ENABLE_IMAGE_OPTIMIZATION'
    | 'ENABLE_CODE_SPLITTING'
    | 'ENABLE_SECURITY_HEADERS'
>): boolean {
    return env[feature] || false
}

/**
 * Obtém configuração de analytics
 */
export function getAnalyticsConfig() {
    return {
        gaTrackingId: env.GA_TRACKING_ID,
        gtmId: env.GTM_ID,
        enabled: env.ENABLE_GOOGLE_ANALYTICS || env.ENABLE_GOOGLE_TAG_MANAGER
    }
}

/**
 * Obtém configuração de serviços externos
 */
export function getExternalServicesConfig() {
    return {
        googleMaps: {
            apiKey: env.GOOGLE_MAPS_API_KEY,
            enabled: env.ENABLE_GOOGLE_MAPS
        },
        recaptcha: {
            siteKey: env.RECAPTCHA_SITE_KEY,
            enabled: env.ENABLE_RECAPTCHA
        }
    }
}

/**
 * Obtém configuração de email
 */
export function getEmailConfig() {
    return {
        serviceApiKey: env.EMAIL_SERVICE_API_KEY,
        fromAddress: env.EMAIL_FROM_ADDRESS,
        fromName: env.EMAIL_FROM_NAME,
        enabled: env.ENABLE_EMAIL_INTEGRATION
    }
}

/**
 * Obtém configuração de performance
 */
export function getPerformanceConfig() {
    return {
        imageQuality: env.IMAGE_QUALITY,
        imageFormat: env.IMAGE_FORMAT,
        enableLazyLoading: env.ENABLE_LAZY_LOADING,
        enableBrowserCaching: env.ENABLE_BROWSER_CACHING,
        cacheDuration: env.CACHE_DURATION,
        enableImageOptimization: env.ENABLE_IMAGE_OPTIMIZATION,
        enableCodeSplitting: env.ENABLE_CODE_SPLITTING
    }
} 