import { Award } from "lucide-react";
import { recognition, visitors } from "../../data/content";
import Reveal, { Stagger, StaggerItem } from "../ui/Reveal";
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

        <Stagger
          className="hide-scrollbar mt-12 flex gap-4 overflow-x-auto pb-3 snap-x snap-mandatory"
          data-cursor="interactive"
          data-cursor-label="DRAG"
          stagger={0.1}
        >
          {recognition.rankings.map((item) => (
            <StaggerItem
              key={item.place}
              as="article"
              variant="fadeUp"
              className="group flex min-w-[min(82vw,360px)] shrink-0 snap-start gap-4 border border-tis-border bg-tis-card p-6 transition hover:border-tis-teal md:min-w-[380px]"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-tis-red/10 text-tis-red transition group-hover:bg-tis-red group-hover:text-tis-on-brand">
                <Award size={20} aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] text-tis-teal-deep uppercase">
                  {item.place}
                </p>
                <h3 className="mt-2 font-display text-lg font-bold leading-snug text-tis-fg md:text-xl">
                  {item.title}
                </h3>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.08} className="mt-14">
          <div className="mb-6 flex items-end justify-between gap-4">
            <h3 className="font-display text-xl font-bold text-tis-fg md:text-2xl">
              {visitors.title}
            </h3>
            <p className="text-xs tracking-[0.18em] text-tis-muted uppercase">
              {recognition.collaborationsLabel}
            </p>
          </div>
        </Reveal>

        <Stagger
          className="hide-scrollbar flex gap-5 overflow-x-auto pb-2 snap-x snap-mandatory"
          data-cursor="interactive"
          data-cursor-label="DRAG"
          stagger={0.08}
        >
          {visitors.items.map((person) => (
            <StaggerItem
              key={person.name}
              as="article"
              variant="scaleIn"
              className="w-[min(70vw,260px)] shrink-0 snap-start overflow-hidden border border-tis-border bg-tis-card sm:w-[280px]"
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
                <h4 className="font-display text-base font-bold text-tis-fg">{person.name}</h4>
                <p className="mt-2 text-sm leading-relaxed text-tis-secondary">{person.note}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
