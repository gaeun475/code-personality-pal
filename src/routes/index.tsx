import { createFileRoute, Link } from "@tanstack/react-router";
import { BUDDY_LIST } from "@/lib/buddies";
import { Sparkles } from "@/components/Sparkles";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "나는 어떤 코딩 친구일까? | 코딩 친구 찾기 테스트" },
      {
        name: "description",
        content:
          "12개의 재미있는 질문에 답하고 나와 꼭 닮은 귀여운 코딩 친구(파이썬·자바스크립트·C++·자바·스크래치·HTML/CSS)를 찾아보세요!",
      },
      { property: "og:title", content: "나는 어떤 코딩 친구일까?" },
      {
        property: "og:description",
        content: "질문에 답하고 나와 가장 잘 어울리는 프로그래밍 언어 친구를 만나보세요 ✨",
      },
    ],
  }),
  component: Home,
});

const TONE_BG: Record<string, string> = {
  mint: "bg-mint-soft",
  sun: "bg-sun-soft",
  sky: "bg-sky-soft",
  peach: "bg-peach-soft",
  grape: "bg-grape-soft",
  bubble: "bg-bubble-soft",
};

function Home() {
  return (
    <main className="bg-playful relative min-h-screen overflow-hidden px-5 pb-16 pt-10">
      <Sparkles />
      <div className="relative mx-auto w-full max-w-md">
        <div className="animate-slide-up text-center">
          <span className="inline-block rounded-full border-2 border-border bg-card px-4 py-1 text-sm font-display text-muted-foreground shadow-[var(--shadow-soft)]">
            🧩 코딩 친구 성격 테스트
          </span>
          <h1 className="mt-5 text-4xl leading-tight text-foreground">
            나는 어떤
            <br />
            <span className="bg-fun bg-clip-text text-transparent">코딩 친구</span>일까?
          </h1>
          <p className="mt-3 text-base text-muted-foreground">
            몇 가지 질문에 답하고
            <br />
            나와 꼭 닮은 코딩 친구를 찾아보자!
          </p>
        </div>

        <div className="relative mt-8 flex items-end justify-center gap-1">
          <img
            src={BUDDY_LIST[4]!.image}
            alt="보라색 코딩 친구 스크래치"
            width={816}
            height={816}
            className="h-24 w-24 animate-float drop-shadow-[var(--shadow-soft)]"
            style={{ animationDelay: "0.4s" }}
          />
          <img
            src={BUDDY_LIST[0]!.image}
            alt="민트색 코딩 친구 파이썬"
            width={816}
            height={816}
            className="h-36 w-36 animate-float drop-shadow-[var(--shadow-pop)]"
          />
          <img
            src={BUDDY_LIST[1]!.image}
            alt="노란색 코딩 친구 자바스크립트"
            width={816}
            height={816}
            className="h-24 w-24 animate-float drop-shadow-[var(--shadow-soft)]"
            style={{ animationDelay: "0.8s" }}
          />
        </div>

        <Link
          to="/test"
          className="tap-pop bg-fun mt-8 flex w-full items-center justify-center rounded-4xl border-2 border-border px-6 py-5 text-xl font-display text-primary-foreground shadow-[var(--shadow-pop)]"
        >
          내 코딩 친구 찾기 ✨
        </Link>
        <p className="mt-3 text-center text-sm text-muted-foreground">
          코딩을 몰라도 괜찮아요! 12문항 · 약 2분
        </p>

        <section className="mt-10">
          <h2 className="text-center text-xl">함께 사는 코딩 친구들 💫</h2>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {BUDDY_LIST.map((b, i) => (
              <div
                key={b.key}
                className={`card-cute tap-pop animate-pop-in flex flex-col items-center px-3 py-4 ${TONE_BG[b.tone]}`}
                style={{ animationDelay: `${i * 70}ms` }}
              >
                <img
                  src={b.image}
                  alt={`${b.name} 코딩 친구 캐릭터`}
                  loading="lazy"
                  width={816}
                  height={816}
                  className="h-20 w-20 animate-wiggle"
                  style={{ animationDelay: `${i * 200}ms` }}
                />
                <p className="mt-2 text-base font-display">{b.name}</p>
                <p className="text-center text-xs text-muted-foreground">{b.tagline}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
