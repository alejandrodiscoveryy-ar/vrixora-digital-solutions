import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacidad/eliminacion-datos")({
  head: () => ({
    meta: [
      { title: "Solicitar eliminación de cuenta y datos de TUKTUK — Vrixora" },
      { name: "description", content: "Cómo solicitar la eliminación de tu cuenta, perfil y datos de TUKTUK Cliente, Conductor o Control." },
      { property: "og:url", content: "/privacidad/eliminacion-datos" },
    ],
    links: [{ rel: "canonical", href: "/privacidad/eliminacion-datos" }],
  }),
  component: DeletionPage,
});

function DeletionPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 pt-20 pb-24">
      <Link to="/privacidad" className="text-sm text-primary hover:underline">← Volver a políticas</Link>
      <h1 className="mt-6 text-4xl font-bold">Eliminar cuenta y datos de TUKTUK</h1>
      <p className="mt-5 text-muted-foreground">Vrixora Solutions ofrece una vía de contacto para solicitar la eliminación de cuentas o datos asociados a TUKTUK Cliente, TUKTUK Conductor y TUKTUK Control, incluso si ya no tienes la aplicación instalada.</p>
      <div className="mt-10 space-y-8 text-base leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold">Cómo presentar la solicitud</h2>
          <ol className="mt-3 list-decimal space-y-2 pl-6 text-muted-foreground">
            <li>Escribe al correo indicado abajo y especifica si utilizas TUKTUK Cliente, Conductor o Control.</li>
            <li>Indica el número de teléfono o el correo asociado a tu perfil. No envíes contraseñas, códigos de acceso ni documentos de identidad por iniciativa propia.</li>
            <li>Indica si deseas eliminar la cuenta y sus datos asociados o solo determinados datos.</li>
            <li>El equipo de soporte podrá pedir una comprobación razonable para evitar solicitudes fraudulentas y te informará del resultado.</li>
          </ol>
          <a
            className="mt-5 inline-block rounded-lg bg-primary px-5 py-3 font-semibold text-primary-foreground hover:opacity-90"
            href="mailto:vrixoraa@gmail.com?subject=Solicitud%20de%20eliminaci%C3%B3n%20de%20cuenta%20TUKTUK&body=Aplicaci%C3%B3n%3A%20%0AContacto%20asociado%3A%20%0ASolicito%20la%20eliminaci%C3%B3n%20de%3A%20"
          >
            Solicitar eliminación por correo
          </a>
          <p className="mt-3 text-sm text-muted-foreground">Correo: <a href="mailto:vrixoraa@gmail.com" className="text-primary hover:underline">vrixoraa@gmail.com</a></p>
        </section>
        <section>
          <h2 className="text-2xl font-bold">Qué ocurre con tus datos</h2>
          <p className="mt-3 text-muted-foreground">Tras verificar la solicitud, se revisarán los perfiles y registros relacionados con la cuenta para eliminarlos o desvincularlos cuando corresponda. Algunos datos podrían conservarse si son necesarios por obligaciones legales, protección de terceros, prevención de fraude o reclamaciones pendientes; de ser así, se te informará de ello.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold">Políticas aplicables</h2>
          <p className="mt-3"><Link to="/privacidad/tuktuk-cliente" className="text-primary hover:underline">Privacidad de TUKTUK Cliente</Link></p>
          <p className="mt-3"><Link to="/privacidad/tuktuk" className="text-primary hover:underline">Privacidad de TUKTUK Control y Conductor</Link></p>
        </section>
      </div>
    </main>
  );
}
