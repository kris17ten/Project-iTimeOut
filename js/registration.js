// JavaScript Document
//function for checking fellow Marshie
function storeMarshie () {
  //get all the values of the input fields
  var name = document.getElementById("nameInput").value;
  var username = document.getElementById("uNameInput").value;
  var email = document.getElementById("emailInput").value;
  var password = document.getElementById("passwordInput").value;
  var state = document.getElementById("state");
  
  //check for empty fields
  if(name == "" || username == "" || email == "" || password == "") {
    state.innerHTML = "Oops! Something's blank! Try again.";
  }
  //check if the username already exists
  else if(localStorage[username] !== undefined) {
    state.innerHTML = "Awww! This username already exists. Try again.";
  }
  //check for invalid email
  else if(email.indexOf("@") == -1 || email.indexOf("@") == 0 || email.indexOf(".", email.indexOf("@")) == -1 ||
    email.indexOf(".") == email.length - 1 || email.indexOf(".") == email.indexOf("@") + 1) {
    state.innerHTML = "Invalid email ID. Try again!";
  }
  //if everything worked, create a marshie (user)
  else {
    createAMarshie(name, username, email, password);
  }
}

//function for creating fellow Marshie
function createAMarshie(n, un, em, p) {
  //build empty object
  var marshie = {};
  //store user details in the object
  marshie.name = n;
  marshie.uName = un;
  marshie.email = em;
  marshie.password = p;
  marshie.avatar = document.getElementById("avatar")[document.getElementById("avatar").selectedIndex].value;
  //initiate score
  marshie.score = 0;
  //marshie created!  
  localStorage[marshie.uName] = JSON.stringify(marshie);
  state.innerHTML = "Awesome! Registration successful!";
}