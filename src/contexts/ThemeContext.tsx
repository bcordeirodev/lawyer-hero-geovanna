"use client"

import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react'

// ============================================================================
// THEME TYPES
// ============================================================================

export type ThemeMode = 'light' | 'dark' | 'auto'

export interface ThemeColors {
    // Primary colors (based on the image - light beige/cream background)
    primary: {
        50: string
        100: string
        200: string
        300: string
        400: string
        500: string
        600: string
        700: string
        800: string
        900: string
    }

    // Secondary colors (gold accents)
    secondary: {
        50: string
        100: string
        200: string
        300: string
        400: string
        500: string
        600: string
        700: string
        800: string
        900: string
    }

    // Neutral colors (light beige/cream)
    neutral: {
        50: string
        100: string
        200: string
        300: string
        400: string
        500: string
        600: string
        700: string
        800: string
        900: string
    }

    // Background colors
    background: {
        primary: string
        secondary: string
        tertiary: string
    }

    // Text colors
    text: {
        primary: string
        secondary: string
        tertiary: string
        muted: string
    }

    // Border colors
    border: {
        primary: string
        secondary: string
        accent: string
    }

    // Status colors
    success: string
    warning: string
    error: string
    info: string
}

export interface ThemeConfig {
    mode: ThemeMode
    colors: ThemeColors
    borderRadius: {
        sm: string
        md: string
        lg: string
        xl: string
    }
    spacing: {
        xs: string
        sm: string
        md: string
        lg: string
        xl: string
        '2xl': string
    }
    shadows: {
        sm: string
        md: string
        lg: string
        xl: string
    }
}

// ============================================================================
// LIGHT THEME COLORS (based on the image) - mais escuro
// ============================================================================

const lightThemeColors: ThemeColors = {
    primary: {
        50: '#fefcf9',
        100: '#fdf8f0',
        200: '#faf0d8',
        300: '#f5e4b8',
        400: '#eed494',
        500: '#e6c06d',
        600: '#d9a94a',
        700: '#c18f3a',
        800: '#9e7332',
        900: '#805e2f'
    },
    secondary: {
        50: '#fefce8',
        100: '#fef9c3',
        200: '#fef08a',
        300: '#fde047',
        400: '#facc15',
        500: '#eab308',
        600: '#ca8a04',
        700: '#a16207',
        800: '#854d0e',
        900: '#713f12'
    },
    neutral: {
        50: '#fefcf9',
        100: '#fdf8f0',
        200: '#faf0d8',
        300: '#f5e4b8',
        400: '#eed494',
        500: '#e6c06d',
        600: '#d9a94a',
        700: '#c18f3a',
        800: '#9e7332',
        900: '#805e2f'
    },
    background: {
        primary: '#f5f5f0',
        secondary: '#f0f0e8',
        tertiary: '#e8e8d8'
    },
    text: {
        primary: '#1a1a1a',
        secondary: '#4a4a4a',
        tertiary: '#6b6b6b',
        muted: '#9ca3af'
    },
    border: {
        primary: '#e5e7eb',
        secondary: '#d1d5db',
        accent: '#fbbf24'
    },
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6'
}

// ============================================================================
// DARK THEME COLORS (Azul como base, Gold escuro como secundária) - mais escuro
// ============================================================================

