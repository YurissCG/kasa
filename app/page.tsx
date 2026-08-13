import { Hero } from "@/components/home/Hero";
import { Marquee } from "@/components/ui/Marquee";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { VideoSection } from "@/components/home/VideoSection";
import { EspacoSection } from "@/components/home/EspacoSection";
import { ManifestoSection } from "@/components/home/ManifestoSection";
import { LocationSection } from "@/components/home/LocationSection";
import { serviceCategories } from "@/data/services";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee items={serviceCategories.map((s) => s.label)} />
      <ServicesGrid />
      <VideoSection />
      <EspacoSection />
      <ManifestoSection />
      <LocationSection />
    </>
  );
}
