"use client"

/**
 * Contact Form Component
 * Reusable form component with validation and state management
 */

import React from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import { useContactForm } from '@/hooks/useContactForm'
import { formConfig, contactFormConfig } from '@/lib/config'
import { useTheme } from '@/contexts/ThemeContext'

interface ContactFormProps {
    className?: string
    onSuccess?: () => void
    onError?: (error: string) => void
}

/**
 * Contact Form Component
 * Handles form submission, validation, and user feedback
 */
export const ContactForm: React.FC<ContactFormProps> = ({
    className = '',
    onSuccess,
    onError
}) => {
    const { theme } = useTheme()
    const {
        formData,
        errors,
        isLoading,
        isSubmitted,
        handleChange,
        handleSubmit,
        validateField
    } = useContactForm()

    /**
     * Handles field blur events for real-time validation
     * @param field - The field name
     * @param value - The field value
     */
    const handleBlur = (field: keyof typeof formData, value: string) => {
        const error = validateField(field, value)
        if (error) {
            // Update errors state
            // This would be handled by the hook in a real implementation
        }
    }

    /**
     * Renders form field with proper styling and error handling
     * @param field - The field name
     * @param label - The field label
     * @param type - The input type
     * @param placeholder - The placeholder text
     * @param required - Whether the field is required
     */
    const renderField = (
        field: keyof typeof formData,
        label: string,
        type: string = 'text',
        placeholder: string = '',
        required: boolean = false
    ) => (
        <div className="space-y-2">
            <label htmlFor={field} className="block text-sm font-medium text-text-primary mb-2">
                {label}
                {required && <span className="text-error ml-1">*</span>}
            </label>
            <input
                id={field}
                type={type}
                name={field}
                value={formData[field]}
                onChange={(e) => handleChange(field, e.target.value)}
                onBlur={(e) => handleBlur(field, e.target.value)}
                placeholder={placeholder}
                required={required}
                className={`w-full px-3 py-2.5 sm:px-4 sm:py-3 border border-border-primary rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all duration-200 bg-background-secondary text-text-primary placeholder-text-muted ${errors[field] ? 'border-error focus:ring-error' : ''}`}
                autoComplete={contactFormConfig.autoComplete[field as keyof typeof contactFormConfig.autoComplete]}
                disabled={isLoading}
            />
            {errors[field] && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-error text-xs mt-1 flex items-center gap-1"
                >
                    <AlertCircle className="h-3 w-3" />
                    {errors[field]}
                </motion.div>
            )}
        </div>
    )

    /**
     * Renders success message after form submission
     */
    const renderSuccessMessage = () => (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center space-y-4"
        >
            <div className="flex justify-center">
                <CheckCircle className="h-12 w-12 text-success" />
            </div>
            <h3 className="text-xl font-semibold text-text-primary">
                Mensagem Enviada com Sucesso!
            </h3>
            <p className="text-text-secondary">
                Obrigada pela sua mensagem. Retornarei o mais breve possível.
            </p>
        </motion.div>
    )

    /**
     * Renders the main form
     */
    const renderForm = () => (
        <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onSubmit={handleSubmit}
            className="space-y-6"
        >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {renderField('name', 'Nome Completo', 'text', 'Digite seu nome completo', true)}
                {renderField('email', 'Endereço de Email', 'email', 'Digite seu endereço de email', true)}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {renderField('phone', 'Telefone', 'tel', 'Digite seu número de telefone (opcional)', false)}
                <div className="space-y-2">
                    <label htmlFor="subject" className="block text-sm font-medium text-text-primary mb-2">
                        Assunto <span className="text-error ml-1">*</span>
                    </label>
                    <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={(e) => handleChange('subject', e.target.value)}
                        required
                        className={`w-full px-3 py-2.5 sm:px-4 sm:py-3 border border-border-primary rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all duration-200 bg-background-secondary text-text-primary ${errors.subject ? 'border-error focus:ring-error' : ''}`}
                        disabled={isLoading}
                    >
                        {formConfig.subjects.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                    {errors.subject && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-error text-xs mt-1 flex items-center gap-1"
                        >
                            <AlertCircle className="h-3 w-3" />
                            {errors.subject}
                        </motion.div>
                    )}
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                    Mensagem <span className="text-error ml-1">*</span>
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    onBlur={(e) => handleBlur('message', e.target.value)}
                    placeholder="Conte-nos sobre seu caso jurídico..."
                    required
                    rows={6}
                    maxLength={contactFormConfig.maxMessageLength}
                    className={`w-full px-3 py-2.5 sm:px-4 sm:py-3 border border-border-primary rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all duration-200 bg-background-secondary text-text-primary placeholder-text-muted resize-none ${errors.message ? 'border-error focus:ring-error' : ''}`}
                    disabled={isLoading}
                />
                <div className="flex justify-between items-center text-xs text-text-muted">
                    <span>
                        {formData.message.length}/{contactFormConfig.maxMessageLength} caracteres
                    </span>
                    {errors.message && (
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-error flex items-center gap-1"
                        >
                            <AlertCircle className="h-3 w-3" />
                            {errors.message}
                        </motion.span>
                    )}
                </div>
            </div>

            {errors.submit && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-error flex items-center gap-2 p-3 bg-error/10 border border-error/20 rounded-lg"
                >
                    <AlertCircle className="h-4 w-4" />
                    {errors.submit}
                </motion.div>
            )}

            <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-secondary-600 to-secondary-500 hover:from-secondary-700 hover:to-secondary-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isLoading ? (
                    <div className="flex items-center gap-2">
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                        Enviando...
                    </div>
                ) : (
                    <div className="flex items-center gap-2">
                        <Send className="h-4 w-4" />
                        Enviar Mensagem
                    </div>
                )}
            </button>
        </motion.form>
    )

    return (
        <div className={`space-y-6 ${className}`}>
            {isSubmitted ? renderSuccessMessage() : renderForm()}
        </div>
    )
} 