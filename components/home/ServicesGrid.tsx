import { ServiceCard } from "@/components/ui/ServiceCard";
import { serviceCategories } from "@/data/services";

export function ServicesGrid() {
  return (
    <section id="servicos" className="bg-ivory py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-10 lg:px-16 xl:px-24">
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-stone-dark/60 pb-8">
          <div>
            <p className="label-eyebrow text-bronze">O que fazemos</p>
            <h2 className="text-display-sm mt-4 max-w-2xl text-balance text-charcoal">
              Escolha pela sua necessidade, não por uma{" "}
              <em className="font-normal italic text-bronze">lista de preços</em>.
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-charcoal-soft">
            Quatro frentes, o mesmo padrão de avaliação antes de encostar em
            qualquer fio, pele ou unha.
          </p>
        </div>

        {/* Colunas alternadas em alturas diferentes: a grade perfeitamente
            alinhada era parte do que dava aparência de template. */}
        <div className="mt-14 grid grid-cols-2 gap-x-5 gap-y-12 sm:gap-x-8 lg:grid-cols-4 lg:gap-y-14">
          {serviceCategories.map((service, i) => (
            <div key={service.slug} className={i % 2 === 1 ? "lg:mt-16" : undefined}>
              <ServiceCard service={service} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
