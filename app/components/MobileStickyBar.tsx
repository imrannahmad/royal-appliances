"use client";

import { Phone, ArrowUpRight } from "lucide-react";

export default function MobileStickyBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#08080A]/95 border-t border-white/10 p-2.5 backdrop-blur-lg">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <a
          href="tel:+919661633901"
          className="flex-1 gold-gradient-bg text-[#08080A] font-bold text-xs py-3 px-3 rounded-full flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-transform"
        >
          <Phone className="w-3.5 h-3.5 fill-current" />
          <span>Call +91 9661633901</span>
        </a>
        <a
          href="https://wa.me/919661633901"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-slate-300 hover:text-white bg-[#12131c] border border-white/10 px-3 py-3 rounded-full flex items-center justify-center gap-1 font-medium active:scale-95 transition-transform"
        >
          <span>WhatsApp</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
        </a>
      </div>
    </div>
  );
}
