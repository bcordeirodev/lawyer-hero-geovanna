"use client"

import { cn } from "@/lib/core/utils"
import { motion } from "framer-motion"
import { type ReactNode } from "react"

// ============================================================================
// TYPES
// ============================================================================

interface SectionBadgeProps {
    children: ReactNode
    className?: string
    animated?: boolean
    variant?: 'default' | 'outline' | 'solid'
}

// ============================================================================
// VARIANTS
// ============================================================================

const badgeVariants = {
    default: 'section-badge',
    outline: 'inline-flex items-center gap-2 border-2 border-gold-500 text-gold-600 px-4 py-2 rounded-full text-sm font-semibold mb-4 bg-transparent',
    solid: 'inline-flex items-center gap-2 bg-gold-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 shadow-lg'
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
    variant = 'default'
}: SectionBadgeProps) {
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
                {children}
            </motion.div>
        )
    }

    return (
        <div className={cn(badgeVariants[variant], className)}>
            {children}
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
    return <SectionBadge>⚖️ Nossos Serviços</SectionBadge>
}

/**
 * AboutBadge - Preset para seção sobre
 */
export function AboutBadge() {
    return <SectionBadge>👩‍💼 Sobre a Advogada</SectionBadge>
}

/**
 * ContactBadge - Preset para seção de contato
 */
export function ContactBadge() {
    return <SectionBadge>📞 Entre em Contato</SectionBadge>
}