import {
    Activity,
    Building,
    Heart,
    Home,
    Scale,
    TrendingUp
} from 'lucide-react'

export interface LawyerCredentials {
    bar: string
    location: string
}

export interface LawyerStatistics {
    experience: string
    casesResolved: string
    successRate: string
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
        title: "Advogada Especialista em Direito Civil, Empresarial e Família",
        description: "Olá! Sou a Dra. Geovanna Nery, advogada recém-inscrita na OAB/DF, mas com mais de 5 anos de experiência na área jurídica. Acredito que cada caso é único e merece atenção especial. Minha missão é oferecer soluções práticas e eficazes, sempre com transparência e dedicação.",
        detailedDescription: "Sou a Dra. Geovanna Nery, uma advogada que acredita no poder transformador do direito. Formada em Direito e com mais de 5 anos de experiência na área jurídica, acabei de conquistar minha inscrição na OAB/DF, um sonho que persegui com determinação. Ao longo desses anos, trabalhei em diferentes setores do direito, desenvolvendo uma visão abrangente e prática das necessidades jurídicas das pessoas. Especializada em Direito Civil, Empresarial e Família, aprendi que cada cliente tem uma história única e que a melhor advocacia é aquela que combina conhecimento técnico com sensibilidade humana. Trabalho com ética, transparência e compromisso total com os resultados dos meus clientes. Acredito que o sucesso na advocacia não se mede apenas pelos casos ganhos, mas pela confiança construída e pela tranquilidade que proporcionamos às pessoas que confiam em nosso trabalho.",
        credentials: {
            bar: "OAB/DF 123.456",
            location: "Brasília, DF"
        },
        statistics: {
            experience: "5+",
            casesResolved: "200+",
            successRate: "92%"
        },
        contact: {
            email: "geovanna.nery@advocacia.com.br",
            phone: "(61) 99999-9999",
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
            description: "Protejo seus direitos civis com assessoria completa e personalizada. Desde contratos até questões de responsabilidade, estou aqui para defender seus interesses.",
            icon: Scale,
            features: [
                "Contratos civis e comerciais",
                "Responsabilidade civil e danos morais",
                "Direito do consumidor e proteção",
                "Direito de propriedade e posse"
            ],
            gradient: "from-yellow-500 to-orange-500",
            category: "civil"
        },
        {
            id: "business-law",
            title: "Direito Empresarial",
            description: "Acompanho o crescimento da sua empresa com assessoria jurídica estratégica. Do planejamento à resolução de conflitos, sua empresa em boas mãos.",
            icon: Building,
            features: [
                "Contratos comerciais e empresariais",
                "Direito societário e governança",
                "Recuperação judicial e extrajudicial",
                "Compliance e adequação legal"
            ],
            gradient: "from-yellow-500 to-orange-500",
            category: "business"
        },
        {
            id: "family-law",
            title: "Direito de Família",
            description: "Entendo que questões familiares são delicadas e pessoais. Ofereço assessoria com sensibilidade e respeito, sempre priorizando o bem-estar da família.",
            icon: Heart,
            features: [
                "Divórcio consensual e litigioso",
                "Guarda compartilhada e unilateral",
                "Pensão alimentícia e revisional",
                "Inventário e partilha de bens"
            ],
            gradient: "from-yellow-500 to-orange-500",
            category: "family"
        },
        {
            id: "real-estate-law",
            title: "Direito Imobiliário",
            description: "Realizo seu sonho da casa própria com segurança jurídica. Assessoria completa em todas as etapas da transação imobiliária.",
            icon: Home,
            features: [
                "Compra, venda e permuta",
                "Locação residencial e comercial",
                "Regularização e usucapião",
                "Condomínio e administração"
            ],
            gradient: "from-yellow-500 to-orange-500",
            category: "real-estate"
        },
        {
            id: "labor-law",
            title: "Direito do Trabalho",
            description: "Defendo seus direitos trabalhistas com conhecimento e determinação. Do reconhecimento de vínculo à rescisão, estou ao seu lado.",
            icon: Activity,
            features: [
                "Reconhecimento de vínculo empregatício",
                "Rescisão de contrato e verbas rescisórias",
                "Horas extras e adicional noturno",
                "Assédio moral e danos morais"
            ],
            gradient: "from-yellow-500 to-orange-500",
            category: "labor"
        },
        {
            id: "digital-law",
            title: "Direito Digital",
            description: "Protejo seus direitos no mundo digital. Assessoria em questões de tecnologia, internet e proteção de dados pessoais.",
            icon: TrendingUp,
            features: [
                "Proteção de dados pessoais (LGPD)",
                "Direitos autorais e propriedade intelectual",
                "Contratos digitais e e-commerce",
                "Crimes cibernéticos e segurança digital"
            ],
            gradient: "from-yellow-500 to-orange-500",
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
            "Direito do Trabalho",
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
            "Especialização em Direito Civil e Empresarial",
            "Mais de 5 anos de experiência jurídica",
            "Atendimento personalizado e transparente",
            "Compromisso com resultados eficazes"
        ],
        whyChooseUs: [
            "Atendimento personalizado e dedicado",
            "Transparência em todos os processos",
            "Experiência em casos complexos",
            "Compromisso com prazos e resultados"
        ]
    }
} 