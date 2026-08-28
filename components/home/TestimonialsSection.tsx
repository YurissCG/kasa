import { testimonials, googleProfile } from "@/data/testimonials";

const formatRating = (n: number) => n.toFixed(1).replace(".", ",");

/**
 * Cinco estrelas preenchidas conforme a nota, no dourado da marca.
 * role="img" + aria-label para o leitor de tela não soletrar cinco SVGs.
 */
function Stars({ rating }: { rating: number }) {
  const filled = Math.round(rating);
  return (
    <div
      role="img"
      aria-label={`${formatRating(rating)} de 5 estrelas`}
      className="flex gap-0.5 text-gold"
    >
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          width="15"
          height="15"
          viewBox="0 0 20 20"
          fill={i < filled ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.3"
          aria-hidden="true"
        >
          <path
            d="M10 1.8l2.55 5.17 5.7.83-4.12 4.02.97 5.68L10 14.82l-5.07 2.68.97-5.68L1.75 7.8l5.7-.83L10 1.8z"
            strokeLinejoin="round"
          />
        </svg>
      ))}
    </div>
  );
}

/**
 * Seção "Depoimentos" — avaliações reais do Google, entre "Por que a
 * Kasa" (os valores) e "Visite a clínica" (o CTA de agendamento): a
 * prova social entra logo antes do ponto de conversão.
 *
 * Faixa clara depois da faixa escura do Manifesto, mantendo o ritmo
 * claro/escuro do resto da página. Os cards têm um fundo stone suave em
 * vez de borda em volta — a caixa fechada é o que dava cara de template
 * nas outras seções.
 *
 * Os dados vêm de data/testimonials.ts — avaliações reais do Google do
 * salão da Meire, texto e nome iguais aos do Google. O cabeçalho não
 * mostra nota média porque os dois perfis do Google ainda não foram
 * unificados; quando houver um número oficial, preencher
 * `googleProfile.rating` / `.count` (ver comentário no data/).
 */
export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="bg-ivory py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-10 lg:px-16 xl:px-24">
        <div className="max-w-xl border-b border-stone-dark/60 pb-8">
          <p className="label-eyebrow text-bronze">Depoimentos</p>
          <h2 className="text-display-sm mt-5 text-charcoal">
            Quem passou pela Kasa,{" "}
            <em className="font-normal italic text-bronze">conta como foi</em>.
          </h2>
        </div>

        <ul className="mt-12 grid gap-x-6 gap-y-8 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <li
              key={t.author}
              className="flex flex-col rounded-2xl bg-stone/50 p-6 sm:p-7"
            >
              <Stars rating={t.rating} />
              <p className="mt-4 flex-1 text-sm leading-relaxed text-charcoal-soft">
                {t.quote}
              </p>
              <div className="mt-6 border-t border-stone-dark/50 pt-4">
                <p className="font-display text-base text-charcoal">{t.author}</p>
                {t.service && (
                  <p className="mt-0.5 text-xs text-bronze">{t.service}</p>
                )}
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex justify-center sm:justify-start">
          <a
            href={googleProfile.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center px-2 py-2 text-sm font-medium text-charcoal"
          >
            <span className="border-b border-stone-dark pb-1 transition-colors group-hover:border-gold group-hover:text-gold">
              Ver todas as avaliações no Google
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
