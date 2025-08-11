import { LAWYER_CONFIG } from "@/config"
import { cn } from "@/lib/core/utils"
import Image from "next/image"

interface LogoProps {
    size?: 'sm' | 'md' | 'lg' | 'xl'
    showText?: boolean
    className?: string
    containerClassName?: string
}

const sizeMap = {
    sm: { logo: 24, text: 'text-sm' },
    md: { logo: 32, text: 'text-base' },
    lg: { logo: 40, text: 'text-lg' },
    xl: { logo: 48, text: 'text-xl' }
}

export function Logo({
    size = 'md',
    showText = true,
    className,
    containerClassName
}: LogoProps) {
    const { logo, text } = sizeMap[size]

    return (
        <div className={cn(
            "flex items-center space-x-3",
            containerClassName
        )}>
            <div className={cn(
                "flex items-center justify-center overflow-hidden",
                size === 'sm' && "h-6 w-6",
                size === 'md' && "h-8 w-8",
                size === 'lg' && "h-10 w-10",
                size === 'xl' && "h-12 w-12"
            )}>
                <Image
                    src="/images/logos/logo-app-64x64.png"
                    alt={`${LAWYER_CONFIG.lawyer.name} - Logo`}
                    width={logo}
                    height={logo}
                    className={cn(
                        "object-contain",
                        size === 'sm' && "h-6 w-6",
                        size === 'md' && "h-8 w-8",
                        size === 'lg' && "h-10 w-10",
                        size === 'xl' && "h-12 w-12",
                        className
                    )}
                    priority
                />
            </div>
            {showText && (
                <span className={cn(
                    "font-bold text-text-primary",
                    text
                )}>
                    {LAWYER_CONFIG.lawyer.name}
                </span>
            )}
        </div>
    )
}
