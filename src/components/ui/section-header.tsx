/**
 * Componente SectionHeader reutilizável
 * Fornece estrutura padronizada para cabeçalhos de seção
 */

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface SectionHeaderProps {
    badge?: {
        icon?: ReactNode
        text: string
    }
    title: string
    description?: string
    className?: string
}

export function SectionHeader({ badge, title, description, className = "" }: SectionHeaderProps) {
    return (
        <div className={`mx-auto max-w-2xl text-center ${className}`}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {badge && (
                    <div className="inline-flex items-center rounded-full bg-blue-500/10 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-blue-400 mb-4 sm:mb-6">
                        {badge.icon && <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full mr-2"></span>}
                        {badge.text}
                    </div>
                )}

                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white lg:text-4xl xl:text-5xl">
                    {title}
                </h2>

                {description && (
                    <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-300 px-4 sm:px-0">
                        {description}
                    </p>
                )}
            </motion.div>
        </div>
    )
} 