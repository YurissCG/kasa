import Image from "next/image";

/**
 * Faixa contínua entre seções. Serve de respiro e de transição entre o
 * creme e as faixas escuras, e repete as categorias sem virar mais uma
 * lista. A sequência aparece duas vezes no markup de propósito: a
 * animação desloca 50%, então a segunda cópia entra exatamente onde a
 * primeira saiu e o loop não tem emenda.
 */
export function Marquee({ items }: { items: string[] }) {
  const sequence = [...items, ...items];

  return (
    <div className="overflow-hidden bg-espresso py-5" aria-hidden="true">
      <div className="flex w-max animate-marquee items-center">
        {sequence.map((item, i) => (
          <span key={i} className="flex shrink-0 items-center">
            <span className="label-eyebrow px-8 text-sand/90">{item}</span>
            <Image
              src="/brand/kasa-mandala.png"
              alt=""
              width={18}
              height={18}
              className="h-[18px] w-[18px] shrink-0 opacity-70"
            />
          </span>
        ))}
      </div>
    </div>
  );
}
