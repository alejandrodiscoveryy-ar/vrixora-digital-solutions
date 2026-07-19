import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/soporte")({
  head: () => ({
    meta: [
      { title: "Soporte — Vrixora" },
      { name: "description", content: "Soporte general de Vrixora y soporte específico por producto. Contáctanos por WhatsApp o correo." },
      { property: "og:title", content: "Soporte — Vrixora" },
      { property: "og:description", content: "Soporte general y por producto." },
      { property: "og:url", content: "/soporte" },
    ],
    links: [{ rel: "canonical", href: "/soporte" }],
  }),
  component: SupportPage,
});

// TODO: reemplazar con número real
const WHATSAPP_NUMBER = "5490000000000";
const SUPPORT_EMAIL = "soporte@vrixora.com";
const TUKTUK_SUPPORT_EMAIL = "tuktuk@vrixora.com";

const faqs = [
  { q: "¿Qué es Vrixora?", a: "Vrixora desarrolla soluciones digitales y aplicaciones con inteligencia artificial para negocios y operaciones." },
  { q: "¿Ofrecen desarrollo a medida?", a: "Sí. Construimos aplicaciones y automatizaciones a medida para empresas y equipos. Escríbenos y conversemos." },
  { q: "¿TukTuk funciona sin internet?", a: "Sí. TukTuk funciona completamente offline. Todos tus datos se guardan en tu dispositivo." },
  { q: "¿Dónde estará disponible TukTuk?", a: "Próximamente en Google Play. Estamos afinando los últimos detalles antes de publicarla." },
  { q: "¿Se comparten mis datos?", a: "No. Nuestros productos priorizan la privacidad y no envían tus datos a terceros." },
];

function SupportPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 pt-20 pb-24">
      <h1 className="text-4xl font-bold md:text-5xl">¿Cómo podemos <span className="text-gradient">ayudarte</span>?</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Elige el canal que prefieras. Sin formularios largos, sin registros.
      </p>

      <h2 className="mt-12 text-2xl font-bold">Soporte general de Vrixora</h2>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noreferrer"
          className="glass group rounded-xl p-6 shadow-[var(--shadow-card)] transition-transform hover:-translate-y-0.5"
        >
          <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[image:var(--gradient-brand)] text-primary-foreground">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .17 5.33.17 11.9c0 2.1.55 4.14 1.6 5.94L0 24l6.32-1.66a11.86 11.86 0 0 0 5.74 1.46h.01c6.57 0 11.9-5.33 11.9-11.9 0-3.18-1.24-6.17-3.45-8.42zM12.06 21.5h-.01a9.6 9.6 0 0 1-4.89-1.34l-.35-.21-3.75.98 1-3.66-.23-.38a9.55 9.55 0 0 1-1.47-5.09c0-5.29 4.31-9.6 9.6-9.6 2.56 0 4.97 1 6.78 2.82a9.55 9.55 0 0 1 2.82 6.79c0 5.29-4.31 9.6-9.5 9.69z"/></svg>
          </div>
          <h3 className="text-lg font-semibold">WhatsApp</h3>
          <p className="mt-1 text-sm text-muted-foreground">Escríbenos y te respondemos por chat.</p>
          <span className="mt-3 inline-block text-sm font-medium text-primary group-hover:underline">Abrir WhatsApp →</span>
        </a>

        <a
          href={`mailto:${SUPPORT_EMAIL}`}
          className="glass group rounded-xl p-6 shadow-[var(--shadow-card)] transition-transform hover:-translate-y-0.5"
        >
          <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-surface text-primary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
          </div>
          <h3 className="text-lg font-semibold">Correo</h3>
          <p className="mt-1 text-sm text-muted-foreground">Para consultas o proyectos.</p>
          <span className="mt-3 inline-block text-sm font-medium text-primary group-hover:underline">{SUPPORT_EMAIL}</span>
        </a>
      </div>

      <h2 className="mt-14 text-2xl font-bold">Soporte por producto</h2>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div className="glass rounded-xl p-6 shadow-[var(--shadow-card)]">
          <div className="flex items-center justify-between">
            <div className="h-9 w-9 rounded-md bg-[image:var(--gradient-brand)]" />
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              Disponible
            </span>
          </div>
          <h3 className="mt-4 text-lg font-semibold">TukTuk</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Consultas sobre la app: funciones, respaldos y descarga.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <a
              href={`mailto:${TUKTUK_SUPPORT_EMAIL}`}
              className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90"
            >
              {TUKTUK_SUPPORT_EMAIL}
            </a>
            <Link
              to="/tuktuk"
              className="rounded-lg border border-border px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
            >
              Ver producto
            </Link>
          </div>
        </div>

        <div className="glass rounded-xl border border-dashed border-border p-6">
          <div className="flex items-center justify-between">
            <div className="h-9 w-9 rounded-md bg-[image:var(--gradient-brand)] opacity-60" />
            <span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
              Próximamente
            </span>
          </div>
          <h3 className="mt-4 text-lg font-semibold">Nuevos productos</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Habilitaremos canales específicos para cada nuevo producto cuando estén disponibles.
          </p>
        </div>
      </div>

      <section className="mt-16">
        <h2 className="text-2xl font-bold md:text-3xl">Preguntas frecuentes</h2>
        <div className="mt-6 divide-y divide-border rounded-xl border border-border glass">
          {faqs.map((f, i) => <FaqItem key={i} q={f.q} a={f.a} />)}
        </div>
      </section>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen((v) => !v)} className="flex w-full items-center justify-between px-5 py-4 text-left">
        <span className="font-medium">{q}</span>
        <span className={`transition-transform ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      {open && <p className="px-5 pb-5 text-sm text-muted-foreground">{a}</p>}
    </div>
  );
}
