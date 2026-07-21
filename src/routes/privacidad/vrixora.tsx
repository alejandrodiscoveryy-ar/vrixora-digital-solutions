import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacidad/vrixora")({
  head: () => ({
    meta: [
      { title: "Política de privacidad — Vrixora" },
      { name: "description", content: "Política de privacidad de Vrixora. Cómo protegemos y tratamos tus datos." },
      { property: "og:title", content: "Política de privacidad — Vrixora" },
      { property: "og:url", content: "/privacidad/vrixora" },
    ],
    links: [{ rel: "canonical", href: "/privacidad/vrixora" }],
  }),
  component: PrivacidadVrixoraPage,
});

function PrivacidadVrixoraPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 pt-20 pb-24">
      <Link to="/privacidad" className="text-sm text-primary hover:underline">
        ← Volver a políticas
      </Link>

      <h1 className="mt-6 text-4xl font-bold">Política de privacidad — Vrixora</h1>
      <p className="mt-4 text-sm text-muted-foreground">
        Última actualización: {new Date().getFullYear()}
      </p>

      <div className="mt-12 space-y-8 text-base leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold">1. Información que recopilamos</h2>
          <p className="mt-3 text-muted-foreground">
            Recopilamos información que nos proporcionas directamente, como tu nombre, correo electrónico y mensajes
            de contacto. También recopilamos información sobre cómo utilizas nuestros servicios.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold">2. Cómo utilizamos tu información</h2>
          <p className="mt-3 text-muted-foreground">
            Utilizamos la información para proporcionar, mantener y mejorar nuestros servicios, responder a tus
            consultas y comunicarnos contigo sobre actualizaciones.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold">3. Protección de datos</h2>
          <p className="mt-3 text-muted-foreground">
            Implementamos medidas de seguridad técnicas y organizacionales para proteger tu información personal
            contra acceso no autorizado.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold">4. Tus derechos</h2>
          <p className="mt-3 text-muted-foreground">
            Tienes derecho a acceder, corregir o solicitar la eliminación de tus datos personales en cualquier
            momento. Contáctanos para ejercer estos derechos.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold">5. Contacto</h2>
          <p className="mt-3 text-muted-foreground">
            Si tienes preguntas sobre esta política, puedes contactarnos a través de nuestro{" "}
            <Link to="/soporte" className="text-primary hover:underline">
              formulario de soporte
            </Link>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
