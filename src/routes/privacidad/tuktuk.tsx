import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacidad/tuktuk")({
  head: () => ({
    meta: [
      { title: "Política de privacidad TukTuk — Vrixora" },
      { name: "description", content: "Política de privacidad de TukTuk. Cómo protegemos tus datos en la aplicación." },
      { property: "og:title", content: "Política de privacidad TukTuk — Vrixora" },
      { property: "og:url", content: "/privacidad/tuktuk" },
    ],
    links: [{ rel: "canonical", href: "/privacidad/tuktuk" }],
  }),
  component: PrivacidadTuktukPage,
});

function PrivacidadTuktukPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 pt-20 pb-24">
      <Link to="/privacidad" className="text-sm text-primary hover:underline">
        ← Volver a políticas
      </Link>

      <h1 className="mt-6 text-4xl font-bold">Política de privacidad — TukTuk</h1>
      <p className="mt-4 text-sm text-muted-foreground">
        Última actualización: {new Date().getFullYear()}
      </p>

      <div className="mt-12 space-y-8 text-base leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold">1. Datos offline</h2>
          <p className="mt-3 text-muted-foreground">
            TukTuk funciona completamente offline. Todos tus datos (ingresos, gastos, kilometraje, combustible,
            mantenimientos) se guardan únicamente en tu dispositivo. No enviamos tu información a servidores externos.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold">2. Respaldos</h2>
          <p className="mt-3 text-muted-foreground">
            Puedes exportar e importar tus datos manualmente en cualquier momento. Cuando exportas, el archivo se
            genera en tu dispositivo bajo tu control total.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold">3. Privacidad</h2>
          <p className="mt-3 text-muted-foreground">
            Tus datos financieros y operacionales permanecen privados. TukTuk no recopila, comparte ni vende
            información sobre tus movimientos, ingresos o gastos a terceros.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold">4. Actualizaciones de la aplicación</h2>
          <p className="mt-3 text-muted-foreground">
            Cuando actualizas TukTuk, tus datos persisten en el dispositivo. Realizamos copias de respaldo
            automáticas locales para evitar pérdida de información durante actualizaciones.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold">5. Permisos del dispositivo</h2>
          <p className="mt-3 text-muted-foreground">
            TukTuk solicita permisos específicos (almacenamiento, ubicación en ciertos contextos) únicamente para
            funcionalidades necesarias. No utilizamos permisos de manera innecesaria.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold">6. Contacto</h2>
          <p className="mt-3 text-muted-foreground">
            Para preguntas sobre privacidad en TukTuk, contáctanos a{" "}
            <a href="mailto:tuktuk@vrixora.com" className="text-primary hover:underline">
              tuktuk@vrixora.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
