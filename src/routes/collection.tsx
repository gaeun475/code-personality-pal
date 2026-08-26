import { createFileRoute, Link } from "@tanstack/react-router";
import { BUDDY_LIST } from "@/lib/buddies";
import { Sparkles } from "@/components/Sparkles";

const TONE_BG: Record<string, string> = {
  mint: "bg-mint-soft",
  sun: "bg-sun-soft",
  sky: "bg-sky-soft",
  peach: "bg-peach-soft",
  grape: "bg-grape-soft",
  bubble: "bg-bubble-soft",
};

export const Route = createFileRoute("/collection")({
  head: () => ({
    meta: [
      { title: "모든 코딩 친구 보기 | 코딩 친구 찾기" },
      { name: "description", content: "6가지 코딩 친구들의 성격과 특징을 한눈에 살펴보세요." },
      { property: "og:title", content: "모든 코딩 친구 보기" },
      { property: "og:description", content: "6가지 귀여운 코딩 친구를 모두 만나보세요! ✨" },
    ],
  }),
  component: CollectionPage,
});

function CollectionPage() {
  return (
    <main className="bg-playful relative min-h-screen px-5 pb-16 pt-8">
      <Sparkles />
      <div className="relative mx-auto w-full max-w-md">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-sm text-muted-foreground">
            ← 처음으로
          </Link>
        </div>

        <div className="card-cute mt-4 px-5 py-6 text-center">
          <h1 className="text-2xl">📚 코딩 친구 도감</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            6가지 친구들을 모두 만나보세요!
          </p>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          {BUDDY_LIST.map((buddy) => (
            <Link
              key={buddy.key}
              to="/result/$type"
              params={{ type: buddy.key }}
              className={`card-cute tap-pop flex flex-col items-center px-3 py-4 text-center ${TONE_BG[buddy.tone]}`}
            >
              <img
                src={buddy.image}
                alt={`${buddy.name} 캐릭터`}
                width={816}
                height={816}
                loading="lazy"
                className="h-24 w-24 animate-float drop-shadow-[var(--shadow-pop)]"
              />
              <span className="mt-2 text-base font-display">{buddy.name}</span>
              <span className="text-[11px] text-muted-foreground">{buddy.tagline}</span>
            </Link>
          ))}
        </div>

        <div className="mt-6 space-y-3">
          <Link
            to="/test"
            className="tap-pop bg-fun block w-full rounded-4xl border-2 border-border px-6 py-4 text-center text-lg font-display text-primary-foreground shadow-[var(--shadow-pop)]"
          >
            테스트 다시 하기 🔁
          </Link>
        </div>
      </div>
    </main>
  );
}
