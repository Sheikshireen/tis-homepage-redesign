import { useScrollProgress } from "../../hooks/useScrollProgress";

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div
      className="fixed top-0 right-0 left-0 z-[100] h-[2px] bg-transparent"
      role="progressbar"
      aria-label="Page scroll progress"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(progress * 100)}
    >
      <div
        className="h-full origin-left bg-linear-to-r from-tis-red via-[#d11a3d] to-tis-teal"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}
