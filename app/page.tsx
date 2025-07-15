import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import AboutUs from "@/components/AboutUs"
import ServicesSection from "@/components/ServicesSection"
import Newsletter from "@/components/Newsletter"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <AboutUs />
      <ServicesSection />
      <Newsletter />
      <Footer />
    </main>
  )
}
