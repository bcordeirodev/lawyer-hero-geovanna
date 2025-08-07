/**
 * AnimatedWrapper Component
 * Reusable animation wrapper component following DRY principle
 */

import {
    fadeIn,
    hoverAnimations,
    scaleIn,
    slideInBottom,
    slideInLeft,
    slideInRight,
    slideInTop,
    staggerContainer,
    staggerItem
} from '@/lib/animations'
import { cn } from '@/lib/core'
import type { ViewportOptions } from 'framer-motion'
import { HTMLMotionProps, motion } from 'framer-motion'
import React from 'react'

// ============================================================================
// ANIMATION TYPES
// ============================================================================

export type AnimationType =
    | 'fadeIn'
    | 'slideInLeft'
    | 'slideInRight'
    | 'slideInTop'
    | 'slideInBottom'
    | 'scaleIn'
    | 'staggerContainer'
    | 'staggerItem'

export type HoverAnimationType = 'scale' | 'lift' | 'glow' | 'none'

// ============================================================================
// COMPONENT PROPS
// ============================================================================

export interface AnimatedWrapperProps extends HTMLMotionProps<'div'> {
    children: React.ReactNode
    animation?: AnimationType
    hoverAnimation?: HoverAnimationType
    delay?: number
    duration?: number
    className?: string
    viewport?: ViewportOptions
    once?: boolean // deprecated, use viewport={{ once: true }}
}

// ============================================================================
// ANIMATION MAPPING
// ============================================================================

const animationVariants = {
    fadeIn,
    slideInLeft,
    slideInRight,
    slideInTop,
    slideInBottom,
    scaleIn,
    staggerContainer,
    staggerItem
}

// ============================================================================
// ANIMATED WRAPPER COMPONENT
// ============================================================================

/**
 * AnimatedWrapper - Reusable animation component
 * 
 * @param children - React children to animate
 * @param animation - Type of animation to apply
 * @param hoverAnimation - Type of hover animation
 * @param delay - Animation delay in seconds
 * @param duration - Animation duration in seconds
 * @param className - Additional CSS classes
 * @param viewport - Whether to trigger on viewport intersection
 * @param once - Whether animation should only trigger once
 * @param ...props - Additional motion div props
 * 
 * @example
 * ```tsx
 * <AnimatedWrapper animation="slideInLeft" delay={0.2}>
 *   <div>Content to animate</div>
 * </AnimatedWrapper>
 * ```
 */
export const AnimatedWrapper: React.FC<AnimatedWrapperProps> = ({
    children,
    animation = 'fadeIn',
    hoverAnimation = 'none',
    delay = 0,
    duration = 0.6,
    className = '',
    viewport = { once: true },
    ...props
}) => {
    const variant = animationVariants[animation]
    const hoverVariant = hoverAnimation !== 'none' ? hoverAnimations[hoverAnimation] : {}

    const transition = {
        duration,
        delay,
        ease: 'easeOut' as const
    }

    return (
        <motion.div
            variants={variant}
            transition={transition}
            className={cn(className)}
            {...hoverVariant}
            viewport={viewport}
            {...props}
        >
            {children}
        </motion.div>
    )
}

// ============================================================================
// SPECIALIZED ANIMATION COMPONENTS
// ============================================================================

/**
 * FadeInWrapper - Component with fade in animation
 */
export const FadeInWrapper: React.FC<Omit<AnimatedWrapperProps, 'animation'>> = (props) => (
    <AnimatedWrapper animation="fadeIn" {...props} />
)

/**
 * SlideInLeftWrapper - Component with slide in from left animation
 */
export const SlideInLeftWrapper: React.FC<Omit<AnimatedWrapperProps, 'animation'>> = (props) => (
    <AnimatedWrapper animation="slideInLeft" {...props} />
)

/**
 * SlideInRightWrapper - Component with slide in from right animation
 */
export const SlideInRightWrapper: React.FC<Omit<AnimatedWrapperProps, 'animation'>> = (props) => (
    <AnimatedWrapper animation="slideInRight" {...props} />
)

/**
 * SlideInTopWrapper - Component with slide in from top animation
 */
export const SlideInTopWrapper: React.FC<Omit<AnimatedWrapperProps, 'animation'>> = (props) => (
    <AnimatedWrapper animation="slideInTop" {...props} />
)

/**
 * SlideInBottomWrapper - Component with slide in from bottom animation
 */
export const SlideInBottomWrapper: React.FC<Omit<AnimatedWrapperProps, 'animation'>> = (props) => (
    <AnimatedWrapper animation="slideInBottom" {...props} />
)

/**
 * ScaleInWrapper - Component with scale in animation
 */
export const ScaleInWrapper: React.FC<Omit<AnimatedWrapperProps, 'animation'>> = (props) => (
    <AnimatedWrapper animation="scaleIn" {...props} />
)

/**
 * StaggerContainer - Container for staggered animations
 */
export const LegacyStaggerContainer: React.FC<Omit<AnimatedWrapperProps, 'animation'>> = (props) => (
    <AnimatedWrapper animation="staggerContainer" {...props} />
)

/**
 * LegacyStaggerItem - Item for staggered animations (legacy)
 */
export const LegacyStaggerItem: React.FC<Omit<AnimatedWrapperProps, 'animation'>> = (props) => (
    <AnimatedWrapper animation="staggerItem" {...props} />
) 