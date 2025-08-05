/**
 * Hooks Index
 * Centralized exports for all custom hooks
 */

// ============================================================================
// FORM HOOKS
// ============================================================================

export { useContactForm } from './useContactForm'
export type {
    ContactFormState,
    ContactFormActions,
    UseContactFormReturn
} from './useContactForm'

// ============================================================================
// ANIMATION HOOKS
// ============================================================================

export { useAnimation } from './useAnimation'
export type {
    AnimationConfig,
    HoverAnimationConfig
} from './useAnimation'
export { createHoverAnimation } from './useAnimation'

// ============================================================================
// CONTACT HOOKS
// ============================================================================

export { useContact } from './useContact'
export type {
    ContactMethod,
    ContactInfo,
    ContactPreferences,
    UseContactReturn,
    ContactHistory
} from './useContact'

// ============================================================================
// SERVICES HOOKS
// ============================================================================

export { useServices } from './useServices'
export type {
    ServiceCategory,
    ServiceFilter,
    UseServicesReturn
} from './useServices'

// ============================================================================
// SCROLL ANIMATION HOOKS
// ============================================================================

export { useScrollAnimation } from './useScrollAnimation'
export type {
    ScrollAnimationConfig,
    ScrollAnimationState,
    UseScrollAnimationReturn
} from './useScrollAnimation'
export {
    createStaggerAnimation,
    createFadeInAnimation,
    createScaleInAnimation
} from './useScrollAnimation'

// ============================================================================
// FORM VALIDATION HOOKS
// ============================================================================

export { useFormValidation } from './useFormValidation'
export type {
    ValidationRule,
    ValidationRules,
    FormErrors,
    UseFormValidationReturn
} from './useFormValidation'
export {
    createEmailRules,
    createPhoneRules,
    createCPFRules,
    createCNPJRules
} from './useFormValidation'

// ============================================================================
// SCROLL HOOKS
// ============================================================================

export {
    useScroll,
    useIntersectionObserver,
    useScrollProgress
} from './useScroll'
export type {
    ScrollState,
    IntersectionOptions,
    IntersectionState
} from './useScroll'
export { isInViewport, getScrollDirection } from './useScroll'

// ============================================================================
// STORAGE HOOKS
// ============================================================================

export {
    useLocalStorage,
    useLocalStorageString,
    useLocalStorageBoolean,
    useLocalStorageNumber
} from './useLocalStorage'
export type { LocalStorageOptions } from './useLocalStorage'
export {
    removeFromLocalStorage,
    clearLocalStorage,
    getLocalStorageKeys,
    isLocalStorageAvailable
} from './useLocalStorage'

// ============================================================================
// ALL HOOKS (for convenience)
// ============================================================================

// Import all hooks for the convenience object
import { useContactForm } from './useContactForm'
import { useAnimation } from './useAnimation'
import { useContact } from './useContact'
import { useServices } from './useServices'
import { useScrollAnimation } from './useScrollAnimation'
import { useFormValidation } from './useFormValidation'
import { useScroll, useIntersectionObserver, useScrollProgress } from './useScroll'
import { useLocalStorage, useLocalStorageString, useLocalStorageBoolean, useLocalStorageNumber } from './useLocalStorage'

export const hooks = {
    // Form hooks
    useContactForm,
    useFormValidation,

    // Animation hooks
    useAnimation,
    useScrollAnimation,

    // Contact hooks
    useContact,

    // Services hooks
    useServices,

    // Scroll hooks
    useScroll,
    useIntersectionObserver,
    useScrollProgress,

    // Storage hooks
    useLocalStorage,
    useLocalStorageString,
    useLocalStorageBoolean,
    useLocalStorageNumber
} as const 