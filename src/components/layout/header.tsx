"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Scale, Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-14 sm:h-16">
                    {/* Logo */}
                    <motion.div
                        className="flex items-center space-x-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Scale className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400" />
                        <span className="text-lg sm:text-xl font-bold text-white">Dra. Geovanna Nery</span>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
                        <motion.a
                            href="#home"
                            className="text-sm lg:text-base text-gray-300 hover:text-white transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Início
                        </motion.a>
                        <motion.a
                            href="#services"
                            className="text-sm lg:text-base text-gray-300 hover:text-white transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Serviços
                        </motion.a>
                        <motion.a
                            href="#about"
                            className="text-sm lg:text-base text-gray-300 hover:text-white transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Sobre
                        </motion.a>
                        <motion.a
                            href="#contact"
                            className="text-sm lg:text-base text-gray-300 hover:text-white transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Contato
                        </motion.a>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 border-0 text-sm lg:text-base">
                                <a href="#contact">Fale Conosco</a>
                            </Button>
                        </motion.div>
                    </nav>

                    {/* Mobile Menu Button */}
                    <motion.button
                        className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
                        onClick={toggleMenu}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </motion.button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="md:hidden border-t border-slate-800"
                        >
                            <div className="py-4 space-y-3">
                                <motion.a
                                    href="#home"
                                    className="block text-gray-300 hover:text-white transition-colors px-4 py-2"
                                    whileHover={{ x: 10 }}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Início
                                </motion.a>
                                <motion.a
                                    href="#services"
                                    className="block text-gray-300 hover:text-white transition-colors px-4 py-2"
                                    whileHover={{ x: 10 }}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Serviços
                                </motion.a>
                                <motion.a
                                    href="#about"
                                    className="block text-gray-300 hover:text-white transition-colors px-4 py-2"
                                    whileHover={{ x: 10 }}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Sobre
                                </motion.a>
                                <motion.a
                                    href="#contact"
                                    className="block text-gray-300 hover:text-white transition-colors px-4 py-2"
                                    whileHover={{ x: 10 }}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Contato
                                </motion.a>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className="px-4 pt-2"
                                >
                                    <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 border-0">
                                        <a href="#contact">Fale Conosco</a>
                                    </Button>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    )
} 