import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacidad")({
  head: () => ({
    meta: [
      { title: "Privacidad — Vrixora" },
      { name: "description", content: "Políticas de privacidad de Vrixora y nuestros productos." },
      { property: "og:title", content: "Privacidad — Vrixora" },
      { property: "og:description", content: "Políticas de privacidad de Vrixora y nuestros productos." },
      { property: "og:url", content: "/privacidad" },
    ],
    links: [{ rel: "canonical", href: "/privacidad" }],
  }),
  component: PrivacidadPage,
});

function PrivacidadPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 pt-20 pb-24">
      <h1 className="text-4xl font-bold md:text-5xl">Políticas de <span className="text-gradient">privacidad</span></h1>
      <p className="mt-4 text-lg text-muted-foreground">
        En Vrixora respetamos tu privacidad. Elige el documento que necesites.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        <Link
          to="/privacidad/vrixora"
          className="glass group rounded-xl p-6 shadow-[var(--shadow-card)] transition-transform hover:-translate-y-0.5"
        >
          <h2 className="text-xl font-semibold">Privacidad Vrixora</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Política de privacidad general de Vrixora y nuestros servicios.
          </p>
          <span className="mt-4 inline-block text-sm font-medium text-primary group-hover:underline">
            Leer política →
          </span>
        </Link>

        <Link
          to="/privacidad/tuktuk"
          className="glass group rounded-xl p-6 shadow-[var(--shadow-card)] transition-transform hover:-translate-y-0.5"
        >
          <h2 className="text-xl font-semibold">Privacidad TukTuk</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Política de privacidad específica para la aplicación TukTuk.
          </p>
          <span className="mt-4 inline-block text-sm font-medium text-primary group-hover:underline">
            Leer política →
          </span>
        </Link>
      </div>
    </div>
  );
}
