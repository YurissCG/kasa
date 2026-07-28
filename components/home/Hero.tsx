import { buildWhatsAppLink, defaultBookingMessage } from "@/lib/whatsapp";
import { MandalaPattern } from "@/components/ui/MandalaPattern";
import { MandalaDivider } from "@/components/ui/MandalaDivider";

export function Hero() {
  const whatsappHref = buildWhatsAppLink(defaultBookingMessage());

  return (
    <section className="relative overflow-hidden bg-ivory pt-16 pb-16 sm:pt-24 sm:pb-24">
      <MandalaPattern className="pointer-events-none absolute inset-0 h-full w-full text-gold" />

      {/* véu suave pra garantir contraste do texto sobre a textura */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ivory/40 via-ivory/70 to-ivory" />

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-bronze">
          Belvedere, Belo Horizonte
        </p>
        <h1 className="mt-4 font-display text-4xl leading-[1.1] text-charcoal sm:text-6xl">
          A excelência que a sua autoestima merece.
        </h1>
        <p className="mx-auto mt-5 max-w-md text-base text-charcoal-soft">
          Cabelo, sobrancelha e cílios, unhas, massagem e estética em um único endereço,
          com atendimento pensado para cada pessoa que entra pela porta.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center rounded-full bg-charcoal px-6 py-3 text-sm font-medium text-ivory transition-transform hover:scale-[1.02] sm:w-auto"
          >
            Agendar pelo WhatsApp
          </a>
          <a
            href="#servicos"
            className="inline-flex w-full items-center justify-center rounded-full border border-stone-dark px-6 py-3 text-sm font-medium text-charcoal transition-colors hover:border-gold hover:text-gold sm:w-auto"
          >
            Ver serviços
          </a>
        </div>
      </div>

      <MandalaDivider className="relative mt-16" />
    </section>
  );
}
