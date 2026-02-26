import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import NumbersSection from "@/components/NumbersSection"
import ServicesSection from "@/components/ServicesSection"
import MethodologySection from "@/components/MethodologySection"
import DiagnosticQuiz from "@/components/DiagnosticQuiz"
import FAQSection from "@/components/FAQSection"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import LeadPopup from "@/components/LeadPopup"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <NumbersSection />
      <ServicesSection />
      <MethodologySection />
      <DiagnosticQuiz />
      <FAQSection />
      <Footer />
      <WhatsAppButton />
      <LeadPopup />
    </main>
  )
}
