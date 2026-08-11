import Image from "next/image";
import { receptionPhoto } from "@/lib/service-images";

const pillars = [
  {
    title: "Avaliação antes do procedimento",
    body: "Nenhum protocolo é indicado sem uma conversa sobre objetivo, histórico e o que o seu fio ou a sua pele aguentam hoje.",
  },
  {
    title: "Biossegurança como rotina",
    body: "Material esterilizado entre atendimentos e descartáveis individuais, sem exceção e sem precisar pedir.",
  },
  {
    title: "Um endereço, todas as frentes",
    body: "Cabelo, olhar, unhas e estética na mesma casa, com as profissionais conversando entre si sobre o seu atendimento.",
  },
];

/**
 * Faixa escura entre duas seções creme. É o contraste que o site não
 * tinha: sem ela a página inteira é um degradê de bege e todas as
 * seções pesam igual.
 */
export function ManifestoSection() {
  // A recepção real, com a marca na parede, é a foto que sustenta esta
  // seção. O banner do topo é provisório e de banco de imagem, então aqui
  // é onde o salão de verdade aparece.
  const photo = receptionPhoto;

  return (
    <section className="bg-espresso py-20 text-ivory sm:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-10 lg:px-16 xl:px-24">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
          <div className="relative">
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="aspect-4/5 w-full rounded-t-[140px] object-cover lg:rounded-t-[180px]"
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
              O contrário de{" "}
              <em className="font-normal italic text-gold-light">procedimento de esteira</em>.
            </h2>

            <ul className="mt-12 space-y-0">
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
          </div>
        </div>
      </div>
    </section>
  );
}
