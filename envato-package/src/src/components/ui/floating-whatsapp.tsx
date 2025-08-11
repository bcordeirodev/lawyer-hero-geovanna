"use client"

import { LAWYER_CONFIG } from "@/config"
import { isFeatureEnabled } from "@/lib/env"
import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"

/**
 * Componente Floating WhatsApp
 * Botão flutuante do WhatsApp no canto inferior direito
 * 
 * Respeita as configurações de ambiente para habilitar/desabilitar
 */
export function FloatingWhatsApp() {
    const isWhatsAppEnabled = isFeatureEnabled('ENABLE_WHATSAPP_INTEGRATION')

    // If not enabled, do not render the component
    if (!isWhatsAppEnabled) {
        return null
    }

    // Generate WhatsApp link
    const phoneNumber = LAWYER_CONFIG.lawyer.contact.phone.replace(/\D/g, '')
    const message = encodeURIComponent(`Olá ${LAWYER_CONFIG.lawyer.name}! Gostaria de agendar uma consulta jurídica. Pode me ajudar?`)
    const whatsappLink = `https://wa.me/55${phoneNumber}?text=${message}`

    return (
        <motion.div
            className="fixed bottom-6 right-6 z-50"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            <motion.a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                whileHover={{
                    scale: 1.1,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                whileTap={{ scale: 0.9 }}
            >
                <MessageCircle className="w-8 h-8" />
            </motion.a>
        </motion.div>
    )
} 