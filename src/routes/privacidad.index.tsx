import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacidad/")({
  head: () => ({
    meta: [
      { title: "Política de privacidad — Vrixora" },
      { name: "description", content: "Política general de privacidad de Vrixora: cómo tratamos la información en nuestro sitio web y en nuestros productos." },
      { property: "og:title", content: "Política de privacidad — Vrixora" },
      { property: "og:description", content: "Cómo Vrixora trata la información en su sitio y productos." },
      { property: "og:url", content: "/privacidad" },
    ],
    links: [{ rel: "canonical", href: "/privacidad" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  const updated = "19 de julio de 2026";
  return (
    <article className="mx-auto max-w-3xl px-6 pt-20 pb-24">
      <p className="text-sm text-muted-foreground">Última actualización: {updated}</p>
      <h1 className="mt-3 text-4xl font-bold md:text-5xl">Política de privacidad — Vrixora</h1>
      <p className="mt-6 text-muted-foreground">
        Vrixora desarrolla soluciones digitales y aplicaciones con inteligencia artificial.
        Esta política describe cómo tratamos la información en <strong>vrixora.com</strong> y
        en los productos que ofrecemos. Cada producto puede contar además con una política
        específica, enlazada al final de esta página.
      </p>

      <Section title="1. Responsable">
        <p>
          Vrixora es responsable del desarrollo y distribución de sus productos y servicios.
          Para consultas escríbenos a{" "}
          <a className="text-primary underline" href="mailto:soporte@vrixora.com">soporte@vrixora.com</a>.
        </p>
      </Section>

      <Section title="2. Información en nuestro sitio web">
        <p>
          El sitio vrixora.com es informativo. No utiliza cookies de rastreo, identificadores
          publicitarios ni herramientas de analítica que te identifiquen personalmente. No
          recopilamos nombre, correo ni ubicación al navegar.
        </p>
      </Section>

      <Section title="3. Información en nuestros productos">
        <p>
          Cada aplicación de Vrixora está diseñada priorizando la privacidad. Cuando un
          producto necesite tratar datos, publicaremos su política específica. Consulta la
          política de TukTuk para conocer el detalle de esa aplicación.
        </p>
      </Section>

      <Section title="4. Compartición con terceros">
        <p>
          Vrixora no vende ni alquila información personal. Solo compartimos datos con
          proveedores estrictamente necesarios para prestar un servicio, bajo obligaciones
          de confidencialidad.
        </p>
      </Section>

      <Section title="5. Seguridad">
        <p>
          Aplicamos prácticas razonables para proteger la información que tratamos. Ningún
          sistema es 100% seguro; mantenemos actualizaciones y buenas prácticas de desarrollo.
        </p>
      </Section>

      <Section title="6. Cambios en esta política">
        <p>
          Publicaremos la versión vigente en esta misma URL con su fecha de actualización.
        </p>
      </Section>

      <Section title="7. Políticas específicas por producto">
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>
            <Link to="/privacidad/tuktuk" className="text-primary underline">
              Política de privacidad de TukTuk
            </Link>
          </li>
        </ul>
      </Section>

      <Section title="8. Contacto">
        <p>
          Para dudas o solicitudes escribe a{" "}
          <a className="text-primary underline" href="mailto:soporte@vrixora.com">soporte@vrixora.com</a>.
        </p>
      </Section>
    </article>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold md:text-2xl">{title}</h2>
      <div className="mt-3 text-muted-foreground leading-relaxed">{children}</div>
    </section>
  );
}
