import Link from "next/link";
import Image from "next/image";
import { PlaceholderImage } from "./PlaceholderImage";
import { serviceCardPhotos } from "@/lib/service-images";
import type { ServiceCategory } from "@/data/services";

/**
 * Card sem caixa: a foto em arco é o objeto, o texto vem solto embaixo.
 * A borda arredondada em volta de tudo era o que fazia as quatro
 * categorias lerem como componentes de biblioteca, e não como um índice
 * editorial.
 */
export function ServiceCard({
  service,
  index,
}: {
  service: ServiceCategory;
  index: number;
}) {
  const photo = serviceCardPhotos[service.slug];

  return (
    <Link href={`/${service.slug}`} className="group block">
      {/* Arco contido, não semicírculo: o raio cheio comia o topo da
          cabeça das clientes nas fotos mais fechadas. */}
      <div className="relative overflow-hidden rounded-t-[90px] bg-stone/60 lg:rounded-t-[120px]">
        {photo ? (
          <Image
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            sizes="(min-width: 1024px) 26vw, (min-width: 640px) 45vw, 90vw"
            className="aspect-4/5 w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
        ) : (
          <PlaceholderImage
            label={`Foto de ${service.label}`}
            aspect="portrait"
            className="rounded-none border-0"
          />
        )}
      </div>

      <div className="mt-5 flex items-baseline gap-3">
        <span className="font-display text-sm text-gold">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="font-display text-xl text-charcoal transition-colors group-hover:text-bronze">
          {service.label}
        </h3>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-charcoal-soft">{service.heroLine}</p>
    </Link>
  );
}
