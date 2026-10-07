import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

const presets = {
  fadeUp: { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } },
  fade: { hidden: { opacity: 0 }, show: { opacity: 1 } },
  fadeLeft: { hidden: { opacity: 0, x: -36 }, show: { opacity: 1, x: 0 } },
  fadeRight: { hidden: { opacity: 0, x: 36 }, show: { opacity: 1, x: 0 } },
  clipUp: {
    hidden: { opacity: 0, y: 36, clipPath: "inset(14% 0 0 0)" },
    show: { opacity: 1, y: 0, clipPath: "inset(0% 0 0 0)" },
  },
  clipRight: {
    hidden: { opacity: 0, clipPath: "inset(0 100% 0 0)" },
    show: { opacity: 1, clipPath: "inset(0 0% 0 0)" },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 1.06 },
    show: { opacity: 1, scale: 1 },
  },
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
  once = true,
  as = "div",
  variant = "fadeUp",
  amount = 0.22,
}) {
  const reduced = usePrefersReducedMotion();
  const Component = motion[as] || motion.div;
  const preset = presets[variant] || presets.fadeUp;

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={preset}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </Component>
  );
}
