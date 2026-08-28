import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog de Vrixora Solutions" },
      {
        name: "description",
        content:
          "Consejos practicos para mejorar gestion, rentabilidad y operacion en negocios de transporte y servicios.",
      },
      { property: "og:title", content: "Blog de Vrixora Solutions" },
      {
        property: "og:description",
        content:
          "Articulos de Vrixora sobre control financiero, digitalizacion operativa y crecimiento de negocios.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.vrixora.com/blog" },
      {
        property: "og:image",
        content: "https://www.vrixora.com/vrixora-logo.png",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.vrixora.com/blog" }],
  }),
  component: BlogLayout,
});

function BlogLayout() {
  return <Outlet />;
}
