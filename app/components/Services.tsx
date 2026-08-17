"use client";

import { useState } from "react";
import { Phone, MessageCircle, ShieldCheck, Check } from "lucide-react";
import FadeIn from "./FadeIn";

export default function Services() {
  const [activeTab, setActiveTab] = useState("all");

  const servicesList = [
    {
      id: "ac-service",
      category: "cooling",
      title: "AC Service",
      subtitle: "Installation, Repair & Maintenance",
      description:
        "Split & Window AC deep servicing, Freon gas refilling, compressor repair, and PCB troubleshooting.",
      warranty: "30-Day Service Warranty",
      features: [
        "Deep Jet Pressure Cleaning",
        "Freon Gas Refilling & Leak Fix",
        "Compressor & PCB Repair",
        "New Unit Installation & Uninstallation",
      ],
      whatsappMsg: "Hi, I need AC repair/service in Siwan. Please share more details.",
    },
    {
      id: "refrigerator-service",
      category: "cooling",
      title: "Refrigerator",
      subtitle: "Repair & Maintenance",
      description:
        "Single Door, Double Door, Side-by-Side & Inverter Refrigerator repair with immediate cooling restoration.",
      warranty: "30-Day Service Warranty",
      features: [
        "No-Cooling & Low-Cooling Solution",
        "Gas Charging & Thermostat Fix",
        "Compressor Replacement",
        "Door Gasket & Defrost Repair",
      ],
      whatsappMsg: "Hi, I need Refrigerator repair/service in Siwan. Please share more details.",
    },
    {
      id: "washing-machine-service",
      category: "washing",
      title: "Washing Machine",
      subtitle: "Repair & Maintenance",
      description:
        "Top Load, Front Load, Semi-Automatic & Fully Automatic washing machine diagnostic and repair.",
      warranty: "30-Day Service Warranty",
      features: [
        "Drum Bearing & Belt Replacement",
        "Drain Pump & Water Inlet Fix",
        "Motor & PCB Board Repair",
        "Excess Noise & Vibration Fix",
      ],
      whatsappMsg: "Hi, I need Washing Machine repair/service in Siwan. Please share more details.",
    },
    {
      id: "geyser-service",
      category: "heating",
      title: "Geyser Service",
      subtitle: "Repair & Maintenance",
      description:
        "Electric & Gas Geyser servicing, heating element replacement, thermostat calibration, and leak repair.",
      warranty: "30-Day Service Warranty",
      features: [
        "Heating Element Replacement",
        "Thermostat & Cut-Off Repair",
        "Tank Cleaning & Descaling",
        "Pipe Fitting & Gas Geyser Repair",
      ],
      whatsappMsg: "Hi, I need Geyser repair/service in Siwan. Please share more details.",
    },
    {
      id: "installation-service",
      category: "setup",
      title: "Installation",
      subtitle: "Professional Installation Guaranteed",
      description:
        "Precision wall mounting, piping, unboxing, and structural setup for all home appliances.",
      warranty: "100% Precision Guarantee",
      features: [
        "AC Wall Mounting & Piping",
        "TV & Washing Machine Setup",
        "Geyser & Water Heater Fitting",
        "Post-Installation Safety Inspection",
      ],
      whatsappMsg: "Hi, I need appliance installation service in Siwan. Please share more details.",
    },
  ];

  const filteredServices =
    activeTab === "all"
      ? servicesList
      : servicesList.filter((s) => s.category === activeTab);

  return (
    <section id="services" className="py-20 sm:py-32 bg-[#08080A] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
          <FadeIn delay={0.05}>
            <p className="text-xs font-semibold tracking-widest text-[#D4AF37] uppercase mb-3">
              Our Expertise
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="font-serif-royal text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Services We <span className="gold-gradient-text">Provide</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="text-slate-400 text-sm sm:text-lg mb-8">
              High-precision repair, maintenance, and installation for all major household appliances in Siwan.
            </p>
          </FadeIn>

          {/* Category Filter Pills */}
          <FadeIn delay={0.2}>
            <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
              {[
                { id: "all", label: "All Services" },
                { id: "cooling", label: "AC & Refrigerator" },
                { id: "washing", label: "Washing Machine" },
                { id: "heating", label: "Geyser & Heater" },
                { id: "setup", label: "Installation" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`text-xs font-medium px-4 py-2 rounded-full border transition-all duration-200 ${
                    activeTab === tab.id
                      ? "gold-gradient-bg text-[#08080A] font-bold border-transparent shadow-md"
                      : "bg-[#10111a] text-slate-300 border-white/10 hover:border-[#D4AF37]/50"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* 2-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {filteredServices.map((service, index) => {
            const whatsappUrl = `https://wa.me/919661633901?text=${encodeURIComponent(service.whatsappMsg)}`;

            return (
              <FadeIn
                key={service.id}
                delay={0.08 * (index + 1)}
                className="h-full"
              >
                <div className="bg-[#0e0f14] border border-white/10 rounded-xl p-5 sm:p-7 card-hover-unique h-full flex flex-col justify-between group relative overflow-hidden">
                  <div>
                    {/* Top Header */}
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <span className="text-xs font-mono text-[#D4AF37] font-semibold">0{index + 1}</span>
                      <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-950/50 px-2.5 py-0.5 rounded-full border border-emerald-500/30 flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3" />
                        <span>{service.warranty}</span>
                      </span>
                    </div>

                    <h3 className="font-serif-royal text-xl sm:text-2xl font-bold text-white mb-1 group-hover:text-[#FFD700] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-3">
                      {service.subtitle}
                    </p>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5">
                      {service.description}
                    </p>

                    <div className="space-y-2 mb-6 border-t border-white/5 pt-4">
                      {service.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                          <span className="w-4 h-4 rounded-full bg-[#181926] border border-[#D4AF37]/40 flex items-center justify-center text-[#FFD700] shrink-0">
                            <Check className="w-2.5 h-2.5" />
                          </span>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Two Small Action Buttons */}
                  <div className="pt-4 border-t border-white/5 flex items-center gap-2.5">
                    <a
                      href="tel:+919661633901"
                      className="flex-1 bg-[#161724] hover:bg-[#D4AF37] hover:text-[#08080A] text-[#FFD700] text-xs font-semibold py-2.5 px-3 rounded-full border border-[#D4AF37]/30 flex items-center justify-center gap-1.5 transition-all duration-200 shadow-sm"
                    >
                      <Phone className="w-3.5 h-3.5 fill-current" />
                      <span>Call</span>
                    </a>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-emerald-950/50 hover:bg-emerald-900/80 text-emerald-300 text-xs font-semibold py-2.5 px-3 rounded-full border border-emerald-500/40 flex items-center justify-center gap-1.5 transition-all duration-200 shadow-sm"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400/20" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
