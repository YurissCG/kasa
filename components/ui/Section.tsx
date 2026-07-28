import { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "ivory" | "stone";
};

export function Section({ children, className = "", id, tone = "ivory" }: SectionProps) {
  const bg = tone === "stone" ? "bg-stone/40" : "bg-ivory";
  return (
    <section id={id} className={`${bg} py-16 sm:py-24`}>
      <div className={`mx-auto max-w-6xl px-4 sm:px-6 ${className}`}>{children}</div>
    </section>
  );
}
