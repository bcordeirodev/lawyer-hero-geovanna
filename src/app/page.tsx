import { Header } from "@/components/layout/header"
import { Hero } from "@/components/sections/hero"
import { Services } from "@/components/sections/services"
import { About } from "@/components/sections/about"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/layout/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
