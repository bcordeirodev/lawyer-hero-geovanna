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
        <section id="contact" className="relative py-12 sm:py-16 lg:py-20 xl:py-24 bg-background-primary">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                <div className="text-center mb-12 sm:mb-16">
                    <div className="inline-flex items-center gap-2 bg-secondary-500/10 text-secondary-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
                        📞 Get In Touch
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
                        Contact Us
                    </h2>
                    <p className="text-lg text-text-secondary max-w-3xl mx-auto">
                        Ready to discuss your legal matter? Get in touch with us for a consultation.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl font-semibold text-text-primary mb-6">
                                Let&apos;s Discuss Your Case
                            </h3>
                            <p className="text-text-secondary leading-relaxed">
                                I&apos;m here to help you navigate your legal challenges. Whether you need
                                consultation, representation, or just have questions, I&apos;m committed to
                                providing you with the guidance and support you deserve.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {contactConfig.map((contact: ContactInfo, index: number) => (
                                <motion.div
                                    key={contact.type}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="bg-background-secondary border border-border-primary rounded-lg p-6 hover:shadow-lg transition-all duration-300"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-gold-500 to-gold-600 shadow-lg">
                                                <contact.icon className="h-5 w-5 text-white" />
                                            </div>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="text-sm font-medium text-text-secondary mb-1">
                                                {contact.label}
                                            </h4>
                                            <p className="text-text-primary font-medium">
                                                {contact.value}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="bg-background-secondary border border-border-primary rounded-lg p-6">
                            <h4 className="text-lg font-semibold text-text-primary mb-3">
                                Why Choose Professional Legal Counsel?
                            </h4>
                            <ul className="space-y-2 text-text-secondary">
                                <li className="flex items-start gap-2">
                                    <span className="text-gold-500 mt-1">•</span>
                                    <span>Expert guidance through complex legal processes</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-gold-500 mt-1">•</span>
                                    <span>Protection of your rights and interests</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-gold-500 mt-1">•</span>
                                    <span>Negotiation skills to achieve favorable outcomes</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-gold-500 mt-1">•</span>
                                    <span>Peace of mind knowing your case is handled properly</span>
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
                                Send Us a Message
                            </h3>
                            <p className="text-text-secondary">
                                Fill out the form below and I&apos;ll get back to you within 24 hours.
                            </p>
                        </div>

                        <ContactForm />
                    </motion.div>
                </div>
            </div>
        </section>
    )
} 