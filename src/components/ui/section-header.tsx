"use client"

import React from 'react'
import { SectionHeaderProps } from '@/types'

/**
 * SectionHeader Component
 * Reusable header component for sections with badge, title, and description
 */
export function SectionHeader({
    badge,
    title,
    description,
    className = ""
}: SectionHeaderProps) {
    return (
        <div className={`text-center mb-12 sm:mb-16 lg:mb-20 ${className}`}>
            {/* Badge */}
            {badge && (
                <div className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent mb-4">
                    {badge.icon && (
                        <span className="mr-2">{badge.icon}</span>
                    )}
                    {badge.text}
                </div>
            )}

            {/* Title */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-foreground via-gold-500 to-foreground bg-clip-text text-transparent mb-4 sm:mb-6 drop-shadow-sm">
                {title}
            </h2>

            {/* Description */}
            {description && (
                <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    {description}
                </p>
            )}
        </div>
    )
} 