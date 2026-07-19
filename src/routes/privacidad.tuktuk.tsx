import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacidad/tuktuk")({
  head: () => ({
    meta: [
      { title: "Política de privacidad — TukTuk | Vrixora" },
      { name: "description", content: "Política de privacidad de la aplicación TukTuk desarrollada por Vrixora." },
      { property: "og:title", content: "Política de privacidad — TukTuk" },
      { property: "og:description", content: "Cómo TukTuk trata la información en tu dispositivo." },
      { property: "og:url", content: "/privacidad/tuktuk" },
    ],
    links: [{ rel: "canonical", href: "/privacidad/tuktuk" }],
  }),
  component: PrivacyTukTukPage,
});

function PrivacyTukTukPage() {
  const updated = "19 de julio de 2026";
  return (
    <article className="mx-auto max-w-3xl px-6 pt-20 pb-24">
      <p className="text-sm text-muted-foreground">Última actualización: {updated}</p>
      <h1 className="mt-3 text-4xl font-bold md:text-5xl">Política de privacidad — TukTuk</h1>
      <p className="mt-6 text-muted-foreground">
        Esta política describe cómo la aplicación <strong>TukTuk</strong>, desarrollada por
        <strong> Vrixora</strong>, trata la información cuando la utilizas. Al instalar o usar
        TukTuk, aceptas los términos aquí descritos.
      </p>

      <Section title="1. Responsable">
        <p>
          Vrixora es responsable del desarrollo y distribución de TukTuk. Para consultas
          relacionadas con esta política, escríbenos a{" "}
          <a className="text-primary underline" href="mailto:soporte@vrixora.com">soporte@vrixora.com</a>.
        </p>
      </Section>

      <Section title="2. Información que recopilamos">
        <p>TukTuk está diseñada para funcionar de forma local en tu dispositivo. En particular:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>
            <strong>Datos que ingresas:</strong> ingresos, gastos, kilometraje, cargas de
            combustible y mantenimientos. Esta información se almacena localmente en tu
            dispositivo.
          </li>
          <li>
            <strong>No recopilamos</strong> nombre, correo, ubicación en tiempo real, contactos,
            fotografías ni información de terceros.
          </li>
          <li>
            <strong>No usamos</strong> cookies, identificadores publicitarios ni herramientas de
            rastreo.
          </li>
        </ul>
      </Section>

      <Section title="3. Uso de la información">
        <p>
          Los datos que registras se usan exclusivamente para ofrecerte las funciones de la
          aplicación: historial, estadísticas, respaldos y control de tu vehículo. No se envían
          a nuestros servidores.
        </p>
      </Section>

      <Section title="4. Almacenamiento y respaldos">
        <p>
          Los datos permanecen en el almacenamiento local de tu dispositivo. Puedes exportar
          copias de respaldo cuando lo desees; esas copias quedan bajo tu control (por ejemplo,
          en tu almacenamiento o servicios de nube personales). Vrixora no accede a ellas.
        </p>
      </Section>

      <Section title="5. Permisos del dispositivo">
        <p>
          TukTuk solo solicita los permisos estrictamente necesarios para su funcionamiento
          (por ejemplo, acceso al almacenamiento para guardar o restaurar copias de respaldo).
          Puedes revocarlos en cualquier momento desde la configuración de tu dispositivo.
        </p>
      </Section>

      <Section title="6. Compartición con terceros">
        <p>
          No vendemos, alquilamos ni compartimos tus datos con terceros. TukTuk no incorpora
          redes publicitarias ni SDKs de analítica que rastreen tu actividad.
        </p>
      </Section>

      <Section title="7. Menores de edad">
        <p>
          TukTuk no está dirigida a menores de 13 años y no recopila deliberadamente datos de
          menores.
        </p>
      </Section>

      <Section title="8. Seguridad">
        <p>
          Aplicamos prácticas razonables para proteger la información almacenada en la
          aplicación. Sin embargo, ningún método de almacenamiento es 100% seguro; te
          recomendamos mantener tu dispositivo actualizado y protegido.
        </p>
      </Section>

      <Section title="9. Tus derechos">
        <p>
          Como los datos residen en tu dispositivo, puedes consultarlos, modificarlos, exportarlos
          o eliminarlos en cualquier momento desde la propia aplicación (o desinstalando TukTuk).
        </p>
      </Section>

      <Section title="10. Cambios en esta política">
        <p>
          Podemos actualizar esta política para reflejar mejoras o cambios legales. Publicaremos
          la versión vigente en esta misma URL con su fecha de actualización.
        </p>
      </Section>

      <Section title="11. Contacto">
        <p>
          Para dudas, solicitudes o reclamos sobre privacidad, escribe a{" "}
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
