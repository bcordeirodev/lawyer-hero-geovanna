/**
 * Design Tokens - Constantes centralizadas de design
 * Centraliza todos os valores de design para facilitar manutenção
 */

// ============================================================================
// GRADIENT TOKENS
// ============================================================================

export const GRADIENTS = {
    // Gold gradients (primário)
    gold: 'from-gold-500 to-gold-600',
    goldLight: 'from-gold-500/20 to-gold-600/20',
    goldBr: 'from-gold-500 to-gold-600', // br = border-radius

    // Text gradients
    textPrimary: 'from-text-primary via-gold-500 to-text-primary',
    textSubtitle: 'from-secondary-600 to-secondary-500',

    // Secondary gradients
    secondary: 'from-secondary-500 to-secondary-600',
    secondaryHover: 'from-secondary-600 to-secondary-700',

    // Success gradients
    success: 'from-green-500 to-green-600',
    successHover: 'from-green-600 to-green-700',

    // Background gradients
    backgroundPrimary: 'from-background-primary to-background-secondary',
    backgroundCard: 'from-background-secondary/80 to-background-tertiary/80',

    // Contact/Info gradients
    contactInfo: 'from-gold-500/15 to-gold-600/15',

    // Accent gradients
    accent: 'from-accent-primary to-accent-secondary',
} as const

// ============================================================================
// ANIMATION TOKENS
// ============================================================================

export const ANIMATIONS = {
    // Duration tokens
    duration: {
        fast: 0.2,
        normal: 0.3,
        slow: 0.5,
        slower: 0.8,
    },

    // Easing tokens
    easing: {
        default: "easeOut",
        bounce: "easeInOut",
        elastic: "backOut",
    },

    // Common animation configs
    fadeIn: {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, ease: "easeOut" }
    },

    fadeInUp: {
        initial: { opacity: 0, y: 40 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: "easeOut" }
    },

    scaleIn: {
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.6, ease: "easeOut" }
    },

    slideInLeft: {
        initial: { opacity: 0, x: -30 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.6, ease: "easeOut" }
    },

    slideInRight: {
        initial: { opacity: 0, x: 30 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.6, ease: "easeOut" }
    },

    // Hover animations
    hover: {
        scale: { scale: 1.05, transition: { duration: 0.2 } },
        scaleSmall: { scale: 1.02, transition: { duration: 0.2 } },
        translateY: { y: -4, transition: { duration: 0.2 } },
        rotateSlight: { rotate: 1, transition: { duration: 0.2 } },
    },

    // Stagger animations
    stagger: {
        container: {
            animate: {
                transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.1
                }
            }
        },
        item: {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 }
        }
    }
} as const

// ============================================================================
// SPACING TOKENS
// ============================================================================

export const SPACING = {
    // Section spacing
    section: {
        padding: 'py-8 sm:py-12 lg:py-16 xl:py-20',
        paddingSmall: 'py-6 sm:py-8 lg:py-12',
        paddingLarge: 'py-12 sm:py-16 lg:py-24 xl:py-32',
    },

    // Container spacing
    container: {
        padding: 'px-4 sm:px-6 lg:px-8',
        paddingWide: 'px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16',
        maxWidth: 'max-w-7xl mx-auto',
        maxWidthWide: 'max-w-8xl mx-auto',
    },

    // Component spacing
    component: {
        gap: 'gap-4 sm:gap-6 lg:gap-8',
        gapSmall: 'gap-2 sm:gap-3 lg:gap-4',
        gapLarge: 'gap-6 sm:gap-8 lg:gap-12',
    },

    // Grid spacing
    grid: {
        cols1: 'grid-cols-1',
        cols2: 'grid-cols-1 sm:grid-cols-2',
        cols3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
        cols4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
    }
} as const

// ============================================================================
// TYPOGRAPHY TOKENS
// ============================================================================

