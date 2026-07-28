type PlaceholderImageProps = {
  label: string;
  className?: string;
  aspect?: "square" | "portrait" | "landscape" | "wide";
};

const aspectClass: Record<NonNullable<PlaceholderImageProps["aspect"]>, string> = {
  square: "aspect-square",
  portrait: "aspect-3/4",
  landscape: "aspect-4/3",
  wide: "aspect-16/9",
};

/**
 * Placeholder visual para onde uma foto real da Kasa Beauty deve entrar.
 * Existe para o desenvolvimento não depender de banco de imagem genérico
 * (Pilar 3/7: nada de stock foto fingindo ser o espaço real do salão).
 * Troque por <Image> apontando para /public/images/... com as fotos reais.
 */
export function PlaceholderImage({
  label,
  className = "",
  aspect = "landscape",
}: PlaceholderImageProps) {
  return (
    <div
      role="img"
      aria-label={`Espaço reservado para foto: ${label}`}
      className={`${aspectClass[aspect]} ${className} flex flex-col items-center justify-center gap-2 rounded-2xl border border-stone-dark bg-stone/60 p-4 text-center`}
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="4" width="20" height="16" rx="2" stroke="var(--color-bronze)" strokeWidth="1.4" />
        <circle cx="8" cy="10" r="1.6" stroke="var(--color-bronze)" strokeWidth="1.4" />
        <path d="M4 17 L9 12 L13 15 L16 12 L20 16" stroke="var(--color-bronze)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="text-xs font-medium text-charcoal-soft">{label}</span>
    </div>
  );
}
