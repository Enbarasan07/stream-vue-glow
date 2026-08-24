import { createFileRoute } from "@tanstack/react-router";
import { CatalogPage } from "../components/streambox";
export const Route = createFileRoute("/movies")({
  head: () => ({ meta: [
    { title: "Movies — StreamBox" }, { name: "description", content: "Browse original action, science fiction, drama, fantasy, and thriller movies on StreamBox." },
    { property: "og:title", content: "Movies — StreamBox" }, { property: "og:description", content: "Browse original action, science fiction, drama, fantasy, and thriller movies on StreamBox." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: () => <CatalogPage kind="movies" />,
});
