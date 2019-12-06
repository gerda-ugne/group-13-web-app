// Imports Cache polyfill to fully support addALl method
<<<<<<< HEAD
importScripts('/group-13-web-app/web-app/cache-polyfill.js');
=======
importScripts('group-13-web-app/web-app/cache-polyfill.js');
>>>>>>> 3276543f64ab71971651109234fd1eb6835de148


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
