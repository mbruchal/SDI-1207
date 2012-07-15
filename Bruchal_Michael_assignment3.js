/* Michael Bruchal
   10JULY2012
   Deliverable 3
*/

//Global Variables
var destination1 = "Sacramento",
    destination2 = "San Francisco",
    destination3 = "Berkley";

//Properties
var me = {
          name: "Mike",   //string
          male: true,       //boolean
          age: 32,          //number
          height: "6'0",
          weight: 195,
          goal: ["Bench: " + 365 + " Shoulderpress: " + 275 + " Squat: " + 465 + " DeadLift: " + 520],   //array
          records: [                   //object
                    {
                     bench: "315 Ibs.",
                     shoulderPress: "225 Ibs.",
                     squat: "365 Ibs.",
                     deadlift: "405 Ibs.",
                    }
                   ],
          train: function (workOutType) {     //Method Procedure, Argument Object
                 console.log ("Preparing for a BodyBuilding Competition in Northern California.");
                if (me.weight > 185) {        //Conditional
                    console.log ("I qualify for the Light Heavy Weight divison.");
                } else {
                     console.log ("I qualify for the Middle Weight Division.");
                  };    
                
          },
          getTickets: function (wallet) {     //Method Accessor, Argument Number
                var compOne = 75,
                    compTwo = 90,
                    compThree = 50;
                  if (wallet > compOne + compTwo + compThree) {     
                      console.log ("I got " + wallet + " dollars cash on hand and can try all three competitions.");
                      if (wallet < compTwo) {
                          console.log ("Maybe I'll try next year when I got more dineros.");
                      } else {
                          console.log ("I might just try one and save the extra cash.");
                        };
                  } else {
                      console.log ("Maybe I'll compete it just two competitions.");
                  }; 
                      var cash = wallet + " bucks should be enough. Now I can buy more food!";     //return string
                      return cash;
          },
          weightGoal: function (heavy, light) {     //Method Function, Argument String
              while (me.weight <= 210) {      //while loop
                console.log ("Eating more protein to make weight. " + me.weight + " pounds is not enough.");
                me.weight +=2;
              }; 
                  result = heavy + " is perfect. " + light + " was too light.";
                  return result;    //return string
          },
          changeGoal: function (newGoal) {     //Mutator Function, Array Argument
              var newGoal = ["Bench: " + 380 + ", Shoulderpress: " + 295 + ", Squat: " + 405 + ", Deadlift: " + 405];
              me.goal = newGoal
              return newGoal    //Return Array
          },
          startPlan: function () {
              console.log (exRoutine.exercisePlan["week1"]);
          }

};

//Output
me.train();
console.log ("Three different shows to choose from in " + destination1 + ", " + destination2 + ", and " + destination3 + ".");
var balance = me.getTickets(300);
console.log (balance);
console.log ("Got to reach my lift goal first.");
console.log ("My current records are....");
console.log (me.records);
console.log ("I am currently " + me.weight + " pounds and neet to be at 210.")
var weightWatch = me.weightGoal("210 Ibs.", "190 Ibs.");
console.log (weightWatch);
console.log ("My 1st goal plan - " + me.goal + ". Decided to change it up");
var revised = me.changeGoal();
console.log ("Change of plans to new goal - " + revised);
me.startPlan();




