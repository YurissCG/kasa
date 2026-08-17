export type ServiceItem = {
  name: string;
  description: string;
};

export type ServiceCategory = {
  slug: string;
  label: string;
  shortLabel: string;
  heroLine: string;
  intro: string;
  items: ServiceItem[];
};

// Estrutura baseada nos destaques reais do Instagram:
// unhas, sobrancelhas, cabeleleiro, cílios, lashes, massagem, estética.
export const serviceCategories: ServiceCategory[] = [
  {
    slug: "cabelo-mechas",
    label: "Cabelo & Mechas",
    shortLabel: "Cabelo",
    heroLine: "Coloração, cortes e transformações capilares.",
    intro:
      "Projetados de forma personalizada para valorizar sua beleza, respeitando a identidade e a essência de cada cliente.",
    items: [
      { name: "Corte e finalização", description: "Corte técnico com finalização pensada para o seu dia a dia, não só para o dia do salão." },
      { name: "Mechas e iluminação", description: "Técnicas de mechas personalizadas para o tom de pele e a raiz natural." },
      { name: "Coloração", description: "Coloração com curadoria de produto para manter a fibra do fio saudável." },
      { name: "Spa do cabelo", description: "Tratamento de reconstrução e hidratação profunda sob avaliação." },
    ],
  },
  {
    slug: "sobrancelha-cilios",
    label: "Sobrancelha & Cílios",
    shortLabel: "Sobrancelha & Cílios",
    heroLine: "Realce do olhar com precisão e delicadeza.",
    intro:
      "Design, micropigmentação, lash lift e brow lamination realizados sob uma análise individual, respeitando a harmonia e a naturalidade de cada rosto.",
    items: [
      { name: "Micropigmentação de sobrancelhas", description: "Técnica fio a fio ou sombreada, definida na avaliação." },
      { name: "Design de sobrancelhas", description: "Correção e manutenção do formato natural." },
      { name: "Extensão de cílios", description: "Aplicação fio a fio com curvatura e comprimento avaliados no local." },
      { name: "Lash lift", description: "Curvatura natural do cílio próprio, sem extensão." },
    ],
  },
  {
    slug: "unhas-spa",
    label: "Unhas & Spa",
    shortLabel: "Unhas",
    heroLine: "Beleza, cuidado e sofisticação em cada detalhe.",
    intro:
      "Manicure, pedicure e nail design com acabamento impecável, aliados a uma experiência de cuidado e bem-estar.",
    items: [
      { name: "Manicure e pedicure", description: "Cuidado completo com esterilização de material entre atendimentos." },
      { name: "Nail design", description: "Esmaltação em gel e decoração sob demanda." },
      { name: "Spa das mãos e pés", description: "Esfoliação e hidratação para quem quer o ritual completo." },
    ],
  },
  {
    slug: "massagem-estetica",
    label: "Massagem & Estética",
    shortLabel: "Estética",
    heroLine: "Cuidado que envolve beleza, equilíbrio e bem-estar.",
    intro:
      "Tratamentos faciais, corporais e massagens personalizados a partir das necessidades e objetivos de cada cliente.",
    items: [
      { name: "Estética facial", description: "Protocolos definidos após avaliação de pele." },
      { name: "Estética corporal", description: "Procedimentos indicados conforme objetivo e histórico." },
      { name: "Massagem", description: "Sessões de relaxamento e bem-estar." },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return serviceCategories.find((s) => s.slug === slug);
}
