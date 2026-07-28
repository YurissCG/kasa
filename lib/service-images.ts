export type ServicePhoto = {
  src: string;
  alt: string;
  /** Dimensões do arquivo em /public — usadas para reservar espaço e evitar CLS. */
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

/** Capa 4:3 de cada categoria na grade da home. */
export const serviceCardPhotos: Record<string, ServicePhoto> = {
  "cabelo-mechas": {
    src: "/images/cabelo/corte-ondulado-salao-kasa-beauty.webp",
    alt: "Cliente da Kasa Beauty de perfil após corte médio com ondas, no salão de parede de pedra",
    width: 800,
    height: 600,
  },
  "sobrancelha-cilios": {
    src: "/images/sobrancelha-cilios/design-sobrancelhas-cliente-maca.webp",
    alt: "Sobrancelhas recém-desenhadas de uma cliente deitada na maca da Kasa Beauty",
    width: 800,
    height: 600,
  },
  "unhas-spa": {
    src: "/images/unhas/esmaltacao-rosa-maos-cliente.webp",
    alt: "Mãos de cliente com esmaltação rosa em unhas curtas quadradas, feita na Kasa Beauty",
    width: 800,
    height: 600,
  },
  "massagem-estetica": {
    src: "/images/estetica/hidragloss-labios-resultado.webp",
    alt: "Resultado de hidragloss labial: lábios hidratados e com brilho após o procedimento de estética facial",
    width: 800,
    height: 600,
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
  // estética corporal no acervo — o slot segue com PlaceholderImage.
};
