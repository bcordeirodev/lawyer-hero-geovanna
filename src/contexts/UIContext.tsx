/**
 * UIContext - Context para gerenciar configurações de UI
 * 
 * Gerencia configurações de interface como:
 * - Breakpoints responsivos
 * - Configurações de animação
 * - Estados de loading
 * - Configurações de layout
 * - Preferências de usuário
 * 
 * @author Bruno Cordeiro
 * @version 1.0.0
 */

"use client"

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

// ============================================================================
// UI TYPES
// ============================================================================

export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

export type AnimationPreference = 'reduced' | 'normal' | 'enhanced'

export interface UIConfig {
    // Responsive breakpoints
    breakpoint: Breakpoint
    isMobile: boolean
    isTablet: boolean
    isDesktop: boolean

    // Animation preferences
    animationPreference: AnimationPreference
    prefersReducedMotion: boolean

    // Loading states
    isLoading: boolean
    loadingMessage: string

    // Layout preferences
    sidebarOpen: boolean
    modalOpen: boolean
    drawerOpen: boolean

    // User preferences
    autoSave: boolean
    notifications: boolean
    soundEffects: boolean

    // Performance
    lowPowerMode: boolean
    dataSaver: boolean
}

export interface UIActions {
    // Breakpoint actions
    setBreakpoint: (breakpoint: Breakpoint) => void

    // Animation actions
    setAnimationPreference: (preference: AnimationPreference) => void
    toggleReducedMotion: () => void

    // Loading actions
    setLoading: (loading: boolean, message?: string) => void
    clearLoading: () => void

    // Layout actions
    toggleSidebar: () => void
    toggleModal: () => void
    toggleDrawer: () => void
    closeAllOverlays: () => void

    // User preference actions
    setAutoSave: (enabled: boolean) => void
    setNotifications: (enabled: boolean) => void
    setSoundEffects: (enabled: boolean) => void

    // Performance actions
    setLowPowerMode: (enabled: boolean) => void
    setDataSaver: (enabled: boolean) => void
}

export interface UIContextType extends UIConfig, UIActions { }

// ============================================================================
// INITIAL STATE
// ============================================================================

const initialState: UIConfig = {
    // Responsive breakpoints
    breakpoint: 'lg',
    isMobile: false,
    isTablet: false,
    isDesktop: true,

    // Animation preferences
    animationPreference: 'normal',
    prefersReducedMotion: false,

    // Loading states
    isLoading: false,
    loadingMessage: '',

    // Layout preferences
    sidebarOpen: false,
    modalOpen: false,
    drawerOpen: false,

    // User preferences
    autoSave: true,
    notifications: true,
    soundEffects: true,

    // Performance
    lowPowerMode: false,
    dataSaver: false
}

// ============================================================================
// UI CONTEXT
// ============================================================================

const UIContext = createContext<UIContextType | undefined>(undefined)

// ============================================================================
// UI PROVIDER
// ============================================================================

interface UIProviderProps {
    children: ReactNode
    initialConfig?: Partial<UIConfig>
}

