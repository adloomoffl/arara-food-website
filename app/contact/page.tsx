import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Get In Touch | ARARA FOOD",
  description: "Contact ARARA FOOD for trade and product enquiries. Bring our sweets, brine-packed vegetables, anchovy fish dry powder and fish sauce pre-mix to your table or store.",
};

export default function ContactPage() {
  return <ContactContent />;
}
