import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { BUDDIES, type BuddyKey } from "@/lib/buddies";
import { Sparkles } from "@/components/Sparkles";

const TONE_BG: Record<string, string> = {
  mint: "bg-mint-soft",
  sun: "bg-sun-soft",
  sky: "bg-sky-soft",
  peach: "bg-peach-soft",
  grape: "bg-grape-soft",
  bubble: "bg-bubble-soft",
};

export const Route = createFileRoute("/result/$type")({
  loader: ({ params }) => {
    const buddy = BUDDIES[params.type as BuddyKey];
    if (!buddy) throw notFound();
    return { key: buddy.key, name: buddy.name, tagline: buddy.tagline };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "결과를 찾을 수 없어요 | 코딩 친구 찾기" }, { name: "robots", content: "noindex" }],
      };
    }
    const title = `내 코딩 친구는 ${loaderData.name}! ${loaderData.tagline}`;
    return {
      meta: [
        { title: `${title} | 코딩 친구 찾기` },
        { name: "description", content: `${loaderData.name} 친구의 성격, 특징, 잘 어울리는 코딩 활동을 확인해보세요.` },
        { property: "og:title", content: title },
        { property: "og:description", content: "나와 꼭 닮은 귀여운 코딩 친구를 만나보세요 ✨" },
      ],
    };
  },
  component: ResultPage,
});

function ResultPage() {
  const { key } = Route.useLoaderData();
  const buddy = BUDDIES[key];
  const [toast, setToast] = useState<string | null>(null);

  function flash(message: string) {
    setToast(message);
    setTimeout(() => setToast(null), 2000);
  }

  function save() {
    try {
      const raw = localStorage.getItem("coding-buddy-collection");
      const list: string[] = raw ? JSON.parse(raw) : [];
      if (!list.includes(buddy.key)) list.push(buddy.key);
      localStorage.setItem("coding-buddy-collection", JSON.stringify(list));
      localStorage.setItem("coding-buddy-latest", buddy.key);
      flash(`도감에 ${buddy.name} 친구를 저장했어요! 📚`);
    } catch {
      flash("저장하지 못했어요 😢");
    }
  }

  async function share() {
    const url = typeof window !== "undefined" ? window.location.href : "";
    const text = `내 코딩 친구는 ${buddy.name}! ${buddy.tagline} ✨`;
    try {
      if (navigator.share) {
        await navigator.share({ title: "코딩 친구 찾기", text, url });
        return;
      }
      await navigator.clipboard.writeText(`${text}\n${url}`);
      flash("결과 링크를 복사했어요! 🔗");
    } catch {
      /* 사용자가 공유를 취소함 */
    }
  }

  return (
    <main className="bg-playful relative min-h-screen px-5 pb-16 pt-8">
      <Sparkles />
      <div className="relative mx-auto w-full max-w-md">
        <p className="animate-slide-up text-center text-lg font-display">✨ 나의 코딩 친구 발견!</p>

        <div className={`card-cute animate-pop-in mt-4 px-5 py-7 text-center ${TONE_BG[buddy.tone]}`}>
          <img
            src={buddy.image}
            alt={`${buddy.name} 코딩 친구 캐릭터`}
            width={816}
            height={816}
            className="mx-auto h-52 w-52 animate-float drop-shadow-[var(--shadow-pop)]"
          />
          <h1 className="mt-3 text-4xl tracking-tight">{buddy.name}</h1>
          <p className="mt-1 text-base text-muted-foreground">
            {buddy.emoji} {buddy.tagline}
          </p>
          <p className="mt-4 rounded-3xl border-2 border-border bg-card px-4 py-3 text-left text-sm leading-relaxed">
            {buddy.intro}
          </p>
        </div>

        <section className="card-cute animate-slide-up mt-4 px-5 py-5">
          <h2 className="text-lg">🌟 내 성격 특징</h2>
          <ul className="mt-3 grid grid-cols-2 gap-2">
            {buddy.traits.map((t) => (
              <li key={t} className="rounded-2xl border-2 border-border bg-muted px-3 py-2 text-xs">
                {t}
              </li>
            ))}
          </ul>
        </section>

        <section className="card-cute animate-slide-up mt-4 px-5 py-5">
          <h2 className="text-lg">🚀 잘 어울리는 코딩 활동</h2>
          <ul className="mt-3 space-y-2">
            {buddy.activities.map((a) => (
              <li key={a} className="flex items-center gap-2 rounded-2xl border-2 border-border bg-card px-3 py-2 text-sm">
                <span>🔸</span>
                {a}
              </li>
            ))}
          </ul>
        </section>

        <section className="card-cute animate-slide-up mt-4 px-5 py-5">
          <h2 className="text-lg">🤝 잘 맞는 친구</h2>
          <div className="mt-3 grid grid-cols-2 gap-3">
            {buddy.friends.map((f) => {
              const friend = BUDDIES[f];
              return (
                <Link
                  key={f}
                  to="/result/$type"
                  params={{ type: friend.key }}
                  className={`tap-pop flex flex-col items-center rounded-3xl border-2 border-border px-3 py-3 ${TONE_BG[friend.tone]}`}
                >
                  <img
                    src={friend.image}
                    alt={`${friend.name} 캐릭터`}
                    loading="lazy"
                    width={816}
                    height={816}
                    className="h-16 w-16"
                  />
                  <span className="mt-1 text-sm font-display">{friend.name}</span>
                  <span className="text-center text-[11px] text-muted-foreground">{friend.tagline}</span>
                </Link>
              );
            })}
          </div>
        </section>

        <div className="mt-6 space-y-3">
          <button
            type="button"
            onClick={share}
            className="tap-pop bg-fun w-full rounded-4xl border-2 border-border px-6 py-4 text-lg font-display text-primary-foreground shadow-[var(--shadow-pop)]"
          >
            결과 공유하기 💌
          </button>
          <button
            type="button"
            onClick={save}
            className="tap-pop card-cute w-full px-6 py-4 text-lg font-display"
          >
            내 도감에 저장하기 📚
          </button>
          <Link
            to="/test"
            className="tap-pop card-cute block w-full px-6 py-4 text-center text-lg font-display"
          >
            다시 테스트하기 🔁
          </Link>
        </div>
      </div>

      {toast && (
        <div className="animate-pop-in fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full border-2 border-border bg-card px-5 py-3 text-sm shadow-[var(--shadow-pop)]">
          {toast}
        </div>
      )}
    </main>
  );
}
