import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/soluciones")({
  head: () => ({
    meta: [
      { title: "Soluciones — Vrixora" },
      { name: "description", content: "Productos y soluciones de Vrixora: TukTuk Control para triciclos eléctricos, plataforma para gimnasios y gestión para salones de belleza." },
      { property: "og:title", content: "Soluciones — Vrixora" },
      { property: "og:description", content: "Explora los productos que estamos construyendo en Vrixora." },
      { property: "og:url", content: "/soluciones" },
    ],
    links: [{ rel: "canonical", href: "/soluciones" }],
  }),
  component: SolucionesPage,
});

type Solution = {
  name: string;
  tagline: string;
  description: string;
  status: "Disponible" | "Próximamente";
  to?: "/tuktuk";
};

const solutions: Solution[] = [
  {
    name: "TukTuk Control",
    tagline: "Nuestro primer producto",
    description: "Control de ingresos, gastos, kilometraje, voltaje de batería y mantenimientos para triciclos eléctricos. Funciona sin conexión.",
    status: "Disponible",
    to: "/tuktuk",
  },
  {
    name: "Plataforma para gimnasios",
    tagline: "Próxima solución",
    description: "Gestión de miembros, planes, asistencia y cobros para gimnasios y centros de entrenamiento.",
    status: "Próximamente",
  },
  {
    name: "Gestión para salones de belleza",
    tagline: "Próxima solución",
    description: "Turnos, clientes, servicios y caja para salones, barberías y estéticas.",
    status: "Próximamente",
  },
];

function SolucionesPage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-10 md:pt-28">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-3 py-1 text-xs text-muted-foreground">
            Productos Vrixora
          </span>
          <h1 className="mt-6 text-4xl font-bold md:text-5xl">
            Soluciones <span className="text-gradient">para negocios y operaciones</span>.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Construimos aplicaciones enfocadas en resolver problemas concretos con
            interfaces claras y tecnología moderna. Estas son las soluciones que estamos
            desarrollando.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s) => (
            <SolutionCard key={s.name} solution={s} />
          ))}

          {/* Placeholder for future products */}
          <div className="glass flex min-h-[220px] flex-col items-start justify-center rounded-xl border border-dashed border-border p-6 text-left">
            <span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
              En desarrollo
            </span>
            <h3 className="mt-3 text-lg font-semibold">Más soluciones pronto</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Estamos preparando nuevas herramientas para distintos sectores. Este espacio
              está listo para sumarlas.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function SolutionCard({ solution }: { solution: Solution }) {
  const badgeClass =
    solution.status === "Disponible"
      ? "bg-primary/10 text-primary"
      : "border border-border text-muted-foreground";

  return (
    <div className="glass flex flex-col rounded-xl p-6 shadow-[var(--shadow-card)]">
      <div className="flex items-center justify-between">
        <div className="h-9 w-9 rounded-md bg-[image:var(--gradient-brand)]" />
        <span className={`rounded-full px-3 py-1 text-xs ${badgeClass}`}>
          {solution.status}
        </span>
      </div>
      <p className="mt-4 text-xs uppercase tracking-wide text-muted-foreground">
        {solution.tagline}
      </p>
      <h3 className="mt-1 text-xl font-semibold">{solution.name}</h3>
      <p className="mt-2 flex-1 text-sm text-muted-foreground">{solution.description}</p>
      <div className="mt-5">
        {solution.to ? (
          <Link
            to={solution.to}
            className="inline-flex items-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90"
          >
            Ver producto →
          </Link>
        ) : (
          <span className="inline-flex items-center rounded-lg border border-border px-4 py-2 text-sm text-muted-foreground">
            Próximamente
          </span>
        )}
      </div>
    </div>
  );
}
