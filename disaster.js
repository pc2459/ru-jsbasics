// Store victims and volunteers in arrays
var victims = [];
var volunteers = [];

// Use while loop to prompt users for victims
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

// Use while loop to prompt user for volunteers
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

// Build victims and volunteers list to print to alert
var victimsList = "";

for (var i=0; i < victims.length; i++){
  victimsList += victims[i].name + "\n";
}

var volunteersList = "";

for (var i=0; i < volunteers.length; i++){
  volunteersList += volunteers[i].name + "\n";
}

// Alert the user
alert("There are " + victims.length + " victims.\n" +
      "There are " + volunteers.length + " volunteers.\n" + 
      "The victims are: " + victimsList + 
      "The volunteers are: " + volunteersList);

// Prompt user for name of person in need

var personInNeed = prompt("Enter name of a person in need:", "John Snow");

// Find the victim
var found = 0;
for(i=0;i<victims.length;i++){
  if(victims[i].name === personInNeed){
    found = i;
  }
}

// Build a list of volunteers on the same street
var sameStreetList = "";

for(j=0;j<volunteers.length;j++){
  if(victims[found].street === volunteers[j].street){
    sameStreetList += volunteers[j].name + "\n";
  }
}

// Alert the user
alert("The following volunteers are on the same street as " + personInNeed + ":\n" 
        + sameStreetList);