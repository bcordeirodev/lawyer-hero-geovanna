/**
 * useAnimation Hook
 * Centralized animation configurations for consistent animations across the app
 */

import { useMemo } from 'react'

// ============================================================================
// ANIMATION CONFIGURATIONS
// ============================================================================

export interface AnimationConfig {
    initial: Record<string, unknown>
    animate: Record<string, unknown>
    exit?: Record<string, unknown>
    transition?: Record<string, unknown>
    whileHover?: Record<string, unknown>
    whileTap?: Record<string, unknown>
    whileInView?: Record<string, unknown>
}

export interface ScrollAnimationConfig {
    initial: Record<string, unknown>
    whileInView: Record<string, unknown>
    viewport?: Record<string, unknown>
    transition?: Record<string, unknown>
}

export interface HoverAnimationConfig {
    whileHover: Record<string, unknown>
    whileTap?: Record<string, unknown>
    transition?: Record<string, unknown>
}

// ============================================================================
// USE ANIMATION HOOK
// ============================================================================

/**
 * useAnimation - Centralized animation hook
 * 
 * Provides consistent animation configurations across the app
 * 
 * @returns Object containing various animation configurations
 */
export function useAnimation() {
    const animations = useMemo(() => ({
        // Fade in animations
        fadeIn: {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6, ease: "easeOut" }
        } as AnimationConfig,

        fadeInUp: {
            initial: { opacity: 0, y: 30 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.8, ease: "easeOut" }
        } as AnimationConfig,

        fadeInDown: {
            initial: { opacity: 0, y: -30 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.8, ease: "easeOut" }
        } as AnimationConfig,

        // Scale animations
        scaleIn: {
            initial: { opacity: 0, scale: 0.8 },
            animate: { opacity: 1, scale: 1 },
            transition: { duration: 0.6, ease: "easeOut" }
        } as AnimationConfig,

        // Slide animations
        slideInLeft: {
            initial: { opacity: 0, x: -50 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: 0.6, ease: "easeOut" }
        } as AnimationConfig,

        slideInRight: {
            initial: { opacity: 0, x: 50 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: 0.6, ease: "easeOut" }
        } as AnimationConfig,

        // Scroll animations
        scrollFadeIn: {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.6, ease: "easeOut" }
        } as ScrollAnimationConfig,

        scrollScaleIn: {
            initial: { opacity: 0, scale: 0.8 },
            whileInView: { opacity: 1, scale: 1 },
            viewport: { once: true },
            transition: { duration: 0.6, ease: "easeOut" }
        } as ScrollAnimationConfig,

        // Hover animations
        hoverScale: {
            whileHover: { scale: 1.05, y: -2 },
            whileTap: { scale: 0.95 },
            transition: { duration: 0.2 }
        } as HoverAnimationConfig,

        hoverLift: {
            whileHover: { y: -5, scale: 1.02 },
            whileTap: { y: 0, scale: 0.98 },
            transition: { duration: 0.2 }
        } as HoverAnimationConfig,

        // Button animations
        buttonHover: {
            whileHover: { scale: 1.05 },
            whileTap: { scale: 0.95 },
            transition: { duration: 0.2 }
        } as HoverAnimationConfig,

        // Floating animations
        floating: {
            initial: { y: 0, rotate: 0 },
            animate: {
                y: [0, -20, 0],
                rotate: [0, 5, 0],
            },
            transition: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
            }
        } as AnimationConfig,

        floatingDelayed: {
            initial: { y: 0, rotate: 0 },
            animate: {
                y: [0, 20, 0],
                rotate: [0, -5, 0],
            },
            transition: {
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
            }
        } as AnimationConfig,

        // Pulse animations
        pulse: {
            initial: { scale: 1, opacity: 1 },
            animate: {
                scale: [1, 1.1, 1],
                opacity: [1, 0.8, 1],
            },
            transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
            }
        } as AnimationConfig,

        // Stagger animations for lists
        staggerContainer: {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        } as AnimationConfig,

        staggerItem: {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6, ease: "easeOut" }
        } as AnimationConfig
    }), [])

    return animations
}

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Creates a staggered animation for list items
 * @param delay - Delay between items
 * @param duration - Animation duration
 * @returns Animation configuration
 */
export function createStaggerAnimation(delay: number = 0.1, duration: number = 0.6) {
    return {
        container: {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: {
                staggerChildren: delay,
                delayChildren: 0.2
            }
        },
        item: {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration, ease: "easeOut" }
        }
    }
}

/**
 * Creates a hover animation with custom scale
 * @param scale - Scale factor on hover
 * @param y - Y translation on hover
 * @returns Animation configuration
 */
export function createHoverAnimation(scale: number = 1.05, y: number = -2) {
    return {
        whileHover: { scale, y },
        whileTap: { scale: 0.95 },
        transition: { duration: 0.2 }
    }
} 