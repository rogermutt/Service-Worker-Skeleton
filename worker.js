

onmessage = function(e) {
	console.log('Message received from main script');
 	var date = new Date (),
	 	currently = 1900+date.getYear(),
  	  	workerResult = "You were born in "+ currently - e.data;

  console.log("workerResult "+workerResult);
  console.log("Message sent back");	

  postMessage(workerResult);

}