"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Section, SectionHeader, AnimatedCard } from "@/components/ui"
import { servicesConfig } from "@/lib/config"

/**
 * Componente Services - Seção de especialidades jurídicas
 * Exibe os serviços oferecidos pelo advogado
 */
export function Services() {
    return (
        <Section id="services" backgroundPattern>
            <SectionHeader
                badge={{ text: "Áreas de Atuação" }}
                title="Especialidades Jurídicas"
                description="Especializado em diversas áreas do direito, ofereço assessoria jurídica completa e personalizada para suas necessidades."
            />

            <div className="mx-auto mt-12 sm:mt-16 max-w-2xl lg:mt-20 lg:max-w-none">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-3 xl:grid-cols-4">
                    {servicesConfig.map((service, index) => (
                        <AnimatedCard key={service.title} index={index}>
                            <Card className="h-full hover:shadow-2xl transition-all duration-300 group border-0 bg-slate-800/80 backdrop-blur-sm border-slate-700">
                                <CardHeader className="pb-3 sm:pb-4 px-4 sm:px-6">
                                    <motion.div
                                        className={`flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-gradient-to-br ${service.gradient} shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                                        whileHover={{
                                            scale: 1.1,
                                            rotate: 5,
                                            transition: { duration: 0.3 }
                                        }}
                                    >
                                        <service.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                                    </motion.div>
                                    <CardTitle className="text-base sm:text-lg group-hover:text-blue-400 transition-colors duration-300 text-white">
                                        {service.title}
                                    </CardTitle>
                                    <CardDescription className="text-sm sm:text-base text-gray-300">
                                        {service.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="px-4 sm:px-6">
                                    <ul className="space-y-2 sm:space-y-3">
                                        {service.features.map((feature, featureIndex) => (
                                            <motion.li
                                                key={feature}
                                                className="flex items-center text-xs sm:text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300"
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{
                                                    delay: index * 0.1 + featureIndex * 0.1,
                                                    duration: 0.3
                                                }}
                                            >
                                                <div className={`mr-2 sm:mr-3 h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full bg-gradient-to-r ${service.gradient}`} />
                                                {feature}
                                            </motion.li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </AnimatedCard>
                    ))}
                </div>
            </div>
        </Section>
    )
} 