/**
 * EmailJS Service
 * Handles email sending using EmailJS service
 */

import { LAWYER_CONFIG } from '@/config/lawyer'
import { ContactFormData } from '@/lib/validation'
import emailjs from '@emailjs/browser'


// ============================================================================
// HELPER FUNCTIONS FOR ENHANCED DATA COLLECTION
// ============================================================================

/**
 * Determines urgency level based on consultation subject
 */
const getUrgencyLevel = (subject: string): string => {
    const urgentKeywords = ['urgente', 'emergência', 'prisão', 'prazo', 'amanhã']
    const highKeywords = ['judicial', 'processo', 'audiência', 'advogado']

    const lowerSubject = subject.toLowerCase()

    if (urgentKeywords.some(keyword => lowerSubject.includes(keyword))) {
        return 'URGENTE'
    } else if (highKeywords.some(keyword => lowerSubject.includes(keyword))) {
        return 'ALTA'
    } else {
        return 'NORMAL'
    }
}

/**
 * Determines practice area based on consultation subject
 */
const getPracticeArea = (subject: string): string => {
    const lowerSubject = subject.toLowerCase()

    if (lowerSubject.includes('civil') || lowerSubject.includes('contrato') || lowerSubject.includes('danos')) {
        return 'Direito Civil'
    } else if (lowerSubject.includes('empresa') || lowerSubject.includes('comercial') || lowerSubject.includes('societário')) {
        return 'Direito Empresarial'
    } else if (lowerSubject.includes('família') || lowerSubject.includes('divórcio') || lowerSubject.includes('pensão')) {
        return 'Direito de Família'
    } else if (lowerSubject.includes('imobiliário') || lowerSubject.includes('casa') || lowerSubject.includes('propriedade')) {
        return 'Direito Imobiliário'
    } else if (lowerSubject.includes('trabalho') || lowerSubject.includes('trabalhista') || lowerSubject.includes('demissão')) {
        return 'Direito do Trabalho'
    } else if (lowerSubject.includes('digital') || lowerSubject.includes('internet') || lowerSubject.includes('dados')) {
        return 'Direito Digital'
    } else {
        return 'Consulta Geral'
    }
}

// EmailJS Configuration
const EMAILJS_CONFIG = {
    serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
    templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
}

/**
 * Initialize EmailJS with public key
 */
export const initEmailJS = (): void => {
    if (EMAILJS_CONFIG.publicKey) {
        emailjs.init(EMAILJS_CONFIG.publicKey)
    }
}

/**
 * Send contact form email using EmailJS
 * @param formData - Contact form data
 * @returns Promise that resolves when email is sent
 */
export const sendContactEmail = async (formData: ContactFormData): Promise<void> => {
    // Validate configuration
    if (!EMAILJS_CONFIG.serviceId || !EMAILJS_CONFIG.templateId || !EMAILJS_CONFIG.publicKey) {
        throw new Error('EmailJS configuration is incomplete. Please check environment variables.')
    }

    // Prepare enhanced template parameters with better organization
    const now = new Date()
    const timestamp = now.toLocaleString('pt-BR', {
        timeZone: 'America/Sao_Paulo',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    })

    const templateParams = {
        // ============================================================================
        // INFORMAÇÕES DO CLIENTE
        // ============================================================================
        client_name: formData.name.trim(),
        client_email: formData.email.trim().toLowerCase(),
        client_phone: formData.phone?.trim() || 'Não informado',

        // ============================================================================
        // INFORMAÇÕES DA CONSULTA
        // ============================================================================
        consultation_subject: formData.subject,
        consultation_message: formData.message.trim(),
        consultation_type: formData.subject, // Repetindo para facilitar categorização

        // ============================================================================
        // INFORMAÇÕES DO SISTEMA
        // ============================================================================
        to_email: LAWYER_CONFIG.lawyer.contact.email.trim().toLowerCase(),
        timestamp: timestamp,
        date_only: now.toLocaleDateString('pt-BR'),
        time_only: now.toLocaleTimeString('pt-BR'),
        day_of_week: now.toLocaleDateString('pt-BR', { weekday: 'long' }),

        // ============================================================================
        // INFORMAÇÕES PARA RESPOSTA
        // ============================================================================
        reply_to: formData.email.trim().toLowerCase(),
        contact_preference: formData.phone ? 'Email ou Telefone' : 'Email',

        // ============================================================================
        // PRIORIDADE E CATEGORIA (baseada no assunto)
        // ============================================================================
        urgency_level: getUrgencyLevel(formData.subject),
        practice_area: getPracticeArea(formData.subject),

        // ============================================================================
        // INFORMAÇÕES ADICIONAIS
        // ============================================================================
        source: 'Website - Formulário de Contato',
        user_agent: typeof navigator !== 'undefined' ? navigator.userAgent : 'Unknown',
        message_length: formData.message.length,
        has_phone: formData.phone ? 'Sim' : 'Não'
    }

    try {
        // Send email using EmailJS
        const response = await emailjs.send(
            EMAILJS_CONFIG.serviceId,
            EMAILJS_CONFIG.templateId,
            templateParams
        )

        if (response.status !== 200) {
            throw new Error(`EmailJS returned status: ${response.status}`)
        }

        console.log('Email sent successfully:', response)
    } catch (error) {
        console.error('Failed to send email:', error)

        // Provide user-friendly error messages
        if (error instanceof Error) {
            if (error.message.includes('configuration')) {
                throw new Error('Erro de configuração do email. Entre em contato por telefone.')
            } else if (error.message.includes('network') || error.message.includes('fetch')) {
                throw new Error('Erro de conexão. Verifique sua internet e tente novamente.')
            } else {
                throw new Error('Erro ao enviar email. Tente novamente ou entre em contato por telefone.')
            }
        }

        throw new Error('Erro ao enviar email. Tente novamente ou entre em contato por telefone.')
    }
}

/**
 * Validate EmailJS configuration
 * @returns boolean indicating if configuration is valid
 */
export const isEmailJSConfigured = (): boolean => {
    return !!(EMAILJS_CONFIG.serviceId && EMAILJS_CONFIG.templateId && EMAILJS_CONFIG.publicKey)
}