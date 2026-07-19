import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/tuktuk")({
  head: () => ({
    meta: [
      { title: "TukTuk — Control de tu vehículo | Vrixora" },
      { name: "description", content: "TukTuk: controla ingresos, gastos, kilometraje, cargas de combustible y mantenimientos. Funciona offline, con historial, estadísticas y copias de respaldo." },
      { property: "og:title", content: "TukTuk — Control de tu vehículo" },
      { property: "og:description", content: "Ingresos, gastos, kilometraje y mantenimientos. Offline y con respaldos." },
      { property: "og:url", content: "/tuktuk" },
    ],
    links: [{ rel: "canonical", href: "/tuktuk" }],
  }),
  component: TukTukPage,
});

const features = [
  { t: "Ingresos y gastos", d: "Registra cada movimiento y visualiza tus resultados al instante." },
  { t: "Kilometraje", d: "Lleva el control del recorrido diario y por periodo." },
  { t: "Cargas de combustible", d: "Consumo, precio y rendimiento en cada carga." },
  { t: "Mantenimientos", d: "Recordatorios y bitácora del historial de servicios." },
  { t: "Funciona offline", d: "Registra sin conexión: todo se guarda en tu dispositivo." },
  { t: "Historial y estadísticas", d: "Analiza tu actividad con gráficos claros." },
  { t: "Copias de respaldo", d: "Exporta e importa tus datos cuando quieras." },
  { t: "Privacidad", d: "Tus datos no se comparten con terceros." },
];

function TukTukPage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-16 md:pt-28">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              Nuestro primer producto · Próximamente en Google Play
            </span>
            <h1 className="mt-6 text-4xl font-bold md:text-5xl">
              <span className="text-gradient">TukTuk</span> — el control total de tu vehículo.
            </h1>
            <p className="mt-4 text-sm text-muted-foreground">
              Un producto de <Link to="/soluciones" className="text-primary underline">Vrixora</Link>.
            </p>
            <p className="mt-6 text-lg text-muted-foreground">
              Aplicación pensada para conductores que necesitan claridad: ingresos, gastos,
              kilometraje, cargas y mantenimientos en un solo lugar. Simple, rápida y offline.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-lg bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                🚀 Próximamente en Google Play
              </span>
              <Link to="/soporte" className="rounded-lg border border-border px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground">
                Preguntas y soporte
              </Link>
            </div>
          </div>

          {/* Mock device */}
          <div className="relative mx-auto">
            <div className="glass relative w-64 rounded-[2.5rem] p-3 shadow-[var(--shadow-glow)]">
              <div className="rounded-[2rem] bg-background p-5">
                <div className="mb-4 flex items-center justify-between">
                  <div className="text-xs text-muted-foreground">Hoy</div>
                  <div className="h-6 w-6 rounded-md bg-[image:var(--gradient-brand)]" />
                </div>
                <div className="text-xs text-muted-foreground">Balance</div>
                <div className="text-3xl font-bold text-gradient">$ 1.240</div>
                <div className="mt-4 space-y-2">
                  {[
                    { l: "Ingresos", v: "$ 1.800", c: "text-accent" },
                    { l: "Gastos", v: "$ 560", c: "text-muted-foreground" },
                    { l: "Km hoy", v: "142", c: "text-muted-foreground" },
                  ].map((r) => (
                    <div key={r.l} className="flex items-center justify-between rounded-lg bg-surface/60 px-3 py-2 text-sm">
                      <span className="text-muted-foreground">{r.l}</span>
                      <span className={`font-semibold ${r.c}`}>{r.v}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 h-16 rounded-lg bg-[linear-gradient(180deg,transparent,color-mix(in_oklab,var(--brand)_25%,transparent))]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <h2 className="text-2xl font-bold md:text-3xl">Todo lo que necesitas</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.t} className="glass rounded-xl p-5 shadow-[var(--shadow-card)]">
              <h3 className="font-semibold">{f.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.d}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
