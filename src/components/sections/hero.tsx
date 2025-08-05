"use client"

import { lawyerConfig, statisticsConfig } from "@/lib/core"
import { motion } from "framer-motion"
import { useTheme } from "@/contexts/ThemeContext"

/**
 * Componente Hero - Seção principal da página
 * Exibe informações do advogado, call-to-action e estatísticas
 */
export function Hero() {
    const { theme } = useTheme()

    return (
        <section className="relative overflow-hidden pt-12 sm:pt-16 lg:pt-20 bg-background-tertiary">
            {/* Background decoration */}
            <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
                <div
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-secondary-500 to-secondary-600 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>

            {/* Floating elements - hidden on mobile */}
            <div className="absolute inset-0 overflow-hidden hidden sm:block">
                <motion.div
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 5, 0],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-20 right-10 w-20 h-20 bg-secondary-500/20 rounded-full"
                />
                <motion.div
                    animate={{
                        y: [0, 20, 0],
                        rotate: [0, -5, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2,
                    }}
                    className="absolute bottom-20 left-10 w-16 h-16 bg-secondary-600/20 rounded-full"
                />
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
                <div className="mx-auto max-w-6xl lg:max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        {/* Coluna da Esquerda - Informações */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-center lg:text-left"
                        >
                            <motion.div
                                className="flex items-center justify-center lg:justify-start mb-4 sm:mb-6"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                <motion.div
                                    className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-500/20 to-gold-600/20 text-gold-600 px-4 py-2 rounded-full text-sm font-semibold border border-gold-500/30 shadow-lg backdrop-blur-sm"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <svg className="h-3 w-3 sm:h-4 sm:w-4 text-gold-500 fill-current" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                    <span className="text-xs sm:text-sm font-medium">Advogada Jovem e Dinâmica</span>
                                </motion.div>
                            </motion.div>

                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-text-primary via-gold-500 to-text-primary bg-clip-text text-transparent drop-shadow-sm text-center lg:text-left">
                                {lawyerConfig.name}
                            </h1>
                            <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold bg-gradient-to-r from-secondary-600 to-secondary-500 bg-clip-text text-transparent text-center lg:text-left">
                                {lawyerConfig.title}
                            </p>
                            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-text-secondary max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
                                {lawyerConfig.description}
                            </p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                                className="mt-6 sm:mt-8 lg:mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 lg:gap-6"
                            >
                                <button className="group relative overflow-hidden flex flex-row items-center justify-center gap-2 w-full sm:w-auto bg-gold-500 hover:bg-gold-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg">
                                    <a href="#contact" className="text-white">
                                        <span className="relative z-10 flex flex-row items-center gap-2 text-white">Agende uma Consulta
                                            <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                        </span>
                                    </a>
                                </button>
                                <button className="group flex flex-row items-center justify-center gap-2 w-full sm:w-auto border border-border-secondary text-text-primary hover:bg-background-secondary px-6 py-3 rounded-lg font-medium transition-all duration-200">
                                    <a href="#services">
                                        <span className="flex flex-row items-center gap-2">Ver Áreas de Atuação
                                            <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </span>
                                    </a>
                                </button>
                            </motion.div>
                        </motion.div>

                        {/* Coluna da Direita - Foto */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            className="flex justify-center lg:justify-end"
                        >
                            <div className="relative">
                                {/* Anel decorativo */}
                                <motion.div
                                    className="absolute inset-0 rounded-full bg-gradient-to-r from-secondary-500/20 to-secondary-600/20 blur-xl"
                                    animate={{
                                        scale: [1, 1.1, 1],
                                        opacity: [0.5, 0.8, 0.5],
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                />

                                {/* Foto de perfil */}
                                <motion.div
                                    className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-72 lg:h-72 xl:w-80 xl:h-80 mx-auto"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="w-full h-full rounded-full overflow-hidden border-4 border-border-secondary shadow-2xl">
                                        <div className="w-full h-full bg-background-secondary flex items-center justify-center">
                                            {/* Placeholder para foto - você pode substituir por uma imagem real */}
                                            <div className="text-center text-text-muted">
                                                <svg className="w-24 h-24 sm:w-32 sm:h-32 lg:w-28 lg:h-28 xl:w-32 xl:h-32 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                                </svg>
                                                <p className="text-sm text-text-muted">{lawyerConfig.photo.placeholder}</p>
                                                <p className="text-sm text-text-muted">Attorney</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Badge de credibilidade */}
                                <motion.div
                                    className="absolute -bottom-2 -right-2 bg-gold-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 1, type: "spring", stiffness: 200 }}
                                >
                                    {lawyerConfig.credentials.bar}
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Estatísticas */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                        className="mx-auto mt-12 sm:mt-16 max-w-2xl lg:mt-20 lg:max-w-none"
                    >
                        <dl className="grid max-w-xl grid-cols-1 gap-8 sm:gap-x-8 sm:gap-y-16 lg:max-w-none lg:grid-cols-3">
                            {statisticsConfig.map((stat, index) => (
                                <motion.div
                                    key={stat.id}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: 0.8 + index * 0.2,
                                        type: "spring",
                                        stiffness: 100
                                    }}
                                    whileHover={{
                                        scale: 1.05,
                                        transition: { duration: 0.2 }
                                    }}
                                    className="flex flex-col items-center group"
                                >
                                    <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-lg bg-gradient-to-br from-secondary-500 to-secondary-600 shadow-lg">
                                        <stat.icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                                    </div>
                                    <dt className="mt-3 sm:mt-4 text-base sm:text-lg font-semibold leading-7 text-text-primary text-center">
                                        {stat.name}
                                    </dt>
                                    <dd className="mt-1 sm:mt-2 text-2xl sm:text-3xl font-bold leading-10 tracking-tight">
                                        <span className="bg-gradient-to-r from-secondary-600 to-secondary-500 bg-clip-text text-transparent">{stat.value}</span>
                                    </dd>
                                </motion.div>
                            ))}
                        </dl>
                    </motion.div>
                </div>
            </div>
        </section>
    )
} 