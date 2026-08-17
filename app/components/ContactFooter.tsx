"use client";

import { Phone, MessageCircle, MapPin, Clock, Crown, ArrowUp, ShieldCheck, CheckCircle2 } from "lucide-react";
import FadeIn from "./FadeIn";

export default function ContactFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-[#040406] pt-16 sm:pt-24 pb-24 sm:pb-12 border-t border-[#D4AF37]/30 relative overflow-hidden">
      {/* Decorative Gold Ambient Spotlight */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-5xl h-40 bg-[#D4AF37]/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* High-Converting Urgent Booking Callout Banner */}
        <FadeIn delay={0.05}>
          <div className="bg-gradient-to-r from-[#14120A] via-[#221C0D] to-[#14120A] border-2 border-[#D4AF37]/50 rounded-2xl p-6 sm:p-10 mb-16 shadow-[0_0_35px_rgba(212,175,55,0.2)] text-center sm:text-left flex flex-col lg:flex-row items-center justify-between gap-6 relative overflow-hidden">
            <div className="space-y-2 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#08080A] border border-[#D4AF37]/40 text-[#FFD700] text-xs font-semibold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Doorstep Service Guaranteed</span>
              </div>
              <h3 className="font-serif-royal text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Need Urgent Appliance Repair in Siwan?
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm">
                Call <span className="text-[#FFD700] font-bold">+91 9661633901</span> for immediate technician dispatch. Fast 30-minute arrival across all Siwan localities!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto shrink-0">
              <a
                href="tel:+919661633901"
                className="w-full sm:w-auto gold-gradient-bg text-[#08080A] font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.7)] transform hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Call +91 9661633901</span>
              </a>

              <a
                href="https://wa.me/919661633901"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#08080A] text-emerald-400 border border-emerald-500/40 hover:border-emerald-400 font-semibold text-xs sm:text-sm px-5 py-3.5 rounded-full flex items-center justify-center gap-2 hover:bg-emerald-950/40 transition-colors whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </FadeIn>

        {/* 3 High-Impact Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-16">
          {/* Card 1: Direct Call */}
          <FadeIn delay={0.1}>
            <a
              href="tel:+919661633901"
              className="bg-[#0e0f14] border border-[#D4AF37]/30 hover:border-[#D4AF37] p-6 rounded-xl card-hover-unique flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl gold-gradient-bg flex items-center justify-center text-[#08080A] font-bold group-hover:scale-110 transition-transform shrink-0">
                <Phone className="w-5 h-5 fill-current" />
              </div>
              <div className="min-w-0">
                <p className="text-amber-200/80 text-[10px] font-semibold uppercase tracking-wider">24/7 Helpline</p>
                <h4 className="text-white text-base sm:text-lg font-bold font-serif-royal group-hover:text-[#FFD700] transition-colors truncate">
                  +91 9661633901
                </h4>
                <p className="text-slate-400 text-xs mt-0.5">Tap to Call Technician</p>
              </div>
            </a>
          </FadeIn>

          {/* Card 2: WhatsApp Chat */}
          <FadeIn delay={0.15}>
            <a
              href="https://wa.me/919661633901"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0e0f14] border border-emerald-500/30 hover:border-emerald-400 p-6 rounded-xl card-hover-unique flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500 text-emerald-950 flex items-center justify-center font-bold group-hover:scale-110 transition-transform shrink-0">
                <MessageCircle className="w-5 h-5 fill-current" />
              </div>
              <div className="min-w-0">
                <p className="text-emerald-400 text-[10px] font-semibold uppercase tracking-wider">Instant Chat</p>
                <h4 className="text-white text-base sm:text-lg font-bold font-serif-royal group-hover:text-emerald-300 transition-colors truncate">
                  WhatsApp Support
                </h4>
                <p className="text-slate-400 text-xs mt-0.5">wa.me/919661633901</p>
              </div>
            </a>
          </FadeIn>

          {/* Card 3: Location & Hours */}
          <FadeIn delay={0.2}>
            <div className="bg-[#0e0f14] border border-[#D4AF37]/30 p-6 rounded-xl card-hover-unique flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#1A180E] border border-[#D4AF37]/40 flex items-center justify-center text-[#FFD700] shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <p className="text-amber-200/80 text-[10px] font-semibold uppercase tracking-wider">Service Hub</p>
                <h4 className="text-white text-base sm:text-lg font-bold font-serif-royal truncate">Siwan, Bihar</h4>
                <p className="text-slate-400 text-xs mt-0.5 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#D4AF37]" /> 8:00 AM - 9:00 PM (Daily)
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Footer Middle Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#D4AF37] flex items-center justify-center text-[#08080A]">
                <Crown className="w-4 h-4 fill-current" />
              </div>
              <span className="font-serif-royal text-xl font-bold tracking-wider gold-gradient-text">
                THE ROYAL APPLIANCES
              </span>
            </div>

            <p className="text-amber-100/90 text-sm font-medium font-serif-royal">
              Comfort. Quality. Trust.
            </p>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-md">
              Siwan&apos;s premier home appliance service center. We provide swift doorstep repairs, installation, and maintenance for Air Conditioners, Refrigerators, Washing Machines, and Geysers.
            </p>

            {/* Key Service Badges */}
            <div className="space-y-1.5 pt-1 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Doorstep Service Across Siwan District</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>100% Genuine Manufacturer Spare Parts</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="pt-2 flex items-center gap-3">
              <span className="text-xs text-slate-500 font-semibold mr-1">Follow Us:</span>
              <a
                href="https://instagram.com/theroyalappliances"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-[#12131c] border border-white/10 text-slate-400 hover:text-[#FFD700] hover:border-[#FFD700] flex items-center justify-center transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-[#12131c] border border-white/10 text-slate-400 hover:text-[#FFD700] hover:border-[#FFD700] flex items-center justify-center transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-xs sm:text-sm tracking-wider uppercase border-b border-[#D4AF37]/30 pb-2 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#hero" className="hover:text-[#FFD700] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#FFD700] transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-[#FFD700] transition-colors">Services</a></li>
              <li><a href="#why-us" className="hover:text-[#FFD700] transition-colors">Why Choose Us</a></li>
              <li><a href="#reviews" className="hover:text-[#FFD700] transition-colors">Customer Reviews</a></li>
              <li><a href="#location" className="hover:text-[#FFD700] transition-colors">Service Area Map</a></li>
            </ul>
          </div>

          {/* Covered Services Column */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-white font-bold text-xs sm:text-sm tracking-wider uppercase border-b border-[#D4AF37]/30 pb-2 inline-block">
              Services in Siwan
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>❄️ AC Repair, Servicing & Gas Refill</li>
              <li>🧊 Single & Double Door Refrigerator Fix</li>
              <li>🧺 Top & Front Load Washing Machine Repair</li>
              <li>♨️ Electric & Gas Geyser Element Replacement</li>
              <li>🔧 Professional Appliance Wall Mounting & Setup</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Row */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="text-center md:text-left">
            © 2026 <span className="text-[#FFD700] font-medium">The Royal Appliances</span>. One Call, We Do It All.
          </p>

          <p className="text-center text-slate-400">
            Design &amp; Develop by{" "}
            <a
              href="https://nexasite.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFD700] hover:underline font-semibold transition-colors"
            >
              NexaSite WebStudio.
            </a>
          </p>

          <div className="flex items-center gap-4">
            <span className="text-slate-500">Siwan, Bihar 841226</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-[#161722] border border-[#D4AF37]/40 text-[#FFD700] hover:bg-[#D4AF37] hover:text-[#08080A] transition-all duration-300"
              title="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
