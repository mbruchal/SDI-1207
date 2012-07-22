/*	Michael Bruchal
	18JULY2012
	Deliverable 4
	Library 
*/
var myLib = function () {
	
	//Does a string follow a 123-456-7890 pattern like a phone number?
	var isPhoneNumValid = function (phoneNumber) {							 //Method Function
		var phoneNumberCheck = /^\(?(\d{3})\)?[-]?(\d{3})[-]?(\d{4})$/;		//RegEx code	/^\(?= First character can start with "("	(\d{3})= number must start with 3 digits	\)? = can have a ")" after the 3 digits	 [-]?= can have a hyphen after first 3 digits also 	(\d{3})= must have 3 more digits after first 3	[-]?= after the previous 3 digits may conatin a hyphen	(\d{4})$/= the phone number must end with 4 digits
			return phoneNumberCheck.test(phoneNumber);					   //Returns Boolean
	};
	

	//Does a string follow an aaa@bbb.ccc pattern like a email address?
	var isEmailValid = function (emailAddress) {											//Method Function
		var emailCheck = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z]){2,4}$/;   	   //RegEx code		/^([a-zA-Z0-9_.-])+= Must begin with alpha numeric characters upper and lower case, may have underscore, period, or hyphen	@= email must contain a @ right after	([a-zA-Z0-9_.-])+= must have alpha numeric upper and lower case, underscore, period, or hyphen	\.= after the last group must have a period		([a-zA-Z]){2,4}$/= after the period can have up to a 4 letter combo upper and lower case {2,4} = means 2 char min 4 char max
			return emailCheck.test(emailAddress);										  //Returns Boolean
	};
	
	//is the string a url? (Does it start with http: or https:?)
	var isUrlValid = function (url) {											//Mthod Function
		var urlCheck = /^(http[s]?:\/\/){0,1}([a-zA-Z]{2,5})[\.]{0,1}/;		   //RegEx code		/^(http[s]?:\/\/)= first character block must begin with a http or https followed by 2 forward slashes,  {0,1}([a-zA-Z]{2,5})[\.]{0,1}= must be followed with character blocks upper and lower case min of 2 and max of 5 seperated by periods.
			if (urlCheck.test(url) === true) {								  //Conditional
				console.log ("The following '" + url + "' is a valid url.");
					if (url.charAt(4) === "s") {							 //Nested Conditional
						console.log ("This url starts with 'https'.");
					} else {
						console.log ("This url starts with 'http'.");      
					  }
			};
	};

	//Format a number to use a specific number of decimal places, as for money: 2.1 → 2.10
	var numFormat = function (number) {														//Method Function
		var moveDecimal = number.toFixed(2);											   //Local Variable
			return moveDecimal;															  //Return Number
	};

	//Find the number of hours or days difference between two dates.
	var dayDifference = function (year, month, day) {							//Method Function
		var date1 = new Date(),												   //Local Variables
			date2 = new Date(year, month, day),
			difference = date2 - date1,
			minutes = difference / 60000,
			hours = minutes / 60,
			days = Math.floor (hours / 24);
				return days;												//Return String
	};
	
	//Given a string version of a number such as "42", return the value as an actual Number, such as 42.
	var changeNumber = function (stringNumber) {								//Method Function
		var realNum = parseFloat(stringNumber);								   //Local Variable
			return realNum;													  //Return Number
	};
	//Find the smallest value in an array that is greater than a given number
	//var arrayValue = function (smallest) {};
	//return ,*/

	return {
		"isPhoneNumValid" : isPhoneNumValid,
		"isEmailValid"    : isEmailValid,
		"isUrlValid"      : isUrlValid,
		"numFormat"       : numFormat,
		"dayDifference"   : dayDifference,
		"changeNumber"    : changeNumber
	};

};

var myNewLib = myLib();

console.log ("Phone number is " + myNewLib.isPhoneNumValid(8083895768));	
console.log ("Email address is " + myNewLib.isEmailValid("combatvet100.442@gmail.com"));	
myNewLib.isUrlValid("http://forum.xda-developers.com");
console.log (myNewLib.changeNumber("42"));
console.log (myNewLib.numFormat(2.1));
console.log (myNewLib.dayDifference(2012, 9, 31));




