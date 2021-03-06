<?php
    //Include the PHP functions to be used on the page 
    include('common.php'); 
	
    //Output header and navigation 
    outputHeader("Game Page", "game.css", "game.js");
    outputBannerNavigation();
?>

<!-- Contents of the page -->
<div id="contents">      
    
    <!-- User details, once user has logged in -->
    <div id="sidebar">        
        <h1>USER</h1>        
        <img src="images/profile.png" id="userAvatar">        
        <!-- Default values will show up --> 
        <!-- Otherwise, username, high score and rank of user -->
        <p id="loggedInUserName">Krissy Poo</p>        
        <p id="loggedInHighScore">High Score: xoxo</p>        
        <p id="loggedInRank">Rank: UNRANKED</p>      
    </div>             
    
    <!-- Game Details -->
    <div id="gameSpeak">          
        <img src="images/gamelogo1.png" id="mainGameLogo">        
        <div id="gameDescription">
            <!-- Game backstory -->
            <h1>iTimeOut</h1>          
            <p>Serah Loo has just failed her midterms and what�s worse is, her grades are going to be sent to her mum. This will be the last straw and most likely, the end to her phone usage, a.k.a. her social life once and for all. Help Serah Loo answer her way through the security questions to delete the email from her mum�s account before the time runs out. If you don�t, well, bad things will happen.
            </p>        
        </div>      
    </div>
    
    <!-- Actual game space -->
    <div id="gap">
      <!-- Intro for the game -->
        <div id="videoo">
            <video id="introVideo" poster="images/videoPoster.png">
                <source src="images/intro.mp4">
            </video>
            <!-- Button to skip directly to game -->
            <button onclick="skipToGame()" id="skipToGame">Play Game</button>
            <!-- Button to play intro -->
            <button onclick="myFunction()" id="playIntro">Play Intro</button>
            <!-- Button to go to how to play -->
            <button onclick="myEnd()" id="skipToTutorial">How To Play</button>
            <!-- Button to skip intro-->
            <button onclick="mySkip()" id="skipIntro" style="vertical-align:middle"><span>Skip the drama</span></button>
      
        </div>
        <!-- End of video code -->
        <!-- Tutorial for the game --->
        <div id="tutorial" style="background-image:url(images/tutorial1.png);">    
            <button onclick="goBack()" id="back"style="vertical-align:middle"><span>Back</span></button>
            <button onclick="goNext()" id="next"style="vertical-align:middle"><span>Next</span></button>
        </div>
        
        <!-- Actual game screen -->
        <div id="gameScreen">    
            <!-- Top of the game screen -->
            <!-- Timer -->
            <div id="timerStuff">
                <div id="timerLoc">
                    <div id="timer">
                    </div>
                    <p>Timer</p>
                </div>
                <!-- Character -->
                <div id="characterAnimXLoc">
                    <img src="images/calm.png" id="webcam">
                </div>
                <!-- Score -->
                <div id="scoreLoc">
                    <p>Score: <span id="scoreVal">___</span></p>
                </div>
            <!-- Close for timer stuff -->    
            </div>
            <!-- Play button for game -->
            <input type="button" id="play" onclick="randFunction()">             
            <!-- Replay button -->
            <input type='button' id='replay' onclick='replay()' value='Replay'>
            
            <!-- All the paragraphs required in the game -->
            <div id="wordDisplay">
                <p id="hint"> </p>
                <p id="guess"> </p>
                <p id="lettersUsed"> </p>
                <!-- For testing purposes only -->
                <p id="answer"> </p>      
            
            </div>                 
      
            <!-- On screen keyboard -->
            <div id="onScreenKeys">          
                <div id="keyLine1">                     
                    <input type="button" value="Q" class="button" id="Q" onclick="clickButton('Q')">            
                    <input type="button" value="W" class="button" id="W" onclick="clickButton('W')">            
                    <input type="button" value="E" class="button" id="E" onclick="clickButton('E')">            
                    <input type="button" value="R" class="button" id="R" onclick="clickButton('R')">            
                    <input type="button" value="T" class="button" id="T" onclick="clickButton('T')">            
                    <input type="button" value="Y" class="button" id="Y" onclick="clickButton('Y')">            
                    <input type="button" value="U" class="button" id="U" onclick="clickButton('U')">            
                    <input type="button" value="I" class="button" id="I" onclick="clickButton('I')">            
                    <input type="button" value="O" class="button" id="O" onclick="clickButton('O')">            
                    <input type="button" value="P" class="button" id="P" onclick="clickButton('P')">          
                </div>          
                <div id="keyLine2">                     
                    <input type="button" value="A" class="button" id="A" onclick="clickButton('A')">            
                    <input type="button" value="S" class="button" id="S" onclick="clickButton('S')">            
                    <input type="button" value="D" class="button" id="D" onclick="clickButton('D')">            
                    <input type="button" value="F" class="button" id="F" onclick="clickButton('F')">            
                    <input type="button" value="G" class="button" id="G" onclick="clickButton('G')">            
                    <input type="button" value="H" class="button" id="H" onclick="clickButton('H')">            
                    <input type="button" value="J" class="button" id="J" onclick="clickButton('J')">            
                    <input type="button" value="K" class="button" id="K" onclick="clickButton('K')">            
                    <input type="button" value="L" class="button" id="L" onclick="clickButton('L')">          
                </div>          
                <div id="keyLine3">                     
                    <input type="button" value="Z" class="button" id="Z" onclick="clickButton('Z')">            
                    <input type="button" value="X" class="button" id="X" onclick="clickButton('X')">            
                    <input type="button" value="C" class="button" id="C" onclick="clickButton('C')">            
                    <input type="button" value="V" class="button" id="V" onclick="clickButton('V')">            
                    <input type="button" value="B" class="button" id="B" onclick="clickButton('B')">            
                    <input type="button" value="N" class="button" id="N" onclick="clickButton('N')">            
                    <input type="button" value="M" class="button" id="M" onclick="clickButton('M')">
                    <input type="button" value="Enter" class="spButton" id="enter" onclick="giveMeAScore()">           
                </div>                     
            </div>
        
        <!-- Close game screen -->
        </div>
        
        <!-- End video -->
        <div id="endDiv">
            <!-- At the end of the game, score will appear in this div, and give you the chance to replay the game -->
            <div id="scoreDetails">
                <p id="scorePara"></p>
            </div>
        </div>
        
    </div>

<!-- Close contents -->    
</div>

<?php
    //Output the footer
    outputFooter();
?>