const darkThemeColors: ThemeColors = {
    primary: {
        50: '#0f172a',    // Dark blue
        100: '#1e293b',    // Slate 800
        200: '#334155',    // Slate 700
        300: '#475569',    // Slate 600
        400: '#64748b',    // Slate 500
        500: '#94a3b8',    // Slate 400
        600: '#cbd5e1',    // Slate 300
        700: '#e2e8f0',    // Slate 200
        800: '#f1f5f9',    // Slate 100
        900: '#f8fafc'     // Slate 50
    },
    secondary: {
        50: '#1a1a1a',     // Very dark
        100: '#2d2d2d',    // Dark gray
        200: '#404040',    // Medium dark
        300: '#525252',    // Medium gray
        400: '#737373',    // Light gray
        500: '#b8860b',    // Dark goldenrod (gold escuro)
        600: '#daa520',    // Goldenrod
        700: '#ffd700',    // Gold
        800: '#ffed4e',    // Light gold
        900: '#fff8dc'     // Cornsilk
    },
    neutral: {
        50: '#0f172a',     // Dark blue
        100: '#1e293b',    // Slate 800
        200: '#334155',    // Slate 700
        300: '#475569',    // Slate 600
        400: '#64748b',    // Slate 500
        500: '#94a3b8',    // Slate 400
        600: '#cbd5e1',    // Slate 300
        700: '#e2e8f0',    // Slate 200
        800: '#f1f5f9',    // Slate 100
        900: '#f8fafc'     // Slate 50
    },
    background: {
        primary: '#0a0f1a',    // Darker blue background
        secondary: '#1e293b',  // Medium blue
        tertiary: '#334155'    // Lighter blue
    },
    text: {
        primary: '#f8fafc',    // Very light text
        secondary: '#e2e8f0',  // Light gray text
        tertiary: '#cbd5e1',   // Medium gray text
        muted: '#94a3b8'       // Muted text
    },
    border: {
        primary: '#334155',     // Medium blue border
        secondary: '#475569',   // Lighter blue border
        accent: '#b8860b'       // Dark gold accent
    },
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6'
}

// ============================================================================
// DEFAULT THEME CONFIG
// ============================================================================

const defaultThemeConfig: ThemeConfig = {
    mode: 'dark',
    colors: darkThemeColors,
    borderRadius: {
        sm: '0.25rem',
        md: '0.5rem',
        lg: '0.75rem',
        xl: '1rem'
    },
    spacing: {
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        '2xl': '3rem'
    },
    shadows: {
        sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)'
    }
}

// ============================================================================
// THEME CONTEXT
// ============================================================================

interface ThemeContextType {
    theme: ThemeConfig
    setThemeMode: (mode: ThemeMode) => void
    toggleTheme: () => void
    isLight: boolean
    isDark: boolean
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

// ============================================================================
// THEME PROVIDER
// ============================================================================

interface ThemeProviderProps {
    children: ReactNode
    initialMode?: ThemeMode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
    children,
    initialMode = 'dark'
}) => {
    const [themeMode, setThemeMode] = useState<ThemeMode>(initialMode)
    const [theme, setTheme] = useState<ThemeConfig>(defaultThemeConfig)

    // Update theme when mode changes
    useEffect(() => {
        const colors = themeMode === 'dark' ? darkThemeColors : lightThemeColors
        setTheme(prev => ({
            ...prev,
            mode: themeMode,
            colors: colors as ThemeColors
        }))
    }, [themeMode])

    // Handle system theme preference
    useEffect(() => {
        if (themeMode === 'auto') {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
            const handleChange = (e: MediaQueryListEvent) => {
                const colors = e.matches ? darkThemeColors : lightThemeColors
                setTheme(prev => ({
                    ...prev,
                    colors: colors as ThemeColors
                }))
            }

            mediaQuery.addEventListener('change', handleChange)
            return () => mediaQuery.removeEventListener('change', handleChange)
        }
    }, [themeMode])

    const setThemeModeHandler = (mode: ThemeMode) => {
        setThemeMode(mode)
    }

    const toggleTheme = () => {
        setThemeMode(prev => prev === 'light' ? 'dark' : 'light')
    }

    const isLight = theme.mode === 'light' || (theme.mode === 'auto' && typeof window !== 'undefined' && !window.matchMedia('(prefers-color-scheme: dark)').matches)
    const isDark = !isLight

    const value: ThemeContextType = {
        theme,
        setThemeMode: setThemeModeHandler,
        toggleTheme,
        isLight,
        isDark
    }

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

// ============================================================================
// USE THEME HOOK
// ============================================================================

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext)
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider')
    }
    return context
}

// ============================================================================
// UTILITÁRIOS
// ============================================================================

export const getThemeSpacing = (size: keyof ThemeConfig['spacing'], theme: ThemeConfig): string => {
    return theme.spacing[size]
}

export const getThemeShadow = (size: keyof ThemeConfig['shadows'], theme: ThemeConfig): string => {
    return theme.shadows[size]
} 