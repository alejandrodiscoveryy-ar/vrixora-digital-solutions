// Resolve only an Impulsa alias. The browser uses the existing public gateway
// directly, preserving its trusted ingress IP and rate limits.
const GATEWAY = "https://vvxvnywzgtqhlaqpxyqh.supabase.co/functions/v1/marketplace-customer-gateway";
const CUSTOMER = "https://www.vrixora.com/cliente/tuk/";
const SOCIAL = "https://vvxvnywzgtqhlaqpxyqh.supabase.co/functions/v1/marketplace-impulsa-social";
const CANONICAL = "https://www.vrixora.com";
const escapeHtml = (value: string) => value.replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"} as Record<string,string>)[c]);
type SocialProfile = {name:string;category:string;services:string[]};
function socialUrl(alias: string, format: "meta"|"image") {
  const url=new URL(SOCIAL); url.searchParams.set("alias",alias); url.searchParams.set("format",format); return url;
}
async function readSocialProfile(alias: string, requestFetch: typeof fetch): Promise<SocialProfile|null> {
  try {
    const response = await requestFetch(socialUrl(alias,"meta"),{signal:AbortSignal.timeout(3500),headers:{Accept:"application/json"},cache:"no-store",redirect:"manual"});
    if (!response.ok) return null;
    const p=(await response.json()).data;
    if (!p || typeof p.name!=="string" || !p.name.trim() || typeof p.category!=="string" || !Array.isArray(p.services)) return null;
    return {name:p.name.slice(0,120),category:p.category.slice(0,50),services:p.services.filter((s:unknown)=>typeof s==="string").slice(0,5).map((s:string)=>s.slice(0,50))};
  } catch { return null; }
}
async function previewPng(alias:string,request:Request,requestFetch:typeof fetch):Promise<Response> {
  const headers={"Cache-Control":"no-store, max-age=0","X-Content-Type-Options":"nosniff"};
  try {
    const upstream=await requestFetch(socialUrl(alias,"image"),{method:request.method,signal:AbortSignal.timeout(15000),headers:{Accept:"image/png"},cache:"no-store",redirect:"manual"});
    if (upstream.status===404) return new Response(null,{status:404,headers});
    if (!upstream.ok || !upstream.headers.get("Content-Type")?.startsWith("image/png")) return new Response(null,{status:503,headers});
    return new Response(request.method==="HEAD"?null:upstream.body,{headers:{...headers,"Content-Type":"image/png"}});
  } catch { return new Response(null,{status:503,headers}); }
}

export async function impulsaShortLinkResponse(request: Request, requestFetch: typeof fetch = fetch): Promise<Response | null> {
  const path = new URL(request.url).pathname;
  if (!path.startsWith("/tuk/")) return null;
  if (request.method !== "GET" && request.method !== "HEAD") {
    return new Response(null, { status: 405, headers: { Allow: "GET, HEAD", "Cache-Control": "no-store" } });
  }
  const rawPath = path.slice(5).replace(/\/$/, "");
  const isPreview = rawPath.endsWith("/preview.png");
  const raw = isPreview ? rawPath.slice(0,-12) : rawPath;
  const alias = raw.toLowerCase();
  if (!/^[a-z0-9][a-z0-9-]{1,31}$/.test(alias) || alias.endsWith("-")) {
    return new Response(request.method === "HEAD" ? null : "Enlace de Impulsa inválido.", { status: 404,
      headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" } });
  }
  if (isPreview) return previewPng(alias,request,requestFetch);
  const profile=await readSocialProfile(alias,requestFetch);
  const canonical=CANONICAL+"/tuk/"+alias;
  const title=profile ? "Viaja con "+profile.name+" | Agencia TukTuk" : "TukTuk Impulsa";
  const description=profile ? [profile.category,...profile.services].join(" · ")+". Solicita el servicio de tu conductor verificado. Tu próximo viaje, a un toque." : "Solicita transporte con Agencia TukTuk. Tu próximo viaje, a un toque.";
  const socialTags=profile ? '<meta property="og:image" content="'+canonical+'/preview.png"><meta property="og:image:secure_url" content="'+canonical+'/preview.png"><meta property="og:image:type" content="image/png"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:alt" content="'+escapeHtml("Tarjeta promocional de "+profile.name)+'"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:image" content="'+canonical+'/preview.png">' : '<meta name="twitter:card" content="summary">';
  const nonce = crypto.randomUUID().replace(/-/g, "");
  const html = `<!doctype html><html lang="es"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex">
<meta name="theme-color" content="#050B10"><title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}"><link rel="canonical" href="${canonical}">
<meta property="og:type" content="website"><meta property="og:site_name" content="Agencia TukTuk"><meta property="og:locale" content="es_CU"><meta property="og:url" content="${canonical}"><meta property="og:title" content="${escapeHtml(title)}"><meta property="og:description" content="${escapeHtml(description)}">
<meta name="twitter:title" content="${escapeHtml(title)}"><meta name="twitter:description" content="${escapeHtml(description)}">${socialTags}
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
        // Preserve only explicit campaign tags through the short alias.
        // Never forward arbitrary query parameters to the customer app.
        const incoming=new URLSearchParams(typeof location.search==="string" ? location.search : "");
        const channel=incoming.get("utm_source") || "";
        if(/^(unknown|direct|whatsapp_private|whatsapp_groups|whatsapp_status|facebook|instagram|qr|other)$/.test(channel))
          target.searchParams.set("utm_source",channel);
        const campaign=incoming.get("utm_campaign") || "";
        if(/^[a-z0-9_-]{1,32}$/.test(campaign))
          target.searchParams.set("utm_campaign",campaign);
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
