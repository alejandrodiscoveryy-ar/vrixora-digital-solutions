import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import {
  formatBlogDate,
  getSortedBlogPosts,
  type BlogPost,
  type BlogSection,
} from "../data/blog-posts";

export const Route = createFileRoute("/admin/blog")({
  head: () => ({
    meta: [
      { title: "Admin blog — Vrixora" },
      {
        name: "description",
        content: "Panel interno para preparar articulos del blog de Vrixora.",
      },
      { name: "robots", content: "noindex" },
      { property: "og:url", content: "/admin/blog" },
    ],
    links: [{ rel: "canonical", href: "/admin/blog" }],
  }),
  component: AdminBlogPage,
});

const BLOG_ADMIN_EMAIL = "alecruzm@gmail.com";

type Draft = {
  title: string;
  summary: string;
  category: string;
  publishedAt: string;
  readingMinutes: string;
  coverImage: string;
  coverAlt: string;
  seoTitle: string;
  seoDescription: string;
  sectionTitle: string;
  sectionParagraphs: string;
  sectionBullets: string;
};

const initialDraft: Draft = {
  title: "",
  summary: "",
  category: "",
  publishedAt: "",
  readingMinutes: "6",
  coverImage: "/blog/imagen-articulo.jpg",
  coverAlt: "",
  seoTitle: "",
  seoDescription: "",
  sectionTitle: "",
  sectionParagraphs: "",
  sectionBullets: "",
};

