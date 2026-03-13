import { useState } from "react";

export default function FloatingField({ label, name, type = "text", value, onChange, required, rows }) {
    const [focused, setFocused] = useState(false);
    const lifted = focused || value.length > 0;
    const Tag = rows ? "textarea" : "input";

    return (
        <div className="relative">
            <label
                htmlFor={name}
                className={`
          absolute left-4 transition-all duration-200 pointer-events-none select-none z-10 font-mono
          ${lifted
                        ? "top-2 text-[10px] tracking-widest uppercase text-orange-400"
                        : "top-4 text-sm text-zinc-500"
                    }
        `}
            >
                {label}
            </label>
            <Tag
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                required={required}
                rows={rows}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                className={`
          w-full bg-zinc-900/80 border rounded-xl px-4 text-white text-sm resize-none
          transition-all duration-300 outline-none
          ${lifted ? "pt-6 pb-3" : "pt-4 pb-3"}
          ${focused
                        ? "border-orange-500 shadow-[0_0_0_3px_rgba(249,115,22,0.10)]"
                        : "border-zinc-800 hover:border-zinc-700"
                    }
        `}
                aria-label={label}
            />
        </div>
    );
}
