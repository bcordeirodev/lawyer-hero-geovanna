/**
 * useContact Hook
 * 
 * Hook para gerenciar informações de contato e funcionalidades relacionadas:
 * - Geração de links de contato
 * - Preferências de contato
 * - Histórico de contatos
 * - Validação de contatos
 * 
 * @author Bruno Cordeiro
 * @version 2.0.0
 */

import { useState, useMemo, useCallback } from 'react'
import { LAWYER_DATA } from '@/constants/data'
import { lawyerConfig } from '@/lib/core/config'

// ============================================================================
// TYPES
// ============================================================================

export type ContactMethod = 'whatsapp' | 'email' | 'phone' | 'address' | 'hours'

export interface ContactInfo {
    icon: React.ComponentType<{ className?: string }>
    label: string
    value: string
    type: ContactMethod
    href?: string
}

export interface ContactPreferences {
    preferredMethod: ContactMethod
    preferredTime: 'morning' | 'afternoon' | 'evening' | 'anytime'
    allowNotifications: boolean
    lastContact?: Date
}

export interface UseContactReturn {
    contactInfo: ContactInfo[]
    getContactByType: (type: ContactMethod) => ContactInfo | undefined
    getWhatsAppLink: (message?: string) => string
    getEmailLink: (subject?: string, body?: string) => string
    getPhoneLink: () => string
    preferences: ContactPreferences
    setPreferences: (preferences: Partial<ContactPreferences>) => void
    contactHistory: ContactHistory[]
    addContactHistory: (method: ContactMethod, success: boolean) => void
    validateContact: (contact: Partial<ContactInfo>) => string | null
}

export interface ContactHistory {
    id: string
    method: ContactMethod
    success: boolean
    timestamp: Date
    details?: string
}

// ============================================================================
// INITIAL STATE
// ============================================================================

const initialPreferences: ContactPreferences = {
    preferredMethod: 'whatsapp',
    preferredTime: 'anytime',
    allowNotifications: true
}

// ============================================================================
// USE CONTACT HOOK
// ============================================================================

/**
 * useContact - Hook para gerenciar informações de contato
 * 
 * Fornece funcionalidades para gerenciar contatos, preferências e histórico
 * 
 * @returns Objeto com informações de contato e funcionalidades
 * 
 * @example
 * ```tsx
 * const {
 *   contactInfo,
 *   getWhatsAppLink,
 *   preferences,
 *   setPreferences
 * } = useContact()
 * ```
 */
export function useContact(): UseContactReturn {
    // ============================================================================
    // STATE
    // ============================================================================

    const [preferences, setPreferencesState] = useState<ContactPreferences>(initialPreferences)
    const [contactHistory, setContactHistory] = useState<ContactHistory[]>([])

    // ============================================================================
    // COMPUTED VALUES
    // ============================================================================

    const contactInfo = LAWYER_DATA.contactInfo

    // ============================================================================
    // CONTACT METHODS
    // ============================================================================

    /**
     * Busca contato por tipo
     * @param type - Tipo do contato
     * @returns Informações do contato ou undefined
     */
    const getContactByType = useCallback((type: ContactMethod): ContactInfo | undefined => {
        return contactInfo.find(contact => contact.type === type)
    }, [contactInfo])

    /**
     * Gera link do WhatsApp com mensagem personalizada
     * @param message - Mensagem personalizada
     * @returns Link do WhatsApp
     */
    const getWhatsAppLink = useCallback((message?: string): string => {
        const whatsappContact = getContactByType('whatsapp')
        if (!whatsappContact?.href) {
            return `https://wa.me/${lawyerConfig.contact.phone.replace(/\D/g, '')}?text=Olá! Gostaria de agendar uma consulta jurídica.`
        }

        const defaultMessage = `Olá ${lawyerConfig.name}! Gostaria de agendar uma consulta jurídica. Pode me ajudar?`
        const finalMessage = message || defaultMessage

        return whatsappContact.href.replace(
            /text=.*?(?=&|$)/,
            `text=${encodeURIComponent(finalMessage)}`
        )
    }, [getContactByType, lawyerConfig])

    /**
     * Gera link de email com assunto e corpo personalizados
     * @param subject - Assunto do email
     * @param body - Corpo do email
     * @returns Link de email
     */
    const getEmailLink = useCallback((subject?: string, body?: string): string => {
        const emailContact = getContactByType('email')
        if (!emailContact?.href) {
            return `mailto:${lawyerConfig.contact.email}`
        }

        const defaultSubject = "Consulta Jurídica"
        const defaultBody = `Olá ${lawyerConfig.name},\n\nGostaria de agendar uma consulta jurídica.\n\nAguardo seu retorno.\n\nAtenciosamente,`

        const finalSubject = subject || defaultSubject
        const finalBody = body || defaultBody

        return `${emailContact.href}?subject=${encodeURIComponent(finalSubject)}&body=${encodeURIComponent(finalBody)}`
    }, [getContactByType, lawyerConfig])

    /**
     * Gera link de telefone
     * @returns Link de telefone
     */
    const getPhoneLink = useCallback((): string => {
        const phoneContact = getContactByType('phone')
        if (!phoneContact?.value) {
            return `tel:${lawyerConfig.contact.phone}`
        }

        const phoneNumber = phoneContact.value.replace(/\D/g, '')
        return `tel:+55${phoneNumber}`
    }, [getContactByType, lawyerConfig])

    // ============================================================================
    // PREFERENCES
    // ============================================================================

    /**
     * Atualiza preferências de contato
     * @param newPreferences - Novas preferências
     */
    const setPreferences = useCallback((newPreferences: Partial<ContactPreferences>) => {
        setPreferencesState(prev => ({ ...prev, ...newPreferences }))
    }, [])

    // ============================================================================
    // CONTACT HISTORY
    // ============================================================================

    /**
     * Adiciona entrada no histórico de contatos
     * @param method - Método de contato usado
     * @param success - Se o contato foi bem-sucedido
     * @param details - Detalhes adicionais
     */
    const addContactHistory = useCallback((
        method: ContactMethod,
        success: boolean,
        details?: string
    ) => {
        const historyEntry: ContactHistory = {
            id: Date.now().toString(),
            method,
            success,
            timestamp: new Date(),
            details
        }

        setContactHistory(prev => [historyEntry, ...prev.slice(0, 49)]) // Mantém apenas os últimos 50
    }, [])

    // ============================================================================
    // VALIDATION
    // ============================================================================

    /**
     * Valida informações de contato
     * @param contact - Informações de contato a serem validadas
     * @returns Mensagem de erro ou null se válido
     */
    const validateContact = useCallback((contact: Partial<ContactInfo>): string | null => {
        if (!contact.value) {
            return 'Informação de contato é obrigatória'
        }

        if (contact.type === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            if (!emailRegex.test(contact.value)) {
                return 'Email inválido'
            }
        }

        if (contact.type === 'phone') {
            const phoneRegex = /^[\d\s\(\)\-\+]+$/
            if (!phoneRegex.test(contact.value)) {
                return 'Telefone inválido'
            }
        }

        return null
    }, [])

    // ============================================================================
    // RETURN
    // ============================================================================

    return {
        contactInfo,
        getContactByType,
        getWhatsAppLink,
        getEmailLink,
        getPhoneLink,
        preferences,
        setPreferences,
        contactHistory,
        addContactHistory,
        validateContact
    }
} 