/**
 * useLocalStorage Hook
 * Manages localStorage with type safety and error handling
 */

import { useState, useEffect, useCallback } from 'react'

// ============================================================================
// LOCAL STORAGE TYPES
// ============================================================================

export interface LocalStorageOptions {
    serialize?: (value: any) => string
    deserialize?: (value: string) => any
    onError?: (error: Error) => void
}

// ============================================================================
// USE LOCAL STORAGE HOOK
// ============================================================================

/**
 * useLocalStorage - Local storage hook with type safety
 * 
 * Provides localStorage functionality with automatic serialization/deserialization
 * 
 * @param key - Storage key
 * @param initialValue - Initial value if key doesn't exist
 * @param options - Configuration options
 * @returns Array with current value and setter function
 */
export function useLocalStorage<T>(
    key: string,
    initialValue: T,
    options: LocalStorageOptions = {}
): [T, (value: T | ((val: T) => T)) => void] {
    const {
        serialize = JSON.stringify,
        deserialize = JSON.parse,
        onError = console.error
    } = options

    // Get initial value from localStorage or use provided initial value
    const [storedValue, setStoredValue] = useState<T>(() => {
        if (typeof window === 'undefined') {
            return initialValue
        }

        try {
            const item = window.localStorage.getItem(key)
            return item ? deserialize(item) : initialValue
        } catch (error) {
            onError(error as Error)
            return initialValue
        }
    })

    // Update localStorage when value changes
    const setValue = useCallback((value: T | ((val: T) => T)) => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value
            setStoredValue(valueToStore)

            if (typeof window !== 'undefined') {
                window.localStorage.setItem(key, serialize(valueToStore))
            }
        } catch (error) {
            onError(error as Error)
        }
    }, [key, serialize, storedValue, onError])

    // Listen for changes in other tabs/windows
    useEffect(() => {
        if (typeof window === 'undefined') return

        const handleStorageChange = (e: StorageEvent) => {
            if (e.key === key && e.newValue !== null) {
                try {
                    setStoredValue(deserialize(e.newValue))
                } catch (error) {
                    onError(error as Error)
                }
            }
        }

        window.addEventListener('storage', handleStorageChange)
        return () => window.removeEventListener('storage', handleStorageChange)
    }, [key, deserialize, onError])

    return [storedValue, setValue]
}

// ============================================================================
// SPECIALIZED HOOKS
// ============================================================================

/**
 * useLocalStorageString - String-specific localStorage hook
 * 
 * @param key - Storage key
 * @param initialValue - Initial string value
 * @returns Array with current string value and setter function
 */
export function useLocalStorageString(
    key: string,
    initialValue: string = ''
): [string, (value: string | ((val: string) => string)) => void] {
    return useLocalStorage(key, initialValue, {
        serialize: (value: string) => value,
        deserialize: (value: string) => value
    })
}

/**
 * useLocalStorageBoolean - Boolean-specific localStorage hook
 * 
 * @param key - Storage key
 * @param initialValue - Initial boolean value
 * @returns Array with current boolean value and setter function
 */
export function useLocalStorageBoolean(
    key: string,
    initialValue: boolean = false
): [boolean, (value: boolean | ((val: boolean) => boolean)) => void] {
    return useLocalStorage(key, initialValue, {
        serialize: (value: boolean) => value.toString(),
        deserialize: (value: string) => value === 'true'
    })
}

/**
 * useLocalStorageNumber - Number-specific localStorage hook
 * 
 * @param key - Storage key
 * @param initialValue - Initial number value
 * @returns Array with current number value and setter function
 */
export function useLocalStorageNumber(
    key: string,
    initialValue: number = 0
): [number, (value: number | ((val: number) => number)) => void] {
    return useLocalStorage(key, initialValue, {
        serialize: (value: number) => value.toString(),
        deserialize: (value: string) => Number(value)
    })
}

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Removes item from localStorage
 * @param key - Storage key to remove
 */
export function removeFromLocalStorage(key: string): void {
    if (typeof window !== 'undefined') {
        try {
            window.localStorage.removeItem(key)
        } catch (error) {
            console.error('Error removing from localStorage:', error)
        }
    }
}

/**
 * Clears all localStorage data
 */
export function clearLocalStorage(): void {
    if (typeof window !== 'undefined') {
        try {
            window.localStorage.clear()
        } catch (error) {
            console.error('Error clearing localStorage:', error)
        }
    }
}

/**
 * Gets all localStorage keys
 * @returns Array of localStorage keys
 */
export function getLocalStorageKeys(): string[] {
    if (typeof window === 'undefined') return []

    try {
        return Object.keys(window.localStorage)
    } catch (error) {
        console.error('Error getting localStorage keys:', error)
        return []
    }
}

/**
 * Checks if localStorage is available
 * @returns Whether localStorage is available
 */
export function isLocalStorageAvailable(): boolean {
    if (typeof window === 'undefined') return false

    try {
        const test = '__localStorage_test__'
        window.localStorage.setItem(test, test)
        window.localStorage.removeItem(test)
        return true
    } catch {
        return false
    }
} 