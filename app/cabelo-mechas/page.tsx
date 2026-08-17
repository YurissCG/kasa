import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePageTemplate } from "@/components/service/ServicePageTemplate";
import { getServiceBySlug } from "@/data/services";

const SLUG = "cabelo-mechas";

export function generateMetadata(): Metadata {
  const service = getServiceBySlug(SLUG);
  return {
    title: service?.label ?? "Serviço",
    description: service?.intro,
    keywords: service ? [service.label, ...service.items.map((i) => i.name)] : undefined,
  };
}

export default function Page() {
  const service = getServiceBySlug(SLUG);
  if (!service) return notFound();
  return <ServicePageTemplate service={service} />;
}
