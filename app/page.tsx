import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Reviews from "./components/Reviews";
import LocationArea from "./components/LocationArea";
import ContactFooter from "./components/ContactFooter";
import MobileStickyBar from "./components/MobileStickyBar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#08080A] text-slate-100 font-sans-royal selection:bg-[#D4AF37]/30 selection:text-[#FFD700] relative">
      {/* Sticky Navbar */}
      <Navbar />

      {/* 1. HERO */}
      <Hero />

      {/* 2. ABOUT US */}
      <AboutUs />

      {/* 3. SERVICES */}
      <Services />

      {/* 4. WHY CHOOSE US */}
      <WhyChooseUs />

      {/* 5. CUSTOMER REVIEWS */}
      <Reviews />

      {/* 6. SERVICE AREA / LOCATION */}
      <LocationArea />

      {/* 7. CONTACT / FOOTER */}
      <ContactFooter />

      {/* Mobile Sticky Quick Action Bar */}
      <MobileStickyBar />
    </main>
  );
}
