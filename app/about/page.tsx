import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us | ARARA FOOD",
  description: "The story behind ARARA FOOD — food that brings out the inner child. Learn about our values, heritage and commitment to honest ingredients.",
};

export default function AboutPage() {
  return <AboutContent />;
}
