import {
    BookOpen,
    Briefcase,
    Gavel,
    Heart
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
    category: 'civil' | 'business' | 'family' | 'labor' | 'tax'
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
        title: "Especialista em Direito Civil e Tributário, com atuação também em outras áreas do Direito",
        description: "Sou advogada com atuação dedicada na busca de soluções jurídicas eficazes. Acredito que cada cliente é único e que cada caso exige atenção personalizada, estratégia e comprometimento. Por isso, me envolvo diretamente em cada demanda, com ética, excelência técnica e foco em resultados, oferecendo um atendimento jurídico completo e de confiança.",
        detailedDescription: "Sou advogada com atuação dedicada na busca de soluções jurídicas eficazes e personalizadas. Acredito que cada cliente é único e que cada caso exige atenção personalizada, estratégia cuidadosa e comprometimento total. Por isso, me envolvo diretamente em cada demanda, sempre com ética, excelência técnica e foco em resultados, oferecendo um atendimento jurídico completo e de confiança para aqueles que buscam defender seus direitos.",
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
            src: "/images/geovanna-perfil.png",
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
            icon: Heart,
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
            gradient: "from-cyan-600 via-sky-500 to-blue-500",
            category: "labor"
        },
        {
            id: "labor-law",
            title: "Direito do Trabalho",
            description: "Assessoria jurídica completa para empregados e empregadores, com foco na resolução de conflitos trabalhistas.",
            icon: Gavel,
            features: [
                "Verbas rescisórias, FGTS e horas extras",
                "Reconhecimento de vínculo empregatício",
                "Assédio moral e sexual no trabalho",
                "Estabilidade e reintegração no cargo",
                "Defesa em reclamações trabalhistas"
            ],
            gradient: "from-orange-600 via-amber-500 to-yellow-500",
            category: "labor"
        },
        {
            id: "tax-law",
            title: "Direito Tributário",
            description: "Suporte jurídico para enfrentar cobranças indevidas, regularizar pendências fiscais e planejar com eficiência.",
            icon: BookOpen,
            features: [
                "Defesa em execuções fiscais",
                "Restituição de tributos pagos indevidamente",
                "Planejamento e consultoria tributária",
                "Impugnação de autos de infração",
                "Regularização fiscal e parcelamentos"
            ],
            gradient: "from-emerald-600 via-green-500 to-teal-500",
            category: "tax"
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
            "Atuação jurídica atualizada com as mais recentes mudanças legislativas",
            "Mais de 5 anos de experiência jurídica",
            "Atendimento personalizado e profissional",
            "Formação acadêmica sólida e atualizada"
        ],
        whyChooseUs: [
            "Compromisso com resultados e ética profissional;",
            "Atuação estratégica, com foco na solução do seu problema;",
            "Atendimento personalizado e humanizado;",
            "Experiência e atualização constante em diversas áreas do Direito;",
            "Defesa dos seus direitos com seriedade e transparência."
        ]
    }
} 