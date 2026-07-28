import { siteConfig } from "./site-config";

/**
 * Monta um link wa.me seguro, com a mensagem já mastigada
 * (URI-encoded) para reduzir fricção no atendimento.
 */
export function buildWhatsAppLink(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`;
}

export function defaultBookingMessage(serviceName?: string): string {
  if (serviceName) {
    return `Olá! Vi o site da Kasa Beauty e gostaria de agendar uma avaliação para ${serviceName}.`;
  }
  return "Olá! Vi o site da Kasa Beauty e gostaria de agendar um horário.";
}
