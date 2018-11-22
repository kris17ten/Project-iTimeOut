<?php
    //Include the PHP functions to be used on the page 
    include('common.php'); 
	
    //Output header and navigation 
    outputHeader("Login Page", "login.css");
    outputBannerNavigation();
?>

<!-- Contents of the page -->
<div id="contents">
    
    <div id="registrationForm">
        <!-- Login heading -->
        <h1>Login</h1>
        <p>Leave your online footprint here.</p>
        
        <!-- Login form -->
        <form name="logForm" id="reg">
            <!-- Table to arrange elements of form -->
            <table id="arrangeElements">
                <tr>
                    <td id="data">Username: </td>
                    <td>
                        <input type="text" name="userName" id="uNameInput" size="40" placeholder="Krisney_17">
                    </td>
                </tr>
                <tr>
                    <td id="data">Password: </td>
                    <td>
                        <input type="password" name="passWord" id="passwordInput" size="40" placeholder="*********">
                    </td>
                </tr>
            </table>
            
            <!-- Buttons for form -->
            <input type="button" id="submit" value="Submit" onclick="logIN()">
            <input type="reset" id="clear" value="Clear">
        
        </form>
        <!-- If user gets anything wrong, state will appear here -->
        <p id="logState"></p>
        
        <!-- If user hasn't registered -->
        <div id="moveOut">
            <h2> Not a user? </h2>
            <img src="images/profile.png" id="character">
            <p> Booo! But don’t worry. Add a little bit of magic to your life by signing up. Just click 
                <a href="registration.html">here...</a>
            </p>
        </div>
    
    <!-- Close reg form div -->
    </div>
        
<!-- Close contents div -->       
</div>

<?php
    //Output the footer
    outputFooter();
?>