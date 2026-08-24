import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import heroImage from "../assets/last-signal-hero.jpg";
import neonImage from "../assets/neon-warriors.jpg";
import marsImage from "../assets/beyond-mars.jpg";
import shadowImage from "../assets/shadow-protocol.jpg";
import kingdomImage from "../assets/lost-kingdom.jpg";
import stormImage from "../assets/silent-storm-backdrop.jpg";

export type IconName = "play" | "plus" | "search" | "user" | "chevron" | "volume" | "expand" | "subtitles" | "clock" | "star" | "check" | "history" | "heart" | "settings";

export function Icon({ name, className = "h-5 w-5" }: { name: IconName; className?: string }) {
  const paths: Record<IconName, ReactNode> = {
    play: <path d="m8 5 11 7-11 7V5Z" />,
    plus: <><path d="M12 5v14" /><path d="M5 12h14" /></>,
    search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></>,
    user: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>,
    chevron: <path d="m9 18 6-6-6-6" />,
    volume: <><path d="M11 5 6 9H3v6h3l5 4V5Z" /><path d="M15 9a4 4 0 0 1 0 6" /><path d="M18 6a8 8 0 0 1 0 12" /></>,
    expand: <><path d="M8 3H3v5" /><path d="m3 3 6 6" /><path d="M16 21h5v-5" /><path d="m21 21-6-6" /></>,
    subtitles: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M7 13h4M13 13h4M8 16h8" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    star: <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9L12 3Z" />,
    check: <path d="m5 12 4 4L19 6" />,
    history: <><path d="M3 12a9 9 0 1 0 3-6.7L3 8" /><path d="M3 3v5h5M12 7v5l3 2" /></>,
    heart: <path d="M20.8 4.6a5.4 5.4 0 0 0-7.6 0L12 5.8l-1.2-1.2a5.4 5.4 0 0 0-7.6 7.6L12 21l8.8-8.8a5.4 5.4 0 0 0 0-7.6Z" />,
    settings: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1A1.7 1.7 0 0 0 9 4.6 1.7 1.7 0 0 0 10 3v-.2h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z" /></>,
  };
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>{paths[name]}</svg>;
}

export type Title = {
  title: string;
  year: string;
  rating: string;
  genre: string;
  image: string;
  description: string;
  progress?: number | undefined;
};

export const titles: Title[] = [
  { title: "The Last Signal", year: "2026", rating: "9.1", genre: "Sci-Fi Mystery", image: heroImage, description: "A signal from beyond our solar system carries a warning no one was meant to hear." },
  { title: "Neon Warriors", year: "2025", rating: "8.7", genre: "Cyberpunk Action", image: neonImage, description: "A renegade rider takes on the syndicate controlling the city's final free district." },
  { title: "Beyond Mars", year: "2026", rating: "8.9", genre: "Space Drama", image: marsImage, description: "A stranded explorer discovers a structure that rewrites humanity's origin story." },
  { title: "Shadow Protocol", year: "2024", rating: "8.5", genre: "Espionage", image: shadowImage, description: "An intelligence operative finds his own identity buried inside a classified program." },
  { title: "Lost Kingdom", year: "2025", rating: "8.8", genre: "Epic Fantasy", image: kingdomImage, description: "Three exiles cross a forbidden valley to wake the last city of an ancient world." },
  { title: "Silent Storm", year: "2026", rating: "8.6", genre: "Survival Thriller", image: stormImage, description: "A rescue unit races a supernatural storm swallowing an entire coastline." },
  { title: "Code Zero", year: "2025", rating: "8.3", genre: "Tech Thriller", image: shadowImage, description: "One line of impossible code begins predicting crimes before they happen." },
  { title: "Dark Horizon", year: "2024", rating: "8.4", genre: "Sci-Fi", image: marsImage, description: "The crew of a survey ship watches the edge of the universe blink out." },
  { title: "Midnight City", year: "2026", rating: "8.2", genre: "Neo-Noir", image: neonImage, description: "A courier has one night to deliver the secret that can bring down a city." },
  { title: "The Forgotten Planet", year: "2023", rating: "8.0", genre: "Adventure", image: kingdomImage, description: "An ancient map leads a fearless crew to a world erased from every star chart." },
];

export function Brand() {
  return <Link to="/" className="group flex shrink-0 items-center gap-2" aria-label="StreamBox home"><span className="grid h-7 w-7 place-items-center rounded-sm bg-primary text-primary-foreground shadow-brand transition-transform group-hover:scale-105"><Icon name="play" className="h-4 w-4 fill-current" /></span><span className="font-display text-xl font-extrabold tracking-normal text-foreground">Stream<span className="text-primary">Box</span></span></Link>;
}

