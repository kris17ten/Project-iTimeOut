<?php

//Ouputs the header for the page and opening body tag
//Takes in three arguments - the title of the page, the css, optionally, the javascript
function outputHeader($title, $css, $js = null){
    echo '<!DOCTYPE html>';
    echo '<html>';
    echo '<head>';
    echo '<title id="title">' . $title . '</title>';
    //stylesheets
    echo '<!-- Link to external style sheet -->';
    echo '<link rel="stylesheet" type="text/css" href="css/' . $css . '">';
    //javascript
    echo '<!-- Link to external javascript(s) -->';
    echo '<script src="js/login.js"></script>';
    echo '<!-- If additional javascript needed, otherwise, null -->';
    echo '<script src="js/' . $js . '"></script>';
    echo '</head>';
    echo '<body id="whatever" onload="checkIfReg()">';
}

//Outputs 3D navigation
//3d navigation bar (internet ref. https://davidwalsh.name/3d-menu)
function threeDNav ($arrayName, $arrayAddress) {
    for($x = 0; $x < count($arrayName); $x++){
        //creates li element
        echo '<li id="' .  $arrayName[$x] . '">';
        //link to the specific page
        echo '<a href="' . $arrayAddress[$x] . '" class="threeD">' . $arrayName[$x];
        //3D
        echo '<span hidden="true" class="threeDBox">';
        echo '<span class="front">' . $arrayName[$x] . '</span>';
        echo '<span class="back">' . $arrayName[$x] . '</span>';
        echo '</span>'; 
        //close link and li
        echo '</a></li>';
}
}
// Ouputs the top header banner and the navigation bar(s)
function outputBannerNavigation(){
    echo '<!--3d navigation bar (internet ref. https://davidwalsh.name/3d-menu)-->';
    echo '<div id="loginBar">';
    echo '<ul class="blockMenu">';
    
    //Array of pages/addresses for login nav
    $loginBar = array("Register", "Login");
    $navBar = array("Home", "Game", "Rankings", "Videos", "About");
    //Array of pages/addresses for main nav
    $loginAddresses = array("registration.php", "login.php");
    $navAdresses = array("home.php", "game.php", "rankings.php", "videos.php", "about.php");
    
    //Output navigation for login
    threeDNav ($loginBar, $loginAddresses);
    echo '</ul></div>';
    
    //Output logo, header and moving character
    echo '<div id="logoBar">';
    echo '<img src="images/krisneyBack.png" id="logo">';
    echo '<div id="animationX">';
    echo '<img src="images/krisney.gif" id="krissy1"></div>';
    echo '</div>';
    
    //Ouput navigation for the main navigation
    echo '<div id="navigation">';
    echo '<ul class="blockMenu">';
    threeDNav ($navBar, $navAdresses);
    echo '</ul></div>';
}

//Outputs footer, closing body tag and closing HTML tag
function outputFooter(){
    echo '<div id="footer">';
    echo '<p>©Krisney.com presented by Kristen Rebello 2017</p></div>';
    echo '</body>';
    echo '</html>';
}

