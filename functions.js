//Write a function called 'tripleFive' which loops three times using a for 
//loop. Each iteration of the loop, output 'Five!' using console.log.
var tripleFive = function(){
	for(var i=0; i<3; i++){
		console.log("Five!");
	}
}

tripleFive();

//Write a function called 'lastLetter' which takes a single string argument 
//and returns the last character in the string.
var lastLetter = function(s){
	return s.substr(s.length-1);
}

console.log(lastLetter("hello"));
console.log(lastLetter("island"));

//Write a function called 'square' which takes a single argument which is a 
//number, and returns number * number.
var square = function(n){
	return n*n;
}

console.log(square(3));
console.log(square(5));

//Write a function called 'negate' which takes a single number argument and 
//returns the negative of that number.
var negate = function(n){
	return n*-1;
}

console.log(negate(5));
console.log(negate(-8));

//Write a function called 'toArray' which takes three arguments and returns an 
//array with each of those arguments as items.
var toArray = function(one, two, three){
  var array = [];
  array.push(one);
  array.push(two);
  array.push(three);
  return array;
}

console.log(toArray(1, 4, 5));
console.log(toArray(8, 9, 10));

//Write a function called 'startsWithA' which takes a single string argument 
//and returns true if the given string's first letter is 'A' and false otherwise.
var starsWithA = function(s){
  return s.charAt(0).toUpperCase() === "A"
}

console.log(starsWithA("aardvark"));
console.log(starsWithA("bear"));


//Write a function called 'excite' which takes a single string argument and 
//returns the given string plus three exclamation marks.
var excite = function(s){
  return s + "!!!";
}

console.log(excite("yes"));
console.log(excite("go"));


//Write a function called 'sun' which takes a single string argument and 
//returns true if the string contains the word 'sun' within it.
var sun = function(s){
  return s.indexOf("sun") > -1;
}

console.log(sun("sundries"));
console.log(sun("asunder"));
console.log(sun("catapult"));


//Write a function called 'tiny' which takes a single number argument and 
//returns true if the number is between 0 and 1.
var tiny = function(n){
  return 0 < n  && n < 1;
}

console.log(tiny(0.3));
console.log(tiny(14));
console.log(tiny(-5));


// Write a function called 'getSeconds' which takes a single string argument 
// in the format 'MM:SS' (hours, minutes, and seconds) and returns the total 
// number of seconds represented by that timespan.
var getSeconds = function(s){
  var minutes = Number(s.substr(0,2));
  var seconds = Number(s.substr(3));
  return minutes * 60 + seconds;
}

console.log(getSeconds("01:30"));
console.log(getSeconds("10:25"));