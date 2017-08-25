

onmessage = function(e) {
  console.log('Message received from main script');
  var workerResult = "Your name is"+e;
  console.log("e: "+e.data);
  console.log("workerResult: "+workerResult.data);
  console.log("Message sent back");
  postMessage(workerResult);
}
