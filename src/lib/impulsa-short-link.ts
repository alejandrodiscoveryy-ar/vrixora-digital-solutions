// Resolve only an Impulsa alias. The browser uses the existing public gateway
// directly, preserving its trusted ingress IP and rate limits.
const GATEWAY = "https://vvxvnywzgtqhlaqpxyqh.supabase.co/functions/v1/marketplace-customer-gateway";
const CUSTOMER = "https://www.vrixora.com/cliente/tuk/";

export function impulsaShortLinkResponse(request: Request): Response | null {
  const path = new URL(request.url).pathname;
  if (!path.startsWith("/tuk/")) return null;
  if (request.method !== "GET" && request.method !== "HEAD") {
    return new Response(null, { status: 405, headers: { Allow: "GET, HEAD", "Cache-Control": "no-store" } });
  }
  const raw = path.slice(5).replace(/\/$/, "");
  const alias = raw.toLowerCase();
  if (!/^[a-z0-9][a-z0-9-]{1,31}$/.test(alias) || alias.endsWith("-")) {
    return new Response(request.method === "HEAD" ? null : "Enlace de Impulsa inválido.", { status: 404,
      headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" } });
  }
  const nonce = crypto.randomUUID().replace(/-/g, "");
  const html = `<!doctype html><html lang="es"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex">
<meta name="theme-color" content="#050B10"><title>TukTuk Impulsa</title>
<style nonce="${nonce}">body{margin:0;background:#050b10;color:#f6f8fa;font:16px system-ui,sans-serif;min-height:100vh;display:grid;place-items:center;padding:16px;box-sizing:border-box}main{max-width:360px;text-align:center}h1{font-size:28px}strong{color:#e5a84e}p{color:#aab6c5;line-height:1.5}button,a{display:inline-block;padding:12px;color:#35d6a2;background:none;border:1px solid #35d6a2;border-radius:12px;text-decoration:none;margin:6px;font:inherit}button[hidden]{display:none}</style></head>
<body><main><h1>TUK<strong>TUK</strong> Impulsa</h1><p id="status" role="status" aria-live="polite">Abriendo el perfil de tu conductor…</p>
<button id="retry" hidden type="button">Reintentar</button><a href="${CUSTOMER}?mode=full">Abrir TukTuk Cliente</a>
<noscript><p>Activa JavaScript para abrir el perfil personalizado.</p></noscript></main>
<script nonce="${nonce}">
(function(){
  const status=document.getElementById("status"), retry=document.getElementById("retry");
  async function resolve(){
    retry.hidden=true;
    status.textContent="Abriendo el perfil de tu conductor…";
    const controller=new AbortController();
    const timer=setTimeout(()=>controller.abort(),12000);
    try {
      const response=await fetch(${JSON.stringify(GATEWAY)},{method:"POST",headers:{"Content-Type":"application/json"},credentials:"omit",cache:"no-store",signal:controller.signal,body:JSON.stringify({operation:"promo_alias",params:{target_alias:${JSON.stringify(alias)}}})});
      if(!response.ok) throw new Error("lookup");
      const payload=await response.json();
      if(payload.error) throw new Error("lookup");
      const code=payload.data && payload.data.code;
      if(typeof code==="string" && /^[0-9a-f]{32}$/.test(code)){
        const target=new URL(${JSON.stringify(CUSTOMER)});
        target.searchParams.set("conductor",code);
        target.searchParams.set("mode","full");
        location.replace(target.href);
        return;
      }
      status.textContent="Este perfil promocional no está disponible.";
    } catch (_) {
      status.textContent="No pudimos conectar con el perfil. Intenta nuevamente.";
    } finally {
      clearTimeout(timer);
      retry.hidden=false;
    }
  }
  retry.addEventListener("click",resolve); resolve();
})();
</script></body></html>`;
  return new Response(request.method === "HEAD" ? null : html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store, max-age=0",
      "X-Content-Type-Options": "nosniff",
      "Referrer-Policy": "no-referrer",
      "Content-Security-Policy": `default-src 'none'; script-src 'nonce-${nonce}'; style-src 'nonce-${nonce}'; connect-src https://vvxvnywzgtqhlaqpxyqh.supabase.co; base-uri 'none'; frame-ancestors 'none'; form-action 'none'`,
    },
  });
}