export function Header() {
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl"><div className="mx-auto grid h-16 max-w-screen-2xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 sm:flex sm:px-6 lg:px-10"><Brand /><nav aria-label="Primary navigation" className="order-3 col-span-2 flex min-w-0 items-center gap-5 overflow-x-auto pb-2 text-xs font-semibold text-muted-foreground sm:order-none sm:col-span-1 sm:ml-8 sm:pb-0 sm:text-sm"><Link to="/" activeProps={{ className: "text-foreground" }} className="whitespace-nowrap transition-colors hover:text-foreground">Home</Link><Link to="/movies" activeProps={{ className: "text-foreground" }} className="whitespace-nowrap transition-colors hover:text-foreground">Movies</Link><Link to="/tv-shows" activeProps={{ className: "text-foreground" }} className="whitespace-nowrap transition-colors hover:text-foreground">TV Shows</Link><Link to="/movies" className="whitespace-nowrap transition-colors hover:text-foreground">Genres</Link><Link to="/profile" activeProps={{ className: "text-foreground" }} className="whitespace-nowrap transition-colors hover:text-foreground">My List</Link></nav><div className="ml-auto flex shrink-0 items-center gap-1"><Link to="/search" aria-label="Search" title="Search" className="grid h-10 w-10 place-items-center rounded-full text-foreground transition-colors hover:bg-accent"><Icon name="search" /></Link><Link to="/profile" aria-label="Your profile" title="Your profile" className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-primary hover:text-foreground"><Icon name="user" className="h-4 w-4" /></Link></div></div></header>;
}

export function Footer() {
  return <footer className="mt-16 border-t border-border bg-surface"><div className="mx-auto flex max-w-screen-2xl flex-col gap-5 px-5 py-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10"><Brand /><p>© 2026 StreamBox. Fictional entertainment, endlessly imagined.</p><div className="flex gap-5"><a href="#privacy" className="hover:text-foreground">Privacy</a><a href="#help" className="hover:text-foreground">Help</a></div></div></footer>;
}

export function PageShell({ children, bare = false }: { children: ReactNode; bare?: boolean }) {
  return <div className="min-h-screen overflow-x-hidden bg-background text-foreground">{!bare && <Header />}<main>{children}</main>{!bare && <Footer />}</div>;
}

export function ActionLink({ to, icon, children, secondary = false }: { to: "/player" | "/profile" | "/movie-details"; icon: IconName; children: ReactNode; secondary?: boolean }) {
  return <Link to={to} className={secondary ? "inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-border bg-foreground/10 px-5 text-sm font-bold text-foreground backdrop-blur-md transition-all hover:bg-foreground/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" : "inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-primary px-5 text-sm font-bold text-primary-foreground shadow-brand transition-all hover:bg-primary-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"}><Icon name={icon} className="h-4 w-4" />{children}</Link>;
}

export function MovieCard({ item, rank, landscape = false }: { item: Title; rank?: number | undefined; landscape?: boolean }) {
  return <article className={`group relative shrink-0 overflow-hidden rounded-md border border-border bg-card shadow-card ${landscape ? "w-[17rem] sm:w-[21rem]" : "w-[9.4rem] sm:w-[12rem] lg:w-[13.5rem]"}`}><Link to="/movie-details" className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring"><div className={landscape ? "aspect-video overflow-hidden" : "aspect-[2/3] overflow-hidden"}><img src={item.image} alt={`${item.title} fictional artwork`} width={landscape ? 1920 : 768} height={landscape ? 1080 : 1152} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /></div><div className="absolute inset-0 flex flex-col justify-end bg-card-overlay p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100"><span className="mb-auto grid h-9 w-9 place-items-center self-center rounded-full bg-primary text-primary-foreground shadow-brand"><Icon name="play" className="h-4 w-4 fill-current" /></span><h3 className="text-sm font-bold text-foreground">{item.title}</h3><p className="mt-1 line-clamp-2 text-[11px] leading-relaxed text-muted-foreground">{item.description}</p><div className="mt-2 flex items-center gap-2 text-[10px] text-foreground"><span className="text-score">★ {item.rating}</span><span>{item.year}</span><span className="truncate">{item.genre}</span></div></div>{rank && <span className="absolute left-2 top-2 grid h-7 min-w-7 place-items-center rounded-sm bg-primary px-1.5 text-xs font-black text-primary-foreground">{rank}</span>}{typeof item.progress === "number" && <div className="absolute inset-x-0 bottom-0 h-1 bg-muted"><div className="h-full bg-primary" style={{ width: `${item.progress}%` }} /></div>}</Link><div className="px-1 pb-1 pt-2 group-hover:opacity-0"><h3 className="truncate text-sm font-semibold text-foreground">{item.title}</h3><p className="mt-1 flex gap-2 text-[11px] text-muted-foreground"><span>{item.year}</span><span className="text-score">★ {item.rating}</span></p></div></article>;
}

