var isNumber = function(n) {
 return !isNaN(parseFloat(n)) && isFinite(n);
};


var number = prompt(  "Enter your phone number using the following format:", 
                      "888-888-8888");
alert(number.charAt(3) == "-" && number.charAt(7) == "-");

var birthdate = prompt (  "Enter your birthdate using the following format:",
                          "MM/DD/YYYY");
alert(birthdate.charAt(2) == "/" && birthdate.charAt(5) == "/");

var postalCode = prompt ( "Enter your postal code using the following format:",
                          "80808 or 80808-8080");
alert((isNumber(postalCode) && postalCode.length == 5) || postalCode.charAt(5) == "-");

var state = prompt ( "Enter your state, abbreviated:", "CA");
alert(state.length == 2 && state === state.toUpperCase());

var married = prompt ( "Are you married?", "Yes or no");
alert(married.toUpperCase() === "YES" || married.toUpperCase() === "NO");



