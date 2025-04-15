
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <span className="bg-voicenova-purple rounded-full p-1.5">
                <Phone className="h-5 w-5 text-white" />
              </span>
              <span className="text-xl font-bold bg-gradient-to-r from-voicenova-purple to-voicenova-blue bg-clip-text text-transparent">
                VoiceNova
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-voicenova-purple transition-colors">
              Services
            </a>
            <a href="#how-it-works" className="text-gray-700 hover:text-voicenova-purple transition-colors">
              How It Works
            </a>
            <a href="#use-cases" className="text-gray-700 hover:text-voicenova-purple transition-colors">
              Use Cases
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-voicenova-purple transition-colors">
              Pricing
            </a>
            <a href="#faq" className="text-gray-700 hover:text-voicenova-purple transition-colors">
              FAQ
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-voicenova-purple hover:bg-voicenova-purple-light">
              Request Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-voicenova-purple"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#services"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-voicenova-purple rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#how-it-works"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-voicenova-purple rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#use-cases"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-voicenova-purple rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Use Cases
            </a>
            <a
              href="#pricing"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-voicenova-purple rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#faq"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-voicenova-purple rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
            <div className="pt-2">
              <Button className="w-full bg-voicenova-purple hover:bg-voicenova-purple-light">
                Request Demo
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
