import Image from "next/image";
import { spacePhotos } from "@/lib/service-images";

/**
 * Galeria do espaço físico. Colunas de alturas alternadas, como na grade
 * de serviços: a grade perfeitamente alinhada é o que dava cara de
 * template no primeiro rascunho do site.
 */
export function EspacoSection() {
  return (
    <section className="bg-ivory py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-10 lg:px-16 xl:px-24">
        <div className="max-w-xl">
          <p className="label-eyebrow text-bronze">Conheça o espaço</p>
          <h2 className="text-display-sm mt-5 text-charcoal">
            Cada canto pensado para{" "}
            <em className="font-normal italic text-bronze">receber bem</em>.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-x-5 gap-y-5 sm:gap-x-6 sm:gap-y-6 lg:grid-cols-5">
          {spacePhotos.map((photo, i) => (
            <div
              key={photo.src}
              className={`overflow-hidden rounded-2xl ${i % 2 === 1 ? "lg:mt-10" : ""}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                sizes="(min-width: 1024px) 18vw, 45vw"
                className="aspect-4/5 w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
