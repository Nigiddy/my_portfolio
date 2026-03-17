/**
 * Reusable ambient glow orbs used in every section.
 * @param {string} topRight - css color for top-right glow
 * @param {string} bottomLeft - css color for bottom-left glow
 */
export default function SectionGlows({ topRight = "#f97316", bottomLeft = "#8b5cf6" }) {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full opacity-10"
        style={{ background: `radial-gradient(circle, ${topRight} 0%, transparent 70%)` }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-32 w-[420px] h-[420px] rounded-full opacity-10"
        style={{ background: `radial-gradient(circle, ${bottomLeft} 0%, transparent 70%)` }}
      />
    </>
  );
}
