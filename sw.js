var CACHE_NAME = 'dependencies-cache';

var REQUIRED_FILES = [
  "/",
  "main.js",
  "sw.js",
  "offline.html",
  "style.css",
  "offline.jpg"
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache)=> {
        return cache.addAll(REQUIRED_FILES);
      })
      .then(()=>{
        return self.skipWaiting();
      })
  );
});


self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
        }).map(function(cacheName) {
          return caches.delete(cacheName);
        })
      );
    })
  );
});
