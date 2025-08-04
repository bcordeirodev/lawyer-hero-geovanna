"use client"

import { motion } from "framer-motion"
import { servicesConfig } from "@/lib/config"
import { useTheme } from "@/contexts/ThemeContext"
import {
    FileText,
    Leaf
} from 'lucide-react'

/**
 * Componente Services - Seção de especialidades jurídicas
 * Exibe os serviços oferecidos pelo advogado
 */
export function Services() {
    const { theme, isDark } = useTheme()

    // Serviços adicionais para completar 6 itens
    const additionalServices = []

    const allServices = [...servicesConfig, ...additionalServices]

    return (
        <section id="services" className="relative py-12 sm:py-16 lg:py-20 xl:py-24 bg-background-primary">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                <div className="text-center mb-12 sm:mb-16">
                    <div className="inline-flex items-center gap-2 bg-secondary-500/10 text-secondary-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
                        ⚖️ Áreas de Atuação
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
                        Especialidades Jurídicas
                    </h2>
                    <p className="text-lg text-text-secondary max-w-3xl mx-auto">
                        Especializado em diversas áreas do direito, ofereço assessoria jurídica completa e personalizada para suas necessidades.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {allServices.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            className="group"
                        >
                            <div className="bg-background-secondary border border-border-primary rounded-lg p-6 hover:shadow-lg transition-all duration-300 h-full">
                                <div className="mb-4">
                                    <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${service.gradient} shadow-lg mb-4`}>
                                        <service.icon className="h-6 w-6 text-white" />
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-semibold text-text-primary group-hover:text-secondary-500 transition-colors duration-300 mb-2">
                                        {service.title}
                                    </h3>
                                    <p className="text-text-secondary text-sm sm:text-base mb-4">
                                        {service.description}
                                    </p>
                                </div>
                                <ul className="space-y-2 sm:space-y-3">
                                    {service.features.map((feature, featureIndex) => (
                                        <motion.li
                                            key={feature}
                                            className="flex items-center text-xs sm:text-sm text-text-secondary transition-colors duration-300"
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{
                                                delay: index * 0.1 + featureIndex * 0.1,
                                                duration: 0.3
                                            }}
                                        >
                                            <div className={`mr-2 sm:mr-3 h-1.5 w-1.5 rounded-full bg-gradient-to-r ${service.gradient}`} />
                                            {feature}
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
} 