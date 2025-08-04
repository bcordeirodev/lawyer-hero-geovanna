"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Section, SectionHeader, AnimatedCard } from "@/components/ui"
import { contactConfig, formConfig } from "@/lib/config"
import { motion } from "framer-motion"

/**
 * Componente Contact - Seção de contato
 * Exibe formulário de contato e informações de contato
 */
export function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Aqui você pode implementar o envio do formulário
        console.log("Formulário enviado:", formData)
        alert("Mensagem enviada! Entraremos em contato em breve.")
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <Section id="contact" backgroundPattern>
            <SectionHeader
                badge={{
                    icon: <svg className="h-3 w-3 sm:h-4 sm:w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>,
                    text: "Entre em Contato"
                }}
                title="Vamos Conversar?"
                description="Estou aqui para ajudar você. Entre em contato para agendar uma consulta ou esclarecer suas dúvidas."
            />

            <div className="mx-auto mt-12 sm:mt-16 max-w-6xl lg:max-w-7xl lg:mt-20">
                <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2">
                    <AnimatedCard>
                        <Card className="border-0 bg-slate-800/80 backdrop-blur-sm shadow-xl border-slate-700">
                            <CardHeader className="px-4 sm:px-6">
                                <CardTitle className="flex items-center text-lg sm:text-xl text-white">
                                    <svg className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    Envie uma Mensagem
                                </CardTitle>
                                <CardDescription className="text-sm sm:text-base text-gray-300">
                                    Preencha o formulário abaixo e entrarei em contato o mais breve possível.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="px-4 sm:px-6">
                                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.1 }}
                                        >
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">
                                                Nome Completo *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full px-3 py-2.5 sm:px-4 sm:py-3 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-slate-700 text-white placeholder-gray-400 text-sm sm:text-base"
                                                placeholder="Seu nome completo"
                                            />
                                        </motion.div>
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2 }}
                                        >
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
                                                E-mail *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-3 py-2.5 sm:px-4 sm:py-3 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-slate-700 text-white placeholder-gray-400 text-sm sm:text-base"
                                                placeholder="seu@email.com"
                                            />
                                        </motion.div>
                                    </div>

                                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.3 }}
                                        >
                                            <label htmlFor="phone" className="block text-sm font-medium text-gray-200 mb-2">
                                                Telefone
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-3 py-2.5 sm:px-4 sm:py-3 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-slate-700 text-white placeholder-gray-400 text-sm sm:text-base"
                                                placeholder="(61) 99999-9999"
                                            />
                                        </motion.div>
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.4 }}
                                        >
                                            <label htmlFor="subject" className="block text-sm font-medium text-gray-200 mb-2">
                                                Assunto *
                                            </label>
                                            <select
                                                id="subject"
                                                name="subject"
                                                required
                                                value={formData.subject}
                                                onChange={handleChange}
                                                className="w-full px-3 py-2.5 sm:px-4 sm:py-3 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-slate-700 text-white text-sm sm:text-base"
                                            >
                                                {formConfig.subjects.map((subject) => (
                                                    <option key={subject.value} value={subject.value}>
                                                        {subject.label}
                                                    </option>
                                                ))}
                                            </select>
                                        </motion.div>
                                    </div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 }}
                                    >
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">
                                            Mensagem *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={4}
                                            required
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2.5 sm:px-4 sm:py-3 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-slate-700 text-white placeholder-gray-400 resize-none text-sm sm:text-base"
                                            placeholder="Descreva sua situação ou dúvida..."
                                        />
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.6 }}
                                    >
                                        <Button type="submit" className="w-full group relative overflow-hidden">
                                            <span className="relative z-10">Enviar Mensagem</span>
                                            <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                            <motion.div
                                                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600"
                                                initial={{ x: "-100%" }}
                                                whileHover={{ x: "0%" }}
                                                transition={{ duration: 0.3 }}
                                            />
                                        </Button>
                                    </motion.div>
                                </form>
                            </CardContent>
                        </Card>
                    </AnimatedCard>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="space-y-4 sm:space-y-6"
                    >
                        <AnimatedCard>
                            <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-xl border border-slate-700">
                                <CardHeader className="pb-3 sm:pb-4 px-0">
                                    <CardTitle className="flex items-center text-lg sm:text-xl text-white">
                                        <svg className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        Informações de Contato
                                    </CardTitle>
                                    <CardDescription className="text-sm sm:text-base text-gray-300">
                                        Entre em contato através dos canais abaixo:
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-3 sm:space-y-4 px-0">
                                    {contactConfig.map((item, index) => (
                                        <motion.div
                                            key={item.label}
                                            className="flex items-center space-x-3 p-2 sm:p-3 rounded-lg hover:bg-slate-700/50 transition-colors"
                                            whileHover={{ x: 5 }}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1, duration: 0.3 }}
                                        >
                                            <item.icon className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 flex-shrink-0" />
                                            <div>
                                                <p className="font-medium text-sm sm:text-base text-gray-200">{item.label}</p>
                                                <p className="text-xs sm:text-sm text-gray-400">{item.value}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </CardContent>
                            </div>
                        </AnimatedCard>

                        <AnimatedCard index={1}>
                            <div className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-xl p-4 sm:p-6 shadow-xl border border-blue-500/20">
                                <CardHeader className="pb-3 sm:pb-4 px-0">
                                    <CardTitle className="flex items-center text-lg sm:text-xl text-white">
                                        <svg className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        Primeira Consulta
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="px-0">
                                    <p className="text-sm sm:text-base text-gray-300 mb-4">
                                        A primeira consulta é gratuita e tem duração de 30 minutos.
                                        Neste encontro, analisaremos seu caso e definiremos a melhor estratégia.
                                    </p>
                                    <Button
                                        variant="outline"
                                        className="w-full group border-slate-600 text-gray-200 hover:bg-slate-700 hover:text-white bg-slate-700 disabled:bg-slate-700 disabled:text-gray-300 disabled:border-slate-600 flex flex-row items-center justify-center gap-2"
                                        disabled={false}
                                    >
                                        <span className="flex flex-row items-center gap-2">Agendar Consulta Gratuita
                                            <svg className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                        </span>
                                    </Button>
                                </CardContent>
                            </div>
                        </AnimatedCard>
                    </motion.div>
                </div>
            </div>
        </Section>
    )
} 