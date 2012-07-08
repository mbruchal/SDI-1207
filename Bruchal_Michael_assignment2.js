/* Michael Bruchal
	04JULY2012
	Deliverable 2
	"My next vacation cont." */
	
var gym = "Travis AFB Fitness Center",
    brother = "Jon",
    me = "Mike",
    exerciseRoutine = ["Bench Press", "Squat", "Shoulder Press", "Pull Ups"],
    minutesPerExercise = [15, 20, 10, 10],
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
startRoutine (gymIsOpen);

//Boolean Function
var weightRoom = function (liftWeights, runAllDay) {
	  if ((gymIsOpen && weightRoomIsOpen) || cardioRoomIsOpen) {
    console.log(me + " and " + brother + " is gonna hit the weights!");
  } else {
    console.log("I guess we can run on the road.");
}
	 itsOn = (gymIsOpen && weightRoomIsOpen);
	 return itsOn;
};
weightRoom(brother, me);
	  console.log("Lets do chest. " + me + " is first!");

//Number Function
var startingWeight = function () {
	  var startIbs = 205;
	  while (startIbs <= 315) {
		console.log(startIbs + " pounds is too light!");
		startIbs+=25;}
		console.log(305 + " pounds is the maximum. Its " + brother + "'s turn.");
		return startIbs;
}; 
startingWeight();
console.log("Gotta rehydrate!");

//String Function
var energyDrink = function (time, name, message) {
	 var drink1 = "redbull";
	 var timeLeft = 0
	 console.log(time + " minutes left" + name + message + " finish his " + drink1 + ".");
	 if (timeLeft < 5) {
	 console.log("Your done. Next Exercise!");
	 return timeLeft;
		
	}
};	
energyDrink(5, " Mike", " needs to");
energyDrink(5, " Jon", " needs to");

//Array Function
	
	
	

/*
var firstExercise = function () {
	var exercise = exercises[burnIt],
			 minutesThisExercise = minutesPerExercise[burnIt];
			console.log("Lets do the " + exercise + " for " + minutesThisExercise + " minutes.");
			for (var minutes = 0; minutes < minutesThisExercise; minutes +=5) {
			 var minutesRemain = minutesThisExercise - minutes;
			console.log(minutes + " minutes done, " + minutesRemain + " minutes to go!");
			}
			console.log("We have reached muscle failure!");
};

for (var burnIt = 0; burnIt < exercises.length; burnIt++) {
		firstExercise ();}
*/