function slugify(input: string) {
  return input
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function parseLines(input: string) {
  return input
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

function AdminBlogPage() {
  const [draft, setDraft] = useState<Draft>(initialDraft);
  const [copyFeedback, setCopyFeedback] = useState<"idle" | "ok" | "error">("idle");
  const [email, setEmail] = useState("");
  const [isCheckingSession, setIsCheckingSession] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [authFeedback, setAuthFeedback] = useState("");
  const posts = useMemo(() => getSortedBlogPosts(), []);

  const generatedSlug = slugify(draft.title || "nuevo-articulo");

  const generatedSection: BlogSection = {
    title: draft.sectionTitle || "Nueva seccion",
    paragraphs: parseLines(draft.sectionParagraphs),
    bullets: parseLines(draft.sectionBullets),
  };

  if (!generatedSection.paragraphs?.length) {
    delete generatedSection.paragraphs;
  }
  if (!generatedSection.bullets?.length) {
    delete generatedSection.bullets;
  }

  const generatedPost: BlogPost = {
    slug: generatedSlug,
    title: draft.title || "Nuevo articulo",
    summary: draft.summary || "Resumen del articulo.",
    category: draft.category || "Categoria",
    publishedAt: draft.publishedAt || new Date().toISOString().slice(0, 10),
    readingMinutes: Number(draft.readingMinutes) || 6,
    author: "Vrixora Solutions",
    coverImage: draft.coverImage,
    coverAlt: draft.coverAlt || "Imagen destacada del articulo",
    seoTitle: draft.seoTitle || `${draft.title || "Nuevo articulo"} | Blog Vrixora`,
    seoDescription:
      draft.seoDescription ||
      "Descripcion SEO del articulo para buscadores y redes sociales.",
    canonicalPath: `/blog/${generatedSlug}`,
    ogImage: `https://www.vrixora.com${draft.coverImage}`,
    sections: [generatedSection],
  };

  const generatedSnippet = `${JSON.stringify(generatedPost, null, 2)},`;

  const copySnippet = async () => {
    try {
      await navigator.clipboard.writeText(generatedSnippet);
      setCopyFeedback("ok");
    } catch {
      setCopyFeedback("error");
    }
    setTimeout(() => setCopyFeedback("idle"), 2000);
  };

  const onChange = (key: keyof Draft, value: string) => {
    setDraft((current) => ({ ...current, [key]: value }));
  };

  useEffect(() => {
    let alive = true;

    const checkSession = async () => {
      setIsCheckingSession(true);
      try {
        const response = await fetch("/admin/blog/auth", {
          method: "GET",
          credentials: "include",
        });
        if (!response.ok) {
          if (alive) {
            setIsAuthorized(false);
          }
          return;
        }

        const payload = (await response.json()) as { authorized?: boolean };
        if (alive) {
          setIsAuthorized(payload.authorized === true);
        }
      } catch {
        if (alive) {
          setIsAuthorized(false);
        }
      } finally {
        if (alive) {
          setIsCheckingSession(false);
        }
      }
    };

    void checkSession();

    return () => {
      alive = false;
    };
  }, []);

  const authorize = async () => {
    try {
      const response = await fetch("/admin/blog/auth", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const payload = (await response.json()) as {
        ok?: boolean;
        message?: string;
        authorized?: boolean;
      };

      if (!response.ok || payload.ok !== true || payload.authorized !== true) {
        setAuthFeedback(payload.message ?? "No fue posible autorizar el acceso.");
        setIsAuthorized(false);
        return;
      }

      setIsAuthorized(true);
      setAuthFeedback("");
    } catch {
      setAuthFeedback("No fue posible conectar con el servicio de autorizacion.");
      setIsAuthorized(false);
    }
  };

  const logout = async () => {
    try {
      await fetch("/admin/blog/auth", {
        method: "DELETE",
        credentials: "include",
      });
    } finally {
      setIsAuthorized(false);
      setAuthFeedback("");
    }
  };

  return (
    <div className="mx-auto max-w-6xl px-6 pt-20 pb-24 md:pt-28">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-3xl font-bold md:text-4xl">Admin del blog</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Crea el borrador de un articulo y genera el bloque listo para pegar en
            src/data/blog-posts.ts.
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Administrador autorizado: {BLOG_ADMIN_EMAIL}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {isAuthorized && (
            <button
              type="button"
              onClick={logout}
              className="rounded-lg border border-border px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
            >
              Cerrar sesion
            </button>
          )}
          <Link
            to="/admin"
            className="rounded-lg border border-border px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
          >
            Volver a admin
          </Link>
        </div>
      </div>

      {isCheckingSession && (
        <section className="mt-8 glass max-w-xl rounded-xl p-6 shadow-[var(--shadow-card)]">
          <p className="text-sm text-muted-foreground">Verificando sesion administrativa...</p>
        </section>
      )}

      {!isCheckingSession && !isAuthorized && (
        <section className="mt-8 glass max-w-xl rounded-xl p-6 shadow-[var(--shadow-card)]">
          <h2 className="text-xl font-semibold">Validar acceso al panel</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Introduce el correo administrador para iniciar sesion y habilitar la creacion de nuevas publicaciones.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="correo@dominio.com"
              className="min-w-[240px] flex-1 rounded-md border border-border bg-background px-3 py-2 text-sm"
            />
            <button
              type="button"
              onClick={authorize}
              className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90"
            >
              Ingresar
            </button>
          </div>
          {authFeedback && (
            <p className="mt-2 text-sm text-destructive">
              {authFeedback}
            </p>
          )}
        </section>
      )}

      {!isCheckingSession && isAuthorized && (
        <p className="mt-8 inline-flex rounded-full border border-border bg-surface/50 px-3 py-1 text-xs text-muted-foreground">
          Acceso habilitado para crear publicaciones nuevas
        </p>
      )}

      {!isCheckingSession && isAuthorized && (
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <section className="glass rounded-xl p-6 shadow-[var(--shadow-card)]">
          <h2 className="text-xl font-semibold">Nuevo articulo</h2>
          <div className="mt-4 grid gap-4">
            <Field label="Titulo" value={draft.title} onChange={(v) => onChange("title", v)} />
            <Field label="Resumen" value={draft.summary} onChange={(v) => onChange("summary", v)} />
            <Field label="Categoria" value={draft.category} onChange={(v) => onChange("category", v)} />
            <Field label="Fecha (YYYY-MM-DD)" value={draft.publishedAt} onChange={(v) => onChange("publishedAt", v)} />
            <Field label="Minutos de lectura" value={draft.readingMinutes} onChange={(v) => onChange("readingMinutes", v)} />
            <Field label="Ruta imagen" value={draft.coverImage} onChange={(v) => onChange("coverImage", v)} />
            <Field label="Alt de imagen" value={draft.coverAlt} onChange={(v) => onChange("coverAlt", v)} />
            <Field label="SEO title" value={draft.seoTitle} onChange={(v) => onChange("seoTitle", v)} />
            <Field label="SEO description" value={draft.seoDescription} onChange={(v) => onChange("seoDescription", v)} />
            <Field label="Titulo primera seccion" value={draft.sectionTitle} onChange={(v) => onChange("sectionTitle", v)} />
            <AreaField
              label="Parrafos de la primera seccion (1 por linea)"
              value={draft.sectionParagraphs}
              onChange={(v) => onChange("sectionParagraphs", v)}
            />
            <AreaField
              label="Bullets de la primera seccion (1 por linea)"
              value={draft.sectionBullets}
              onChange={(v) => onChange("sectionBullets", v)}
            />
          </div>

          <div className="mt-5 rounded-lg border border-border bg-background/40 p-3 text-sm">
            <p className="text-muted-foreground">Slug generado:</p>
            <p className="mt-1 font-medium">{generatedSlug}</p>
          </div>

          <button
            type="button"
            onClick={copySnippet}
            className="mt-4 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90"
          >
            Copiar bloque para blog-posts.ts
          </button>
          {copyFeedback === "ok" && (
            <p className="mt-2 text-sm text-primary">Bloque copiado al portapapeles.</p>
          )}
          {copyFeedback === "error" && (
            <p className="mt-2 text-sm text-destructive">No se pudo copiar automaticamente.</p>
          )}
        </section>

        <section className="glass rounded-xl p-6 shadow-[var(--shadow-card)]">
          <h2 className="text-xl font-semibold">Vista previa del bloque generado</h2>
          <pre className="mt-4 max-h-[520px] overflow-auto rounded-lg border border-border bg-background/40 p-4 text-xs leading-relaxed text-muted-foreground">
            {generatedSnippet}
          </pre>
        </section>
      </div>
      )}

      {!isCheckingSession && isAuthorized && (
      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Articulos publicados</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.slug} className="glass rounded-xl p-5 shadow-[var(--shadow-card)]">
              <p className="text-xs text-muted-foreground">{post.category}</p>
              <h3 className="mt-1 text-lg font-semibold leading-snug">{post.title}</h3>
              <p className="mt-2 text-xs text-muted-foreground">
                {formatBlogDate(post.publishedAt)} · {post.readingMinutes} min
              </p>
              <div className="mt-3 flex gap-3">
                <Link
                  to="/blog/$slug"
                  params={{ slug: post.slug }}
                  className="text-sm text-primary hover:underline"
                >
                  Ver articulo
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      )}
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="grid gap-1.5 text-sm">
      <span className="text-muted-foreground">{label}</span>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="rounded-md border border-border bg-background px-3 py-2"
      />
    </label>
  );
}

function AreaField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="grid gap-1.5 text-sm">
      <span className="text-muted-foreground">{label}</span>
      <textarea
        value={value}
        onChange={(event) => onChange(event.target.value)}
        rows={4}
        className="rounded-md border border-border bg-background px-3 py-2"
      />
    </label>
  );
}
