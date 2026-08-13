import Image from "next/image";
import { buildWhatsAppLink, defaultBookingMessage } from "@/lib/whatsapp";

/**
 * Hero em duas colunas com a foto sangrando até a borda direita.
 *
 * A foto é a fachada real da Kasa Beauty: placa redonda na parede de
 * pedra, sob as folhas de estrelítzia. Foto em alta resolução, sem
 * cliente em quadro, então não tem o risco de marca de terceiro que
 * derrubou as duas fotos de recepção usadas antes aqui (ver histórico).
 */
export function Hero() {
  const whatsappHref = buildWhatsAppLink(defaultBookingMessage());

  return (
    <section className="relative overflow-hidden bg-ivory">
      {/* No mobile a foto é uma faixa no topo e o texto vem abaixo; no
          desktop viram colunas lado a lado. Sobrepor os dois no mobile
          não funciona: a imagem é retrato e cabe inteira na altura, então
          o rosto cai justamente atrás do título e fica lavado pelo véu. */}
      <div className="mx-auto grid max-w-[1400px] items-stretch lg:grid-cols-[1fr_0.85fr]">
        <div className="row-start-2 flex flex-col justify-start px-5 pt-10 pb-14 sm:px-10 lg:col-start-1 lg:row-start-1 lg:justify-center lg:py-28 lg:pl-16 xl:pl-24">
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

          {/* items-start: sem isso o flex-col do mobile estica o botão para
              a largura toda, o que pesa demais na composição. */}
          <div className="mt-10 flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-3">
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

        <div className="relative row-start-1 min-h-[44svh] lg:col-start-2 lg:row-start-1 lg:min-h-[680px]">
          <Image
            src="/images/recepcao/fachada-kasa-beauty-parede-pedra.webp"
            alt="Fachada da Kasa Beauty: placa redonda com o logo na parede de pedra, na Rua Professor Carlos Pereira da Silva"
            fill
            priority
            sizes="(min-width: 1024px) 46vw, 100vw"
            className="object-cover object-[62%_50%]"
          />
          {/* Mobile: dissolve a base da faixa no creme do texto, para a
              transição não ser uma linha reta atravessando a tela. */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-ivory lg:hidden" />
          {/* Desktop: emenda lateral com a coluna de texto, para a foto não
              entrar como um retângulo colado ao lado do conteúdo. */}
          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-32 bg-gradient-to-r from-ivory to-transparent lg:block" />
        </div>
      </div>
    </section>
  );
}
