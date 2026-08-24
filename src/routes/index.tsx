import { createFileRoute } from "@tanstack/react-router";
import { Hero, MediaRow, PageShell, titles } from "../components/streambox";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "StreamBox — Watch Original Movies & Shows" },
    { name: "description", content: "Discover original fictional movies and series in a premium cinematic streaming experience." },
    { property: "og:title", content: "StreamBox — Watch Original Movies & Shows" },
    { property: "og:description", content: "Discover original fictional movies and series in a premium cinematic streaming experience." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: HomePage,
});

function HomePage() {
  const continueTitles = titles.slice(1, 6).map((item, index) => ({ ...item, progress: [72, 38, 51, 84, 23][index] }));
  return <PageShell><Hero /><div className="relative z-10 mx-auto -mt-8 max-w-screen-2xl px-5 sm:px-8 lg:px-10"><MediaRow title="Trending in StreamBox" items={titles.slice(1, 8)} ranked /><MediaRow title="Continue watching" items={continueTitles} landscape /><MediaRow title="Popular movies" items={[...titles].reverse().slice(0, 7)} /><MediaRow title="Latest releases" items={[...titles.slice(5), ...titles.slice(0, 4)]} /><MediaRow title="Popular TV shows" items={titles.slice(2, 9)} /><MediaRow title="Recommended for you" items={[...titles.slice(7), ...titles.slice(0, 5)]} /></div></PageShell>;
}
