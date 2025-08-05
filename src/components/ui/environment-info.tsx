/**
 * Environment Info Component
 * 
 * Componente para exibir informações do ambiente (apenas em desenvolvimento)
 * 
 * @author Bruno Cordeiro
 * @version 1.0.0
 */

"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Info, X, CheckCircle, AlertTriangle } from 'lucide-react'
import { getEnvironmentSummary, validateEnvironment } from '@/lib/env-checker'
import { isDevelopment } from '@/lib/env'

interface EnvironmentInfoProps {
    className?: string
}

/**
 * Componente para exibir informações do ambiente
 * Só é renderizado em desenvolvimento
 */
export function EnvironmentInfo({ className = '' }: EnvironmentInfoProps) {
    const [isVisible, setIsVisible] = useState(true)
    const [isExpanded, setIsExpanded] = useState(false)

    // Só renderiza em desenvolvimento
    if (!isDevelopment()) {
        return null
    }

    const summary = getEnvironmentSummary()
    const validation = validateEnvironment()

    if (!isVisible) {
        return null
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`fixed top-4 right-4 z-50 bg-background-secondary border border-border-secondary rounded-lg shadow-lg p-4 max-w-sm ${className}`}
        >
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                    <Info className="h-4 w-4 text-info" />
                    <span className="text-sm font-medium text-text-primary">
                        Environment Info
                    </span>
                </div>
                <button
                    onClick={() => setIsVisible(false)}
                    className="text-text-muted hover:text-text-primary transition-colors"
                >
                    <X className="h-4 w-4" />
                </button>
            </div>

            {/* Summary */}
            <div className="space-y-2">
                <div className="flex items-center gap-2">
                    <span className="text-xs text-text-muted">Environment:</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${summary.environment === 'development'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-green-100 text-green-800'
                        }`}>
                        {summary.environment}
                    </span>
                </div>

                <div className="flex items-center gap-2">
                    <span className="text-xs text-text-muted">App:</span>
                    <span className="text-xs text-text-primary">
                        {summary.appName} v{summary.appVersion}
                    </span>
                </div>

                <div className="flex items-center gap-2">
                    <span className="text-xs text-text-muted">Debug:</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${summary.debug
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                        {summary.debug ? 'Enabled' : 'Disabled'}
                    </span>
                </div>
            </div>

            {/* Features */}
            <div className="mt-3">
                <span className="text-xs text-text-muted">Features:</span>
                <div className="mt-1 space-y-1">
                    {Object.entries(summary.features).map(([feature, enabled]) => (
                        <div key={feature} className="flex items-center gap-2">
                            {enabled ? (
                                <CheckCircle className="h-3 w-3 text-success" />
                            ) : (
                                <AlertTriangle className="h-3 w-3 text-warning" />
                            )}
                            <span className="text-xs text-text-primary capitalize">
                                {feature.replace(/([A-Z])/g, ' $1').trim()}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Expand/Collapse */}
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-3 text-xs text-text-muted hover:text-text-primary transition-colors"
            >
                {isExpanded ? 'Show less' : 'Show more'}
            </button>

            {/* Detailed Info */}
            {isExpanded && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-3 pt-3 border-t border-border-secondary"
                >
                    <div className="space-y-2">
                        {/* Validation Status */}
                        <div className="flex items-center gap-2">
                            <span className="text-xs text-text-muted">Status:</span>
                            {validation.isValid ? (
                                <CheckCircle className="h-3 w-3 text-success" />
                            ) : (
                                <AlertTriangle className="h-3 w-3 text-error" />
                            )}
                            <span className={`text-xs ${validation.isValid ? 'text-success' : 'text-error'
                                }`}>
                                {validation.isValid ? 'Valid' : 'Invalid'}
                            </span>
                        </div>

                        {/* Errors */}
                        {validation.errors.length > 0 && (
                            <div>
                                <span className="text-xs text-text-muted">Errors:</span>
                                <div className="mt-1 space-y-1">
                                    {validation.errors.map((error, index) => (
                                        <div key={index} className="text-xs text-error">
                                            • {error}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Warnings */}
                        {validation.warnings.length > 0 && (
                            <div>
                                <span className="text-xs text-text-muted">Warnings:</span>
                                <div className="mt-1 space-y-1">
                                    {validation.warnings.map((warning, index) => (
                                        <div key={index} className="text-xs text-warning">
                                            • {warning}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </motion.div>
            )}
        </motion.div>
    )
} 