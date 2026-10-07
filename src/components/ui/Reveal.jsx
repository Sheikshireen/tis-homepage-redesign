import { forwardRef } from "react";
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

const ease = [0.22, 1, 0.36, 1];

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
      transition={{ duration: 0.7, ease, delay }}
    >
      {children}
    </Component>
  );
}

/** Parent for staggered scroll reveals — wrap cards/lists. */
export const Stagger = forwardRef(function Stagger(
  {
    children,
    className = "",
    stagger = 0.09,
    delayChildren = 0.05,
    once = true,
    amount = 0.18,
    ...props
  },
  ref,
) {
  const reduced = usePrefersReducedMotion();

  if (reduced) {
    return (
      <div ref={ref} className={className} {...props}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: stagger, delayChildren },
        },
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
});

/** Child item used inside Stagger. */
export function StaggerItem({
  children,
  className = "",
  variant = "fadeUp",
  as = "div",
  ...props
}) {
  const reduced = usePrefersReducedMotion();
  const Component = motion[as] || motion.div;
  const Tag = as === "div" ? "div" : as;
  const preset = presets[variant] || presets.fadeUp;

  if (reduced) {
    return (
      <Tag className={className} {...props}>
        {children}
      </Tag>
    );
  }

  return (
    <Component
      className={className}
      variants={preset}
      transition={{ duration: 0.65, ease }}
      {...props}
    >
      {children}
    </Component>
  );
}
