const SPARKS = [
  { top: "8%", left: "6%", size: "text-2xl", delay: "0s" },
  { top: "16%", left: "86%", size: "text-xl", delay: "0.6s" },
  { top: "42%", left: "3%", size: "text-lg", delay: "1.2s" },
  { top: "58%", left: "92%", size: "text-2xl", delay: "0.3s" },
  { top: "78%", left: "12%", size: "text-xl", delay: "1.6s" },
  { top: "88%", left: "80%", size: "text-lg", delay: "0.9s" },
];

export function Sparkles() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
      {SPARKS.map((s, i) => (
        <span
          key={i}
          className={`absolute animate-twinkle select-none ${s.size}`}
          style={{ top: s.top, left: s.left, animationDelay: s.delay }}
        >
          {i % 2 === 0 ? "✨" : "⭐"}
        </span>
      ))}
      <div className="absolute -left-16 top-24 h-48 w-48 rounded-full bg-bubble-soft blur-3xl opacity-70" />
      <div className="absolute -right-20 top-1/2 h-56 w-56 rounded-full bg-grape-soft blur-3xl opacity-70" />
      <div className="absolute bottom-0 left-1/3 h-40 w-40 rounded-full bg-sun-soft blur-3xl opacity-70" />
    </div>
  );
}
