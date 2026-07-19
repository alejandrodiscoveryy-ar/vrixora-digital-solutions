import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Área administrativa — Vrixora" },
      { name: "description", content: "Acceso administrativo de Vrixora — próximamente." },
      { name: "robots", content: "noindex" },
      { property: "og:url", content: "/admin" },
    ],
    links: [{ rel: "canonical", href: "/admin" }],
  }),
  component: AdminPage,
});

function AdminPage() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-6 pt-24 pb-24 text-center">
      <div className="glass rounded-2xl p-10 shadow-[var(--shadow-card)]">
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[image:var(--gradient-brand)] text-primary-foreground">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 1 1 8 0v4"/></svg>
        </div>
        <span className="inline-flex rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
          Próximamente
        </span>
        <h1 className="mt-4 text-3xl font-bold">Área administrativa</h1>
        <p className="mt-3 text-muted-foreground">
          Este espacio estará reservado para la gestión interna de Vrixora. En breve habilitaremos
          el acceso.
        </p>
        <div className="mt-8">
          <Link to="/" className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90">
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
