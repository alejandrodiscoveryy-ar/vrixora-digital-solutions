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
        Última actualización: {new Date().getFullYear()}
      </p>

      <div className="mt-12 space-y-8 text-base leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold">1. Datos y sincronización</h2>
          <p className="mt-3 text-muted-foreground">
            TukTuk Control guarda inicialmente los registros en el dispositivo para permitir su funcionamiento sin conexión.
            Cuando el usuario inicia sesión y utiliza la sincronización, los datos operativos pueden almacenarse de forma segura
            en los servidores utilizados por Vrixora Solutions para permitir el respaldo, la recuperación y la sincronización
            entre dispositivos.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold">2. Inicio de sesión con Google</h2>
          <p className="mt-3 text-muted-foreground">
            Al iniciar sesión con Google, la aplicación utiliza los datos básicos de la cuenta proporcionados durante la autenticación,
            como el identificador de usuario, correo electrónico, nombre y foto de perfil, cuando estén disponibles. Estos datos se
            utilizan únicamente para autenticar al usuario y vincular su información con su cuenta.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold">3. Privacidad y contacto</h2>
          <p className="mt-3 text-muted-foreground">
            Los datos no se venden ni se utilizan con fines publicitarios. El usuario puede solicitar información, corrección o
            eliminación de sus datos mediante los canales de contacto publicados por Vrixora Solutions.
          </p>
        </section>
      </div>
    </div>
  );
}
