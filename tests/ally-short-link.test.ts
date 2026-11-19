import test from "node:test";
import assert from "node:assert/strict";
import vm from "node:vm";
import { allyShortLinkResponse } from "../src/lib/ally-short-link.ts";

const active = (url: URL | RequestInfo, init?: RequestInit) => {
  assert.equal(init?.redirect, "manual", "Cloudflare Workers rechaza redirect:error");
  const u = new URL(String(url));
  assert.equal(u.hostname, "vvxvnywzgtqhlaqpxyqh.supabase.co");
  assert.equal(u.pathname, "/functions/v1/marketplace-ally-shortlink");
  return Promise.resolve(new Response(JSON.stringify({
    slug: u.searchParams.get("slug"),
    display_name: u.searchParams.get("slug")==="karamba" ? "Karamba" : "Conuco",
    status:"active",
  }),{headers:{"Content-Type":"application/json"}}));
};
const paused = async () => new Response(JSON.stringify({
  slug:"conuco",display_name:"Conuco",status:"paused",
}),{headers:{"Content-Type":"application/json"}});
const unknown = async () => new Response(JSON.stringify({error:"NOT_FOUND"}),{status:404});
test("solo intercepta /tuk/nick; los enlaces Impulsa desconocidos conservan el resolver anterior",async()=>{
  assert.equal(await allyShortLinkResponse(new Request("https://www.vrixora.com/ref/001"),active),null);
  assert.equal(await allyShortLinkResponse(new Request("https://www.vrixora.com/tuk/gerson"),unknown),null);
  assert.equal(await allyShortLinkResponse(new Request("https://www.vrixora.com/tuk/gerson"),async()=>new Response(null,{status:302,headers:{Location:"https://example.com"}})),null);
  assert.equal(await allyShortLinkResponse(new Request("https://www.vrixora.com/tuk/gerson/preview.png"),active),null);
  assert.equal(await allyShortLinkResponse(new Request("https://www.vrixora.com/tuk/conuco",{method:"POST"}),active),null);
  assert.equal(await allyShortLinkResponse(new Request("https://www.vrixora.com/tuk/a"),active),null);
});
test("Conuco y Karamba usan título comercial, no nombre de cuenta, y URL breve",async()=>{
  for(const slug of ["conuco","karamba"]){
    const response=await allyShortLinkResponse(new Request("https://www.vrixora.com/tuk/"+slug),active);
    assert.equal(response?.status,200);
    const html=await response!.text();
    assert.match(html,new RegExp('property="og:title" content="TukTuk Aliados · '+(slug==="karamba"?"Karamba":"Conuco")+'"'));
    assert.match(html,new RegExp('property="og:url" content="https://www.vrixora.com/tuk/'+slug+'"'));
    assert.match(html,/<title>TukTuk Aliados · (Conuco|Karamba)<\/title>/);
    assert.match(html,/<h1>TUK<strong>TUK<\/strong> Aliados<\/h1>/);
    assert.match(response!.headers.get("cache-control")??"",/no-store/);
    assert.match(response!.headers.get("content-security-policy")??"",/script-src 'nonce-/);
    assert.doesNotMatch(html,/report_key|report_secret|Yaqulin|Jorge Luis/);
  }
});
test("la navegación preserva atribución Aliado y solo parámetros UTM permitidos",async()=>{
  const response=await allyShortLinkResponse(new Request(
    "https://www.vrixora.com/tuk/conuco?utm_source=instagram&utm_campaign=lanzamiento&aliado=otro&admin=true"
  ),active);
  const html=await response!.text();
  const script=html.match(/<script nonce="[^"]+">([\s\S]*?)<\/script>/)?.[1];
  assert.ok(script);
  const redirected:string[]=[];
  vm.runInNewContext(script,{
    URL,URLSearchParams,
    location:{search:"?utm_source=instagram&utm_campaign=lanzamiento&aliado=otro&admin=true",replace(s:string){redirected.push(s)}},
  });
  assert.deepEqual(redirected,[
    "https://www.vrixora.com/cliente/tuk/?aliado=conuco&utm_source=instagram&utm_campaign=lanzamiento"
  ]);
});
test("pausa retiene la marca pero no atribuye ni redirige viajes",async()=>{
  const resp=await allyShortLinkResponse(new Request("https://www.vrixora.com/tuk/conuco"),paused);
  const html=await resp!.text();
  assert.equal(resp?.status,200);
  assert.match(html,/Este enlace de Conuco no está disponible/);
  assert.doesNotMatch(html,/location.replace/);
  assert.doesNotMatch(html,/\?aliado=conuco/);
});
test("desconexión de consulta no detiene enlaces de Impulsa",async()=>{
  assert.equal(await allyShortLinkResponse(new Request("https://www.vrixora.com/tuk/gerson"),async()=>new Response(null,{status:503})),null);
});
test("nombres no fiables aparecen escapados en los metadatos",async()=>{
  const mock=async()=>new Response(JSON.stringify({slug:"conuco",display_name:'A"><script>alert(1)</script>',status:"active"}));
  const r=await allyShortLinkResponse(new Request("https://www.vrixora.com/tuk/conuco"),mock);
  const html=await r!.text();
  assert.doesNotMatch(html,/<script>alert\(1\)<\/script>/);
  assert.match(html,/A&quot;&gt;&lt;script&gt;/);
});

// Impulsa links must remain separate from the Aliados social identity.
test("the Aliados preview never identifies partners as Impulsa", async () => {
  for (const nick of ["conuco", "karamba"]) {
    const result = await allyShortLinkResponse(new Request("https://www.vrixora.com/tuk/" + nick), active);
    assert.equal(result?.status, 200);
    const html = await result!.text();
    assert.match(html, /TukTuk Aliados/);
    assert.doesNotMatch(html, /TukTuk Impulsa|perfil de tu conductor/i);
    assert.match(html, /<meta property="og:site_name" content="Agencia TukTuk">/);
  }
});
