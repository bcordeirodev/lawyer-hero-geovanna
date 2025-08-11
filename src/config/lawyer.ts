import {
    Briefcase,
    Building,
    Gavel,
    ShieldCheck,
    Smartphone,
    Users
} from 'lucide-react'

export interface LawyerCredentials {
    bar: string
    location: string
}

export interface LawyerStatistics {
    experience: string
    formation: string
    expertise: string
    casesResolved?: string
    successRate?: string
}

export interface LawyerContact {
    email: string
    phone: string
    workingHours: string
}

export interface LawyerPhoto {
    src: string
    placeholder: string
    alt: string
}

export interface LawyerData {
    name: string
    fullName: string
    title: string
    description: string
    detailedDescription: string
    credentials: LawyerCredentials
    statistics: LawyerStatistics
    contact: LawyerContact
    photo: LawyerPhoto
}

import { LucideIcon } from 'lucide-react'

export interface ServiceFeature {
    id: string
    title: string
    description: string
    icon: LucideIcon
    features: string[]
    gradient: string
    category: 'civil' | 'business' | 'family' | 'real-estate' | 'labor' | 'digital'
}

export interface SocialMedia {
    whatsapp: string
    instagram?: string
    linkedin?: string
    facebook?: string
}

// ============================================================================
// FORM CONFIGURATION
// ============================================================================

export interface FormConfig {
    subjects: string[]
    placeholders: {
        name: string
        email: string
        phone: string
        subject: string
        message: string
    }
    labels: {
        name: string
        email: string
        phone: string
        subject: string
        message: string
        submit: string
        loading: string
    }
}

// ============================================================================
// ABOUT SECTION CONFIGURATION
// ============================================================================

export interface AboutConfig {
    highlights: string[]
    whyChooseUs: string[]
}

// ============================================================================
// MAIN LAWYER CONFIGURATION
// ============================================================================

export interface LawyerConfig {
    lawyer: LawyerData
    services: ServiceFeature[]
    socialMedia: SocialMedia
    form: FormConfig
    about: AboutConfig
}

