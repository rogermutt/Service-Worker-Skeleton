

onmessage = function(e) {
  console.log('Message received from main script');
  var workerResult = "Your name is"+e;
  console.log("Message sent back");
  postMessage(workerResult);
}
