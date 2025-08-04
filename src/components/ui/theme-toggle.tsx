"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'

export const ThemeToggle: React.FC = () => {
    const { theme, toggleTheme, isLight, isDark } = useTheme()

    return (
        <motion.button
            onClick={toggleTheme}
            className="relative p-3 rounded-lg bg-background-secondary border border-border-primary hover:bg-background-tertiary transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
        >
            <motion.div
                initial={false}
                animate={{ rotate: isLight ? 0 : 180 }}
                transition={{ duration: 0.3 }}
                className="relative"
            >
                {isLight ? (
                    <Sun className="h-6 w-6 text-gold-500" />
                ) : (
                    <Moon className="h-6 w-6 text-gold-400" />
                )}
            </motion.div>
        </motion.button>
    )
} 