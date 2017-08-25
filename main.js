
var first = document.querySelector("#first");
var result = document.querySelector("#result");

// check if worker compatibility 
if (window.Worker) {
console.log("Worker Ready");
// confirm JS file on Github
var newWorker = new Worker("worker.js");

	first.onclick = function(el) {
newWorker.postMessage(el.target.innerHTML);
console.log('Message posted to worker');
	};

	newWorker.onmessage = function(e) {
  result.innerHTML=e.target.innerHTML
	console.log('Message received from worker');
	};


} else {
	console.log("No Worker Available");
}