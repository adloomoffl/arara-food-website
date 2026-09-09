import type { Metadata } from "next";
import SweetsContent from "./SweetsContent";

export const metadata: Metadata = {
  title: "Heritage Sweets | ARARA FOOD",
  description: "Explore ARARA FOOD's range of heritage sweets — peanut bars, peanut balls, sesame bars and more. Crunch, comfort and a little joy.",
};

export default function SweetsPage() {
  return <SweetsContent />;
}
