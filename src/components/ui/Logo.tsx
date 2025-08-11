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
    lg: { logo: 48, text: 'text-xl' },
    xl: { logo: 56, text: 'text-2xl' }
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
            "flex items-center space-x-4",
            containerClassName
        )}>
            <div className={cn(
                "flex items-center justify-center overflow-hidden",
                size === 'sm' && "h-6 w-6",
                size === 'md' && "h-8 w-8",
                size === 'lg' && "h-12 w-12",
                size === 'xl' && "h-14 w-14"
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
                        size === 'lg' && "h-12 w-12",
                        size === 'xl' && "h-14 w-14",
                        className
                    )}
                    priority
                />
            </div>
            {showText && (
                <span className={cn(
                    "font-extrabold text-text-primary",
                    text
                )}>
                    {LAWYER_CONFIG.lawyer.name}
                </span>
            )}
        </div>
    )
}
