<?php
    //Include the PHP functions to be used on the page 
    include('common.php'); 
	
    //Output header and navigation 
    outputHeader("About Page", "about.css");
    outputBannerNavigation();
?>

<!-- Contents of the page -->
<div id="contents">
    <!-- Main about text -->
    <div id="aboutContacts">
        <h1>About This Awesome Site</h1>
        <img src="images/profile.png" id="character">
        <div id="contactText">
            <!-- About this website text -->
            <h4>Krisney... feat. The Marshies</h4>
            <p>What's better than Disney? Wait, don't answer that. The point is Disney is the best thing in the world. It's the <b>"CHILDHOOD DREAM"</b>.Krisney... Kristen (the official owner of this website) + Disney. <br><br> 
            Marshies are the official team members of Krisney. They were modelled after marshmallows, hence the name. But shhh, don't tell them. <br><br>
            Population as of now: <b>12</b>
            </p>
        </div>    
    </div>
    
    <!-- Sidebar same as home page -->
    <div id="sidebar">
        <!-- Different quote appears every time. Dummy quote entered here -->
        <div id="quote">
            <h1>Quote</h1>
            <p>" <span id="quoteText">If you can DREAM it, you can DO it.</span> "</p>
        </div>
        
        <!-- Advert content -->
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