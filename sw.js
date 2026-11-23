// build v0.5.23
// 항상 인터넷의 최신 파일을 먼저 가져오고, 인터넷이 안 될 때만 저장해 둔 파일을 씁니다.
const C='rod-cache';
self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{ if(e.request.method!=='GET')return;
 e.respondWith(fetch(e.request.mode==='navigate'?e.request.url:e.request,{cache:'no-store'}).then(r=>{ const c=r.clone(); caches.open(C).then(x=>x.put(e.request,c)).catch(()=>{}); return r; }).catch(()=>caches.match(e.request)));
});