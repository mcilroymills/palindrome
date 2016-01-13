/***********************************************************************
* Author: Mills McIlroy
* Date: January 13, 2016
* Description: This function performs according to these requirements:
*	1) Takes a single argument, a string
*	2) Returns true or false if the word is a palindrome
*	3) Ignores spaces and capitalization of the words
************************************************************************/

function palindromeChecker (string) {

	string = string.toUpperCase();
	var newString = "";
	for (var i = string.length - 1; i >= 0; i--) {
		newString += string[i];  
	}
	newString = newString.replace(/\s+/g, '');//Removes whitespace
	string = string.replace(/\s+/g, '');//Removes whitespace

	return newString === string;//Returns true if palindrome

}

console.log(palindromeChecker("A nut for a jar of tuna"));//Returns true
console.log(palindromeChecker("not a palindrone"));//Returns false