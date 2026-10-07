import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { sports } from "../../data/content";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

export default function Sports() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = usePrefersReducedMotion();
  const active = sports.items[activeIndex] || sports.items[0];
  const listRef = useRef(null);

  useEffect(() => {
    if (reduced || paused) return undefined;
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % sports.items.length);
    }, 4500);
    return () => window.clearInterval(timer);
  }, [reduced, paused]);

  // Keep the active sport visible inside the list only — never scroll the page.
  useEffect(() => {
    const container = listRef.current;
    if (!container) return;
    const button = container.querySelector(`[data-sport-index="${activeIndex}"]`);
    if (!(button instanceof HTMLElement)) return;

    const buttonTop = button.offsetTop;
    const buttonBottom = buttonTop + button.offsetHeight;
    const viewTop = container.scrollTop;
    const viewBottom = viewTop + container.clientHeight;
    const padding = 12;

    if (buttonTop < viewTop + padding) {
      container.scrollTo({
        top: Math.max(0, buttonTop - padding),
        behavior: reduced ? "auto" : "smooth",
      });
    } else if (buttonBottom > viewBottom - padding) {
      container.scrollTo({
        top: buttonBottom - container.clientHeight + padding,
        behavior: reduced ? "auto" : "smooth",
      });
    }
  }, [activeIndex, reduced]);

  const activate = (index) => setActiveIndex(index);

  return (
    <section id={sports.id} className="overflow-hidden bg-tis-ink py-28 text-white md:py-36">
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

        <div
          className="mt-12 hidden gap-8 lg:mt-14 lg:grid lg:grid-cols-[1.25fr_0.75fr]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <Reveal variant="scaleIn" className="relative min-h-[520px] overflow-hidden bg-white/5">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.name}
                initial={reduced ? false : { opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduced ? undefined : { opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <img
                  src={active.image}
                  alt={`${active.name} at Tulas International School`}
                  className="h-full w-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-linear-to-t from-tis-ink via-tis-ink/35 to-transparent" />
                <div className="absolute right-0 bottom-0 left-0 p-8">
                  <p className="text-xs tracking-[0.22em] text-tis-teal uppercase">
                    Featured sport
                  </p>
                  <h3 className="mt-2 font-display text-4xl font-extrabold xl:text-5xl">
                    {active.name}
                  </h3>
                </div>
              </motion.div>
            </AnimatePresence>
          </Reveal>

          <div
            ref={listRef}
            className="hide-scrollbar max-h-[520px] space-y-2 overflow-y-auto pr-1"
          >
            {sports.items.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={item.name}
                  type="button"
                  data-sport-index={index}
                  data-cursor="interactive"
                  data-cursor-label="VIEW"
                  onMouseEnter={() => activate(index)}
                  onFocus={() => activate(index)}
                  onClick={() => activate(index)}
                  className={`flex w-full items-center gap-3 border-l-2 px-3 py-3 text-left transition ${
                    isActive
                      ? "border-tis-teal bg-white/10"
                      : "border-transparent hover:bg-white/5"
                  }`}
                >
                  <img
                    src={item.image}
                    alt=""
                    loading="lazy"
                    className="h-14 w-14 object-cover object-top"
                  />
                  <span className="font-display text-base font-semibold">{item.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        <Reveal delay={0.08} className="mt-10 lg:hidden">
          <div className="hide-scrollbar flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory">
            {sports.items.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => activate(index)}
                  data-cursor="interactive"
                  className={`relative w-[78vw] max-w-[320px] shrink-0 snap-start overflow-hidden text-left ${
                    isActive ? "ring-2 ring-tis-teal" : "ring-1 ring-white/10"
                  }`}
                >
                  <img
                    src={item.image}
                    alt={`${item.name} at Tulas International School`}
                    loading="lazy"
                    className="h-72 w-full object-cover object-top"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-tis-ink via-tis-ink/70 to-transparent p-4 pt-16">
                    <h3 className="font-display text-xl font-bold">{item.name}</h3>
                  </div>
                </button>
              );
            })}
          </div>
        </Reveal>

        <Reveal variant="clipUp" className="mt-14 md:mt-16">
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
