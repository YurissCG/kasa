// Fonte única de verdade para dados reais do negócio.
// Tudo isso vem direto do Instagram @meirealmeidaclinic (bio, endereço, contato).
// Se algo mudar (endereço, telefone, horário), troque só aqui.

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
