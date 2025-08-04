"use client"

import React from 'react'
import { useTheme } from '@/contexts/ThemeContext'

export const ThemeDebug: React.FC = () => {
    const { theme, isLight, isDark, toggleTheme } = useTheme()

    return (
        <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600 z-50">
            <div className="text-sm">
                <div>Mode: {theme.mode}</div>
                <div>isLight: {isLight ? 'true' : 'false'}</div>
                <div>isDark: {isDark ? 'true' : 'false'}</div>
                <button
                    onClick={toggleTheme}
                    className="mt-2 bg-blue-500 text-white px-3 py-1 rounded text-xs"
                >
                    Toggle Theme
                </button>
            </div>
        </div>
    )
} 