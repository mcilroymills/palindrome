/***********************************************************************
* Author: Mills McIlroy
* Date: January 13, 2016
* Description: This function performs according to these requirements:
*	1) Takes a single argument, a string
*	2) Returns true or false if the word is a palindrome
*	3) Ignores spaces and capitalization of the words
************************************************************************/


function stringReverse (string) {

	string = string.toUpperCase();
	var newString = "";
	for (var i = string.length - 1; i >= 0; i--) {
		newString += string[i]; 
	}
	newString = newString.replace(/\s+/g, '');
	string = string.replace(/\s+/g, '');

	if (newString === string)
		return true;
	else
		return false;
}

console.log(stringReverse("A nut for a jar of tuna"));
console.log(stringReverse("not a palindrone"));