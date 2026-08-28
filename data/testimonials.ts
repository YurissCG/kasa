export type Testimonial = {
  /** Texto da avaliação, exatamente como publicado no Google (sem reescrever). */
  quote: string;
  /** Nome de quem avaliou, como aparece no Google. */
  author: string;
  /** Nota de 1 a 5 dada pela cliente. */
  rating: number;
  /** Categoria de serviço citada, quando dá pra identificar. Opcional. */
  service?: string;
};

/**
 * Avaliações do Google exibidas na seção "Depoimentos" da home.
 *
 * ─────────────────────────────────────────────────────────────────────
 *  CONTEÚDO DE EXEMPLO — nada aqui é real. Está no ar só para a cliente
 *  ver o layout enquanto o Matheus envia o link do perfil certo do
 *  Google. Ele mesmo disse que há dois perfis (um sem comentários, um
 *  com avaliações); o ideal é unificar os dois no Google Business
 *  Profile antes de publicar de verdade.
 * ─────────────────────────────────────────────────────────────────────
 *
 *  Para colocar no ar com dados reais:
 *   1. `testimonialsArePlaceholder`  → false
 *   2. troque os itens de `testimonials` pelas avaliações reais
 *      (texto e nome iguais aos do Google, sem reescrever)
 *   3. `googleProfile.url`            → link real do perfil
 *   4. `googleProfile.rating` / `.count` → nota média e nº de avaliações reais
 *
 *  Enquanto o flag for true, a seção mostra um aviso de "conteúdo de
 *  exemplo" e nenhum aggregateRating entra no Schema.org — inventar nota
 *  pro Google é violação de política, e o projeto tem regra de zero
 *  conteúdo achado (ver README, "checklist de conteúdo real").
 */
export const testimonialsArePlaceholder = true;

export const googleProfile = {
  /** Link "ver todas as avaliações" do perfil no Google / Maps. */
  url: "https://www.google.com/maps/search/?api=1&query=Kasa%20Beauty%20Belvedere%20Belo%20Horizonte",
  /** Nota média exibida no Google. */
  rating: 5.0,
  /** Quantidade de avaliações. */
  count: 12,
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Fui super bem recebida desde a porta. A profissional entendeu exatamente o que eu queria no cabelo e o resultado ficou melhor do que eu esperava. Já virei cliente fixa.",
    author: "Marina Costa",
    rating: 5,
    service: "Cabelo & Mechas",
  },
  {
    quote:
      "Ambiente lindo, limpo e muito acolhedor. Fiz o design de sobrancelha e amei o cuidado com cada detalhe.",
    author: "Juliana R.",
    rating: 5,
    service: "Sobrancelha & Cílios",
  },
  {
    quote:
      "Melhor lugar do Belvedere para cuidar das unhas. Material esterilizado na frente da cliente, acabamento impecável e um atendimento que faz a gente relaxar de verdade.",
    author: "Camila Andrade",
    rating: 5,
    service: "Unhas & Spa",
  },
  {
    quote:
      "Saí de lá renovada. A massagem foi maravilhosa e a avaliação antes do procedimento me deixou muito segura.",
    author: "Patrícia Lima",
    rating: 5,
    service: "Massagem & Estética",
  },
  {
    quote:
      "Profissionais atenciosas e pontuais. Marquei pelo WhatsApp e foi tudo muito rápido e organizado.",
    author: "Fernanda M.",
    rating: 5,
  },
  {
    quote:
      "Já fiz cabelo, sobrancelha e unhas na Kasa e nunca tive do que reclamar. É o tipo de lugar em que você confia de olhos fechados.",
    author: "Letícia Oliveira",
    rating: 5,
    service: "Cabelo & Mechas",
  },
];
