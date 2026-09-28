import { createFileRoute, Link } from "@tanstack/react-router";

import heroArena from "@/assets/hero-arena.jpg";
import gameVanguard from "@/assets/game-vanguard.jpg";
import gameDriftline from "@/assets/game-driftline.jpg";
import gameRuneclash from "@/assets/game-runeclash.jpg";
import gameRpg from "@/assets/game-rpg.jpg";
import gameStrategy from "@/assets/game-strategy.jpg";
import gameSports from "@/assets/game-sports.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ayush Tech — Esports Command & Game Library" },
      {
        name: "description",
        content:
          "Ayush Tech is the esports command deck: play shooters, racing, MOBA, RPG, strategy and sports titles, track ladders and join tournaments.",
      },
      { property: "og:title", content: "Ayush Tech — Esports Command & Game Library" },
      {
        property: "og:description",
        content:
          "Browse every genre, climb the Season 9 ladder and register for cash tournaments on Ayush Tech.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const games = [
  {
    title: "Steel Vanguard",
    genre: "SHOOTER",
    blurb: "Zero-G ranked combat",
    rating: "4.8",
    image: gameVanguard,
    accent: "text-neon",
  },
  {
    title: "Driftline Apex",
    genre: "RACING",
    blurb: "Drift-based street racing",
    rating: "4.6",
    image: gameDriftline,
    accent: "text-hot",
  },
  {
    title: "Runeclash",
    genre: "MOBA",
    blurb: "5v5 rune arena",
    rating: "4.9",
    image: gameRuneclash,
    accent: "text-neon",
  },
  {
    title: "Emberfall Saga",
    genre: "RPG",
    blurb: "Open-world kingdom quests",
    rating: "4.7",
    image: gameRpg,
    accent: "text-hot",
  },
  {
    title: "Orbit Command",
    genre: "STRATEGY",
    blurb: "Real-time fleet warfare",
    rating: "4.5",
    image: gameStrategy,
    accent: "text-neon",
  },
  {
    title: "Floodlight FC",
    genre: "SPORTS",
    blurb: "Online league football",
    rating: "4.4",
    image: gameSports,
    accent: "text-hot",
  },
];

const genres = [
  "ALL",
  "SHOOTER",
  "RACING",
  "MOBA",
  "RPG",
  "STRATEGY",
  "SPORTS",
  "PUZZLE",
  "HORROR",
  "SIMULATION",
];

