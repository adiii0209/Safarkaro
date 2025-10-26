import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold text-primary-foreground">
              Safar Karo
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-primary-foreground hover:text-ring transition-colors text-sm font-medium"
              data-testid="link-services"
            >
              Airport Transfers
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-primary-foreground hover:text-ring transition-colors text-sm font-medium"
              data-testid="link-outstation"
            >
              Outstation
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-primary-foreground hover:text-ring transition-colors text-sm font-medium"
              data-testid="link-local"
            >
              Local Rental
            </button>
            <button
              onClick={() => scrollToSection("why-choose-us")}
              className="text-primary-foreground hover:text-ring transition-colors text-sm font-medium"
              data-testid="link-about"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("footer")}
              className="text-primary-foreground hover:text-ring transition-colors text-sm font-medium"
              data-testid="link-contact"
            >
              Contact
            </button>
          </div>

          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection("hero")}
              className="bg-ring text-primary hover:bg-ring/90 border-0"
              data-testid="button-book-now"
            >
              Book Now
            </Button>
          </div>

          <button
            className="md:hidden text-primary-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-primary border-t border-primary-foreground/10">
          <div className="px-6 py-4 space-y-3">
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left text-primary-foreground hover:text-ring transition-colors py-2"
              data-testid="link-services-mobile"
            >
              Airport Transfers
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left text-primary-foreground hover:text-ring transition-colors py-2"
              data-testid="link-outstation-mobile"
            >
              Outstation
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left text-primary-foreground hover:text-ring transition-colors py-2"
              data-testid="link-local-mobile"
            >
              Local Rental
            </button>
            <button
              onClick={() => scrollToSection("why-choose-us")}
              className="block w-full text-left text-primary-foreground hover:text-ring transition-colors py-2"
              data-testid="link-about-mobile"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("footer")}
              className="block w-full text-left text-primary-foreground hover:text-ring transition-colors py-2"
              data-testid="link-contact-mobile"
            >
              Contact
            </button>
            <Button
              onClick={() => {
                scrollToSection("hero");
                setMobileMenuOpen(false);
              }}
              className="w-full bg-ring text-primary hover:bg-ring/90 border-0"
              data-testid="button-book-now-mobile"
            >
              Book Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
