/**
 * UI Types
 * 
 * Tipos específicos para componentes de interface do usuário
 * 
 * @author Bruno Cordeiro
 * @version 1.0.0
 */

import { ReactNode } from 'react'

// ============================================================================
// COMPONENT PROPS TYPES
// ============================================================================

export interface SectionProps {
    id: string
    children: ReactNode
    className?: string
    backgroundPattern?: boolean
    container?: boolean
}

export interface SectionHeaderProps {
    badge?: {
        text: string
        icon?: ReactNode
    }
    title: string
    description?: string
    className?: string
}

export interface AnimatedCardProps {
    children: ReactNode
    index?: number
    className?: string
    hoverEffect?: boolean
}

export interface ButtonProps {
    children: ReactNode
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
    size?: 'sm' | 'md' | 'lg'
    disabled?: boolean
    loading?: boolean
    onClick?: () => void
    className?: string
    type?: 'button' | 'submit' | 'reset'
}

export interface CardProps {
    children: ReactNode
    className?: string
    padding?: 'sm' | 'md' | 'lg'
    shadow?: 'sm' | 'md' | 'lg' | 'xl'
    border?: boolean
    hover?: boolean
}

export interface InputProps {
    type?: 'text' | 'email' | 'tel' | 'password' | 'number'
    placeholder?: string
    value?: string
    onChange?: (value: string) => void
    onBlur?: () => void
    error?: string
    disabled?: boolean
    required?: boolean
    className?: string
    autoComplete?: string
}

export interface TextareaProps {
    placeholder?: string
    value?: string
    onChange?: (value: string) => void
    onBlur?: () => void
    error?: string
    disabled?: boolean
    required?: boolean
    rows?: number
    maxLength?: number
    className?: string
}

// ============================================================================
// ANIMATION TYPES
// ============================================================================

export interface AnimationConfig {
    initial: Record<string, unknown>
    animate: Record<string, unknown>
    exit?: Record<string, unknown>
    transition?: Record<string, unknown>
    whileHover?: Record<string, unknown>
    whileTap?: Record<string, unknown>
    whileInView?: Record<string, unknown>
}

export interface ScrollAnimationConfig {
    threshold?: number
    rootMargin?: string
    triggerOnce?: boolean
    delay?: number
    duration?: number
    stagger?: number
}

export interface ScrollAnimationState {
    isVisible: boolean
    hasAnimated: boolean
    progress: number
}

export interface HoverAnimationConfig {
    whileHover: Record<string, unknown>
    whileTap?: Record<string, unknown>
    transition?: Record<string, unknown>
}

// ============================================================================
// THEME TYPES
// ============================================================================

export type ThemeMode = 'light' | 'dark' | 'auto'

export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

export type AnimationPreference = 'reduced' | 'normal' | 'enhanced'

export interface ThemeColors {
    // Primary colors
    primary: {
        50: string
        100: string
        200: string
        300: string
        400: string
        500: string
        600: string
        700: string
        800: string
        900: string
    }

    // Secondary colors
    secondary: {
        50: string
        100: string
        200: string
        300: string
        400: string
        500: string
        600: string
        700: string
        800: string
        900: string
    }

    // Neutral colors
    neutral: {
        50: string
        100: string
        200: string
        300: string
        400: string
        500: string
        600: string
        700: string
        800: string
        900: string
    }

    // Background colors
    background: {
        primary: string
        secondary: string
        tertiary: string
    }

    // Text colors
    text: {
        primary: string
        secondary: string
        tertiary: string
        muted: string
    }

    // Border colors
    border: {
        primary: string
        secondary: string
        accent: string
    }

    // Status colors
    success: string
    warning: string
    error: string
    info: string
}

export interface ThemeConfig {
    mode: ThemeMode
    colors: ThemeColors
    borderRadius: {
        sm: string
        md: string
        lg: string
        xl: string
    }
    spacing: {
        xs: string
        sm: string
        md: string
        lg: string
        xl: string
        '2xl': string
    }
    shadows: {
        sm: string
        md: string
        lg: string
        xl: string
    }
}

