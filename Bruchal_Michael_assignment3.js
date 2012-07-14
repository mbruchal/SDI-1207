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
          goal: [bench = 365, shoulderPress = 275, squat = 465, deadlift = 520],   //array
          records: [                   //object
                    {
                     bench: 315,
                     shoulderPress: 225,
                     squat: 365,
                     deadlift: 405,
                    }
                   ],
          train: function (workOutType) {     //Method Procedure
                 console.log ("Preparing for a BodyBuilding Competition in Northern California.");
                if (me.weight > 185) {        //Conditional
                    console.log ("I qualify for the Light Heavy Weight divison.");
                } else {
                     console.log ("I qualify for the Middle Weight Division.");
                  };    
                
          },
          getTickets: function (wallet) {     //Method Accessor
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
                      var cash = wallet + " bucks should be enough and still have change.";     //return string
                      return cash;
          },
          weightGoal: function (heavy, light) {   //Method Function
              while (me.weight <= 210) {
                console.log ("Eating more protein to make weight. " + me.weight + " pounds is not enough.");
                me.weight +=2;
              }; 
                  result = heavy + " is about right. " + light + " is too light.";
                  return result;
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
var weightWatch = me.weightGoal("215 Ibs.", "190 Ibs.");
console.log (weightWatch);



