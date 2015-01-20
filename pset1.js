var letterCapitalize = function(s){
	var array = s.split(" ");
	var result = []
	for(var i=0; i<array.length; i++){
		var word = array[i];
		word = word.charAt(0).toUpperCase() + word.substr(1);
		result.push(word);
	}
	return result.join(" ");
}

console.log(letterCapitalize("this long sentence here"));
console.log(letterCapitalize("hello Hello HELLO hEllo hello"));


var wordCount = function(s){
	var array = s.split(" ");
	return array.length;
}

console.log(wordCount("count the number of words"));
console.log(wordCount("this sentence has many many many many many many words"));


var primeTime = function(n){
	// numbers are prime if they are only divisible by 1 and themselves
	var flag = true;

	if(n<1){
		return false;
	}

	for(var i=2; i<n; i++){
		if(n % i == 0){
			flag = false
		}
	}

	return flag;
}

console.log(primeTime(-22));
console.log(primeTime(508));
console.log(primeTime(521));