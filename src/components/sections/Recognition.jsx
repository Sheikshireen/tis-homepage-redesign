import { Award } from "lucide-react";
import { recognition, visitors } from "../../data/content";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

export default function Recognition() {
  return (
    <section id={recognition.id} className="bg-tis-cream px-5 py-28 md:px-8 md:py-36">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow={recognition.title}
            title={recognition.headline}
            subtitle={recognition.subtitle}
          />
        </Reveal>

        <Reveal delay={0.08} className="mt-12">
          <div
            className="hide-scrollbar flex gap-4 overflow-x-auto pb-3 snap-x snap-mandatory"
            data-cursor="interactive"
            data-cursor-label="DRAG"
          >
            {recognition.rankings.map((item) => (
              <article
                key={item.place}
                className="group flex min-w-[min(82vw,360px)] shrink-0 snap-start gap-4 border border-tis-ink/10 bg-white p-6 transition hover:border-tis-teal md:min-w-[380px]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-tis-red/10 text-tis-red transition group-hover:bg-tis-red group-hover:text-white">
                  <Award size={20} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-[0.2em] text-tis-teal-deep uppercase">
                    {item.place}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-bold leading-snug text-tis-ink md:text-xl">
                    {item.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.12} className="mt-14">
          <div className="mb-6 flex items-end justify-between gap-4">
            <h3 className="font-display text-xl font-bold md:text-2xl">{visitors.title}</h3>
            <p className="text-xs tracking-[0.18em] text-tis-muted uppercase">
              {recognition.collaborationsLabel}
            </p>
          </div>
          <div
            className="hide-scrollbar flex gap-5 overflow-x-auto pb-2 snap-x snap-mandatory"
            data-cursor="interactive"
            data-cursor-label="DRAG"
          >
            {visitors.items.map((person) => (
              <article
                key={person.name}
                className="w-[min(70vw,260px)] shrink-0 snap-start overflow-hidden bg-white sm:w-[280px]"
              >
                <div className="aspect-[4/5] overflow-hidden bg-tis-cream-dark">
                  <img
                    src={person.image}
                    alt={person.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 hover:scale-[1.03]"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-display text-base font-bold">{person.name}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-tis-muted">{person.note}</p>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
