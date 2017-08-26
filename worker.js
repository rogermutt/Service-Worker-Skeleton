

onmessage = function(e) {
	console.log('Message received from main script');	
 	var date = new Date (),
	 	currently = 1900 + date.getYear(),
	 	sum = currently - e.data,
  	  	workerResult = "You were born in " + sum;
console.log("sum "+sum);
console.log("currently "+currently);
console.log("workerResult "+workerResult);
  console.log("Message sent back");	

  postMessage(workerResult);

}