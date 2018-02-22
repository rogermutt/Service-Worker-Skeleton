

this.addEventListener(‘install’, function(event) {
  event.waitUntil(
    caches.open(‘movieCacheV1’).then(function(cache) {
      console.log("cache open");
      return cache.addAll([
        ‘/’,  //Important to include the root
        ‘/index.html’,
        ‘/sw.js’,
        ‘/main.js’,
        ‘/style.css’
      ]);
    })
  );
});

this.addEventListener(‘fetch’, function(event) {
  console.log("fetch");
  event.respondWith(caches.match(event.request).then(function(response){
      if(response)
        return response;
      return fetch(event.request).then(function(response){
        return response;
      });
  }));
});
