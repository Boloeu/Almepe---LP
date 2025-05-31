import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import AboutUs from "@/components/AboutUs"
import ServicesSection from "@/components/ServicesSection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <AboutUs />
      <ServicesSection />
      <Footer />
    </main>
  )
}
