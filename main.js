
let proxyurl = "https://upload.wikimedia.org/wikipedia/commons/9/9c/Image-Porkeri_001.jpg";

let myImage = new Image();

let apiRequest3 =(url) => fetch(url)
.then(response=>response.blob())
.then(myBlob=>URL.createObjectURL(myBlob))
.catch(function(e) { console.log("Req3 err: ", e); });

apiRequest3(proxyurl).then(function(response) {
console.log(response);
  var imageURL = window.URL.createObjectURL(response);
  myImage.src = imageURL;
  body.appendChild(myImage);
}, function(Error) {
  console.log(Error);
});
