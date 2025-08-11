"use client"

import { useTheme } from '@/contexts/ThemeContext'
import React from 'react'

interface ThemeWrapperProps {
    children: React.ReactNode
}

export const ThemeWrapper: React.FC<ThemeWrapperProps> = ({ children }) => {
    const { isLight, isDark } = useTheme()

    // Apply theme classes to document
    React.useEffect(() => {
        const root = document.documentElement
        const body = document.body

        // Remove existing theme classes
        root.classList.remove('light', 'dark')
        body.classList.remove('light', 'dark')

        // Add current theme class
        if (isDark) {
            root.classList.add('dark')
            body.classList.add('dark')
        } else {
            root.classList.add('light')
            body.classList.add('light')
        }
    }, [isLight, isDark])

    return <>{children}</>
} 