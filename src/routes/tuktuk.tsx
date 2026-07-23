import { createFileRoute, Link } from "@tanstack/react-router";
import tuktukIcon from "../assets/tuktuk-icon.png.asset.json";
import tuktukBanner from "../assets/tuktuk-banner.png.asset.json";

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
      {/* Brand banner */}
      <section className="mx-auto max-w-6xl px-4 pt-6 sm:px-6 sm:pt-10">
        <div className="relative overflow-hidden rounded-xl border border-border bg-black sm:rounded-2xl">
          <img
            src={tuktukBanner.url}
            alt="TukTuk — Controla tu vehículo"
            className="w-full object-cover"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-8 pb-12 sm:px-6 sm:pt-12 sm:pb-16 md:pt-16">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
          {/* App icon - shown first on mobile for better balance */}
          <div className="relative order-first mx-auto flex justify-center md:order-last">
            <div className="relative">
              <div className="absolute -inset-6 rounded-full bg-[#00C99B]/20 blur-3xl sm:-inset-10" />
              <img
                src={tuktukIcon.url}
                alt="Icono de la app TukTuk"
                className="relative w-36 rounded-[1.5rem] shadow-[var(--shadow-glow)] sm:w-48 sm:rounded-[2rem] md:w-72"
              />
            </div>
          </div>

          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#00C99B]/10 px-3 py-1 text-xs font-medium text-[#00C99B]">
              Nuestro primer producto · Próximamente en Google Play
            </span>
            <h1 className="mt-4 text-3xl font-bold sm:mt-6 sm:text-4xl md:text-5xl">
              <span style={{ color: "#00C99B" }}>TukTuk</span> — el control total de tu vehículo.
            </h1>
            <p className="mt-3 text-sm text-muted-foreground sm:mt-4">
              Un producto de <Link to="/soluciones" className="text-primary underline">Vrixora</Link>.
            </p>
            <p className="mt-4 text-base text-muted-foreground sm:mt-6 sm:text-lg">
              Aplicación pensada para conductores que necesitan claridad: ingresos, gastos,
              kilometraje, cargas y mantenimientos en un solo lugar. Simple, rápida y offline.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 sm:mt-8 sm:gap-3">
              <span className="rounded-lg bg-[#00C99B]/10 px-3 py-2 text-xs font-medium text-[#00C99B] sm:px-4 sm:text-sm">
                🚀 Próximamente en Google Play
              </span>
              <Link to="/soporte" className="rounded-lg border border-border px-3 py-2 text-xs hover:bg-accent hover:text-accent-foreground sm:px-4 sm:text-sm">
                Preguntas y soporte
              </Link>
              <Link to="/privacidad/tuktuk" className="rounded-lg border border-border px-3 py-2 text-xs hover:bg-accent hover:text-accent-foreground sm:px-4 sm:text-sm">
                Política de privacidad
              </Link>
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
