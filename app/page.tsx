import { Hero } from "@/components/home/Hero";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { LocationSection } from "@/components/home/LocationSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <LocationSection />
    </>
  );
}
