import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://arara-food.openai.site"),
  title: "ARARA FOOD | Tradition, packed for today",
  description: "Discover ARARA FOOD sweets, vegetables in brine and anchovy fish powder.",
  openGraph: {
    title: "ARARA FOOD | Tradition, packed for today",
    description: "Sweets, vegetables in brine and coastal anchovy powder, presented with pride.",
    images: [{ url: "/og.png", width: 1733, height: 907, alt: "ARARA FOOD product range" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ARARA FOOD | Tradition, packed for today",
    description: "Sweets, vegetables in brine and coastal anchovy powder, presented with pride.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
