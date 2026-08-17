import { ServiceCard } from "@/components/ui/ServiceCard";
import { serviceCategories } from "@/data/services";

export function ServicesGrid() {
  return (
    <section id="servicos" className="bg-ivory py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-10 lg:px-16 xl:px-24">
        <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-8 border-b border-stone-dark/60 pb-8">
          <div className="max-w-2xl">
            <p className="label-eyebrow text-bronze">Nossas experiências</p>
            <h2 className="text-display-sm mt-4 text-balance text-charcoal">
              Seu momento, <em className="font-normal italic text-bronze">suas escolhas</em>.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-charcoal-soft">
              Aqui, você não escolhe apenas um serviço. Escolhe o que faz sentido
              para você. Cuidamos de cada detalhe com um olhar personalizado,
              respeitando a beleza, o estilo e a necessidade de cada cliente.
            </p>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-charcoal-soft">
            Quatro experiências de cuidado, um único propósito: valorizar você,
            da pele aos fios, das unhas aos pequenos detalhes que fazem toda a
            diferença.
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
