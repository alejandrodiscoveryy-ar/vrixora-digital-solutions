import { Link, createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  formatBlogDate,
  getSortedBlogPosts,
} from "../../data/blog-posts";

const INITIAL_VISIBLE = 6;
const VISIBLE_STEP = 6;

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog de Vrixora Solutions" },
      {
        name: "description",
        content:
          "Guias practicas para controlar gastos, mejorar rentabilidad y digitalizar operaciones con enfoque de negocio.",
      },
      { property: "og:title", content: "Blog de Vrixora Solutions" },
      {
        property: "og:description",
        content:
          "Lee articulos practicos de Vrixora para tomar mejores decisiones en tu operacion diaria.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.vrixora.com/blog" },
      {
        property: "og:image",
        content: "https://www.vrixora.com/vrixora-social.png",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.vrixora.com/blog" }],
  }),
  component: BlogIndexPage,
});

function BlogIndexPage() {
  const posts = useMemo(() => getSortedBlogPosts(), []);
  const [visible, setVisible] = useState(INITIAL_VISIBLE);
  const visiblePosts = posts.slice(0, visible);
  const hasMore = visible < posts.length;

  return (
    <div className="mx-auto max-w-6xl px-6 pt-20 pb-24 md:pt-28">
      <div className="max-w-3xl">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-3 py-1 text-xs text-muted-foreground">
          Recursos de crecimiento
        </span>
        <h1 className="mt-6 text-4xl font-bold md:text-5xl">
          Blog de Vrixora Solutions
        </h1>
        <p className="mt-5 text-lg text-muted-foreground">
          Compartimos guias accionables para mejorar control financiero,
          productividad y toma de decisiones en negocios que quieren crecer con
          datos claros.
        </p>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visiblePosts.map((post) => (
          <article
            key={post.slug}
            className="glass flex h-full flex-col overflow-hidden rounded-xl shadow-[var(--shadow-card)]"
          >
            <img
              src={post.coverImage}
              alt={post.coverAlt}
              className="h-44 w-full object-cover"
              loading="lazy"
            />
            <div className="flex flex-1 flex-col p-5">
              <span className="inline-flex w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                {post.category}
              </span>
              <h2 className="mt-3 text-xl font-semibold leading-snug">{post.title}</h2>
              <p className="mt-3 flex-1 text-sm text-muted-foreground">{post.summary}</p>
              <p className="mt-4 text-xs text-muted-foreground">
                {formatBlogDate(post.publishedAt)} · {post.readingMinutes} min de lectura
              </p>
              <Link
                to="/blog/$slug"
                params={{ slug: post.slug }}
                className="mt-4 inline-flex items-center rounded-lg border border-border px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
              >
                Leer articulo →
              </Link>
            </div>
          </article>
        ))}
      </div>

      {hasMore && (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setVisible((current) => current + VISIBLE_STEP)}
            className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90"
          >
            Ver mas
          </button>
        </div>
      )}
    </div>
  );
}
