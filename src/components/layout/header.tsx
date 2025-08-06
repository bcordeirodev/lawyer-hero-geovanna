"use client"

import { useState } from "react"
import { Scale, Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "@/contexts/ThemeContext"
import { useTranslation } from "@/contexts/LanguageContext"
import { ThemeToggle } from "@/components/ui/theme"
import { LanguageToggle } from "@/components/ui/language-toggle"
import { lawyerConfig } from "@/lib/core/config"

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { theme } = useTheme()
    const t = useTranslation()

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background-primary/98 backdrop-blur-xl border-b border-border-secondary shadow-2xl">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 sm:h-20">
                    {/* Logo */}
                    <motion.div
                        className="flex items-center space-x-2 sm:space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 items-center justify-center rounded-lg bg-gradient-to-br from-gold-500 to-gold-600 shadow-xl">
                            <Scale className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" />
                        </div>
                        <span className="text-lg sm:text-xl md:text-2xl font-bold text-text-primary">{lawyerConfig.name}</span>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
                        <motion.a
                            href="#home"
                            className="text-base lg:text-lg text-text-secondary hover:text-text-primary transition-colors duration-200 font-medium"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {t.nav.home}
                        </motion.a>
                        <motion.a
                            href="#services"
                            className="text-base lg:text-lg text-text-secondary hover:text-text-primary transition-colors duration-200 font-medium"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {t.nav.services}
                        </motion.a>
                        <motion.a
                            href="#about"
                            className="text-base lg:text-lg text-text-secondary hover:text-text-primary transition-colors duration-200 font-medium"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {t.nav.about}
                        </motion.a>
                        <motion.a
                            href="#contact"
                            className="text-base lg:text-lg text-text-secondary hover:text-text-primary transition-colors duration-200 font-medium"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {t.nav.contact}
                        </motion.a>

                        {/* Language Toggle */}
                        <LanguageToggle />

                        {/* Theme Toggle */}
                        <ThemeToggle />
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center space-x-3">
                        <LanguageToggle />
                        <ThemeToggle />
                        <motion.button
                            className="p-2 text-text-secondary hover:text-text-primary transition-colors"
                            onClick={toggleMenu}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </motion.button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="md:hidden border-t border-border-secondary bg-background-primary/98 backdrop-blur-xl"
                        >
                            <div className="py-4 space-y-2">
                                <motion.a
                                    href="#home"
                                    className="block text-text-secondary hover:text-text-primary transition-colors px-4 py-2 text-base font-medium"
                                    whileHover={{ x: 10 }}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {t.nav.home}
                                </motion.a>
                                <motion.a
                                    href="#services"
                                    className="block text-text-secondary hover:text-text-primary transition-colors px-4 py-2 text-base font-medium"
                                    whileHover={{ x: 10 }}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {t.nav.services}
                                </motion.a>
                                <motion.a
                                    href="#about"
                                    className="block text-text-secondary hover:text-text-primary transition-colors px-4 py-2 text-base font-medium"
                                    whileHover={{ x: 10 }}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {t.nav.about}
                                </motion.a>
                                <motion.a
                                    href="#contact"
                                    className="block text-text-secondary hover:text-text-primary transition-colors px-4 py-2 text-base font-medium"
                                    whileHover={{ x: 10 }}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {t.nav.contact}
                                </motion.a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    )
} 