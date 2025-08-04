/**
 * Sample data configurations for different countries
 * Provides realistic examples for the Lawyer Hero template
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
    Clock,
    Award,
    Briefcase,
    Home,
    Heart,
    Scale,
    Gavel,
    Activity,
    Building,
    Monitor,
    Leaf,
    DollarSign
} from 'lucide-react'

import { Lawyer, LegalService, ContactInfo, Statistic, AboutSection } from '@/types'

// ============================================================================
// US SAMPLE DATA
// ============================================================================

export const US_SAMPLE_DATA = {
    lawyer: {
        name: "Sarah Johnson, Esq.",
        title: "Experienced Attorney Specializing in Civil Litigation & Family Law",
        description: "With over 15 years of experience in the legal field, I provide comprehensive legal services with a focus on civil litigation and family law. I am committed to delivering personalized legal solutions and ensuring the best possible outcomes for my clients.",
        credentials: {
            bar: "New York State Bar",
            location: "New York, NY"
        },
        statistics: {
            experience: "15+",
            casesResolved: "500+",
            successRate: "95%"
        },
        contact: {
            email: "sarah.johnson@lawfirm.com",
            phone: "(212) 555-0123",
            workingHours: "Monday - Friday: 9:00 AM - 6:00 PM"
        },
        photo: {
            placeholder: "Sarah Johnson, Esq.",
            alt: "Attorney Sarah Johnson"
        }
    },

    services: [
        {
            id: "tax-law",
            title: "Direito Tributário",
            description: "Assessoria completa em questões fiscais e tributárias para pessoas físicas e jurídicas.",
            icon: DollarSign,
            features: [
                "Planejamento tributário",
                "Recursos fiscais",
                "Compliance tributário",
                "Auditoria fiscal"
            ],
            gradient: "from-yellow-500 to-orange-500",
            category: "tax" as const
        },
        {
            id: "real-estate-law",
            title: "Direito Imobiliário",
            description: "Complete legal services for real estate transactions and property disputes.",
            icon: Home,
            features: [
                "Property transactions",
                "Landlord-tenant disputes",
                "Zoning issues",
                "Property development"
            ],
            gradient: "from-yellow-500 to-orange-500",
            category: "real-estate" as const
        },
        {
            id: "civil-law",
            title: "Direito Civil",
            description: "Comprehensive civil law services for individuals and businesses.",
            icon: Scale,
            features: [
                "Contract disputes",
                "Personal injury",
                "Property rights",
                "Civil litigation"
            ],
            gradient: "from-yellow-500 to-orange-500",
            category: "civil" as const
        },
        {
            id: "business-law",
            title: "Direito Empresarial",
            description: "Especialista na assessoria jurídica de empresas.",
            icon: Building,
            features: [
                "Contratos",
                "Societário",
                "Recuperação judicial",
                "Compliance empresarial"
            ],
            gradient: "from-yellow-500 to-orange-500",
            category: "business" as const
        },
        {
            id: "health-law",
            title: "Direito à Saúde",
            description: "Especialista na defesa dos direitos do paciente.",
            icon: Activity,
            features: [
                "Medicamentos",
                "Tratamentos",
                "Planos de saúde",
                "Direitos do paciente"
            ],
            gradient: "from-yellow-500 to-orange-500",
            category: "health" as const
        },
        {
            id: "family-law",
            title: "Direito de Família",
            description: "Comprehensive family law services with compassion and expertise.",
            icon: Heart,
            features: [
                "Divorce proceedings",
                "Child custody",
                "Alimony support",
                "Family mediation"
            ],
            gradient: "from-yellow-500 to-orange-500",
            category: "family" as const
        }
    ],

    contactInfo: [
        {
            icon: Phone,
            label: "Phone",
            value: "(212) 555-0123",
            type: "phone" as const
        },
        {
            icon: Mail,
            label: "Email",
            value: "sarah.johnson@lawfirm.com",
            type: "email" as const
        },
        {
            icon: MapPin,
            label: "Office",
            value: "New York, NY",
            type: "address" as const
        },
        {
            icon: Clock,
            label: "Business Hours",
            value: "Monday - Friday: 9:00 AM - 6:00 PM",
            type: "hours" as const
        }
    ],

    statistics: [
        {
            id: 1,
            name: "Years of Experience",
            value: "15+",
            icon: Award
        },
        {
            id: 2,
            name: "Cases Resolved",
            value: "500+",
            icon: Gavel
        },
        {
            id: 3,
            name: "Success Rate",
            value: "95%",
            icon: TrendingUp
        }
    ],

    aboutSection: {
        highlights: [
            "New York State Bar - Licensed Attorney",
            "15+ Years of Legal Experience",
            "New York, NY"
        ],
        whyChooseUs: [
            "Proven track record with over 500 successful cases",
            "Personalized attention and dedicated representation",
            "Transparent communication throughout the legal process",
            "Commitment to achieving the best possible outcomes",
            "Experienced attorney with deep legal expertise"
        ]
    }
}

// ============================================================================
// UK SAMPLE DATA
// ============================================================================

export const UK_SAMPLE_DATA = {
    lawyer: {
        name: "James Wilson, QC",
        title: "Barrister Specializing in Commercial Law & Civil Litigation",
        description: "With over 20 years of experience at the Bar, I provide expert legal counsel in commercial law and civil litigation. I am committed to delivering exceptional legal services with the highest standards of professional excellence.",
        credentials: {
            bar: "Bar Council",
            location: "London, UK"
        },
        statistics: {
            experience: "20+",
            casesResolved: "300+",
            successRate: "92%"
        },
        contact: {
            email: "james.wilson@chambers.co.uk",
            phone: "+44 20 7123 4567",
            workingHours: "Monday - Friday: 9:00 AM - 6:00 PM"
        },
        photo: {
            placeholder: "James Wilson, QC",
            alt: "Barrister James Wilson"
        }
    }
}

// ============================================================================
// BRAZIL SAMPLE DATA
// ============================================================================

export const BR_SAMPLE_DATA = {
    lawyer: {
        name: "Dra. Maria Silva",
        title: "Advogada Especialista em Direito Civil e Trabalhista",
        description: "Com mais de 10 anos de experiência na área jurídica, ofereço assessoria personalizada e soluções eficazes para seus problemas legais.",
        credentials: {
            bar: "OAB/SP",
            location: "São Paulo, SP"
        },
        statistics: {
            experience: "10+",
            casesResolved: "200+",
            successRate: "90%"
        },
        contact: {
            email: "maria.silva@advocacia.com.br",
            phone: "(11) 99999-9999",
            workingHours: "Segunda a Sexta: 9h às 18h"
        },
        photo: {
            placeholder: "Dra. Maria Silva",
            alt: "Advogada Maria Silva"
        }
    }
} 