/**
 * UI Layout Module
 * Layout and structural components
 */

// ============================================================================
// SECTION COMPONENTS
// ============================================================================

export {
    Section,
    SectionHeader, type SectionHeaderProps, type SectionProps
} from './section'

// ============================================================================
// ANIMATED WRAPPER
// ============================================================================

export {
    AnimatedWrapper,
    FadeInWrapper, LegacyStaggerContainer,
    LegacyStaggerItem, ScaleInWrapper, SlideInBottomWrapper, SlideInLeftWrapper,
    SlideInRightWrapper,
    SlideInTopWrapper, type AnimatedWrapperProps,
    type AnimationType,
    type HoverAnimationType
} from './animated-wrapper'

// ============================================================================
// STANDARD SECTION
// ============================================================================

export {
    CompactSection, ContentSection, HeroSection, StandardSection
} from './StandardSection'
