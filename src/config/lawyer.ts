import {
    Activity,
    Building,
    Heart,
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
        name: "Dr. Alexandre Silva",
        fullName: "Alexandre Silva Santos",
        title: "Advogado Especialista em Direito Civil, Empresarial e Família",
        description: "Olá! Sou o Dr. Alexandre Silva, advogado com sólida experiência na área jurídica. Acredito que cada caso é único e merece atenção especial. Minha missão é oferecer soluções práticas e eficazes, sempre com transparência e dedicação aos meus clientes.",
        detailedDescription: "Sou advogado com vasta experiência e atuação dedicada na busca de soluções jurídicas eficazes. Acredito que cada cliente é único e que cada caso exige atenção personalizada, estratégia e comprometimento. Por isso, me envolvo diretamente em cada demanda, com ética, excelência técnica e foco em resultados, oferecendo um atendimento jurídico completo e de confiança.",
        credentials: {
            bar: "OAB-SP 123.456",
            location: "São Paulo, SP"
        },
        statistics: {
            experience: "8+",
            casesResolved: "500+",
            successRate: "95%"
        },
        contact: {
            email: "contato@alexandresilva.adv.br",
            phone: "(11) 99999-9999",
            workingHours: "Segunda a Sexta: 9h às 18h | Sábados: 9h às 12h"
        },
        photo: {
            src: "/images/lawyer-profile.jpg",
            placeholder: "Dr. Alexandre Silva",
            alt: "Dr. Alexandre Silva - Advogado"
        }
    },

    services: [
        {
            id: "civil-law",
            title: "Direito Civil",
            description: "Protejo seus direitos civis com assessoria completa e personalizada. Desde contratos até questões de responsabilidade, estou aqui para defender seus interesses com eficiência e comprometimento.",
            icon: Scale,
            features: [
                "Contratos civis e comerciais",
                "Responsabilidade civil e indenizações por danos morais e materiais",
                "Direito do consumidor e relações de consumo",
                "Direito de propriedade e ações possessórias",
                "Cobrança de dívidas e execuções cíveis"
            ],
            gradient: "from-yellow-500 to-orange-500",
            category: "civil"
        },
        {
            id: "business-law",
            title: "Direito Empresarial",
            description: "Acompanho o crescimento da sua empresa com assessoria jurídica estratégica. Do planejamento à resolução de conflitos, sua empresa estará sempre bem amparada.",
            icon: Building,
            features: [
                "Contratos comerciais e empresariais",
                "Direito societário e resolução de conflitos entre sócios",
                "Recuperação judicial e extrajudicial de empresas",
                "Compliance, governança e adequação legal",
                "Defesa em execuções fiscais e ações tributárias"
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
                "Guarda compartilhada, unilateral e regulamentação de visitas",
                "Pensão alimentícia, revisional e execução de alimentos",
                "Inventário, partilha de bens e testamentos",
                "Reconhecimento de paternidade e ações de adoção",
                "Medidas protetivas e violência doméstica (Lei Maria da Penha)"
            ],
            gradient: "from-yellow-500 to-orange-500",
            category: "family"
        },
        {
            id: "health-law",
            title: "Direito à Saúde",
            description: "Defesa dos seus direitos em relação a planos de saúde, atendimento médico e acesso a tratamentos essenciais.",
            icon: Heart,
            features: [
                "Ações contra negativa de cobertura por planos de saúde",
                "Fornecimento de medicamentos pelo SUS",
                "Internações e cirurgias urgentes",
                "Tratamentos fora do rol da ANS",
                "Responsabilidade por erro médico"
            ],
            gradient: "from-yellow-500 to-orange-500",
            category: "civil"
        },
        {
            id: "labor-law",
            title: "Direito do Trabalho",
            description: "Assessoria jurídica completa para empregados e empregadores, com foco na resolução de conflitos trabalhistas.",
            icon: Activity,
            features: [
                "Verbas rescisórias, FGTS e horas extras",
                "Reconhecimento de vínculo empregatício",
                "Assédio moral e sexual no trabalho",
                "Estabilidade e reintegração no cargo",
                "Defesa em reclamações trabalhistas"
            ],
            gradient: "from-yellow-500 to-orange-500",
            category: "labor"
        },
        {
            id: "tax-law",
            title: "Direito Tributário",
            description: "Suporte jurídico para enfrentar cobranças indevidas, regularizar pendências fiscais e planejar com eficiência.",
            icon: TrendingUp,
            features: [
                "Defesa em execuções fiscais",
                "Restituição de tributos pagos indevidamente",
                "Planejamento e consultoria tributária",
                "Impugnação de autos de infração",
                "Regularização fiscal e parcelamentos"
            ],
            gradient: "from-yellow-500 to-orange-500",
            category: "business"
        }
    ],

    socialMedia: {
        whatsapp: "https://wa.me/5511999999999",
        instagram: "https://instagram.com/alexandresilvaadv",
        linkedin: "https://linkedin.com/in/alexandresilvaadv",
        facebook: "https://facebook.com/alexandresilvaadv"
    },

    form: {
        subjects: [
            "Consulta Jurídica",
            "Direito Civil",
            "Direito Empresarial",
            "Direito de Família",
            "Direito à Saúde",
            "Direito do Trabalho",
            "Direito Tributário",
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
            "Mais de 8 anos de experiência jurídica",
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