// var victimNames = [];
// var victimNumbers = [];
// var victimAddresses = [];

var victims = [];
var volunteers = [];

var numVictims = prompt("How many victims?", "1? 2? 200?");

for(var i=0; i<numVictims; i++){
  var name = prompt("What is their name?", "John Snow");
  // victimNames.push(name);
  
  var phone = prompt("What is their number?", "888-888-8888");
  // victimNumbers.push(phone);

  var street = prompt("What is their street?", "Spruce");
  // victimAddresses.push(street);

  victims[i] = {name: name, phone: phone, street: street};
}

var numVolunteers = prompt("How many volunteers?", "1? 2? 200?");

for(var i=0; i<numVolunteers; i++){
  var name = prompt("What is their name?", "John Snow");
  // victimNames.push(name);
  
  var phone = prompt("What is their number?", "888-888-8888");
  // victimNumbers.push(phone);

  var street = prompt("What is their street?", "Spruce");
  // victimAddresses.push(street);

  volunteers[i] = {name: name, phone: phone, street: street};
}

console.log(victims);

console.log(victims.length);

var victimsList = "";

for (var i=0; i < victims.length; i++){
  victimsList += victims[i].name + "\n";
}

var volunteersList = "";

for (var i=0; i < volunteers.length; i++){
  volunteersList += volunteers[i].name + "\n";
}


alert("There are " + victims.length + " victims.\n" +
      "There are " + volunteers.length + " volunteers.\n" + 
      "The victims are: " + victimsList + 
      "The volunteers are: " + volunteersList);