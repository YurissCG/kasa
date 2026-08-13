"use client";

import { useEffect, useRef } from "react";
import { videoTour } from "@/lib/service-images";
import { buildWhatsAppLink, defaultBookingMessage } from "@/lib/whatsapp";

/**
 * Vídeo real de uma visita à Kasa Beauty, em moldura vertical (o formato
 * original do Reels) em vez de esticado para tela cheia. Sem áudio: a
 * trilha do Reels original não tem licença confirmada para uso fora do
 * Instagram, e silencioso é o padrão seguro para autoplay em qualquer
 * navegador.
 */
export function VideoSection() {
  const whatsappHref = buildWhatsAppLink(defaultBookingMessage());
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // O autoplay do <video> não é pego pelo prefers-reduced-motion do CSS
    // (não é uma animação). Quem pediu menos movimento ao sistema operacional
    // recebe o pôster parado, com os controles nativos para tocar na mão.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      videoRef.current?.pause();
    }
  }, []);

  return (
    <section className="bg-stone/50 py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-10 lg:px-16 xl:px-24">
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="mx-auto w-full max-w-[300px]">
            <div className="relative overflow-hidden rounded-[2.5rem] border-[6px] border-charcoal bg-charcoal shadow-[0_24px_60px_rgba(38,35,29,0.22)]">
              <video
                ref={videoRef}
                className="aspect-[9/16] w-full object-cover"
                src={videoTour.src}
                poster={videoTour.poster}
                autoPlay
                muted
                loop
                playsInline
                controls
                aria-label="Vídeo de uma visita à Kasa Beauty: fachada, ambiente e um atendimento de sobrancelha"
              />
            </div>
          </div>

          <div className="text-center lg:text-left">
            <p className="label-eyebrow text-bronze">Registrado por quem visitou</p>
            <h2 className="text-display-sm mt-5 text-charcoal">
              A Kasa Beauty <em className="font-normal italic text-bronze">por dentro</em>.
            </h2>
            <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-charcoal-soft lg:mx-0">
              Fachada, ambiente e um atendimento real, do jeito que uma cliente
              registrou ao visitar. Sem produção, sem edição pesada, só o espaço
              e o cuidado como são no dia a dia.
            </p>
            <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-charcoal px-8 py-4 text-sm font-medium tracking-wide text-ivory transition-colors hover:bg-espresso"
              >
                Agendar pelo WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
