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
          motivated: true,       //boolean
          age: 32,          //number
          height: "6'0",
          weight: 195,
          goal: ["Bench: " + 365 + ", Shoulderpress: " + 275 + ", Squat: " + 465 + ", DeadLift: " + 520],   //array
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
          mentalPrep: function (willing, tired) {   //method function, Argument Boolean
              if ((me.motivated && willing) || tired) {
                console.log ("Time to start eating clean.");
              } else {
                  console.log ("I'll just goof around in " + destination1 + ", " + destination2 + ", and " + destination3 + " instead.");
                };
                return true;    //return Boolean
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
                console.log ("Eating more protein to make weight. " + me.weight + " pounds and counting....");
                me.weight +=2;
              }; 
                  result = heavy + " is perfect. " + light + " was too light.";
                  return result;    //return string
          },
          changeGoal: function (newGoal) {     //Mutator Function, Argument Array
              var newGoal = ["Bench: " + 380 + ", Shoulderpress: " + 295 + ", Squat: " + 405 + ", Deadlift: " + 405 + "."];
              me.goal = newGoal
              return newGoal    //Return Array
          },
          startPlan: function () {    //Method Function, json data, return object
              layout = exRoutine.exercisePlan[0];
                return layout;
          },
          schedule: function () {     //Method Function, 
            var weeks = 4,
                off = 0;
              for (var i = 0; i < weeks; i++) {   //For Loop
                var weeksRemain = weeks - i;
                  console.log (i + " weeks down. " + weeksRemain + " weeks to go.");
                    for (var sessions = 4; off < sessions; sessions--) {    //Nested Loop
                      var sessionsRemain = sessions - off;
                      console.log (sessionsRemain + " more trips to the gym.");
                      
                    };
              };
          }

};

//Output
me.train();
console.log ("Three different shows to choose from in " + destination1 + ", " + destination2 + ", and " + destination3 + ".");
var balance = me.getTickets(300);
console.log (balance);
me.mentalPrep(true, false);
console.log ("Got to reach my lift goal first.");
console.log ("My current records are....");
console.log (me.records);
console.log ("I am currently " + me.weight + " pounds and need to be at 210.")
var weightWatch = me.weightGoal("210 Ibs.", "190 Ibs.");
console.log (weightWatch);
console.log ("My 1st goal plan - " + me.goal + ".");
var revised = me.changeGoal();
console.log ("Change of plans to new goal - " + revised);
console.log ("My plan of attack is as follows: ");
var displayPlan = me.startPlan();
console.log (displayPlan);
console.log ("Here we go.....")
me.schedule();
console.log ("All done. ")


