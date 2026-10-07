import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { useActiveSectionContext } from "../../context/ActiveSectionContext";
import { brand, ctas, navLinks } from "../../data/content";
import { getSectionIdFromHref, scrollToSection } from "../../utils/scrollToSection";
import Button from "../ui/Button";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

export default function Header({ onEnquire }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduced = usePrefersReducedMotion();
  const { activeId, activate } = useActiveSectionContext();
  const activeHref = activeId ? `#${activeId}` : "#top";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  const onNavClick = (event, href) => {
    const id = getSectionIdFromHref(href);
    if (!id) return;
    event.preventDefault();
    closeMenu();
    if (id === "top") {
      activate("");
      window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
      if (history.replaceState) history.replaceState(null, "", "#top");
      return;
    }
    activate(id);
    scrollToSection(id, { behavior: reduced ? "auto" : "smooth" });
  };

  return (
    <header
      className={`fixed top-2 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? "px-3 md:px-5" : "px-2 md:px-4"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between gap-3 px-3 py-1.5 transition-all duration-300 md:px-4 md:py-2 ${
          scrolled
            ? "rounded-full border border-tis-ink/6 bg-tis-cream/88 shadow-sm backdrop-blur-md"
            : "rounded-full bg-transparent"
        }`}
      >
        <a
          href="#top"
          className="flex items-center gap-2.5"
          data-cursor="interactive"
          onClick={(event) => onNavClick(event, "#top")}
        >
          <img
            src={brand.logo}
            alt={`${brand.name} logo`}
            width={40}
            height={40}
            className="h-9 w-9 rounded-full bg-white object-contain p-0.5 shadow-sm md:h-10 md:w-10"
          />
          <div className="hidden min-[420px]:block">
            <p
              className={`font-display text-sm font-bold leading-tight ${
                scrolled ? "text-tis-ink" : "text-white"
              }`}
            >
              {brand.shortName}
            </p>
            <p
              className={`text-[10px] tracking-wide md:text-[11px] ${
                scrolled ? "text-tis-muted" : "text-white/80"
              }`}
            >
              Tulas International
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const active = activeHref === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                data-cursor="interactive"
                aria-current={active ? "true" : undefined}
                onClick={(event) => onNavClick(event, link.href)}
                className={`relative rounded-full px-2.5 py-1.5 text-[13px] transition ${
                  active ? "font-extrabold" : "font-medium"
                } ${
                  scrolled
                    ? active
                      ? "text-tis-red"
                      : "text-tis-ink/70 hover:bg-tis-cream-dark hover:text-tis-red"
                    : active
                      ? "text-white"
                      : "text-white/75 hover:bg-white/10 hover:text-white"
                }`}
              >
                {link.label}
                <span
                  className={`absolute right-2.5 bottom-0.5 left-2.5 h-[2px] origin-left transition-transform duration-300 ${
                    scrolled ? "bg-tis-red" : "bg-tis-teal"
                  } ${active ? "scale-x-100" : "scale-x-0"}`}
                />
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-1.5">
          <a
            href={ctas.call.href}
            data-cursor="interactive"
            className={`hidden items-center gap-1.5 rounded-full px-2.5 py-1.5 text-[13px] font-medium sm:inline-flex ${
              scrolled ? "text-tis-ink" : "text-white"
            }`}
            aria-label={`Call admissions helpline ${ctas.call.label}`}
          >
            <Phone size={15} aria-hidden="true" />
            <span className="hidden xl:inline">{ctas.call.label}</span>
          </a>
          <Button
            as="a"
            href={ctas.apply.href}
            target="_blank"
            rel="noopener noreferrer"
            size="sm"
            className="hidden sm:inline-flex"
          >
            {ctas.apply.label}
          </Button>
          <button
            type="button"
            className={`inline-flex rounded-full p-2 lg:hidden ${
              scrolled ? "bg-tis-ink text-white" : "bg-white/15 text-white"
            }`}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            data-cursor="interactive"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            className="fixed inset-0 z-40 bg-tis-ink/96 px-6 pt-24 pb-10 text-white lg:hidden"
            initial={reduced ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? undefined : { opacity: 0, y: -8 }}
          >
            <nav className="mx-auto flex max-w-md flex-col gap-1" aria-label="Mobile">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(event) => onNavClick(event, link.href)}
                  data-cursor="interactive"
                  className={`rounded-2xl px-4 py-3 font-display text-2xl ${
                    activeHref === link.href
                      ? "font-extrabold text-tis-teal"
                      : "font-semibold text-white/80"
                  }`}
                  initial={reduced ? false : { opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="mt-6 flex flex-col gap-3">
                <Button as="a" href={ctas.apply.href} target="_blank" rel="noopener noreferrer">
                  {ctas.apply.label}
                </Button>
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => {
                    closeMenu();
                    onEnquire?.();
                  }}
                >
                  {ctas.enquire.label}
                </Button>
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
