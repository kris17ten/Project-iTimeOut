<?php
    //Include the PHP functions to be used on the page 
    include('common.php'); 
	
    //Output header and navigation 
    outputHeader("Logout Page", "logout.css");
    outputBannerNavigation();
?>

<!-- Contents of the page -->
<!-- This is what appears after the user logs out -->
<div id="contents">
    <img src="images/logoutpg2.png" id="logOut">  
</div>

<?php
    //Output the footer
    outputFooter();
?>