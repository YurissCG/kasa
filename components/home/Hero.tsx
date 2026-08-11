import Image from "next/image";
import { buildWhatsAppLink, defaultBookingMessage } from "@/lib/whatsapp";

/**
 * Hero em duas colunas com a foto sangrando até a borda direita.
 * O texto ocupa o espaço negativo da imagem, que é o motivo de a foto
 * ter sido escolhida com a modelo deslocada para um dos lados.
 */
export function Hero() {
  const whatsappHref = buildWhatsAppLink(defaultBookingMessage());

  return (
    <section className="relative bg-ivory">
      <div className="mx-auto grid max-w-[1400px] items-stretch lg:grid-cols-[1fr_0.85fr]">
        <div className="flex flex-col justify-center px-5 pt-14 pb-12 sm:px-10 lg:py-28 lg:pl-16 xl:pl-24">
          <p className="label-eyebrow text-bronze">Belvedere, Belo Horizonte</p>

          {/* Os espaços explícitos antes de cada <br /> são necessários: sem
              eles o JSX concatena as linhas e o textContent sai "A
              excelênciaque a sua...", que é o que leitor de tela e
              indexador leem. */}
          <h1 className="text-display mt-6 text-charcoal">
            A excelência{" "}
            <br />
            que a sua{" "}
            <br />
            <em className="font-normal italic text-gold">autoestima</em> merece.
          </h1>

          <p className="mt-8 max-w-md text-base leading-relaxed text-charcoal-soft">
            Cabelo, sobrancelha e cílios, unhas, massagem e estética em um único
            endereço, com atendimento pensado para cada pessoa que entra pela porta.
          </p>

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
              href="#servicos"
              className="group inline-flex items-center justify-center gap-2 px-2 py-4 text-sm font-medium text-charcoal"
            >
              <span className="border-b border-stone-dark pb-1 transition-colors group-hover:border-gold group-hover:text-gold">
                Ver serviços
              </span>
            </a>
          </div>
        </div>

        <div className="relative min-h-[420px] lg:min-h-[680px]">
          <Image
            src="/images/banner/hero-editorial-provisorio.webp"
            alt="Retrato editorial de cabelo longo, imagem provisória de banner da Kasa Beauty"
            fill
            priority
            sizes="(min-width: 1024px) 46vw, 100vw"
            className="object-cover object-[60%_center]"
          />
          {/* Emenda suave com o creme da coluna de texto, para a foto não
              entrar como um retângulo colado ao lado do conteúdo. */}
          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-32 bg-gradient-to-r from-ivory to-transparent lg:block" />
        </div>
      </div>
    </section>
  );
}
