import Link from "next/link";
import Image from "next/image";
import { PlaceholderImage } from "./PlaceholderImage";
import { serviceCardPhotos } from "@/lib/service-images";
import type { ServiceCategory } from "@/data/services";

export function ServiceCard({ service }: { service: ServiceCategory }) {
  const photo = serviceCardPhotos[service.slug];

  return (
    <Link
      href={`/${service.slug}`}
      className="group block overflow-hidden rounded-2xl border border-stone-dark/70 bg-ivory transition-shadow hover:shadow-[0_10px_30px_rgba(38,35,29,0.10)]"
    >
      {photo ? (
        <Image
          src={photo.src}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          sizes="(min-width: 1024px) 264px, (min-width: 640px) 50vw, 100vw"
          className="aspect-4/3 w-full object-cover"
        />
      ) : (
        <PlaceholderImage label={`Foto de ${service.label}`} aspect="landscape" className="rounded-none rounded-t-2xl border-0" />
      )}
      <div className="p-5">
        <h3 className="font-display text-lg text-charcoal">{service.label}</h3>
        <p className="mt-1 text-sm text-charcoal-soft">{service.heroLine}</p>
        <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-gold group-hover:gap-2 transition-all">
          Ver detalhes
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 12H19M13 6L19 12L13 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
