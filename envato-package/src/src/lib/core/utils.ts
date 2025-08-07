/**
 * Utility functions and helpers
 * Provides reusable utilities following DRY principle
 */

import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// ============================================================================
// CLASS NAME UTILITIES
// ============================================================================

/**
 * Combines class names using clsx and tailwind-merge
 * @param inputs - Class names to combine
 * @returns Combined class string
 * 
 * @example
 * ```tsx
 * cn('text-red-500', 'text-blue-500') // Returns 'text-blue-500'
 * cn('px-2 py-1', 'px-4') // Returns 'py-1 px-4'
 * ```
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

/**
 * Conditionally applies classes based on conditions
 * @param conditions - Object with class names as keys and conditions as values
 * @returns Combined class string
 * 
 * @example
 * ```tsx
 * conditionalClasses({
 *   'text-red-500': isError,
 *   'text-green-500': isSuccess,
 *   'opacity-50': isDisabled
 * })
 * ```
 */
export function conditionalClasses(conditions: Record<string, boolean>): string {
    return Object.entries(conditions)
        .filter(([, condition]) => condition)
        .map(([className]) => className)
        .join(' ')
}

// ============================================================================
// STRING UTILITIES
// ============================================================================

/**
 * Capitalizes the first letter of a string
 * @param str - String to capitalize
 * @returns Capitalized string
 */
export function capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

/**
 * Converts a string to kebab-case
 * @param str - String to convert
 * @returns Kebab-case string
 */
export function toKebabCase(str: string): string {
    return str
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '')
}

/**
 * Converts a string to camelCase
 * @param str - String to convert
 * @returns Camel-case string
 */
export function toCamelCase(str: string): string {
    return str
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase())
}

/**
 * Truncates a string to a specified length
 * @param str - String to truncate
 * @param length - Maximum length
 * @param suffix - Suffix to add if truncated
 * @returns Truncated string
 */
export function truncate(str: string, length: number, suffix: string = '...'): string {
    if (str.length <= length) return str
    return str.substring(0, length - suffix.length) + suffix
}

// ============================================================================
// ARRAY UTILITIES
// ============================================================================

/**
 * Removes duplicates from an array
 * @param array - Array to deduplicate
 * @returns Array without duplicates
 */
export function unique<T>(array: T[]): T[] {
    return [...new Set(array)]
}

/**
 * Groups array items by a key function
 * @param array - Array to group
 * @param keyFn - Function to extract key
 * @returns Grouped object
 */
export function groupBy<T, K extends string | number>(
    array: T[],
    keyFn: (item: T) => K
): Record<K, T[]> {
    return array.reduce((groups, item) => {
        const key = keyFn(item)
        if (!groups[key]) {
            groups[key] = []
        }
        groups[key].push(item)
        return groups
    }, {} as Record<K, T[]>)
}

/**
 * Chunks an array into smaller arrays
 * @param array - Array to chunk
 * @param size - Size of each chunk
 * @returns Array of chunks
 */
export function chunk<T>(array: T[], size: number): T[][] {
    const chunks: T[][] = []
    for (let i = 0; i < array.length; i += size) {
        chunks.push(array.slice(i, i + size))
    }
    return chunks
}

// ============================================================================
// OBJECT UTILITIES
// ============================================================================

/**
 * Deep clones an object
 * @param obj - Object to clone
 * @returns Cloned object
 */
export function deepClone<T>(obj: T): T {
    if (obj === null || typeof obj !== 'object') {
        return obj
    }

    if (obj instanceof Date) {
        return new Date(obj.getTime()) as T
    }

    if (obj instanceof Array) {
        return obj.map(item => deepClone(item)) as T
    }

    if (typeof obj === 'object') {
        const cloned = {} as Record<string, unknown>
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                cloned[key] = deepClone(obj[key])
            }
        }
        return cloned as T
    }

    return obj
}

/**
 * Picks specific keys from an object
 * @param obj - Source object
 * @param keys - Keys to pick
 * @returns Object with picked keys
 */
export function pick<T extends object, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
    const result = {} as Pick<T, K>
    keys.forEach(key => {
        if (key in obj) {
            result[key] = obj[key]
        }
    })
    return result
}

/**
 * Omits specific keys from an object
 * @param obj - Source object
 * @param keys - Keys to omit
 * @returns Object without omitted keys
 */
