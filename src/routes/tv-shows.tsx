import { createFileRoute } from "@tanstack/react-router";
import { CatalogPage } from "../components/streambox";
export const Route = createFileRoute("/tv-shows")({
  head: () => ({ meta: [
    { title: "TV Shows — StreamBox" }, { name: "description", content: "Explore binge-worthy original series, dramas, mysteries, and adventures on StreamBox." },
    { property: "og:title", content: "TV Shows — StreamBox" }, { property: "og:description", content: "Explore binge-worthy original series, dramas, mysteries, and adventures on StreamBox." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: () => <CatalogPage kind="shows" />,
});
