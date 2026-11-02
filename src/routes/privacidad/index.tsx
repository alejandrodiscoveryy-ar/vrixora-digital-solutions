import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacidad/")({
  head: () => ({
    meta: [
      { title: "Privacidad — Vrixora" },
      { name: "description", content: "Políticas de privacidad de Vrixora, TUKTUK Control, Conductor y Cliente." },
      { property: "og:title", content: "Privacidad — Vrixora" },
      { property: "og:description", content: "Políticas de privacidad de Vrixora y nuestros productos." },
      { property: "og:url", content: "/privacidad" },
    ],
    links: [{ rel: "canonical", href: "/privacidad" }],
  }),
  component: PrivacidadPage,
});

const policies = [
  { to: "/privacidad/vrixora" as const, title: "Privacidad de Vrixora", description: "Información general sobre los servicios corporativos de Vrixora Solutions." },
  { to: "/privacidad/tuktuk" as const, title: "TUKTUK Control y Conductor", description: "Cuentas, vehículos, datos operativos, GPS y carreras." },
  { to: "/privacidad/tuktuk-cliente" as const, title: "TUKTUK Cliente", description: "Datos de contacto, recogida, destino y solicitudes de transporte." },
];

function PrivacidadPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 pt-20 pb-24">
      <h1 className="text-4xl font-bold md:text-5xl">Políticas de <span className="text-gradient">privacidad</span></h1>
      <p className="mt-4 text-lg text-muted-foreground">Consulta el tratamiento de datos correspondiente a cada servicio de Vrixora.</p>
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {policies.map((policy) => (
          <Link key={policy.to} to={policy.to} className="glass group rounded-xl p-6 shadow-[var(--shadow-card)] transition-transform hover:-translate-y-0.5">
            <h2 className="text-xl font-semibold">{policy.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{policy.description}</p>
            <span className="mt-4 inline-block text-sm font-medium text-primary group-hover:underline">Leer política →</span>
          </Link>
        ))}
      </div>
      <div className="mt-10 rounded-xl border border-border p-6">
        <h2 className="text-xl font-semibold">¿Quieres eliminar tu cuenta o tus datos?</h2>
        <p className="mt-2 text-muted-foreground">Ofrecemos un canal para solicitarlo sin necesidad de reinstalar la aplicación.</p>
        <Link to="/privacidad/eliminacion-datos" className="mt-3 inline-block text-primary hover:underline">Solicitar eliminación de datos →</Link>
      </div>
    </main>
  );
}
