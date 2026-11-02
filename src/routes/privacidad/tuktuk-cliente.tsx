import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacidad/tuktuk-cliente")({
  head: () => ({
    meta: [
      { title: "Política de privacidad TUKTUK Cliente — Vrixora" },
      { name: "description", content: "Datos, ubicación, viajes y comunicaciones en la aplicación TUKTUK Cliente." },
      { property: "og:title", content: "Política de privacidad TUKTUK Cliente — Vrixora" },
      { property: "og:url", content: "/privacidad/tuktuk-cliente" },
    ],
    links: [{ rel: "canonical", href: "/privacidad/tuktuk-cliente" }],
  }),
  component: ClientePrivacyPage,
});

const sections = [
  {
    title: "1. Responsable y finalidad del servicio",
    paragraphs: [
      "Vrixora Solutions trata los datos necesarios para ofrecer TUKTUK Cliente, una aplicación que permite solicitar servicios de transporte, seleccionar origen y destino, consultar información de la carrera y comunicarse con los participantes autorizados.",
    ],
  },
  {
    title: "2. Información que se trata",
    items: [
      "Datos de contacto y perfil aportados por el cliente: nombre, número de WhatsApp o teléfono y, cuando se indique, correo electrónico.",
      "Identificadores técnicos de cliente, sesión y dispositivo necesarios para recuperar una solicitud, proteger el acceso o habilitar avisos.",
      "Ubicación del dispositivo, cuando el cliente acepta el permiso y decide usar la función de recogida por GPS.",
      "Direcciones, coordenadas de recogida y destino, ruta propuesta, tipo de servicio, solicitudes y estados de carrera.",
      "Información relacionada con cancelaciones, incidencias y valoraciones, cuando se utilicen estas funciones.",
      "Datos técnicos mínimos para seguridad, diagnóstico y funcionamiento del servicio, incluidos registros de errores y comprobaciones de integridad.",
    ],
  },
  {
    title: "3. Ubicación y mapas",
    paragraphs: [
      "La ubicación se utiliza para facilitar la elección del punto de recogida y representar origen, destino y trayectos. El cliente puede seleccionar manualmente un punto del mapa si no concede el permiso de ubicación. La aplicación no necesita permiso de ubicación permanente para solicitar un servicio.",
      "Los puntos de recogida y destino forman parte de la solicitud y pueden transmitirse a los sistemas de despacho y al conductor encargado. Para mostrar mapas, calcular rutas o buscar lugares pueden intervenir proveedores cartográficos, como Mapbox, que reciben los datos técnicos o geográficos necesarios para esa operación.",
    ],
  },
  {
    title: "4. Uso de los datos",
    items: [
      "Crear, recuperar y tramitar solicitudes de transporte.",
      "Identificar el contacto del cliente y facilitar la comunicación asociada a una carrera.",
      "Calcular itinerarios y precios estimados o mostrar la información de la carrera.",
      "Gestionar seguimiento, cancelaciones, incidencias y atención al cliente.",
      "Enviar notificaciones de servicio o de actualización cuando el usuario habilite el canal correspondiente.",
      "Prevenir el uso indebido y proteger la estabilidad y seguridad de la plataforma.",
    ],
  },
  {
    title: "5. Compartición y proveedores",
    paragraphs: [
      "La información pertinente se comparte con el conductor asignado, los operadores autorizados y los proveedores necesarios para prestar el servicio. Estos proveedores pueden incluir Supabase (almacenamiento y operaciones), Firebase o Google (mensajería y comprobaciones de integridad) y Mapbox (mapas y rutas).",
      "Si el cliente decide abrir WhatsApp o una aplicación de mensajería externa, los datos incluidos en el mensaje pasarán a ser tratados también por ese servicio conforme a sus propias políticas. Vrixora no declara la venta de los datos personales como parte de TUKTUK Cliente.",
    ],
  },
  {
    title: "6. Seguridad y almacenamiento",
    paragraphs: [
      "Los datos de sesión y la información necesaria para continuar una solicitud pueden almacenarse en el dispositivo y los sistemas del servicio. Se utilizan controles de acceso y conexiones cifradas para proteger las comunicaciones. Los mensajes enviados por servicios externos se rigen además por sus propias medidas de protección.",
    ],
  },
  {
    title: "7. Conservación y derechos",
    paragraphs: [
      "Los datos se conservarán durante el tiempo necesario para gestionar las solicitudes y la seguridad del servicio, atender reclamaciones y cumplir las obligaciones aplicables. Posteriormente se eliminarán o anonimizarán cuando proceda. Los plazos pueden variar según el tipo de registro.",
      "Puedes solicitar información, corrección o eliminación de tus datos. También puedes cambiar los permisos del GPS y de las notificaciones desde los ajustes del dispositivo, sin perjuicio de las funciones que dependan de ellos.",
    ],
  },
  {
    title: "8. Eliminación de datos y perfil",
    paragraphs: [
      "Si has creado un perfil o una sesión de cliente, puedes solicitar la eliminación de los datos asociados. Para evitar eliminar datos de otra persona, puede ser necesario verificar tu identidad o el número de contacto utilizado. Algunos registros podrían conservarse cuando exista un fundamento legal o de seguridad que lo exija; se informará en esos casos.",
    ],
  },
  {
    title: "9. Cambios y contacto",
    paragraphs: [
      "Esta política se revisará si cambian las funciones o el tratamiento de datos. Para cuestiones de privacidad escribe a vrixoraa@gmail.com, indicando TUKTUK Cliente.",
    ],
  },
];

function ClientePrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 pt-20 pb-24">
      <Link to="/privacidad" className="text-sm text-primary hover:underline">← Volver a políticas</Link>
      <h1 className="mt-6 text-4xl font-bold">Política de privacidad — TUKTUK Cliente</h1>
      <p className="mt-4 text-sm text-muted-foreground">Última actualización: 2 de noviembre de 2026</p>
      <div className="mt-10 space-y-9 text-base leading-relaxed">
        {sections.map(({ title, paragraphs, items }) => (
          <section key={title}>
            <h2 className="text-2xl font-bold">{title}</h2>
            {paragraphs?.map((paragraph) => <p className="mt-3 text-muted-foreground" key={paragraph}>{paragraph}</p>)}
            {items && <ul className="mt-3 list-disc space-y-2 pl-6 text-muted-foreground">{items.map((item) => <li key={item}>{item}</li>)}</ul>}
          </section>
        ))}
        <div className="rounded-xl border border-border p-5">
          <h2 className="text-xl font-bold">Solicitar eliminación de datos</h2>
          <p className="mt-2 text-muted-foreground">Puedes iniciar una solicitud de eliminación sin reinstalar la aplicación.</p>
          <Link to="/privacidad/eliminacion-datos" className="mt-3 inline-block text-primary hover:underline">Ir a eliminación de datos →</Link>
        </div>
        <a href="mailto:vrixoraa@gmail.com?subject=Privacidad%20TUKTUK%20Cliente" className="inline-block text-primary hover:underline">Contactar sobre privacidad: vrixoraa@gmail.com</a>
      </div>
    </main>
  );
}
