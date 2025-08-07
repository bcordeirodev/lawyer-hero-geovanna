"use client"

/**
 * AnimatedCard Component
 * Enhanced reusable card component following SOLID and DRY principles
 */

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/core'
import { Card, CardContent, CardTitle, CardDescription } from '../primitives/card'
import { hoverAnimations } from '@/lib/animations'

// ============================================================================
// CARD PROPS
// ============================================================================

export interface AnimatedCardProps {
    children: React.ReactNode
    index?: number
    className?: string
    hoverEffect?: 'scale' | 'lift' | 'glow' | 'none'
    animation?: 'fadeIn' | 'slideInLeft' | 'slideInRight' | 'slideInTop' | 'slideInBottom' | 'scaleIn'
    delay?: number
    duration?: number
    viewport?: boolean
    onClick?: () => void
    href?: string
}

export interface CardHeaderProps {
    icon?: React.ReactNode
    title: string
    description?: string
    gradient?: string
    className?: string
}

export interface CardActionProps {
    text: string
    href?: string
    onClick?: () => void
    icon?: React.ReactNode
    variant?: 'primary' | 'secondary' | 'outline'
    className?: string
}

// ============================================================================
// ANIMATED CARD COMPONENT
// ============================================================================

/**
 * AnimatedCard - Enhanced reusable card component
 * 
 * @param children - React children
 * @param index - Card index for staggered animations
 * @param className - Additional CSS classes
 * @param hoverEffect - Type of hover effect
 * @param animation - Type of entrance animation
 * @param delay - Animation delay in seconds
 * @param duration - Animation duration in seconds
 * @param viewport - Whether to trigger on viewport intersection
 * @param onClick - Click handler
 * @param href - Link URL
 * 
 * @example
 * ```tsx
 * <AnimatedCard 
 *   index={0} 
 *   hoverEffect="lift" 
 *   animation="slideInLeft"
 *   onClick={() => console.log('Card clicked')}
 * >
 *   <CardHeader title="Service Title" />
 *   <CardContent>Service description</CardContent>
 * </AnimatedCard>
 * ```
 */
export const AnimatedCard: React.FC<AnimatedCardProps> = ({
    children,
    index = 0,
    className = '',
    hoverEffect = 'lift',
    animation = 'fadeIn',
    delay = 0,
    duration = 0.6,
    viewport = true,
    onClick,
    href
}) => {
    const animationVariants = {
        fadeIn: { initial: { opacity: 0 }, animate: { opacity: 1 } },
        slideInLeft: { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 } },
        slideInRight: { initial: { opacity: 0, x: 20 }, animate: { opacity: 1, x: 0 } },
        slideInTop: { initial: { opacity: 0, y: -20 }, animate: { opacity: 1, y: 0 } },
        slideInBottom: { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } },
        scaleIn: { initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 } }
    }

    const variant = animationVariants[animation]
    const hoverVariant = hoverEffect !== 'none' ? hoverAnimations[hoverEffect] : { whileHover: undefined, whileTap: undefined }

    const cardContent = (
        <Card className={cn(
            'h-full transition-all duration-300 cursor-pointer',
            hoverEffect !== 'none' && 'hover:shadow-lg',
            className
        )}>
            {children}
        </Card>
    )

    const wrappedContent = href ? (
        <a href={href} className="block h-full">
            {cardContent}
        </a>
    ) : (
        cardContent
    )

    return (
        <motion.div
            variants={variant}
            initial="initial"
            whileInView={viewport ? "animate" : undefined}
            viewport={viewport ? { once: true, amount: 0.3 } : undefined}
            animate={!viewport ? "animate" : undefined}
            transition={{
                duration,
                delay: delay + (index * 0.1),
                ease: 'easeOut'
            }}
            whileHover={('whileHover' in hoverVariant) ? hoverVariant.whileHover : undefined}
            whileTap={('whileTap' in hoverVariant) ? hoverVariant.whileTap : undefined}
            onClick={onClick}
            className="h-full"
        >
            {wrappedContent}
        </motion.div>
    )
}

// ============================================================================
// CARD HEADER COMPONENT
// ============================================================================

/**
 * CardHeader - Reusable card header component
 * 
 * @param icon - Header icon
 * @param title - Card title
 * @param description - Card description
 * @param gradient - Background gradient
 * @param className - Additional CSS classes
 * 
 * @example
 * ```tsx
 * <CardHeader
 *   icon={<StarIcon />}
 *   title="Legal Service"
 *   description="Professional legal assistance"
 *   gradient="from-blue-500 to-purple-600"
 * />
 * ```
 */
