/** Subtle 48px grid overlay used as a background texture in all sections. */
export default function GridOverlay() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.05) 1px,transparent 1px)",
        backgroundSize: "48px 48px",
      }}
    />
  );
}
