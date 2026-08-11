import Image from "next/image";
import { serviceShowcasePhotos } from "@/lib/service-images";
import type { ServiceCategory } from "@/data/services";
import { buildWhatsAppLink, defaultBookingMessage } from "@/lib/whatsapp";

export function ServicePageTemplate({ service }: { service: ServiceCategory }) {
  const whatsappHref = buildWhatsAppLink(defaultBookingMessage(service.label));
  const photo = serviceShowcasePhotos[service.slug];

  return (
    <>
      {/* Foto junto do título, não no fim da página. Sem foto real, o texto
          ocupa a largura toda em vez de deixar uma moldura vazia no topo. */}
      <section className="bg-ivory pt-12 pb-16 sm:pt-16 sm:pb-20">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-10 lg:px-16 xl:px-24">
          <div
            className={
              photo
                ? "grid items-center gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-20"
                : "max-w-2xl"
            }
          >
            <div>
              <p className="label-eyebrow text-bronze">Serviços</p>
              <h1 className="text-display mt-6 text-charcoal">{service.label}</h1>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-charcoal-soft">
                {service.intro}
              </p>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-9 inline-flex items-center justify-center rounded-full bg-charcoal px-8 py-4 text-sm font-medium tracking-wide text-ivory transition-colors hover:bg-espresso"
              >
                Agendar {service.label.toLowerCase()}
              </a>
            </div>

            {photo ? (
              <div className="relative">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  priority
                  sizes="(min-width: 1024px) 360px, 100vw"
                  className="aspect-4/5 w-full rounded-t-[120px] object-cover lg:rounded-t-[150px]"
                />
                <Image
                  src="/brand/kasa-mandala.png"
                  alt=""
                  width={100}
                  height={100}
                  aria-hidden="true"
                  className="absolute -bottom-5 -left-4 h-16 w-16 opacity-80"
                />
              </div>
            ) : null}
          </div>
        </div>
      </section>

      {/* Faixa escura com os itens: nas categorias de 3 itens a grade de
          cards deixava uma célula vazia, e a lista com fio resolve. */}
      <section className="bg-espresso py-20 text-ivory sm:py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-10 lg:px-16 xl:px-24">
          <p className="label-eyebrow text-gold">O que está incluído</p>

          <ul className="mt-10 max-w-5xl">
            {service.items.map((item, i) => (
              <li
                key={item.name}
                className="grid gap-x-10 gap-y-2 border-t border-ivory/15 py-7 last:border-b sm:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-sm text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-display text-xl text-ivory">{item.name}</h2>
                </div>
                <p className="text-sm leading-relaxed text-sand/70 sm:pt-1.5">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-stone/50 py-20 sm:py-24">
        <div className="mx-auto max-w-2xl px-5 text-center sm:px-10">
          <Image
            src="/brand/kasa-mandala.png"
            alt=""
            width={100}
            height={100}
            aria-hidden="true"
            className="mx-auto h-12 w-12 opacity-70"
          />
          <h2 className="text-display-sm mt-8 text-charcoal">
            A avaliação é o{" "}
            <em className="font-normal italic text-bronze">primeiro passo</em>, sempre.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-charcoal-soft">
            Valores e duração variam de acordo com o que a sua pele, fio ou unha pedem
            no momento. Por isso preferimos confirmar tudo com você antes, pelo WhatsApp.
          </p>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex items-center justify-center rounded-full bg-charcoal px-8 py-4 text-sm font-medium tracking-wide text-ivory transition-colors hover:bg-espresso"
          >
            Agendar {service.label.toLowerCase()}
          </a>
        </div>
      </section>
    </>
  );
}
