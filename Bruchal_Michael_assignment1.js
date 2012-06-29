/* Michael Bruchal
   25June2012
	Deliverable 1
  "My next vacation" */

// Set Variables

var home = "Hawaii",
	destination = "Sacramento",
	airplane = "\"Hawaiian Airline's\"",
	money = 400,
	firstClass = true,
	delayed = false;
// Output

	console.log("I am taking a trip to " + destination + ".");
	console.log("I will be flying on " + airplane + ".");
	console.log("From " + home + " to " + destination + " takes 5 hours.");
	console.log("If I can, I will pay " + money + " extra for a First Class seat.");
	console.log(airplane + " is my favorite carrier and " + destination + " is my favorite place");
	
//Conditionals

if (firstClass === true) {
	console.log("This will be my second time flying first class in my life.");
	console.log("Its gonna be a nice flight");
}	if (money >= 400) {
	console.log("I can afford it, so why not");
} else {
	console.log("Damn! Thats too bad I was really looking forward to a comfortable trip.");
}	if (delayed === false) {
	console.log(airplane + " is always on time");
} else {
	console.log("Thats wierd " + airplane + " has never been late before");
};