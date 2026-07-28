import { buildWhatsAppLink, defaultBookingMessage } from "@/lib/whatsapp";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { MandalaDivider } from "@/components/ui/MandalaDivider";

export function Hero() {
  const whatsappHref = buildWhatsAppLink(defaultBookingMessage());

  return (
    <section className="relative overflow-hidden bg-ivory pt-14 pb-16 sm:pt-20 sm:pb-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-bronze">
            Belvedere, Belo Horizonte
          </p>
          <h1 className="mt-4 font-display text-4xl leading-[1.1] text-charcoal sm:text-5xl">
            A excelência que a sua autoestima merece.
          </h1>
          <p className="mt-5 max-w-md text-base text-charcoal-soft">
            Cabelo, sobrancelha e cílios, unhas, massagem e estética em um único endereço,
            com atendimento pensado para cada pessoa que entra pela porta.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-charcoal px-6 py-3 text-sm font-medium text-ivory transition-transform hover:scale-[1.02]"
            >
              Agendar pelo WhatsApp
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center rounded-full border border-stone-dark px-6 py-3 text-sm font-medium text-charcoal transition-colors hover:border-gold hover:text-gold"
            >
              Ver serviços
            </a>
          </div>
        </div>

        <PlaceholderImage
          label="Foto do espaço Kasa Beauty (fachada ou recepção)"
          aspect="square"
          className="w-full"
        />
      </div>

      <MandalaDivider className="mt-16" />
    </section>
  );
}
