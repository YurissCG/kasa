import Link from "next/link";
import { fullAddress, siteConfig } from "@/lib/site-config";
import { serviceCategories } from "@/data/services";

export function Footer() {
  return (
    <footer className="border-t border-stone-dark/60 bg-stone/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-lg text-charcoal">
            kasa<span className="text-gold">.</span> beauty
          </p>
          <p className="mt-3 max-w-xs text-sm text-charcoal-soft">{siteConfig.tagline}</p>
        </div>

        <nav aria-label="Serviços">
          <p className="text-xs font-medium uppercase tracking-widest text-bronze">Serviços</p>
          <ul className="mt-4 space-y-2 text-sm">
            {serviceCategories.map((s) => (
              <li key={s.slug}>
                <Link href={`/${s.slug}`} className="text-charcoal-soft hover:text-gold">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-bronze">Visite</p>
          <address className="mt-4 space-y-1 text-sm not-italic text-charcoal-soft">
            <p>{fullAddress}</p>
            <p>
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold"
              >
                @{siteConfig.instagramHandle}
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-stone-dark/60 px-4 py-5 text-center text-xs text-charcoal-soft sm:px-6">
        © {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.
      </div>
    </footer>
  );
}
