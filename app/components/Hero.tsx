"use client";

import { ChevronRight, Phone, ShieldCheck, Star, Sparkles, Clock, Wrench, Zap } from "lucide-react";
import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-[#08080A] overflow-hidden flex flex-col justify-between pt-28 sm:pt-36 lg:pt-40 pb-24 lg:pb-24"
    >
      {/* Background Radial Gold Spotlight */}
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[650px] h-[350px] sm:h-[650px] bg-[radial-gradient(circle,rgba(212,175,55,0.13)_0%,rgba(8,8,10,0)_70%)] blur-3xl pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* LEFT SIDE CONTENT */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left">
            {/* Eyebrow Label Badge */}
            <FadeIn delay={0.05} direction="down">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#161724] border border-[#D4AF37]/30 text-[#FFD700] text-[11px] sm:text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>SIWAN&apos;S TRUSTED APPLIANCE EXPERTS</span>
              </div>
            </FadeIn>

            {/* Main Headline */}
            <FadeIn delay={0.1}>
              <h1 className="font-serif-royal text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.18]">
                Reliable Appliance <br className="hidden sm:inline" />
                <span className="gold-gradient-text">Repair &amp; Service</span>
              </h1>
            </FadeIn>

            {/* Subtext Paragraph */}
            <FadeIn delay={0.15}>
              <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl">
                Comfort you can count on. Our expert technicians keep your AC, fridge, washing machine &amp; geyser running smoothly all year round.
              </p>
            </FadeIn>

            {/* Appliance Grid Pills (2-Col on Mobile, Flex on Desktop) */}
            <FadeIn delay={0.18}>
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 text-xs text-slate-300">
                <div className="px-3 py-2 rounded-xl bg-[#12131D] border border-white/10 flex items-center justify-center sm:justify-start gap-1.5 hover:border-[#D4AF37]/40 transition-colors">
                  <span>❄️ AC Service</span>
                </div>
                <div className="px-3 py-2 rounded-xl bg-[#12131D] border border-white/10 flex items-center justify-center sm:justify-start gap-1.5 hover:border-[#D4AF37]/40 transition-colors">
                  <span>🧊 Refrigerator</span>
                </div>
                <div className="px-3 py-2 rounded-xl bg-[#12131D] border border-white/10 flex items-center justify-center sm:justify-start gap-1.5 hover:border-[#D4AF37]/40 transition-colors">
                  <span>🧺 Washing Machine</span>
                </div>
                <div className="px-3 py-2 rounded-xl bg-[#12131D] border border-white/10 flex items-center justify-center sm:justify-start gap-1.5 hover:border-[#D4AF37]/40 transition-colors">
                  <span>♨️ Geyser Fix</span>
                </div>
              </div>
            </FadeIn>

            {/* CTA Buttons: Full-width Stacked on Mobile, Side-by-side on Desktop */}
            <FadeIn delay={0.2}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
                {/* Primary Gold Call Button */}
                <a
                  href="tel:+919661633901"
                  className="w-full sm:w-auto gold-gradient-bg text-[#08080A] font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_35px_rgba(212,175,55,0.7)] transform active:scale-95 transition-all duration-300 group"
                >
                  <Phone className="w-4 h-4 fill-current group-hover:rotate-12 transition-transform" />
                  <span>Call Now +91 9661633901</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Secondary View Services Button */}
                <a
                  href="#services"
                  className="w-full sm:w-auto bg-[#08080A] text-slate-200 border border-white/20 hover:border-[#D4AF37] hover:text-[#FFD700] font-semibold text-xs sm:text-sm px-6 py-3.5 rounded-full flex items-center justify-center gap-2 transition-all duration-300"
                >
                  <span>View Services</span>
                </a>
              </div>
            </FadeIn>

            {/* Trust Points Row */}
            <FadeIn delay={0.25}>
              <div className="pt-5 sm:pt-6 border-t border-white/10 flex flex-wrap items-center gap-3 sm:gap-6 text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#D4AF37]" />
                  <span>30-Min Rapid Arrival</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                  <span>100% Genuine Spare Parts</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Wrench className="w-4 h-4 text-[#D4AF37]" />
                  <span>Certified Local Experts</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* RIGHT SIDE: Technician Photo Card (Clean Mobile Layout with Zero Badge Collisions) */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <FadeIn delay={0.15} direction="left">
              <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/40 shadow-[0_10px_40px_rgba(0,0,0,0.9)] animate-glow-pulse group">
                {/* Technician Image */}
                <img
                  src="/technician_hero.jpg"
                  alt="Professional Male Technician Servicing AC Unit in Siwan, Bihar"
                  className="w-full h-[320px] sm:h-[440px] lg:h-[500px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />

                {/* Gradient Blend Overlays */}
                <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#08080A] via-[#08080A]/40 to-transparent pointer-events-none hidden lg:block" />
                <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#08080A]/85 to-transparent pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#08080A]/95 to-transparent pointer-events-none" />

                {/* Top-Right Glass Rating Badge (Clean & Non-Overlapping) */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-[#08080A]/90 border border-[#D4AF37]/50 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl backdrop-blur-md shadow-lg flex items-center gap-2 animate-card-float">
                  <div className="flex items-center gap-0.5 text-[#FFD700]">
                    <Star className="w-3.5 h-3.5 fill-current animate-pulse" />
                    <span className="text-xs font-bold text-white ml-1">4.9</span>
                  </div>
                  <span className="text-[10px] text-slate-300 font-medium border-l border-white/20 pl-2">
                    1,200+ Homes
                  </span>
                </div>

                {/* Bottom Overlay Card: Certified Technicians */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-[#08080A]/95 border border-[#D4AF37]/40 rounded-xl p-3 sm:p-3.5 backdrop-blur-md flex items-center justify-between shadow-2xl">
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-[#FFD700] via-[#D4AF37] to-[#AA7C11] p-[1px] shrink-0 shadow-[0_0_10px_rgba(212,175,55,0.4)]">
                      <div className="w-full h-full bg-[#08080A] rounded-full flex items-center justify-center">
                        <ShieldCheck className="w-4 h-4 text-[#FFD700]" />
                      </div>
                    </div>
                    <div className="min-w-0">
                      <p className="text-white font-bold text-xs truncate">Expert Doorstep Technician</p>
                      <p className="text-slate-400 text-[10px] truncate">Verified &bull; Certified &bull; Professional</p>
                    </div>
                  </div>

                  <span className="text-[10px] text-[#FFD700] font-mono bg-[#161724] px-2 py-1 sm:px-2.5 rounded-md border border-[#D4AF37]/30 shrink-0 ml-2">
                    Siwan, BR
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* BOTTOM CURVED DIVIDER */}
      <div className="relative w-full overflow-hidden leading-none z-20 pointer-events-none mt-6 sm:mt-10">
        <svg
          className="relative block w-full h-10 sm:h-20 lg:h-24 text-[#090A0E]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,60 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
}
