export default function Card({ children, className, ...props }) {
  return (
    <div
      className={`
        group relative flex flex-col h-full cursor-pointer
        bg-zinc-900/80 backdrop-blur-sm
        rounded-2xl overflow-hidden
        border border-zinc-800/60 hover:border-zinc-600/80
        transition-all duration-500
        shadow-lg hover:shadow-2xl hover:shadow-black/40
        hover:-translate-y-1
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}
