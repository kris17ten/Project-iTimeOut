// JavaScript Document
//score array
var topUsers = ["", "", "", "", "", "", "", "", "", ""];

//images to display for top three positions
var topRanks = ["<img src='images/first.png' width='80px'>", "<img src='images/second.png' width='70px'>",
    "<img src='images/third.png' width='60px'>"];

//display the table for each marshie
function displayTable() {
  //if there isn't a table, create it
  if(localStorage.topScores == undefined) {
    localStorage["topScores"] = JSON.stringify(topUsers);
  }
  var topScores = JSON.parse(localStorage.topScores);
  //for each user in the array
  for (s=0; s<topScores.length; s++) {
    var rankTable = document.getElementById("ranKings");
    //as long as the index is not blank string
    if(topScores[s] != "") {
      //if the user doesn't exist any longer...
      if(localStorage[JSON.parse(localStorage["topScores"])[s]] == undefined) {
        //move everyone up a place
        for(d = s; d < topScores.length - 1; d++) {
            topScores[d] = topScores[d + 1];
          }
        //set the last place to blank
        topScores[topScores.length - 1] = "";  
        //save changes
        localStorage["topScores"] = JSON.stringify(topScores);
        //repeat the previous s value and continue on
        s--;
      }
      //else the user does exist
      else {
        var marshie = JSON.parse(localStorage[JSON.parse(localStorage["topScores"])[s]]);
        //create elements
        var tr = document.createElement("tr");
        var tdRank = document.createElement("td");
        var tdAvatar = document.createElement("td");
        var tdUname = document.createElement("td");
        var tdScore = document.createElement("td");
        //for the top three, put in the pictures
        if(s < topRanks.length) {
          tdRank.innerHTML = topRanks[s];
        }
        //else numbers
        else {
          tdRank.innerHTML = s + 1;
        }
        //find the avatar
        if(marshie.avatar == "grumpster") {
          tdAvatar.innerHTML ="<img src='images/grumpster.png' class='tablePic'>";
        }
        else if (marshie.avatar == "dok") {
          tdAvatar.innerHTML ="<img src='images/dok.png' class='tablePic'>";
        }
        else if (marshie.avatar == "blushie") {
          tdAvatar.innerHTML ="<img src='images/blushie.png' class='tablePic'>";
        }
        else if (marshie.avatar == "sneezie") {
          tdAvatar.innerHTML ="<img src='images/sneezie.png' class='tablePic'>";
        }
        else if (marshie.avatar == "sillie") {
          tdAvatar.innerHTML ="<img src='images/sillie.png' class='tablePic'>";
        }
        else if (marshie.avatar == "dozer") {
          tdAvatar.innerHTML ="<img src='images/dozer.png' class='tablePic'>";
        }
        else if (marshie.avatar == "smiley") {
          tdAvatar.innerHTML ="<img src='images/smiley.png' class='tablePic'>";
        }
        //put in the values
        tdUname.innerHTML = marshie.uName;
        tdScore.innerHTML = marshie.score;
        //append the cell to the row
        tr.appendChild(tdRank);
        tr.appendChild(tdAvatar);
        tr.appendChild(tdUname);
        tr.appendChild(tdScore);
        //append the row to the table
        rankTable.appendChild(tr);
      }
    }
    //if the value of the index is a blank string
    else {
      var tr = document.createElement("tr");
      var tdRank = document.createElement("td");
      var tdAvatar = document.createElement("td");
      var tdUname = document.createElement("td");
      var tdScore = document.createElement("td");
      //do the same as above, except with blank values(aside from the ranks)
      if(s < topRanks.length) {
        tdRank.innerHTML = topRanks[s];
      }
      else {
        tdRank.innerHTML = s + 1;
      }
      tdAvatar.innerHTML = "";
      tdUname.innerHTML = "";
      tdScore.innerHTML = "";
      tr.appendChild(tdRank);
      tr.appendChild(tdAvatar);
      tr.appendChild(tdUname);
      tr.appendChild(tdScore);
      rankTable.appendChild(tr);
    }
  }
}