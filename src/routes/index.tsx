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
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-3 py-1 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Desarrollo con inteligencia artificial
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
            Construimos <span className="text-gradient">soluciones digitales</span> con IA.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground md:text-xl">
            Vrixora diseña y desarrolla aplicaciones inteligentes, simples y confiables.
            Nuestro primer producto es TukTuk: control total de tu vehículo, sin complicaciones.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              to="/tuktuk"
              className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5"
            >
              Conocer TukTuk →
            </Link>
            <Link
              to="/soporte"
              className="rounded-lg border border-border px-6 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
            >
              Contactar soporte
            </Link>
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { t: "Diseño enfocado", d: "Interfaces limpias, rápidas y adaptadas a móvil y computadora." },
            { t: "IA aplicada", d: "Automatizamos tareas y potenciamos decisiones con modelos modernos." },
            { t: "Privacidad primero", d: "Sin rastreo innecesario. Tus datos, bajo tu control." },
          ].map((f) => (
            <div key={f.t} className="glass rounded-xl p-6 shadow-[var(--shadow-card)]">
              <div className="mb-3 h-8 w-8 rounded-md bg-[image:var(--gradient-brand)]" />
              <h3 className="text-lg font-semibold">{f.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.d}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

