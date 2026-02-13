interface LighthouseMetric {
  label: string;
  score: number;
}

interface LighthouseScoreMockupProps {
  variant?: "desktop" | "mobile";
}

export default function LighthouseScoreMockup({
  variant = "mobile",
}: LighthouseScoreMockupProps) {
  const metrics: LighthouseMetric[] = [
    { label: "Performance", score: 98 },
    { label: "Accessibility", score: 100 },
    { label: "Best Practices", score: 100 },
    { label: "SEO", score: 100 },
  ];

  return (
    <div className="relative border border-zinc-800 bg-zinc-950 p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8 pb-6 border-b border-zinc-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 border border-zinc-800 flex items-center justify-center">
            <svg
              className="w-5 h-5 text-zinc-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-sm font-medium text-white tracking-tight uppercase">
              Lighthouse Report
            </h3>
            <p className="text-xs text-zinc-500 uppercase tracking-wider">
              {variant === "mobile" ? "Mobile" : "Desktop"} · Feb 2026
            </p>
          </div>
        </div>
      </div>

      {/* Score Circles Grid - Monochromatic */}
      <div className="grid grid-cols-4 gap-8 mb-8">
        {metrics.map((metric, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Simple Circle Score */}
            <div className="relative mb-3">
              <div className="w-20 h-20 border-2 border-zinc-700 bg-zinc-900 flex items-center justify-center">
                <span className="text-2xl font-medium text-white">
                  {metric.score}
                </span>
              </div>

              {/* Progress Ring */}
              <svg
                className="absolute inset-0 w-20 h-20 -rotate-90"
                viewBox="0 0 80 80"
              >
                <circle
                  cx="40"
                  cy="40"
                  r="36"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-zinc-700"
                  strokeDasharray={`${(metric.score / 100) * 226} 226`}
                  strokeLinecap="square"
                />
              </svg>
            </div>

            {/* Label */}
            <span className="text-xs text-zinc-500 text-center font-medium uppercase tracking-wider">
              {metric.label}
            </span>
          </div>
        ))}
      </div>

      {/* Core Web Vitals - Simplified */}
      <div className="border-t border-zinc-800 pt-6">
        <div className="grid grid-cols-3 gap-4">
          <div className="border border-zinc-800 p-4">
            <div className="text-xs text-zinc-500 uppercase tracking-wider mb-1">
              LCP
            </div>
            <div className="text-lg font-medium text-white">1.2s</div>
          </div>
          <div className="border border-zinc-800 p-4">
            <div className="text-xs text-zinc-500 uppercase tracking-wider mb-1">
              FID
            </div>
            <div className="text-lg font-medium text-white">8ms</div>
          </div>
          <div className="border border-zinc-800 p-4">
            <div className="text-xs text-zinc-500 uppercase tracking-wider mb-1">
              CLS
            </div>
            <div className="text-lg font-medium text-white">0.02</div>
          </div>
        </div>
      </div>
    </div>
  );
}
