import Link from "next/link";
import Image from "next/image";
import { fullAddress, siteConfig } from "@/lib/site-config";
import { serviceCategories } from "@/data/services";

export function Footer() {
  return (
    <footer className="bg-espresso text-ivory">
      <div className="mx-auto max-w-[1400px] px-5 pt-20 pb-10 sm:px-10 lg:px-16 xl:px-24">
        <div className="grid gap-12 border-b border-ivory/15 pb-14 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Image
              src="/brand/kasa-wordmark.png"
              alt="Kasa Beauty"
              width={407}
              height={220}
              className="h-11 w-auto"
            />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-sand/70">
              {siteConfig.tagline}
            </p>
          </div>

          <nav aria-label="Serviços">
            <p className="label-eyebrow text-gold">Serviços</p>
            <ul className="mt-5 space-y-3">
              {serviceCategories.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/${s.slug}`}
                    className="font-display text-sand transition-colors hover:text-gold-light"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="label-eyebrow text-gold">Visite</p>
            <address className="mt-5 space-y-3 text-sm not-italic leading-relaxed text-sand/70">
              <p>{fullAddress}</p>
              <p>
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-gold-light"
                >
                  @{siteConfig.instagramHandle}
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 pt-8 sm:flex-row sm:justify-between">
          {/* sand/50 dava 3.9:1 no espresso (WCAG AA pede 4.5:1); /60 passa. */}
          <p className="text-xs text-sand/60">
            © {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.
          </p>
          <Image
            src="/brand/kasa-mandala.png"
            alt=""
            width={80}
            height={80}
            aria-hidden="true"
            className="h-8 w-8 opacity-60"
          />
        </div>
      </div>
    </footer>
  );
}
