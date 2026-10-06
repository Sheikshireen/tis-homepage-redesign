const variants = {
  primary:
    "bg-tis-red text-white hover:bg-tis-red-deep shadow-[0_12px_30px_-16px_rgba(185,1,36,0.8)]",
  secondary:
    "bg-tis-teal text-tis-ink hover:bg-tis-teal-deep hover:text-white",
  outline:
    "border border-white/70 bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-tis-red",
  ghost:
    "bg-transparent text-tis-ink hover:bg-tis-cream-dark border border-tis-ink/10",
  dark: "bg-tis-ink text-white hover:bg-black",
  /** High-contrast CTA for dark/red surfaces (white fill, red label). */
  inverse:
    "bg-white text-tis-red hover:bg-tis-cream hover:text-tis-red-deep focus-visible:ring-offset-tis-red shadow-[0_14px_32px_-18px_rgba(255,255,255,0.85)]",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-3 text-sm md:text-base",
  lg: "px-7 py-3.5 text-base md:text-lg",
};

export default function Button({
  as: Component = "button",
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}) {
  const classes = [
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-[transform,background-color,color,box-shadow] duration-200 ease-out",
    "hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tis-teal focus-visible:ring-offset-2",
    variants[variant] || variants.primary,
    sizes[size] || sizes.md,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Component className={classes} data-cursor="interactive" {...props}>
      {children}
    </Component>
  );
}
