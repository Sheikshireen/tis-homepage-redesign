import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "../../data/content";
import Reveal, { Stagger, StaggerItem } from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

export default function Voices() {
  const trackRef = useRef(null);

  const scrollBy = (direction) => {
    const node = trackRef.current;
    if (!node) return;
    node.scrollBy({
      left: Math.min(420, node.clientWidth * 0.85) * direction,
      behavior: "smooth",
    });
  };

  return (
    <section id="voices" className="bg-surface px-5 py-28 md:px-8 md:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <SectionHeading
              eyebrow="Voices"
              title="From the families who know"
              subtitle="Honest words from Tulas parents — swipe to listen."
            />
          </Reveal>
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous testimonial"
              data-cursor="interactive"
              data-cursor-label="VIEW"
              onClick={() => scrollBy(-1)}
              className="rounded-full border border-tis-border p-2.5 text-tis-fg transition hover:border-tis-red hover:text-tis-red"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              data-cursor="interactive"
              data-cursor-label="VIEW"
              onClick={() => scrollBy(1)}
              className="rounded-full border border-tis-border p-2.5 text-tis-fg transition hover:border-tis-red hover:text-tis-red"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <Stagger
          ref={trackRef}
          className="hide-scrollbar mt-10 flex gap-5 overflow-x-auto pb-3 snap-x snap-mandatory"
          data-cursor="interactive"
          data-cursor-label="DRAG"
          stagger={0.1}
        >
          {testimonials.map((item, index) => (
            <StaggerItem
              key={`${item.name}-${item.relation}`}
              as="figure"
              variant="fadeUp"
              className={`w-[min(88vw,440px)] shrink-0 snap-start border border-tis-border border-l-2 bg-tis-card-secondary p-6 transition duration-300 md:p-8 ${
                index === 0 ? "border-l-tis-red scale-[1.01]" : "border-l-tis-border-strong"
              }`}
            >
              <blockquote className="font-accent text-xl leading-snug text-tis-fg italic md:text-2xl">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-8">
                <p className="font-display font-bold text-tis-fg">{item.name}</p>
                <p className="text-sm text-tis-secondary">{item.relation}</p>
              </figcaption>
            </StaggerItem>
          ))}
        </Stagger>
        <p className="mt-4 text-xs tracking-[0.16em] text-tis-muted uppercase">
          Swipe or use arrows · {testimonials.length} voices
        </p>
      </div>
    </section>
  );
}
