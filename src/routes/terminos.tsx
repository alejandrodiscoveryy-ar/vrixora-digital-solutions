import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/terminos")({
  head: () => ({
    meta: [
      { title: "Términos y condiciones | Vrixora Solutions" },
      { name: "description", content: "Consulta los términos y condiciones de uso de Vrixora Solutions y de la aplicación TukTuk Control." },
      { property: "og:title", content: "Términos y condiciones | Vrixora Solutions" },
      { property: "og:description", content: "Consulta los términos y condiciones de uso de Vrixora Solutions y de la aplicación TukTuk Control." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://www.vrixora.com/terminos" },
    ],
    links: [{ rel: "canonical", href: "https://www.vrixora.com/terminos" }],
  }),
  component: TerminosPage,
});

function TerminosPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 pt-20 pb-24">
      <Link to="/" className="text-sm text-primary hover:underline">
        ← Volver al inicio
      </Link>

      <h1 className="mt-6 text-4xl font-bold md:text-5xl">
        Términos y <span className="text-gradient">condiciones</span>
      </h1>
      <p className="mt-4 text-sm text-muted-foreground">
        Última actualización: 28 de julio de 2026
      </p>

      <div className="mt-12 space-y-8 text-base leading-relaxed">
        <p className="text-muted-foreground">
          Bienvenido a Vrixora Solutions. Estos términos regulan el acceso y uso de nuestros
          sitios web, aplicaciones y servicios, incluida la aplicación TukTuk Control.
        </p>
        <p className="text-muted-foreground">
          Al acceder, registrarte o utilizar nuestros servicios, confirmas que has leído,
          comprendido y aceptado estos términos.
        </p>

        <section>
          <h2 className="text-2xl font-bold">1. Descripción del servicio</h2>
          <p className="mt-3 text-muted-foreground">
            Vrixora Solutions desarrolla soluciones digitales orientadas a la gestión y
            optimización de negocios.
          </p>
          <p className="mt-3 text-muted-foreground">
            TukTuk Control permite a sus usuarios registrar y consultar información relacionada
            con sus vehículos y actividades comerciales, incluyendo ingresos, gastos,
            kilometraje, voltaje de batería, mantenimiento y estadísticas.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold">2. Registro y cuenta de usuario</h2>
          <p className="mt-3 text-muted-foreground">
            Para utilizar determinadas funciones, puede ser necesario crear una cuenta o acceder
            mediante un proveedor de autenticación, como Google.
          </p>
          <p className="mt-3 text-muted-foreground">El usuario es responsable de:</p>
          <ul className="mt-2 list-disc space-y-1 pl-6 text-muted-foreground">
            <li>Proporcionar información correcta y actualizada.</li>
            <li>Mantener la confidencialidad de sus credenciales.</li>
            <li>Proteger el acceso a su cuenta y dispositivo.</li>
            <li>Notificar cualquier uso no autorizado de su cuenta.</li>
          </ul>
          <p className="mt-3 text-muted-foreground">
            Vrixora Solutions no será responsable por daños ocasionados por el uso negligente de
            las credenciales del usuario.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold">3. Uso permitido</h2>
          <p className="mt-3 text-muted-foreground">
            El usuario se compromete a utilizar los servicios de manera legal y responsable.
          </p>
          <p className="mt-3 text-muted-foreground">No está permitido:</p>
          <ul className="mt-2 list-disc space-y-1 pl-6 text-muted-foreground">
            <li>Utilizar la plataforma para actividades ilegales.</li>
            <li>Intentar acceder sin autorización a cuentas, sistemas o datos.</li>
            <li>Alterar, copiar, descompilar o distribuir la aplicación sin autorización.</li>
            <li>Introducir virus, código malicioso o mecanismos que afecten el funcionamiento del servicio.</li>
            <li>Utilizar la aplicación de forma que perjudique a otros usuarios o a Vrixora Solutions.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold">4. Información registrada por el usuario</h2>
          <p className="mt-3 text-muted-foreground">
            El usuario es responsable de la exactitud de los datos introducidos en la aplicación.
          </p>
          <p className="mt-3 text-muted-foreground">
            TukTuk Control es una herramienta de apoyo para la gestión. La información, cálculos,
            estadísticas y resultados mostrados dependen de los datos proporcionados por el
            usuario y no constituyen asesoría financiera, contable, legal, técnica o profesional.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold">5. Disponibilidad del servicio</h2>
          <p className="mt-3 text-muted-foreground">
            Vrixora Solutions procurará mantener sus servicios disponibles y funcionando
            correctamente.
          </p>
          <p className="mt-3 text-muted-foreground">
            Sin embargo, no garantiza que el servicio esté disponible de manera ininterrumpida,
            libre de errores o compatible con todos los dispositivos.
          </p>
          <p className="mt-3 text-muted-foreground">
            Pueden producirse interrupciones por mantenimiento, actualizaciones, problemas
            técnicos, fallos de proveedores externos o situaciones fuera de nuestro control.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold">6. Planes, licencias y pagos</h2>
          <p className="mt-3 text-muted-foreground">
            Algunas funciones pueden estar sujetas a licencias, suscripciones, periodos de prueba
            o pagos.
          </p>
          <p className="mt-3 text-muted-foreground">
            Los precios, duración, condiciones y funciones incluidas se informarán antes de
            realizar la contratación.
          </p>
          <p className="mt-3 text-muted-foreground">
            El acceso a determinadas funciones podrá limitarse o suspenderse cuando una licencia
            expire o un pago no sea completado.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold">7. Servicios de terceros</h2>
          <p className="mt-3 text-muted-foreground">
            La aplicación puede utilizar servicios proporcionados por terceros, como Google,
            Supabase, proveedores de alojamiento o plataformas de mensajería.
          </p>
          <p className="mt-3 text-muted-foreground">
            El uso de estos servicios también puede estar sujeto a sus propias políticas y
            condiciones.
          </p>
          <p className="mt-3 text-muted-foreground">
            Vrixora Solutions no controla ni se responsabiliza por interrupciones, cambios o
            fallos ocasionados exclusivamente por dichos proveedores.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold">8. Propiedad intelectual</h2>
          <p className="mt-3 text-muted-foreground">
            El diseño, código, logotipos, nombre comercial, textos, imágenes y demás elementos de
            Vrixora Solutions y TukTuk Control están protegidos por las leyes de propiedad
            intelectual correspondientes.
          </p>
          <p className="mt-3 text-muted-foreground">
            No se concede al usuario ningún derecho de propiedad sobre la aplicación. Se concede
            únicamente un derecho limitado, personal, revocable y no transferible para utilizar el
            servicio según estos términos.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold">9. Suspensión o cancelación</h2>
          <p className="mt-3 text-muted-foreground">
            Vrixora Solutions podrá suspender o cancelar el acceso de una cuenta cuando:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-6 text-muted-foreground">
            <li>Se incumplan estos términos.</li>
            <li>Se detecten actividades fraudulentas o ilegales.</li>
            <li>Se intente comprometer la seguridad del servicio.</li>
            <li>Sea necesario cumplir una obligación legal.</li>
            <li>Una licencia o suscripción haya expirado.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold">10. Limitación de responsabilidad</h2>
          <p className="mt-3 text-muted-foreground">Vrixora Solutions no será responsable por:</p>
          <ul className="mt-2 list-disc space-y-1 pl-6 text-muted-foreground">
            <li>Datos incorrectos introducidos por el usuario.</li>
            <li>Decisiones comerciales tomadas a partir de la información de la aplicación.</li>
            <li>Pérdidas económicas indirectas.</li>
            <li>Pérdida de información causada por fallos del dispositivo, eliminación de la aplicación o falta de copias de seguridad.</li>
            <li>Interrupciones provocadas por proveedores externos, conexiones de internet o circunstancias fuera de nuestro control.</li>
          </ul>
          <p className="mt-3 text-muted-foreground">
            Nada de lo dispuesto en estos términos excluirá responsabilidades que legalmente no
            puedan excluirse.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold">11. Privacidad</h2>
          <p className="mt-3 text-muted-foreground">
            El tratamiento de datos personales se describe en nuestras políticas de privacidad.
          </p>
          <div className="mt-3 space-y-2">
            <p className="text-muted-foreground">
              Política de privacidad de TukTuk Control:{" "}
              <Link to="/privacidad/tuktuk" className="text-primary hover:underline">
                https://www.vrixora.com/privacidad/tuktuk
              </Link>
            </p>
            <p className="text-muted-foreground">
              Política de privacidad de Vrixora Solutions:{" "}
              <Link to="/privacidad/vrixora" className="text-primary hover:underline">
                https://www.vrixora.com/privacidad/vrixora
              </Link>
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold">12. Modificaciones</h2>
          <p className="mt-3 text-muted-foreground">
            Vrixora Solutions podrá modificar estos términos para reflejar cambios legales,
            técnicos, comerciales o funcionales.
          </p>
          <p className="mt-3 text-muted-foreground">
            La fecha de la última actualización aparecerá al comienzo de esta página. El uso
            continuado del servicio después de una actualización supone la aceptación de los
            nuevos términos.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold">13. Contacto</h2>
          <p className="mt-3 text-muted-foreground">
            Para consultas relacionadas con estos términos, puedes contactar con:
          </p>
          <div className="mt-3 space-y-1 text-muted-foreground">
            <p className="font-medium text-foreground">Vrixora Solutions</p>
            <p>
              Correo electrónico:{" "}
              <a href="mailto:vrixoraa@gmail.com" className="text-primary hover:underline">
                vrixoraa@gmail.com
              </a>
            </p>
            <p>
              Sitio web:{" "}
              <Link to="/" className="text-primary hover:underline">
                https://www.vrixora.com
              </Link>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
