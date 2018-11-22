// JavaScript Document
//INTRO VIDEO ELEMENT
//play the video when user clicks on "play intro" button
function myFunction() {
  //play video
  var vid = document.getElementById("introVideo");
  vid.play();
  //event listener for when video stops
  vid.addEventListener("ended", function() {setTimeout (myEnd, 1000);}, false);
  random();
  //hide all buttons
  var but = document.getElementById("playIntro");
  but.style.display = "none";
  var but1 = document.getElementById("skipToGame");
  but1.style.display = "none";
  var but2 = document.getElementById("skipToTutorial");
  but2.style.display = "none";
}

//option to skip through the video after 10 seconds
function mySkip() {
  //setting time to after video
  var vid = document.getElementById("introVideo");
  vid.currentTime = 240;
  myEnd();
  }

//after the video ends
function myEnd() {
  var vid = document.getElementById("introVideo");
  var fin = document.getElementById("videoo");
  var gap = document.getElementById("gap");
  var butt = document.getElementById("skipIntro");
  butt.style.display = "none";
  vid.style.display = "none";
  //remove the video element
  gap.removeChild(fin);
}            

//display the skip button after 10 seconds
function random() {
  var butt = document.getElementById("skipIntro");
  setTimeout(function() {butt.style.display = "block";}, 10000);   
}

//TUTORIAL
//skips right to the game instead of going through the intro and 'how to play'
function skipToGame() {
  //remove video div
  var fin = document.getElementById("videoo");
  var gap = document.getElementById("gap");
  gap.removeChild(fin);
  //remove tutorial div
  var out = document.getElementById("gap");
  var tBack = document.getElementById("tutorial");
  out.removeChild(tBack);
}

//viewing the tutorial, go to next pic
function goNext() {
  var tBack = document.getElementById("tutorial");
  if(tBack.style.backgroundImage == 'url("images/tutorial1.png")') {
    tBack.style.background = "url(images/tutorial2.png)";  
  }
  else if(tBack.style.backgroundImage == 'url("images/tutorial2.png")') {
    tBack.style.background = "url(images/tutorial3.png)";  
  }
  else if(tBack.style.backgroundImage == 'url("images/tutorial3.png")') {
    tBack.style.background = "url(images/tutorial4.png)";  
  }
  //if you're on the final pic, remove the element
  else {
    var out = document.getElementById("gap");
    var tBack = document.getElementById("tutorial");
    out.removeChild(tBack); 
  }
}

//viewing the tutorial, go to previous pic
function goBack() {
  var tBack = document.getElementById("tutorial");
  if(tBack.style.backgroundImage == 'url("images/tutorial4.png")') {
    tBack.style.background = "url(images/tutorial3.png)";  
  }
  else if(tBack.style.backgroundImage == 'url("images/tutorial3.png")') {
    tBack.style.background = "url(images/tutorial2.png)";  
  }
  else if(tBack.style.backgroundImage == 'url("images/tutorial2.png")') {
    tBack.style.background = "url(images/tutorial1.png)";  
  }
  //if you're on the first pic, do nothing
  else {
    return;
  }
}

//GAME
//All word arrays
//six categories -> colours, fruits, countries, months, time_of_day, animals
//main array
var wordArray = [
  //colours
  ["PINK", "BLUE", "RED", "GREEN", "ORANGE", "YELLOW", "BLACK", "WHITE", "VIOLET", "INDIGO", "BROWN", "PURPLE"],  
  //fruits 
  ["MANGO", "APPLE", "PEAR", "BLUEBERRY", "GRAPES", "LEMON", "KIWI", "LIME", "PUMPKIN", "ORANGE"],
  //countries
  ["ICELAND", "GERMANY", "ITALY", "PARIS", "PORTUGAL", "CHINA", "JAPAN", "INDIA", "EGYPT", "RUSSIA", "MAURITIUS"],
  //months
  ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "OCTOBER", "NOVEMBER"],
  //time
  ["MORNING", "NOON", "DUSK", "EVENING", "DAWN", "SUNSET", "NIGHT", "SUNRISE", "TWILIGHT", "AFTERNOON"],
  //animal
  ["DOG", "CAT", "MONKEY", "HAMSTER", "SNAKE", "BIRD", "TURTLE", "PIG", "MOUSE", "RAT", "LIZARD", "PARROT", "SQUIRREL"]    
];


