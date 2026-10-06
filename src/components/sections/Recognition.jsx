import { Award } from "lucide-react";
import { recognition } from "../../data/content";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

export default function Recognition() {
  return (
    <section id={recognition.id} className="bg-tis-cream px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow={recognition.title}
            title="Recognised among India’s co-educational boarding schools"
            subtitle={recognition.subtitle}
          />
        </Reveal>

        <Reveal delay={0.08} className="mt-12 md:mt-14">
          <div className="hide-scrollbar flex gap-4 overflow-x-auto pb-3 snap-x snap-mandatory md:grid md:grid-cols-2 md:gap-5 md:overflow-visible md:pb-0">
            {recognition.rankings.map((item, index) => (
              <article
                key={item.place}
                className="group flex min-w-[min(85vw,340px)] shrink-0 snap-start gap-4 border border-tis-ink/10 bg-white p-6 transition duration-300 hover:border-tis-teal hover:shadow-[0_20px_50px_-36px_rgba(185,1,36,0.45)] md:min-w-0"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-tis-red/10 text-tis-red transition group-hover:bg-tis-red group-hover:text-white">
                  <Award size={20} aria-hidden="true" />
                  <span className="sr-only">Ranking {index + 1}</span>
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

        <Reveal delay={0.16}>
          <div className="mt-10 flex items-center gap-4">
            <span className="h-px flex-1 bg-tis-ink/10" />
            <p className="text-xs font-semibold tracking-[0.2em] text-tis-ink uppercase">
              {recognition.collaborationsLabel}
            </p>
            <span className="h-px flex-1 bg-tis-ink/10" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
