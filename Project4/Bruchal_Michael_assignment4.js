/*	Michael Bruchal
	18JULY2012
	Deliverable 4
	Library 
*/
var myLib = function () {
	
	//Does a string follow a 123-456-7890 pattern like a phone number?
	var isPhoneNumValid = function (phoneNumber) {							 //Method Function
		var phoneNumberCheck = /^\(?(\d{3})\)?[-]?(\d{3})[-]?(\d{4})$/;		//Regular Expression code
			return phoneNumberCheck.test(phoneNumber);					   //Returns Boolean
	};
	

	//Does a string follow an aaa@bbb.ccc pattern like a email address?
	/*var validateEmail = function (emailaddress) {};
	return isValid,

	//is the string a url? (Does it start with http: or https:?)
	var validateURL = function (url) {};
	return ,

	//Fuzzy-match a number: is the number above or below a number within a certain percent?
	var checkNumber = function (number) {};
	return ,

	//Find the number of hours or days difference between two dates.
	var calctotal = function (start, end) {};
	return total,

	//Find the smallest value in an array that is greater than a given number
	var arrayValue = function (smallest) {};
	return ,*/

	return {
		"isPhoneNumValid": isPhoneNumValid
	};

};

var myNewLib = myLib();

console.log (myNewLib.isPhoneNumValid(8083895768));	//Returns True