export const TYPOGRAPHY = {
    // Heading sizes
    heading: {
        h1: 'text-4xl sm:text-5xl lg:text-6xl xl:text-7xl',
        h2: 'text-3xl sm:text-4xl lg:text-5xl xl:text-6xl',
        h3: 'text-2xl sm:text-3xl lg:text-4xl',
        h4: 'text-xl sm:text-2xl lg:text-3xl',
        h5: 'text-lg sm:text-xl lg:text-2xl',
        h6: 'text-base sm:text-lg lg:text-xl',
    },

    // Body sizes
    body: {
        xs: 'text-xs',
        sm: 'text-sm',
        base: 'text-base',
        lg: 'text-lg',
        xl: 'text-xl',
    },

    // Font weights
    weight: {
        normal: 'font-normal',
        medium: 'font-medium',
        semibold: 'font-semibold',
        bold: 'font-bold',
    },

    // Line heights
    leading: {
        none: 'leading-none',
        tight: 'leading-tight',
        normal: 'leading-normal',
        relaxed: 'leading-relaxed',
    }
} as const

// ============================================================================
// SHADOW TOKENS
// ============================================================================

export const SHADOWS = {
    // Standard shadows
    sm: 'shadow-sm',
    base: 'shadow',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
    '2xl': 'shadow-2xl',

    // Custom shadows
    glow: 'shadow-glow',
    glowHover: 'shadow-glow--hover',

    // Colored shadows
    gold: 'shadow-lg shadow-gold-500/25',
    goldHover: 'shadow-xl shadow-gold-500/40',
} as const

// ============================================================================
// BORDER RADIUS TOKENS
// ============================================================================

export const BORDER_RADIUS = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    base: 'rounded',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    '2xl': 'rounded-2xl',
    full: 'rounded-full',
} as const

// ============================================================================
// ICON SIZE TOKENS
// ============================================================================

export const ICON_SIZES = {
    xs: 'h-3 w-3',
    sm: 'h-4 w-4',
    base: 'h-5 w-5',
    lg: 'h-6 w-6',
    xl: 'h-8 w-8',
    '2xl': 'h-10 w-10',
    '3xl': 'h-12 w-12',
    '4xl': 'h-14 w-14',
    '5xl': 'h-16 w-16',
} as const

// ============================================================================
// RESPONSIVE BREAKPOINTS
// ============================================================================

export const BREAKPOINTS = {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
} as const

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Combines gradient classes for easier usage
 */
export const gradient = (name: keyof typeof GRADIENTS) => `bg-gradient-to-r ${GRADIENTS[name]}`

/**
 * Creates hover gradient classes
 */
export const hoverGradient = (name: keyof typeof GRADIENTS, hoverName: keyof typeof GRADIENTS) =>
    `bg-gradient-to-r ${GRADIENTS[name]} hover:${GRADIENTS[hoverName]}`

/**
 * Creates text gradient classes
 */
export const textGradient = (name: keyof typeof GRADIENTS) =>
    `bg-gradient-to-r ${GRADIENTS[name]} bg-clip-text text-transparent`

/**
 * Combines animation properties for Framer Motion
 */
export const motionProps = (animationName: keyof typeof ANIMATIONS) => ANIMATIONS[animationName]

/**
 * Creates responsive typography classes
 */
export const responsiveText = (size: keyof typeof TYPOGRAPHY.heading | keyof typeof TYPOGRAPHY.body) => {
    if (size in TYPOGRAPHY.heading) {
        return TYPOGRAPHY.heading[size as keyof typeof TYPOGRAPHY.heading]
    }
    return TYPOGRAPHY.body[size as keyof typeof TYPOGRAPHY.body]
}

// ============================================================================
// DESIGN TOKENS EXPORT
// ============================================================================

export const DESIGN_TOKENS = {
    gradients: GRADIENTS,
    animations: ANIMATIONS,
    spacing: SPACING,
    typography: TYPOGRAPHY,
    shadows: SHADOWS,
    borderRadius: BORDER_RADIUS,
    iconSizes: ICON_SIZES,
    breakpoints: BREAKPOINTS,

    // Utility functions
    gradient,
    hoverGradient,
    textGradient,
    motionProps,
    responsiveText,
} as const

export default DESIGN_TOKENS