export interface UIConfig {
    // Responsive breakpoints
    breakpoint: Breakpoint
    isMobile: boolean
    isTablet: boolean
    isDesktop: boolean

    // Animation preferences
    animationPreference: AnimationPreference
    prefersReducedMotion: boolean

    // Loading states
    isLoading: boolean
    loadingMessage: string

    // Layout preferences
    sidebarOpen: boolean
    modalOpen: boolean
    drawerOpen: boolean

    // User preferences
    autoSave: boolean
    notifications: boolean
    soundEffects: boolean

    // Performance
    lowPowerMode: boolean
    dataSaver: boolean
}

export interface UIActions {
    // Breakpoint actions
    setBreakpoint: (breakpoint: Breakpoint) => void

    // Animation actions
    setAnimationPreference: (preference: AnimationPreference) => void
    toggleReducedMotion: () => void

    // Loading actions
    setLoading: (loading: boolean, message?: string) => void
    clearLoading: () => void

    // Layout actions
    toggleSidebar: () => void
    toggleModal: () => void
    toggleDrawer: () => void
    closeAllOverlays: () => void

    // User preference actions
    setAutoSave: (enabled: boolean) => void
    setNotifications: (enabled: boolean) => void
    setSoundEffects: (enabled: boolean) => void

    // Performance actions
    setLowPowerMode: (enabled: boolean) => void
    setDataSaver: (enabled: boolean) => void
}

export interface UIContextType extends UIConfig, UIActions { }

// ============================================================================
// FORM VALIDATION TYPES
// ============================================================================

export type ValidationRule<T> = {
    required?: boolean
    minLength?: number
    maxLength?: number
    pattern?: RegExp
    custom?: (value: T[keyof T]) => string | null
    message?: string
}

export type ValidationRules<T> = {
    [K in keyof T]?: ValidationRule<T>
}

export type FormErrors<T> = {
    [K in keyof T]?: string
}

export interface UseFormValidationReturn<T> {
    values: T
    errors: FormErrors<T>
    isValid: boolean
    isDirty: boolean
    setValue: (field: keyof T, value: T[keyof T]) => void
    setValues: (values: Partial<T>) => void
    validateField: (field: keyof T) => string | null
    validateForm: () => boolean
    clearErrors: () => void
    resetForm: () => void
    getFieldError: (field: keyof T) => string | null
    hasFieldError: (field: keyof T) => boolean
}

// ============================================================================
// NOTIFICATION TYPES
// ============================================================================

export interface Notification {
    id: string
    type: 'success' | 'error' | 'warning' | 'info'
    title: string
    message: string
    duration?: number
    timestamp: Date
}

// ============================================================================
// APP STATE TYPES
// ============================================================================

export interface AppState {
    // Lawyer data
    lawyer: Record<string, unknown>
    services: Record<string, unknown>[]
    contactInfo: Record<string, unknown>[]
    statistics: Record<string, unknown>[]
    aboutSection: Record<string, unknown>

    // UI State
    isMenuOpen: boolean
    activeSection: string
    isLoading: boolean
    notifications: Notification[]

    // User preferences
    preferredContact: 'whatsapp' | 'email' | 'phone'
    lastVisit: string
    visitCount: number
}

export interface AppActions {
    // UI Actions
    toggleMenu: () => void
    setActiveSection: (section: string) => void
    setLoading: (loading: boolean) => void

    // Notification Actions
    addNotification: (notification: Omit<Notification, 'id' | 'timestamp'>) => void
    removeNotification: (id: string) => void
    clearNotifications: () => void

    // User Preferences
    setPreferredContact: (method: 'whatsapp' | 'email' | 'phone') => void
    updateVisitCount: () => void

    // Data Actions
    updateLawyerData: (data: Partial<Record<string, unknown>>) => void
    updateServices: (services: Record<string, unknown>[]) => void
}

export interface AppContextType extends AppState, AppActions { } 