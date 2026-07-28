import { fullAddress, siteConfig } from "@/lib/site-config";
import { Section } from "@/components/ui/Section";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

export function LocationSection() {
  const mapsQuery = encodeURIComponent(fullAddress);

  return (
    <Section tone="stone" id="visite">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-bronze">Visite a clínica</p>
          <h2 className="mt-3 font-display text-3xl text-charcoal">{fullAddress}</h2>

          <dl className="mt-6 space-y-3 text-sm text-charcoal-soft">
            {siteConfig.hours.map((h) => (
              <div key={h.day} className="flex justify-between gap-4 border-b border-stone-dark/50 pb-2">
                <dt>{h.day}</dt>
                <dd>{h.time}</dd>
              </div>
            ))}
          </dl>

          <a
            href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gold hover:underline"
          >
            Abrir no Google Maps
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        <PlaceholderImage label="Mapa ou foto da fachada" aspect="landscape" />
      </div>
    </Section>
  );
}
