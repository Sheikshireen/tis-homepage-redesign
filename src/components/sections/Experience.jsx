import { motion } from "framer-motion";
import { ArrowUpRight, FileText } from "lucide-react";
import { ctas, experience } from "../../data/content";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

export default function Experience() {
  return (
    <section id={experience.id} className="relative overflow-hidden bg-tis-red text-white">
      <img
        src={experience.image}
        alt={experience.imageAlt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-[linear-gradient(125deg,rgba(120,1,28,0.94)_0%,rgba(28,28,28,0.72)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(96,186,177,0.22),transparent_45%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-24 md:grid-cols-[1.15fr_0.85fr] md:items-end md:gap-14 md:px-8 md:py-32">
        <Reveal variant="clipUp">
          <SectionHeading
            tone="light"
            eyebrow={experience.title}
            title={experience.headline}
            subtitle={experience.body}
          />
        </Reveal>

        <Reveal delay={0.12} className="flex flex-col gap-4">
          <motion.a
            href={ctas.virtualTour.href}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="interactive"
            whileHover={{ scale: 1.015 }}
            whileTap={{ scale: 0.985 }}
            className="group relative overflow-hidden border border-white/25 bg-white/10 p-6 backdrop-blur-sm transition hover:border-white/50 hover:bg-white/16 md:p-8"
          >
            <div className="absolute -right-6 -bottom-8 font-display text-7xl font-extrabold text-white/10 transition group-hover:text-white/16">
              VT
            </div>
            <div className="relative flex items-start justify-between gap-4">
              <div>
                <p className="text-xs tracking-[0.2em] text-tis-teal uppercase">Explore campus</p>
                <p className="mt-2 font-display text-2xl font-bold md:text-3xl">
                  {ctas.virtualTour.label}
                </p>
                <p className="mt-2 max-w-xs text-sm text-white/70">
                  Step into Tulas from wherever you are.
                </p>
              </div>
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-tis-red transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight size={18} aria-hidden="true" />
              </span>
            </div>
          </motion.a>

          <a
            href={ctas.brochure.href}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="interactive"
            className="inline-flex items-center justify-between gap-3 border border-white/20 px-5 py-4 text-sm font-medium transition hover:border-tis-teal hover:bg-white/8"
          >
            <span className="inline-flex items-center gap-2">
              <FileText size={16} aria-hidden="true" />
              {ctas.brochure.label}
            </span>
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
