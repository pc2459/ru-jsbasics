var input = prompt("Enter any word:","Any word at all...");

var length = input.length;
var thirdChar = input.charAt(3);
var lower = input.toLowerCase();
var upper = input.toUpperCase();
var substring = input.substring(1,4);

alert(	"You entered: " + input + "\n" +
		"There are " + length + " characters in the word. \n" +
		"The third character is '" + thirdChar + "'\n" +
		"Lowercase: " + lower + "\n" +
		"Uppercase: " + upper + "\n" + 
		"Example: I want to eat a " + input + " right now. \n" + 
		"Subword: " + substring);