const variants = {
  primary:
    "bg-tis-red text-tis-on-brand hover:bg-tis-red-deep shadow-[0_12px_30px_-16px_rgba(185,1,36,0.75)]",
  /* Teal fill → always dark label for contrast */
  secondary:
    "bg-tis-teal text-tis-on-teal hover:brightness-95",
  outline:
    "border border-tis-on-brand/70 bg-tis-on-brand/10 text-tis-on-brand backdrop-blur-sm hover:bg-tis-on-brand hover:text-tis-red",
  ghost:
    "bg-transparent text-tis-fg hover:bg-tis-cream-dark border border-tis-border",
  dark: "bg-tis-ink text-tis-on-dark hover:bg-panel-elevated",
  /** Warm cream fill + crimson label — for crimson/dark surfaces in both themes. */
  inverse:
    "bg-accent-cream text-[#B90124] hover:bg-tis-on-brand hover:text-[#99001D] focus-visible:ring-offset-tis-red shadow-[0_14px_32px_-18px_rgba(248,245,240,0.55)]",
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
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-[transform,background-color,color,box-shadow,filter] duration-200 ease-out",
    "hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tis-teal focus-visible:ring-offset-2 focus-visible:ring-offset-tis-cream",
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
