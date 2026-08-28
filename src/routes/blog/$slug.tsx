import { Link, createFileRoute } from "@tanstack/react-router";
import {
  formatBlogDate,
  getBlogPostBySlug,
} from "../../data/blog-posts";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const post = getBlogPostBySlug(params.slug);

    if (!post) {
      return {
        meta: [
          { title: "Articulo no encontrado | Blog Vrixora" },
          {
            name: "description",
            content: "El articulo solicitado no existe o fue movido.",
          },
        ],
        links: [{ rel: "canonical", href: "https://www.vrixora.com/blog" }],
      };
    }

    const canonicalUrl = `https://www.vrixora.com${post.canonicalPath}`;

    return {
      meta: [
        { title: post.seoTitle },
        { name: "description", content: post.seoDescription },
        { property: "og:title", content: post.seoTitle },
        { property: "og:description", content: post.seoDescription },
        { property: "og:type", content: "article" },
        { property: "og:url", content: canonicalUrl },
        { property: "og:image", content: post.ogImage },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: canonicalUrl }],
    };
  },
  component: BlogArticlePage,
});

function BlogArticlePage() {
  const { slug } = Route.useParams();
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return (
      <div className="mx-auto max-w-3xl px-6 pt-20 pb-24 md:pt-28">
        <h1 className="text-3xl font-bold">Articulo no encontrado</h1>
        <p className="mt-4 text-muted-foreground">
          El contenido que buscas no esta disponible.
        </p>
        <Link
          to="/blog"
          className="mt-6 inline-flex items-center rounded-lg border border-border px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
        >
          Volver al blog
        </Link>
      </div>
    );
  }

  const canonicalUrl = `https://www.vrixora.com${post.canonicalPath}`;
  const encodedUrl = encodeURIComponent(canonicalUrl);
  const encodedTitle = encodeURIComponent(post.title);

  const whatsappUrl = `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.seoDescription,
    image: [post.ogImage],
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Vrixora Solutions",
      logo: {
        "@type": "ImageObject",
        url: "https://www.vrixora.com/vrixora-symbol.png",
      },
    },
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    mainEntityOfPage: canonicalUrl,
  };

  return (
    <article className="mx-auto max-w-4xl px-6 pt-20 pb-24 md:pt-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <Link
        to="/blog"
        className="text-sm text-primary hover:underline"
      >
        ← Volver al blog
      </Link>

      <div className="mt-6">
        <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          {post.category}
        </span>
        <h1 className="mt-4 text-4xl font-bold leading-tight">{post.title}</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          {formatBlogDate(post.publishedAt)} · {post.readingMinutes} min de lectura · Autor: {post.author}
        </p>
      </div>

      <img
        src={post.coverImage}
        alt={post.coverAlt}
        className="mt-8 h-64 w-full rounded-xl object-cover shadow-[var(--shadow-card)] md:h-80"
      />

      <div className="mt-10 space-y-10 text-base leading-relaxed">
        {post.sections.map((section) => (
          <section key={section.title}>
            <h2 className="text-2xl font-bold">{section.title}</h2>

            {section.paragraphs?.map((paragraph) => (
              <p key={paragraph} className="mt-3 text-muted-foreground">
                {paragraph}
              </p>
            ))}

            {section.bullets && (
              <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
                {section.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}

            {section.subSections?.map((sub) => (
              <div key={sub.title} className="mt-6">
                <h3 className="text-xl font-semibold">{sub.title}</h3>

                {sub.paragraphs?.map((paragraph) => (
                  <p key={paragraph} className="mt-3 text-muted-foreground">
                    {paragraph}
                  </p>
                ))}

                {sub.bullets && (
                  <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
                    {sub.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {section.links && (
              <div className="mt-5 flex flex-wrap gap-3">
                {section.links.map((link) => (
                  <a
                    key={link.href + link.label}
                    href={link.href}
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </section>
        ))}
      </div>

      <div className="mt-12 rounded-xl border border-border p-6">
        <h2 className="text-xl font-bold">Comparte este articulo</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-border px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
          >
            WhatsApp
          </a>
          <a
            href={facebookUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-border px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
          >
            Facebook
          </a>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-border px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="mt-10 glass rounded-xl p-6 shadow-[var(--shadow-card)]">
        <h2 className="text-2xl font-bold">Lleva esta claridad a tu operacion diaria</h2>
        <p className="mt-3 text-muted-foreground">
          En Vrixora Solutions construimos herramientas practicas para que negocios reales
          tomen decisiones con datos reales. Si quieres control operativo y financiero,
          te ayudamos a implementarlo.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href="/servicios"
            className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90"
          >
            Ver servicios
          </a>
          <a
            href="/tuktuk"
            className="rounded-lg border border-border px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
          >
            Conocer TukTuk Control
          </a>
        </div>
      </div>
    </article>
  );
}
