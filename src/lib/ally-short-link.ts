// Branded short links for commercial Aliados. Driver Impulsa aliases continue
// through the existing resolver when this read-only lookup returns 404.
const LOOKUP = "https://vvxvnywzgtqhlaqpxyqh.supabase.co/functions/v1/marketplace-ally-shortlink";
const CUSTOMER = "https://www.vrixora.com/cliente/tuk/";
const ORIGIN = "https://www.vrixora.com";
const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"} as Record<string,string>)[c]);
const validNick = (s: string) => /^[a-z0-9][a-z0-9-]{1,23}$/.test(s) && !s.endsWith("-");
type PublicAlly = { slug: string; display_name: string; status: "active"|"paused" };

export async function allyShortLinkResponse(
  request: Request, requestFetch: typeof fetch = fetch,
): Promise<Response | null> {
  const url = new URL(request.url);
  const match = /^\/tuk\/([^/]+)\/?$/.exec(url.pathname);
  if (!match || !["GET","HEAD"].includes(request.method)) return null;
  const slug = match[1].toLowerCase();
  if (!validNick(slug)) return null;
  const lookup = new URL(LOOKUP);
  lookup.searchParams.set("slug",slug);
  let profile: PublicAlly;
  try {
    const upstream = await requestFetch(lookup, {
      method: "GET", signal: AbortSignal.timeout(4000),
      headers: {Accept: "application/json"}, cache: "no-store", redirect: "manual",
    });
    if (upstream.status === 404) return null; // Existing verified driver link
    if (!upstream.ok) return null; // Do not break Impulsa on metadata outage
    const data = await upstream.json();
    if (!data || data.slug !== slug || typeof data.display_name !== "string" ||
        data.display_name.length < 2 || data.display_name.length > 80 ||
        !["active","paused"].includes(data.status)) return null;
    profile = data as PublicAlly;
  } catch { return null; }

  const nick = profile.display_name;
  const canonical = ORIGIN + "/tuk/" + slug;
  const active = profile.status === "active";
  const title = nick + " te invita a viajar | Agencia TukTuk";
  const description = "Solicita tu transporte en Agencia TukTuk desde el enlace de " + nick + ".";
  const nonce = crypto.randomUUID().replace(/-/g,"");
  const customer = new URL(CUSTOMER);
  if (active) customer.searchParams.set("aliado",slug);
  const html = `<!doctype html><html lang="es"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex">
<meta name="theme-color" content="#050B10">
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}">
<link rel="canonical" href="${canonical}">
<meta property="og:type" content="website"><meta property="og:locale" content="es_CU">
<meta property="og:site_name" content="Agencia TukTuk"><meta property="og:url" content="${canonical}">
<meta property="og:title" content="${escapeHtml(title)}"><meta property="og:description" content="${escapeHtml(description)}">
<meta name="twitter:card" content="summary"><meta name="twitter:title" content="${escapeHtml(title)}">
<meta name="twitter:description" content="${escapeHtml(description)}">
<style nonce="${nonce}">body{margin:0;background:#050b10;color:#f6f8fa;font:16px system-ui,sans-serif;min-height:100vh;display:grid;place-items:center;padding:18px;box-sizing:border-box}main{max-width:370px;text-align:center}h1{font-size:29px}strong{color:#e5a84e}p{color:#aab6c5;line-height:1.5}a{display:inline-block;padding:12px;color:#35d6a2;border:1px solid #35d6a2;border-radius:12px;text-decoration:none;margin:6px}</style></head>
<body><main><h1>TUK<strong>TUK</strong></h1><p>${active?"Abriendo el enlace de "+escapeHtml(nick)+"…":"Este enlace de "+escapeHtml(nick)+" no está disponible."}</p>
<a href="${escapeHtml(customer.href)}">Abrir TukTuk Cliente</a></main>
${active?`<script nonce="${nonce}">(function(){
 const target=new URL(${JSON.stringify(customer.href)});
 const incoming=new URLSearchParams(typeof location.search==="string"?location.search:"");
 const channel=incoming.get("utm_source") || "";
 if(/^(unknown|direct|whatsapp_private|whatsapp_groups|whatsapp_status|facebook|instagram|qr|other)$/.test(channel))
   target.searchParams.set("utm_source",channel);
 const campaign=incoming.get("utm_campaign") || "";
 if(/^[a-z0-9_-]{1,32}$/.test(campaign)) target.searchParams.set("utm_campaign",campaign);
 location.replace(target.href);
})();</script>`:""}
</body></html>`;
  return new Response(request.method==="HEAD"?null:html,{
    status:200,
    headers:{"Content-Type":"text/html; charset=utf-8","Cache-Control":"no-store, max-age=0",
      "X-Content-Type-Options":"nosniff","Referrer-Policy":"no-referrer",
      "Content-Security-Policy":`default-src 'none'; script-src 'nonce-${nonce}'; style-src 'nonce-${nonce}'; base-uri 'none'; frame-ancestors 'none'; form-action 'none'`},
  });
}
