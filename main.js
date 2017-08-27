

var input = document.querySelector("#input"),
	button = document.querySelector("#submit"),
	result = document.querySelector("#result");

var newWorker = new Worker("worker.js");

	button.onclick = function() { 
  if (!isNaN(input.value)) {
  newWorker.postMessage(input.value);
	console.log('Message posted to worker');
  } else {	alert("Digits only"); }
	
	};

	newWorker.onmessage = function(e) {
	console.log(e);
  result.innerHTML=e.data;
	console.log('Message received from worker');
	};

var myImage = document.querySelector('img');

fetch('euripidies-image.jpg').then(function(response) {
  return response.blob();
}).then(function(myBlob) {
  var objectURL = URL.createObjectURL(myBlob);
  myImage.src = objectURL;

    yourImg.style.height = '100px';
    yourImg.style.width = '200px';
  
});



