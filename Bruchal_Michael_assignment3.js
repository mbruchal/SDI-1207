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
          status: ["Employed", "Student", "Married"],    //array
          records: [                   //object
                    {bench: 315,
                     shoulderPress: 225,
                     squat: 365,
                     deadlift: 405,
                    }
                   ],
          train: function (workOutType) {     //Method Procedure
                 console.log ("Preparing for a BodyBuilding Competition in Northern California.");
          },
          getTickets: function (wallet) {     //Method Accessor
                var compOne = 75,
                    compTwo = 90,
                    compThree = 50;
                  if (wallet > compOne + compTwo + compThree) {     //Math
                      console.log ("I got " + wallet + " dollars cash on hand.");
                  } else {
                      console.log ("I can only compete in one competition.")
                    } 
                      var cash = "I can compete in all three.";     //return string
                      return cash;
          }
};

me.train();
console.log ("Three different shows to choose from in " + destination1 + ", " + destination2 + ", and " + destination3 + ".");
var balance = me.getTickets(300);
console.log (balance);





