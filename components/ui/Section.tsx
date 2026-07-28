import { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "ivory" | "stone";
  /** "tight" para blocos que seguem outro sem troca de assunto, evitando vão morto. */
  space?: "default" | "tight";
};

const spaceClass: Record<NonNullable<SectionProps["space"]>, string> = {
  default: "py-16 sm:py-24",
  tight: "py-10 sm:py-14",
};

export function Section({
  children,
  className = "",
  id,
  tone = "ivory",
  space = "default",
}: SectionProps) {
  const bg = tone === "stone" ? "bg-stone/40" : "bg-ivory";
  return (
    <section id={id} className={`${bg} ${spaceClass[space]}`}>
      <div className={`mx-auto max-w-6xl px-4 sm:px-6 ${className}`}>{children}</div>
    </section>
  );
}