//pick a word from the wordArray 
var num1 = Math.floor(Math.random() * wordArray.length);
var num = Math.floor(Math.random() * wordArray[num1].length);
var word = wordArray[num1][num];

//when you click on the "Play Game"        
function randFunction() {
  //checks if you are logged in
  var username = document.getElementById("loggedInUserName");
  if(localStorage.loggedInUsrUName !== undefined) {
    if(localStorage.loggedInUsrUName !== "undefined") {
      //make play button disappear
      var pButton = document.getElementById("play");
      pButton.style.display = "none";
      //refresh the questions
      questions = 0;
      //set the score to 0
      score = 0;
      //make everything to do with the game visible
      document.getElementById("wordDisplay").style.visibility = "visible";
      document.getElementById("gameScreen").style.background = "url(images/gameBack.png)";
      document.getElementById("timerLoc").style.visibility = "visible";
      document.getElementById("scoreLoc").style.visibility = "visible";
      document.getElementById("characterAnimXLoc").style.visibility = "visible";
      document.getElementById("onScreenKeys").style.visibility = "visible";
      //start timer
      timerRun();
      //run the game
      runGame();
    }
    //you have to login to play
    else {
      alert("You have to login to play.");
    } 
  }
  else {
    alert("You have to login to play.");
  }
}

//replay game
function replay() {
  //check if user has logged in
  var username = document.getElementById("loggedInUserName");
    if(localStorage.loggedInUsrUName !== undefined) {
      if(localStorage.loggedInUsrUName !== "undefined") {
        //set questions to 0
        questions = 0;
        //set score to 0
        score = 0;
        //undo any changes that could've been changed during the game
        var scoreID = document.getElementById("scoreVal");
        scoreID.innerHTML = "___";
        var gs = document.getElementById("endDiv");
        var eV = document.getElementById("endVideo");
        gs.removeChild(eV);
        gs.style.zIndex = "-1";
        var webcam = document.getElementById("webcam");
        webcam.src = "images/calm.png";
        //change the word
        num1 = Math.floor(Math.random() * wordArray.length);
        num = Math.floor(Math.random() * wordArray[num1].length);
        word = wordArray[num1][num];
        //show the play
        var pButton = document.getElementById("play");
        pButton.style.display = "block";
        //hide the replay
        document.getElementById("replay").style.display = "none";
        //set the background to desktop(initial screen)
        document.getElementById("gameScreen").style.background = "url(images/desktop.png)";
        //hide previous score details
        var scoreDeets = document.getElementById("scoreDetails");
        scoreDeets.style.visibility = "hidden";
        var scorePara = document.getElementById("scorePara");
        scorePara.innerHTML = "";
    }
  }
}

    
//ask question for game
//the hint
function giveMeAHint() {
  var hintPara = document.getElementById("hint");
  if(num1 == 0) {
    hint.innerHTML = "What is your favourite colour?";
  }
  else if(num1 == 1) {
    hint.innerHTML = "What is your favourite fruit?";
  }
  else if(num1 == 2) {
    hint.innerHTML = "Which country were you born in?";
  }
  else if(num1 == 3) {
    hint.innerHTML = "What month were you born in?";
  }
  else if(num1 == 4) {
    hint.innerHTML = "What is your favourite time of day?";
  }
  else {
    hint.innerHTML = "What was your first pet?";
  }
}
    
//timer
//initial variables
var inPosition;
var speed = 0.5;
var timer;

function timerRun() {
  inPosition = 1;
  var timerDiv = document.getElementById("timer");
  timerDiv.style.width = inPosition + "px";  
  timer = setInterval(moveLine, 50);
}

//moving the timer... game limit is 1 minute..      
function moveLine() {
  //the webcam character change
  showCharacter();
  //make the timer change
  var timerDiv = document.getElementById("timer");
  if(inPosition < 700) {
    inPosition = inPosition + speed;
    timerDiv.style.width = inPosition  + "px";
  }
  //else game over!
  else {
    clearInterval(timer);
    winState();
    registerScore();
  }
}

//character animation -> webcam thingie... id="webcam"
function showCharacter() {
  var webcam = document.getElementById("webcam");
  var timerDiv = document.getElementById("timer");
  if(inPosition >= 600) {
    webcam.src = "images/sweating.png";    
  }
  else if(inPosition >= 400) {
    webcam.src = "images/freaking.png";
  }  
}
    