export const UIProvider: React.FC<UIProviderProps> = ({
    children,
    initialConfig = {}
}) => {
    // ============================================================================
    // STATE
    // ============================================================================

    const [config, setConfig] = useState<UIConfig>({
        ...initialState,
        ...initialConfig
    })

    // ============================================================================
    // BREAKPOINT DETECTION
    // ============================================================================

    useEffect(() => {
        const updateBreakpoint = () => {
            const width = window.innerWidth
            let breakpoint: Breakpoint = 'lg'
            let isMobile = false
            let isTablet = false
            let isDesktop = true

            if (width < 640) {
                breakpoint = 'xs'
                isMobile = true
                isDesktop = false
            } else if (width < 768) {
                breakpoint = 'sm'
                isMobile = true
                isDesktop = false
            } else if (width < 1024) {
                breakpoint = 'md'
                isTablet = true
                isDesktop = false
            } else if (width < 1280) {
                breakpoint = 'lg'
            } else if (width < 1536) {
                breakpoint = 'xl'
            } else {
                breakpoint = '2xl'
            }

            setConfig(prev => ({
                ...prev,
                breakpoint,
                isMobile,
                isTablet,
                isDesktop
            }))
        }

        updateBreakpoint()
        window.addEventListener('resize', updateBreakpoint)

        return () => {
            window.removeEventListener('resize', updateBreakpoint)
        }
    }, [])

    // ============================================================================
    // REDUCED MOTION DETECTION
    // ============================================================================

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

        const handleChange = (e: MediaQueryListEvent) => {
            setConfig(prev => ({
                ...prev,
                prefersReducedMotion: e.matches,
                animationPreference: e.matches ? 'reduced' : 'normal'
            }))
        }

        setConfig(prev => ({
            ...prev,
            prefersReducedMotion: mediaQuery.matches,
            animationPreference: mediaQuery.matches ? 'reduced' : 'normal'
        }))

        mediaQuery.addEventListener('change', handleChange)

        return () => {
            mediaQuery.removeEventListener('change', handleChange)
        }
    }, [])

    // ============================================================================
    // ACTIONS
    // ============================================================================

    const setBreakpoint = (breakpoint: Breakpoint) => {
        setConfig(prev => ({ ...prev, breakpoint }))
    }

    const setAnimationPreference = (preference: AnimationPreference) => {
        setConfig(prev => ({ ...prev, animationPreference: preference }))
    }

    const toggleReducedMotion = () => {
        setConfig(prev => ({
            ...prev,
            prefersReducedMotion: !prev.prefersReducedMotion,
            animationPreference: !prev.prefersReducedMotion ? 'reduced' : 'normal'
        }))
    }

    const setLoading = (loading: boolean, message: string = '') => {
        setConfig(prev => ({
            ...prev,
            isLoading: loading,
            loadingMessage: message
        }))
    }

    const clearLoading = () => {
        setConfig(prev => ({
            ...prev,
            isLoading: false,
            loadingMessage: ''
        }))
    }

    const toggleSidebar = () => {
        setConfig(prev => ({ ...prev, sidebarOpen: !prev.sidebarOpen }))
    }

    const toggleModal = () => {
        setConfig(prev => ({ ...prev, modalOpen: !prev.modalOpen }))
    }

    const toggleDrawer = () => {
        setConfig(prev => ({ ...prev, drawerOpen: !prev.drawerOpen }))
    }

    const closeAllOverlays = () => {
        setConfig(prev => ({
            ...prev,
            sidebarOpen: false,
            modalOpen: false,
            drawerOpen: false
        }))
    }

    const setAutoSave = (enabled: boolean) => {
        setConfig(prev => ({ ...prev, autoSave: enabled }))
    }

    const setNotifications = (enabled: boolean) => {
        setConfig(prev => ({ ...prev, notifications: enabled }))
    }

    const setSoundEffects = (enabled: boolean) => {
        setConfig(prev => ({ ...prev, soundEffects: enabled }))
    }

    const setLowPowerMode = (enabled: boolean) => {
        setConfig(prev => ({ ...prev, lowPowerMode: enabled }))
    }

    const setDataSaver = (enabled: boolean) => {
        setConfig(prev => ({ ...prev, dataSaver: enabled }))
    }

    // ============================================================================
    // CONTEXT VALUE
    // ============================================================================

    const contextValue: UIContextType = {
        ...config,
        setBreakpoint,
        setAnimationPreference,
        toggleReducedMotion,
        setLoading,
        clearLoading,
        toggleSidebar,
        toggleModal,
        toggleDrawer,
        closeAllOverlays,
        setAutoSave,
        setNotifications,
        setSoundEffects,
        setLowPowerMode,
        setDataSaver
    }

    return (
        <UIContext.Provider value={contextValue}>
            {children}
        </UIContext.Provider>
    )
}

// ============================================================================
// HOOKS
// ============================================================================

/**
 * useUI - Hook para acessar o contexto de UI
 * 
 * @returns Contexto de UI com configurações e ações
 * 
 * @example
 * ```tsx
 * const { breakpoint, isLoading, setLoading } = useUI()
 * ```
 */
export const useUI = (): UIContextType => {
    const context = useContext(UIContext)

    if (context === undefined) {
        throw new Error('useUI must be used within a UIProvider')
    }

    return context
}

/**
 * useBreakpoint - Hook para acessar informações de breakpoint
 * 
 * @returns Informações de breakpoint
 */
export const useBreakpoint = () => {
    const { breakpoint, isMobile, isTablet, isDesktop } = useUI()

    return {
        breakpoint,
        isMobile,
        isTablet,
        isDesktop
    }
}

/**
 * useAnimationPreference - Hook para acessar preferências de animação
 * 
 * @returns Preferências de animação
 */
export const useAnimationPreference = () => {
    const { animationPreference, prefersReducedMotion } = useUI()

    return {
        animationPreference,
        prefersReducedMotion
    }
}

/**
 * useLoading - Hook para gerenciar estados de loading
 * 
 * @returns Estados e ações de loading
 */
export const useLoading = () => {
    const { isLoading, loadingMessage, setLoading, clearLoading } = useUI()

    return {
        isLoading,
        loadingMessage,
        setLoading,
        clearLoading
    }
} 