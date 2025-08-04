"use client"

import React from 'react'
import { SectionProps } from '@/types'

/**
 * Section Component
 * Provides a consistent base structure for all main sections
 */
export function Section({
    id,
    children,
    className = "",
    backgroundPattern = false,
    container = true
}: SectionProps) {
    return (
        <section id={id} className={`relative py-8 sm:py-12 lg:py-16 xl:py-20 ${className}`}>
            {backgroundPattern && (
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-100 via-neutral-50 to-neutral-100">
                    <div
                        className="absolute inset-0 opacity-5"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                        }}
                    />
                </div>
            )}
            <div className="relative z-10">
                {container ? (
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        {children}
                    </div>
                ) : (
                    children
                )}
            </div>
        </section>
    )
} 