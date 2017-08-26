

onmessage = function(e) {
	console.log('Message received from main script');
	console.log(e.data);	
 	var date = new Date (),
	 	currently = 1900 + date.getYear(),
  	  	workerResult = "You were born in "+ currently - e.data;


  console.log("Message sent back");	

  postMessage(workerResult);

}