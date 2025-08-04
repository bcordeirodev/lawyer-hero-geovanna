import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ThemeProvider } from "@/contexts/ThemeContext"
import { ThemeWrapper } from "@/components/ui/theme-wrapper"


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dra. Geovanna Nery - Advogada Especialista",
  description: "Advogada especializada em direito civil, empresarial e família. Assessoria jurídica personalizada em São Paulo.",
  keywords: "advogada, direito civil, direito empresarial, direito família, São Paulo, assessoria jurídica",
  authors: [{ name: "Dra. Geovanna Nery" }],
  openGraph: {
    title: "Dra. Geovanna Nery - Advogada Especialista",
    description: "Advogada especializada em direito civil, empresarial e família.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dra. Geovanna Nery - Advogada Especialista",
    description: "Advogada especializada em direito civil, empresarial e família.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`${inter.className} bg-background-primary text-text-primary dark:bg-background-primary dark:text-text-primary`}>
        <ThemeProvider initialMode="dark">
          <ThemeWrapper>
            <div className="min-h-screen bg-background-primary dark:bg-background-primary">
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
