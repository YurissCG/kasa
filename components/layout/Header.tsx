"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { serviceCategories } from "@/data/services";

const navLinks = [
  { href: "/", label: "Início" },
  ...serviceCategories.map((s) => ({ href: `/${s.slug}`, label: s.shortLabel })),
  { href: "/contato", label: "Contato" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  // Fecha o menu ao trocar de rota (evita menu "preso" aberto no mobile).
  // Ajuste feito durante o render, não em um efeito, conforme recomendação do React
  // para "resetar estado quando uma prop muda".
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-stone-dark/50 bg-ivory/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-5 sm:px-10 lg:px-16 xl:px-24">
        <Link href="/" aria-label="Kasa Beauty, página inicial" className="shrink-0">
          <Image
            src="/brand/kasa-wordmark.png"
            alt="Kasa Beauty"
            width={407}
            height={220}
            priority
            className="h-9 w-auto sm:h-10"
          />
        </Link>

        <nav className="hidden md:block" aria-label="Navegação principal">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`label-eyebrow border-b pb-1 transition-colors ${
                      active
                        ? "border-gold text-gold"
                        : "border-transparent text-charcoal-soft hover:border-stone-dark hover:text-charcoal"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-stone-dark md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {open ? (
              <path d="M6 6L18 18M6 18L18 6" stroke="var(--color-charcoal)" strokeWidth="1.8" strokeLinecap="round" />
            ) : (
              <path d="M4 7H20M4 12H20M4 17H20" stroke="var(--color-charcoal)" strokeWidth="1.8" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Navegação mobile" className="border-t border-stone-dark/60 md:hidden">
          <ul className="flex flex-col px-5 py-2">
            {navLinks.map((link) => (
              <li key={link.href} className="border-b border-stone-dark/40 last:border-0">
                <Link
                  href={link.href}
                  className="block py-4 font-display text-lg text-charcoal active:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
