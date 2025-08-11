import { Hero } from '@/components/sections/hero'
import { LAWYER_CONFIG } from '@/config'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

// Mock the theme context
const mockThemeContext = {
    theme: 'light' as const,
    toggleTheme: () => { },
    isDark: false,
}

vi.mock('@/contexts/ThemeContext', () => ({
    useTheme: () => mockThemeContext,
}))

describe('Hero Component', () => {
    it('renders lawyer name correctly', () => {
        render(<Hero />)
        expect(screen.getByText(LAWYER_CONFIG.lawyer.name)).toBeInTheDocument()
    })

    it('renders lawyer title correctly', () => {
        render(<Hero />)
        expect(screen.getByText(LAWYER_CONFIG.lawyer.title)).toBeInTheDocument()
    })

    it('renders lawyer description correctly', () => {
        render(<Hero />)
        expect(screen.getByText(LAWYER_CONFIG.lawyer.description)).toBeInTheDocument()
    })

    it('renders statistics correctly', () => {
        render(<Hero />)

        // Check if experience statistic is rendered
        expect(screen.getByText('Anos de Experiência')).toBeInTheDocument()
        expect(screen.getByText(LAWYER_CONFIG.lawyer.statistics.experience)).toBeInTheDocument()

        // Check if cases resolved statistic is rendered
        expect(screen.getByText('Casos Resolvidos')).toBeInTheDocument()
        expect(screen.getByText(LAWYER_CONFIG.lawyer.statistics.casesResolved)).toBeInTheDocument()

        // Check if success rate statistic is rendered
        expect(screen.getByText('Taxa de Sucesso')).toBeInTheDocument()
        expect(screen.getByText(LAWYER_CONFIG.lawyer.statistics.successRate)).toBeInTheDocument()
    })

    it('renders contact buttons', () => {
        render(<Hero />)

        // Should have WhatsApp contact button
        const whatsappButton = screen.getByRole('link', { name: /whatsapp/i })
        expect(whatsappButton).toBeInTheDocument()

        // Should have consultation button
        const consultationButton = screen.getByRole('button', { name: /consulta/i })
        expect(consultationButton).toBeInTheDocument()
    })

    it('renders lawyer photo with correct alt text', () => {
        render(<Hero />)
        const image = screen.getByAltText(LAWYER_CONFIG.lawyer.photo.alt)
        expect(image).toBeInTheDocument()
    })

    it('has proper heading structure', () => {
        render(<Hero />)

        // Should have main heading (h1)
        const mainHeading = screen.getByRole('heading', { level: 1 })
        expect(mainHeading).toBeInTheDocument()
        expect(mainHeading).toHaveTextContent(LAWYER_CONFIG.lawyer.name)
    })

    it('renders call-to-action section', () => {
        render(<Hero />)

        // Should have some form of call-to-action text
        expect(screen.getByText(/consulta/i)).toBeInTheDocument()
    })
})