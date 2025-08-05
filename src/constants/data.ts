/**
 * Dados específicos para o advogado
 * Template reutilizável para diferentes advogados
 */

import {
    Mail,
    MapPin,
    Clock,
    Award,
    Gavel,
    TrendingUp,
    Heart,
    Building,
    Home,
    Activity,
    Scale,
    DollarSign,
    MessageCircle
} from 'lucide-react'

// ============================================================================
// DADOS DO ADVOGADO
// ============================================================================

export const LAWYER_DATA = {
    lawyer: {
        name: "Dra. Geovanna Nery",
        fullName: "Geovanna Nery da Silva",
        title: "Advogada Especialista em Direito Civil, Empresarial e Família",
        description: "Com mais de 8 anos de experiência na área jurídica, ofereço assessoria personalizada e soluções eficazes para seus problemas legais. Especializada em direito civil, empresarial e família, com foco em resultados e satisfação do cliente.",
        detailedDescription: "Dra. Geovanna Nery é uma advogada experiente e dedicada, especializada em Direito Civil, Empresarial e Família. Com mais de 8 anos de atuação na área jurídica, ela oferece assessoria personalizada e soluções eficazes para seus clientes. Formada pela Universidade de São Paulo (USP) e inscrita na OAB/SP, Dra. Geovanna se destaca pela ética, transparência e compromisso com os melhores resultados. Sua abordagem humanizada e técnica garante que cada caso receba a atenção especial que merece, independentemente da complexidade.",
        credentials: {
            bar: "OAB/SP",
            location: "São Paulo, SP"
        },
        statistics: {
            experience: "8+",
            casesResolved: "300+",
            successRate: "92%"
        },
        contact: {
            email: "geovanna.nery@advocacia.com.br",
            phone: "(11) 99999-9999",
            workingHours: "Segunda a Sexta: 9h às 18h"
        },
        photo: {
            placeholder: "Dra. Geovanna Nery",
            alt: "Advogada Geovanna Nery"
        }
    },

    services: [
        {
            id: "civil-law",
            title: "Direito Civil",
            description: "Assessoria completa em questões civis, contratos e responsabilidade civil.",
            icon: Scale,
            features: [
                "Contratos civis",
                "Responsabilidade civil",
                "Direito do consumidor",
                "Direito de propriedade"
            ],
            gradient: "from-yellow-500 to-orange-500",
            category: "civil" as const
        },
        {
            id: "business-law",
            title: "Direito Empresarial",
            description: "Assessoria jurídica completa para empresas de todos os portes.",
            icon: Building,
            features: [
                "Contratos comerciais",
                "Direito societário",
                "Recuperação judicial",
                "Compliance empresarial"
            ],
            gradient: "from-yellow-500 to-orange-500",
            category: "business" as const
        },
        {
            id: "family-law",
            title: "Direito de Família",
            description: "Assessoria especializada em questões familiares com sensibilidade.",
            icon: Heart,
            features: [
                "Divórcio consensual",
                "Guarda de filhos",
                "Pensão alimentícia",
                "Inventário e partilha"
            ],
            gradient: "from-yellow-500 to-orange-500",
            category: "family" as const
        },
        {
            id: "real-estate-law",
            title: "Direito Imobiliário",
            description: "Assessoria completa em transações imobiliárias e questões de propriedade.",
            icon: Home,
            features: [
                "Compra e venda",
                "Locação residencial",
                "Regularização imobiliária",
                "Condomínios"
            ],
            gradient: "from-yellow-500 to-orange-500",
            category: "real-estate" as const
        },
        {
            id: "health-law",
            title: "Direito à Saúde",
            description: "Defesa dos direitos do paciente e questões relacionadas à saúde.",
            icon: Activity,
            features: [
                "Planos de saúde",
                "Medicamentos",
                "Tratamentos médicos",
                "Responsabilidade médica"
            ],
            gradient: "from-yellow-500 to-orange-500",
            category: "health" as const
        },
        {
            id: "tax-law",
            title: "Direito Tributário",
            description: "Assessoria em questões fiscais e tributárias para pessoas físicas e jurídicas.",
            icon: DollarSign,
            features: [
                "Planejamento tributário",
                "Recursos fiscais",
                "Compliance tributário",
                "Auditoria fiscal"
            ],
            gradient: "from-yellow-500 to-orange-500",
            category: "tax" as const
        }
    ],

    contactInfo: [
        {
            icon: MessageCircle,
            label: "WhatsApp",
            value: "(11) 99999-9999",
            type: "whatsapp" as const,
            href: "https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma consulta jurídica."
        },
        {
            icon: Mail,
            label: "Email",
            value: "geovannanery@gmail.com",
            type: "email" as const,
            href: "mailto:geovanna.nery@advocacia.com.br"
        },
        {
            icon: MapPin,
            label: "Escritório",
            value: "São Paulo, SP",
            type: "address" as const,
            href: "https://maps.google.com/?q=São+Paulo,SP"
        },
        {
            icon: Clock,
            label: "Horário de Atendimento",
            value: "Segunda a Sexta: 9h às 18h",
            type: "hours" as const
        },
    ],

    statistics: [
        {
            id: 1,
            name: "Anos de Experiência",
            value: "8+",
            icon: Award
        },
        {
            id: 2,
            name: "Casos Resolvidos",
            value: "300+",
            icon: Gavel
        },
        {
            id: 3,
            name: "Taxa de Sucesso",
            value: "92%",
            icon: TrendingUp
        }
    ],

    aboutSection: {
        highlights: [
            "OAB/SP - Advogada Licenciada",
            "8+ Anos de Experiência Jurídica",
            "São Paulo, SP"
        ],
        whyChooseUs: [
            "Mais de 300 casos resolvidos com sucesso",
            "Atendimento personalizado e dedicado",
            "Comunicação transparente durante todo o processo",
            "Compromisso com os melhores resultados",
            "Especialização em múltiplas áreas do direito"
        ]
    }
} 