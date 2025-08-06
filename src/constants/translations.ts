/**
 * Translations for the Lawyer Hero template
 * Supports Portuguese and English languages
 */

export type Language = 'pt' | 'en'

export interface Translation {
    // Navigation
    nav: {
        home: string
        services: string
        about: string
        contact: string
    }

    // Hero Section
    hero: {
        title: string
        subtitle: string
        description: string
        cta: string
        scrollDown: string
    }

    // Services Section
    services: {
        title: string
        subtitle: string
        learnMore: string
    }

    // About Section
    about: {
        title: string
        subtitle: string
        experience: string
        casesResolved: string
        successRate: string
        credentials: string
        whyChooseUs: string
    }

    // Contact Section
    contact: {
        title: string
        subtitle: string
        form: {
            name: string
            email: string
            phone: string
            subject: string
            message: string
            send: string
            sending: string
            success: string
            error: string
        }
        info: {
            address: string
            phone: string
            email: string
            hours: string
        }
    }

    // Footer
    footer: {
        description: string
        specialties: string
        contact: string
        rights: string
        developedBy: string
    }

    // Common
    common: {
        years: string
        cases: string
        rate: string
        readMore: string
        contactUs: string
        workingHours: string
        emergency: string
    }
}

export const translations: Record<Language, Translation> = {
    pt: {
        nav: {
            home: 'Início',
            services: 'Serviços',
            about: 'Sobre',
            contact: 'Contato'
        },
        hero: {
            title: 'Advocacia Especializada',
            subtitle: 'Soluções Jurídicas Personalizadas',
            description: 'Oferecemos assessoria jurídica completa e personalizada para proteger seus direitos e interesses.',
            cta: 'Agende uma Consulta',
            scrollDown: 'Role para baixo'
        },
        services: {
            title: 'Especialidades Jurídicas',
            subtitle: 'Áreas de atuação especializadas para atender suas necessidades jurídicas',
            learnMore: 'Saiba mais'
        },
        about: {
            title: 'Experiência Profissional',
            subtitle: 'Conheça nossa trajetória e credenciais',
            experience: 'Anos de Experiência',
            casesResolved: 'Casos Resolvidos',
            successRate: 'Taxa de Sucesso',
            credentials: 'Credenciais e Certificações',
            whyChooseUs: 'Por que Escolher Nossa Assessoria?'
        },
        contact: {
            title: 'Entre em Contato',
            subtitle: 'Estamos aqui para ajudar com suas questões jurídicas',
            form: {
                name: 'Nome',
                email: 'Email',
                phone: 'Telefone',
                subject: 'Assunto',
                message: 'Mensagem',
                send: 'Enviar Mensagem',
                sending: 'Enviando...',
                success: 'Mensagem enviada com sucesso!',
                error: 'Erro ao enviar mensagem. Tente novamente.'
            },
            info: {
                address: 'Endereço',
                phone: 'Telefone',
                email: 'Email',
                hours: 'Horário de Atendimento'
            }
        },
        footer: {
            description: 'Advocacia especializada com foco em resultados e satisfação do cliente.',
            specialties: 'Áreas de Atuação',
            contact: 'Contato',
            rights: 'Todos os direitos reservados',
            developedBy: 'Desenvolvido por'
        },
        common: {
            years: 'Anos',
            cases: 'Casos',
            rate: 'Taxa',
            readMore: 'Leia mais',
            contactUs: 'Entre em contato',
            workingHours: 'Horário de Funcionamento',
            emergency: 'Emergência'
        }
    },
    en: {
        nav: {
            home: 'Home',
            services: 'Services',
            about: 'About',
            contact: 'Contact'
        },
        hero: {
            title: 'Specialized Legal Services',
            subtitle: 'Personalized Legal Solutions',
            description: 'We offer complete and personalized legal advice to protect your rights and interests.',
            cta: 'Schedule a Consultation',
            scrollDown: 'Scroll down'
        },
        services: {
            title: 'Legal Specialties',
            subtitle: 'Specialized practice areas to meet your legal needs',
            learnMore: 'Learn more'
        },
        about: {
            title: 'Professional Experience',
            subtitle: 'Learn about our trajectory and credentials',
            experience: 'Years of Experience',
            casesResolved: 'Cases Resolved',
            successRate: 'Success Rate',
            credentials: 'Credentials and Certifications',
            whyChooseUs: 'Why Choose Our Legal Services?'
        },
        contact: {
            title: 'Get in Touch',
            subtitle: 'We are here to help with your legal matters',
            form: {
                name: 'Name',
                email: 'Email',
                phone: 'Phone',
                subject: 'Subject',
                message: 'Message',
                send: 'Send Message',
                sending: 'Sending...',
                success: 'Message sent successfully!',
                error: 'Error sending message. Please try again.'
            },
            info: {
                address: 'Address',
                phone: 'Phone',
                email: 'Email',
                hours: 'Business Hours'
            }
        },
        footer: {
            description: 'Specialized legal services focused on results and client satisfaction.',
            specialties: 'Practice Areas',
            contact: 'Contact',
            rights: 'All rights reserved',
            developedBy: 'Developed by'
        },
        common: {
            years: 'Years',
            cases: 'Cases',
            rate: 'Rate',
            readMore: 'Read more',
            contactUs: 'Contact us',
            workingHours: 'Business Hours',
            emergency: 'Emergency'
        }
    }
}

export const defaultLanguage: Language = 'pt'

export function getTranslation(language: Language): Translation {
    return translations[language] || translations[defaultLanguage]
}

export function isValidLanguage(language: string): language is Language {
    return language in translations
} 