"use client"

import { Logo } from "@/components/ui/Logo"
import { ThemeToggle } from "@/components/ui/theme"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    const navItems = [
        { href: "#home", label: "Início" },
        { href: "#services", label: "Serviços" },
        { href: "#about", label: "Sobre" },
        { href: "#contact", label: "Contato" }
    ]

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background-primary/95 backdrop-blur-2xl shadow-lg border-b border-border-secondary/20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20 sm:h-24 lg:h-28">
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex-shrink-0"
                    >
                        <Logo size="xl" />
                    </motion.div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8 lg:space-x-12">
                        {navItems.map((item, index) => (
                            <motion.a
                                key={item.href}
                                href={item.href}
                                className="text-lg lg:text-xl text-text-secondary hover:text-gold-400 transition-colors duration-200 font-medium relative group"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                            >
                                {item.label}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gold-400 to-gold-600 group-hover:w-full transition-all duration-300"></span>
                            </motion.a>
                        ))}

                        {/* Theme Toggle */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.4 }}
                        >
                            <ThemeToggle />
                        </motion.div>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center space-x-4">
                        <ThemeToggle />
                        <motion.button
                            className="p-3 text-text-secondary hover:text-text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2 focus:ring-offset-background-primary rounded-lg"
                            onClick={toggleMenu}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
                            aria-expanded={isMenuOpen}
                        >
                            {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
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
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="md:hidden bg-background-primary/98 backdrop-blur-xl border-t border-border-secondary/20"
                        >
                            <div className="py-8 space-y-4">
                                {navItems.map((item, index) => (
                                    <motion.a
                                        key={item.href}
                                        href={item.href}
                                        className="block text-text-secondary hover:text-gold-400 transition-colors px-8 py-5 text-lg font-medium hover:bg-gold-400/5 rounded-lg mx-3"
                                        whileHover={{ x: 10 }}
                                        onClick={closeMenu}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.2, delay: index * 0.1 }}
                                    >
                                        {item.label}
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    )
} 