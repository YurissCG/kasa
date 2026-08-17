"use client";

import { useEffect, useRef } from "react";

type LazyLoopVideoProps = {
  src: string;
  poster: string;
  className?: string;
  "aria-label": string;
};

/**
 * Vídeo mudo em loop que só baixa e toca quando se aproxima da viewport.
 *
 * Um <video autoPlay> começa a baixar o arquivo assim que entra no DOM,
 * não quando fica visível. Numa seção abaixo da dobra isso competia por
 * banda com a foto do Hero e o LCP saltava de ~1s pra 4,7s no Lighthouse
 * mobile (ver commit que introduziu esse fix). O padrão aqui evita isso
 * em qualquer lugar do site que precise do mesmo vídeo em loop.
 */
export function LazyLoopVideo({
  src,
  poster,
  className,
  "aria-label": ariaLabel,
}: LazyLoopVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        video.src = src;
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
  }, [src]);

  return (
    <video
      ref={videoRef}
      className={className}
      poster={poster}
      preload="none"
      muted
      loop
      playsInline
      controls
      aria-label={ariaLabel}
    />
  );
}
