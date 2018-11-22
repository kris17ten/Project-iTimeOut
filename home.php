<?php
    //Include the PHP functions to be used on the page 
    include('common.php'); 
	
    //Output header and navigation 
    outputHeader("Home Page", "home.css");
    outputBannerNavigation();
?>

<!-- Contents of the page -->
<div id="contents">
    
    <!-- Game descriptions, etc. -->
    <div id="gameSpeak">
        <img src="images/gamelogo1.png" id="mainGameLogo">
        <div id="gameDescription">
            <h1>Game Description</h1>
            <p>The <b>NEW</b> iTimeOut is a cross-breed game of Hangman and Time Bomb. It is a single-player word game where you have a minute to guess five randomly chosen words. <br><br> Ooooh! Too easy, right? Well, let's just see if you can manage that. <br><b>GAME ON!</b></p>
            <a href="game.html" id="play"><img src="images/playButton.png" style="height:50px"></a>
        </div>
        <div id="gameText">
            <!-- Game controls -->
            <h1>Game Controls</h1>
            <p>It's simple. All you have to do is access the on-screen keyboard and assuming you can click on them <i>quickly</i>, keep guessing the letters that come to your head. If you have the word ready, then go for it. Click the enter key. But there's always a catch. You have one minute. Choose wisely. The key is speed. <br><br>"Focus. Speed. You are speed."</p>
        </div>
    </div>
    
    <!-- Sidebar -->
    <div id="sidebar">
        <!-- Different quote appears every time. Dummy quote entered here -->
        <div id="quote">
            <h1>Quote</h1>
            <p>" <span id="quoteText">If you can DREAM it, you can DO it.</span> "</p>
        </div>
        
        <div id="advert">
            <h1>Advert</h1>
            <div id="advert1">
                <img src="images/advert1.jpeg">
                <p>
                    <a href="https://www.wattpad.com/story/77794239-after-high-school">
                    After High School </a> <br>
                    So, high school's done with and it's time to move on to a new start. Ugh!
                </p>
            </div>
            <div>
                <img src="images/advert2.png" id="advert2">
                <p>Match Made In Heaven <br> Up and coming book in progress. Look out for it in 2018.</p>
            </div>
        </div>
    </div>

<!-- Close contents -->    
</div>
    
<?php
    //Output the footer
    outputFooter();
?>