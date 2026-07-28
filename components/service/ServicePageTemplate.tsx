import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { MandalaDivider } from "@/components/ui/MandalaDivider";
import { serviceShowcasePhotos } from "@/lib/service-images";
import type { ServiceCategory } from "@/data/services";
import { buildWhatsAppLink, defaultBookingMessage } from "@/lib/whatsapp";

export function ServicePageTemplate({ service }: { service: ServiceCategory }) {
  const whatsappHref = buildWhatsAppLink(defaultBookingMessage(service.label));
  const photo = serviceShowcasePhotos[service.slug];

  return (
    <>
      {/* Foto ao lado do título, não no fim da página: é a prova do trabalho
          e precisa aparecer antes de qualquer rolagem. Sem foto real, o texto
          ocupa a largura toda em vez de deixar uma moldura vazia no topo. */}
      <Section space="tight">
        <div
          className={
            photo
              ? "grid items-center gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:gap-14"
              : "max-w-2xl"
          }
        >
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-bronze">
              Serviços
            </p>
            <h1 className="mt-3 font-display text-4xl leading-[1.1] text-charcoal sm:text-5xl">
              {service.label}
            </h1>
            <p className="mt-5 max-w-xl text-base text-charcoal-soft">{service.intro}</p>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center justify-center rounded-full bg-charcoal px-6 py-3 text-sm font-medium text-ivory transition-transform hover:scale-[1.02]"
            >
              Agendar {service.label.toLowerCase()}
            </a>
          </div>

          {photo ? (
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              priority
              sizes="(min-width: 1024px) 360px, 100vw"
              className="aspect-3/4 w-full rounded-2xl object-cover shadow-[0_16px_44px_rgba(38,35,29,0.14)]"
            />
          ) : null}
        </div>
      </Section>

      {/* Lista com fio separador em vez de grade de cards: não sobra célula
          vazia quando a categoria tem 3 itens, e o olho desce em uma coluna só. */}
      <Section tone="stone" space="tight">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-bronze">
          O que está incluído
        </p>

        <ul className="mt-8 max-w-4xl border-t border-stone-dark/60">
          {service.items.map((item, i) => (
            <li
              key={item.name}
              className="grid gap-x-8 gap-y-1 border-b border-stone-dark/60 py-5 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] sm:py-6"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-display text-sm text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="font-display text-lg text-charcoal">{item.name}</h2>
              </div>
              <p className="text-sm leading-relaxed text-charcoal-soft sm:pt-1">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section space="tight">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="font-display text-2xl text-charcoal sm:text-3xl">
            A avaliação é o primeiro passo, sempre.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-charcoal-soft">
            Valores e duração variam de acordo com o que a sua pele, fio ou unha pedem
            no momento. Por isso preferimos confirmar tudo com você antes, pelo WhatsApp.
          </p>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center justify-center rounded-full bg-charcoal px-6 py-3 text-sm font-medium text-ivory transition-transform hover:scale-[1.02]"
          >
            Agendar {service.label.toLowerCase()}
          </a>
        </div>
      </Section>

      <MandalaDivider className="pb-16" />
    </>
  );
}