export const LAWYER_CONFIG: LawyerConfig = {
    lawyer: {
        name: "Dra. Geovanna Nery",
        fullName: "Geovanna Nery da Silva",
        title: "Advogada com Atuação em Direito Civil, Empresarial e Família",
        description: "Sou a Dra. Geovanna Nery, advogada inscrita na OAB/DF, com mais de 5 anos de experiência na área jurídica. Atuo com foco em Direito Civil, Empresarial e de Família, oferecendo atuação jurídica diferenciada e atendimento ético e personalizado.",
        detailedDescription: "Sou a Dra. Geovanna Nery, advogada graduada em Direito com mais de 5 anos de experiência na área jurídica e inscrita na OAB/DF. Durante minha trajetória profissional, desenvolvi expertise em diferentes setores do direito, com foco principal em Direito Civil, Empresarial e de Família. Minha atuação profissional é pautada pela ética, transparência e dedicação ao atendimento personalizado. Acredito na importância do conhecimento técnico aliado à sensibilidade para compreender as necessidades específicas de cada cliente. Meu compromisso é com a qualidade do serviço jurídico prestado e o relacionamento de confiança com os clientes.",
        credentials: {
            bar: "OAB/DF",
            location: "Brasília, DF"
        },
        statistics: {
            experience: "5+",
            formation: "Pós-graduada em Direito Civil e Tributário",
            expertise: "Civil, Empresarial e Família"
        },
        contact: {
            email: "geovannanery.adv@gmail.com.br",
            phone: "61 99936-3560",
            workingHours: "Segunda a Sexta: 9h às 18h | Sábados: 9h às 12h"
        },
        photo: {
            src: "/images/geovanna-perfil.jpeg",
            placeholder: "Dra. Geovanna Nery",
            alt: "Dra. Geovanna Nery - Advogada"
        }
    },

    services: [
        {
            id: "civil-law",
            title: "Direito Civil",
            description: "Atuação jurídica em Direito Civil, abrangendo contratos, responsabilidade civil, direito do consumidor e questões de propriedade.",
            icon: Gavel,
            features: [
                "Contratos civis e comerciais",
                "Responsabilidade civil e danos morais",
                "Direito do consumidor e proteção",
                "Direito de propriedade e posse"
            ],
            gradient: "from-amber-600 via-amber-500 to-gold-500",
            category: "civil"
        },
        {
            id: "business-law",
            title: "Direito Empresarial",
            description: "Atuação jurídica empresarial especializada em contratos comerciais, direito societário, recuperação judicial e compliance.",
            icon: Briefcase,
            features: [
                "Contratos comerciais e empresariais",
                "Direito societário e governança",
                "Recuperação judicial e extrajudicial",
                "Compliance e adequação legal"
            ],
            gradient: "from-blue-600 via-indigo-500 to-purple-500",
            category: "business"
        },
        {
            id: "family-law",
            title: "Direito de Família",
            description: "Atuação jurídica em Direito de Família, incluindo divórcio, guarda, pensão alimentícia e inventário, com atendimento personalizado.",
            icon: Users,
            features: [
                "Divórcio consensual e litigioso",
                "Guarda compartilhada e unilateral",
                "Pensão alimentícia e revisional",
                "Inventário e partilha de bens"
            ],
            gradient: "from-rose-500 via-pink-500 to-red-500",
            category: "family"
        },
        {
            id: "real-estate-law",
            title: "Direito Imobiliário",
            description: "Atuação jurídica imobiliária para compra, venda, locação e regularização de imóveis, com análise documental completa.",
            icon: Building,
            features: [
                "Compra, venda e permuta",
                "Locação residencial e comercial",
                "Regularização e usucapião",
                "Condomínio e administração"
            ],
            gradient: "from-green-600 via-emerald-500 to-teal-500",
            category: "real-estate"
        },
        {
            id: "health-law",
            title: "Direito à Saúde",
            description: "Defesa dos seus direitos em relação a planos de saúde, atendimento médico e acesso a tratamentos essenciais.",
            icon: ShieldCheck,
            features: [
                "Ações contra negativa de cobertura por planos de saúde",
                "Fornecimento de medicamentos pelo SUS",
                "Internações e cirurgias urgentes",
                "Tratamentos fora do rol da ANS",
                "Responsabilidade por erro médico"
            ],
            gradient: "from-cyan-600 via-sky-500 to-blue-500",
            category: "labor"
        },
        {
            id: "digital-law",
            title: "Direito Digital",
            description: "Atuação jurídica em Direito Digital, LGPD, propriedade intelectual e contratos digitais para o ambiente tecnológico.",
            icon: Smartphone,
            features: [
                "Proteção de dados pessoais (LGPD)",
                "Direitos autorais e propriedade intelectual",
                "Contratos digitais e e-commerce",
                "Crimes cibernéticos e segurança digital"
            ],
            gradient: "from-violet-600 via-purple-500 to-indigo-500",
            category: "digital"
        }
    ],

    socialMedia: {
        whatsapp: "https://wa.me/5561999999999",
        instagram: "https://instagram.com/geovannanery",
        linkedin: "https://linkedin.com/in/geovannanery",
        facebook: "https://facebook.com/geovannanery"
    },

    form: {
        subjects: [
            "Consulta Jurídica",
            "Direito Civil",
            "Direito Empresarial",
            "Direito de Família",
            "Direito Imobiliário",
            "Direito à Saúde",
            "Direito Digital",
            "Outro"
        ],
        placeholders: {
            name: "Seu nome completo",
            email: "seu@email.com",
            phone: "(61) 99999-9999",
            subject: "Selecione um assunto",
            message: "Descreva sua situação ou dúvida..."
        },
        labels: {
            name: "Nome",
            email: "Email",
            phone: "Telefone",
            subject: "Assunto",
            message: "Mensagem",
            submit: "Enviar Mensagem",
            loading: "Enviando..."
        }
    },

    about: {
        highlights: [
            "Atuação focada em Direito Civil, Empresarial e Família",
            "Mais de 5 anos de experiência jurídica",
            "Atendimento personalizado e profissional",
            "Formação acadêmica sólida e atualizada"
        ],
        whyChooseUs: [
            "Atendimento personalizado e humanizado",
            "Comunicação transparente durante todo o processo",
            "Experiência e atualização constante em diversas áreas do Direito",
            "Atuação diferenciada em múltiplas áreas do direito",
            "Defesa dos seus direitos com seriedade e transparência"
        ]
    }
} 