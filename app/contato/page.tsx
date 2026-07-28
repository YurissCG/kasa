import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { LocationSection } from "@/components/home/LocationSection";
import { buildWhatsAppLink, defaultBookingMessage } from "@/lib/whatsapp";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contato",
  description: `Fale com a ${siteConfig.name} pelo WhatsApp ou visite a clínica em ${siteConfig.address.neighborhood}, ${siteConfig.address.city}.`,
};

export default function ContatoPage() {
  const whatsappHref = buildWhatsAppLink(defaultBookingMessage());

  return (
    <>
      <Section className="pt-8">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-bronze">Contato</p>
        <h1 className="mt-3 max-w-xl font-display text-4xl text-charcoal">
          Fale direto com a recepção, sem formulário para preencher.
        </h1>
        <p className="mt-4 max-w-xl text-base text-charcoal-soft">
          A forma mais rápida de confirmar horário e valor é pelo WhatsApp — a mensagem
          já sai pronta, você só ajusta se quiser.
        </p>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-charcoal px-6 py-3 text-sm font-medium text-ivory transition-transform hover:scale-[1.02]"
        >
          Chamar no WhatsApp
        </a>
      </Section>
      <LocationSection />
    </>
  );
}
