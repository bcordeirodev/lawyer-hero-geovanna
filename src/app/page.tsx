import { Hero } from "@/components/sections/hero"
import { Services } from "@/components/sections/services"
import { About } from "@/components/sections/about"
import { Contact } from "@/components/sections/contact"
import { FloatingWhatsApp } from "@/components/ui/floating-whatsapp"
import { EnvironmentInfo } from "@/components/ui/environment-info"

export default function Home() {
    return (
        <main className="min-h-screen">
            <Hero />
            <Services />
            <About />
            <Contact />
            <FloatingWhatsApp />
            <EnvironmentInfo />
        </main>
    )
} 