"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react"

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
        <section id="contact" className="py-16 sm:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="inline-flex items-center rounded-full bg-blue-500/10 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-blue-400 mb-4 sm:mb-6">
                            <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                            Entre em Contato
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white lg:text-4xl xl:text-5xl">
                            Vamos Conversar?
                        </h2>
                        <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-300 px-4 sm:px-0">
                            Estou aqui para ajudar você. Entre em contato para agendar uma consulta
                            ou esclarecer suas dúvidas.
                        </p>
                    </motion.div>
                </div>

                <div className="mx-auto mt-12 sm:mt-16 max-w-2xl lg:mt-20 lg:max-w-none">
                    <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <Card className="border-0 bg-slate-800/80 backdrop-blur-sm shadow-xl border-slate-700">
                                <CardHeader className="px-4 sm:px-6">
                                    <CardTitle className="flex items-center text-lg sm:text-xl text-white">
                                        <Send className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 mr-2" />
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
                                                    <option value="">Selecione um assunto</option>
                                                    <option value="consulta">Agendar Consulta</option>
                                                    <option value="duvida">Dúvida Jurídica</option>
                                                    <option value="orçamento">Solicitar Orçamento</option>
                                                    <option value="outro">Outro</option>
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
                                                <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            className="space-y-4 sm:space-y-6"
                        >
                            <motion.div
                                className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-xl border border-slate-700"
                                whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.3)" }}
                                transition={{ duration: 0.3 }}
                            >
                                <CardHeader className="pb-3 sm:pb-4 px-0">
                                    <CardTitle className="flex items-center text-lg sm:text-xl text-white">
                                        <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 mr-2" />
                                        Informações de Contato
                                    </CardTitle>
                                    <CardDescription className="text-sm sm:text-base text-gray-300">
                                        Entre em contato através dos canais abaixo:
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-3 sm:space-y-4 px-0">
                                    {[
                                        { icon: Phone, label: "Telefone", value: "(61) 99999-9999" },
                                        { icon: Mail, label: "E-mail", value: "geovanna.nery@email.com" },
                                        { icon: MapPin, label: "Endereço", value: "Brasília, DF" },
                                        { icon: Clock, label: "Horário de Atendimento", value: "Segunda a Sexta: 9h às 18h" }
                                    ].map((item, index) => (
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
                            </motion.div>

                            <motion.div
                                className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-xl p-4 sm:p-6 shadow-xl border border-blue-500/20"
                                whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.3)" }}
                                transition={{ duration: 0.3 }}
                            >
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
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
} 