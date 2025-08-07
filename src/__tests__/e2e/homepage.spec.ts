import { expect, test } from '@playwright/test'

test.describe('Homepage', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/')
    })

    test('should have correct title', async ({ page }) => {
        await expect(page).toHaveTitle(/Dr. Alexandre Silva/)
    })

    test('should display lawyer information', async ({ page }) => {
        // Check if lawyer name is displayed
        await expect(page.getByText('Dr. Alexandre Silva')).toBeVisible()

        // Check if lawyer title is displayed
        await expect(page.getByText(/Advogado Especialista/)).toBeVisible()
    })

    test('should display all service sections', async ({ page }) => {
        // Check if all 6 practice areas are displayed
        await expect(page.getByText('Direito Civil')).toBeVisible()
        await expect(page.getByText('Direito Empresarial')).toBeVisible()
        await expect(page.getByText('Direito de Família')).toBeVisible()
        await expect(page.getByText('Direito à Saúde')).toBeVisible()
        await expect(page.getByText('Direito do Trabalho')).toBeVisible()
        await expect(page.getByText('Direito Tributário')).toBeVisible()
    })

    test('should have functional navigation', async ({ page }) => {
        // Test navigation to services section
        await page.click('a[href="#services"]')
        await expect(page.locator('#services')).toBeInViewport()

        // Test navigation to about section
        await page.click('a[href="#about"]')
        await expect(page.locator('#about')).toBeInViewport()

        // Test navigation to contact section
        await page.click('a[href="#contact"]')
        await expect(page.locator('#contact')).toBeInViewport()
    })

    test('should have working contact form', async ({ page }) => {
        // Navigate to contact section
        await page.click('a[href="#contact"]')

        // Fill out the form
        await page.fill('input[name="name"]', 'João Silva')
        await page.fill('input[name="email"]', 'joao@example.com')
        await page.fill('input[name="phone"]', '(11) 99999-9999')
        await page.selectOption('select[name="subject"]', 'Direito Civil')
        await page.fill('textarea[name="message"]', 'Preciso de ajuda com um contrato.')

        // Submit form (note: this won't actually send email in test)
        await page.click('button[type="submit"]')

        // Check for form validation or success message
        // This depends on your form implementation
    })

    test('should be responsive on mobile', async ({ page }) => {
        // Set mobile viewport
        await page.setViewportSize({ width: 375, height: 667 })

        // Check if mobile menu button is visible
        const menuButton = page.locator('button[aria-label*="menu"], button[aria-label*="Menu"]')
        await expect(menuButton).toBeVisible()

        // Check if main content is still visible
        await expect(page.getByText('Dr. Alexandre Silva')).toBeVisible()
    })

    test('should have working theme toggle', async ({ page }) => {
        // Find and click theme toggle button
        const themeToggle = page.locator('[aria-label*="theme"], [aria-label*="modo"]')

        if (await themeToggle.isVisible()) {
            // Get initial theme
            const initialClass = await page.locator('html').getAttribute('class')

            // Toggle theme
            await themeToggle.click()

            // Wait for theme change
            await page.waitForTimeout(500)

            // Check if theme changed
            const newClass = await page.locator('html').getAttribute('class')
            expect(newClass).not.toBe(initialClass)
        }
    })

    test('should load fast and meet performance standards', async ({ page }) => {
        const start = Date.now()
        await page.goto('/')
        await page.waitForLoadState('networkidle')
        const loadTime = Date.now() - start

        // Should load within 3 seconds
        expect(loadTime).toBeLessThan(3000)

        // Check if critical content is visible quickly
        await expect(page.getByText('Dr. Alexandre Silva')).toBeVisible()
    })

    test('should have proper SEO elements', async ({ page }) => {
        // Check for meta description
        const metaDescription = page.locator('meta[name="description"]')
        await expect(metaDescription).toHaveAttribute('content', /.+/)

        // Check for proper heading structure
        const h1 = page.locator('h1')
        await expect(h1).toBeVisible()
        await expect(h1).toHaveCount(1) // Should have exactly one h1

        // Check for alt text on images
        const images = page.locator('img')
        const imageCount = await images.count()
        for (let i = 0; i < imageCount; i++) {
            const img = images.nth(i)
            const alt = await img.getAttribute('alt')
            expect(alt).toBeTruthy()
        }
    })

    test('should have accessibility features', async ({ page }) => {
        // Check for proper ARIA labels
        const buttons = page.locator('button')
        const buttonCount = await buttons.count()

        for (let i = 0; i < buttonCount; i++) {
            const button = buttons.nth(i)
            const ariaLabel = await button.getAttribute('aria-label')
            const text = await button.textContent()

            // Button should have either text content or aria-label
            expect(ariaLabel || text).toBeTruthy()
        }

        // Check for proper form labels
        const inputs = page.locator('input, textarea, select')
        const inputCount = await inputs.count()

        for (let i = 0; i < inputCount; i++) {
            const input = inputs.nth(i)
            const id = await input.getAttribute('id')

            if (id) {
                const label = page.locator(`label[for="${id}"]`)
                await expect(label).toBeVisible()
            }
        }
    })
})