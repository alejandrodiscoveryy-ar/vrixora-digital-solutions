import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-gradient">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Página no encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          La página que buscas no existe o ha sido movida.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:opacity-90"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">Esta página no cargó</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Algo salió mal. Puedes reintentar o volver al inicio.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            Reintentar
          </button>
          <a href="/" className="rounded-md border border-border px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground">
            Ir al inicio
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Vrixora — Soluciones digitales para negocios" },
      { name: "description", content: "Vrixora desarrolla soluciones digitales para negocios. Descubre TukTuk, la app para controlar ingresos, gastos, kilometraje y mantenimientos." },
      { name: "author", content: "Vrixora" },
      { property: "og:title", content: "Vrixora — Soluciones digitales para negocios" },
      { property: "og:description", content: "Vrixora desarrolla soluciones digitales para negocios. Descubre TukTuk, la app para controlar ingresos, gastos, kilometraje y mantenimientos." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Vrixora" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Vrixora — Soluciones digitales para negocios" },
      { name: "twitter:description", content: "Vrixora desarrolla soluciones digitales para negocios. Descubre TukTuk, la app para controlar ingresos, gastos, kilometraje y mantenimientos." },
      { property: "og:image", content: "https://www.vrixora.com/vrixora-logo.png" },
      { name: "twitter:image", content: "https://www.vrixora.com/vrixora-logo.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" },
      { rel: "icon", href: "/vrixora-symbol.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/vrixora-symbol.png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <head>
        <HeadContent />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener("beforeinstallprompt", function (event) {
                event.preventDefault();
                window.__vrixoraPwaInstallPrompt = event;
              });

              window.addEventListener("appinstalled", function () {
                window.__vrixoraPwaInstallPrompt = null;
              });
            `,
          }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { to: "/", label: "Inicio" },
    { to: "/soluciones", label: "Soluciones" },
    { to: "/blog", label: "Blog" },
    { to: "/servicios", label: "Servicios" },
    { to: "/soporte", label: "Soporte" },
    { to: "/privacidad", label: "Privacidad" },
  ] as const;

  return (
    <header className="sticky top-0 z-50 glass">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" aria-label="VRIXORA Solutions — Inicio">
          <img src="/vrixora-logo.png" alt="VRIXORA Solutions" className="h-8 w-auto max-w-[180px] object-contain" />
        </Link>
        <nav className="hidden gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-sm text-foreground font-medium" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <a
            href="https://admin.vrixora.com"
            className="rounded-md border border-border px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground"
          >
            Área admin
          </a>
        </div>
        <button
          className="rounded-md border border-border p-2 md:hidden"
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>
      {open && (
        <div className="border-t border-border md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-6 py-3">
            {links.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="py-2 text-sm text-muted-foreground hover:text-foreground">
                {l.label}
              </Link>
            ))}
            <a href="https://admin.vrixora.com" onClick={() => setOpen(false)} className="py-2 text-sm text-muted-foreground hover:text-foreground">
              Área admin
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-24 border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-10 md:flex-row md:items-center">
        <div>
          <img src="/vrixora-logo.png" alt="VRIXORA Solutions" className="h-8 w-auto max-w-[200px] object-contain" />
          <p className="mt-2 text-xs text-muted-foreground">
            © {new Date().getFullYear()} Vrixora. Soluciones digitales para negocios.
          </p>
        </div>
        <div className="flex flex-wrap gap-6 text-xs text-muted-foreground">
          <Link to="/soluciones" className="hover:text-foreground">Soluciones</Link>
          <Link to="/blog" className="hover:text-foreground">Blog</Link>
          <Link to="/tuktuk" className="hover:text-foreground">TukTuk</Link>
          <Link to="/servicios" className="hover:text-foreground">Servicios</Link>
          <Link to="/soporte" className="hover:text-foreground">Soporte</Link>
          <Link to="/privacidad" className="hover:text-foreground">Privacidad</Link>
          <Link to="/terminos" className="hover:text-foreground">Términos y condiciones</Link>
          <Link to="/admin" className="hover:text-foreground">Admin</Link>
        </div>
      </div>
    </footer>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <Nav />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
