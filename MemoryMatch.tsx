import { useEffect, useState } from "react";

const SYMBOLS = ["◆", "▲", "●", "■", "★", "✦"];

function shuffled() {
  return [...SYMBOLS, ...SYMBOLS]
    .map((s) => ({ s, k: Math.random() }))
    .sort((a, b) => a.k - b.k)
    .map((x, i) => ({ id: i, symbol: x.s }));
}

export function MemoryMatch() {
  const [cards, setCards] = useState(shuffled);
  const [open, setOpen] = useState<number[]>([]);
  const [found, setFound] = useState<string[]>([]);
  const [moves, setMoves] = useState(0);

  useEffect(() => {
    if (open.length !== 2) return;
    const [a, b] = open as [number, number];
    const ca = cards[a];
    const cb = cards[b];
    const t = setTimeout(() => {
      if (ca && cb && ca.symbol === cb.symbol) setFound((f) => [...f, ca.symbol]);
      setOpen([]);
    }, 650);
    return () => clearTimeout(t);
  }, [open, cards]);

  const flip = (i: number) => {
    const card = cards[i];
    if (!card || open.length === 2 || open.includes(i) || found.includes(card.symbol)) return;
    setOpen((o) => [...o, i]);
    if (open.length === 1) setMoves((m) => m + 1);
  };

  const reset = () => {
    setCards(shuffled());
    setOpen([]);
    setFound([]);
    setMoves(0);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="grid grid-cols-4 gap-2">
        {cards.map((c, i) => {
          const shown = open.includes(i) || found.includes(c.symbol);
          return (
            <button
              key={c.id}
              onClick={() => flip(i)}
              className={`size-14 rounded-lg border text-xl transition-colors ${
                shown
                  ? "border-neon/50 bg-neon/10 text-neon"
                  : "border-line/60 bg-frost/[0.03] text-transparent"
              }`}
            >
              {c.symbol}
            </button>
          );
        })}
      </div>
      <p className="font-mono text-xs tracking-wider text-frost/60">
        {found.length === SYMBOLS.length ? `CLEARED IN ${moves} MOVES` : `MOVES ${moves}`}
      </p>
      <button
        onClick={reset}
        className="rounded-md frost px-4 py-2 font-mono text-xs tracking-wider hover:bg-frost/10"
      >
        RESET
      </button>
    </div>
  );
}
