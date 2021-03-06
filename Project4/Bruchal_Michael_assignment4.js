/*	Michael Bruchal
	18JULY2012
	Deliverable 4
	Library 
*/
var myLib = function () {
	
	//#1 Does a string follow a 123-456-7890 pattern like a phone number?
	var isPhoneNumValid = function (phoneNumber) {							 //Method Function
		var phoneNumberCheck = /^\(?(\d{3})\)?[-]?(\d{3})[-]?(\d{4})$/;		//RegEx code	/^\(?= First character can start with "("	(\d{3})= number must start with 3 digits	\)? = can have a ")" after the 3 digits	 [-]?= can have a hyphen after first 3 digits also 	(\d{3})= must have 3 more digits after first 3	[-]?= after the previous 3 digits may conatin a hyphen	(\d{4})$/= the phone number must end with 4 digits
			return phoneNumberCheck.test(phoneNumber);					   //Returns Boolean
	};
	

	//#2 Does a string follow an aaa@bbb.ccc pattern like a email address?
	var isEmailValid = function (emailAddress) {											//Method Function
		var emailCheck = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.\w([a-zA-Z]){2,4}$/;   	   //RegEx code		/^([a-zA-Z0-9_.-])+= Must begin with alpha numeric characters upper and lower case, may have underscore, period, or hyphen	@= email must contain a @ right after	([a-zA-Z0-9_.-])+= must have alpha numeric upper and lower case, underscore, period, or hyphen	\.= after the last group must have a period		([a-zA-Z]){2,4}$/= after the period can have up to a 4 letter combo upper and lower case {2,4} = means 2 char min 4 char max
			return emailCheck.test(emailAddress);										  //Returns Boolean
	};
	
	//#3 is the string a url? (Does it start with http: or https:?)
	var isUrlValid = function (url) {											 //Mthod Function
		var urlCheck   = /^(http[s]?:\/\/){0,1}([a-zA-Z]{2,5})[\.]{0,1}/,		//RegEx code	/^(http[s]?:\/\/)= first character block must begin with a http or https followed by 2 forward slashes,  {0,1}([a-zA-Z]{2,5})[\.]{0,1}= must be followed with character blocks upper and lower case min of 2 and max of 5 seperated by periods.
		    urlChecker = "The following url is " + urlCheck.test(url),		   //Local Variable
		    notValid   = "The following url is not valid.",
		    https      = " and starts with https.",
		    http       = " and starts with http.";
		    if (urlCheck.test(url) === false) {								  //Conditional
				return notValid;											 
			};
				if (url.charAt(4) === "s") {							    //Conditional
					return urlChecker + https;							   //Return String
				} else {
					 return urlChecker + http;
				  };	 	
	};

	//#4 Format a number to use a specific number of decimal places, as for money: 2.1 → 2.10
	var numFormat = function (number) {														//Method Function
		var moveDecimal = number.toFixed(2);											   //Local Variable
			return moveDecimal;															  //Return Number
	};

	//#5 Find the number of hours or days difference between two dates.
	var dayDifference = function (year, month, day) {							//Method Function
		var date1      = new Date(),										   //Local Variable
			date2      = new Date(year, month, day),
			difference = date2 - date1,
			minutes    = difference / 60000,
			hours      = minutes / 60,
			days       = Math.floor (hours / 24);
			return days;														//Return String
	};
	
	//#6 Given a string version of a number such as "42", return the value as an actual Number, such as 42.
	var changeToNumber = function (stringNumber) {								//Method Function
		var realNum = parseFloat(stringNumber);								   //Local Variable
			return realNum;													  //Return Number
	};

	//#7 Find the smallest value in an array that is greater than a given number
	var arrayValue = function (number) {										//Method Function
		var array = [10, 15, 20, 25, 30, 35, 40, 45, 50],					   //Local Variable
		  minimum = Math.max.apply(Math, array);							  			
		  	for (i = 0; i < array.length; i++) {							  //For loop
		  		if (array[i] > number) {									 //Math
		  			if (array[i] < minimum) {								//Nested Conditional
		  				minimum = array[i];
		  			};
		  		};
		  	}; 
		return minimum;													   //Return Number
	};
	//#8 Find the total value of just numbers in a array even if some of the items are not numbers.
	var arrayNumVal = function (arrayNumberValue) {													//Method Function
		var total = 0;																				//Local Variable
		for (var i = 0; i < arrayNumberValue.length; i++) {											//For loop
			if (isNaN(arrayNumberValue[i]) === false) {												//Conditional
				total = total + arrayNumberValue[i];
			}
		}
		return total;																				//Return Number
	};
	//#9 Title-case a string (split into words, then uppercase the first letter of each word)
	var upperCase = function (string) {															//Method Function
		var lower    = string.toLowerCase(); 
		var modified = lower.replace(/^(.)|\s(.)/g, function($1) {return $1.toUpperCase();});	//Local variable / Regular Expression code
		return modified;																		//Return String
	};
	//Return Object
	return {
		"isPhoneNumValid" : isPhoneNumValid,
		"isEmailValid"    : isEmailValid,
		"isUrlValid"      : isUrlValid,
		"numFormat"       : numFormat,
		"dayDifference"   : dayDifference,
		"changeToNumber"  : changeToNumber,
		"arrayValue"      : arrayValue,
		"arrayNumVal"     : arrayNumVal,
		"upperCase"       : upperCase
	};
};

var myNewLib = myLib();

console.log ("Phone number is " + myNewLib.isPhoneNumValid(8087798078));	
console.log ("Email address is " + myNewLib.isEmailValid("combatvet100.442@gmail...com"));	
console.log (myNewLib.isUrlValid("http://forum.xda-developers.com"));
console.log (myNewLib.numFormat(2.1));
console.log (myNewLib.dayDifference(2013, 00, 21));
console.log (myNewLib.changeToNumber("42"));
console.log (myNewLib.arrayValue(40));
console.log (myNewLib.arrayNumVal([100, "bills", 200, "large", 300, "big ones"]));
console.log (myNewLib.upperCase("i want to be a recognized developer."));

//<============================Makeup Points (Does not apply unless I have 10 working functions)==================================>

//Makeup: Nested if statement in Deliverable 1

/*var firstClass = true;
var delayed = false;

if (firstClass === true) {
	console.log ("This is gonna be a nice ride.");
	if (delayed === false) {
		console.log ("This airlines is always on time.");
	} else {
		console.log ("Thats wierd this airlines is always on time.");
	};
} else {
	console.log ("I guess its the back of the plane for me.");
};

//Makeup: Missing the required array method such as push in Deliverable 2

var myKids = [];
myKids.push("Makaio", "Makaelyn", "Makana");
console.log (myKids);*/














