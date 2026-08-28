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
 *  CONTEÚDO REAL. Os depoimentos abaixo foram copiados das avaliações
 *  públicas do Google do salão da Meire (perfil histórico "Studio Meire
 *  Almeida"), com texto e nome iguais aos do Google — sem reescrever.
 *  Todas as avaliações incluídas são de 5 estrelas (confirmado pela
 *  cliente em 28/08/2026).
 *
 *  Só entraram aqui as avaliações com texto completo. As avaliações sem
 *  comentário (só nota) e as que aparecem truncadas com "… Mais" no
 *  Google ficaram de fora — reproduzir texto pela metade não vale.
 * ─────────────────────────────────────────────────────────────────────
 *
 *  Ainda pendente (o Matheus disse que há dois perfis do Google, um sem
 *  comentários e um com as avaliações): unificar os perfis no Google
 *  Business Profile e então preencher `googleProfile` com o link
 *  canônico + nota média + total de avaliações reais. Enquanto não
 *  houver um número oficial, o cabeçalho da seção NÃO mostra nota e
 *  nenhum aggregateRating entra no Schema.org — inventar nota é violação
 *  de política do Google e o projeto tem regra de zero conteúdo achado
 *  (ver README, "checklist de conteúdo real").
 */
export const testimonialsArePlaceholder = false;

export const googleProfile: {
  url: string;
  /** Nota média oficial — só preencher quando houver perfil unificado. */
  rating: number | null;
  /** Total de avaliações — só preencher quando houver perfil unificado. */
  count: number | null;
} = {
  /**
   * Link "ver todas as avaliações". Enquanto os dois perfis do Google não
   * forem unificados, aponta para a busca do Google/Maps pelo salão, não
   * para um perfil específico.
   */
  url: "https://www.google.com/maps/search/?api=1&query=Kasa%20Beauty%20Belvedere%20Belo%20Horizonte",
  rating: null,
  count: null,
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Frequento o espaço da Meire desde a abertura. Adoro lá. Além de super aconchegante, todo mundo é super receptivo, educado e prestativo. Em especial a Meire que é uma profissional excepcional, nunca me decepciona e é sempre fantástica. Sou cliente fiel.",
    author: "Sophia Bononi Bello",
    rating: 5,
  },
  {
    quote:
      "Adoro a Meire, só ela faz minha sobrancelha há anos. Todas as profissionais do salão são excelentes também.",
    author: "Alessandra Dias de Oliveira",
    rating: 5,
    service: "Sobrancelha & Cílios",
  },
  {
    quote:
      "Maravilhosa!!! Lugar aconchegante, bonito e muito organizado. O trabalho da Meire é impecável. Todas as atendentes são ótimas profissionais e simpáticas. Recomendo demais.",
    author: "Idnara Capanema",
    rating: 5,
  },
  {
    quote:
      "Studio Meire Almeida é um espaço aconchegante e ótimas pessoas trabalhando. Destaque para a Renatinha que faz as unhas! Super recomendo todas as meninas lá!",
    author: "Renata",
    rating: 5,
    service: "Unhas & Spa",
  },
  {
    quote:
      "Profissionais competentes e maravilhosas. Espaço agradável, musica ambiente, e um capuccino delicia!!",
    author: "Fabiana Bricio",
    rating: 5,
  },
  {
    quote:
      "Atendimento excelente. Só faço a sobracelha lá! Equipe sempre atenciosa.",
    author: "Allyne Capanema",
    rating: 5,
    service: "Sobrancelha & Cílios",
  },
  {
    quote: "Excelentes profissionais. Ambiente tranquilo e acolhedor.",
    author: "Alessandra Guimaraes",
    rating: 5,
  },
  {
    quote: "Ambiente acolhedor e profissionais competentes e gentis.",
    author: "Viví Velàno",
    rating: 5,
  },
];
