/* Michael Bruchal
	04JULY2012
	Deliverable 2
	"My next vacation cont." */
	
var exercises = ["Bench press", "Squat", "Shoulder press", "Pull-ups"],
		 minutesPerExercise = [15, 20, 10, 10];
for (var burnIt = 0; burnIt < exercises.length; burnIt++) {
		var exercise = exercises[burnIt],
		 minutesThisExercise = minutesPerExercise[burnIt];
		console.log("Lets do the " + exercise + " for " + minutesThisExercise + " minutes.");
		for (var minutes = 0; minutes < minutesThisExercise; minutes +=5) {
		 var minutesRemain = minutesThisExercise - minutes;
		console.log(minutes + " done, " + minutesRemain + " to go!");
		}
		console.log("We have reached muscle failure!");
}
