"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { AnimatedCardProps } from '@/types'

/**
 * AnimatedCard Component
 * Reusable animated card component with hover effects
 */
export function AnimatedCard({
    children,
    index = 0,
    className = "",
    hoverEffect = true
}: AnimatedCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut"
            }}
            whileHover={hoverEffect ? {
                y: -5,
                transition: { duration: 0.2 }
            } : undefined}
            className={`bg-card border border-border rounded-lg shadow-lg ${className}`}
        >
            {children}
        </motion.div>
    )
} 