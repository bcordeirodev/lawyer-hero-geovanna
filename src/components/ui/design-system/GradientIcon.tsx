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
    serviceType?: 'civil' | 'business' | 'family' | 'labor' | 'tax'
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
    gradient = 'gold',
    serviceType
}: GradientIconProps) {
    const sizeClasses = sizeVariants[size]

    // Map service types to gradient keys
    const serviceGradientMap: Record<string, keyof typeof DESIGN_TOKENS.gradients> = {
        'civil': 'civil',
        'business': 'business',
        'family': 'family',
        'real-estate': 'realEstate',
        'health': 'health',
        'digital': 'digital',
        'labor': 'health' // health uses the same gradient as labor category
    }

    // Use service-specific gradient if provided, otherwise use default
    const selectedGradient = serviceType && serviceGradientMap[serviceType]
        ? serviceGradientMap[serviceType]
        : gradient

    const Container = animated ? motion.div : 'div'
    const animationProps = animated ? {
        whileHover: {
            scale: 1.15,
            rotate: 8,
        },
        transition: { duration: 0.3 },
        animate: {
            y: [0, -2, 0],
        },
        style: {
            transition: "all 0.3s ease-out"
        }
    } : {}

    return (
        <Container
            className={cn(
                'flex items-center justify-center rounded-2xl shadow-lg backdrop-blur-sm relative overflow-hidden',
                `bg-gradient-to-br ${DESIGN_TOKENS.gradients[selectedGradient]}`,
                'border-2 border-black/20 dark:border-white/20',
                'group-hover:shadow-xl group-hover:shadow-current/30 transition-all duration-500',
                'group-hover:scale-110 group-hover:-translate-y-2',
                // Múltiplos efeitos de brilho para mais vida
                'before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:via-white/5 before:to-transparent before:opacity-90',
                'after:absolute after:inset-0 after:bg-gradient-to-t after:from-black/20 after:via-transparent after:to-white/10',
                // Efeito de destaque no hover
                'hover:before:opacity-100 hover:after:opacity-100',
                // Ring effect para mais destaque
                'ring-0 hover:ring-4 hover:ring-current/20',
                // Contorno interno para definição extra
                'shadow-[inset_0_1px_0_rgba(255,255,255,0.3),inset_0_-1px_0_rgba(0,0,0,0.2)]',
                // Efeito de pulso sutil
                animated && 'service-icon-glow',
                sizeClasses.container,
                animated && 'hover:shadow-2xl hover:brightness-110',
                containerClassName
            )}
            data-service={serviceType}
            {...animationProps}
        >
            {Icon && (
                <Icon
                    className={cn(
                        'relative z-10 transition-all duration-300',
                        'group-hover:scale-110',
                        // Ícones brancos para manter o padrão dourado do background como no print
                        'text-white hover:text-gray-100',
                        // Múltiplas sombras para garantir visibilidade em todos os fundos
                        'drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]',
                        'hover:drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]',
                        // Contorno escuro para contraste adicional
                        'filter brightness-115 saturate-150 contrast-115',
                        // Stroke effect para ícones mais definidos
                        '[text-shadow:_0_1px_2px_rgb(0_0_0_/_60%),_0_-1px_1px_rgb(0_0_0_/_40%)]',
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
export function ServiceIcon(props: Omit<GradientIconProps, 'animated'>) {
    const {
        icon: Icon,
        emoji,
        size = 'lg',
        className,
        containerClassName,
        serviceType
    } = props

    const sizeClasses = sizeVariants[size]

    // Subtle service-specific hover border accent without gradients
    const serviceHoverBorderMap: Record<string, string> = {
        'civil': 'hover:border-amber-500/40 dark:hover:border-amber-400/40',
        'business': 'hover:border-blue-500/40 dark:hover:border-blue-400/40',
        'family': 'hover:border-rose-500/40 dark:hover:border-rose-400/40',
        'labor': 'hover:border-orange-500/40 dark:hover:border-orange-400/40',
        'tax': 'hover:border-emerald-500/40 dark:hover:border-emerald-400/40'
    }

    return (
        <div
            className={cn(
                'flex items-center justify-center rounded-xl',
                sizeClasses.container,
                // Solid gold background like the print (no gradient)
                'bg-gold-500',
                `text-white`,
                // Subtle border and shadow that work in both themes
                'border border-gold-600/40 shadow-sm',
                // Gentle hover feedback
                'transition-all duration-300 hover:shadow-md hover:-translate-y-0.5',
                serviceType && serviceHoverBorderMap[serviceType] || '',
                containerClassName
            )}
            data-service={serviceType}
        >
            {Icon && (
                <Icon
                    className={cn(
                        'transition-colors duration-300',
                        // White icon for best contrast on gold background
                        'text-white',
                        sizeClasses.icon,
                        className
                    )}
                    strokeWidth={1.75}
                />
            )}

            {emoji && (
                <span className={cn(sizeClasses.emoji, 'text-slate-800 dark:text-slate-100', className)}>
                    {emoji}
                </span>
            )}
        </div>
    )
}