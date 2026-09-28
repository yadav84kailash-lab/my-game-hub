import { useEffect, useRef, useState } from "react";

type Phase = "idle" | "waiting" | "go" | "result" | "early";

export function ReactionTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [ms, setMs] = useState(0);
  const [best, setBest] = useState<number | null>(null);
  const startRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current); }, []);

  const begin = () => {
    setPhase("waiting");
    timerRef.current = setTimeout(
      () => {
        startRef.current = performance.now();
        setPhase("go");
      },
      1200 + Math.random() * 2500,
    );
  };

  const click = () => {
    if (phase === "idle" || phase === "result" || phase === "early") return begin();
    if (phase === "waiting") {
      if (timerRef.current) clearTimeout(timerRef.current);
      return setPhase("early");
    }
    const t = Math.round(performance.now() - startRef.current);
    setMs(t);
    setBest((b) => (b === null || t < b ? t : b));
    setPhase("result");
  };

  const label = {
    idle: "CLICK TO START",
    waiting: "WAIT FOR CYAN…",
    go: "CLICK NOW",
    result: `${ms} MS · CLICK TO RETRY`,
    early: "TOO EARLY · CLICK TO RETRY",
  }[phase];

  return (
    <div className="flex flex-col items-center gap-4">
      <button
        onClick={click}
        className={`grid h-40 w-full max-w-xs place-items-center rounded-xl border font-mono text-sm tracking-wider transition-colors ${
          phase === "go"
            ? "border-neon bg-neon/20 text-neon"
            : phase === "early"
              ? "border-hot/60 bg-hot/10 text-hot"
              : "border-line/60 bg-frost/[0.03] text-frost/70"
        }`}
      >
        {label}
      </button>
      <p className="font-mono text-xs tracking-wider text-frost/50">
        BEST {best === null ? "—" : `${best} MS`}
      </p>
    </div>
  );
}
