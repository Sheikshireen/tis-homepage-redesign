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
  const quoteY = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [18, -18]);
  const imageY = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [-16, 16]);
  const reversed = index % 2 === 1;
  const panel = index % 2 === 0 ? "bg-[#f4d6de]" : "bg-[#d7ebe8]";

  return (
    <article
      ref={ref}
      className="grid items-center gap-8 py-10 md:gap-12 lg:grid-cols-2 lg:gap-16 lg:py-14"
    >
      <div className={reversed ? "lg:order-2" : undefined}>
        <p className="text-xs font-semibold tracking-[0.2em] text-tis-muted uppercase">
          Voice {String(index + 1).padStart(2, "0")}
        </p>

        <motion.div style={{ y: quoteY }} className="mt-4">
          <p className="max-w-xl font-accent text-[1.85rem] leading-[1.2] text-tis-red italic sm:text-4xl md:text-[2.75rem]">
            “{item.quote}”
          </p>
        </motion.div>

        <Reveal delay={0.1} variant="fadeUp">
          <p className="mt-6 max-w-lg text-base leading-relaxed text-tis-muted md:text-lg">
            {item.body}
          </p>
        </Reveal>
      </div>

      <Reveal
        delay={0.06}
        variant="scaleIn"
        className={reversed ? "lg:order-1" : undefined}
      >
        <div className={`relative overflow-hidden ${panel}`}>
          <motion.img
            src={item.image}
            alt={item.imageAlt}
            loading="lazy"
            style={{ y: imageY }}
            className="relative z-10 mx-auto h-[320px] w-auto object-contain object-bottom sm:h-[400px] md:h-[460px]"
          />
        </div>
      </Reveal>
    </article>
  );
}

export default function WhyTulas() {
  return (
    <section id={whyTulas.id} className="bg-white px-5 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-tis-red uppercase md:text-5xl lg:text-6xl">
            {whyTulas.title}
          </h2>
          <p className="mt-4 max-w-2xl font-display text-2xl font-bold tracking-tight text-tis-ink md:text-3xl">
            {whyTulas.headline}
          </p>
        </div>

        <div className="mt-10 border-t border-tis-ink/10 pt-6 md:mt-12 md:pt-8">
          {whyTulas.items.map((item, index) => (
            <QuoteChapter key={item.quote} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
