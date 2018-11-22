<?php
    //Include the PHP functions to be used on the page 
    include('common.php'); 
	
    //Output header and navigation
    //rankings.js still in progress. Will not work at this time.
    outputHeader("Rankings Page", "rankings.css", "rankings.js");
    outputBannerNavigation();
?>

<!-- Contents of the page -->
<div id="contents">
        
    <div id="rankingText">
        <h1>WALL OF FAME</h1>
        <p>Many have ventured, but only few are chosen.</p>
    </div>
    
    <!-- Rankings table -->
    <!-- Only top ten users will be displayed -->
    <!-- Rank, avatar, username and score will be displayed for each user -->
    <div id="rankingTable">
        <table id="ranKings">
            <tr>
                <th id="tableRank">Rank</th>
                <th id="tableAv"><img src="images/profile.png"></th>
                <th id="tableUser">User</th> 
                <th id="tableScore">Score</th>
            </tr>
        </table>
    
    <!-- Close rankings table div-->
    </div>

<!-- Close contents -->
</div>

<?php
    //Output the footer
    outputFooter();
?>