"use client"

import { motion } from "framer-motion"
import { servicesConfig } from "@/lib/config"
import { useTheme } from "@/contexts/ThemeContext"
import Link from "next/link"


/**
 * Componente Services - Seção de especialidades jurídicas
 * Exibe os serviços oferecidos pelo advogado
 */
export function Services() {


    // Serviços adicionais para completar 6 itens
    const additionalServices: never[] = []

    const allServices = [...servicesConfig, ...additionalServices]

    return (
        <section id="services" className="relative py-8 sm:py-12 lg:py-16 xl:py-20 bg-background-primary">
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
                        ⚖️ Áreas de Atuação
                    </motion.div>
                    <motion.h2
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-text-primary via-gold-500 to-text-primary bg-clip-text text-transparent mb-4 drop-shadow-sm hover:scale-105 transition-transform duration-300 cursor-default"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        whileHover={{ scale: 1.02 }}
                    >
                        Especialidades Jurídicas
                    </motion.h2>
                    <p className="text-lg text-text-secondary max-w-3xl mx-auto">
                        Especializada em diversas áreas do direito, ofereço assessoria jurídica completa e personalizada para suas necessidades.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
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
                            <Link href={`/servicos/${service.id}`} className="block h-full">
                                <div className="bg-background-secondary border border-border-primary rounded-lg p-4 sm:p-6 hover:shadow-lg transition-all duration-300 h-full cursor-pointer">
                                    <div className="mb-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-gold-500 to-gold-600 shadow-lg mb-4">
                                            <service.icon className="h-6 w-6 text-white" />
                                        </div>
                                        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-text-primary group-hover:text-secondary-500 transition-colors duration-300 mb-2">
                                            {service.title}
                                        </h3>
                                        <p className="text-text-secondary text-xs sm:text-sm md:text-base mb-4">
                                            {service.description}
                                        </p>
                                    </div>
                                    <ul className="space-y-2 sm:space-y-3">
                                        {service.features.map((feature: string, featureIndex: number) => (
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
                                                <div className="mr-2 sm:mr-3 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-gold-500 to-gold-600" />
                                                {feature}
                                            </motion.li>
                                        ))}
                                    </ul>
                                    <div className="mt-4 pt-4 border-t border-border-primary">
                                        <span className="text-xs text-gold-500 font-medium">
                                            Saiba mais →
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
} 