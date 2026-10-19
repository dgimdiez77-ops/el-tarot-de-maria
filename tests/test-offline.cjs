const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const origin = 'https://tarot.example';
const handlers = {};
const buckets = new Map([['tarot-maria-v16', new Map([['/obsolete', {ok:true}]])]]);
let offline = false;
const key = request => new URL(typeof request === 'string' ? request : request.url, origin).pathname;
const response = pathname => ({ok:true, pathname, clone(){return response(pathname)}});
const cacheFor = name => ({
  async addAll(urls){
    for(const url of urls){
      assert(fs.existsSync(path.join('site', url === '/' ? 'index.html' : url.slice(1))), `Missing offline asset: ${url}`);
      buckets.get(name).set(key(url), response(key(url)));
    }
  },
  async put(request, value){buckets.get(name).set(key(request), value)},
  async match(request){return buckets.get(name).get(key(request))}
});
const caches = {
  async open(name){if(!buckets.has(name)) buckets.set(name,new Map());return cacheFor(name)},
  async keys(){return [...buckets.keys()]},
  async delete(name){return buckets.delete(name)}
};
const self = {
  location:{origin},
  addEventListener(type,fn){handlers[type]=fn},
  async skipWaiting(){},
  clients:{async claim(){}}
};
const context = vm.createContext({self,caches,URL,fetch:async request=>{
  if(offline) throw Error('Network unavailable');
  return response(key(request));
}});
vm.runInContext(fs.readFileSync('site/sw.js','utf8'),context);
const run = async(type, request) => {
  let completion;
  let result;
  const event={request,waitUntil(promise){completion=promise},respondWith(promise){result=promise}};
  handlers[type](event);
  if(result) return result;
  await completion;
};

(async()=>{
  await run('install');
  assert.equal(buckets.get('tarot-maria-v28').size,31,'Home, core files and all card art should be pre-cached');
  await run('activate');
  assert(!buckets.has('tarot-maria-v16'),'Old cache should be cleared');
  offline=true;
  for(const url of ['/', '/app.js', '/maria-portada.webp', '/tarot-art/fool.webp', '/tarot-art/gemini.webp']){
    const found=await run('fetch',{method:'GET',url:origin+url});
    assert.equal(found.pathname,url,'Offline request should come from cache');
  }
  console.log('Correcto: 31 recursos preparados y portada, código y cartas disponibles sin red simulada.');
})().catch(error=>{console.error(error);process.exitCode=1});