export const CardHeaderComponent: React.FC<CardHeaderProps> = ({
    icon,
    title,
    description,
    gradient = 'from-gold-500 to-gold-600',
    className = ''
}) => {
    return (
        <div className={cn('pb-4', className)}>
            {icon && (
                <div className={cn(
                    'flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br shadow-lg mb-4',
                    gradient
                )}>
                    <div className="text-white">
                        {icon}
                    </div>
                </div>
            )}

            <CardTitle className="text-xl font-semibold text-text-primary mb-2">
                {title}
            </CardTitle>

            {description && (
                <CardDescription className="text-text-secondary">
                    {description}
                </CardDescription>
            )}
        </div>
    )
}

// ============================================================================
// CARD ACTION COMPONENT
// ============================================================================

/**
 * CardAction - Reusable card action component
 * 
 * @param text - Action text
 * @param href - Link URL
 * @param onClick - Click handler
 * @param icon - Action icon
 * @param variant - Button variant
 * @param className - Additional CSS classes
 * 
 * @example
 * ```tsx
 * <CardAction
 *   text="Learn More"
 *   href="/services"
 *   icon={<ArrowRightIcon />}
 *   variant="primary"
 * />
 * ```
 */
export const CardAction: React.FC<CardActionProps> = ({
    text,
    href,
    onClick,
    icon,
    variant = 'primary',
    className = ''
}) => {
    const baseClasses = 'inline-flex items-center gap-2 font-medium transition-all duration-200'

    const variantClasses = {
        primary: 'bg-gold-500 text-white hover:bg-gold-600 shadow-md hover:shadow-lg',
        secondary: 'bg-background-secondary text-text-primary border border-border-secondary hover:bg-background-tertiary',
        outline: 'border border-border-secondary bg-background-primary text-text-primary hover:bg-background-secondary'
    }

    const buttonClasses = cn(
        baseClasses,
        'px-4 py-2 rounded-lg',
        variantClasses[variant],
        className
    )

    const content = (
        <>
            <span>{text}</span>
            {icon && icon}
        </>
    )

    if (href) {
        return (
            <a href={href} className={buttonClasses}>
                {content}
            </a>
        )
    }

    return (
        <button onClick={onClick} className={buttonClasses}>
            {content}
        </button>
    )
}

// ============================================================================
// SPECIALIZED CARD COMPONENTS
// ============================================================================

/**
 * ServiceCard - Specialized card for services
 */
export const ServiceCard: React.FC<AnimatedCardProps & {
    service: {
        title: string
        description: string
        icon: React.ReactNode
        features: string[]
    }
}> = ({ service, ...props }) => {
    return (
        <AnimatedCard {...props}>
            <CardHeaderComponent
                icon={service.icon}
                title={service.title}
                description={service.description}
            />
            <CardContent>
                <ul className="space-y-2 mb-4">
                    {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-2">
                            <div className="flex-shrink-0 w-1.5 h-1.5 bg-gold-500 rounded-full mt-1.5" />
                            <span className="text-sm text-text-secondary">{feature}</span>
                        </li>
                    ))}
                </ul>
                <CardAction
                    text="Saiba mais →"
                    href={`/servicos/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                    variant="outline"
                />
            </CardContent>
        </AnimatedCard>
    )
}

/**
 * ContactCard - Specialized card for contact information
 */
export const ContactCard: React.FC<AnimatedCardProps & {
    contact: {
        icon: React.ReactNode
        label: string
        value: string
        href?: string
    }
}> = ({ contact, ...props }) => {
    return (
        <AnimatedCard {...props}>
            <CardContent className="text-center">
                <div className="flex justify-center mb-4">
                    <div className="text-gold-500">
                        {contact.icon}
                    </div>
                </div>
                <CardTitle className="text-lg font-semibold text-text-primary mb-2">
                    {contact.label}
                </CardTitle>
                <p className="text-text-secondary">
                    {contact.href ? (
                        <a href={contact.href} className="hover:text-gold-500 transition-colors">
                            {contact.value}
                        </a>
                    ) : (
                        contact.value
                    )}
                </p>
            </CardContent>
        </AnimatedCard>
    )
} 