"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"
import { useContact } from "@/hooks/useContact"
import { isFeatureEnabled } from "@/lib/env"

/**
 * Componente Floating WhatsApp
 * Botão flutuante do WhatsApp no canto inferior direito
 * 
 * Utiliza o hook useContact para gerenciar links de contato
 * de forma centralizada e reutilizável
 * 
 * Respeita as configurações de ambiente para habilitar/desabilitar
 */
export function FloatingWhatsApp() {
    const { getWhatsAppLink, addContactHistory } = useContact()

    // Verifica se a integração do WhatsApp está habilitada
    const isWhatsAppEnabled = isFeatureEnabled('ENABLE_WHATSAPP_INTEGRATION')

    // Se não estiver habilitado, não renderiza o componente
    if (!isWhatsAppEnabled) {
        return null
    }

    // Função para gerar link do WhatsApp com mensagem personalizada
    const handleWhatsAppClick = () => {
        const link = getWhatsAppLink("Olá Dra. Geovanna! Gostaria de agendar uma consulta jurídica. Pode me ajudar?")
        addContactHistory('whatsapp', true)
        return link
    }

    return (
        <motion.div
            className="fixed bottom-6 right-6 z-50"
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
                duration: 0.6,
                delay: 1,
                type: "spring",
                stiffness: 100
            }}
        >
            <motion.a
                href={handleWhatsAppClick()}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 cursor-pointer"
                whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.2 }
                }}
                whileTap={{
                    scale: 0.95,
                    transition: { duration: 0.1 }
                }}
            >
                {/* Ícone do WhatsApp */}
                <MessageCircle className="w-8 h-8 text-white" />

                {/* Efeito de pulso */}
                <motion.div
                    className="absolute inset-0 rounded-full bg-green-400"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                {/* Tooltip */}
                <motion.div
                    className="absolute right-full mr-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
                    initial={{ opacity: 0, x: 10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    Fale Comigo
                    <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900" />
                </motion.div>
            </motion.a>
        </motion.div>
    )
} 