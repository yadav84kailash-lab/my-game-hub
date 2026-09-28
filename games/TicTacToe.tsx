import { useState } from "react";

const LINES: [number, number, number][] = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function winnerOf(b: (string | null)[]) {
  for (const [a, c, d] of LINES) {
    if (b[a] && b[a] === b[c] && b[a] === b[d]) return b[a];
  }
  return null;
}

function bestMove(b: (string | null)[]) {
  const empty = b.map((v, i) => (v ? -1 : i)).filter((i) => i >= 0);
  for (const i of empty) {
    const t = [...b];
    t[i] = "O";
    if (winnerOf(t) === "O") return i;
  }
  for (const i of empty) {
    const t = [...b];
    t[i] = "X";
    if (winnerOf(t) === "X") return i;
  }
  if (empty.includes(4)) return 4;
  return empty[Math.floor(Math.random() * empty.length)];
}

export function TicTacToe() {
  const [board, setBoard] = useState<(string | null)[]>(Array(9).fill(null));
  const winner = winnerOf(board);
  const full = board.every(Boolean);

  const play = (i: number) => {
    if (board[i] || winner) return;
    const next = [...board];
    next[i] = "X";
    if (!winnerOf(next) && next.some((v) => !v)) {
      const ai = bestMove(next);
      if (ai !== undefined) next[ai] = "O";
    }
    setBoard(next);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="grid grid-cols-3 gap-2">
        {board.map((cell, i) => (
          <button
            key={i}
            onClick={() => play(i)}
            className="size-16 rounded-lg border border-line/60 bg-frost/[0.03] font-display text-2xl text-neon transition-colors hover:border-neon/50"
          >
            <span className={cell === "O" ? "text-hot" : "text-neon"}>{cell}</span>
          </button>
        ))}
      </div>
      <p className="font-mono text-xs tracking-wider text-frost/60">
        {winner ? `${winner === "X" ? "YOU WIN" : "CPU WINS"}` : full ? "DRAW" : "YOUR TURN · X"}
      </p>
      <button
        onClick={() => setBoard(Array(9).fill(null))}
        className="rounded-md frost px-4 py-2 font-mono text-xs tracking-wider hover:bg-frost/10"
      >
        RESET
      </button>
    </div>
  );
}
