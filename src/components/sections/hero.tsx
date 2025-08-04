"use client"

import { Button } from "@/components/ui/button"
import { Shield, Users, TrendingUp, Star } from "lucide-react"
import { motion } from "framer-motion"

const stats = [
    { id: 1, name: "Anos de Experiência", value: "5+", icon: Users },
    { id: 2, name: "Casos Resolvidos", value: "200+", icon: Shield },
    { id: 3, name: "Taxa de Sucesso", value: "90%", icon: TrendingUp },
]

export function Hero() {
    return (
        <section id="home" className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20 sm:pt-24">
            {/* Background decoration */}
            <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
                <div
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-600 to-indigo-600 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
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
                    className="absolute top-20 right-10 w-20 h-20 bg-blue-500/20 rounded-full"
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
                    className="absolute bottom-20 left-10 w-16 h-16 bg-indigo-500/20 rounded-full"
                />
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24 lg:px-8">
                <div className="mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        {/* Coluna da Esquerda - Informações */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-center lg:text-left"
                        >
                            <div className="flex items-center justify-center lg:justify-start mb-4 sm:mb-6">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                                    className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 sm:px-4 sm:py-2 shadow-lg border border-white/20"
                                >
                                    <Star className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 fill-current" />
                                    <span className="text-xs sm:text-sm font-medium text-gray-200">Advogada Jovem e Dinâmica</span>
                                </motion.div>
                            </div>

                            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white lg:text-5xl xl:text-6xl">
                                Dra. Geovanna Nery
                            </h1>
                            <h2 className="mt-3 sm:mt-4 text-lg sm:text-xl lg:text-2xl font-semibold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                                Advogada Especialista em Direito Civil e Trabalhista
                            </h2>
                            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-300 max-w-2xl mx-auto lg:mx-0">
                                Com mais de 5 anos de experiência na área jurídica, ofereço assessoria
                                personalizada e soluções eficazes para seus problemas legais.
                            </p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                                className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-6"
                            >
                                <Button size="lg" asChild className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 border-0 flex flex-row items-center justify-center gap-2 w-full sm:w-auto">
                                    <a href="#contact">
                                        <span className="relative z-10 flex flex-row items-center gap-2">Agende uma Consulta
                                            <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                        </span>
                                    </a>
                                </Button>
                                <Button variant="outline" size="lg" asChild className="group border-slate-600 text-gray-200 hover:bg-slate-700 hover:text-white bg-transparent flex flex-row items-center justify-center gap-2 w-full sm:w-auto">
                                    <a href="#services">
                                        <span className="flex flex-row items-center gap-2">Ver Áreas de Atuação
                                            <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </span>
                                    </a>
                                </Button>
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
                                    className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-500/20 blur-xl"
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
                                    className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-72 lg:h-72 xl:w-80 xl:h-80 mx-auto"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="w-full h-full rounded-full overflow-hidden border-4 border-slate-700 shadow-2xl">
                                        <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                                            {/* Placeholder para foto - você pode substituir por uma imagem real */}
                                            <div className="text-center text-gray-400">
                                                <svg className="w-24 h-24 sm:w-32 sm:h-32 lg:w-28 lg:h-28 xl:w-32 xl:h-32 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                                </svg>
                                                <p className="text-sm sm:text-base font-medium">Dra. Geovanna Nery</p>
                                                <p className="text-xs sm:text-sm text-gray-500">Advogada</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Badge de credibilidade */}
                                <motion.div
                                    className="absolute -bottom-2 -right-2 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 1, type: "spring", stiffness: 200 }}
                                >
                                    OAB/DF
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
                            {stats.map((stat, index) => (
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
                                    <motion.div
                                        className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500/20 to-indigo-500/20 shadow-lg group-hover:shadow-xl transition-shadow duration-300 border border-blue-500/30"
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400" />
                                    </motion.div>
                                    <dt className="mt-3 sm:mt-4 text-base sm:text-lg font-semibold leading-7 text-gray-200 text-center">
                                        {stat.name}
                                    </dt>
                                    <dd className="mt-1 sm:mt-2 text-2xl sm:text-3xl font-bold leading-10 tracking-tight bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                                        {stat.value}
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