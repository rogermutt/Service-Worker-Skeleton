

var input = document.querySelector("#input"),
	button = document.querySelector("#submit"),
	result = document.querySelector("#result");

var newWorker = new Worker("worker.js");

	button.onclick = function() { 
  if (!isNaN(input.value)) {
  newWorker.postMessage(input.value);
	console.log('Message posted to worker');
	console.log('content' + input.value);
  } else {	alert("Digits only"); }
	
	};

	newWorker.onmessage = function(e) {
	console.log(e);
  result.innerHTML=e.data;
	console.log('Message received from worker');
	};