export function omit<T, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> {
    const result = { ...obj }
    keys.forEach(key => {
        delete result[key]
    })
    return result
}

// ============================================================================
// DATE UTILITIES
// ============================================================================

/**
 * Formats a date to a readable string
 * @param date - Date to format
 * @param locale - Locale for formatting
 * @returns Formatted date string
 */
export function formatDate(date: Date, locale: string = 'pt-BR'): string {
    return new Intl.DateTimeFormat(locale, {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).format(date)
}

/**
 * Formats a date to a relative time string
 * @param date - Date to format
 * @returns Relative time string
 */
export function formatRelativeTime(date: Date): string {
    const now = new Date()
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000)

    if (diffInSeconds < 60) {
        return 'agora mesmo'
    }

    const diffInMinutes = Math.floor(diffInSeconds / 60)
    if (diffInMinutes < 60) {
        return `${diffInMinutes} minuto${diffInMinutes > 1 ? 's' : ''} atrás`
    }

    const diffInHours = Math.floor(diffInMinutes / 60)
    if (diffInHours < 24) {
        return `${diffInHours} hora${diffInHours > 1 ? 's' : ''} atrás`
    }

    const diffInDays = Math.floor(diffInHours / 24)
    if (diffInDays < 7) {
        return `${diffInDays} dia${diffInDays > 1 ? 's' : ''} atrás`
    }

    return formatDate(date)
}

// ============================================================================
// VALIDATION UTILITIES
// ============================================================================

/**
 * Validates if a value is not empty
 * @param value - Value to validate
 * @returns True if value is not empty
 */
export function isNotEmpty(value: unknown): boolean {
    if (value === null || value === undefined) return false
    if (typeof value === 'string') return value.trim().length > 0
    if (Array.isArray(value)) return value.length > 0
    if (typeof value === 'object') return Object.keys(value).length > 0
    return true
}



/**
 * Validates if a value is a valid URL
 * @param url - URL to validate
 * @returns True if URL is valid
 */
export function isValidUrl(url: string): boolean {
    try {
        new URL(url)
        return true
    } catch {
        return false
    }
}

// ============================================================================
// PERFORMANCE UTILITIES
// ============================================================================

/**
 * Debounces a function
 * @param func - Function to debounce
 * @param delay - Delay in milliseconds
 * @returns Debounced function
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
    func: T,
    delay: number
): (...args: Parameters<T>) => void {
    let timeoutId: NodeJS.Timeout

    return (...args: Parameters<T>) => {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => func(...args), delay)
    }
}

/**
 * Throttles a function
 * @param func - Function to throttle
 * @param delay - Delay in milliseconds
 * @returns Throttled function
 */
export function throttle<T extends (...args: unknown[]) => unknown>(
    func: T,
    delay: number
): (...args: Parameters<T>) => void {
    let lastCall = 0

    return (...args: Parameters<T>) => {
        const now = Date.now()
        if (now - lastCall >= delay) {
            lastCall = now
            func(...args)
        }
    }
}

// ============================================================================
// BROWSER UTILITIES
// ============================================================================

/**
 * Checks if code is running in browser
 * @returns True if in browser environment
 */
export function isBrowser(): boolean {
    return typeof window !== 'undefined'
}

/**
 * Gets the current viewport dimensions
 * @returns Viewport dimensions
 */
export function getViewportDimensions(): { width: number; height: number } {
    if (!isBrowser()) {
        return { width: 0, height: 0 }
    }

    return {
        width: window.innerWidth,
        height: window.innerHeight
    }
}

/**
 * Checks if device is mobile
 * @returns True if mobile device
 */
export function isMobile(): boolean {
    if (!isBrowser()) return false

    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
    )
}

// ============================================================================
// SEO UTILITIES
// ============================================================================

/**
 * Generates a slug from a string
 * @param str - String to convert to slug
 * @returns Slug string
 */
export function generateSlug(str: string): string {
    return str
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim()
}

/**
 * Truncates text for SEO meta descriptions
 * @param text - Text to truncate
 * @param maxLength - Maximum length
 * @returns Truncated text
 */
export function truncateForSEO(text: string, maxLength: number = 160): string {
    if (text.length <= maxLength) return text

    const truncated = text.substring(0, maxLength)
    const lastSpace = truncated.lastIndexOf(' ')

    if (lastSpace > 0) {
        return truncated.substring(0, lastSpace) + '...'
    }

    return truncated + '...'
} 