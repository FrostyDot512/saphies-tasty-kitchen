import { Link } from "react-router-dom";
import { Heart, Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-secondary text-secondary-foreground">
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Saphie's Tasty" className="h-14 w-auto rounded-lg" />
            <span className="font-display text-xl font-bold">
              Saphie's <span className="text-primary">Tasty</span>
            </span>
          </div>
          <p className="text-secondary-foreground/70 font-body leading-relaxed">
            Homemade food with love. From our family kitchen to your table — flavours that bring people together.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="font-display text-lg font-bold text-primary">Quick Links</h4>
          {["Home", "About", "Services", "Gallery", "Contact"].map((l) => (
            <Link
              key={l}
              to={l === "Home" ? "/" : `/${l.toLowerCase()}`}
              className="block text-secondary-foreground/70 hover:text-primary transition-colors font-body"
            >
              {l}
            </Link>
          ))}
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <h4 className="font-display text-lg font-bold text-primary">Get in Touch</h4>
          <div className="space-y-3 text-secondary-foreground/70 font-body">
            <a href="tel:+254700000000" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone size={16} /> +254 700 000 000
            </a>
            <a href="mailto:hello@saphiestasty.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail size={16} /> hello@saphiestasty.com
            </a>
            <p className="flex items-center gap-2">
              <MapPin size={16} /> Kampala, Uganda
            </p>
          </div>
          <div className="flex gap-4 pt-2">
            <a href="https://instagram.com/saphies.tasty" target="_blank" rel="noopener noreferrer" className="text-secondary-foreground/60 hover:text-primary transition-colors">
              <Instagram size={22} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-secondary-foreground/60 hover:text-primary transition-colors">
              <Facebook size={22} />
            </a>
            <a href="https://tiktok.com/@saphies.tasty" target="_blank" rel="noopener noreferrer" className="text-secondary-foreground/60 hover:text-primary transition-colors">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-[22px] h-[22px]">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.73a8.19 8.19 0 004.76 1.52V6.84a4.84 4.84 0 01-1-.15z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-primary/20 text-center text-secondary-foreground/50 font-body text-sm">
        <p className="flex items-center justify-center gap-1">
          Made with <Heart size={14} className="text-primary fill-primary" /> by Saphie's Tasty © {new Date().getFullYear()}
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
