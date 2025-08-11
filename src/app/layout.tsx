import { StructuredData } from "@/components/common/StructuredData"
import { Footer } from "@/components/layout/footer"
import { Header } from "@/components/layout/header"
import { ThemeWrapper } from "@/components/ui/theme"
import { LAYOUT_CONFIG } from "@/config"
import { ThemeProvider } from "@/contexts/ThemeContext"
import { generateMetadata } from "@/lib/seo/metadata"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  ...generateMetadata(),
  metadataBase: new URL(LAYOUT_CONFIG.seo.siteUrl),
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/images/logos/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/images/logos/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/logos/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
    ],
    apple: [
      { url: '/images/logos/apple-touch-icon-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'android-chrome', url: '/images/logos/android-chrome-192x192.png', sizes: '192x192' },
      { rel: 'android-chrome', url: '/images/logos/android-chrome-512x512.png', sizes: '512x512' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang={LAYOUT_CONFIG.seo.defaultLanguage} className="scroll-smooth">
      <body className={`${inter.className} bg-background-primary text-text-primary antialiased`}>
        <StructuredData />
        <ThemeProvider initialMode={LAYOUT_CONFIG.theme.defaultMode}>
          <ThemeWrapper>
            <div className="min-h-screen bg-background-primary">
              <Header />
              <main className="flex-1">
                {children}
              </main>
              <Footer />
            </div>
          </ThemeWrapper>
        </ThemeProvider>
      </body>
    </html>
  )
}
