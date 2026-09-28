import { useState } from "react";

const MOVES = ["ROCK", "PAPER", "SCISSORS"] as const;
type Move = (typeof MOVES)[number];

function judge(a: Move, b: Move) {
  if (a === b) return "DRAW";
  if ((a === "ROCK" && b === "SCISSORS") || (a === "PAPER" && b === "ROCK") || (a === "SCISSORS" && b === "PAPER"))
    return "WIN";
  return "LOSS";
}

export function RockPaperScissors() {
  const [cpu, setCpu] = useState<Move | null>(null);
  const [you, setYou] = useState<Move | null>(null);
  const [score, setScore] = useState({ w: 0, l: 0, d: 0 });

  const play = (m: Move) => {
    const c = MOVES[Math.floor(Math.random() * 3)] as Move;
    setYou(m);
    setCpu(c);
    const r = judge(m, c);
    setScore((s) => ({
      w: s.w + (r === "WIN" ? 1 : 0),
      l: s.l + (r === "LOSS" ? 1 : 0),
      d: s.d + (r === "DRAW" ? 1 : 0),
    }));
  };

  const result = you && cpu ? judge(you, cpu) : null;

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-2">
        {MOVES.map((m) => (
          <button
            key={m}
            onClick={() => play(m)}
            className="rounded-lg border border-line/60 bg-frost/[0.03] px-4 py-3 font-mono text-xs tracking-wider transition-colors hover:border-neon/50 hover:text-neon"
          >
            {m}
          </button>
        ))}
      </div>
      <p className="font-mono text-xs tracking-wider text-frost/60">
        {result ? `YOU ${you} · CPU ${cpu} · ${result}` : "PICK YOUR MOVE"}
      </p>
      <p className="font-mono text-[11px] tracking-wider text-frost/40">
        W {score.w} · L {score.l} · D {score.d}
      </p>
    </div>
  );
}
