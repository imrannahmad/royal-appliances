"use client";

import FadeIn from "./FadeIn";

export default function LocationArea() {
  const localities = [
    "Hospital Road",
    "Chhapra Road",
    "Mairwa Road",
    "Ziradei Area",
    "Town Hall Square",
    "Babar Vani",
    "Tariya Market",
    "Gopalganj Road",
    "Ander Dhal",
    "Sadar Hospital Area",
    "Mahadeva",
    "Siwan Junction Area",
  ];

  return (
    <section id="location" className="py-20 sm:py-32 bg-[#090A0E] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <FadeIn delay={0.05}>
            <p className="text-xs font-semibold tracking-widest text-[#D4AF37] uppercase mb-3">
              Service Area
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="font-serif-royal text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Proudly Serving <span className="gold-gradient-text">Siwan, Bihar</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="text-slate-400 text-sm sm:text-lg">
              Providing fast doorstep appliance services across all major localities in Siwan district.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
          {/* Left Column: Localities */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6">
            <FadeIn delay={0.1}>
              <div className="bg-[#0e0f14] border border-white/5 p-5 sm:p-6 rounded-xl">
                <h3 className="font-serif-royal text-lg font-bold text-white mb-3">
                  Localities Covered in Siwan
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm mb-4">
                  Prompt technician dispatch to your doorstep:
                </p>

                <div className="flex flex-wrap gap-2">
                  {localities.map((loc, i) => (
                    <span
                      key={i}
                      className="text-[11px] sm:text-xs text-slate-300 bg-[#14151f] px-2.5 py-1.5 rounded-md border border-white/5"
                    >
                      {loc}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="p-5 sm:p-6 rounded-xl bg-[#0e0f14] border border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider">Book Doorstep Visit</p>
                  <p className="text-white font-serif-royal font-bold text-base sm:text-lg">+91 9661633901</p>
                </div>
                <a
                  href="tel:+919661633901"
                  className="w-full sm:w-auto text-center gold-gradient-bg text-[#08080A] font-bold text-xs px-5 py-2.5 rounded-full hover:opacity-95 transition-opacity whitespace-nowrap"
                >
                  Call Now
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Google Maps Iframe */}
          <div className="lg:col-span-7">
            <FadeIn delay={0.2}>
              <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                <iframe
                  title="The Royal Appliances Location Map Siwan Bihar"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57223.78440810146!2d84.32168434863282!3d26.221544499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3992fc751a021021%3A0x6b7858c2ad1c9eb8!2sSiwan%2C%20Bihar!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="360"
                  style={{ border: 0, filter: "brightness(0.9) contrast(1.05)" }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-[300px] sm:h-[360px]"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
