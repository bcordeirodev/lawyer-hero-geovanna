"use client"

/**
 * Componente About - Seção sobre o advogado
 * Exibe informações pessoais e profissionais
 */
import { motion } from "framer-motion"
import { Section, AnimatedCard } from "@/components/ui"
import { lawyerConfig, aboutConfig } from "@/lib/config"

export function About() {
    return (
        <Section id="about">
            <div className="mx-auto max-w-6xl lg:max-w-7xl">
                <div className="grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="inline-flex items-center rounded-full bg-blue-500/10 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-blue-400 mb-4 sm:mb-6">
                            <svg className="h-3 w-3 sm:h-4 sm:w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                            Sobre Mim
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white lg:text-4xl xl:text-5xl">
                            {lawyerConfig.name}
                        </h2>
                        <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-300">
                            Sou {lawyerConfig.name}, advogada jovem e dinâmica com mais de {lawyerConfig.experience} anos de experiência
                            na área jurídica. Atuo em {lawyerConfig.location} e dedico minha carreira a oferecer assessoria
                            jurídica de qualidade e personalizada para cada cliente.
                        </p>
                        <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-300">
                            Minha missão é proporcionar soluções jurídicas eficazes, sempre priorizando a ética,
                            a transparência e o compromisso com meus clientes. Acredito que cada caso é único e
                            merece atenção especial, independentemente da complexidade.
                        </p>

                        <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
                            {aboutConfig.highlights.map((highlight, index) => (
                                <motion.div
                                    key={highlight}
                                    className="flex items-center space-x-3 p-3 bg-slate-800/50 rounded-lg backdrop-blur-sm border border-slate-700"
                                    whileHover={{ scale: 1.02 }}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.2, delay: index * 0.1 }}
                                >
                                    <svg className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                    <span className="text-sm sm:text-base text-gray-200 font-medium">{highlight}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="space-y-6 sm:space-y-8"
                    >
                        <AnimatedCard>
                            <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg border border-slate-700">
                                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 flex items-center">
                                    <svg className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Por que escolher meus serviços?
                                </h3>
                                <ul className="space-y-2 sm:space-y-3">
                                    {aboutConfig.whyChooseUs.map((item, index) => (
                                        <motion.li
                                            key={item}
                                            className="flex items-start space-x-3"
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <div className="flex-shrink-0 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full mt-1.5 sm:mt-2" />
                                            <span className="text-sm sm:text-base text-gray-300">{item}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </AnimatedCard>

                        <AnimatedCard index={1}>
                            <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg border border-slate-700">
                                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 flex items-center">
                                    <svg className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    Informações de Contato
                                </h3>
                                <div className="space-y-2 sm:space-y-3">
                                    <motion.div
                                        className="flex items-center space-x-3 p-2 rounded-lg hover:bg-slate-700/50 transition-colors"
                                        whileHover={{ x: 5 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <svg className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        <span className="text-sm sm:text-base text-gray-200 font-medium">{lawyerConfig.phone}</span>
                                    </motion.div>
                                    <motion.div
                                        className="flex items-center space-x-3 p-2 rounded-lg hover:bg-slate-700/50 transition-colors"
                                        whileHover={{ x: 5 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <svg className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        <span className="text-sm sm:text-base text-gray-200 font-medium">{lawyerConfig.email}</span>
                                    </motion.div>
                                    <motion.div
                                        className="flex items-center space-x-3 p-2 rounded-lg hover:bg-slate-700/50 transition-colors"
                                        whileHover={{ x: 5 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <svg className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span className="text-sm sm:text-base text-gray-200 font-medium">{lawyerConfig.workingHours}</span>
                                    </motion.div>
                                </div>
                            </div>
                        </AnimatedCard>
                    </motion.div>
                </div>
            </div>
        </Section>
    )
} 