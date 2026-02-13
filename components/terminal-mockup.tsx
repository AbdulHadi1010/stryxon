interface TerminalProps {
  title?: string;
  lines: string[];
  variant?: "success" | "info" | "warning";
}

export default function TerminalMockup({
  title = "Terminal",
  lines,
  variant = "success",
}: TerminalProps) {
  return (
    <div className="border border-zinc-800 bg-black overflow-hidden">
      {/* macOS-style window chrome */}
      <div className="bg-zinc-900 px-4 py-3 flex items-center gap-2 border-b border-zinc-800">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-zinc-700" />
          <div className="w-3 h-3 rounded-full bg-zinc-700" />
          <div className="w-3 h-3 rounded-full bg-zinc-700" />
        </div>
        <span className="text-sm text-zinc-500 ml-2 font-mono">{title}</span>
      </div>

      {/* Terminal content */}
      <div className="bg-black p-6 font-mono text-sm overflow-x-auto">
        {lines.map((line, index) => (
          <div key={index} className="mb-1">
            {line.startsWith("$") || line.startsWith("#") ? (
              <div className="flex gap-2">
                <span className="text-zinc-600">{line.charAt(0)}</span>
                <span className="text-zinc-400">{line.slice(2)}</span>
              </div>
            ) : line.startsWith("✓") || line.startsWith("✅") ? (
              <span className="text-white">{line}</span>
            ) : line.startsWith("ERROR") || line.startsWith("✗") ? (
              <span className="text-zinc-500">{line}</span>
            ) : (
              <span className="text-zinc-500">{line}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
