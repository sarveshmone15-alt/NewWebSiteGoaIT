import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import WhyUsSection from "./components/WhyUsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FAQSection from "./components/FAQSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";
import { Toaster } from "sonner";

export default function App() {
  return (
    <div className="bg-[#0B1D40] min-h-screen font-sans antialiased text-white selection:bg-[#FF9800] selection:text-[#0B1D40]">
      <Toaster position="top-right" theme="dark" closeButton />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyUsSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}