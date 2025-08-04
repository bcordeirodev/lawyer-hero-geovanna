import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ThemeProvider } from "@/contexts/ThemeContext"
import { ThemeWrapper } from "@/components/ui/theme-wrapper"


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sarah Johnson, Esq. - Experienced Attorney",
  description: "Experienced attorney specializing in civil litigation and family law. Providing comprehensive legal services in New York.",
  keywords: "attorney, lawyer, civil litigation, family law, New York, legal services",
  authors: [{ name: "Sarah Johnson, Esq." }],
  openGraph: {
    title: "Sarah Johnson, Esq. - Experienced Attorney",
    description: "Experienced attorney specializing in civil litigation and family law.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarah Johnson, Esq. - Experienced Attorney",
    description: "Experienced attorney specializing in civil litigation and family law.",
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
