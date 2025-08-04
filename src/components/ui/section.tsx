/**
 * Componente Section - Container base para seções
 * Fornece estrutura consistente para todas as seções da página
 */
import React from 'react'

interface SectionProps {
    id: string
    children: React.ReactNode
    className?: string
    backgroundPattern?: boolean
    container?: boolean
}

export function Section({
    id,
    children,
    className = "",
    backgroundPattern = false,
    container = true
}: SectionProps) {
    return (
        <section id={id} className={`relative py-12 sm:py-16 lg:py-20 xl:py-24 ${className}`}>
            {/* Background pattern opcional */}
            {backgroundPattern && (
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                    <div className="absolute inset-0 opacity-10" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                    }} />
                </div>
            )}

            {/* Conteúdo da seção */}
            <div className="relative z-10">
                {container ? (
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
                        {children}
                    </div>
                ) : (
                    children
                )}
            </div>
        </section>
    )
} 