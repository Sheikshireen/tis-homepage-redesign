import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight, ChevronDown, MessageSquareText } from "lucide-react";
import { useRef } from "react";
import { brand, ctas, hero } from "../../data/content";
import Button from "../ui/Button";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

export default function Hero({ onEnquire }) {
  const reduced = usePrefersReducedMotion();
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0, 0.35]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 64]);

  const line = {
    hidden: reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-tis-red text-white"
    >
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={hero.image}
          alt={hero.imageAlt}
          className={`absolute inset-[-4%] h-[108%] w-[108%] max-w-none object-cover ${
            reduced ? "" : "ken-burns"
          }`}
          fetchPriority="high"
        />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(120,1,28,0.94)_0%,rgba(185,1,36,0.78)_42%,rgba(28,28,28,0.52)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(96,186,177,0.32),transparent_38%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(28,28,28,0.55)_0%,transparent_42%)]" />
      {!reduced ? (
        <motion.div className="absolute inset-0 bg-tis-ink" style={{ opacity: overlayOpacity }} />
      ) : null}

      <motion.div
        style={{ y: contentY }}
        className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-24 pb-28 md:px-8 md:pt-28 md:pb-20 lg:pb-24"
      >
        <div className="max-w-3xl lg:max-w-4xl">
          <motion.p
            initial="hidden"
            animate="show"
            variants={line}
            className="font-display text-sm font-bold tracking-[0.1em] text-white/95 sm:text-base md:text-lg"
          >
            {brand.name}
          </motion.p>

          <motion.p
            initial="hidden"
            animate="show"
            variants={line}
            transition={{ delay: reduced ? 0 : 0.1 }}
            className="mt-4 text-[11px] font-semibold tracking-[0.22em] text-tis-teal uppercase sm:mt-5 sm:text-xs md:text-sm"
          >
            {hero.eyebrow}
          </motion.p>

          <h1 className="mt-3 font-display text-[2.55rem] leading-[0.96] font-extrabold tracking-tight sm:mt-4 sm:text-5xl md:text-6xl lg:text-[4.1rem] xl:text-[4.6rem]">
            <motion.span
              className="block"
              initial="hidden"
              animate="show"
              variants={line}
              transition={{ delay: reduced ? 0 : 0.18 }}
            >
              {brand.taglineLead}
            </motion.span>
            <span className="block">
              <motion.span
                className="font-accent inline-block text-[1.05em] font-normal italic text-tis-teal"
                initial={reduced ? false : { opacity: 0, y: 24, rotate: -4 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ delay: reduced ? 0 : 0.32, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                {brand.taglineAccent}
              </motion.span>{" "}
              <motion.span
                className="inline-block"
                initial="hidden"
                animate="show"
                variants={line}
                transition={{ delay: reduced ? 0 : 0.42 }}
              >
                {brand.taglineEnd}
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial="hidden"
            animate="show"
            variants={line}
            transition={{ delay: reduced ? 0 : 0.52 }}
            className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-white/85 sm:mt-5 sm:text-base md:mt-6 md:text-lg"
          >
            {hero.supporting}
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            variants={line}
            transition={{ delay: reduced ? 0 : 0.62 }}
            className="mt-6 flex flex-wrap items-center gap-3 sm:mt-7 md:mt-8"
          >
            <Button
              as="a"
              href={ctas.apply.href}
              target="_blank"
              rel="noopener noreferrer"
              variant="inverse"
              size="lg"
              className="shadow-[0_18px_40px_-18px_rgba(255,255,255,0.9)]"
            >
              {ctas.apply.label}
              <ArrowDownRight size={18} aria-hidden="true" />
            </Button>
            <Button type="button" variant="outline" size="lg" onClick={onEnquire}>
              <MessageSquareText size={18} aria-hidden="true" />
              {ctas.enquire.label}
            </Button>
          </motion.div>
        </div>
      </motion.div>

      <a
        href="#about"
        data-cursor="interactive"
        className="absolute bottom-24 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/70 md:bottom-8 md:flex"
        aria-label="Scroll to About TIS"
      >
        <span className="text-[10px] tracking-[0.24em] uppercase">Scroll</span>
        <span className="scroll-cue-line inline-flex h-9 w-5 items-start justify-center rounded-full border border-white/35 pt-1.5">
          <ChevronDown size={12} aria-hidden="true" />
        </span>
      </a>
    </section>
  );
}
