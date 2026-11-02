import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacidad/tuktuk")({
  head: () => ({
    meta: [
      { title: "Privacidad de TUKTUK Control y Conductor — Vrixora" },
      { name: "description", content: "Cómo TUKTUK Control y TUKTUK Conductor tratan los datos, el GPS operativo y las solicitudes de transporte." },
      { property: "og:title", content: "Privacidad de TUKTUK Control y Conductor" },
      { property: "og:url", content: "/privacidad/tuktuk" },
    ],
    links: [{ rel: "canonical", href: "/privacidad/tuktuk" }],
  }),
  component: ConductorPrivacyPage,
});

const sections = [
  {
    title: "1. Responsable y alcance",
    paragraphs: [
      "Vrixora Solutions es responsable del tratamiento de datos asociado a TUKTUK Control y a las funciones de TUKTUK Conductor. Estas funciones permiten registrar actividades y vehículos, gestionar la disponibilidad de conductores y atender solicitudes de transporte. El tratamiento depende de las funciones que cada persona utilice.",
      "Esta política describe tanto los datos introducidos por el usuario como los que son necesarios para prestar el servicio. Los permisos del dispositivo se solicitan según las funciones utilizadas.",
    ],
  },
  {
    title: "2. Categorías de datos",
    items: [
      "Identificación y contacto: nombre, correo electrónico, teléfono o WhatsApp, identificador de cuenta, fotografía de perfil cuando se aporte y fecha de registro.",
      "Datos profesionales y del vehículo: información del conductor, documentación aportada, tipo de vehículo, matrícula y otros datos necesarios para revisar su habilitación y presentar su ficha.",
      "Datos de Control: ingresos, gastos, kilometraje, mantenimiento, batería, notas y registros operativos que el usuario incorpore.",
      "Datos de viajes: disponibilidad, solicitudes recibidas o aceptadas, itinerarios, estados, cancelaciones, incidencias, valoraciones y datos necesarios para coordinar una carrera.",
      "Ubicación: coordenadas GPS y marcas de tiempo, cuando el usuario autoriza la ubicación y activa funciones de trabajo o seguimiento; también se pueden tratar las ubicaciones de origen y destino de las carreras.",
      "Datos técnicos: identificadores de sesión, dispositivo o notificaciones, registros técnicos de acceso, errores y datos necesarios para proteger y mantener el servicio.",
    ],
  },
  {
    title: "3. Ubicación y seguimiento del conductor",
    paragraphs: [
      "La ubicación se utiliza para mostrar al conductor en el mapa, calcular proximidad, coordinar recogidas y dar seguimiento a las carreras. Cuando el conductor está disponible o participa en una carrera, pueden enviarse actualizaciones de su posición a los servicios de TUKTUK y mostrarse a los participantes autorizados en la operación correspondiente.",
      "El seguimiento depende del estado operativo, de los permisos concedidos y del funcionamiento del dispositivo. Algunas funciones pueden utilizar un servicio visible mientras el conductor trabaja con la aplicación minimizada o la pantalla bloqueada. No significa que la aplicación solicite acceso permanente e ilimitado a la ubicación. Cuando deja de trabajar, el sistema debe interrumpir los envíos de GPS operativo.",
    ],
  },
  {
    title: "4. Finalidades del tratamiento",
    items: [
      "Crear y proteger cuentas, autenticar usuarios y mantener sesiones.",
      "Administrar perfiles, documentación, vehículos, disponibilidad y acceso a la plataforma.",
      "Asignar y gestionar solicitudes de transporte, comunicar las partes, dar seguimiento a la carrera y atender reclamaciones.",
      "Ofrecer las herramientas de Control, sincronización y recuperación de registros.",
      "Enviar avisos operativos y de seguridad cuando las notificaciones estén habilitadas.",
      "Prevenir fraude, investigar incidencias, mantener trazabilidad y cumplir obligaciones aplicables.",
    ],
  },
  {
    title: "5. Proveedores y destinatarios",
    paragraphs: [
      "Para prestar estas funciones pueden intervenir Supabase (cuentas, base de datos y servicios), Google y Firebase (autenticación, integridad y mensajería), Mapbox u otros servicios cartográficos configurados (mapas y rutas), así como los canales externos que el usuario decida abrir, como WhatsApp. Cada proveedor tratará los datos que sean necesarios para la función solicitada, conforme a sus propias condiciones.",
      "Los datos pertinentes de una carrera pueden ser accesibles al cliente, al conductor asignado y al personal autorizado de administración y soporte, según su función y permisos. Vrixora no declara la venta de datos personales como parte del servicio.",
    ],
  },
  {
    title: "6. Almacenamiento y protección",
    paragraphs: [
      "Algunos registros de Control se conservan localmente para permitir funciones sin conexión; los datos sincronizados, los perfiles y las carreras pueden almacenarse en servicios de Vrixora y sus proveedores tecnológicos. Se aplican controles de acceso y comunicaciones cifradas para proteger la información. Ningún sistema ofrece seguridad absoluta.",
    ],
  },
  {
    title: "7. Conservación y derechos",
    paragraphs: [
      "Los datos se conservan mientras sean necesarios para prestar el servicio, atender solicitudes, documentar operaciones y cumplir obligaciones legales o de seguridad. Los plazos concretos dependen de la categoría de datos y de las obligaciones aplicables; cuando proceda, se eliminarán o anonimizarán.",
      "Puedes solicitar acceso, rectificación o eliminación de datos, y revisar o retirar permisos de ubicación y notificaciones desde los ajustes de tu teléfono. Retirar permisos puede limitar las funciones de trabajo.",
    ],
  },
  {
    title: "8. Eliminación de cuenta y datos",
    paragraphs: [
      "Puedes solicitar la eliminación de tu cuenta y sus datos asociados mediante la página de eliminación indicada más abajo. Para proteger al titular podemos verificar la identidad antes de ejecutar la solicitud. Si resulta necesario conservar ciertos registros por obligaciones legales, seguridad o prevención de fraude, se te informará del motivo.",
    ],
  },
  {
    title: "9. Actualizaciones y contacto",
    paragraphs: [
      "Esta política puede modificarse para reflejar cambios del servicio. La fecha visible de actualización indicará la última versión publicada.",
      "Para consultas de privacidad, escribe a vrixoraa@gmail.com e indica TUKTUK Control o TUKTUK Conductor en el asunto.",
    ],
  },
];

function ConductorPrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 pt-20 pb-24">
      <Link to="/privacidad" className="text-sm text-primary hover:underline">← Volver a políticas</Link>
      <h1 className="mt-6 text-4xl font-bold">Política de privacidad — TUKTUK Control y Conductor</h1>
      <p className="mt-4 text-sm text-muted-foreground">Última actualización: 2 de noviembre de 2026</p>
      <p className="mt-6 text-muted-foreground">Este documento actualiza la política existente sin cambiar su dirección web.</p>
      <div className="mt-10 space-y-9 text-base leading-relaxed">
        {sections.map(({ title, paragraphs, items }) => (
          <section key={title}>
            <h2 className="text-2xl font-bold">{title}</h2>
            {paragraphs?.map((paragraph) => <p className="mt-3 text-muted-foreground" key={paragraph}>{paragraph}</p>)}
            {items && <ul className="mt-3 list-disc space-y-2 pl-6 text-muted-foreground">{items.map((item) => <li key={item}>{item}</li>)}</ul>}
          </section>
        ))}
        <div className="rounded-xl border border-border p-5">
          <h2 className="text-xl font-bold">Solicitar eliminación de cuenta y datos</h2>
          <p className="mt-2 text-muted-foreground">Consulta los pasos para solicitar la eliminación de una cuenta de TUKTUK.</p>
          <Link to="/privacidad/eliminacion-datos" className="mt-3 inline-block text-primary hover:underline">Ir a eliminación de datos →</Link>
        </div>
        <a href="mailto:vrixoraa@gmail.com?subject=Privacidad%20TUKTUK%20Control%20y%20Conductor" className="inline-block text-primary hover:underline">Contactar sobre privacidad: vrixoraa@gmail.com</a>
      </div>
    </main>
  );
}
