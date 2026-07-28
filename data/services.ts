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
    heroLine: "Cor, corte e textura tratados como projeto, não como padrão de prateleira.",
    intro:
      "Do corte estrutural às mechas de iluminação, cada atendimento parte do fio que você tem hoje, não de uma referência genérica de rede social.",
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
    heroLine: "Micropigmentação, design e extensão de cílios com avaliação individual antes de qualquer procedimento.",
    intro:
      "Sobrancelha e olhar pedem precisão — por isso todo procedimento começa com uma avaliação do formato do rosto e do fio natural.",
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
    heroLine: "Manicure, pedicure e nail design com o mesmo padrão de acabamento do resto da clínica.",
    intro:
      "Unhas bem cuidadas fazem parte da mesma experiência de excelência — biossegurança, materiais individuais e acabamento revisado.",
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
    heroLine: "Estética facial e corporal, e massagem, com avaliação antes de indicar qualquer protocolo.",
    intro:
      "Cada protocolo de estética é indicado depois de uma conversa sobre objetivo e histórico — não existe procedimento padrão para todo mundo.",
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