//on screen keyboard work
var lettersArray = [];
function clickButton(alph) {
  //if play is on
  var pButton = document.getElementById("play");
  if (pButton.style.display == "none") {
    //get button clicked
    var alphaClickd = document.getElementById(alph);
    //used letters
    var used = document.getElementById("lettersUsed");
    used.innerHTML = lettersArray;
    //call compare word
    compareWord(alph);
  }
}
    
//compare word to answer
function compareWord(alph) {
  var alphaClickd = document.getElementById(alph);
  //if letter is not in use, put it in the letters used array
  if(lettersArray.indexOf(alph) == -1) {
    lettersArray.push(alphaClickd.value);
  }
  var str = word;
  var lettArray = [];
  //find all possible indexes of a letter
  while(str.indexOf(alph) != -1) {
    var pos = str.indexOf(alph);
    lettArray.push(pos);
    str = str.substr(pos + 1);
  }
  //put the letter into all places
  for(i=0; i < lettArray.length; i++) {
    var spanID = document.getElementById(lettArray[i]);
    spanID.innerHTML = alph;
    for (i=1; i < lettArray.length; i++) {
      var newe = lettArray[i] + lettArray[i-1] + 1;
      var spanID = document.getElementById(newe);
      spanID.innerHTML = alph;
    }
  }   
}

//when do you win or lose?
var state = "";
function winState() {
  clearInterval(timer);
  var timerDiv = document.getElementById("timer");
  bonus = Math.floor(700 - inPosition) + 10;
  if(questions == 5 && timerDiv.style.width != "700px") {
    score += bonus;
  }
  if (timerDiv.style.width < "700px") {
    //if you win, then...
    state = "win";
    var scoreID = document.getElementById("scoreVal");
    scoreID.innerHTML = score;
    setTimeout(refreshGame(), 2000);
    return;
  }
  else {
    //you lose, so...
    state = "lose";
    var scoreID = document.getElementById("scoreVal");
    scoreID.innerHTML = score;
    setTimeout(refreshGame(), 2000); 
    return;
  }                      
}

//refresh game
function refreshGame() {
  //reset score
  var scoreID = document.getElementById("scoreVal");
  scoreID.innerHTML = score;
  var guess = document.getElementById("guess");
  guess.innerHTML = null;
  document.getElementById("lettersUsed").innerHTML = null;
  registerScore();
  storeScore();
  document.getElementById("timerLoc").style.visibility = "hidden";
  document.getElementById("scoreLoc").style.visibility = "hidden";
  document.getElementById("characterAnimXLoc").style.visibility = "hidden";
  document.getElementById("onScreenKeys").style.visibility = "hidden";
  document.getElementById("wordDisplay").style.visibility = "hidden";
  var gs = document.getElementById("endDiv");
  gs.style.zIndex = "1";
  //if you win, play this video
  if(state == "win") {
    gs.innerHTML += "<video autoplay id='endVideo'><source src='images/win.mp4'></video>"
  }
  //else play this video
  else {
    gs.innerHTML += "<video autoplay id='endVideo'><source src='images/lose.mp4'></video>"
  }
  var eVid = document.getElementById("endVideo");
  eVid.addEventListener("ended", function() {setTimeout (gameEnd, 1000);}, false);
    
}

//gameEnd
function gameEnd() {
  //make replay button visible
  var replay = document.getElementById("replay");
  replay.style.display = "block";
  replay.value = "Replay?";
  //display user's score details
  var scoreDeets = document.getElementById("scoreDetails");
  scoreDeets.style.visibility = "visible";
  var scorePara = document.getElementById("scorePara");
  if(state == "win") {
    scorePara.innerHTML = "You " + state + "!!" + "<br>Score: " + ((score - bonus) + 10) +
                    "<br>Bonus: " + (bonus - 10) + "<br>Total: " + score;
  }
  else {
    scorePara.innerHTML = "You " + state + "!!" + "<br>Score: " + score +
                    "<br>Bonus: " + (bonus - 10) + "<br>Total: " + score;
  }  
}
                 
//5 round game 
var questions = 0;
function runGame() {
  //for time-being, display answer
  //var ans = document.getElementById("answer");
  //ans.innerHTML = "answer is: " + word;
  questions += 1;
  //start game
  giveMeAHint();
  for (i=0; i < word.length; i++) {
    var span = document.createElement("span");
    span.id = i;
    span.innerHTML = "_ ";
    var para = document.getElementById("guess");
    para.appendChild(span);
  }
}    //close for function

