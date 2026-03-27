/**
 * A reusable component that provides consistent horizontal padding,
 * max-width, and centering for all page content.
 *
 * @param {React.ReactNode} children - The content to be wrapped.
 * @param {string} [className] - Optional additional classes to apply.
 */
export default function Wrapper({ children, className }) {
  return (
    <div
      className={`w-full mx-auto px-6 sm:px-8 ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
