import { Section } from "@/components/ui/Section";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { serviceCategories } from "@/data/services";

export function ServicesGrid() {
  return (
    <Section id="servicos">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-bronze">O que fazemos</p>
      <h2 className="mt-3 max-w-lg font-display text-3xl text-charcoal">
        Escolha pela sua necessidade, não por uma lista de preços.
      </h2>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {serviceCategories.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>
    </Section>
  );
}
