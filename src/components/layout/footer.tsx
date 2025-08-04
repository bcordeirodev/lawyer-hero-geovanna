"use client"

import { motion } from "framer-motion"
import { Scale, Phone, Mail, MapPin, Clock } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-slate-900 text-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-12 lg:px-8">
                <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-2"
                    >
                        <div className="flex items-center space-x-2 mb-3 sm:mb-4">
                            <Scale className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400" />
                            <span className="text-lg sm:text-xl font-bold">Dra. Geovanna Nery</span>
                        </div>
                        <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 max-w-md">
                            Advogada jovem e dinâmica com mais de 5 anos de experiência
                            na área jurídica. Atuação especializada em Direito Civil e Trabalhista em Brasília-DF.
                        </p>
                        <div className="flex space-x-4">
                            <motion.a
                                href="#"
                                className="text-gray-400 hover:text-blue-400 transition-colors"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="sr-only">LinkedIn</span>
                                <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </motion.a>
                            <motion.a
                                href="#"
                                className="text-gray-400 hover:text-blue-400 transition-colors"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="sr-only">Instagram</span>
                                <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
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
                        <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Áreas de Atuação</h3>
                        <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-gray-300">
                            <li>Direito Civil</li>
                            <li>Direito Trabalhista</li>
                            <li>Direito do Consumidor</li>
                            <li>Direito Previdenciário</li>
                            <li>Direito Empresarial</li>
                            <li>Direito Imobiliário</li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contato</h3>
                        <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-300">
                            <li className="flex items-center space-x-2">
                                <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-blue-400" />
                                <span>(61) 99999-9999</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <Mail className="h-3 w-3 sm:h-4 sm:w-4 text-blue-400" />
                                <span>geovanna.nery@email.com</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-blue-400" />
                                <span>Brasília, DF</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-blue-400" />
                                <span>Segunda a Sexta: 9h às 18h</span>
                            </li>
                        </ul>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-slate-800 text-center text-gray-400"
                >
                    <p className="text-sm sm:text-base">&copy; 2024 Dra. Geovanna Nery. Todos os direitos reservados.</p>
                    <p className="mt-1 sm:mt-2 text-xs sm:text-sm">OAB/DF - Inscrita recentemente</p>
                </motion.div>
            </div>
        </footer>
    )
} 