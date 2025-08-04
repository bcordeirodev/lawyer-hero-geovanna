/**
 * Configuração centralizada da aplicação
 * Template reutilizável para sites de advogados
 */

import {
    FileText,
    Calendar,
    Users,
    Shield,
    TrendingUp,
    MessageSquare,
    Database,
    Zap,
    Phone,
    Mail,
    MapPin,
    Clock
} from 'lucide-react'

// ============================================================================
// CONFIGURAÇÃO DO ADVOGADO
// ============================================================================

export const lawyerConfig = {
    // Informações básicas
    name: "Dra. Geovanna Nery",
    title: "Advogada Especialista em Direito Civil e Trabalhista",
    description: "Com mais de 5 anos de experiência na área jurídica, ofereço assessoria personalizada e soluções eficazes para seus problemas legais.",

    // Credenciais
    oab: "OAB/DF",
    location: "Brasília, DF",

    // Estatísticas
    experience: "5+",
    casesResolved: "200+",
    successRate: "90%",

    // Contato
    email: "geovanna.nery@email.com",
    phone: "(61) 99999-9999",
    workingHours: "Segunda a Sexta: 9h às 18h",

    // Foto
    photoPlaceholder: "Dra. Geovanna Nery"
}

// ============================================================================
// SERVIÇOS/ESPECIALIDADES
// ============================================================================

export const servicesConfig = [
    {
        title: "Direito Civil",
        description: "Especializado em contratos, responsabilidade civil, direito de família e sucessões.",
        icon: FileText,
        features: ["Contratos e acordos", "Responsabilidade civil", "Direito de família"],
        gradient: "from-blue-500 to-cyan-500"
    },
    {
        title: "Direito Trabalhista",
        description: "Assessoria completa em questões trabalhistas e previdenciárias.",
        icon: Calendar,
        features: ["Rescisão de contratos", "Horas extras", "Acidentes de trabalho"],
        gradient: "from-green-500 to-emerald-500"
    },
    {
        title: "Direito do Consumidor",
        description: "Defesa dos direitos do consumidor em todas as esferas.",
        icon: Users,
        features: ["Problemas com produtos", "Serviços inadequados", "Cobranças indevidas"],
        gradient: "from-purple-500 to-pink-500"
    },
    {
        title: "Direito Previdenciário",
        description: "Especialista em benefícios previdenciários e aposentadoria.",
        icon: Shield,
        features: ["Aposentadoria", "Auxílio-doença", "Pensão por morte"],
        gradient: "from-orange-500 to-red-500"
    },
    {
        title: "Direito Empresarial",
        description: "Assessoria jurídica para empresas e empreendedores.",
        icon: TrendingUp,
        features: ["Constituição de empresas", "Contratos comerciais", "Compliance"],
        gradient: "from-indigo-500 to-blue-500"
    },
    {
        title: "Direito Imobiliário",
        description: "Especializado em questões relacionadas a imóveis e propriedade.",
        icon: MessageSquare,
        features: ["Compra e venda", "Locação", "Regularização"],
        gradient: "from-teal-500 to-green-500"
    },
    {
        title: "Direito de Família",
        description: "Assessoria em divórcios, guarda de filhos e pensão alimentícia.",
        icon: Database,
        features: ["Divórcio", "Guarda de filhos", "Pensão alimentícia"],
        gradient: "from-pink-500 to-rose-500"
    },
    {
        title: "Direito Sucessório",
        description: "Especialista em inventários, testamentos e heranças.",
        icon: Zap,
        features: ["Inventários", "Testamentos", "Heranças"],
        gradient: "from-yellow-500 to-orange-500"
    }
]

// ============================================================================
// INFORMAÇÕES DE CONTATO
// ============================================================================

export const contactConfig = [
    {
        icon: Phone,
        label: "Telefone",
        value: "(61) 99999-9999"
    },
    {
        icon: Mail,
        label: "E-mail",
        value: "geovanna.nery@email.com"
    },
    {
        icon: MapPin,
        label: "Endereço",
        value: "Brasília, DF"
    },
    {
        icon: Clock,
        label: "Horário de Atendimento",
        value: "Segunda a Sexta: 9h às 18h"
    }
]

// ============================================================================
// ESTATÍSTICAS
// ============================================================================

export const statisticsConfig = [
    {
        id: 1,
        name: "Anos de Experiência",
        value: "5+",
        icon: Users
    },
    {
        id: 2,
        name: "Casos Resolvidos",
        value: "200+",
        icon: Shield
    },
    {
        id: 3,
        name: "Taxa de Sucesso",
        value: "90%",
        icon: TrendingUp
    }
]

// ============================================================================
// FORMULÁRIO DE CONTATO
// ============================================================================

export const formConfig = {
    subjects: [
        { value: "", label: "Selecione um assunto" },
        { value: "consulta", label: "Agendar Consulta" },
        { value: "duvida", label: "Dúvida Jurídica" },
        { value: "orçamento", label: "Solicitar Orçamento" },
        { value: "outro", label: "Outro" }
    ]
}

// ============================================================================
// SEÇÃO SOBRE
// ============================================================================

export const aboutConfig = {
    highlights: [
        "OAB/DF - Inscrita recentemente",
        "Formação em Direito",
        "Brasília, DF"
    ],
    whyChooseUs: [
        "Experiência comprovada em mais de 200 casos",
        "Atendimento personalizado e humanizado",
        "Transparência total nos processos",
        "Compromisso com prazos e resultados",
        "Advocacia jovem e dinâmica"
    ]
}

// ============================================================================
// CONFIGURAÇÃO GERAL DA APLICAÇÃO
// ============================================================================

export const appConfig = {
    lawyer: lawyerConfig,
    services: servicesConfig,
    contactInfo: contactConfig,
    statistics: statisticsConfig,
    formSubjects: formConfig.subjects,
    aboutHighlights: aboutConfig.highlights,
    whyChooseUs: aboutConfig.whyChooseUs
}

// ============================================================================
// INSTRUÇÕES DE USO DO TEMPLATE
// ============================================================================

/**
 * COMO PERSONALIZAR ESTE TEMPLATE:
 * 
 * 1. ADVOGADO:
 *    - Altere lawyerConfig com as informações do advogado
 *    - Substitua a foto no componente Hero
 * 
 * 2. SERVIÇOS:
 *    - Edite servicesConfig para adicionar/remover especialidades
 *    - Use ícones do lucide-react: https://lucide.dev/icons/
 *    - Personalize gradientes: "from-[cor]-500 to-[cor]-500"
 * 
 * 3. CONTATO:
 *    - Atualize contactConfig com dados reais
 *    - Configure formConfig.subjects para assuntos específicos
 * 
 * 4. CORES E TEMA:
 *    - O template usa tema escuro por padrão
 *    - Cores principais: slate-900, blue-500, indigo-500
 *    - Gradientes: from-blue-500 to-indigo-500
 * 
 * 5. DEPLOY:
 *    - Conecte ao GitHub
 *    - Deploy automático no Vercel
 *    - Domínio personalizado opcional
 * 
 * 6. FUNCIONALIDADES:
 *    - Formulário de contato (requer backend)
 *    - Animações com Framer Motion
 *    - Design responsivo
 *    - SEO otimizado
 */ 