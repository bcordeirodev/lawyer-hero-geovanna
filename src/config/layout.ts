export interface LayoutConfig {
    theme: {
        defaultMode: 'light' | 'dark'
        enableSystemPreference: boolean
    }
    navigation: {
        enableStickyHeader: boolean
        enableScrollToTop: boolean
    }
    contact: {
        enableFloatingWhatsApp: boolean
        enableContactForm: boolean
        enableMap: boolean
    }
    seo: {
        siteName: string
        siteDescription: string
        siteUrl: string
        defaultLanguage: string
        enableStructuredData: boolean
    }
    animations: {
        enableScrollAnimations: boolean
        enableHoverEffects: boolean
        enablePageTransitions: boolean
    }
    features: {
        enableEnvironmentInfo: boolean
        enableLanguageSelector: boolean
        enableThemeToggle: boolean
    }
}

export const LAYOUT_CONFIG: LayoutConfig = {
    theme: {
        defaultMode: 'dark',
        enableSystemPreference: true
    },
    navigation: {
        enableStickyHeader: true,
        enableScrollToTop: true
    },
    contact: {
        enableFloatingWhatsApp: true,
        enableContactForm: true,
        enableMap: true
    },
    seo: {
        siteName: "Dra. Geovanna Nery - Advocacia",
        siteDescription: "Advocacia especializada em Direito Civil e Tributário, com atuação também em outras áreas do Direito. Atendimento personalizado e soluções jurídicas eficazes.",
        siteUrl: "https://geovannanery.com",
        defaultLanguage: "pt-BR",
        enableStructuredData: true
    },
    animations: {
        enableScrollAnimations: true,
        enableHoverEffects: true,
        enablePageTransitions: true
    },
    features: {
        enableEnvironmentInfo: true,
        enableLanguageSelector: false, // Desabilitado após rollback
        enableThemeToggle: true
    }
}

export interface ContactConfig {
    form: {
        enableNameField: boolean
        enablePhoneField: boolean
        enableSubjectField: boolean
        enableMessageField: boolean
        requiredFields: string[]
    }
    map: {
        latitude: number
        longitude: number
        zoom: number
        address: string
    }
}

export const CONTACT_CONFIG: ContactConfig = {
    form: {
        enableNameField: true,
        enablePhoneField: true,
        enableSubjectField: true,
        enableMessageField: true,
        requiredFields: ['name', 'email', 'message']
    },
    map: {
        latitude: -15.7801,
        longitude: -47.9292,
        zoom: 15,
        address: "Brasília, DF, Brasil"
    }
}

export interface AnimationConfig {
    scroll: {
        threshold: number
        rootMargin: string
        triggerOnce: boolean
    }
    hover: {
        scale: number
        duration: number
    }
}

export const ANIMATION_CONFIG: AnimationConfig = {
    scroll: {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
        triggerOnce: true
    },
    hover: {
        scale: 1.05,
        duration: 0.2
    }
} 