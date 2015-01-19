// var victimNames = [];
// var victimNumbers = [];
// var victimAddresses = [];

var victims = [];
var volunteers = [];

var flag = true;
var i = 0;
while (flag){
  var name = prompt("What is the victim's name?", "John Snow");
  var phone = prompt("What is their number?", "888-888-8888");
  var street = prompt("What is their street?", "Spruce");

  victims[i] = {name: name, phone: phone, street: street};

  flag = confirm("Do you have another victim to add?");
  i++;
}

var flag2 = true;
var j=0;
while (flag2){
  var name = prompt("What is the volunteer's name?", "John Snow");
  var phone = prompt("What is their number?", "888-888-8888");
  var street = prompt("What is their street?", "Spruce");

  volunteers[j] = {name: name, phone: phone, street: street};

  flag2 = confirm("Do you have another volunteer to add?");
  j++;

}

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

