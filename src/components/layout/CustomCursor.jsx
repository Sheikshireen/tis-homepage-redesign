import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

export default function CustomCursor() {
  const canHover = useMediaQuery("(hover: hover) and (pointer: fine)");
  const reduced = usePrefersReducedMotion();
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [label, setLabel] = useState("");

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 380, damping: 32, mass: 0.3 });
  const springY = useSpring(y, { stiffness: 380, damping: 32, mass: 0.3 });
  const ringX = useSpring(x, { stiffness: 180, damping: 24, mass: 0.45 });
  const ringY = useSpring(y, { stiffness: 180, damping: 24, mass: 0.45 });

  useEffect(() => {
    if (!canHover || reduced) return undefined;

    document.documentElement.classList.add("cursor-none-desktop");

    const onMove = (event) => {
      x.set(event.clientX);
      y.set(event.clientY);
      setVisible(true);
    };

    const onLeave = () => {
      setVisible(false);
      setPressed(false);
    };

    const onOver = (event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const interactive = target.closest(
        'a, button, [data-cursor="interactive"], [role="button"], input, select, textarea, label',
      );
      setActive(Boolean(interactive));
      setLabel(interactive?.getAttribute?.("data-cursor-label") || "");
    };

    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerover", onOver, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    window.addEventListener("pointerup", onUp, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      document.documentElement.classList.remove("cursor-none-desktop");
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, [canHover, reduced, x, y]);

  if (!canHover || reduced) return null;

  const expanded = active || Boolean(label);

  return (
    <>
      {/* Trailing ring */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[119] mix-blend-difference"
        animate={{ scale: pressed ? 0.72 : 1 }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: visible ? 0.85 : 0,
        }}
      >
        <div
          className={`rounded-full border border-white/70 transition-[width,height] duration-300 ease-out ${
            expanded ? "h-16 w-16" : "h-9 w-9"
          }`}
        />
      </motion.div>

      {/* Core indicator */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[120] mix-blend-difference"
        animate={{ scale: pressed ? 0.85 : 1 }}
        transition={{ type: "spring", stiffness: 420, damping: 30 }}
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: visible ? 1 : 0,
        }}
      >
        <div
          className={`flex items-center justify-center rounded-full transition-[width,height,background-color] duration-200 ease-out ${
            expanded
              ? "h-12 w-12 border border-white/90 bg-white/15"
              : "h-2.5 w-2.5 bg-white"
          }`}
        >
          {label ? (
            <span className="text-[8px] font-bold tracking-[0.16em] text-white uppercase">
              {label}
            </span>
          ) : null}
        </div>
      </motion.div>
    </>
  );
}
