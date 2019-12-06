// Imports Cache polyfill to fully support addALl method
importScripts('/group-13-web-app/web-app/cache-polyfill.js');


self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('airhorner').then(function(cache) {
      return cache.addAll([
        // List of files to cache
        '/group-13-web-app',
        '/group-13-web-app/index.html',
        '/group-13-web-app/css/master.css',
        '/group-13-web-app/web-app/manifest.json',
        '/group-13-web-app/about.html',
        '/group-13-web-app/calculator.html',
        '/group-13-web-app/map.html',
        '/group-13-web-app/menu.html',
        '/group-13-web-app/shopGuide.html',
        '/group-13-web-app/advice.html'
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
