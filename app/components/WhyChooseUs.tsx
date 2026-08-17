"use client";

import FadeIn from "./FadeIn";

export default function WhyChooseUs() {
  const pillars = [
    {
      number: "01",
      title: "Expert Technicians",
      subtitle: "Skilled & Trusted",
      description:
        "Background-verified specialists with multi-brand certification to diagnose and resolve complex appliance failures efficiently.",
    },
    {
      number: "02",
      title: "Fast & Reliable",
      subtitle: "On-Time Service",
      description:
        "Prompt doorstep arrival across Siwan with rapid response and same-day turnaround for critical appliance repairs.",
    },
    {
      number: "03",
      title: "Quality Service",
      subtitle: "Best Quality Assured",
      description:
        "100% genuine factory replacement parts backed by service warranty and standard testing protocols.",
    },
    {
      number: "04",
      title: "Customer Satisfaction",
      subtitle: "Our Top Priority",
      description:
        "Transparent upfront quote before work starts, zero hidden fee guarantees, and dedicated post-service assistance.",
    },
  ];

  return (
    <section id="why-us" className="py-16 sm:py-32 bg-[#090A0E] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <FadeIn delay={0.05}>
            <p className="text-xs font-semibold tracking-widest text-[#D4AF37] uppercase mb-3">
              Why Choose Us
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="font-serif-royal text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 tracking-tight">
              The Royal <span className="gold-gradient-text">Standard</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="text-slate-400 text-sm sm:text-lg">
              Built on technical mastery, upfront pricing, and absolute reliability.
            </p>
          </FadeIn>
        </div>

        {/* 4 Columns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {pillars.map((item, index) => (
            <FadeIn key={index} delay={0.08 * (index + 1)} className="h-full">
              <div className="bg-[#0e0f14] border border-white/5 rounded-xl p-5 sm:p-6 card-hover-minimal h-full flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono text-[#D4AF37] block mb-3 sm:mb-4">
                    {item.number}
                  </span>

                  <h3 className="font-serif-royal text-lg sm:text-xl font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-[10px] sm:text-xs font-medium uppercase tracking-wider mb-2 sm:mb-3">
                    {item.subtitle}
                  </p>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
