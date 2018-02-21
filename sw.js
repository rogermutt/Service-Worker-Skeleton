var CACHE_NAME = 'v1::madebymike';
var urlsToCache = [
  '/',
  '/styles.css',
  'main.js'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});


self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          return cacheName !== CACHE_NAME;
        }).map(function(cacheName) {
          console.log('Deleting '+ cacheName);
          return caches.delete(cacheName);
        })
      );
    })
  );
});

self.addEventListener('fetch', function(event) {
  e.respondWith(
    // If network fetch fails serve offline page form cache
    fetch(event.request).catch(function(error) {
      return caches.open(CACHE_NAME).then(function(cache) {
        return cache.match('/offline.html');
      });
    })
  );
});
