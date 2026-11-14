import test from "node:test";
import assert from "node:assert/strict";
import vm from "node:vm";
import { impulsaShortLinkResponse } from "../src/lib/impulsa-short-link.ts";

test("only /tuk/name is handled", async () => {
  assert.equal(impulsaShortLinkResponse(new Request("https://www.vrixora.com/ref/test")), null);
  assert.equal(impulsaShortLinkResponse(new Request("https://www.vrixora.com/cliente/tuk/")), null);
  assert.equal(impulsaShortLinkResponse(new Request("https://www.vrixora.com/tuk/a/b"))?.status, 404);
  assert.equal(impulsaShortLinkResponse(new Request("https://www.vrixora.com/tuk/gerson", {method:"POST"}))?.status, 405);
  const response=impulsaShortLinkResponse(new Request("https://www.vrixora.com/tuk/GERSON/"));
  assert.ok(response);
  assert.equal(response.status,200);
  assert.match(response.headers.get("cache-control") ?? "", /no-store/);
  assert.match(await response.text(), /target_alias:"gerson"/);
});

test("valid alias redirects only to the existing customer entry, errors do not lose the alias", async () => {
  const response=impulsaShortLinkResponse(new Request("https://www.vrixora.com/tuk/gerson"));
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
