import Image from "next/image";
import { LazyLoopVideo } from "@/components/ui/LazyLoopVideo";
import { videoManifesto } from "@/lib/service-images";

const pillars = [
  {
    title: "Diagnóstico personalizado",
    body: "Cada experiência começa com uma análise criteriosa. Nada é indicado sem compreender seus objetivos, seu histórico e as necessidades específicas dos seus fios, da sua pele e da sua beleza.",
  },
  {
    title: "Biossegurança como padrão",
    body: "Cuidado também é segurança. Ambientes preparados, materiais devidamente esterilizados e descartáveis de uso individual fazem parte da nossa rotina, com rigor, responsabilidade e excelência em cada detalhe.",
  },
  {
    title: "Experiência integrada e exclusiva",
    body: "Cabelo, olhar, unhas e estética em um único espaço, conectados por um mesmo propósito: oferecer uma experiência completa e personalizada. Profissionais especializados que compartilham conhecimento e atenção para que cada escolha faça sentido para você.",
  },
];

/**
 * Faixa escura entre duas seções creme. É o contraste que o site não
 * tinha: sem ela a página inteira é um degradê de bege e todas as
 * seções pesam igual.
 *
 * O vídeo no lugar de uma foto estática, no mesmo recorte em arco das
 * outras seções, é pedido explícito da dona: mesmo tratamento de
 * autoplay em loop do VideoSection, via LazyLoopVideo. Usa videoManifesto,
 * não videoTour: a cliente não gostou do mesmo vídeo repetido duas vezes
 * na página, então esta seção tem um vídeo próprio.
 */
export function ManifestoSection() {
  return (
    <section className="bg-espresso py-20 text-ivory sm:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-10 lg:px-16 xl:px-24">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <LazyLoopVideo
              src={videoManifesto.src}
              poster={videoManifesto.poster}
              className="aspect-4/5 w-full rounded-t-[140px] object-cover lg:rounded-t-[180px]"
              aria-label="Vídeo de duas profissionais da Kasa Beauty lavando o cabelo de uma cliente"
            />
            <Image
              src="/brand/kasa-mandala.png"
              alt=""
              width={120}
              height={120}
              aria-hidden="true"
              className="absolute -bottom-8 -right-4 h-20 w-20 opacity-90 sm:h-28 sm:w-28"
            />
          </div>

          <div>
            <p className="label-eyebrow text-gold">Por que a Kasa</p>
            <h2 className="text-display-sm mt-5 text-ivory">
              Aqui, excelência não é pressa: é{" "}
              <em className="font-normal italic text-gold-light">atenção aos detalhes</em>.
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-sand/70">
              Na Kasa, cada atendimento é pensado de forma individual, cuidadosa e
              personalizada.
            </p>

            <ul className="mt-10 space-y-0">
              {pillars.map((p, i) => (
                <li
                  key={p.title}
                  className="grid gap-x-6 gap-y-2 border-t border-ivory/15 py-6 sm:grid-cols-[auto_1fr]"
                >
                  <span className="font-display text-sm text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-lg text-ivory">{p.title}</h3>
                    <p className="mt-2 max-w-lg text-sm leading-relaxed text-sand/70">
                      {p.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <p className="mt-10 border-t border-ivory/15 pt-6 font-display text-base italic text-gold-light">
              Kasa Beauty. Onde o cuidado encontra a excelência.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
