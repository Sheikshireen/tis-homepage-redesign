import { useState } from "react";
import { sports } from "../../data/content";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

function SportCard({ item, active, onActivate }) {
  return (
    <article
      data-cursor="interactive"
      tabIndex={0}
      onMouseEnter={() => onActivate(item.name)}
      onFocus={() => onActivate(item.name)}
      className={`group relative w-[210px] shrink-0 snap-start overflow-hidden outline-none transition duration-500 sm:w-[250px] ${
        active ? "bg-white/12" : "bg-white/5"
      }`}
    >
      <img
        src={item.image}
        alt={`${item.name} at Tulas International School`}
        loading="lazy"
        className={`h-56 w-full object-cover object-top transition duration-500 sm:h-64 ${
          active ? "scale-105" : "scale-100 group-hover:scale-105"
        }`}
      />
      <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-tis-ink via-tis-ink/75 to-transparent p-4 pt-16">
        <h3 className="font-display text-lg font-bold">{item.name}</h3>
        <span
          className={`mt-2 block h-0.5 origin-left bg-tis-teal transition-transform duration-500 ${
            active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
          }`}
        />
      </div>
    </article>
  );
}

export default function Sports() {
  const [active, setActive] = useState(sports.items[0]?.name || "");
  const canHover = useMediaQuery("(hover: hover) and (pointer: fine)");
  const reduced = usePrefersReducedMotion();
  const useMarquee = canHover && !reduced;
  const loopItems = [...sports.items, ...sports.items];

  return (
    <section id={sports.id} className="overflow-hidden bg-tis-ink py-24 text-white md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionHeading
            tone="light"
            eyebrow={sports.title}
            title={
              <>
                <span className="text-tis-teal">{sports.question}</span> {sports.headline}
              </>
            }
            subtitle={sports.body}
          />
        </Reveal>
      </div>

      <Reveal delay={0.1} className="mt-12 md:mt-14">
        {useMarquee ? (
          <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-tis-ink to-transparent md:w-24" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-tis-ink to-transparent md:w-24" />
            <div className="marquee-track flex w-max gap-4 pr-4">
              {loopItems.map((item, index) => (
                <SportCard
                  key={`${item.name}-${index}`}
                  item={item}
                  active={active === item.name}
                  onActivate={setActive}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="hide-scrollbar flex gap-4 overflow-x-auto px-5 pb-2 snap-x snap-mandatory md:px-8">
            {sports.items.map((item) => (
              <SportCard
                key={item.name}
                item={item}
                active={active === item.name}
                onActivate={setActive}
              />
            ))}
          </div>
        )}
      </Reveal>

      <div className="mx-auto mt-14 max-w-7xl px-5 md:mt-16 md:px-8">
        <Reveal variant="clipUp">
          <blockquote className="max-w-3xl border-l-2 border-tis-teal pl-5 md:pl-8">
            <p className="font-accent text-2xl text-tis-teal italic md:text-3xl">
              {sports.secretPrompt}
            </p>
            <p className="mt-5 text-base leading-relaxed text-white/75 md:text-lg">
              {sports.secretAnswer}
            </p>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
