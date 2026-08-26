import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useState } from "react";
import { QUESTIONS, scoreAnswers, type BuddyKey } from "@/lib/buddies";
import { Sparkles } from "@/components/Sparkles";

export const Route = createFileRoute("/test")({
  head: () => ({
    meta: [
      { title: "코딩 친구 찾기 테스트 시작! | 12가지 질문" },
      {
        name: "description",
        content: "재미있는 상황 질문 12개에 답하면 나와 가장 잘 맞는 코딩 친구를 찾아드려요.",
      },
      { property: "og:title", content: "코딩 친구 찾기 테스트" },
      { property: "og:description", content: "질문에 답하며 나와 닮은 코딩 친구를 찾아보세요!" },
    ],
  }),
  component: TestPage,
});

const OPTION_TONES = [
  "bg-mint-soft hover:bg-mint-soft",
  "bg-sun-soft",
  "bg-bubble-soft",
  "bg-grape-soft",
];

function TestPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<BuddyKey[]>([]);
  const [picked, setPicked] = useState<number | null>(null);
  const [analyzing, setAnalyzing] = useState(false);

  const question = QUESTIONS[step]!;
  const progress = ((step + (picked !== null ? 1 : 0)) / QUESTIONS.length) * 100;

  function choose(index: number, key: BuddyKey) {
    if (picked !== null) return;
    setPicked(index);
    const next = [...answers, key];
    setTimeout(() => {
      if (step + 1 >= QUESTIONS.length) {
        setAnswers(next);
        setAnalyzing(true);
        setTimeout(() => {
          navigate({ to: "/result/$type", params: { type: scoreAnswers(next) } });
        }, 1800);
      } else {
        setAnswers(next);
        setStep(step + 1);
        setPicked(null);
      }
    }, 420);
  }

  function goBack() {
    if (step === 0 || picked !== null) return;
    setAnswers((prev) => prev.slice(0, -1));
    setStep((s) => s - 1);
  }

  if (analyzing) {
    return (
      <main className="bg-playful relative flex min-h-screen flex-col items-center justify-center px-6">
        <Sparkles />
        <div className="relative animate-pop-in text-center">
          <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border-4 border-dashed border-primary animate-spin-slow">
            <span className="text-4xl animate-twinkle">🔍</span>
          </div>
          <h1 className="mt-6 text-2xl">코딩 친구를 찾는 중...</h1>
          <p className="mt-2 text-muted-foreground">너의 대답을 하나하나 살펴보고 있어! ✨</p>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-playful relative min-h-screen px-5 pb-14 pt-6">
      <Sparkles />
      <div className="relative mx-auto w-full max-w-md">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-sm text-muted-foreground">
            ← 처음으로
          </Link>
          <span className="rounded-full border-2 border-border bg-card px-3 py-1 text-sm font-display">
            {step + 1} / {QUESTIONS.length}
          </span>
        </div>

        {step > 0 && (
          <button
            type="button"
            onClick={goBack}
            disabled={picked !== null}
            className="tap-pop mt-2 flex items-center gap-1 text-sm text-muted-foreground disabled:opacity-40"
          >
            ← 이전 질문으로 돌아가기
          </button>
        )}

        <div className="mt-3 h-4 w-full overflow-hidden rounded-full border-2 border-border bg-card">
          <div
            className="bg-fun h-full rounded-full transition-all duration-500 ease-out"
            style={{ width: `${Math.max(progress, 6)}%` }}
          />
        </div>

        <div key={step} className="animate-pop-in mt-7">
          <div className="card-cute px-5 py-6 text-center">
            <span className="text-4xl">{question.emoji}</span>
            <h1 className="mt-3 text-xl leading-snug">{question.q}</h1>
          </div>

          <div className="mt-5 space-y-3">
            {question.options.map((opt, i) => (
              <button
                key={opt.label}
                type="button"
                onClick={() => choose(i, opt.key)}
                className={`card-cute tap-pop flex w-full items-center gap-3 px-4 py-4 text-left ${OPTION_TONES[i % 4]} ${
                  picked === i ? "scale-[0.97] ring-4 ring-primary" : ""
                } ${picked !== null && picked !== i ? "opacity-40" : ""}`}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border-2 border-border bg-card text-xl">
                  {opt.emoji}
                </span>
                <span className="text-base leading-snug">{opt.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
