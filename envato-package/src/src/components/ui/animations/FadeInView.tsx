"use client"

import { DESIGN_TOKENS } from "@/lib/design-tokens"
import { motion, type Variants } from "framer-motion"
import { type ReactNode } from "react"

// ============================================================================
// TYPES
// ============================================================================

interface FadeInViewProps {
    children: ReactNode
    delay?: number
    duration?: number
    className?: string
    direction?: 'up' | 'down' | 'left' | 'right' | 'scale'
    distance?: number
    once?: boolean
}

// ============================================================================
// ANIMATION VARIANTS
// ============================================================================

const createVariants = (direction: string, distance: number): Variants => {
    const getInitial = () => {
        switch (direction) {
            case 'up':
                return { opacity: 0, y: distance }
            case 'down':
                return { opacity: 0, y: -distance }
            case 'left':
                return { opacity: 0, x: distance }
            case 'right':
                return { opacity: 0, x: -distance }
            case 'scale':
                return { opacity: 0, scale: 0.8 }
            default:
                return { opacity: 0, y: distance }
        }
    }

    const getAnimate = () => {
        switch (direction) {
            case 'up':
            case 'down':
                return { opacity: 1, y: 0 }
            case 'left':
            case 'right':
                return { opacity: 1, x: 0 }
            case 'scale':
                return { opacity: 1, scale: 1 }
            default:
                return { opacity: 1, y: 0 }
        }
    }

    return {
        hidden: getInitial(),
        visible: getAnimate()
    }
}

// ============================================================================
// COMPONENT
// ============================================================================

/**
 * FadeInView Component
 * Provides smooth fade-in animations with customizable direction and timing
 * 
 * @example
 * ```tsx
 * <FadeInView direction="up" delay={0.2}>
 *   <h1>Animated Title</h1>
 * </FadeInView>
 * ```
 */
export function FadeInView({
    children,
    delay = 0,
    duration = DESIGN_TOKENS.animations.duration.slower,
    className,
    direction = 'up',
    distance = 20,
    once = true
}: FadeInViewProps) {
    const variants = createVariants(direction, distance)

    return (
        <motion.div
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once, margin: "-100px" }}
            variants={variants}
            transition={{
                duration,
                delay,
                ease: DESIGN_TOKENS.animations.easing.default
            }}
        >
            {children}
        </motion.div>
    )
}

// ============================================================================
// PRESET COMPONENTS
// ============================================================================

/**
 * FadeInUp - Quick preset for fade in from bottom
 */
export function FadeInUp(props: Omit<FadeInViewProps, 'direction'>) {
    return <FadeInView {...props} direction="up" />
}

/**
 * FadeInLeft - Quick preset for fade in from right
 */
export function FadeInLeft(props: Omit<FadeInViewProps, 'direction'>) {
    return <FadeInView {...props} direction="left" />
}

/**
 * FadeInRight - Quick preset for fade in from left
 */
export function FadeInRight(props: Omit<FadeInViewProps, 'direction'>) {
    return <FadeInView {...props} direction="right" />
}

/**
 * ScaleIn - Quick preset for scale animation
 */
export function ScaleIn(props: Omit<FadeInViewProps, 'direction'>) {
    return <FadeInView {...props} direction="scale" />
}