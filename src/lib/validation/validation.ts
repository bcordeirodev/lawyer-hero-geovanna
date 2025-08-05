/**
 * Validation utilities and schemas
 * Provides reusable validation patterns following DRY principle
 */

import { z } from 'zod'

// ============================================================================
// VALIDATION SCHEMAS
// ============================================================================

/**
 * Contact form validation schema
 */
export const contactFormSchema = z.object({
    name: z.string()
        .min(2, 'Nome deve ter pelo menos 2 caracteres')
        .max(50, 'Nome deve ter no máximo 50 caracteres')
        .regex(/^[a-zA-ZÀ-ÿ\s]+$/, 'Nome deve conter apenas letras'),

    email: z.string()
        .email('Email inválido')
        .min(5, 'Email deve ter pelo menos 5 caracteres')
        .max(100, 'Email deve ter no máximo 100 caracteres'),

    phone: z.string()
        .regex(/^[\+]?[1-9][\d]{0,15}$/, 'Telefone inválido')
        .optional()
        .or(z.literal('')),

    subject: z.string()
        .min(1, 'Assunto é obrigatório')
        .max(100, 'Assunto deve ter no máximo 100 caracteres'),

    message: z.string()
        .min(10, 'Mensagem deve ter pelo menos 10 caracteres')
        .max(1000, 'Mensagem deve ter no máximo 1000 caracteres')
})

/**
 * Contact form data type
 */
export type ContactFormData = z.infer<typeof contactFormSchema>

// ============================================================================
// VALIDATION RULES
// ============================================================================

/**
 * Validation rules for form fields
 */
export const validationRules = {
    name: {
        required: true,
        minLength: 2,
        maxLength: 50,
        pattern: /^[a-zA-ZÀ-ÿ\s]+$/
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
} as const

// ============================================================================
// VALIDATION FUNCTIONS
// ============================================================================

/**
 * Validates a single field
 * @param field - Field name
 * @param value - Field value
 * @returns Error message or null
 */
export function validateField(field: keyof ContactFormData, value: string): string | null {
    const rules = validationRules[field]

    if (!rules) {
        return null
    }

    // Required validation
    if (rules.required && (!value || value.trim() === '')) {
        return `${field.charAt(0).toUpperCase() + field.slice(1)} é obrigatório`
    }

    // Skip other validations if not required and empty
    if (!rules.required && (!value || value.trim() === '')) {
        return null
    }

    // Min length validation
    if ('minLength' in rules && rules.minLength && value.length < rules.minLength) {
        return `${field.charAt(0).toUpperCase() + field.slice(1)} deve ter pelo menos ${rules.minLength} caracteres`
    }

    // Max length validation
    if ('maxLength' in rules && rules.maxLength && value.length > rules.maxLength) {
        return `${field.charAt(0).toUpperCase() + field.slice(1)} deve ter no máximo ${rules.maxLength} caracteres`
    }

    // Pattern validation
    if ('pattern' in rules && rules.pattern && !rules.pattern.test(value)) {
        return getPatternErrorMessage(field)
    }

    return null
}

/**
 * Validates entire form data
 * @param data - Form data to validate
 * @returns Object with field errors
 */
export function validateForm(data: Partial<ContactFormData>): Record<keyof ContactFormData, string | null> {
    const errors: Record<keyof ContactFormData, string | null> = {
        name: null,
        email: null,
        phone: null,
        subject: null,
        message: null
    }

    for (const field of Object.keys(data) as Array<keyof ContactFormData>) {
        errors[field] = validateField(field, data[field] || '')
    }

    return errors
}

/**
 * Checks if form has any errors
 * @param errors - Form errors object
 * @returns True if form has errors
 */
export function hasErrors(errors: Record<string, string | null>): boolean {
    return Object.values(errors).some(error => error !== null)
}

/**
 * Gets error message for pattern validation
 * @param field - Field name
 * @returns Error message
 */
function getPatternErrorMessage(field: keyof ContactFormData): string {
    const messages = {
        name: 'Nome deve conter apenas letras',
        email: 'Email inválido',
        phone: 'Telefone inválido',
        subject: 'Assunto inválido',
        message: 'Mensagem inválida'
    }

    return messages[field] || 'Campo inválido'
}

// ============================================================================
// SANITIZATION FUNCTIONS
// ============================================================================

/**
 * Sanitizes form data
 * @param data - Raw form data
 * @returns Sanitized form data
 */
export function sanitizeFormData(data: Record<string, string>): ContactFormData {
    return {
        name: data.name?.trim() || '',
        email: data.email?.trim().toLowerCase() || '',
        phone: data.phone?.trim() || '',
        subject: data.subject?.trim() || '',
        message: data.message?.trim() || ''
    }
}

/**
 * Sanitizes a single field value
 * @param field - Field name
 * @param value - Field value
 * @returns Sanitized value
 */
export function sanitizeField(field: keyof ContactFormData, value: string): string {
    const sanitized = value.trim()

    switch (field) {
        case 'email':
            return sanitized.toLowerCase()
        case 'name':
            return sanitized.replace(/\s+/g, ' ')
        default:
            return sanitized
    }
}

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Formats phone number for display
 * @param phone - Raw phone number
 * @returns Formatted phone number
 */
export function formatPhoneNumber(phone: string): string {
    const cleaned = phone.replace(/\D/g, '')

    if (cleaned.length === 11) {
        return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(7)}`
    }

    if (cleaned.length === 10) {
        return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 6)}-${cleaned.slice(6)}`
    }

    return phone
}

/**
 * Validates email format
 * @param email - Email to validate
 * @returns True if email is valid
 */
export function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
}

/**
 * Validates phone format
 * @param phone - Phone to validate
 * @returns True if phone is valid
 */
export function isValidPhone(phone: string): boolean {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/
    return phoneRegex.test(phone.replace(/\D/g, ''))
} 