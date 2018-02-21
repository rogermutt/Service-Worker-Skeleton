var CACHE_NAME = 'cache-v1';
var urlsToCache = [
  '/',
  '/styles.css',
  'main.js'
];

self.addEventListener('install', (event)=> {
  console.log('installing SW');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event)=> {
  console.log("Fetching");
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        console.log('SW is fetching the asset ' + response);
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
