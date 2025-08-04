"use client"

import { motion } from "framer-motion"
import { Award, GraduationCap, MapPin, Phone, Mail, Clock, CheckCircle, Star } from "lucide-react"

export function About() {
    return (
        <section id="about" className="py-16 sm:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-none">
                    <div className="grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <div className="inline-flex items-center rounded-full bg-blue-500/10 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-blue-400 mb-4 sm:mb-6">
                                <Star className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                                Sobre Mim
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white lg:text-4xl xl:text-5xl">
                                Dra. Geovanna Nery
                            </h2>
                            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-300">
                                Sou Dra. Geovanna Nery, advogada jovem e dinâmica com mais de 5 anos de experiência
                                na área jurídica. Atuo em Brasília-DF e dedico minha carreira a oferecer assessoria
                                jurídica de qualidade e personalizada para cada cliente.
                            </p>
                            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-300">
                                Minha missão é proporcionar soluções jurídicas eficazes, sempre priorizando a ética,
                                a transparência e o compromisso com meus clientes. Acredito que cada caso é único e
                                merece atenção especial, independentemente da complexidade.
                            </p>

                            <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
                                <motion.div
                                    className="flex items-center space-x-3 p-3 bg-slate-800/50 rounded-lg backdrop-blur-sm border border-slate-700"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Award className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400" />
                                    <span className="text-sm sm:text-base text-gray-200 font-medium">OAB/DF - Inscrita recentemente</span>
                                </motion.div>
                                <motion.div
                                    className="flex items-center space-x-3 p-3 bg-slate-800/50 rounded-lg backdrop-blur-sm border border-slate-700"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400" />
                                    <span className="text-sm sm:text-base text-gray-200 font-medium">Formação em Direito</span>
                                </motion.div>
                                <motion.div
                                    className="flex items-center space-x-3 p-3 bg-slate-800/50 rounded-lg backdrop-blur-sm border border-slate-700"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400" />
                                    <span className="text-sm sm:text-base text-gray-200 font-medium">Brasília, DF</span>
                                </motion.div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            className="space-y-6 sm:space-y-8"
                        >
                            <motion.div
                                className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg border border-slate-700"
                                whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.3)" }}
                                transition={{ duration: 0.3 }}
                            >
                                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 flex items-center">
                                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 mr-2" />
                                    Por que escolher meus serviços?
                                </h3>
                                <ul className="space-y-2 sm:space-y-3">
                                    {[
                                        "Experiência comprovada em mais de 200 casos",
                                        "Atendimento personalizado e humanizado",
                                        "Transparência total nos processos",
                                        "Compromisso com prazos e resultados",
                                        "Advocacia jovem e dinâmica"
                                    ].map((item, index) => (
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
                            </motion.div>

                            <motion.div
                                className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg border border-slate-700"
                                whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.3)" }}
                                transition={{ duration: 0.3 }}
                            >
                                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 flex items-center">
                                    <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 mr-2" />
                                    Informações de Contato
                                </h3>
                                <div className="space-y-2 sm:space-y-3">
                                    <motion.div
                                        className="flex items-center space-x-3 p-2 rounded-lg hover:bg-slate-700/50 transition-colors"
                                        whileHover={{ x: 5 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400" />
                                        <span className="text-sm sm:text-base text-gray-200 font-medium">(61) 99999-9999</span>
                                    </motion.div>
                                    <motion.div
                                        className="flex items-center space-x-3 p-2 rounded-lg hover:bg-slate-700/50 transition-colors"
                                        whileHover={{ x: 5 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400" />
                                        <span className="text-sm sm:text-base text-gray-200 font-medium">geovanna.nery@email.com</span>
                                    </motion.div>
                                    <motion.div
                                        className="flex items-center space-x-3 p-2 rounded-lg hover:bg-slate-700/50 transition-colors"
                                        whileHover={{ x: 5 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400" />
                                        <span className="text-sm sm:text-base text-gray-200 font-medium">Segunda a Sexta: 9h às 18h</span>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
} 