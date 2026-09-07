import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import tuktukIcon from "../assets/tuktuk-icon.png";
import {
  clearPwaInstallPrompt,
  getPwaInstallPrompt,
} from "../lib/pwa-install";

export const Route = createFileRoute("/tuktuk")({
  head: () => ({
    meta: [
      { title: "TukTuk Control | Gestión de triciclos eléctricos" },
      {
        name: "description",
        content:
          "TukTuk Control es la aplicación de Vrixora Solutions para gestionar ingresos, gastos, kilometraje, voltaje de batería, mantenimientos, licencias y estadísticas de triciclos eléctricos.",
      },
      { property: "og:title", content: "TukTuk Control | Vrixora Solutions" },
      {
        property: "og:description",
        content:
          "Aplicación para gestionar ingresos, gastos, kilometraje, batería, mantenimientos, licencias y estadísticas de triciclos eléctricos.",
      },
      { property: "og:type", content: "product" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://www.vrixora.com/tuktuk" },
      { name: "theme-color", content: "#00C99B" },
    ],
    links: [
      { rel: "canonical", href: "https://www.vrixora.com/tuktuk" },
      { rel: "manifest", href: "/tuktuk/manifest.webmanifest" },
    ],
  }),
  component: TukTukPage,
});

const features = [
  {
    t: "Registro de ingresos",
    d: "Registra cada ingreso de la jornada y visualiza tus resultados al instante.",
  },
  {
    t: "Control de gastos",
    d: "Lleva el detalle de todos los gastos asociados al triciclo eléctrico.",
  },
  {
    t: "Seguimiento del kilometraje",
    d: "Controla el recorrido diario y por periodo.",
  },
  {
    t: "Registro del voltaje de la batería",
    d: "Permite registrar el voltaje de la batería y consultar su comportamiento durante las jornadas de trabajo.",
  },
  {
    t: "Gestión de mantenimientos",
    d: "Recordatorios y bitácora del historial de servicios.",
  },
  {
    t: "Historial y estadísticas",
    d: "Analiza tu actividad con gráficos claros.",
  },
  {
    t: "Funcionamiento sin conexión",
    d: "Registra sin Internet: los datos se guardan inicialmente en tu dispositivo y se sincronizan cuando recuperas la conexión.",
  },
  {
    t: "Sincronización y copias de seguridad",
    d: "Sincroniza al recuperar conexión y exporta o importa tus datos cuando quieras.",
  },
  {
    t: "Gestión de licencias",
    d: "Controla las licencias y su vigencia desde la propia aplicación.",
  },
];

function TukTukPage() {
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const standalone =
      window.matchMedia("(display-mode: standalone)").matches;

    setIsInstalled(standalone);

    const handleAppInstalled = () => {
      setIsInstalled(true);
    };

    window.addEventListener("appinstalled", handleAppInstalled);

    return () => {
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);

  const handleInstall = async () => {
    const installPrompt = getPwaInstallPrompt();

    if (!installPrompt) {
      window.location.assign("/tuktuk/app/");
      return;
    }

    await installPrompt.prompt();
    await installPrompt.userChoice;

    clearPwaInstallPrompt();
  };

  return (
    <div>
      <section className="mx-auto max-w-6xl px-4 pt-8 pb-12 sm:px-6 sm:pt-12 sm:pb-16 md:pt-16">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
          <div className="relative order-first mx-auto flex justify-center md:order-last">
            <div className="relative">
              <div className="absolute -inset-6 rounded-full bg-[#00C99B]/20 blur-3xl sm:-inset-10" />
              <img
                src={tuktukIcon}
                alt="Icono de la aplicación TukTuk Control"
                className="relative w-36 rounded-[1.5rem] shadow-[var(--shadow-glow)] sm:w-48 sm:rounded-[2rem] md:w-72"
              />
            </div>
          </div>

          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#00C99B]/10 px-3 py-1 text-xs font-medium text-[#00C99B]">
              TukTuk Control · Producto de Vrixora Solutions
            </span>

            <h1 className="mt-4 text-3xl font-bold sm:mt-6 sm:text-4xl md:text-5xl">
              <span style={{ color: "#00C99B" }}>TukTuk Control</span>
            </h1>

            <p className="mt-3 text-lg font-medium sm:mt-4 sm:text-xl">
              Control inteligente para triciclos eléctricos.
            </p>

            <p className="mt-3 text-sm text-muted-foreground sm:mt-4">
              Un producto de{" "}
              <Link to="/soluciones" className="text-primary underline">
                Vrixora Solutions
              </Link>
              .
            </p>

            <p className="mt-4 text-base text-muted-foreground sm:mt-6 sm:text-lg">
              TukTuk Control es una aplicación desarrollada por Vrixora Solutions
              para ayudar a propietarios y conductores de triciclos eléctricos a
              registrar y gestionar ingresos, gastos, kilometraje, voltaje de
              batería, mantenimientos, licencias y estadísticas desde un solo
              lugar. También permite trabajar sin conexión y sincronizar la
              información cuando vuelve a estar disponible Internet.
            </p>

            <div className="mt-6 flex flex-wrap gap-2 sm:mt-8 sm:gap-3">
              <a
                href="https://www.vrixora.com/tuktuk/app/"
                className="rounded-lg bg-[#00C99B] px-3 py-2 text-xs font-semibold text-black hover:opacity-90 sm:px-4 sm:text-sm"
              >
                Usar WebApp
              </a>

              <a
                href="https://play.google.com/store/apps/details?id=com.alejandrocruz.tuktukcontrol"
                className="rounded-lg bg-[#00C99B]/10 px-3 py-2 text-xs font-medium text-[#00C99B] hover:bg-[#00C99B]/20 sm:px-4 sm:text-sm"
              >
                Descargar en Google Play
              </a>

              {!isInstalled && (
                <button
                  type="button"
                  onClick={handleInstall}
                  className="rounded-lg border border-border px-3 py-2 text-xs hover:bg-accent hover:text-accent-foreground sm:px-4 sm:text-sm"
                >
                  Instalar WebApp
                </button>
              )}

              <Link
                to="/soporte"
                className="rounded-lg border border-border px-3 py-2 text-xs hover:bg-accent hover:text-accent-foreground sm:px-4 sm:text-sm"
              >
                Preguntas y soporte
              </Link>

              <Link
                to="/privacidad/tuktuk"
                className="rounded-lg border border-border px-3 py-2 text-xs hover:bg-accent hover:text-accent-foreground sm:px-4 sm:text-sm"
              >
                Política de privacidad de TukTuk Control
              </Link>

              <Link
                to="/terminos"
                className="rounded-lg border border-border px-3 py-2 text-xs hover:bg-accent hover:text-accent-foreground sm:px-4 sm:text-sm"
              >
                Términos y condiciones
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-20">
        <h2 className="text-2xl font-bold md:text-3xl">
          Funciones de TukTuk Control
        </h2>

        <div className="mt-6 grid gap-3 sm:mt-8 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.t}
              className="glass rounded-xl p-4 shadow-[var(--shadow-card)] sm:p-5"
            >
              <h3 className="font-semibold">{f.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.d}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
