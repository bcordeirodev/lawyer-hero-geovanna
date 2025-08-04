import styled, { css } from 'styled-components'
import { ThemeConfig } from '@/contexts/ThemeContext'

// ============================================================================
// STYLED COMPONENTS BASE
// ============================================================================

export const Section = styled.section<{
    $background?: 'primary' | 'secondary' | 'tertiary' | 'pattern'
    $theme: ThemeConfig
}>`
  position: relative;
  padding: 3rem 0;
  
  @media (min-width: 640px) {
    padding: 4rem 0;
  }
  
  @media (min-width: 1024px) {
    padding: 5rem 0;
  }
  
  @media (min-width: 1280px) {
    padding: 6rem 0;
  }

  ${({ $background, $theme }) => {
        switch ($background) {
            case 'primary':
                return css`
          background-color: ${$theme.colors.background.primary};
        `
            case 'secondary':
                return css`
          background-color: ${$theme.colors.background.secondary};
        `
            case 'tertiary':
                return css`
          background-color: ${$theme.colors.background.tertiary};
        `
            case 'pattern':
                return css`
          position: relative;
          
          &::before {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(135deg, 
              ${$theme.colors.neutral[100]} 0%, 
              ${$theme.colors.neutral[50]} 50%, 
              ${$theme.colors.neutral[100]} 100%);
          }
          
          &::after {
            content: '';
            position: absolute;
            inset: 0;
            opacity: 0.1;
            background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          }
        `
            default:
                return css`
          background-color: ${$theme.colors.background.primary};
        `
        }
    }}
`

export const Container = styled.div<{ $theme: ThemeConfig }>`
  margin: 0 auto;
  max-width: 88rem;
  padding: 0 1rem;
  
  @media (min-width: 640px) {
    padding: 0 1.5rem;
  }
  
  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
  
  @media (min-width: 1280px) {
    padding: 0 3rem;
  }
  
  @media (min-width: 1536px) {
    padding: 0 4rem;
  }
`

export const Card = styled.div<{
    $variant?: 'default' | 'hover' | 'animated'
    $theme: ThemeConfig
}>`
  border: 0;
  background: ${({ $theme }) => `${$theme.colors.background.secondary}80`};
  backdrop-filter: blur(4px);
  box-shadow: ${({ $theme }) => $theme.shadows.lg};
  border: 1px solid ${({ $theme }) => $theme.colors.border.primary};
  border-radius: ${({ $theme }) => $theme.borderRadius.lg};
  transition: all 0.3s ease;

  ${({ $variant, $theme }) => {
        switch ($variant) {
            case 'hover':
                return css`
          &:hover {
            box-shadow: ${$theme.shadows.xl};
          }
        `
            case 'animated':
                return css`
          transform: translateZ(0);
          transition: all 0.3s ease;
          
          &:hover {
            transform: scale(1.05);
            box-shadow: ${$theme.shadows.xl};
          }
        `
            default:
                return css``
        }
    }}
`

