import test from "node:test";
import assert from "node:assert/strict";
import vm from "node:vm";
import { impulsaShortLinkResponse } from "../src/lib/impulsa-short-link.ts";

const noSocial = async () => new Response(null,{status:503});
const social = async (url: URL | RequestInfo) => {
  const parsed = new URL(String(url));
  assert.equal(parsed.hostname,"vvxvnywzgtqhlaqpxyqh.supabase.co");
  assert.equal(parsed.searchParams.get("alias"),"gerson");
  return new Response(JSON.stringify({data:{name:"Gerson",category:"Triciclo",services:["Carga","Pasajeros"]}}),{headers:{"Content-Type":"application/json"}});
};
test("only /tuk/name is handled", async () => {
  assert.equal(await impulsaShortLinkResponse(new Request("https://www.vrixora.com/ref/test"),noSocial), null);
  assert.equal(await impulsaShortLinkResponse(new Request("https://www.vrixora.com/cliente/tuk/"),noSocial), null);
  assert.equal((await impulsaShortLinkResponse(new Request("https://www.vrixora.com/tuk/a/b"),noSocial))?.status, 404);
  assert.equal((await impulsaShortLinkResponse(new Request("https://www.vrixora.com/tuk/gerson", {method:"POST"}),noSocial))?.status, 405);
  const response=await impulsaShortLinkResponse(new Request("https://www.vrixora.com/tuk/GERSON/"),social);
  assert.ok(response);
  assert.equal(response.status,200);
  assert.match(response.headers.get("cache-control") ?? "", /no-store/);
  assert.match(await response.text(), /target_alias:"gerson"/);
});

test("valid alias redirects only to the existing customer entry, errors do not lose the alias", async () => {
  const response=await impulsaShortLinkResponse(new Request("https://www.vrixora.com/tuk/gerson"),noSocial);
  assert.ok(response);
  const source=(await response.text()).match(/<script nonce="[^"]+">([\s\S]*?)<\/script>/)?.[1];
  assert.ok(source);
  for (const payload of [{data:{code:"0123456789abcdef0123456789abcdef"}},{data:null},{data:{code:"https://example.com"}},{error:"outage"}]) {
    const status={textContent:""},retry={hidden:true,addEventListener(){}};
    const redirects:string[]=[];
    vm.runInNewContext(source,{
      document:{getElementById(id:string){return id==="status"?status:retry;}},
      fetch:async (_url:string,opts:RequestInit)=>{
        assert.equal(JSON.parse(String(opts.body)).params.target_alias,"gerson");
        return {ok:true,json:async()=>payload};
      },
      URL,AbortController,setTimeout,clearTimeout,
      location:{replace(url:string){redirects.push(url);}},
    });
    await new Promise(resolve=>setImmediate(resolve));
    if(payload.data?.code==="0123456789abcdef0123456789abcdef"){
      assert.deepEqual(redirects,["https://www.vrixora.com/cliente/tuk/?conductor=0123456789abcdef0123456789abcdef&mode=full"]);
    } else {
      assert.equal(redirects.length,0);
      assert.equal(retry.hidden,false);
    }
  }
});

test("WhatsApp receives personalized Open Graph tags in HTML before JavaScript",async()=>{
  const response=await impulsaShortLinkResponse(new Request("https://www.vrixora.com/tuk/gerson"),social);
  assert.ok(response);
  const html=await response.text();
  assert.match(html,/property="og:title" content="Viaja con Gerson \| Agencia TukTuk"/);
  assert.match(html,/property="og:description" content="Triciclo · Carga · Pasajeros/);
  assert.match(html,/property="og:image" content="https:\/\/www\.vrixora\.com\/tuk\/gerson\/preview\.png"/);
  assert.match(html,/property="og:image:width" content="1200"/);
  assert.match(html,/property="og:image:height" content="630"/);
  assert.match(html,/property="og:url" content="https:\/\/www\.vrixora\.com\/tuk\/gerson"/);
  const fallback=await impulsaShortLinkResponse(new Request("https://www.vrixora.com/tuk/gerson"),noSocial);
  assert.ok(fallback);
  assert.doesNotMatch(await fallback.text(),/property="og:image"/);
});
test("untrusted names are escaped, not executable HTML",async()=>{
  const mock=async()=>new Response(JSON.stringify({data:{name:'A"><script>alert(1)</script>',category:"Auto",services:[]}}));
  const result=await impulsaShortLinkResponse(new Request("https://www.vrixora.com/tuk/gerson"),mock);
  assert.ok(result);
  const html=await result.text();
  assert.doesNotMatch(html,/<script>alert\(1\)<\/script>/);
  assert.match(html,/A&quot;&gt;&lt;script&gt;/);
});
test("preview path serves only PNG, with HEAD and unavailable profile handling",async()=>{
  const bytes=new Uint8Array([137,80,78,71,13,10,26,10]);
  const mock=async(url:URL|RequestInfo,init?:RequestInit)=>{
    const u=new URL(String(url));
    assert.equal(u.searchParams.get("alias"),"gerson");
    assert.equal(u.searchParams.get("format"),"image");
    return new Response(init?.method==="HEAD"?null:bytes,{headers:{"Content-Type":"image/png"}});
  };
  const response=await impulsaShortLinkResponse(new Request("https://www.vrixora.com/tuk/gerson/preview.png"),mock);
  assert.ok(response);
  assert.equal(response.headers.get("Content-Type"),"image/png");
  assert.deepEqual(new Uint8Array(await response.arrayBuffer()),bytes);
  const head=await impulsaShortLinkResponse(new Request("https://www.vrixora.com/tuk/gerson/preview.png",{method:"HEAD"}),mock);
  assert.equal(head?.body,null);
  const absent=await impulsaShortLinkResponse(new Request("https://www.vrixora.com/tuk/gerson/preview.png"),async()=>new Response(null,{status:404}));
  assert.equal(absent?.status,404);
  const wrong=await impulsaShortLinkResponse(new Request("https://www.vrixora.com/tuk/gerson/preview.png"),async()=>new Response("not png"));
  assert.equal(wrong?.status,503);
});


test("Impulsa preserves safe communication tags across alias, strips untrusted query",async()=>{
  const response=await impulsaShortLinkResponse(new Request("https://www.vrixora.com/tuk/gerson?utm_source=whatsapp_groups&utm_campaign=grupo-centro&admin=true"),noSocial);
  assert.ok(response);
  const script=(await response.text()).match(/<script nonce="[^"]+">([\s\S]*?)<\/script>/)?.[1];
  assert.ok(script);
  const redirects:string[]=[];
  const status={textContent:""},retry={hidden:true,addEventListener(){}};
  vm.runInNewContext(script,{
    document:{getElementById(id:string){return id==="status"?status:retry;}},
    fetch:async()=>({ok:true,json:async()=>({data:{code:"0123456789abcdef0123456789abcdef"}})}),
    URL,URLSearchParams,AbortController,setTimeout,clearTimeout,
    location:{search:"?utm_source=whatsapp_groups&utm_campaign=grupo-centro&admin=true",replace(url:string){redirects.push(url)}},
  });
  await new Promise(resolve=>setImmediate(resolve));
  assert.equal(redirects.length,1);
  assert.equal(redirects[0],"https://www.vrixora.com/cliente/tuk/?conductor=0123456789abcdef0123456789abcdef&mode=full&utm_source=whatsapp_groups&utm_campaign=grupo-centro");
});
