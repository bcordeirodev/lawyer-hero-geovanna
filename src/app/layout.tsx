import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ThemeProvider } from "@/contexts/ThemeContext"
import { ThemeWrapper } from "@/components/ui/theme"
import { generateMetadata } from "@/lib/seo/metadata"
import { StructuredData } from "@/components/common/StructuredData"
import { EnvironmentInfo } from "@/components/ui/environment-info"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  ...generateMetadata(),
  metadataBase: new URL('https://geovannanery.com'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth dark">
      <body className={`${inter.className} bg-background-primary text-text-primary dark:bg-background-primary dark:text-text-primary`}>
        <StructuredData />
        <ThemeProvider initialMode="dark">
          <ThemeWrapper>
            <div className="min-h-screen bg-background-primary dark:bg-background-primary">
              <Header />
              <main className="flex-1">
                {children}
              </main>
              <Footer />
              <EnvironmentInfo />
            </div>
          </ThemeWrapper>
        </ThemeProvider>
      </body>
    </html>
  )
}
