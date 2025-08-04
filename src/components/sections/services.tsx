"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
    FileText,
    Users,
    Shield,
    TrendingUp,
    MessageSquare,
    Database,
    Zap
} from "lucide-react"
import { motion } from "framer-motion"

const services = [
    {
        title: "Direito Civil",
        description: "Especializado em contratos, responsabilidade civil, direito de família e sucessões.",
        icon: FileText,
        features: ["Contratos e acordos", "Responsabilidade civil", "Direito de família"],
        gradient: "from-blue-500 to-cyan-500"
    },
    {
        title: "Direito Trabalhista",
        description: "Assessoria completa em questões trabalhistas e previdenciárias.",
        icon: (props: any) => (
            <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
        ),
        features: ["Rescisão de contratos", "Horas extras", "Acidentes de trabalho"],
        gradient: "from-green-500 to-emerald-500"
    },
    {
        title: "Direito do Consumidor",
        description: "Defesa dos direitos do consumidor em todas as esferas.",
        icon: Users,
        features: ["Problemas com produtos", "Serviços inadequados", "Cobranças indevidas"],
        gradient: "from-purple-500 to-pink-500"
    },
    {
        title: "Direito Previdenciário",
        description: "Especialista em benefícios previdenciários e aposentadoria.",
        icon: Shield,
        features: ["Aposentadoria", "Auxílio-doença", "Pensão por morte"],
        gradient: "from-orange-500 to-red-500"
    },
    {
        title: "Direito Empresarial",
        description: "Assessoria jurídica para empresas e empreendedores.",
        icon: TrendingUp,
        features: ["Constituição de empresas", "Contratos comerciais", "Compliance"],
        gradient: "from-indigo-500 to-blue-500"
    },
    {
        title: "Direito Imobiliário",
        description: "Especializado em questões relacionadas a imóveis e propriedade.",
        icon: MessageSquare,
        features: ["Compra e venda", "Locação", "Regularização"],
        gradient: "from-teal-500 to-green-500"
    },
    {
        title: "Direito de Família",
        description: "Assessoria em divórcios, guarda de filhos e pensão alimentícia.",
        icon: Database,
        features: ["Divórcio", "Guarda de filhos", "Pensão alimentícia"],
        gradient: "from-pink-500 to-rose-500"
    },
    {
        title: "Direito Sucessório",
        description: "Especialista em inventários, testamentos e heranças.",
        icon: Zap,
        features: ["Inventários", "Testamentos", "Heranças"],
        gradient: "from-yellow-500 to-orange-500"
    }
]

export function Services() {
    return (
        <section id="services" className="py-16 sm:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 opacity-50" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="inline-flex items-center rounded-full bg-blue-500/10 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-blue-400 mb-4 sm:mb-6">
                            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full mr-2"></span>
                            Áreas de Atuação
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white lg:text-4xl xl:text-5xl">
                            Especialidades Jurídicas
                        </h2>
                        <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-300 px-4 sm:px-0">
                            Especializado em diversas áreas do direito, ofereço assessoria jurídica
                            completa e personalizada para suas necessidades.
                        </p>
                    </motion.div>
                </div>

                <div className="mx-auto mt-12 sm:mt-16 max-w-2xl lg:mt-20 lg:max-w-none">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-3 xl:grid-cols-4">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                    ease: "easeOut"
                                }}
                                whileHover={{
                                    y: -8,
                                    transition: { duration: 0.3 }
                                }}
                            >
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
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
} 