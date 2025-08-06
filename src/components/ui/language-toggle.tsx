"use client"

import { motion } from "framer-motion"
import { Globe } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

export function LanguageToggle() {
    const { language, toggleLanguage } = useLanguage()

    return (
        <motion.button
            onClick={toggleLanguage}
            className="flex items-center space-x-2 px-3 py-2 text-text-secondary hover:text-text-primary transition-colors duration-200 font-medium rounded-lg hover:bg-background-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title={language === 'pt' ? 'Switch to English' : 'Mudar para Português'}
        >
            <Globe className="h-4 w-4" />
            <span className="text-sm font-medium">
                {language === 'pt' ? 'EN' : 'PT'}
            </span>
        </motion.button>
    )
} 