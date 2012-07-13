/* Michael Bruchal
	04JULY2012
	Deliverable 2
	"My next vacation cont." */
	
var gym = "Travis AFB Fitness Center",
    brother = "Jon",
    me = "Mike",
    exerciseRoutine = ["Squat", "Shoulder Press", "Pull Ups"],
    minutesPerExercise = [20, 10, 10],
    gymIsOpen = true,
    weightRoomIsOpen = true,
    cardioRoomIsOpen = false;

//Procedure
var startRoutine = function (gymIsOpen) {
    if (gymIsOpen === true) {
	 console.log("Lets go to " + gym + " and get started!");
     } else {
	         console.log("Oh well! Lets get more tattoos instead.");
       }
};


//Boolean Function
var weightRoom = function (gymIsOpen, weightRoomIsOpen) {
	 if ((gymIsOpen && weightRoomIsOpen) || cardioRoomIsOpen) {
      console.log(me + " and " + brother + " is gonna hit the weights!");
     } else {
        console.log("I guess we can run on the road.");
       }
	    itsOn = (gymIsOpen && weightRoomIsOpen);
return itsOn;
};


//Number Function
var startingWeight = function (startIbs) {
	  while (startIbs <= 315) {
		console.log(startIbs + " pounds is too light!");
		startIbs+=25;
	  }
		var max = 305 + " pounds is the maximum.";
return max;
}; 


//String Function
var energyDrink = function (time, name, message) {
	 var drink1 = "redbull";
	 var timeLeft = 0;
	 console.log(time + " minutes left" + name + message + " finish his " + drink1 + ".");
	     if (timeLeft < 5) {
	     console.log(name + " is done. Next Exercise!");
	     }
return timeLeft;
};	

//Array Function


var firstExercise = function (burnIt) {
	var exercise = exerciseRoutine[burnIt],
			 minutesThisExercise = minutesPerExercise[burnIt];
			 console.log("Lets do the " + exercise + " exercise for " + minutesThisExercise + " minutes.");
		for (var minutes = 0; minutes < minutesThisExercise; minutes +=5) {
		     var minutesRemain = minutesThisExercise - minutes;
		     console.log(minutes + " minutes done, " + minutesRemain + " minutes to go!");
		}
             
};

var finish = function () {
	    for (var burnIt = 0; burnIt < exerciseRoutine.length; burnIt++) {
			firstExercise (burnIt);
		}
             var startEx = me + " and " + brother + " have reached muscle failure.";
return startEx;
};

startRoutine (gymIsOpen);

weightRoom(true, true);
console.log("Lets do chest. " + me + " is first!");

var begin = startingWeight(205);	//fixed return value here
console.log(begin);
console.log("Its " + brother + "'s turn");
 
startingWeight(205);
console.log(begin);

console.log("Gots to rehydrate lets take a break.");

energyDrink(5, " Mike", " needs to");
energyDrink(5, " Jon", " needs to");

var endEx = finish();	//fixed return value here
console.log(endEx);
console.log("That was a good workout. Now lets get something to eat.");


