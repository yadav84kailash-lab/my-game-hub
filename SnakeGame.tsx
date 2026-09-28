import { useCallback, useEffect, useRef, useState } from "react";

const SIZE = 12;
type P = { x: number; y: number };

const randFood = (snake: P[]): P => {
  let f: P;
  do {
    f = { x: Math.floor(Math.random() * SIZE), y: Math.floor(Math.random() * SIZE) };
  } while (snake.some((s) => s.x === f.x && s.y === f.y));
  return f;
};

export function SnakeGame() {
  const [snake, setSnake] = useState<P[]>([{ x: 6, y: 6 }]);
  const [food, setFood] = useState<P>({ x: 3, y: 3 });
  const [dir, setDir] = useState<P>({ x: 1, y: 0 });
  const [dead, setDead] = useState(false);
  const [running, setRunning] = useState(false);
  const dirRef = useRef(dir);
  dirRef.current = dir;

  const reset = useCallback(() => {
    setSnake([{ x: 6, y: 6 }]);
    setFood({ x: 3, y: 3 });
    setDir({ x: 1, y: 0 });
    setDead(false);
    setRunning(true);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const d = dirRef.current;
      const map: Record<string, P> = {
        ArrowUp: { x: 0, y: -1 },
        ArrowDown: { x: 0, y: 1 },
        ArrowLeft: { x: -1, y: 0 },
        ArrowRight: { x: 1, y: 0 },
      };
      const n = map[e.key];
      if (!n) return;
      e.preventDefault();
      if (n.x === -d.x && n.y === -d.y) return;
      setDir(n);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!running || dead) return;
    const id = setInterval(() => {
      setSnake((prev) => {
        const d = dirRef.current;
        const first = prev[0];
        if (!first) return prev;
        const head = { x: first.x + d.x, y: first.y + d.y };
        if (
          head.x < 0 ||
          head.y < 0 ||
          head.x >= SIZE ||
          head.y >= SIZE ||
          prev.some((s) => s.x === head.x && s.y === head.y)
        ) {
          setDead(true);
          setRunning(false);
          return prev;
        }
        const grew = head.x === food.x && head.y === food.y;
        const next = [head, ...(grew ? prev : prev.slice(0, -1))];
        if (grew) setFood(randFood(next));
        return next;
      });
    }, 160);
    return () => clearInterval(id);
  }, [running, dead, food]);

  const move = (n: P) => {
    const d = dirRef.current;
    if (n.x === -d.x && n.y === -d.y) return;
    setDir(n);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className="grid gap-px rounded-lg border border-line/60 bg-void p-1"
        style={{ gridTemplateColumns: `repeat(${SIZE}, 1fr)` }}
      >
        {Array.from({ length: SIZE * SIZE }, (_, i) => {
          const x = i % SIZE;
          const y = Math.floor(i / SIZE);
          const isSnake = snake.some((s) => s.x === x && s.y === y);
          const isFood = food.x === x && food.y === y;
          return (
            <div
              key={i}
              className={`size-4 rounded-[2px] ${
                isSnake ? "bg-neon" : isFood ? "bg-hot" : "bg-frost/[0.04]"
              }`}
            />
          );
        })}
      </div>
      <p className="font-mono text-xs tracking-wider text-frost/60">
        {dead ? `GAME OVER · SCORE ${snake.length - 1}` : `SCORE ${snake.length - 1}`}
      </p>
      <div className="grid grid-cols-3 gap-1 sm:hidden">
        <span />
        <button onClick={() => move({ x: 0, y: -1 })} className="rounded frost px-3 py-2 text-xs">▲</button>
        <span />
        <button onClick={() => move({ x: -1, y: 0 })} className="rounded frost px-3 py-2 text-xs">◀</button>
        <button onClick={() => move({ x: 0, y: 1 })} className="rounded frost px-3 py-2 text-xs">▼</button>
        <button onClick={() => move({ x: 1, y: 0 })} className="rounded frost px-3 py-2 text-xs">▶</button>
      </div>
      <button
        onClick={reset}
        className="rounded-md bg-neon px-4 py-2 font-mono text-xs tracking-wider text-inkdeep hover:bg-frost"
      >
        {running ? "RESTART" : "START"}
      </button>
    </div>
  );
}
