type MandalaPatternProps = {
  className?: string;
};

/**
 * Versão em escala grande do motivo floral do logo, usada como textura
 * de fundo no hero — resolve a necessidade de uma imagem de banner sem
 * depender de foto nenhuma (evita usar foto de estoque de "um salão
 * genérico" fingindo ser o espaço real da Kasa Beauty).
 */
export function MandalaPattern({ className = "" }: MandalaPatternProps) {
  const petal = "M60 60 C 60 30, 78 18, 88 28 C 98 38, 88 60, 60 60 Z";

  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <g stroke="var(--color-gold)" strokeWidth="1" fill="none" opacity="0.5">
        <g transform="translate(120 120) scale(1.35)">
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <path key={angle} d={petal} transform={`rotate(${angle} 60 60)`} />
          ))}
        </g>
        <g transform="translate(300 300) scale(0.7)" opacity="0.55">
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <path key={angle} d={petal} transform={`rotate(${angle} 60 60)`} />
          ))}
        </g>
        <g transform="translate(330 70) scale(0.4)" opacity="0.4">
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <path key={angle} d={petal} transform={`rotate(${angle} 60 60)`} />
          ))}
        </g>
      </g>
    </svg>
  );
}
