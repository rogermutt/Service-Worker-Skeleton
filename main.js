if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service_worker.js').then(function() {
    console.log('Service worker registered successfully');
  }).catch(function(err) {
    console.error('Error registering service worker', err);
  });
} else {
  console.error('Browser doesn\'t support service workers');
}
