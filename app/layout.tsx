import type { Metadata } from "next";
import { Cinzel, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "The Royal Appliances | AC, Refrigerator, Washing Machine & Geyser Repair in Siwan, Bihar",
  description: "The Royal Appliances - Premium Home Appliance Repair, Service & Installation in Siwan, Bihar. Comfort. Quality. Trust. Call +91 9661633901 for fast, reliable doorstep service.",
  keywords: [
    "The Royal Appliances",
    "Appliance Repair Siwan",
    "AC Service Siwan",
    "Fridge Repair Siwan",
    "Washing Machine Repair Siwan",
    "Geyser Repair Siwan",
    "Siwan Bihar Appliance Repair",
    "Doorstep Repair Service Siwan"
  ],
  authors: [{ name: "The Royal Appliances" }],
  openGraph: {
    title: "The Royal Appliances | Premium Appliance Repair in Siwan, Bihar",
    description: "Comfort. Quality. Trust. One Call, We Do It All. AC, Refrigerator, Washing Machine & Geyser Repair at your doorstep in Siwan.",
    url: "https://theroyalappliances.com",
    siteName: "The Royal Appliances",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${plusJakarta.variable} scroll-smooth dark h-full antialiased`}
    >
      <body className="min-h-full bg-[#08080A] text-slate-100 font-sans selection:bg-[#D4AF37]/30 selection:text-[#FFD700] flex flex-col">
        {children}
      </body>
    </html>
  );
}

