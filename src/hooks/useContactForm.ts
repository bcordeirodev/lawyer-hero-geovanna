/**
 * useContactForm Hook
 * Enhanced contact form hook with validation and state management
 * Follows SOLID principles and uses the new validation system
 */

import { useState, useCallback } from 'react'
import {
    ContactFormData,
    validateField,
    validateForm,
    sanitizeFormData,
    sanitizeField,
    hasErrors
} from '@/lib/validation'
import { contactFormConfig } from '@/lib/core'

// ============================================================================
// HOOK STATE INTERFACE
// ============================================================================

export interface ContactFormState {
    formData: ContactFormData
    errors: Record<keyof ContactFormData, string | null>
    isLoading: boolean
    isSubmitted: boolean
    submitError: string | null
}

export interface ContactFormActions {
    handleChange: (field: keyof ContactFormData, value: string) => void
    handleBlur: (field: keyof ContactFormData, value: string) => void
    handleSubmit: (e: React.FormEvent) => Promise<void>
    validateField: (field: keyof ContactFormData, value: string) => string | null
    resetForm: () => void
}

export type UseContactFormReturn = ContactFormState & ContactFormActions

// ============================================================================
// INITIAL STATE
// ============================================================================

const initialFormData: ContactFormData = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
}

const initialErrors: Record<keyof ContactFormData, string | null> = {
    name: null,
    email: null,
    phone: null,
    subject: null,
    message: null
}

// ============================================================================
// USE CONTACT FORM HOOK
// ============================================================================

/**
 * useContactForm - Enhanced contact form hook
 * 
 * Provides form state management, validation, and submission handling
 * 
 * @returns Object containing form state and actions
 * 
 * @example
 * ```tsx
 * const {
 *   formData,
 *   errors,
 *   isLoading,
 *   handleChange,
 *   handleSubmit
 * } = useContactForm()
 * ```
 */
export function useContactForm(): UseContactFormReturn {
    // ============================================================================
    // STATE MANAGEMENT
    // ============================================================================

    const [formData, setFormData] = useState<ContactFormData>(initialFormData)
    const [errors, setErrors] = useState<Record<keyof ContactFormData, string | null>>(initialErrors)
    const [isLoading, setIsLoading] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [submitError, setSubmitError] = useState<string | null>(null)

    // ============================================================================
    // FORM ACTIONS
    // ============================================================================

    /**
     * Handles form field changes
     * @param field - Field name
     * @param value - New field value
     */
    const handleChange = useCallback((field: keyof ContactFormData, value: string) => {
        const sanitizedValue = sanitizeField(field, value)

        setFormData(prev => ({
            ...prev,
            [field]: sanitizedValue
        }))

        // Clear error when user starts typing
        if (errors[field]) {
            setErrors(prev => ({
                ...prev,
                [field]: null
            }))
        }

        // Clear submit error when user makes changes
        if (submitError) {
            setSubmitError(null)
        }
    }, [errors, submitError])

    /**
     * Handles form field blur events for validation
     * @param field - Field name
     * @param value - Field value
     */
    const handleBlur = useCallback((field: keyof ContactFormData, value: string) => {
        const error = validateField(field, value)

        setErrors(prev => ({
            ...prev,
            [field]: error
        }))
    }, [])

    /**
     * Validates a single field
     * @param field - Field name
     * @param value - Field value
     * @returns Error message or null
     */
    const validateFieldHandler = useCallback((field: keyof ContactFormData, value: string): string | null => {
        return validateField(field, value)
    }, [])

    /**
     * Resets form to initial state
     */
    const resetForm = useCallback(() => {
        setFormData(initialFormData)
        setErrors(initialErrors)
        setIsLoading(false)
        setIsSubmitted(false)
        setSubmitError(null)
    }, [])

    /**
     * Handles form submission
     * @param e - Form event
     */
    const handleSubmit = useCallback(async (e: React.FormEvent) => {
        e.preventDefault()

        // Validate all fields
        const validationErrors = validateForm(formData)
        setErrors(validationErrors)

        // Check if form has errors
        if (hasErrors(validationErrors)) {
            setSubmitError('Por favor, corrija os erros no formulário')
            return
        }

        setIsLoading(true)
        setSubmitError(null)

        try {
            // Sanitize form data
            const sanitizedData = sanitizeFormData(formData)

            // Simulate API call
            await submitFormData(sanitizedData)

            setIsSubmitted(true)
            setFormData(initialFormData)
            setErrors(initialErrors)

        } catch (error) {
            console.error('Form submission error:', error)
            setSubmitError('Erro ao enviar formulário. Tente novamente.')
        } finally {
            setIsLoading(false)
        }
    }, [formData])

    // ============================================================================
    // SUBMISSION LOGIC
    // ============================================================================

    /**
     * Submits form data to API
     * @param data - Sanitized form data
     */
    const submitFormData = async (data: ContactFormData): Promise<void> => {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000))

        // Simulate API response
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...data,
                timestamp: new Date().toISOString(),
                userAgent: navigator.userAgent,
                maxMessageLength: contactFormConfig.maxMessageLength
            })
        })

        if (!response.ok) {
            throw new Error('Failed to submit form')
        }

        const result = await response.json()

        if (!result.success) {
            throw new Error(result.error || 'Form submission failed')
        }
    }

    // ============================================================================
    // RETURN HOOK STATE AND ACTIONS
    // ============================================================================

    return {
        // State
        formData,
        errors,
        isLoading,
        isSubmitted,
        submitError,

        // Actions
        handleChange,
        handleBlur,
        handleSubmit,
        validateField: validateFieldHandler,
        resetForm
    }
} 