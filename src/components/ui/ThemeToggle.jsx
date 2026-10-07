import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

export default function ThemeToggle({ scrolled = false, className = "" }) {
  const { theme, toggleTheme } = useTheme();
  const reduced = usePrefersReducedMotion();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      data-cursor="interactive"
      data-cursor-label={isDark ? "LIGHT" : "DARK"}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`relative inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border transition ${
        scrolled
          ? "border-tis-border bg-tis-cream-dark/80 text-tis-fg hover:border-tis-red hover:text-tis-red"
          : "border-tis-on-brand/30 bg-tis-on-brand/10 text-tis-on-brand hover:bg-tis-on-brand/20"
      } ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={reduced ? false : { y: 10, opacity: 0, rotate: -40 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={reduced ? undefined : { y: -10, opacity: 0, rotate: 40 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {isDark ? <Sun size={16} aria-hidden="true" /> : <Moon size={16} aria-hidden="true" />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
