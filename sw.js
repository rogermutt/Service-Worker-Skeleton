var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  '/',
  '/styles.css',
  'main.js',
  'video/Underground-Traffic.mp4'
];

self.addEventListener('install', (event)=> {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event)=> {
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
