"use client";

import { buildWhatsAppLink, defaultBookingMessage } from "@/lib/whatsapp";

type WhatsAppFloatingButtonProps = {
  serviceName?: string;
};

/**
 * CTA fixo, mas discreto (Pilar 1: thumb-zone, sem cobrir conteúdo
 * crítico, sem animação chamativa constante).
 */
export function WhatsAppFloatingButton({ serviceName }: WhatsAppFloatingButtonProps) {
  const href = buildWhatsAppLink(defaultBookingMessage(serviceName));

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-charcoal px-5 py-3 text-sm font-medium text-ivory shadow-[0_4px_18px_rgba(38,35,29,0.25)] transition-transform hover:scale-[1.03] focus-visible:scale-[1.03]"
      aria-label="Agendar pelo WhatsApp"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.39 1.26 4.81L2 22l5.42-1.36a9.87 9.87 0 0 0 4.62 1.15h.01c5.46 0 9.9-4.45 9.9-9.91C21.95 6.45 17.5 2 12.04 2Zm5.8 14.02c-.24.68-1.4 1.3-1.94 1.38-.5.08-1.13.11-1.82-.11-.42-.13-.96-.31-1.65-.6-2.9-1.25-4.8-4.16-4.94-4.35-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.02-2.41.27-.29.58-.36.78-.36.19 0 .39 0 .56.01.18.01.42-.07.66.5.24.58.83 2 .9 2.15.07.15.12.32.02.51-.1.19-.15.31-.3.48-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.75 1.24 1.61 2.01 1.11.99 2.04 1.3 2.33 1.44.29.14.46.12.63-.07.17-.19.72-.84.91-1.13.19-.29.38-.24.63-.14.26.1 1.65.78 1.93.92.29.14.48.21.55.33.07.12.07.68-.17 1.33Z" />
      </svg>
      Agendar
    </a>
  );
}
