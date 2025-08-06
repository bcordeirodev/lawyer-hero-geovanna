"use client"

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { Language, getTranslation, defaultLanguage, isValidLanguage } from '@/constants/translations'

interface LanguageContextType {
    language: Language
    setLanguage: (language: Language) => void
    t: ReturnType<typeof getTranslation>
    toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

interface LanguageProviderProps {
    children: ReactNode
    initialLanguage?: Language
}

export function LanguageProvider({ children, initialLanguage = defaultLanguage }: LanguageProviderProps) {
    const [language, setLanguageState] = useState<Language>(initialLanguage)

    // Load language from localStorage on mount
    useEffect(() => {
        const savedLanguage = localStorage.getItem('lawyer-hero-language')
        if (savedLanguage && isValidLanguage(savedLanguage)) {
            setLanguageState(savedLanguage as Language)
        }
    }, [])

    // Save language to localStorage when it changes
    useEffect(() => {
        localStorage.setItem('lawyer-hero-language', language)
    }, [language])

    const setLanguage = (newLanguage: Language) => {
        if (isValidLanguage(newLanguage)) {
            setLanguageState(newLanguage)
        }
    }

    const toggleLanguage = () => {
        setLanguage(language === 'pt' ? 'en' : 'pt')
    }

    const t = getTranslation(language)

    const value: LanguageContextType = {
        language,
        setLanguage,
        t,
        toggleLanguage
    }

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    const context = useContext(LanguageContext)
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider')
    }
    return context
}

export function useTranslation() {
    const { t } = useLanguage()
    return t
} 