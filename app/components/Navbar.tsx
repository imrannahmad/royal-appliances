"use client";

import { useState, useEffect } from "react";
import { Phone, Menu, X, Crown } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why-us" },
    { name: "Reviews", href: "#reviews" },
    { name: "Location", href: "#location" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#08080A]/95 backdrop-blur-xl border-b border-[#D4AF37]/20 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.8)]"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo Left with Crown Icon */}
          <a href="#hero" className="flex items-center gap-2.5 group focus:outline-none">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FFD700] via-[#D4AF37] to-[#AA7C11] p-[1px] shadow-[0_0_12px_rgba(212,175,55,0.4)] group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#08080A] rounded-full flex items-center justify-center">
                <Crown className="w-4 h-4 text-[#FFD700] transform -rotate-12 group-hover:rotate-0 transition-transform duration-300" />
              </div>
            </div>

            <div className="flex flex-col">
              <span className="font-serif-royal text-base sm:text-lg font-bold tracking-wider gold-gradient-text leading-tight">
                THE ROYAL APPLIANCES
              </span>
              <div className="flex items-center gap-1.5 text-[9px] sm:text-[10px] tracking-widest text-slate-400 uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Siwan, Bihar</span>
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold tracking-wider text-slate-300 hover:text-[#FFD700] uppercase transition-colors py-1 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Primary CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-1.5 text-[11px] text-amber-200/90 font-medium px-3 py-1 rounded-full bg-[#141520] border border-[#D4AF37]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>Doorstep Response Active</span>
            </div>
            <a
              href="tel:+919661633901"
              className="gold-gradient-bg text-[#08080A] font-bold text-xs px-4 py-2 sm:px-5 sm:py-2.5 rounded-full flex items-center gap-2 hover:opacity-95 shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:shadow-[0_0_25px_rgba(212,175,55,0.6)] transform hover:-translate-y-0.5 transition-all duration-300"
            >
              <Phone className="w-3.5 h-3.5 fill-current" />
              <span>+91 9661633901</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="tel:+919661633901"
              className="gold-gradient-bg text-[#08080A] p-2 rounded-full shadow-md"
              aria-label="Call Now"
            >
              <Phone className="w-3.5 h-3.5 fill-current" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-200 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5 text-[#FFD700]" /> : <Menu className="w-5 h-5 text-[#FFD700]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#08080A]/98 border-b border-[#D4AF37]/30 px-4 pt-4 pb-6 mt-2 space-y-3 backdrop-blur-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-200 hover:text-[#FFD700] px-3 py-2 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <a
              href="tel:+919661633901"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full gold-gradient-bg text-[#08080A] font-bold text-xs text-center py-3 rounded-full flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(212,175,55,0.4)]"
            >
              <Phone className="w-3.5 h-3.5 fill-current" />
              Call +91 9661633901
            </a>
            <a
              href="https://wa.me/919661633901"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center text-xs text-slate-300 py-2.5 hover:text-white"
            >
              WhatsApp Us &rarr;
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
