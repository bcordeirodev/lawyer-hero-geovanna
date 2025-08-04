import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Dra. Geovanna Nery - Advogada Especialista em Direito Civil e Trabalhista",
  description: "Advogada jovem e dinâmica com mais de 5 anos de experiência na área jurídica. Atuação em Brasília-DF com assessoria personalizada em Direito Civil e Trabalhista.",
  keywords: [
    "advogada",
    "direito civil",
    "direito trabalhista",
    "brasília",
    "geovanna nery",
    "assessoria jurídica",
    "advocacia",
    "consultoria jurídica"
  ],
  authors: [{ name: "Dra. Geovanna Nery" }],
  openGraph: {
    title: "Dra. Geovanna Nery - Advogada Especialista",
    description: "Advogada jovem e dinâmica com mais de 5 anos de experiência na área jurídica. Atuação em Brasília-DF.",
    type: "website",
    locale: "pt_BR",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
