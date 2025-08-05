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
            placeholder: "Dra. Geovanna Nery",
            alt: "Advogada Geovanna Nery - Especialista em Direito Civil e Família"
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
            category: "civil" as const
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
            category: "business" as const
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
            category: "family" as const
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
                "Condomínios e assembleias"
            ],
            gradient: "from-yellow-500 to-orange-500",
            category: "real-estate" as const
        },
        {
            id: "health-law",
            title: "Direito à Saúde",
            description: "Defendo seus direitos como paciente. Trabalho para garantir que você receba o tratamento e medicamentos que precisa.",
            icon: Activity,
            features: [
                "Planos de saúde e cobertura",
                "Medicamentos de alto custo",
                "Tratamentos médicos e cirúrgicos",
                "Responsabilidade médica e hospitalar"
            ],
            gradient: "from-yellow-500 to-orange-500",
            category: "health" as const
        },
        {
            id: "tax-law",
            title: "Direito Tributário",
            description: "Otimizo sua situação fiscal com planejamento tributário inteligente. Reduza impostos dentro da legalidade.",
            icon: DollarSign,
            features: [
                "Planejamento tributário pessoal",
                "Recursos fiscais e administrativos",
                "Compliance tributário empresarial",
                "Auditoria e regularização fiscal"
            ],
            gradient: "from-yellow-500 to-orange-500",
            category: "tax" as const
        }
    ],

    contactInfo: [
        {
            icon: MessageCircle,
            label: "WhatsApp",
            value: "(61) 99999-9999",
            type: "whatsapp" as const,
            href: "https://wa.me/5561999999999?text=Olá Dra. Geovanna! Gostaria de agendar uma consulta jurídica. Pode me ajudar?"
        },
        {
            icon: Mail,
            label: "Email",
            value: "geovanna.nery@advocacia.com.br",
            type: "email" as const,
            href: "mailto:geovanna.nery@advocacia.com.br"
        },
        {
            icon: MapPin,
            label: "Escritório",
            value: "Brasília, DF",
            type: "address" as const,
            href: "https://maps.google.com/?q=Brasília,DF"
        },
        {
            icon: Clock,
            label: "Horário de Atendimento",
            value: "Segunda a Sexta: 9h às 18h | Sábados: 9h às 12h",
            type: "hours" as const
        },
    ],

    statistics: [
        {
            id: 1,
            name: "Anos de Experiência",
            value: "5+",
            icon: Award
        },
        {
            id: 2,
            name: "Casos Resolvidos",
            value: "200+",
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
            "OAB/DF 123.456 - Advogada Licenciada",
            "5+ Anos de Experiência Jurídica",
            "Brasília, DF - Atendimento Presencial e Online"
        ],
        whyChooseUs: [
            "Mais de 200 casos resolvidos com sucesso",
            "Atendimento personalizado e dedicado a cada cliente",
            "Comunicação transparente durante todo o processo",
            "Compromisso total com os melhores resultados",
            "Especialização em múltiplas áreas do direito",
            "Disponibilidade para consultas online e presenciais"
        ]
    }
} 