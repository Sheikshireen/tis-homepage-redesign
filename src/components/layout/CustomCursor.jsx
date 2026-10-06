import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

export default function CustomCursor() {
  const canHover = useMediaQuery("(hover: hover) and (pointer: fine)");
  const reduced = usePrefersReducedMotion();
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(false);
  const [label, setLabel] = useState("");

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 420, damping: 36, mass: 0.35 });
  const springY = useSpring(y, { stiffness: 420, damping: 36, mass: 0.35 });

  useEffect(() => {
    if (!canHover || reduced) return undefined;

    document.documentElement.classList.add("cursor-none-desktop");

    const onMove = (event) => {
      x.set(event.clientX);
      y.set(event.clientY);
      setVisible(true);
    };

    const onLeave = () => setVisible(false);

    const onOver = (event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const interactive = target.closest(
        'a, button, [data-cursor="interactive"], input, select, textarea, label',
      );
      setActive(Boolean(interactive));
      const nextLabel = interactive?.getAttribute?.("data-cursor-label") || "";
      setLabel(nextLabel);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerover", onOver, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      document.documentElement.classList.remove("cursor-none-desktop");
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, [canHover, reduced, x, y]);

  if (!canHover || reduced) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[120] mix-blend-difference"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
        opacity: visible ? 1 : 0,
      }}
    >
      <div
        className={`flex items-center justify-center rounded-full border border-white/90 transition-[width,height,background-color] duration-200 ease-out ${
          active || label
            ? "h-14 w-14 bg-white/10"
            : "h-3.5 w-3.5 bg-white"
        }`}
      >
        {label ? (
          <span className="text-[9px] font-semibold tracking-[0.18em] text-white uppercase">
            {label}
          </span>
        ) : null}
      </div>
    </motion.div>
  );
}
