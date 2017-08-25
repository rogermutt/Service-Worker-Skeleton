
var first = document.querySelector("#first");
var result = document.querySelector("#result");

// check if worker compatibility 
if (window.Worker) {
console.log("Worker Ready");
// confirm JS file on Github
var newWorker = new Worker("worker.js");

	first.onclick = function() {
newWorker.postMessage(this.innerHTML);
console.log('Message posted to worker');
console.log(this.innerHTML);
	};

	newWorker.onmessage = function(e) {
		console.log(e);
  result.innerHTML=e;
	console.log('Message received from worker');
	};


} else {
	console.log("No Worker Available");
}