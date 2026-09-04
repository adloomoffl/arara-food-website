import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export const metadata: Metadata = {
  title: "ARARA FOOD | Tradition, packed for today",
  description: "Discover ARARA FOOD sweets, vegetables in brine, anchovy fish dry powder, and fish sauce pre-mix.",
  openGraph: {
    title: "ARARA FOOD | Tradition, packed for today",
    description: "Sweets, vegetables in brine, anchovy fish dry powder, and fish sauce pre-mix, presented with pride.",
    images: [{ url: "/og.png", width: 1733, height: 907, alt: "ARARA FOOD product range" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ARARA FOOD | Tradition, packed for today",
    description: "Sweets, vegetables in brine, anchovy fish dry powder, and fish sauce pre-mix, presented with pride.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
