import { Services } from '@/components/sections/services'
import { LAWYER_CONFIG } from '@/config'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

describe('Services Component', () => {
    it('renders all service items', () => {
        render(<Services />)

        LAWYER_CONFIG.services.forEach((service) => {
            expect(screen.getByText(service.title)).toBeInTheDocument()
            expect(screen.getByText(service.description)).toBeInTheDocument()
        })
    })

    it('renders service features', () => {
        render(<Services />)

        LAWYER_CONFIG.services.forEach((service) => {
            service.features.forEach((feature) => {
                expect(screen.getByText(feature)).toBeInTheDocument()
            })
        })
    })

    it('renders section title and description', () => {
        render(<Services />)

        expect(screen.getByText('Nossos Serviços')).toBeInTheDocument()
        expect(screen.getByText(/Especialidades jurídicas/i)).toBeInTheDocument()
    })

    it('has proper heading structure', () => {
        render(<Services />)

        // Should have section heading
        const sectionHeading = screen.getByRole('heading', { level: 2 })
        expect(sectionHeading).toBeInTheDocument()

        // Should have service headings
        LAWYER_CONFIG.services.forEach((service) => {
            const serviceHeading = screen.getByRole('heading', { name: service.title })
            expect(serviceHeading).toBeInTheDocument()
        })
    })

    it('renders correct number of services', () => {
        render(<Services />)

        const serviceCards = screen.getAllByRole('heading', { level: 3 })
        expect(serviceCards).toHaveLength(LAWYER_CONFIG.services.length)
    })

    it('renders service section with proper id', () => {
        const { container } = render(<Services />)
        const section = container.querySelector('#services')
        expect(section).toBeInTheDocument()
    })

    it('renders all expected practice areas', () => {
        render(<Services />)

        // Check for specific practice areas that should be present
        expect(screen.getByText('Direito Civil')).toBeInTheDocument()
        expect(screen.getByText('Direito Empresarial')).toBeInTheDocument()
        expect(screen.getByText('Direito de Família')).toBeInTheDocument()
        expect(screen.getByText('Direito à Saúde')).toBeInTheDocument()
        expect(screen.getByText('Direito do Trabalho')).toBeInTheDocument()
        expect(screen.getByText('Direito Tributário')).toBeInTheDocument()
    })
})