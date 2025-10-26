import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer id="footer" className="bg-primary text-primary-foreground py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-ring">Safar Karo</h3>
            <p className="text-primary-foreground/80 mb-4">
              Your trusted partner for safe and comfortable travel across India. Book premium cabs anytime, anywhere.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-ring/10 hover:bg-ring/20 flex items-center justify-center transition-colors"
                data-testid="link-facebook"
              >
                <Facebook size={20} className="text-ring" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-ring/10 hover:bg-ring/20 flex items-center justify-center transition-colors"
                data-testid="link-twitter"
              >
                <Twitter size={20} className="text-ring" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-ring/10 hover:bg-ring/20 flex items-center justify-center transition-colors"
                data-testid="link-instagram"
              >
                <Instagram size={20} className="text-ring" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-primary-foreground/80 hover:text-ring transition-colors" data-testid="link-footer-services">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#why-choose-us" className="text-primary-foreground/80 hover:text-ring transition-colors" data-testid="link-footer-about">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-ring transition-colors" data-testid="link-footer-terms">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-ring transition-colors" data-testid="link-footer-privacy">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone size={20} className="text-ring mt-1" />
                <div>
                  <p className="text-primary-foreground/80">+91 70034 04136</p>
                  <p className="text-sm text-primary-foreground/60">24/7 Available</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={20} className="text-ring mt-1" />
                <p className="text-primary-foreground/80">support@safarkaro.com</p>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-ring mt-1" />
                <p className="text-primary-foreground/80">
                  Kolkata, West Bengal, India
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2025 Safar Karo. All rights reserved. | Designed with care for travelers
          </p>
        </div>
      </div>
    </footer>
  );
}
