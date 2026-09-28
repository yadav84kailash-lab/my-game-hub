import { createFileRoute, Link } from "@tanstack/react-router";

import { TicTacToe } from "@/components/games/TicTacToe";
import { MemoryMatch } from "@/components/games/MemoryMatch";
import { ReactionTest } from "@/components/games/ReactionTest";
import { RockPaperScissors } from "@/components/games/RockPaperScissors";
import { SnakeGame } from "@/components/games/SnakeGame";
import { TargetRush } from "@/components/games/TargetRush";

export const Route = createFileRoute("/play")({
  head: () => ({
    meta: [
      { title: "Play Now — Ayush Tech Arcade" },
      {
        name: "description",
        content:
          "Play free browser games at Ayush Tech: Snake, Tic Tac Toe, Memory Match, Reaction Test, Rock Paper Scissors and Target Rush.",
      },
      { property: "og:title", content: "Play Now — Ayush Tech Arcade" },
      {
        property: "og:description",
        content: "Six free browser games across arcade, strategy, memory and reflex — no download needed.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Play,
});

const arcade = [
  { tag: "ARCADE", title: "Neon Snake", node: <SnakeGame /> },
  { tag: "STRATEGY", title: "Tic Tac Toe", node: <TicTacToe /> },
  { tag: "MEMORY", title: "Memory Match", node: <MemoryMatch /> },
  { tag: "REFLEX", title: "Reaction Test", node: <ReactionTest /> },
  { tag: "CHANCE", title: "Rock Paper Scissors", node: <RockPaperScissors /> },
  { tag: "SPEED", title: "Target Rush", node: <TargetRush /> },
];

function Play() {
  return (
    <div className="min-h-screen bg-void text-frost font-body antialiased relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 scanlines opacity-40" />
      <div className="pointer-events-none absolute -top-40 left-1/4 size-[520px] rounded-full bg-neon/10 blur-[120px]" />

      <header className="sticky top-0 z-50 border-b border-line/60 bg-void/60 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="grid place-items-center size-8 rounded-md bg-neon/90 text-inkdeep font-display text-lg leading-none">
              A
            </div>
            <span className="font-display text-xl tracking-wide">AYUSH TECH</span>
          </Link>
          <Link
            to="/"
            className="rounded-md frost px-4 py-2 font-mono text-xs tracking-wider hover:bg-frost/10"
          >
            BACK
          </Link>
        </div>
      </header>

      <section className="relative mx-auto max-w-7xl px-6 py-14">
        <span className="font-mono text-[11px] tracking-widest text-neon">(a) ARCADE</span>
        <h1 className="mt-2 font-display text-4xl sm:text-5xl tracking-tight">
          Sabhi prakar ke games — abhi khelo
        </h1>
        <p className="mt-4 max-w-[52ch] text-frost/70">
          Six playable titles across arcade, strategy, memory, reflex, chance and speed. Browser
          mein hi chalte hain, koi download nahi.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {arcade.map((g) => (
            <div key={g.title} className="frost rounded-xl p-5 animate-rise">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="font-semibold text-lg">{g.title}</h2>
                <span className="font-mono text-[10px] tracking-widest text-hot">{g.tag}</span>
              </div>
              {g.node}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
