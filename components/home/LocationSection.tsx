import Image from "next/image";
import { fullAddress, siteConfig } from "@/lib/site-config";
import { buildWhatsAppLink, defaultBookingMessage } from "@/lib/whatsapp";

export function LocationSection() {
  const mapsQuery = encodeURIComponent(fullAddress);
  const whatsappHref = buildWhatsAppLink(defaultBookingMessage());

  return (
    <section id="visite" className="bg-stone/50 py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-10 lg:px-16 xl:px-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20">
          <div>
            <p className="label-eyebrow text-bronze">Visite a clínica</p>
            <h2 className="text-display-sm mt-5 max-w-lg text-charcoal">
              {siteConfig.address.street}
            </h2>
            <p className="mt-3 text-lg text-charcoal-soft">
              {siteConfig.address.neighborhood}, {siteConfig.address.city} /{" "}
              {siteConfig.address.state}
            </p>

            <dl className="mt-10 max-w-md">
              {siteConfig.hours.map((h) => (
                <div
                  key={h.day}
                  className="flex items-baseline justify-between gap-4 border-t border-stone-dark/70 py-4"
                >
                  <dt className="text-sm text-charcoal">{h.day}</dt>
                  <dd className="font-display text-sm text-charcoal-soft">{h.time}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-charcoal px-8 py-4 text-sm font-medium tracking-wide text-ivory transition-colors hover:bg-espresso"
              >
                Agendar pelo WhatsApp
              </a>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-2 py-4 text-sm font-medium text-charcoal"
              >
                <span className="border-b border-stone-dark pb-1 transition-colors group-hover:border-gold group-hover:text-gold">
                  Abrir no Google Maps
                </span>
              </a>
            </div>
          </div>

          <div className="relative">
            {/* Mapa em retângulo, não em arco: o arco comeria os cantos
                justamente onde ficam as ruas de referência. */}
            <div className="aspect-4/3 overflow-hidden rounded-2xl border border-stone-dark/70">
              <iframe
                title={`Mapa de localização: ${fullAddress}`}
                src={`https://maps.google.com/maps?q=${mapsQuery}&output=embed`}
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <Image
              src="/brand/kasa-mandala.png"
              alt=""
              width={120}
              height={120}
              aria-hidden="true"
              className="absolute -bottom-6 -left-4 h-20 w-20 opacity-80 sm:h-24 sm:w-24"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
