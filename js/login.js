// JavaScript Document
 
//check if registered
function checkIfReg() {
  //if on the rankings page, display rankings table
  var title = document.getElementById("title");
  if(title.innerHTML == "Rankings Page") {
    displayTable();
  }
  //if the user is logged in
  if(localStorage.loggedInUsrUName !== undefined) {
    var marshie = JSON.parse(localStorage[localStorage.loggedInUsrUName]);
    loggedIn();
  }
}
    
//try and get the login
function logIN() {
  //get username
  var userName = document.getElementById("uNameInput").value;
  var password = document.getElementById("passwordInput").value;
  var state = document.getElementById("logState");
  //check for empty fields
  if(userName == "" || password == "") {
    state.innerHTML = "Oops! Something's blank! Try again.";
  }
  //if not in localStorage
  else if(localStorage[userName] === undefined) {
    state.innerHTML = "Oops! I don't recognize you. Do you have an account?";
    return;
  }
  else {
    var marshie = JSON.parse(localStorage[userName]);
    //check password against username
    //matches
    if(password === marshie.password) {
      state.innerHTML = marshie.name + "logged in! Hurray!!";
      localStorage.loggedInUsrUName = marshie.uName;
      var contents = document.getElementById("contents");
      contents.innerHTML = "<img src='images/logoutpg.png' id='hello'>";
      loggedIn();
    }
    //else try again
    else {
      state.innerHTML = "Oops! Something's wrong. Please try again.";
    }
  }
  checkIfReg();
}

function loggedIn() {
  //once logged in, there's no need for registration and login
  var hi = document.getElementById("Login");
  //change to logout
  hi.innerHTML = "<a href='logout.html' class='threeD'>Logout<span hidden='true' class='threeDBox'><span class='front'>Logout</span><span class='back'>Logout</span></span></a>";
  var re = document.getElementById("Register");
  re.style.display = "none";
  //if on the home page or about page, change the quotes
  var title = document.getElementById("title");
  if(title.innerHTML == "Home Page" || title.innerHTML == "About Page") {
    changeQuote();
  }
  //if on the game page
  if(title.innerHTML == "Game Page") {
    //display user details
    var username = document.getElementById("loggedInUserName");
    var highscore = document.getElementById("loggedInHighScore");
    var rank = document.getElementById("loggedInRank");
    var avatar = document.getElementById("userAvatar");
    var marshie = JSON.parse(localStorage[localStorage.loggedInUsrUName]);
    username.innerHTML = marshie.uName;
    highscore.innerHTML = "High Score: " + marshie.score;
    var topScores = JSON.parse(localStorage.topScores);
    var currMarshie = JSON.parse(localStorage[localStorage.loggedInUsrUName]);
    var ranking = topScores.indexOf(currMarshie.uName);
    rank.innerHTML = "Rank: " + (ranking + 1);
    //if user doesn't exist in array
    if(ranking == -1) {
      rank.innerHTML = "Rank: UNRANKED";  
    }
    //find user's avatar
    if(marshie.avatar == "grumpster") {
      avatar.src="images/grumpster.png";
    }
    else if (marshie.avatar == "dok") {
      avatar.src="images/dok.png";
    }
    else if (marshie.avatar == "blushie") {
      avatar.src="images/blushie.png";
    }
    else if (marshie.avatar == "sneezie") {
      avatar.src="images/sneezie.png";
    }
    else if (marshie.avatar == "sillie") {
      avatar.src="images/sillie.png";
    }
    else if (marshie.avatar == "dozer") {
      avatar.src="images/dozer.png";
    }
    else if (marshie.avatar == "smiley") {
      avatar.src="images/smiley.png";
    }
  }
}

//log out
function logOut() {
  localStorage.loggedInUsrUName = undefined;
}
    
//array of quotes
var quoteArray = [
  "No matter how your heart is grieving, if you keep on believing, the dream that you wish will come true.",
  "Love is putting someone else’s needs before yours.",
  "The flower that blooms in adversity is the most rare and beautiful of them all.",
  "If you can’t say something nice, don’t say nothin’ at all.",
  "Ohana means family, and family means no one gets left behind or forgotten.",
  "The past can hurt. But the way I see it, you can either run from it, or learn from it.",
  "Ladies do not start fights, but they can finish them.",
  "You’re braver than you believe, and stronger than you seem, and smarter than you think.",
  "Our fate lives within us. You only have to be brave enough to see it.",
  "You must not let anyone define your limits because of where you come from. Your only limit is your soul.",
  "Even miracles take a little time.",
  "If you focus on what you left behind, you will never be able to see what lies ahead.",
  "You control your destiny. There are no magical shortcuts to solving your problems.",
  "A true hero isn't measured by the size of his strength, but by the strength of his heart.",
  "The problem is not the problem. The problem is your attitude about the problem.",
  "If you don't know where you want to go, then it doesn't matter which path you take.",
  "Your identity is your most valuable possession. Protect it.",
  "Being brave doesn't mean you go looking for trouble.",
  "Happiness is the richest thing we will ever own.",
  "Remember, you're the one who can fill the world with sunshine.",
  "The only predictable thing about life is its unpredictability."
];
  
//change quote
function changeQuote() {
  //pick a quote
  var quote = document.getElementById("quoteText");
  var num = Math.floor(Math.random() * quoteArray.length);
  quote.innerHTML = quoteArray[num];
}