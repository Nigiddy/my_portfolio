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
                        ? "top-2 text-[10px] tracking-widest uppercase text-blue-600"
                        : "top-4 text-sm text-gray-500"
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
          w-full bg-gray-50 border rounded-xl px-4 text-gray-900 text-sm resize-none placeholder:text-gray-400
          transition-all duration-300 outline-none
          ${lifted ? "pt-6 pb-3" : "pt-4 pb-3"}
          ${focused
                        ? "border-blue-600 shadow-[0_0_0_3px_rgba(37,99,235,0.10)] bg-white"
                        : "border-gray-200 hover:border-gray-300"
                    }
        `}
                aria-label={label}
            />
        </div>
    );
}
