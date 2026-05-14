export default function Card({ children, className, ...props }) {
  return (
    <div
      className={`
        group relative flex flex-col h-full cursor-pointer
        bg-white
        rounded-2xl overflow-hidden
        border border-gray-200 hover:border-gray-300
        transition-all duration-500
        shadow-sm hover:shadow-md
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}
