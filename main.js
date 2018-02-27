
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
  .then(function(reg) {
    // registration worked
    console.log('Registration succeeded. Scope is ' + reg.scope);
  }).catch(function(error) {
    // registration failed
    console.log('Registration failed with ' + error);
  });
}

let one = document.getElementById("one");

if (!navigator.onLine) {
console.log("offline");
  let imgOffline = document.createElement('img');
  imgOffline.src = "offline.jpg"
  one.append(imgOffline);
}

one.innerHTML = "You are online";
