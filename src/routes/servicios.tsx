import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios — Vrixora" },
      { name: "description", content: "Servicios de Vrixora: desarrollo de aplicaciones, automatización, soluciones para MIPYMES y consultoría e integración de inteligencia artificial." },
      { property: "og:title", content: "Servicios — Vrixora" },
      { property: "og:description", content: "Desarrollo, automatización, soluciones para MIPYMES e integración de IA." },
      { property: "og:url", content: "/servicios" },
    ],
    links: [{ rel: "canonical", href: "/servicios" }],
  }),
  component: ServiciosPage,
});

const services = [
  {
    t: "Desarrollo de aplicaciones",
    d: "Aplicaciones web y móviles a medida, con foco en usabilidad, rendimiento y mantenimiento a largo plazo.",
  },
  {
    t: "Automatización",
    d: "Automatizamos procesos operativos, integraciones entre sistemas y flujos repetitivos para ganar tiempo.",
  },
  {
    t: "Soluciones para MIPYMES",
    d: "Herramientas accesibles pensadas para micro, pequeñas y medianas empresas: rápidas de adoptar y fáciles de usar.",
  },
  {
    t: "Consultoría e integración de IA",
    d: "Detectamos oportunidades de IA en tu negocio e integramos modelos modernos donde realmente aportan valor.",
  },
];

function ServiciosPage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-10 md:pt-28">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-3 py-1 text-xs text-muted-foreground">
            Servicios profesionales
          </span>
          <h1 className="mt-6 text-4xl font-bold md:text-5xl">
            Construimos <span className="text-gradient">software e IA</span> para tu operación.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Acompañamos a empresas y equipos en el diseño, desarrollo e integración de
            soluciones digitales, con especial foco en inteligencia artificial aplicada.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-4 sm:grid-cols-2">
          {services.map((s) => (
            <div key={s.t} className="glass rounded-xl p-6 shadow-[var(--shadow-card)]">
              <div className="mb-3 h-9 w-9 rounded-md bg-[image:var(--gradient-brand)]" />
              <h3 className="text-lg font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-border p-6">
          <div>
            <h3 className="text-lg font-semibold">¿Tienes un proyecto en mente?</h3>
            <p className="mt-1 text-sm text-muted-foreground">Escríbenos y conversemos cómo podemos ayudarte.</p>
          </div>
          <Link
            to="/soporte"
            className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90"
          >
            Contactar a Vrixora →
          </Link>
        </div>
      </section>
    </div>
  );
}
