"use client"

import { useTheme } from '@/contexts/ThemeContext'
import { motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import React from 'react'

export const ThemeToggle: React.FC = () => {
    const { toggleTheme, isLight } = useTheme()

    return (
        <motion.button
            onClick={toggleTheme}
            className="relative p-3 rounded-lg bg-background-secondary border border-border-secondary hover:bg-background-tertiary transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2 focus:ring-offset-background-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title={isLight ? 'Alternar para modo escuro' : 'Alternar para modo claro'}
            aria-label={isLight ? 'Alternar para modo escuro' : 'Alternar para modo claro'}
        >
            <motion.div
                initial={false}
                animate={{ rotate: isLight ? 0 : 180 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
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