"use client";

import { ChevronRight, Phone, ShieldCheck, Star, Sparkles, Clock, Wrench } from "lucide-react";
import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] lg:min-h-screen bg-[#08080A] overflow-hidden flex flex-col justify-between pt-24 sm:pt-28 lg:pt-32"
    >
      {/* Radial Gold Glow Spotlight */}
      <div className="absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(212,175,55,0.12)_0%,rgba(8,8,10,0)_70%)] blur-3xl pointer-events-none" />

      {/* Main Split-Screen Grid */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10 my-auto pb-16 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* LEFT SIDE CONTENT */}
          <div className="lg:col-span-7 space-y-6 text-left pt-4 lg:pt-0">
            {/* Eyebrow Label Badge */}
            <FadeIn delay={0.05} direction="down">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181926] border border-[#D4AF37]/30 text-[#FFD700] text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>SIWAN&apos;S TRUSTED APPLIANCE EXPERTS</span>
              </div>
            </FadeIn>

            {/* Main Headline */}
            <FadeIn delay={0.1}>
              <h1 className="font-serif-royal text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
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

            {/* Appliance Pills Quick Selector */}
            <FadeIn delay={0.18}>
              <div className="flex flex-wrap gap-2 pt-1 text-xs text-slate-300">
                <span className="px-3 py-1.5 rounded-lg bg-[#12131D] border border-white/10 flex items-center gap-1.5">
                  ❄️ AC Service
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-[#12131D] border border-white/10 flex items-center gap-1.5">
                  🧊 Refrigerator
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-[#12131D] border border-white/10 flex items-center gap-1.5">
                  🧺 Washing Machine
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-[#12131D] border border-white/10 flex items-center gap-1.5">
                  ♨️ Geyser Fix
                </span>
              </div>
            </FadeIn>

            {/* Two CTA Buttons Side by Side */}
            <FadeIn delay={0.2}>
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
                {/* Primary Filled Gold Button */}
                <a
                  href="tel:+919661633901"
                  className="gold-gradient-bg text-[#08080A] font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_35px_rgba(212,175,55,0.7)] transform hover:-translate-y-0.5 transition-all duration-300 group"
                >
                  <Phone className="w-4 h-4 fill-current group-hover:rotate-12 transition-transform" />
                  <span>Call Now +91 9661633901</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Secondary Outline Button */}
                <a
                  href="#services"
                  className="bg-[#08080A] text-slate-200 border border-white/20 hover:border-[#D4AF37] hover:text-[#FFD700] font-semibold text-xs sm:text-sm px-6 py-3.5 rounded-full flex items-center justify-center gap-2 transition-all duration-300"
                >
                  <span>View Services</span>
                </a>
              </div>
            </FadeIn>

            {/* Trust Points Bar */}
            <FadeIn delay={0.25}>
              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-400">
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

          {/* RIGHT SIDE: Male Technician Photo with Glass Overlay Badges */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <FadeIn delay={0.15} direction="left">
              <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-[0_10px_50px_rgba(0,0,0,0.9)] group">
                {/* Male Technician Photo */}
                <img
                  src="/technician_hero.jpg"
                  alt="Professional Male Technician Servicing AC Unit in Siwan, Bihar"
                  className="w-full h-[340px] sm:h-[440px] lg:h-[500px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />

                {/* Gradient Blend Overlays */}
                <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#08080A] via-[#08080A]/40 to-transparent pointer-events-none hidden lg:block" />
                <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#08080A]/80 to-transparent pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#08080A]/95 to-transparent pointer-events-none" />

                {/* Top Floating Glass Badge: Rating */}
                <div className="absolute top-4 right-4 bg-[#08080A]/90 border border-[#D4AF37]/40 px-3.5 py-2 rounded-xl backdrop-blur-md shadow-lg flex items-center gap-2">
                  <div className="flex items-center gap-0.5 text-[#FFD700]">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span className="text-xs font-bold text-white ml-1">4.9</span>
                  </div>
                  <span className="text-[10px] text-slate-300 font-medium border-l border-white/20 pl-2">
                    1,200+ Homes in Siwan
                  </span>
                </div>

                {/* Bottom Overlay Card: Certified Technicians */}
                <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-6 bg-[#08080A]/95 border border-[#D4AF37]/40 rounded-xl p-3.5 backdrop-blur-md flex items-center justify-between shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#FFD700] to-[#AA7C11] p-[1px] shrink-0">
                      <div className="w-full h-full bg-[#08080A] rounded-full flex items-center justify-center">
                        <ShieldCheck className="w-4 h-4 text-[#FFD700]" />
                      </div>
                    </div>
                    <div>
                      <p className="text-white font-bold text-xs">Expert Doorstep Technician</p>
                      <p className="text-slate-400 text-[10px]">Verified • Certified • Professional</p>
                    </div>
                  </div>

                  <span className="text-[10px] text-[#FFD700] font-mono bg-[#161724] px-2.5 py-1 rounded-md border border-[#D4AF37]/30 shrink-0">
                    Siwan, Bihar
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* BOTTOM CURVED DIVIDER */}
      <div className="relative w-full overflow-hidden leading-none z-20 pointer-events-none">
        <svg
          className="relative block w-full h-12 sm:h-20 lg:h-24 text-[#090A0E]"
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
