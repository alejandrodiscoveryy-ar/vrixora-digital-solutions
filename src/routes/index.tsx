import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Wallet,
  TrendingDown,
  Gauge,
  BatteryCharging,
  Wrench,
  BarChart3,
  BadgeCheck,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Vrixora Solutions | TukTuk Control" },
      {
        name: "description",
        content:
          "Vrixora Solutions desarrolla aplicaciones inteligentes para negocios. TukTuk Control ayuda a propietarios y conductores de triciclos eléctricos a gestionar ingresos, gastos, kilometraje, batería, mantenimientos, licencias y estadísticas.",
      },
      { property: "og:title", content: "Vrixora Solutions | TukTuk Control" },
      {
        property: "og:description",
        content:
          "TukTuk Control es la aplicación de Vrixora Solutions para gestionar triciclos eléctricos, ingresos, gastos, kilometraje, batería y mantenimiento.",
      },
    ],
  }),
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

const tuktukFeatures = [
  { icon: Wallet, label: "Registro de ingresos" },
  { icon: TrendingDown, label: "Control de gastos" },
  { icon: Gauge, label: "Seguimiento de kilometraje" },
  { icon: BatteryCharging, label: "Control del voltaje de la batería" },
  { icon: Wrench, label: "Gestión de mantenimientos" },
  { icon: BarChart3, label: "Consulta de estadísticas" },
  { icon: BadgeCheck, label: "Gestión de licencias" },
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
          <p className="mt-4 text-sm text-white/70 md:text-base">
            Conoce TukTuk Control, la solución de Vrixora Solutions para gestionar ingresos, gastos,
            batería, kilometraje y mantenimiento de triciclos eléctricos.
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

      {/* TukTuk Control — sección destacada */}
      <section className="mx-auto max-w-6xl px-6 pb-24" id="tuktuk-control">
        <div className="glass diagonal-cut relative overflow-hidden rounded-xl p-8 shadow-[var(--shadow-card)] md:p-12">
          <div
            aria-hidden
            className="absolute top-0 left-0 h-1 w-24"
            style={{ background: "var(--gradient-brand)" }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-16 -right-16 h-56 w-56 opacity-20 blur-2xl"
            style={{
              background: "var(--gradient-brand)",
              clipPath: "polygon(0 0, 100% 0, 100% 100%)",
            }}
          />
          <div className="relative max-w-3xl">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
              <span className="h-px w-8 bg-primary" />
              Nuestro producto
            </span>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">TukTuk Control</h2>
            <p className="mt-2 text-lg font-medium text-white/90 md:text-xl">
              La aplicación para gestionar triciclos eléctricos de forma inteligente.
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/85 md:text-lg">
              TukTuk Control es una aplicación desarrollada por Vrixora Solutions para ayudar a
              propietarios y conductores de triciclos eléctricos a gestionar sus ingresos, gastos,
              kilometraje, voltaje de batería, mantenimientos, licencias y estadísticas desde un
              solo lugar.
            </p>

            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {tuktukFeatures.map((f) => {
                const Icon = f.icon;
                return (
                  <li
                    key={f.label}
                    className="flex items-center gap-3 rounded-lg border border-border/60 bg-background/40 px-3 py-2.5"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <Icon size={18} />
                    </span>
                    <span className="text-sm font-medium text-white/90">{f.label}</span>
                  </li>
                );
              })}
            </ul>

            <div className="mt-8">
              <Link
                to="/tuktuk"
                className="diagonal-cut inline-flex items-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5"
              >
                Conocer TukTuk Control →
              </Link>
            </div>
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
