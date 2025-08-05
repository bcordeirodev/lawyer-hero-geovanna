"use client"

import React from 'react'
import { useTheme } from '@/contexts/ThemeContext'

interface ThemeWrapperProps {
    children: React.ReactNode
}

export const ThemeWrapper: React.FC<ThemeWrapperProps> = ({ children }) => {
    const { isLight, isDark } = useTheme()

    // Apply theme classes to document
    React.useEffect(() => {
        const root = document.documentElement
        const body = document.body

        if (isDark) {
            root.classList.add('dark')
            root.classList.remove('light')
            body.classList.add('dark')
            body.classList.remove('light')
        } else {
            root.classList.add('light')
            root.classList.remove('dark')
            body.classList.add('light')
            body.classList.remove('dark')
        }
    }, [isLight, isDark])

    return <>{children}</>
} 