"use client"

import { cn } from "@/lib/core/utils"
import { motion } from "framer-motion"
import { type LucideIcon } from "lucide-react"
import { type ReactNode } from "react"

// ============================================================================
// TYPES
// ============================================================================

interface SectionBadgeProps {
    children: ReactNode
    className?: string
    animated?: boolean
    variant?: 'default' | 'outline' | 'solid'
    icon?: LucideIcon
}

// ============================================================================
// VARIANTS
// ============================================================================

const badgeVariants = {
    default: 'inline-flex items-center gap-2 bg-gradient-to-r from-gold-500/20 to-gold-600/20 dark:from-gold-400/15 dark:to-gold-500/15 text-gold-600 dark:text-gold-400 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-gold-500/30 dark:border-gold-400/30 shadow-lg backdrop-blur-sm',
    outline: 'inline-flex items-center gap-2 border-2 border-gold-500 dark:border-gold-400 text-gold-600 dark:text-gold-400 px-4 py-2 rounded-full text-sm font-semibold mb-4 bg-transparent hover:bg-gold-500/10 dark:hover:bg-gold-400/10 transition-colors',
    solid: 'inline-flex items-center gap-2 bg-gradient-to-r from-gold-500 to-gold-600 dark:from-gold-600 dark:to-gold-700 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 shadow-lg hover:shadow-xl hover:from-gold-600 hover:to-gold-700 dark:hover:from-gold-700 dark:hover:to-gold-800 transition-all'
}

// ============================================================================
// COMPONENT
// ============================================================================

/**
 * SectionBadge Component
 * Badge padronizado para identificar seções
 * 
 * @example
 * ```tsx
 * <SectionBadge animated>⚖️ Nossos Serviços</SectionBadge>
 * <SectionBadge variant="outline">📞 Contato</SectionBadge>
 * ```
 */
export function SectionBadge({
    children,
    className,
    animated = true,
    variant = 'default',
    icon: Icon
}: SectionBadgeProps) {
    const content = (
        <>
            {Icon && <Icon className="h-3 w-3 sm:h-4 sm:w-4" />}
            {children}
        </>
    )

    if (animated) {
        return (
            <motion.div
                className={cn(badgeVariants[variant], className)}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{ scale: 1.05, y: -2 }}
            >
                {content}
            </motion.div>
        )
    }

    return (
        <div className={cn(badgeVariants[variant], className)}>
            {content}
        </div>
    )
}

// ============================================================================
// PRESET COMPONENTS
// ============================================================================

/**
 * ServicesBadge - Preset para seção de serviços
 */
export function ServicesBadge() {
    return <SectionBadge>Especialidades Jurídicas</SectionBadge>
}

/**
 * AboutBadge - Preset para seção sobre
 */
export function AboutBadge() {
    return <SectionBadge>Sobre</SectionBadge>
}

/**
 * ContactBadge - Preset para seção de contato
 */
export function ContactBadge() {
    return <SectionBadge>Contato</SectionBadge>
}