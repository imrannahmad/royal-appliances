"use client";

import FadeIn from "./FadeIn";

export default function AboutUs() {
  const stats = [
    { value: "10+", label: "Years Experience in Siwan" },
    { value: "1,200+", label: "Happy Customers Served" },
    { value: "30 Min", label: "Average Rapid Arrival" },
    { value: "100%", label: "Genuine Parts Guarantee" },
  ];

  return (
    <section id="about" className="py-20 sm:py-32 bg-[#090A0E] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <FadeIn delay={0.05}>
            <p className="text-xs font-semibold tracking-widest text-[#D4AF37] uppercase mb-3">
              About Us
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="font-serif-royal text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 tracking-tight leading-tight">
              Welcome to <span className="gold-gradient-text">The Royal Appliances</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="text-slate-300 text-sm sm:text-lg leading-relaxed mb-8 sm:mb-10">
              We are your trusted partner for all kinds of home appliance services in <span className="text-white font-medium">Siwan, Bihar</span>.
              From Repair to Installation, we provide Fast, Reliable & Professional service at your doorstep.
            </p>
          </FadeIn>

          {/* Minimal Highlight Banner */}
          <FadeIn delay={0.2}>
            <div className="py-6 sm:py-8 border-y border-[#D4AF37]/30 text-center relative bg-gradient-to-r from-transparent via-[#161724] to-transparent">
              <p className="text-xl sm:text-3xl font-serif-royal gold-gradient-text font-semibold tracking-wide">
                &ldquo;One Call, We Do It All.&rdquo;
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Metric Counters Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {stats.map((st, i) => (
            <FadeIn key={i} delay={0.08 * (i + 1)}>
              <div className="bg-[#0e0f14] border border-white/10 rounded-xl p-5 text-center card-hover-unique">
                <span className="font-serif-royal text-2xl sm:text-4xl font-bold gold-gradient-text block mb-1">
                  {st.value}
                </span>
                <span className="text-[11px] sm:text-xs text-slate-400 font-medium uppercase tracking-wider">
                  {st.label}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <FadeIn delay={0.1} className="h-full">
            <div className="bg-[#0e0f14] border border-white/5 p-5 sm:p-6 rounded-xl card-hover-unique h-full">
              <h3 className="text-white font-semibold text-sm sm:text-base mb-2">Doorstep Convenience</h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Direct technician visits anywhere in Siwan district with rapid turnaround times.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.15} className="h-full">
            <div className="bg-[#0e0f14] border border-white/5 p-5 sm:p-6 rounded-xl card-hover-unique h-full">
              <h3 className="text-white font-semibold text-sm sm:text-base mb-2">Skilled Specialists</h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Experienced technicians trained across all major appliance brands and models.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="h-full">
            <div className="bg-[#0e0f14] border border-white/5 p-5 sm:p-6 rounded-xl card-hover-unique h-full">
              <h3 className="text-white font-semibold text-sm sm:text-base mb-2">Genuine Spare Parts</h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                We strictly use authentic replacement components for long-lasting performance.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.25} className="h-full">
            <div className="bg-[#0e0f14] border border-white/5 p-5 sm:p-6 rounded-xl card-hover-unique h-full">
              <h3 className="text-white font-semibold text-sm sm:text-base mb-2">Transparent Pricing</h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Upfront estimates before repairs begin with zero hidden charges or surprises.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
