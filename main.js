
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

let container = document.getElementById("container");

let h2 = document.createElement("h2");
h2.innerHTML = "I am online";

let p = document.createElement("p");
p.innerHTML = "I just love when my network is up and running :p";

[h2,p].map(el=>container.append(el));
