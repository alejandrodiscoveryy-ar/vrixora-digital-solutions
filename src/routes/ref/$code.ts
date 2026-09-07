import { createFileRoute } from "@tanstack/react-router";

const PLAY_BASE =
  "https://play.google.com/store/apps/details?id=com.alejandrocruz.tuktukcontrol";

function normalizeReferralCode(value: string) {
  const code = value.trim().toUpperCase();
  return /^[A-Z0-9_-]{3,64}$/.test(code) ? code : null;
}

export const Route = createFileRoute("/ref/$code")({
  server: {
    handlers: {
      GET: async ({ params }) => {
        const code = normalizeReferralCode(params.code);

        if (!code) {
          return new Response("Código de referido inválido.", {
            status: 400,
            headers: {
              "Content-Type": "text/plain; charset=utf-8",
              "Cache-Control": "no-store, max-age=0",
              "X-Content-Type-Options": "nosniff",
            },
          });
        }

        const installReferrer = `ref=${code}`;
        const playUrl =
          `${PLAY_BASE}&referrer=${encodeURIComponent(installReferrer)}`;

        return new Response(null, {
          status: 302,
          headers: {
            Location: playUrl,
            "Cache-Control": "no-store, max-age=0",
            "X-Content-Type-Options": "nosniff",
            "Referrer-Policy": "no-referrer",
          },
        });
      },
    },
  },
});
