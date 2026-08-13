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
 *
 * A seção fica bem abaixo da dobra, mas um <video autoPlay> começa a
 * baixar o arquivo assim que entra no DOM, não quando fica visível — os
 * 1,15 MB competiam com a foto do Hero por banda em conexão lenta e o
 * LCP saltava de ~1s pra 4,7s no Lighthouse mobile. Carrega e toca só
 * quando a seção se aproxima da viewport.
 */
export function VideoSection() {
  const whatsappHref = buildWhatsAppLink(defaultBookingMessage());
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        video.src = videoTour.src;
        video.load();
        if (!reducedMotion) {
          video.play().catch(() => {
            // Autoplay pode falhar por política do navegador; os controles
            // nativos seguem disponíveis pra tocar na mão.
          });
        }
        observer.disconnect();
      },
      { rootMargin: "400px" }
    );

    observer.observe(video);
    return () => observer.disconnect();
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
                poster={videoTour.poster}
                preload="none"
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
