/* Michael Bruchal
	04JULY2012
	Deliverable 2
	"My next vacation cont." */
	
var gym = "Travis AFB Fitness Center",
    brother = "Jon",
    me = "Mike",
    exerciseRoutine = ["Bench Press", "Squat", "Shoulder Press", "Pull Ups"],
    minutesPerExercise = [15, 20, 10, 10],
    gymIsOpen = true;
    

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
	 var weightRoomIsOpen = true,
	     cardioRoomIsOpen = false 
    if ((gymIsOpen && weightRoomIsOpen) || cardioRoomIsOpen) {
    console.log(me + " and " + brother + " is gonna hit the weights!");
  } else {
    console.log("I guess we can run on the road.");
}
	 itsOn = (gymIsOpen && weightRoomIsOpen)
	 return itsOn;
};
weightRoom (brother, me);

//Number Function

//String Function

//Array Function
	
	
	

/*var exercises = ["Bench press", "Squat", "Shoulder press", "Pull-ups"],
		 minutesPerExercise = [15, 20, 10, 10];
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
