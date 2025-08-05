"use client"

import React from 'react'
import { cn } from '@/lib/core'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gold'
    size?: 'sm' | 'md' | 'lg'
    children: React.ReactNode
}

/**
 * Button Component
 * Reusable button component with multiple variants and sizes
 */
export function Button({
    variant = 'primary',
    size = 'md',
    className = '',
    children,
    ...props
}: ButtonProps) {
    const baseClasses = 'inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

    const variantClasses = {
        primary: 'bg-secondary-600 text-white hover:bg-secondary-700 shadow-md hover:shadow-lg',
        secondary: 'bg-background-secondary text-text-primary border border-border-secondary hover:bg-background-tertiary shadow-md hover:shadow-lg',
        outline: 'border border-border-secondary bg-background-primary text-text-primary hover:bg-background-secondary hover:text-text-primary',
        ghost: 'text-text-primary hover:bg-background-secondary hover:text-text-primary',
        gold: 'bg-gold-500 text-white hover:bg-gold-600 shadow-md hover:shadow-lg dark:bg-gold-600 dark:hover:bg-gold-700'
    }

    const sizeClasses = {
        sm: 'px-3 py-1.5 text-sm rounded-md',
        md: 'px-4 py-2 text-base rounded-lg',
        lg: 'px-6 py-3 text-lg rounded-lg'
    }

    return (
        <button
            className={cn(
                baseClasses,
                variantClasses[variant],
                sizeClasses[size],
                className
            )}
            {...props}
        >
            {children}
        </button>
    )
} 