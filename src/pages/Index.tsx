
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import UseCases from "@/components/UseCases";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  // Smooth scroll functionality
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && link.hash && link.hash.startsWith('#') && link.origin + link.pathname === window.location.origin + window.location.pathname) {
        e.preventDefault();
        
        const targetElement = document.querySelector(link.hash);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 80, // 80px offset for navbar
            behavior: 'smooth'
          });
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <HowItWorks />
      <UseCases />
      <Pricing />
      <CTASection />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
