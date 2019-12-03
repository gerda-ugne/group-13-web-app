importScripts('/web-app/cache-polyfill.js');


self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('airhorner').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
       '/about.html',
       '/advice.html',
       '/calculator.html',
       '/map.html',
       '/menu.html',
       '/shopGuide.html',
       '/manifest.json',
       '/js/calc.js',
       '/js/dundeeMap.js',
       '/js/productFilter.js',
       '/js/storeLocationMap.js',
       '/css/master.css'
     ]);
   })
 );
});

self.addEventListener('fetch', function(event) {

console.log(event.request.url);

event.respondWith(

caches.match(event.request).then(function(response) {

return response || fetch(event.request);

})

);

});