//scoring
var score = 0;

function giveMeAScore() {
  var counts = 0;
  for (i=0; i < word.length; i++) {
    var spanID = document.getElementById(i);
    var val = spanID.innerHTML;
    //if you get a letter right, increase counts by 1
    if (val != "_ ") {
      counts += 1;
    }
  }
  //if you press enter for no reason, don't do anything
  if (counts != word.length) {
    return;
  }
  //if you got the word, but you haven't finished the game...
  if (counts == word.length && questions < 5) {
    //if you get a word right, your score increases by 10
    score += 10;
    //set the score to the current score
    var scoreID = document.getElementById("scoreVal");
    scoreID.innerHTML = score;
    //reset all paragraphs
    var ans = document.getElementById("answer");
    ans.innerHTML = "";
    var guess = document.getElementById("guess");
    guess.innerHTML = "";
    var hint = document.getElementById("hint");
    hint.innerHTML = "";
    //change word
    num1 = Math.floor(Math.random() * wordArray.length);
    num = Math.floor(Math.random() * wordArray[num1].length);
    word = wordArray[num1][num];
    //reset letters array
    lettersArray = [];
    //get to the next question
    runGame();
  }
  else {
    //else go to win/lose
    winState();
  }
}

//register a high score to user
function registerScore() {
  //if your score is higher than what is stored, then replace it
  var marshie = JSON.parse(localStorage[localStorage.loggedInUsrUName]);
  if(marshie.score <= score) {
    marshie.score = score;
  }
  localStorage[marshie.uName] = JSON.stringify(marshie);
}

//get the score and store in rankings table in local storage
//rankings array, only top ten will be stored
var topUsers = ["", "", "", "", "", "", "", "", "", ""];

function storeScore() {
  //if topScores doesnt exist, then create one
  if(localStorage.topScores == undefined) {
    localStorage["topScores"] = JSON.stringify(topUsers);
  }
	var topScores = JSON.parse(localStorage.topScores);
	var currMarshie = JSON.parse(localStorage[localStorage.loggedInUsrUName]);
  //if user already exists in the array...
  if(topScores.indexOf(currMarshie.uName) != -1) {
    topScores[topScores.indexOf(currMarshie.uName)] = currMarshie.uName;  
  }
  //if user doesn't exist
  else {
    //if the 10th position is empty
    if(topScores[9] == "") {
      //find the first empty position in the table
      topScores[findEmptyPosition(topScores)] = currMarshie.uName;
    }
    //else compare the current user score against the 10th position
    else {
      var marshie10 = JSON.parse(localStorage[JSON.parse(localStorage["topScores"])[9]]);
	    if(currMarshie.score > marshie10.score) {
      topScores[9] = currMarshie.uName;     
      }
    }
  }
  //save changes
  localStorage["topScores"] = JSON.stringify(topScores);
  topScores = JSON.parse(localStorage.topScores);
  //if there is more than one player in the array, sort the array
  if(topScores[1] != "") {
    sortByScore(topScores);
  }
  //save changes
  localStorage["topScores"] = JSON.stringify(topScores);
}

//find the first empty position in the array
function findEmptyPosition(array) {
  var empty = 0;
  for(e=0; e<array.length; e++) {
    if(array[e] == "") {
      empty = e;
      break;
    }
  }
  //return the position
  return empty;
}

//sorting array by score in descending order for the rankings table
var fin = true;
var temp;
function sortByScore(array) {
  while (fin == true) {
    fin = false;
    for (j = 0;  j < array.length - 1;  j++) {
      //if j reaches an empty position...
      if(JSON.parse(localStorage["topScores"])[j] == "" || JSON.parse(localStorage["topScores"])[j + 1] == "") {
        //save changes and run away
        localStorage["topScores"] = JSON.stringify(array);
        break;
      }
      var m1 = JSON.parse(localStorage[JSON.parse(localStorage["topScores"])[j]]);
      var m2 = JSON.parse(localStorage[JSON.parse(localStorage["topScores"])[j + 1]]);
      if (m2.score > m1.score) {
        // swapping
        temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;
        //save changes
        localStorage["topScores"] = JSON.stringify(array);
        //sorting done
        fin = true; 
      }  
    }
  }  
}