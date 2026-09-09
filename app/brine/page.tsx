import type { Metadata } from "next";
import BrineContent from "./BrineContent";

export const metadata: Metadata = {
  title: "Vegetables in Brine, Anchovy Fish Dry Powder & Fish Sauce Pre-Mix | ARARA FOOD",
  description: "ARARA FOOD vegetables in brine — mango, lemon, green chilli, red chilli — and coastal pantry: anchovy fish dry powder and fish sauce pre-mix. Authentic flavour, beautifully preserved.",
};

export default function BrinePage() {
  return <BrineContent />;
}