function Index() {
  return (
    <div className="min-h-screen bg-void text-frost font-body antialiased relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 scanlines opacity-40" />
      <div className="pointer-events-none absolute -top-40 left-1/4 size-[520px] rounded-full bg-neon/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 size-[420px] rounded-full bg-hot/10 blur-[120px]" />

      <header className="sticky top-0 z-50 border-b border-line/60 bg-void/60 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="grid place-items-center size-8 rounded-md bg-neon/90 text-inkdeep font-display text-lg leading-none">
              A
            </div>
            <span className="font-display text-xl tracking-wide">AYUSH TECH</span>
            <span className="font-mono text-[10px] text-frost/40 tracking-widest hidden sm:block">
              / ESPORTS COMMAND
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-7 font-mono text-xs tracking-wider text-frost/70">
            <a href="#library" className="hover:text-neon transition-colors">
              GAMES
            </a>
            <a href="#leaderboard" className="hover:text-neon transition-colors">
              LEADERBOARD
            </a>
            <a href="#leaderboard" className="hover:text-neon transition-colors">
              TOURNAMENTS
            </a>
            <a href="#signal" className="hover:text-neon transition-colors">
              COMMUNITY
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <span className="font-mono text-[11px] text-frost/50 tracking-wider hidden sm:block">
              RANK <span className="text-neon">DIAMOND II</span>
            </span>
            <button className="rounded-md bg-neon text-inkdeep font-semibold text-sm px-4 py-2 hover:bg-frost transition-colors">
              Sign in
            </button>
          </div>
        </div>
      </header>

      <section className="relative">
        <div className="absolute inset-0">
          <img
            src={heroArena}
            alt="Esports arena with neon stage lighting"
            width={1920}
            height={1088}
            className="w-full h-[560px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-void via-void/70 to-transparent" />
          <div className="absolute inset-x-0 top-1/2 h-px beam" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-16">
          <div className="max-w-2xl animate-rise">
            <span className="inline-flex items-center gap-2 rounded-full frost px-3 py-1 font-mono text-[11px] tracking-widest text-neon">
              <span className="size-1.5 rounded-full bg-neon" />
              FEATURED SEASON
            </span>
            <h1 className="mt-6 font-display text-5xl sm:text-[64px] leading-[.95] tracking-tight text-balance">
              STEEL<span className="text-neon">VANGUARD</span> ZRO
            </h1>
            <p className="mt-5 text-frost/70 text-lg max-w-[46ch] text-pretty">
              Zero-gravity tactical combat is live. 48-player ranked matches, new Zeta-class
              loadouts, and a season ladder that resets only at the finals.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/play"
                className="rounded-md bg-neon text-inkdeep font-semibold text-sm px-6 py-3 hover:bg-frost transition-colors"
              >
                Play Now
              </Link>
              <Link
                to="/play"
                className="rounded-md frost px-6 py-3 font-semibold text-sm hover:bg-frost/10 transition-colors"
              >
                Free Arcade
              </Link>
            </div>
            <div className="mt-10 flex gap-8 font-mono text-xs tracking-wide text-frost/50">
              <span>
                <span className="text-frost text-base block">4.8</span>PLAYER RATING
              </span>
              <span>
                <span className="text-frost text-base block">1.2M</span>IN-MATCH NOW
              </span>
              <span>
                <span className="text-frost text-base block">S9</span>ACTIVE LADDER
              </span>
            </div>
          </div>
        </div>
      </section>

      <section id="library" className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="flex items-end justify-between mb-6">
          <div>
            <span className="font-mono text-[11px] tracking-widest text-neon">(a) LIBRARY</span>
            <h2 className="mt-2 font-display text-4xl tracking-tight">Browse the arsenal</h2>
          </div>
          <span className="font-mono text-xs text-frost/40 tracking-wider">128 TITLES</span>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {genres.map((g, i) => (
            <span
              key={g}
              className={`rounded-md border border-line/60 px-3 py-1 font-mono text-[11px] tracking-wider transition-colors hover:border-neon/40 hover:text-neon ${
                i === 0 ? "bg-neon/10 text-neon border-neon/40" : "text-frost/60"
              }`}
            >
              {g}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {games.map((game, i) => (
            <div
              key={game.title}
              className="group frost rounded-xl p-3 transition-all duration-200 hover:-translate-y-1 hover:border-neon/40 animate-rise"
              style={{ animationDelay: `${60 * (i + 1)}ms` }}
            >
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={game.image}
                  alt={`${game.title} key art`}
                  loading="lazy"
                  width={1024}
                  height={640}
                  className="w-full aspect-[16/10] object-cover"
                />
                <span
                  className={`absolute left-3 top-3 rounded bg-void/70 backdrop-blur px-2 py-0.5 font-mono text-[10px] tracking-wider ${game.accent}`}
                >
                  {game.genre}
                </span>
              </div>
              <div className="px-1 pt-3 pb-1 flex items-center justify-between">
                <h3 className="font-semibold">{game.title}</h3>
                <span className="font-mono text-xs text-neon">{game.rating}</span>
              </div>
              <p className="px-1 text-xs text-frost/50">{game.blurb}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="leaderboard" className="relative mx-auto max-w-7xl px-6 py-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
          <div className="lg:col-span-3 frost rounded-2xl p-6 animate-rise">
            <div className="flex items-center justify-between mb-5">
              <span className="font-mono text-[11px] tracking-widest text-neon">
                (b) LEADERBOARD
              </span>
              <span className="font-mono text-xs text-frost/40">SEASON 9 · TOP 3</span>
            </div>
            <ol className="space-y-2">
              <li className="flex items-center gap-4 rounded-lg bg-frost/5 px-4 py-3">
                <span className="font-display text-xl text-neon w-6">1</span>
                <span className="font-semibold">VexNova</span>
                <span className="font-mono text-xs text-frost/40 hidden sm:block">
                  Steel Vanguard
                </span>
                <span className="ml-auto font-mono text-sm text-frost">9,412</span>
              </li>
              <li className="flex items-center gap-4 rounded-lg bg-frost/[0.02] px-4 py-3">
                <span className="font-display text-xl text-frost/60 w-6">2</span>
                <span className="font-semibold">KairosX</span>
                <span className="font-mono text-xs text-frost/40 hidden sm:block">Runeclash</span>
                <span className="ml-auto font-mono text-sm text-frost">9,207</span>
              </li>
              <li className="flex items-center gap-4 rounded-lg bg-frost/[0.02] px-4 py-3">
                <span className="font-display text-xl text-frost/60 w-6">3</span>
                <span className="font-semibold">Mira.exe</span>
                <span className="font-mono text-xs text-frost/40 hidden sm:block">
                  Driftline Apex
                </span>
                <span className="ml-auto font-mono text-sm text-frost">9,098</span>
              </li>
            </ol>
          </div>
          <div className="lg:col-span-2 frost rounded-2xl p-6 animate-rise">
            <div className="flex items-center justify-between mb-5">
              <span className="font-mono text-[11px] tracking-widest text-hot">
                (c) TOURNAMENTS
              </span>
              <button className="font-mono text-xs text-frost/50 hover:text-frost transition-colors">
                All
              </button>
            </div>
            <div className="space-y-3">
              <div className="rounded-lg border border-line/60 p-3">
                <p className="text-sm font-semibold">Zro Circuit Finals</p>
                <p className="font-mono text-[11px] text-frost/50 mt-1">
                  $250K · 128 TEAMS · LIVE IN 02D
                </p>
              </div>
              <div className="rounded-lg border border-line/60 p-3">
                <p className="text-sm font-semibold">Runeclash Masters</p>
                <p className="font-mono text-[11px] text-frost/50 mt-1">
                  $120K · 64 TEAMS · 14 DAYS
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="signal" className="relative border-t border-line/60">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <span className="font-mono text-[11px] tracking-widest text-neon">(d) SIGNAL / NEWS</span>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
            <article className="frost rounded-xl p-5">
              <span className="font-mono text-[10px] text-hot tracking-widest">PATCH</span>
              <h3 className="mt-2 font-semibold text-lg">Season 9 balancing drops this week</h3>
              <p className="mt-2 text-sm text-frost/55">
                Zeta-class loadouts rebalanced and ranked reset window confirmed for the finals.
              </p>
            </article>
            <article className="frost rounded-xl p-5">
              <span className="font-mono text-[10px] text-neon tracking-widest">COMMUNITY</span>
              <h3 className="mt-2 font-semibold text-lg">Creator showcase: top Zro montages</h3>
              <p className="mt-2 text-sm text-frost/55">
                The community studio picks five highlight reels for the weekly broadcast.
              </p>
            </article>
            <article className="frost rounded-xl p-5">
              <span className="font-mono text-[10px] text-frost/60 tracking-widest">EVENT</span>
              <h3 className="mt-2 font-semibold text-lg">Watch party for the Circuit Finals</h3>
              <p className="mt-2 text-sm text-frost/55">
                Join the lobby for live commentary, polls, and a shared prize pool.
              </p>
            </article>
          </div>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-line/40 pt-6">
            <span className="font-display text-lg tracking-wide">AYUSH TECH</span>
            <div className="flex gap-6 font-mono text-xs text-frost/50 tracking-wider">
              <span>Privacy</span>
              <span>Terms</span>
              <span>Support</span>
            </div>
            <span className="font-mono text-[11px] text-frost/30 tracking-wider">
              © 2026 AYUSH TECH
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
