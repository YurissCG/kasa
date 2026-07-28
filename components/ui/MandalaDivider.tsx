type MandalaDividerProps = {
  className?: string;
};

/**
 * Elemento de assinatura da marca: interpretação em linha do motivo
 * floral de 8 pétalas do logo da Kasa Beauty, usado como divisor.
 * Não é o logo em si, e sim um motivo derivado, leve, para uso repetido.
 */
export function MandalaDivider({ className = "" }: MandalaDividerProps) {
  return (
    <div
      role="img"
      aria-label="Motivo decorativo floral da Kasa Beauty"
      className={`flex items-center justify-center gap-3 ${className}`}
    >
      <span className="h-px w-10 bg-stone-dark" aria-hidden="true" />
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <g stroke="var(--color-gold)" strokeWidth="1.1">
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <path
              key={angle}
              d="M14 14 C 14 8, 18 6, 20 8 C 22 10, 20 14, 14 14 Z"
              transform={`rotate(${angle} 14 14)`}
            />
          ))}
        </g>
        <circle cx="14" cy="14" r="1.4" fill="var(--color-gold)" />
      </svg>
      <span className="h-px w-10 bg-stone-dark" aria-hidden="true" />
    </div>
  );
}
