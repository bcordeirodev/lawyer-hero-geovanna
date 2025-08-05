/**
 * TypeScript types for the Lawyer Hero template
 * Provides type safety and better development experience
 * 
 * @author Bruno Cordeiro
 * @version 2.0.0
 */

// ============================================================================
// RE-EXPORTS FROM ORGANIZED TYPE FILES
// ============================================================================

// Lawyer types
export * from './lawyer'

// UI types (excluding conflicting names)
export type {
    // Component props
    SectionProps,
    SectionHeaderProps,
    AnimatedCardProps,
    ButtonProps,
    CardProps,
    InputProps,
    TextareaProps,

    // Animation types
    ScrollAnimationConfig,
    ScrollAnimationState,
    HoverAnimationConfig,

    // Theme types
    ThemeMode,
    Breakpoint,
    AnimationPreference,
    ThemeColors,
    UIConfig,
    UIActions,
    UIContextType,

    // Form validation
    ValidationRule,
    ValidationRules,
    FormErrors,
    UseFormValidationReturn,

    // Notifications and app state
    Notification,
    AppState,
    AppActions,
    AppContextType
} from './ui'

// Configuration types (excluding conflicting names)
export type {
    AppConfig as ConfigAppConfig,
    SEOConfig,
    ThemeConfig as ConfigThemeConfig,
    BreakpointsConfig,
    AnimationConfig as ConfigAnimationConfig,
    FormConfig,
    ContactFormConfig,
    EnvironmentConfig,
    LocalizationConfig as ConfigLocalizationConfig,
    CountryConfig,
    FeatureFlags,
    ValidationConfig,
    PerformanceConfig,
    SecurityConfig,
    IntegrationConfig,
    MonitoringConfig
} from './config'

// ============================================================================
// LEGACY TYPES (for backward compatibility)
// ============================================================================

// These types are kept for backward compatibility
// New code should use the organized types from the specific files above

import type { FormSubject } from './lawyer'

export interface ContactForm {
    subjects: FormSubject[]
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