import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { whyTulas } from "../../data/content";
import Reveal from "../ui/Reveal";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

function QuoteChapter({ item, index }) {
  const reduced = usePrefersReducedMotion();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const quoteY = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [40, -40]);
  const imageY = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [-30, 30]);
  const imageScale = useTransform(scrollYProgress, [0, 1], reduced ? [1, 1] : [1.08, 1]);
  const reversed = index % 2 === 1;

  return (
    <article
      ref={ref}
      className="grid min-h-[70vh] items-center gap-10 py-10 md:gap-14 lg:grid-cols-2 lg:gap-20 lg:py-16"
    >
      <div className={reversed ? "lg:order-2" : undefined}>
        <Reveal>
          <p className="text-[11px] font-semibold tracking-[0.24em] text-tis-teal-deep uppercase">
            {String(index + 1).padStart(2, "0")} · Why Tulas
          </p>
        </Reveal>
        <motion.div style={{ y: quoteY }}>
          <Reveal delay={0.06} variant="clipUp">
            <p className="mt-6 max-w-xl font-accent text-[2rem] leading-[1.12] text-tis-red italic sm:text-4xl md:text-5xl lg:text-[3.15rem]">
              “{item.quote}”
            </p>
          </Reveal>
        </motion.div>
        <Reveal delay={0.14}>
          <p className="mt-8 max-w-lg text-base leading-relaxed text-tis-muted md:text-lg">
            {item.body}
          </p>
        </Reveal>
      </div>

      <Reveal
        delay={0.1}
        variant="scaleIn"
        className={reversed ? "lg:order-1" : undefined}
      >
        <div className="relative overflow-hidden bg-tis-cream">
          <motion.div style={{ y: imageY }} className="will-change-transform">
            <motion.img
              src={item.image}
              alt={item.imageAlt}
              loading="lazy"
              style={{ scale: imageScale }}
              className="mx-auto h-[360px] w-auto object-contain object-bottom sm:h-[420px] md:h-[480px]"
            />
          </motion.div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-white to-transparent" />
        </div>
      </Reveal>
    </article>
  );
}

export default function WhyTulas() {
  return (
    <section id={whyTulas.id} className="bg-white px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.22em] text-tis-teal-deep uppercase">
            {whyTulas.title}
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl font-bold tracking-tight md:text-5xl">
            A school that chooses you back
          </h2>
        </Reveal>

        <div className="mt-10 md:mt-14">
          {whyTulas.items.map((item, index) => (
            <QuoteChapter key={item.quote} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
