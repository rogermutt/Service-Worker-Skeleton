
if (‘serviceWorker’ in navigator) {
  navigator.serviceWorker.register(‘/sw.js’, { scope: ‘/’ }).then(function(reg) {
    console.log("Registered!");
  }).catch(function(error) {
    // registration failed
    console.log("Failed to register" + error);
  });
}
