"use client"

import { ServiceIcon, StaggerContainer, StaggerItem, StandardSection } from "@/components/ui"
import { LAWYER_CONFIG } from "@/config"
import { cn } from "@/lib/core/utils"
import { motion } from "framer-motion"

/**
 * Componente Services - Seção de especialidades jurídicas
 * Exibe os serviços oferecidos pelo advogado
 * Refatorado para usar componentes padronizados
 */
export function Services() {
    const allServices = LAWYER_CONFIG.services

    return (
        <StandardSection
            id="services"
            badge="Especialidades Jurídicas"
            title="Áreas de Atuação"
            description="Atuação jurídica especializada com atendimento ético, profissional e personalizado"
            background="secondary"
        >
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {allServices.map((service, index) => (
                    <StaggerItem key={service.title}>
                        <motion.div
                            whileHover={{ y: -4 }}
                            className={cn(
                                "group rounded-2xl p-4 sm:p-5 lg:p-6 transition-all duration-200 h-full",
                                "bg-white dark:bg-slate-900/70",
                                "border border-gray-200 dark:border-slate-700 shadow-sm",
                                "hover:shadow-lg hover:border-gold-600/30 hover:-translate-y-1"
                            )}
                        >
                            <div className="mb-4 sm:mb-5 lg:mb-6 flex justify-center items-center">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.1,
                                        ease: "easeOut",
                                        type: "spring",
                                        stiffness: 100
                                    }}
                                >
                                    <ServiceIcon
                                        icon={service.icon}
                                        serviceType={service.category}
                                        size="lg"
                                    />
                                </motion.div>
                            </div>
                            <h3 className={cn(
                                "text-base sm:text-lg md:text-xl font-semibold mb-2 text-center",
                                "text-gray-900 dark:text-white"
                            )}>
                                {service.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm md:text-base mb-4 sm:mb-5 lg:mb-6 text-center leading-relaxed">
                                {service.description}
                            </p>
                            <ul className="space-y-1.5 sm:space-y-2">
                                {service.features.map((feature: string) => (
                                    <li
                                        key={feature}
                                        className="service-feature-item relative z-10"
                                    >
                                        <div className={cn(
                                            "service-feature-bullet transition-transform duration-150 group-hover:scale-110"
                                        )} />
                                        <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </StaggerItem>
                ))}
            </StaggerContainer>
        </StandardSection>
    )
} 