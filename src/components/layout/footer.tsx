"use client"

import { motion } from "framer-motion"
import { Scale, Phone, Mail, MapPin, Clock } from "lucide-react"
import { useTheme } from "@/contexts/ThemeContext"

export function Footer() {
    const { theme } = useTheme()

    return (
        <footer className="bg-background-tertiary text-text-primary border-t border-border-primary">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-16 lg:px-8">
                <div className="grid grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-2"
                    >
                        <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                            <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-lg bg-gradient-to-br from-secondary-500 to-secondary-600 shadow-lg">
                                <Scale className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                            </div>
                            <span className="text-xl sm:text-2xl font-bold">Dra. Geovanna Nery</span>
                        </div>
                        <p className="text-base sm:text-lg text-text-secondary mb-6 sm:mb-8 max-w-md">
                            Advogada jovem e dinâmica com mais de 8 anos de experiência
                            na área jurídica. Atuação especializada em Direito Civil, Empresarial e Família em São Paulo-SP.
                        </p>
                        <div className="flex space-x-6">
                            <motion.a
                                href="#"
                                className="text-text-secondary hover:text-secondary-500 transition-colors"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="sr-only">LinkedIn</span>
                                <svg className="h-6 w-6 sm:h-7 sm:w-7" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </motion.a>
                            <motion.a
                                href="#"
                                className="text-text-secondary hover:text-secondary-500 transition-colors"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="sr-only">Instagram</span>
                                <svg className="h-6 w-6 sm:h-7 sm:w-7" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z" />
                                </svg>
                            </motion.a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Áreas de Atuação</h3>
                        <ul className="space-y-2 sm:space-y-3">
                            <li className="text-base sm:text-lg text-text-secondary">Direito Civil</li>
                            <li className="text-base sm:text-lg text-text-secondary">Direito Trabalhista</li>
                            <li className="text-base sm:text-lg text-text-secondary">Direito do Consumidor</li>
                            <li className="text-base sm:text-lg text-text-secondary">Direito Previdenciário</li>
                            <li className="text-base sm:text-lg text-text-secondary">Direito Empresarial</li>
                            <li className="text-base sm:text-lg text-text-secondary">Direito Imobiliário</li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Contato</h3>
                        <ul className="space-y-3 sm:space-y-4">
                            <li className="flex items-center space-x-3">
                                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-secondary-500" />
                                <span className="text-base sm:text-lg text-text-secondary">(11) 99999-9999</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-secondary-500" />
                                <span className="text-base sm:text-lg text-text-secondary">geovanna.nery@advocacia.com.br</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-secondary-500" />
                                <span className="text-base sm:text-lg text-text-secondary">São Paulo, SP</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-secondary-500" />
                                <span className="text-base sm:text-lg text-text-secondary">Segunda a Sexta: 9h às 18h</span>
                            </li>
                        </ul>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="pt-8 sm:pt-10 border-t border-border-primary text-center"
                >
                    <p className="text-base sm:text-lg text-text-muted">
                        &copy; 2024 Dra. Geovanna Nery. Todos os direitos reservados.
                    </p>
                    <p className="mt-2 sm:mt-3 text-sm sm:text-base text-text-muted">
                        OAB/SP - Advogada Licenciada
                    </p>
                </motion.div>
            </div>
        </footer>
    )
} 