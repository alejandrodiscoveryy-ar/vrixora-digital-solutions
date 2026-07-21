import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

const aboutCards = [
  {
    t: "Misión",
    d: "Desarrollar aplicaciones y soluciones digitales con inteligencia artificial que ayuden a los negocios a organizar sus procesos, reducir tareas manuales y avanzar en su transformación digital.",
  },
  {
    t: "Visión",
    d: "Convertir a VRIXORA Solutions en una empresa cubana de referencia en el desarrollo de aplicaciones y soluciones con inteligencia artificial para mipymes.",
  },
  {
    t: "Objetivo",
    d: "Crear aplicaciones, automatizaciones y herramientas digitales funcionales, escalables y fáciles de utilizar, adaptadas a las necesidades reales de cada negocio.",
  },
];

function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="relative mx-auto max-w-6xl px-6 pt-20 pb-24 md:pt-28 md:pb-32">
        {/* Diagonal decorative shapes inspired by the isotype */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-10 -right-10 h-64 w-64 opacity-30 blur-2xl"
          style={{
            background: "var(--gradient-brand)",
            clipPath: "polygon(0 0, 100% 0, 100% 100%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 -left-16 h-56 w-56 opacity-20 blur-2xl"
          style={{
            background: "var(--gradient-brand)",
            clipPath: "polygon(0 0, 100% 100%, 0 100%)",
          }}
        />

        <div className="relative mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Aplicaciones <span className="text-gradient">inteligentes</span> para negocios inteligentes.
          </h1>
          <p className="mt-6 text-lg text-white/80 md:text-xl">
            Creamos aplicaciones, automatizaciones y soluciones con inteligencia artificial adaptadas
            a las necesidades reales de cada negocio.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              to="/soporte"
              className="diagonal-cut rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5"
            >
              Cuéntanos tu idea →
            </Link>
            <Link
              to="/soluciones"
              className="diagonal-cut-tl rounded-md border border-primary/60 px-6 py-3 text-sm font-medium text-primary hover:bg-primary/10"
            >
              Conoce nuestras soluciones
            </Link>
          </div>
        </div>
      </section>

      {/* Sobre VRIXORA */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
              <span className="h-px w-8 bg-primary" />
              Sobre VRIXORA
            </span>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Quiénes somos</h2>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {aboutCards.map((c) => (
            <article
              key={c.t}
              className="glass diagonal-cut relative rounded-lg p-6 shadow-[var(--shadow-card)]"
            >
              <div
                aria-hidden
                className="absolute top-0 left-0 h-1 w-16"
                style={{ background: "var(--gradient-brand)" }}
              />
              <h3 className="text-sm font-bold uppercase tracking-widest text-primary">
                {c.t}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/85">{c.d}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
