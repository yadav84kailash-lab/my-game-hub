import { useEffect, useState } from "react";

export function TargetRush() {
  const [active, setActive] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(20);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;
    const tick = setInterval(() => setTime((t) => t - 1), 1000);
    const hop = setInterval(() => setActive(Math.floor(Math.random() * 9)), 750);
    return () => {
      clearInterval(tick);
      clearInterval(hop);
    };
  }, [running]);

  useEffect(() => {
    if (time <= 0) {
      setRunning(false);
      setActive(null);
    }
  }, [time]);

  const start = () => {
    setScore(0);
    setTime(20);
    setRunning(true);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="grid grid-cols-3 gap-2">
        {Array.from({ length: 9 }, (_, i) => (
          <button
            key={i}
            onClick={() => {
              if (running && active === i) {
                setScore((s) => s + 1);
                setActive(null);
              }
            }}
            className={`size-14 rounded-lg border transition-colors ${
              active === i ? "border-hot bg-hot/30" : "border-line/60 bg-frost/[0.03]"
            }`}
          />
        ))}
      </div>
      <p className="font-mono text-xs tracking-wider text-frost/60">
        {running ? `SCORE ${score} · ${time}S LEFT` : `LAST SCORE ${score}`}
      </p>
      <button
        onClick={start}
        disabled={running}
        className="rounded-md bg-neon px-4 py-2 font-mono text-xs tracking-wider text-inkdeep hover:bg-frost disabled:opacity-40"
      >
        START
      </button>
    </div>
  );
}
