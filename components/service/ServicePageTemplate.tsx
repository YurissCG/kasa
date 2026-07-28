import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { MandalaDivider } from "@/components/ui/MandalaDivider";
import { serviceShowcasePhotos } from "@/lib/service-images";
import type { ServiceCategory } from "@/data/services";
import { buildWhatsAppLink, defaultBookingMessage } from "@/lib/whatsapp";

export function ServicePageTemplate({ service }: { service: ServiceCategory }) {
  const whatsappHref = buildWhatsAppLink(defaultBookingMessage(service.label));
  const photo = serviceShowcasePhotos[service.slug];

  return (
    <>
      <Section className="pt-8">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-bronze">Serviços</p>
        <h1 className="mt-3 max-w-2xl font-display text-4xl text-charcoal">{service.label}</h1>
        <p className="mt-4 max-w-xl text-base text-charcoal-soft">{service.intro}</p>
      </Section>

      <Section tone="stone">
        <div className="grid gap-6 sm:grid-cols-2">
          {service.items.map((item) => (
            <div
              key={item.name}
              className="rounded-2xl border border-stone-dark/60 bg-ivory p-6"
            >
              <h2 className="font-display text-lg text-charcoal">{item.name}</h2>
              <p className="mt-2 text-sm text-charcoal-soft">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          {photo ? (
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              sizes="(min-width: 1024px) 560px, 100vw"
              className="aspect-3/4 w-full rounded-2xl object-cover"
            />
          ) : (
            <PlaceholderImage label={`Trabalho real de ${service.label}`} aspect="portrait" />
          )}
          <div>
            <h2 className="font-display text-2xl text-charcoal">
              A avaliação é o primeiro passo, sempre.
            </h2>
            <p className="mt-3 max-w-md text-sm text-charcoal-soft">
              Valores e duração variam de acordo com o que a sua pele, fio ou unha pedem
              no momento. Por isso preferimos confirmar tudo com você antes, pelo WhatsApp.
            </p>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-charcoal px-6 py-3 text-sm font-medium text-ivory transition-transform hover:scale-[1.02]"
            >
              Agendar {service.label.toLowerCase()}
            </a>
          </div>
        </div>
      </Section>

      <MandalaDivider className="pb-16" />
    </>
  );
}
