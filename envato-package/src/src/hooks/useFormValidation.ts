/**
 * useFormValidation Hook
 * 
 * Hook genérico para validação de formulários com:
 * - Validação em tempo real
 * - Validação customizada
 * - Estados de erro centralizados
 * - Validação de campos específicos
 * - Validação de formulário completo
 * 
 * @author Bruno Cordeiro
 * @version 1.0.0
 */

import { useState, useCallback, useMemo } from 'react'

// ============================================================================
// TYPES
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
// VALIDATION FUNCTIONS
// ============================================================================

/**
 * Valida um campo específico baseado nas regras fornecidas
 * @param value - Valor do campo
 * @param rules - Regras de validação
 * @returns Mensagem de erro ou null se válido
 */
function validateFieldValue<T>(
    value: T[keyof T],
    rules: ValidationRule<T>
): string | null {
    // Required validation
    if (rules.required && !value) {
        return rules.message || 'Este campo é obrigatório'
    }

    // Skip other validations if value is empty and not required
    if (!value && !rules.required) {
        return null
    }

    const stringValue = String(value)

    // Min length validation
    if (rules.minLength && stringValue.length < rules.minLength) {
        return rules.message || `Mínimo de ${rules.minLength} caracteres`
    }

    // Max length validation
    if (rules.maxLength && stringValue.length > rules.maxLength) {
        return rules.message || `Máximo de ${rules.maxLength} caracteres`
    }

    // Pattern validation
    if (rules.pattern && !rules.pattern.test(stringValue)) {
        return rules.message || 'Formato inválido'
    }

    // Custom validation
    if (rules.custom) {
        const customError = rules.custom(value)
        if (customError) {
            return customError
        }
    }

    return null
}

// ============================================================================
// USE FORM VALIDATION HOOK
// ============================================================================

/**
 * useFormValidation - Hook para validação de formulários
 * 
 * Fornece funcionalidades completas de validação para formulários
 * 
 * @param initialValues - Valores iniciais do formulário
 * @param validationRules - Regras de validação
 * @returns Objeto com estado e ações de validação
 * 
 * @example
 * ```tsx
 * const { values, errors, setValue, validateForm } = useFormValidation(
 *   { name: '', email: '' },
 *   {
 *     name: { required: true, minLength: 2 },
 *     email: { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ }
 *   }
 * )
 * ```
 */
export function useFormValidation<T extends Record<string, unknown>>(
    initialValues: T,
    validationRules: ValidationRules<T> = {}
): UseFormValidationReturn<T> {
    // ============================================================================
    // STATE
    // ============================================================================

    const [values, setValuesState] = useState<T>(initialValues)
    const [errors, setErrors] = useState<FormErrors<T>>({})
    const [isDirty, setIsDirty] = useState(false)

    // ============================================================================
    // COMPUTED VALUES
    // ============================================================================

    const isValid = useMemo(() => {
        return Object.keys(errors).length === 0 && isDirty
    }, [errors, isDirty])

    // ============================================================================
    // ACTIONS
    // ============================================================================

    /**
     * Define valor de um campo específico
     * @param field - Campo a ser atualizado
     * @param value - Novo valor
     */
    const setValue = useCallback((field: keyof T, value: T[keyof T]) => {
        setValuesState(prev => ({ ...prev, [field]: value }))
        setIsDirty(true)

        // Auto-validate if field has rules
        if (validationRules[field]) {
            const error = validateFieldValue(value, validationRules[field]!)
            setErrors(prev => ({
                ...prev,
                [field]: error || undefined
            }))
        }
    }, [validationRules])

    /**
     * Define múltiplos valores de uma vez
     * @param newValues - Novos valores
     */
    const setValues = useCallback((newValues: Partial<T>) => {
        setValuesState(prev => ({ ...prev, ...newValues }))
        setIsDirty(true)
    }, [])

    /**
     * Valida um campo específico
     * @param field - Campo a ser validado
     * @returns Mensagem de erro ou null
     */
    const validateField = useCallback((field: keyof T): string | null => {
        const fieldRules = validationRules[field]
        if (!fieldRules) return null

        const error = validateFieldValue(values[field], fieldRules)

        setErrors(prev => ({
            ...prev,
            [field]: error || undefined
        }))

        return error
    }, [values, validationRules])

    /**
     * Valida todo o formulário
     * @returns true se válido, false caso contrário
     */
    const validateForm = useCallback((): boolean => {
        const newErrors: FormErrors<T> = {}
        let hasErrors = false

        Object.keys(validationRules).forEach(key => {
            const field = key as keyof T
            const error = validateFieldValue(values[field], validationRules[field]!)

            if (error) {
                newErrors[field] = error
                hasErrors = true
            }
        })

        setErrors(newErrors)
        return !hasErrors
    }, [values, validationRules])

    /**
     * Limpa todos os erros
     */
    const clearErrors = useCallback(() => {
        setErrors({})
    }, [])

    /**
     * Reseta o formulário para os valores iniciais
     */
    const resetForm = useCallback(() => {
        setValuesState(initialValues)
        setErrors({})
        setIsDirty(false)
    }, [initialValues])

    /**
     * Obtém erro de um campo específico
     * @param field - Campo
     * @returns Mensagem de erro ou null
     */
    const getFieldError = useCallback((field: keyof T): string | null => {
        return errors[field] || null
    }, [errors])

    /**
     * Verifica se um campo tem erro
     * @param field - Campo
     * @returns true se tem erro
     */
    const hasFieldError = useCallback((field: keyof T): boolean => {
        return !!errors[field]
    }, [errors])

    // ============================================================================
    // RETURN
    // ============================================================================

    return {
        values,
        errors,
        isValid,
        isDirty,
        setValue,
        setValues,
        validateField,
        validateForm,
        clearErrors,
        resetForm,
        getFieldError,
        hasFieldError
    }
}

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Cria regras de validação para email
 * @param required - Se o campo é obrigatório
 * @returns Regras de validação para email
 */
export function createEmailRules(required: boolean = true) {
    return {
        required,
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'Email inválido'
    }
}

/**
 * Cria regras de validação para telefone
 * @param required - Se o campo é obrigatório
 * @returns Regras de validação para telefone
 */
export function createPhoneRules(required: boolean = true) {
    return {
        required,
        pattern: /^[\d\s\(\)\-\+]+$/,
        message: 'Telefone inválido'
    }
}

/**
 * Cria regras de validação para CPF
 * @param required - Se o campo é obrigatório
 * @returns Regras de validação para CPF
 */
export function createCPFRules(required: boolean = true) {
    return {
        required,
        pattern: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
        message: 'CPF inválido'
    }
}

/**
 * Cria regras de validação para CNPJ
 * @param required - Se o campo é obrigatório
 * @returns Regras de validação para CNPJ
 */
export function createCNPJRules(required: boolean = true) {
    return {
        required,
        pattern: /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/,
        message: 'CNPJ inválido'
    }
} 