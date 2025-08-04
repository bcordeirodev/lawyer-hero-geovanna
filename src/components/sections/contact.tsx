"use client"

/**
 * Contact Section Component
 * Displays contact information and contact form
 */

import React from 'react'
import { motion } from "framer-motion"
import { ContactForm } from '@/components/forms/ContactForm'
import { contactConfig } from '@/lib/config'
import { ContactInfo } from '@/types'
import { useTheme } from '@/contexts/ThemeContext'

/**
 * Contact Section Component
 * Provides contact information and a contact form for potential clients
 */
export const Contact: React.FC = () => {
    const { theme } = useTheme()

    return (
        <section id="contact" className="relative py-8 sm:py-12 lg:py-16 xl:py-20 bg-background-primary">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
                <div className="text-center mb-12 sm:mb-16">
                    <motion.div
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-500/20 to-gold-600/20 text-gold-600 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-gold-500/30 shadow-lg backdrop-blur-sm"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        whileHover={{ scale: 1.05, y: -2 }}
                    >
                        📞 Entre em Contato
                    </motion.div>
                    <motion.h2
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-text-primary via-gold-500 to-text-primary bg-clip-text text-transparent mb-4 drop-shadow-sm hover:scale-105 transition-transform duration-300 cursor-default"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        whileHover={{ scale: 1.02 }}
                    >
                        Entre em Contato
                    </motion.h2>
                    <p className="text-lg text-text-secondary max-w-3xl mx-auto">
                        Pronto para discutir seu caso jurídico? Entre em contato para uma consulta.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-xl sm:text-2xl font-semibold text-text-primary mb-4 sm:mb-6">
                                Vamos Discutir Seu Caso
                            </h3>
                            <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                                Estou aqui para ajudá-lo a navegar pelos seus desafios jurídicos. Seja para
                                consultoria, representação ou apenas dúvidas, estou comprometida em
                                fornecer a orientação e o suporte que você merece.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {contactConfig.map((contact: ContactInfo, index: number) => (
                                <motion.div
                                    key={contact.type}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className={`bg-background-secondary border border-border-primary rounded-lg p-6 hover:shadow-lg transition-all duration-300 group ${contact.href ? 'cursor-pointer hover:border-gold-500/50 hover:bg-background-secondary/80' : ''
                                        }`}
                                    onClick={contact.href ? () => window.open(contact.href, '_blank') : undefined}
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0">
                                            <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-gold-500 to-gold-600 shadow-lg ${contact.href ? 'group-hover:scale-110 transition-transform duration-200' : ''
                                                }`}>
                                                <contact.icon className="h-5 w-5 text-white" />
                                            </div>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="text-sm font-medium text-text-secondary mb-1">
                                                {contact.label}
                                            </h4>
                                            <p className={`text-text-primary font-medium ${contact.href ? 'group-hover:text-gold-500 transition-colors duration-200' : ''
                                                }`}>
                                                {contact.value}
                                            </p>
                                        </div>
                                        {contact.href && (
                                            <div className="flex-shrink-0">
                                                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gold-500/20 text-gold-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                                    <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                    </svg>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="bg-background-secondary border border-border-primary rounded-lg p-6">
                            <h4 className="text-lg font-semibold text-text-primary mb-3">
                                Por que Escolher Assessoria Jurídica Profissional?
                            </h4>
                            <ul className="space-y-2 text-text-secondary">
                                <li className="flex items-start gap-2">
                                    <span className="text-gold-500 mt-1">•</span>
                                    <span>Orientação especializada em processos jurídicos complexos</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-gold-500 mt-1">•</span>
                                    <span>Proteção dos seus direitos e interesses</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-gold-500 mt-1">•</span>
                                    <span>Habilidades de negociação para alcançar resultados favoráveis</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-gold-500 mt-1">•</span>
                                    <span>Tranquilidade sabendo que seu caso está sendo tratado adequadamente</span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-background-secondary border border-border-primary rounded-lg p-6 lg:p-8 hover:shadow-lg transition-all duration-300"
                    >
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold text-text-primary mb-2">
                                Envie uma Mensagem
                            </h3>
                            <p className="text-text-secondary">
                                Preencha o formulário abaixo e retornarei em até 24 horas.
                            </p>
                        </div>

                        <ContactForm />
                    </motion.div>
                </div>
            </div>
        </section>
    )
} 