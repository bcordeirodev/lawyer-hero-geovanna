"use client"

import { LAWYER_CONFIG } from "@/config"
import { useTheme } from "@/contexts/ThemeContext"
import { motion } from "framer-motion"
import { Award, Clock, Mail, MapPin, Phone, Scale, Shield, Zap } from "lucide-react"

export function Footer() {
    const { theme } = useTheme()
    const { lawyer, services } = LAWYER_CONFIG

    const contactInfo = [
        {
            icon: Mail,
            value: lawyer.contact.email,
            href: `mailto:${lawyer.contact.email}`
        },
        {
            icon: Phone,
            value: lawyer.contact.phone,
            href: `tel:${lawyer.contact.phone}`
        },
        {
            icon: MapPin,
            value: lawyer.credentials.location,
            href: null
        },
        {
            icon: Clock,
            value: lawyer.contact.workingHours,
            href: null
        }
    ]

    return (
        <footer className="bg-background-tertiary text-text-primary border-t border-border-secondary">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-12 lg:px-8">
                <div className="grid grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-4">
                    {/* Brand section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-2"
                    >
                        <div className="flex items-center space-x-3 mb-6 sm:mb-8">
                            <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-lg bg-gradient-to-br from-secondary-500 to-secondary-600 shadow-lg">
                                <Scale className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                            </div>
                            <div>
                                <h2 className="text-xl sm:text-2xl font-bold text-text-primary">
                                    {lawyer.name}
                                </h2>
                                <p className="text-sm text-gold-500 font-medium">{lawyer.title}</p>
                            </div>
                        </div>

                        <p className="text-sm sm:text-base text-text-secondary mb-6 max-w-lg leading-relaxed">
                            Atuação jurídica diferenciada com atendimento personalizado e dedicação profissional
                        </p>

                        {/* Professional Info */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                            <motion.div
                                className="bg-background-secondary border border-border-secondary rounded-lg p-4"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.2 }}
                            >
                                <div className="flex items-center space-x-3">
                                    <div className="p-2 bg-secondary-500/20 rounded-md">
                                        <Award className="h-4 w-4 text-secondary-500" />
                                    </div>
                                    <div>
                                        <p className="text-lg font-bold text-text-primary">{lawyer.statistics.experience}</p>
                                        <p className="text-xs text-text-secondary">Anos de Experiência</p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                className="bg-background-secondary border border-border-secondary rounded-lg p-4"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.2 }}
                            >
                                <div className="flex items-center space-x-3">
                                    <div className="p-2 bg-gold-500/20 rounded-md">
                                        <Shield className="h-4 w-4 text-gold-500" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-text-primary">{lawyer.credentials.bar}</p>
                                        <p className="text-xs text-text-secondary">Registro OAB</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Social links */}
                        <div className="flex space-x-3">
                            <motion.a
                                href={LAWYER_CONFIG.socialMedia.linkedin}
                                className="p-2.5 bg-background-secondary border border-border-secondary rounded-lg hover:bg-secondary-500/10 transition-colors focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2 focus:ring-offset-background-secondary"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                            >
                                <svg className="h-4 w-4 text-text-secondary hover:text-secondary-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </motion.a>
                            <motion.a
                                href={LAWYER_CONFIG.socialMedia.instagram}
                                className="p-2.5 bg-background-secondary border border-border-secondary rounded-lg hover:bg-gold-500/10 transition-colors focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2 focus:ring-offset-background-secondary"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                            >
                                <svg className="h-4 w-4 text-text-secondary hover:text-gold-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z" />
                                </svg>
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Areas of expertise */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="p-1.5 bg-secondary-500/20 rounded-md">
                                <Zap className="h-4 w-4 text-secondary-500" />
                            </div>
                            <h3 className="text-lg font-semibold text-text-primary">
                                Áreas de Atuação
                            </h3>
                        </div>
                        <ul className="space-y-3">
                            {services.slice(0, 6).map((service, index) => (
                                <motion.li
                                    key={service.id}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                                    className="flex items-center space-x-2 text-text-secondary hover:text-text-primary transition-colors group"
                                >
                                    <div className="w-1.5 h-1.5 bg-secondary-500 rounded-full group-hover:bg-gold-500 transition-colors"></div>
                                    <span className="text-sm">{service.title}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact information */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="p-1.5 bg-gold-500/20 rounded-md">
                                <Phone className="h-4 w-4 text-gold-500" />
                            </div>
                            <h3 className="text-lg font-semibold text-text-primary">
                                Contato
                            </h3>
                        </div>
                        <ul className="space-y-3">
                            {contactInfo.map((contact, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                                    className="flex items-center space-x-2 group"
                                >
                                    <div className="p-1.5 bg-background-secondary border border-border-secondary rounded-md group-hover:bg-secondary-500/10 transition-colors">
                                        <contact.icon className="h-3.5 w-3.5 text-secondary-500" />
                                    </div>
                                    {contact.href ? (
                                        <a
                                            href={contact.href}
                                            className="text-sm text-text-secondary group-hover:text-text-primary transition-colors break-all hover:text-gold-500"
                                        >
                                            {contact.value}
                                        </a>
                                    ) : (
                                        <span className="text-sm text-text-secondary group-hover:text-text-primary transition-colors break-all">
                                            {contact.value}
                                        </span>
                                    )}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Footer bottom */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="pt-8 sm:pt-10 border-t border-border-secondary text-center mt-6"
                >
                    {/* Legal Disclaimer */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mb-6 bg-slate-800 dark:bg-slate-700 border border-slate-600/30 dark:border-slate-500/30 rounded-lg p-4 w-full"
                    >
                        <p className="text-xs text-gray-300 dark:text-gray-400 leading-relaxed text-center">
                            <span className="font-medium text-gray-200 dark:text-gray-300">Aviso Legal:</span> As informações contidas neste site são apenas para fins informativos. Cada caso é único e não há garantia de resultados. O resultado de procedimentos legais depende de vários fatores e circunstâncias específicas de cada situação. Sempre deve ser buscada consultoria jurídica adequada para análise do caso específico.
                        </p>
                    </motion.div>

                    {/* Copyright */}
                    <div className="mb-6">
                        <p className="text-sm font-medium text-text-primary">
                            &copy; 2024 {lawyer.name}. Todos os direitos reservados.
                        </p>
                        <p className="text-xs text-text-secondary mt-2">
                            {lawyer.credentials.bar} - {lawyer.title}
                        </p>
                    </div>

                    {/* Developer info */}
                    <div className="bg-background-secondary border border-border-secondary rounded-lg p-4 max-w-lg mx-auto">
                        <p className="text-xs text-text-muted mb-3 font-medium text-center">
                            Desenvolvido por
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-xs text-text-muted">
                            <span className="font-medium text-text-primary">Bruno Cordeiro da Silva</span>
                            <span className="hidden sm:inline text-text-muted/50">•</span>
                            <a
                                href="tel:+5561983631107"
                                className="hover:text-gold-500 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2 focus:ring-offset-background-secondary rounded"
                            >
                                (61) 98363-1107
                            </a>
                            <span className="hidden sm:inline text-text-muted/50">•</span>
                            <a
                                href="mailto:bcordeiro.dev@gmail.com"
                                className="hover:text-gold-500 transition-colors duration-200 break-all focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2 focus:ring-offset-background-secondary rounded"
                            >
                                bcordeiro.dev@gmail.com
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </footer>
    )
} 