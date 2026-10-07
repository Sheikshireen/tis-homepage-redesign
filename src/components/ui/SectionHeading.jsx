export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  tone = "dark",
  className = "",
}) {
  const alignClass =
    align === "center" ? "mx-auto text-center items-center" : "items-start text-left";
  const toneClass = tone === "light" ? "text-white" : "text-tis-ink";
  const mutedClass = tone === "light" ? "text-white/75" : "text-tis-muted";

  return (
    <div className={`flex max-w-3xl flex-col gap-4 ${alignClass} ${toneClass} ${className}`}>
      {eyebrow ? (
        <p
          className={`text-sm font-semibold tracking-[0.2em] uppercase ${
            tone === "light" ? "text-tis-teal" : "text-tis-teal-deep"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      {title ? (
        <h2 className="font-display text-3xl font-bold tracking-tight text-balance md:text-4xl lg:text-5xl">
          {title}
        </h2>
      ) : null}
      {subtitle ? (
        <p className={`max-w-xl text-base leading-relaxed md:text-lg ${mutedClass}`}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
