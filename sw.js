// Imports Cache polyfill to fully support addALl method
importScripts('/web-app/cache-polyfill.js');


self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('airhorner').then(function(cache) {
     return cache.addAll([
       // List of files to cache
       '/',
       '/index.html',
       '/css/master.css',
       '/web-app/manifest.json',
       '/about.html',
       '/calculator.html',
       '/map.html',
       '/menu.html',
       'shopGuide.html',
       'advice.html'
     ]);
   })
 );
});

// Logs page requests
self.addEventListener('fetch', function(event) {

//console.log(event.request.url);

event.respondWith(

caches.match(event.request).then(function(response) {

return response || fetch(event.request);

})

);

});
