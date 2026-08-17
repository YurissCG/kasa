// Fonte única de verdade para dados reais do negócio.
// Tudo isso vem direto do Instagram @meirealmeidaclinic (bio, endereço, contato).
// Se algo mudar (endereço, telefone, horário), troque só aqui.

/**
 * URL final do site. Antes ficava hardcoded e duplicada em layout.tsx,
 * sitemap.ts e robots.ts, cada uma com um comentário "trocar pelo domínio
 * real" — trocar de fato exigia caçar as três. Agora é uma variável de
 * ambiente (configurar em Vercel > Settings > Environment Variables assim
 * que o domínio próprio estiver ativo), com o endereço do Vercel como
 * fallback pra funcionar sem configuração extra em preview/local.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://kasabeauty.vercel.app";

export const siteConfig = {
  name: "Kasa Beauty",
  legalName: "Meire Almeida Clinic",
  tagline: "Transformando autoestima com excelência, elegância e atendimento pensado para você.",
  instagramHandle: "meirealmeidaclinic",
  instagramUrl: "https://www.instagram.com/meirealmeidaclinic",
  whatsappNumber: "5531997780610", // wa.me/5531997780610, da bio do Instagram
  address: {
    street: "Rua Professor Carlos Pereira da Silva, 579",
    neighborhood: "Belvedere",
    city: "Belo Horizonte",
    state: "MG",
  },
  // Não confirmado no Instagram. Preencher com o horário real antes de publicar.
  hours: [
    { day: "Segunda a sexta", time: "A confirmar" },
    { day: "Sábado", time: "A confirmar" },
  ],
} as const;

export const fullAddress = `${siteConfig.address.street} - ${siteConfig.address.neighborhood}, ${siteConfig.address.city} - ${siteConfig.address.state}`;

/**
 * Termos reais do negócio para a tag <meta name="keywords"> e pra
 * conferência manual de que o vocabulário certo aparece nos títulos e
 * descrições. O Google ignora essa tag pra ranqueamento desde 2009 —
 * quem decide posição é o conteúdo visível (título, h1, texto da página).
 * Mantida por ser inofensiva e ainda lida por alguns diretórios e
 * mecanismos menores.
 */
export const siteKeywords = [
  "salão de beleza Belvedere",
  "salão de beleza Belo Horizonte",
  "cabelo e mechas BH",
  "sobrancelha e cílios Belo Horizonte",
  "micropigmentação de sobrancelha",
  "extensão de cílios",
  "manicure e pedicure Belvedere",
  "nail design",
  "massagem e estética BH",
  "estética facial e corporal",
  "Kasa Beauty",
];
