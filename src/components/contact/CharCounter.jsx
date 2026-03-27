export default function CharCounter({ value, max }) {
    const pct = value.length / max;
    return (
        <div className="flex items-center justify-end gap-2 mt-1">
            <div className="h-0.5 w-24 bg-zinc-800 rounded-full overflow-hidden">
                <div
                    className="h-full rounded-full transition-all duration-300"
                    style={{
                        width: `${Math.min(pct * 100, 100)}%`,
                        background: pct > 0.9 ? "#ef4444" : pct > 0.7 ? "#f97316" : "#52525b",
                    }}
                />
            </div>
            <span className={`text-[10px] font-mono tabular-nums ${pct > 0.9 ? "text-red-400" : "text-zinc-600"}`}>
                {value.length}/{max}
            </span>
        </div>
    );
}
