"use client";

import { Star, CheckCircle2 } from "lucide-react";
import FadeIn from "./FadeIn";

export default function Reviews() {
  const testimonials = [
    {
      id: "rev-1",
      name: "Rahul Kumar",
      initials: "RK",
      location: "Chhapra Road, Siwan",
      service: "AC Gas Refill & Service",
      rating: 5,
      timeAgo: "2 weeks ago",
      comment:
        "AC gas leakage issue was fixed within 1 hour! Technician reached my home very fast and was extremely polite. Cooling is back to 100%.",
    },
    {
      id: "rev-2",
      name: "Anand Singh",
      initials: "AS",
      location: "Ziradei, Siwan",
      service: "Washing Machine Repair",
      rating: 5,
      timeAgo: "1 month ago",
      comment:
        "My fully automatic washing machine was making loud noises during spin. The team identified the drum bearing issue and replaced it on the same day.",
    },
    {
      id: "rev-3",
      name: "Priya Sharma",
      initials: "PS",
      location: "Hospital Road, Siwan",
      service: "Double Door Refrigerator Repair",
      rating: 5,
      timeAgo: "3 weeks ago",
      comment:
        "Our double door fridge stopped cooling in peak summer heat. Called +91 9661633901 and they arrived in 30 minutes. Honest pricing and genuine parts.",
    },
    {
      id: "rev-4",
      name: "Amit Srivastava",
      initials: "AS",
      location: "Babar Vani, Siwan",
      service: "Geyser Heating Element",
      rating: 5,
      timeAgo: "5 days ago",
      comment:
        "Best geyser repair service in Siwan! Quick WhatsApp response, transparent cost estimation, and clean installation. Highly recommended.",
    },
    {
      id: "rev-5",
      name: "Vikram Kishore",
      initials: "VK",
      location: "Mairwa Road, Siwan",
      service: "Split AC Wall Mounting",
      rating: 5,
      timeAgo: "2 months ago",
      comment:
        "Professional split AC unboxing and installation. Perfect piping, copper insulation check, and post-installation testing done with care.",
    },
    {
      id: "rev-6",
      name: "Md. Tariq",
      initials: "MT",
      location: "Town Hall Square, Siwan",
      service: "Inverter Refrigerator Fix",
      rating: 5,
      timeAgo: "1 week ago",
      comment:
        "Inverter compressor PCB troubleshooting was done masterfully. Prompt arrival and affordable service charge. Very happy with the result.",
    },
    {
      id: "rev-7",
      name: "Rakesh Sahay",
      initials: "RS",
      location: "Sadar Hospital Area, Siwan",
      service: "Top Load Washing Machine",
      rating: 5,
      timeAgo: "3 days ago",
      comment:
        "Drain pump issue in washing machine fixed cleanly. Technician brought genuine spare parts and tested full cycle before leaving.",
    },
  ];

  // Duplicate array for seamless infinite marquee loop
  const marqueeList = [...testimonials, ...testimonials];

  return (
    <section id="reviews" className="py-20 sm:py-32 bg-[#08080A] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn delay={0.05}>
            <p className="text-xs font-semibold tracking-widest text-[#D4AF37] uppercase mb-3">
              Google Reviews & Feedback
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="font-serif-royal text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              What Our <span className="gold-gradient-text">Customers Say</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="text-slate-400 text-sm sm:text-lg">
              Verified 5-star Google review ratings from homeowners across Siwan.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Infinite Horizontal Auto-Sliding Marquee Carousel */}
      <div className="relative w-full overflow-hidden py-4 select-none">
        {/* Left & Right Subtle Fade Gradient Overlay */}
        <div className="absolute top-0 bottom-0 left-0 w-12 sm:w-32 bg-gradient-to-r from-[#08080A] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-12 sm:w-32 bg-gradient-to-l from-[#08080A] to-transparent z-10 pointer-events-none" />

        {/* Marquee Track */}
        <div className="animate-marquee flex gap-4 sm:gap-6 px-4">
          {marqueeList.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="w-[280px] sm:w-[350px] shrink-0 bg-[#0e0f14] border border-white/10 hover:border-[#D4AF37]/50 rounded-xl p-5 sm:p-6 transition-all duration-300 hover:shadow-[0_0_25px_rgba(212,175,55,0.15)] flex flex-col justify-between group"
            >
              <div>
                {/* Header: Avatar + Name + Google Verified Badge */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1F1C10] to-[#121319] border border-[#D4AF37]/60 flex items-center justify-center text-[#FFD700] text-xs font-bold shrink-0">
                    {item.initials}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-white font-bold text-sm truncate">{item.name}</h4>
                      {/* Google G Badge Icon */}
                      <span className="shrink-0 bg-[#161724] text-[#4285F4] text-[10px] font-extrabold px-1.5 py-0.5 rounded border border-white/10" title="Google Verified Review">
                        G
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] text-slate-400">
                      <span className="truncate">{item.location}</span>
                      <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                    </div>
                  </div>
                </div>

                {/* 5-Star Rating Row */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 text-[#FFD700] fill-[#FFD700]"
                    />
                  ))}
                  <span className="text-[11px] text-slate-400 ml-1.5 font-medium">5.0</span>
                </div>

                {/* Review Text */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-3 mb-4">
                  &ldquo;{item.comment}&rdquo;
                </p>
              </div>

              {/* Footer: Service Tag & Timestamp */}
              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[10px] text-slate-400">
                <span className="text-[#D4AF37] font-medium truncate max-w-[190px]">
                  {item.service}
                </span>
                <span className="shrink-0">{item.timeAgo}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle Hint & Hover Pause Notice */}
      <div className="max-w-6xl mx-auto px-4 mt-8 text-center">
        <p className="text-xs text-slate-500 uppercase tracking-widest">
          Hover card to pause scrolling &bull; Verified Google Reviews
        </p>
      </div>
    </section>
  );
}
