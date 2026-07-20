import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            <span className="text-gradient">Vrixora</span> — soluciones digitales e inteligencia artificial.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground md:text-xl">
            Diseñamos y desarrollamos aplicaciones y soluciones con inteligencia artificial de
            forma rápida y confiable. Ayudamos a empresas y equipos a operar mejor con
            tecnología moderna.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              to="/soluciones"
              className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5"
            >
              Conocer nuestras soluciones →
            </Link>
            <Link
              to="/servicios"
              className="rounded-lg border border-border px-6 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
            >
              Ver servicios
            </Link>
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { t: "Desarrollo rápido", d: "Prototipos y productos funcionales en tiempos cortos, sin sacrificar calidad." },
            { t: "IA aplicada", d: "Integramos modelos modernos donde realmente aportan valor al negocio." },
            { t: "Enfoque en operaciones", d: "Herramientas pensadas para equipos, MIPYMES y flujos de trabajo reales." },
          ].map((f) => (
            <div key={f.t} className="glass rounded-xl p-6 shadow-[var(--shadow-card)]">
              <div className="mb-3 h-8 w-8 rounded-md bg-[image:var(--gradient-brand)]" />
              <h3 className="text-lg font-semibold">{f.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured product */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="glass rounded-2xl p-8 shadow-[var(--shadow-card)] md:p-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-xl">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                Nuestro primer producto
              </span>
              <h2 className="mt-4 text-2xl font-bold md:text-3xl">
                <span className="text-gradient">TukTuk</span> — control total de tu vehículo.
              </h2>
              <p className="mt-3 text-muted-foreground">
                Ingresos, gastos, kilometraje, combustible y mantenimientos. Simple, rápido y
                offline. Próximamente en Google Play.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/tuktuk"
                className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90"
              >
                Ver TukTuk →
              </Link>
              <Link
                to="/soluciones"
                className="rounded-lg border border-border px-5 py-2.5 text-sm hover:bg-accent hover:text-accent-foreground"
              >
                Todas las soluciones
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
