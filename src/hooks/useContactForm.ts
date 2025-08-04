"use client"

/**
 * Custom hook for managing contact form state and validation
 * Follows React best practices and provides type safety
 */

import { useState, useCallback } from 'react'
import { ContactFormData } from '@/types'
import { validationRules } from '@/lib/config'

interface FormErrors {
    [key: string]: string
}

interface UseContactFormReturn {
    formData: ContactFormData
    errors: FormErrors
    isLoading: boolean
    isSubmitted: boolean
    handleChange: (field: keyof ContactFormData, value: string) => void
    handleSubmit: (e: React.FormEvent) => Promise<void>
    resetForm: () => void
    validateField: (field: keyof ContactFormData, value: string) => string
}

/**
 * Validates a single form field based on validation rules
 * @param field - The field name to validate
 * @param value - The field value to validate
 * @returns Error message or empty string if valid
 */
const validateField = (field: keyof ContactFormData, value: string): string => {
    const rules = validationRules[field]

    if (!rules) return ''

    // Required field validation
    if (rules.required && !value.trim()) {
        return `${field.charAt(0).toUpperCase() + field.slice(1)} is required`
    }

    // Skip other validations if field is empty and not required
    if (!value.trim() && !rules.required) {
        return ''
    }

    // Minimum length validation
    if ('minLength' in rules && rules.minLength && value.length < rules.minLength) {
        return `${field.charAt(0).toUpperCase() + field.slice(1)} must be at least ${rules.minLength} characters`
    }

    // Maximum length validation
    if ('maxLength' in rules && rules.maxLength && value.length > rules.maxLength) {
        return `${field.charAt(0).toUpperCase() + field.slice(1)} must be no more than ${rules.maxLength} characters`
    }

    // Email validation
    if (field === 'email' && 'pattern' in rules && rules.pattern) {
        const emailRegex = rules.pattern as RegExp
        if (!emailRegex.test(value)) {
            return 'Please enter a valid email address'
        }
    }

    // Phone validation
    if (field === 'phone' && 'pattern' in rules && rules.pattern && value.trim()) {
        const phoneRegex = rules.pattern as RegExp
        if (!phoneRegex.test(value)) {
            return 'Please enter a valid phone number'
        }
    }

    return ''
}

/**
 * Custom hook for managing contact form state and validation
 * @returns Object with form state and handlers
 */
export const useContactForm = (): UseContactFormReturn => {
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    })

    const [errors, setErrors] = useState<FormErrors>({})
    const [isLoading, setIsLoading] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    /**
     * Handles form field changes and validation
     * @param field - The field name to update
     * @param value - The new field value
     */
    const handleChange = useCallback((field: keyof ContactFormData, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }))

        // Clear error when user starts typing
        if (errors[field]) {
            setErrors(prev => {
                const newErrors = { ...prev }
                delete newErrors[field]
                return newErrors
            })
        }
    }, [errors])

    /**
     * Validates all form fields
     * @returns Object with field names as keys and error messages as values
     */
    const validateForm = useCallback((): FormErrors => {
        const newErrors: FormErrors = {}

        Object.keys(formData).forEach(field => {
            const fieldKey = field as keyof ContactFormData
            const error = validateField(fieldKey, formData[fieldKey])
            if (error) {
                newErrors[field] = error
            }
        })

        return newErrors
    }, [formData])

    /**
     * Handles form submission with validation
     * @param e - Form event
     */
    const handleSubmit = useCallback(async (e: React.FormEvent) => {
        e.preventDefault()

        // Validate all fields
        const newErrors = validateForm()

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }

        setIsLoading(true)

        try {
            // Simulate API call - replace with actual implementation
            await new Promise(resolve => setTimeout(resolve, 1000))

            setIsSubmitted(true)
            setErrors({})

            // Reset form after successful submission
            setTimeout(() => {
                resetForm()
            }, 3000)

        } catch (error) {
            console.error('Form submission error:', error)
            setErrors({ submit: 'Failed to send message. Please try again.' })
        } finally {
            setIsLoading(false)
        }
    }, [validateForm])

    /**
     * Resets form to initial state
     */
    const resetForm = useCallback(() => {
        setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        })
        setErrors({})
        setIsSubmitted(false)
    }, [])

    return {
        formData,
        errors,
        isLoading,
        isSubmitted,
        handleChange,
        handleSubmit,
        resetForm,
        validateField
    }
} 