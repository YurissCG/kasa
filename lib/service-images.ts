export type ServicePhoto = {
  src: string;
  alt: string;
  /** Dimensões do arquivo em /public, usadas para reservar espaço e evitar CLS. */
  width: number;
  height: number;
};

/**
 * Fotos reais da Kasa Beauty, selecionadas do Instagram @meirealmeidaclinic.
 *
 * Um slug ausente aqui é intencional: significa que não existe foto real
 * adequada para aquela categoria, e o componente cai no PlaceholderImage.
 * Nunca reaproveite foto de outra categoria só para preencher o espaço
 * (Pilar 3/7: nada de imagem genérica fingindo ser o trabalho do salão).
 */

/** Fotos reais do espaço físico da Kasa Beauty, para a galeria "Conheça o espaço". */
export const spacePhotos: ServicePhoto[] = [
  {
    src: "/images/espaco/estacoes-espelho-arco-parede-branca.webp",
    alt: "Estações de trabalho da Kasa Beauty, com espelhos ovais sobre parede de tijolo branco",
    width: 750,
    height: 1000,
  },
  {
    src: "/images/espaco/ambiente-lavatorio-coluna-pedra.webp",
    alt: "Sala de lavagem da Kasa Beauty, com colunas de pedra e vista para o jardim",
    width: 750,
    height: 1000,
  },
  {
    src: "/images/espaco/prateleira-produtos-janela-jardim.webp",
    alt: "Prateleira de produtos e poltrona de atendimento da Kasa Beauty, com vista para o jardim",
    width: 750,
    height: 1000,
  },
  {
    src: "/images/espaco/entrada-placa-kasa-beauty-lanterna.webp",
    alt: "Entrada da Kasa Beauty, com a placa redonda na parede de pedra",
    width: 750,
    height: 1000,
  },
  {
    src: "/images/espaco/sala-espera-poltrona-orquidea.webp",
    alt: "Sala de espera da Kasa Beauty, com poltrona estofada e orquídea",
    width: 750,
    height: 1000,
  },
];

/**
 * Recorte de ~16s de um vídeo real de visita à Kasa Beauty (fachada,
 * ambiente e um atendimento de sobrancelha), sem áudio: a trilha original
 * do Reels não tem licença confirmada para uso fora do Instagram.
 */
export const videoTour = {
  src: "/video/tour-kasa-beauty.mp4",
  poster: "/video/tour-poster.webp",
  width: 540,
  height: 960,
};

export const serviceCardPhotos: Record<string, ServicePhoto> = {
  "cabelo-mechas": {
    src: "/images/cabelo/corte-ondulado-salao-kasa-beauty.webp",
    alt: "Cliente da Kasa Beauty de perfil após corte médio com ondas, no salão de parede de pedra",
    width: 720,
    height: 900,
  },
  "sobrancelha-cilios": {
    src: "/images/sobrancelha-cilios/design-sobrancelhas-cliente-maca.webp",
    alt: "Sobrancelhas recém-desenhadas de uma cliente deitada na maca da Kasa Beauty",
    width: 720,
    height: 900,
  },
  "unhas-spa": {
    src: "/images/unhas/maos-aneis-fachada-kasa-beauty.webp",
    alt: "Mãos com anéis apoiadas na fachada da Kasa Beauty, unhas em esmaltação nude",
    width: 1200,
    height: 1600,
  },
  "massagem-estetica": {
    src: "/images/estetica/hidragloss-labios-resultado.webp",
    alt: "Resultado de hidragloss labial: lábios hidratados e com brilho após o procedimento de estética facial",
    width: 720,
    height: 900,
  },
};

/** Foto 3:4 de trabalho real dentro de cada página de serviço. */
export const serviceShowcasePhotos: Record<string, ServicePhoto> = {
  "cabelo-mechas": {
    src: "/images/cabelo/luzes-cabelo-cacheado-kasa-beauty.webp",
    alt: "Cliente sorrindo com luzes acobreadas em cabelo cacheado, feitas no salão da Kasa Beauty",
    width: 750,
    height: 1000,
  },
  "sobrancelha-cilios": {
    src: "/images/sobrancelha-cilios/lash-lift-antes-depois.webp",
    alt: "Antes e depois de lash lift: cílios naturais curvados e alongados após o procedimento",
    width: 750,
    height: 1000,
  },
  "unhas-spa": {
    src: "/images/unhas/esmaltacao-vermelho-vinho-maos.webp",
    alt: "Mãos de cliente com esmaltação vermelho vinho e acabamento revisado, feita na Kasa Beauty",
    width: 750,
    height: 1000,
  },
  // "massagem-estetica" fica de fora: não há foto real de massagem ou de
  // estética corporal no acervo, então o slot segue com PlaceholderImage.
};
