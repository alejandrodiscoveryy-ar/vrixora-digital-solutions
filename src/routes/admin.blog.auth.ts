import { createFileRoute } from "@tanstack/react-router";

const BLOG_ADMIN_EMAIL = "alecruzm@gmail.com";
const SESSION_COOKIE = "vrixora_blog_admin_session";
const SESSION_VALUE = "vrixora-blog-admin-ok";
const SESSION_MAX_AGE_SECONDS = 60 * 60 * 8;

export const Route = createFileRoute("/admin/blog/auth")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const authorized = hasValidSession(request);
        return jsonResponse({ authorized, adminEmail: BLOG_ADMIN_EMAIL });
      },
      POST: async ({ request }) => {
        let payload: { email?: string } = {};

        try {
          payload = (await request.json()) as { email?: string };
        } catch {
          return jsonResponse(
            { ok: false, message: "Solicitud invalida." },
            { status: 400 },
          );
        }

        const email = payload.email?.trim().toLowerCase() ?? "";
        if (email !== BLOG_ADMIN_EMAIL) {
          return jsonResponse(
            { ok: false, message: "Correo no autorizado." },
            { status: 401 },
          );
        }

        return jsonResponse(
          { ok: true, authorized: true, adminEmail: BLOG_ADMIN_EMAIL },
          {
            headers: {
              "Set-Cookie": buildSessionCookie(),
            },
          },
        );
      },
      DELETE: async () => {
        return jsonResponse(
          { ok: true, authorized: false },
          {
            headers: {
              "Set-Cookie": clearSessionCookie(),
            },
          },
        );
      },
    },
  },
});

function hasValidSession(request: Request) {
  const cookieHeader = request.headers.get("cookie") ?? "";
  const cookies = parseCookieHeader(cookieHeader);
  return cookies[SESSION_COOKIE] === SESSION_VALUE;
}

function parseCookieHeader(rawCookieHeader: string) {
  const entries = rawCookieHeader
    .split(";")
    .map((part) => part.trim())
    .filter(Boolean)
    .map((part) => {
      const separatorIndex = part.indexOf("=");
      if (separatorIndex === -1) return [part, ""] as const;
      const key = decodeURIComponent(part.slice(0, separatorIndex).trim());
      const value = decodeURIComponent(part.slice(separatorIndex + 1).trim());
      return [key, value] as const;
    });

  return Object.fromEntries(entries);
}

function buildSessionCookie() {
  return [
    `${SESSION_COOKIE}=${encodeURIComponent(SESSION_VALUE)}`,
    "Path=/",
    `Max-Age=${SESSION_MAX_AGE_SECONDS}`,
    "HttpOnly",
    "SameSite=Lax",
    "Secure",
  ].join("; ");
}

function clearSessionCookie() {
  return [
    `${SESSION_COOKIE}=`,
    "Path=/",
    "Max-Age=0",
    "HttpOnly",
    "SameSite=Lax",
    "Secure",
  ].join("; ");
}

function jsonResponse(
  body: unknown,
  init: ResponseInit = {},
) {
  const headers = new Headers(init.headers);
  if (!headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json; charset=utf-8");
  }

  return new Response(JSON.stringify(body), {
    ...init,
    headers,
  });
}