export const Button = styled.button<{
    $variant?: 'primary' | 'secondary' | 'outline'
    $size?: 'sm' | 'md' | 'lg'
    $theme: ThemeConfig
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: 500;
  transition: all 0.2s ease;
  border-radius: ${({ $theme }) => $theme.borderRadius.md};

  ${({ $size, $theme }) => {
        switch ($size) {
            case 'sm':
                return css`
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
        `
            case 'lg':
                return css`
          padding: 0.75rem 1.5rem;
          font-size: 1rem;
        `
            default:
                return css`
          padding: 0.625rem 1.25rem;
          font-size: 0.875rem;
        `
        }
    }}

  ${({ $variant, $theme }) => {
        switch ($variant) {
            case 'primary':
                return css`
          background: linear-gradient(135deg, 
            ${$theme.colors.secondary[600]} 0%, 
            ${$theme.colors.secondary[500]} 100%);
          color: white;
          border: 0;
          
          &:hover {
            background: linear-gradient(135deg, 
              ${$theme.colors.secondary[700]} 0%, 
              ${$theme.colors.secondary[600]} 100%);
          }
        `
            case 'secondary':
                return css`
          border: 1px solid ${$theme.colors.border.primary};
          color: ${$theme.colors.text.secondary};
          background: transparent;
          
          &:hover {
            background: ${$theme.colors.background.tertiary};
            color: ${$theme.colors.text.primary};
          }
        `
            case 'outline':
                return css`
          border: 1px solid ${$theme.colors.border.secondary};
          color: ${$theme.colors.text.secondary};
          background: transparent;
          
          &:hover {
            background: ${$theme.colors.background.tertiary};
            color: ${$theme.colors.text.primary};
          }
        `
            default:
                return css`
          background: linear-gradient(135deg, 
            ${$theme.colors.secondary[600]} 0%, 
            ${$theme.colors.secondary[500]} 100%);
          color: white;
          border: 0;
          
          &:hover {
            background: linear-gradient(135deg, 
              ${$theme.colors.secondary[700]} 0%, 
              ${$theme.colors.secondary[600]} 100%);
          }
        `
        }
    }}
`

export const Footer = styled.footer<{ $theme: ThemeConfig }>`
  background: ${({ $theme }) => $theme.colors.background.tertiary};
  color: ${({ $theme }) => $theme.colors.text.primary};
  border-top: 1px solid ${({ $theme }) => $theme.colors.border.primary};
`

export const Header = styled.header<{ $theme: ThemeConfig }>`
  background: ${({ $theme }) => `${$theme.colors.background.primary}80`};
  backdrop-filter: blur(8px);
  border-bottom: 1px solid ${({ $theme }) => $theme.colors.border.primary};
  position: sticky;
  top: 0;
  z-index: 50;
`

export const Text = styled.p<{
    $variant?: 'primary' | 'secondary' | 'tertiary' | 'muted'
    $size?: 'sm' | 'base' | 'lg' | 'xl'
    $theme: ThemeConfig
}>`
  line-height: 1.6;
  
  ${({ $variant, $theme }) => {
        switch ($variant) {
            case 'secondary':
                return css`
          color: ${$theme.colors.text.secondary};
        `
            case 'tertiary':
                return css`
          color: ${$theme.colors.text.tertiary};
        `
            case 'muted':
                return css`
          color: ${$theme.colors.text.muted};
        `
            default:
                return css`
          color: ${$theme.colors.text.primary};
        `
        }
    }}

  ${({ $size }) => {
        switch ($size) {
            case 'sm':
                return css`
          font-size: 0.875rem;
        `
            case 'lg':
                return css`
          font-size: 1.125rem;
        `
            case 'xl':
                return css`
          font-size: 1.25rem;
        `
            default:
                return css`
          font-size: 1rem;
        `
        }
    }}
`

export const Heading = styled.h1<{
    $level?: 1 | 2 | 3 | 4 | 5 | 6
    $theme: ThemeConfig
}>`
  font-weight: 600;
  letter-spacing: -0.025em;
  color: ${({ $theme }) => $theme.colors.text.primary};
  
  ${({ $level }) => {
        switch ($level) {
            case 1:
                return css`
          font-size: 2.25rem;
          line-height: 2.5rem;
          
          @media (min-width: 640px) {
            font-size: 3rem;
            line-height: 1;
          }
          
          @media (min-width: 1024px) {
            font-size: 3.75rem;
            line-height: 1;
          }
        `
            case 2:
                return css`
          font-size: 1.875rem;
          line-height: 2.25rem;
          
          @media (min-width: 640px) {
            font-size: 2.25rem;
            line-height: 2.5rem;
          }
          
          @media (min-width: 1024px) {
            font-size: 3rem;
            line-height: 1;
          }
        `
            case 3:
                return css`
          font-size: 1.5rem;
          line-height: 2rem;
          
          @media (min-width: 640px) {
            font-size: 1.875rem;
            line-height: 2.25rem;
          }
          
          @media (min-width: 1024px) {
            font-size: 2.25rem;
            line-height: 2.5rem;
          }
        `
            case 4:
                return css`
          font-size: 1.25rem;
          line-height: 1.75rem;
          
          @media (min-width: 640px) {
            font-size: 1.5rem;
            line-height: 2rem;
          }
          
          @media (min-width: 1024px) {
            font-size: 1.875rem;
            line-height: 2.25rem;
          }
        `
            case 5:
                return css`
          font-size: 1.125rem;
          line-height: 1.75rem;
          
          @media (min-width: 640px) {
            font-size: 1.25rem;
            line-height: 1.75rem;
          }
          
          @media (min-width: 1024px) {
            font-size: 1.5rem;
            line-height: 2rem;
          }
        `
            case 6:
                return css`
          font-size: 1rem;
          line-height: 1.5rem;
          
          @media (min-width: 640px) {
            font-size: 1.125rem;
            line-height: 1.75rem;
          }
          
          @media (min-width: 1024px) {
            font-size: 1.25rem;
            line-height: 1.75rem;
          }
        `
            default:
                return css`
          font-size: 1.875rem;
          line-height: 2.25rem;
        `
        }
    }}
`

// ============================================================================
// UTILITY COMPONENTS
// ============================================================================

export const GradientText = styled.span<{ $theme: ThemeConfig }>`
  background: linear-gradient(135deg, 
    ${({ $theme }) => $theme.colors.secondary[500]} 0%, 
    ${({ $theme }) => $theme.colors.secondary[600]} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

export const Badge = styled.span<{ $theme: ThemeConfig }>`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.375rem 0.75rem;
  background: ${({ $theme }) => `${$theme.colors.background.secondary}80`};
  backdrop-filter: blur(4px);
  border: 1px solid ${({ $theme }) => $theme.colors.border.primary};
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  color: ${({ $theme }) => $theme.colors.text.secondary};
  box-shadow: ${({ $theme }) => $theme.shadows.sm};
`

export const IconWrapper = styled.div<{
    $gradient?: string
    $theme: ThemeConfig
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: ${({ $theme }) => $theme.borderRadius.md};
  background: ${({ $gradient, $theme }) =>
        $gradient || `linear-gradient(135deg, ${$theme.colors.secondary[500]} 0%, ${$theme.colors.secondary[600]} 100%)`};
  box-shadow: ${({ $theme }) => $theme.shadows.md};
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
    box-shadow: ${({ $theme }) => $theme.shadows.lg};
  }
  
  @media (min-width: 640px) {
    width: 3rem;
    height: 3rem;
  }
` 