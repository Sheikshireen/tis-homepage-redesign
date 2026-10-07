import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { lifeAtTulas } from "../../data/content";
import Reveal from "../ui/Reveal";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

export default function LifeAtTulas() {
  const [active, setActive] = useState(0);
  const reduced = usePrefersReducedMotion();
  const item = lifeAtTulas.items[active];

  return (
    <section
      id={lifeAtTulas.id}
      className="bg-tis-ink px-5 py-28 text-tis-on-dark md:px-8 md:py-36"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-sm font-semibold tracking-[0.2em] text-tis-teal uppercase">
            {lifeAtTulas.title}
          </p>
          <h2 className="mt-4 max-w-xl font-display text-3xl font-bold tracking-tight md:text-5xl">
            One campus. Many ways to belong.
          </h2>
          <p className="mt-4 max-w-2xl text-sm tracking-[0.12em] text-on-panel-muted uppercase md:text-base md:tracking-[0.16em]">
            {lifeAtTulas.subtitle}
          </p>
        </Reveal>

        <div className="mt-10 flex gap-2 overflow-x-auto pb-2 md:mt-12 md:flex-wrap md:overflow-visible">
          {lifeAtTulas.items.map((entry, index) => {
            const isActive = index === active;
            return (
              <button
                key={entry.label}
                type="button"
                data-cursor="interactive"
                data-cursor-label="VIEW"
                onClick={() => setActive(index)}
                className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "border-tis-teal bg-tis-teal text-tis-on-teal"
                    : "border-tis-on-dark/25 text-on-panel-muted hover:border-tis-on-dark/50 hover:text-tis-on-dark"
                }`}
              >
                {entry.label}
              </button>
            );
          })}
        </div>

        <Reveal delay={0.08} className="mt-8 md:mt-10">
          <div className="grid items-stretch gap-6 overflow-hidden lg:grid-cols-[1.15fr_0.85fr]">
            <div className="relative min-h-[320px] overflow-hidden bg-panel-elevated md:min-h-[420px]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={item.label}
                  src={item.image}
                  alt={item.imageAlt}
                  loading="lazy"
                  initial={reduced ? false : { opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={reduced ? undefined : { opacity: 0 }}
                  transition={{ duration: 0.45 }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-linear-to-t from-tis-ink/80 via-transparent to-transparent" />
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={item.label}
                initial={reduced ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduced ? undefined : { opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="flex flex-col justify-end border border-tis-on-dark/15 bg-panel-elevated/40 p-6 md:p-8"
              >
                <p className="text-xs tracking-[0.2em] text-tis-teal uppercase">{item.label}</p>
                <p className="mt-4 font-accent text-2xl leading-snug text-tis-on-dark italic md:text-3xl">
                  {item.line}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
