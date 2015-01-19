var tripleFive = function(){
	for(var i=0; i<3; i++){
		console.log("Five!");
	}
}

tripleFive();


var lastLetter = function(s){
	return s.substr(s.length-1);
}

console.log(lastLetter("hello"));
console.log(lastLetter("island"));

var square = function(n){
	return n*n;
}

console.log(square(3));
console.log(square(5));


var negate = function(n){
	return n*-1;
}

console.log(negate(5));
console.log(negate(-8));


var toArray = function(one, two, three){
  var array = [];
  array.push(one);
  array.push(two);
  array.push(three);
  return array;
}

console.log(toArray(1, 4, 5));
console.log(toArray(8, 9, 10));


var starsWithA = function(s){
  return s.charAt(0).toUpperCase() === "A"
}

console.log(starsWithA("aardvark"));
console.log(starsWithA("bear"));


var excite = function(s){
  return s + "!!!";
}

console.log(excite("yes"));
console.log(excite("go"));


var sun = function(s){
  return s.indexOf("sun") > -1;
}

console.log(sun("sundries"));
console.log(sun("asunder"));
console.log(sun("catapult"));


var tiny = function(n){
  return 0 < n  && n < 1;
}

console.log(tiny(0.3));
console.log(tiny(14));
console.log(tiny(-5));


var getSeconds = function(s){
  var minutes = Number(s.substr(0,2));
  var seconds = Number(s.substr(3));
  return minutes * 60 + seconds;
}

console.log(getSeconds("01:30"));
console.log(getSeconds("10:25"));