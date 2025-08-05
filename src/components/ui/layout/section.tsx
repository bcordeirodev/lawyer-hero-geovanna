"use client"

import React from 'react'
import { cn } from '@/lib/core'
import { AnimatedWrapper } from './animated-wrapper'

// ============================================================================
// SECTION PROPS
// ============================================================================

export interface SectionProps {
    id: string
    children: React.ReactNode
    className?: string
    backgroundPattern?: boolean
    container?: boolean
    animation?: boolean
    padding?: 'sm' | 'md' | 'lg' | 'xl'
    maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl'
}

// ============================================================================
// SECTION COMPONENT
// ============================================================================

/**
 * Section - Reusable section component
 * 
 * @param id - Section ID for navigation
 * @param children - React children
 * @param className - Additional CSS classes
 * @param backgroundPattern - Whether to show background pattern
 * @param container - Whether to wrap content in container
 * @param animation - Whether to animate the section
 * @param padding - Section padding size
 * @param maxWidth - Container max width
 * 
 * @example
 * ```tsx
 * <Section id="about" padding="lg" maxWidth="6xl">
 *   <h2>About Us</h2>
 *   <p>Content here</p>
 * </Section>
 * ```
 */
export const Section: React.FC<SectionProps> = ({
    id,
    children,
    className = '',
    backgroundPattern = false,
    container = true,
    animation = true,
    padding = 'lg',
    maxWidth = '7xl'
}) => {
    const paddingClasses = {
        sm: 'py-4 sm:py-6',
        md: 'py-6 sm:py-8',
        lg: 'py-8 sm:py-12 lg:py-16',
        xl: 'py-12 sm:py-16 lg:py-20 xl:py-24'
    }

    const maxWidthClasses = {
        sm: 'max-w-sm',
        md: 'max-w-md',
        lg: 'max-w-lg',
        xl: 'max-w-xl',
        '2xl': 'max-w-2xl',
        '3xl': 'max-w-3xl',
        '4xl': 'max-w-4xl',
        '5xl': 'max-w-5xl',
        '6xl': 'max-w-6xl',
        '7xl': 'max-w-7xl'
    }

    const sectionContent = (
        <div className={cn(
            'relative',
            backgroundPattern && 'bg-gradient-to-br from-background-primary to-background-secondary',
            className
        )}>
            {backgroundPattern && (
                <div className="absolute inset-0 bg-grid-pattern opacity-5" />
            )}

            {container ? (
                <div className={cn(
                    'mx-auto px-4 sm:px-6 lg:px-8',
                    maxWidthClasses[maxWidth]
                )}>
                    {children}
                </div>
            ) : (
                children
            )}
        </div>
    )

    return (
        <section
            id={id}
            className={cn(
                'relative bg-background-primary',
                paddingClasses[padding]
            )}
        >
            {animation ? (
                <AnimatedWrapper animation="fadeIn" duration={0.8}>
                    {sectionContent}
                </AnimatedWrapper>
            ) : (
                sectionContent
            )}
        </section>
    )
}

// ============================================================================
// SECTION HEADER COMPONENT
// ============================================================================

export interface SectionHeaderProps {
    badge?: {
        text: string
        icon?: React.ReactNode
    }
    title: string
    description?: string
    className?: string
    animation?: boolean
}

/**
 * SectionHeader - Reusable section header component
 * 
 * @param badge - Badge configuration
 * @param title - Section title
 * @param description - Section description
 * @param className - Additional CSS classes
 * @param animation - Whether to animate the header
 * 
 * @example
 * ```tsx
 * <SectionHeader
 *   badge={{ text: "Our Services", icon: <StarIcon /> }}
 *   title="What We Offer"
 *   description="Comprehensive legal services for your needs"
 * />
 * ```
 */
export const SectionHeader: React.FC<SectionHeaderProps> = ({
    badge,
    title,
    description,
    className = '',
    animation = true
}) => {
    const headerContent = (
        <div className={cn('text-center mb-8 sm:mb-12 lg:mb-16', className)}>
            {badge && (
                <AnimatedWrapper
                    animation="slideInTop"
                    delay={0.1}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-500/20 to-gold-600/20 text-gold-600 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-gold-500/30 shadow-lg backdrop-blur-sm"
                >
                    {badge.icon && badge.icon}
                    <span className="text-xs sm:text-sm font-medium">{badge.text}</span>
                </AnimatedWrapper>
            )}

            <AnimatedWrapper animation="slideInTop" delay={0.2}>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4 sm:mb-6">
                    {title}
                </h2>
            </AnimatedWrapper>

            {description && (
                <AnimatedWrapper animation="slideInTop" delay={0.3}>
                    <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto">
                        {description}
                    </p>
                </AnimatedWrapper>
            )}
        </div>
    )

    return animation ? headerContent : (
        <div className={cn('text-center mb-8 sm:mb-12 lg:mb-16', className)}>
            {badge && (
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-500/20 to-gold-600/20 text-gold-600 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-gold-500/30 shadow-lg backdrop-blur-sm">
                    {badge.icon && badge.icon}
                    <span className="text-xs sm:text-sm font-medium">{badge.text}</span>
                </div>
            )}

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4 sm:mb-6">
                {title}
            </h2>

            {description && (
                <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto">
                    {description}
                </p>
            )}
        </div>
    )
} 