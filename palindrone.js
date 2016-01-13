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