export function MediaRow({ title, items, ranked = false, landscape = false }: { title: string; items: Title[]; ranked?: boolean; landscape?: boolean }) {
  return <section className="py-5"><div className="mb-4 flex items-center justify-between"><h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">{title}</h2><Link to="/movies" className="flex items-center gap-1 text-xs font-semibold text-muted-foreground transition-colors hover:text-foreground">View all <Icon name="chevron" className="h-4 w-4" /></Link></div><div className="no-scrollbar flex gap-3 overflow-x-auto pb-5 pt-1 sm:gap-4">{items.map((item, index) => <MovieCard key={`${title}-${item.title}-${index}`} item={item} rank={ranked ? index + 1 : undefined} landscape={landscape} />)}</div></section>;
}

export function Hero({ compact = false }: { compact?: boolean }) {
  return <section className={`relative overflow-hidden ${compact ? "min-h-[34rem]" : "min-h-[42rem] sm:min-h-[46rem]"}`}><img src={heroImage} alt="The Last Signal fictional cinematic scene" width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover object-center" /><div className="absolute inset-0 bg-hero-overlay" /><div className="relative mx-auto flex min-h-[inherit] max-w-screen-2xl items-end px-5 pb-16 pt-28 sm:px-8 lg:px-10"><div className="max-w-2xl animate-rise"><span className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-background/45 px-3 py-1 text-[11px] font-bold uppercase text-foreground backdrop-blur-md"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> StreamBox Original</span><h1 className="font-display text-5xl font-black leading-[0.95] tracking-normal text-foreground sm:text-7xl lg:text-8xl">The Last<br /><span className="text-primary">Signal</span></h1><div className="mt-5 flex flex-wrap items-center gap-3 text-xs font-semibold text-muted-foreground sm:text-sm"><span className="text-score">★ 9.1</span><span>2026</span><span>2h 18m</span><span className="rounded-sm border border-border px-2 py-0.5 text-foreground">U/A 16+</span><span>Sci-Fi Mystery</span></div><p className="mt-5 max-w-xl text-sm leading-7 text-foreground/80 sm:text-base">When an isolated radio astronomer decodes a transmission from beyond our solar system, she uncovers a warning that could redefine humanity's place in the universe.</p><div className="mt-7 flex flex-wrap gap-3"><ActionLink to="/player" icon="play">Watch now</ActionLink><ActionLink to="/profile" icon="plus" secondary>Add to my list</ActionLink></div></div></div></section>;
}

export function Filters() {
  return <div className="no-scrollbar flex gap-2 overflow-x-auto py-1" aria-label="Genre filters"><span className="shrink-0 rounded-full bg-primary px-4 py-2 text-xs font-bold text-primary-foreground">All</span>{["Action", "Drama", "Sci-Fi", "Thriller", "Fantasy", "Documentary"].map((item) => <span key={item} className="shrink-0 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold text-muted-foreground">{item}</span>)}</div>;
}

export function CatalogPage({ kind }: { kind: "movies" | "shows" }) {
  const heading = kind === "movies" ? "Movies" : "TV Shows";
  const copy = kind === "movies" ? "Worlds worth getting lost in." : "One more episode starts here.";
  return <PageShell><section className="relative min-h-[26rem] overflow-hidden pt-16"><img src={kind === "movies" ? stormImage : neonImage} alt="Fictional featured entertainment artwork" width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover object-center opacity-70" /><div className="absolute inset-0 bg-section-overlay" /><div className="relative mx-auto flex min-h-[26rem] max-w-screen-2xl items-end px-5 pb-10 sm:px-8 lg:px-10"><div><p className="mb-2 text-xs font-bold uppercase text-primary">Explore StreamBox</p><h1 className="font-display text-5xl font-black sm:text-6xl">{heading}</h1><p className="mt-3 text-lg text-muted-foreground">{copy}</p></div></div></section><div className="mx-auto max-w-screen-2xl px-5 py-8 sm:px-8 lg:px-10"><Filters /><MediaRow title={kind === "movies" ? "Featured films" : "Critically acclaimed series"} items={titles.slice(1, 7)} /><MediaRow title="Trending now" items={[...titles.slice(4), ...titles.slice(0, 3)]} ranked /><MediaRow title={kind === "movies" ? "Award-worthy stories" : "Binge-worthy dramas"} items={[...titles].reverse().slice(1, 8)} /></div></PageShell>;
}
