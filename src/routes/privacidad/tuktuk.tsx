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

      <h1 className="mt-6 text-4xl font-bold">Política de privacidad — TukTuk Control</h1>
      <p className="mt-4 text-sm text-muted-foreground">
        Última actualización: 31 de julio de 2026
      </p>

      <div className="mt-12 space-y-8 text-base leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold">1. Introducción</h2>
          <p className="mt-3 text-muted-foreground">
            TukTuk Control es una aplicación desarrollada por <strong>Vrixora Solutions</strong> para ayudar a propietarios y conductores de vehículos eléctricos a gestionar ingresos, gastos, kilometraje, mantenimiento y otra información relacionada con la operación de su negocio.
          </p>
          <p className="mt-3 text-muted-foreground">
            Al utilizar la aplicación, el usuario acepta el tratamiento de sus datos conforme a esta Política de Privacidad.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold">2. Información que recopilamos</h2>
          <p className="mt-3 text-muted-foreground">
            La aplicación puede recopilar y almacenar la siguiente información:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-muted-foreground">
            <li>Nombre del usuario.</li>
            <li>Dirección de correo electrónico.</li>
            <li>Identificador único de la cuenta.</li>
            <li>Fotografía del perfil (cuando esté disponible).</li>
            <li>Registros de ingresos, gastos, kilometraje, voltaje de batería, mantenimientos y demás información introducida por el usuario.</li>
            <li>Información técnica necesaria para el funcionamiento de la aplicación y la sincronización de datos.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold">3. Inicio de sesión con Google</h2>
          <p className="mt-3 text-muted-foreground">
            TukTuk Control utiliza <strong>Google Sign-In</strong> para autenticar a los usuarios.
          </p>
          <p className="mt-3 text-muted-foreground">
            Durante el proceso de autenticación, Google puede proporcionar los siguientes datos:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-muted-foreground">
            <li>Nombre.</li>
            <li>Dirección de correo electrónico.</li>
            <li>Identificador único de la cuenta de Google.</li>
            <li>Fotografía del perfil (cuando esté disponible).</li>
          </ul>
          <p className="mt-3 text-muted-foreground">
            Estos datos se utilizan exclusivamente para:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-muted-foreground">
            <li>Autenticar al usuario.</li>
            <li>Crear o identificar su cuenta.</li>
            <li>Vincular los datos almacenados con su perfil.</li>
            <li>Permitir la sincronización segura entre dispositivos.</li>
          </ul>
          <p className="mt-3 text-muted-foreground">
            La aplicación <strong>no solicita acceso</strong> al contenido de Gmail, Google Drive, Google Calendar, Contactos ni a ningún otro servicio de Google distinto de la autenticación.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold">4. Uso de la información</h2>
          <p className="mt-3 text-muted-foreground">
            La información recopilada se utiliza únicamente para:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-muted-foreground">
            <li>Prestar los servicios ofrecidos por TukTuk Control.</li>
            <li>Sincronizar información entre dispositivos.</li>
            <li>Realizar copias de seguridad cuando el usuario utiliza la sincronización.</li>
            <li>Mejorar la estabilidad, seguridad y funcionamiento de la aplicación.</li>
            <li>Responder solicitudes de soporte técnico.</li>
          </ul>
          <p className="mt-3 text-muted-foreground">
            Los datos <strong>no se utilizan</strong> para publicidad personalizada ni para elaborar perfiles comerciales.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold">5. Almacenamiento y protección de los datos</h2>
          <p className="mt-3 text-muted-foreground">
            Los registros creados por el usuario se almacenan inicialmente en el dispositivo para permitir el funcionamiento sin conexión.
          </p>
          <p className="mt-3 text-muted-foreground">
            Cuando el usuario habilita la sincronización, la información se almacena de forma segura en la infraestructura utilizada por <strong>Vrixora Solutions</strong>, incluyendo los servicios de <strong>Supabase</strong>, con el único propósito de permitir la sincronización, recuperación y respaldo de los datos.
          </p>
          <p className="mt-3 text-muted-foreground">
            Las comunicaciones utilizan conexiones cifradas mediante <strong>HTTPS</strong> y mecanismos de autenticación para proteger la información.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold">6. Compartición de datos</h2>
          <p className="mt-3 text-muted-foreground">
            Vrixora Solutions <strong>no vende, alquila ni comercializa</strong> los datos personales de los usuarios.
          </p>
          <p className="mt-3 text-muted-foreground">
            La información únicamente puede compartirse con proveedores tecnológicos indispensables para el funcionamiento del servicio, entre ellos:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-muted-foreground">
            <li><strong>Google</strong>, para la autenticación del usuario.</li>
            <li><strong>Supabase</strong>, para el almacenamiento seguro y la sincronización de los datos.</li>
          </ul>
          <p className="mt-3 text-muted-foreground">
            Estos proveedores reciben únicamente la información necesaria para prestar sus respectivos servicios.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold">7. Conservación de los datos</h2>
          <p className="mt-3 text-muted-foreground">
            Los datos se conservan mientras la cuenta permanezca activa o hasta que el usuario solicite su eliminación, salvo que exista una obligación legal que requiera conservar determinada información durante un período adicional.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold">8. Eliminación de la cuenta y de los datos</h2>
          <p className="mt-3 text-muted-foreground">
            El usuario puede solicitar la eliminación de su cuenta y de toda la información asociada escribiendo a:
          </p>
          <p className="mt-3 text-muted-foreground">
            <strong><a href="mailto:vrixoraa@gmail.com" className="text-primary hover:underline">vrixoraa@gmail.com</a></strong>
          </p>
          <p className="mt-3 text-muted-foreground">
            Una vez verificada la identidad del solicitante, Vrixora Solutions eliminará la información asociada dentro de un plazo razonable, salvo aquella que deba conservarse por obligación legal.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold">9. Cambios en esta Política</h2>
          <p className="mt-3 text-muted-foreground">
            Esta Política de Privacidad podrá actualizarse para reflejar cambios en la aplicación, en los servicios ofrecidos o en la normativa aplicable.
          </p>
          <p className="mt-3 text-muted-foreground">
            Cuando exista una modificación importante, se actualizará la fecha indicada al inicio de esta página.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold">10. Contacto</h2>
          <p className="mt-3 text-muted-foreground">
            Si tienes preguntas relacionadas con esta Política de Privacidad o con el tratamiento de tus datos personales, puedes contactarnos en:
          </p>
          <p className="mt-3 text-muted-foreground">
            <strong>Vrixora Solutions</strong>
          </p>
          <p className="mt-3 text-muted-foreground">
            <strong>Correo electrónico:</strong> <a href="mailto:vrixoraa@gmail.com" className="text-primary hover:underline">vrixoraa@gmail.com</a>
          </p>
        </section>
      </div>
    </div>
  );
}
