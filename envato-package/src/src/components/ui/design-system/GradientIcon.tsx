"use client"

import { cn } from "@/lib/core/utils"
import { DESIGN_TOKENS } from "@/lib/design-tokens"
import { motion } from "framer-motion"
import { type LucideIcon } from "lucide-react"
import { type ReactNode } from "react"

// ============================================================================
// TYPES
// ============================================================================

interface GradientIconProps {
    icon?: LucideIcon
    emoji?: string
    children?: ReactNode
    size?: 'sm' | 'md' | 'lg' | 'xl'
    className?: string
    containerClassName?: string
    animated?: boolean
    gradient?: keyof typeof DESIGN_TOKENS.gradients
}

// ============================================================================
// SIZE VARIANTS
// ============================================================================

const sizeVariants = {
    sm: {
        container: 'h-8 w-8',
        icon: 'h-4 w-4',
        emoji: 'text-sm'
    },
    md: {
        container: 'h-10 w-10',
        icon: 'h-5 w-5',
        emoji: 'text-base'
    },
    lg: {
        container: 'h-12 w-12',
        icon: 'h-6 w-6',
        emoji: 'text-lg'
    },
    xl: {
        container: 'h-14 w-14',
        icon: 'h-7 w-7',
        emoji: 'text-xl'
    }
}

// ============================================================================
// COMPONENT
// ============================================================================

/**
 * GradientIcon Component
 * Ícone padronizado com container gradiente
 * 
 * @example
 * ```tsx
 * <GradientIcon icon={Scale} size="lg" animated />
 * <GradientIcon emoji="⚖️" size="md" />
 * ```
 */
export function GradientIcon({
    icon: Icon,
    emoji,
    children,
    size = 'lg',
    className,
    containerClassName,
    animated = false,
    gradient = 'gold'
}: GradientIconProps) {
    const sizeClasses = sizeVariants[size]

    const Container = animated ? motion.div : 'div'
    const animationProps = animated ? {
        whileHover: { scale: 1.1, rotate: 5 },
        transition: { duration: 0.2 }
    } : {}

    return (
        <Container
            className={cn(
                'flex items-center justify-center rounded-lg shadow-lg',
                `bg-gradient-to-br ${DESIGN_TOKENS.gradients[gradient]}`,
                sizeClasses.container,
                animated && 'transition-all duration-200',
                containerClassName
            )}
            {...animationProps}
        >
            {Icon && (
                <Icon
                    className={cn(
                        'text-white',
                        sizeClasses.icon,
                        className
                    )}
                />
            )}

            {emoji && (
                <span className={cn(
                    sizeClasses.emoji,
                    className
                )}>
                    {emoji}
                </span>
            )}

            {children}
        </Container>
    )
}

// ============================================================================
// PRESET COMPONENTS
// ============================================================================

/**
 * LegalIcon - Preset para ícones jurídicos
 */
export function LegalIcon(props: Omit<GradientIconProps, 'gradient'>) {
    return <GradientIcon {...props} gradient="gold" />
}

/**
 * ContactIcon - Preset para ícones de contato
 */
export function ContactIcon(props: Omit<GradientIconProps, 'gradient' | 'size'>) {
    return <GradientIcon {...props} gradient="gold" size="md" />
}

/**
 * ServiceIcon - Preset para ícones de serviços
 */
export function ServiceIcon(props: Omit<GradientIconProps, 'gradient' | 'animated'>) {
    return <GradientIcon {...props} gradient="gold" animated />
}