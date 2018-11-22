<?php
    //Include the PHP functions to be used on the page 
    include('common.php'); 
	
    //Output header and navigation 
    outputHeader("Registration Page", "registration.css", "registration.js");
    outputBannerNavigation();
?>

<!-- Contents of the page -->
<div id="contents">
        
    <!-- Heading for registration -->
    <div id="registrationForm">
        <h1>Registration</h1>
        <p>Why? Well, why not?</p>
        
        <!-- Registration form -->
        <form name="regForm" id="reg">
            <!-- Table to arrange elements -->
            <table id="arrangeElements">
                <!-- User details -->
                <tr>
                    <td id="data">Name: </td>
                    <td>
                        <input type="text" name="myName" id="nameInput" size="40" placeholder="Some One">
                    </td>
                </tr>
                <tr>
                    <td id="data">Username: </td>
                    <td>
                        <input type="text" name="myUsername" id="uNameInput" size="40" placeholder="Krisney_17">
                    </td>
                </tr>
                <tr>
                    <td id="data">Email id: </td>
                    <td>
                        <input type="email" name="myEmail" id="emailInput" size="40" placeholder="someone@example.com">
                    </td>
                </tr>
                <tr>
                    <td id="data">Password: </td>
                    <td>
                        <input type="password" name="myPassword" id="passwordInput" size="40" placeholder="*********">
                    </td>
                </tr>
                <!-- User avatar -->
                <tr>
                    <td id="data">Choose your spirit <br> Marshie: </td>
                    <td>
                        <!-- Selection for avatar -->
                        <select id="avatar">
                            <option value="grumpster">Grumpster (M)</option>
                            <option value="dok">Dok (M)</option>
                            <option value="blushie">Blushie (F)</option>
                            <option value="smiley">Smiley (F)</option>
                            <option value="dozer">Dozer (F)</option>
                            <option value="sneezie">Sneezie (M)</option>
                            <option value="sillie">Sillie (M)</option>
                        </select>
                    </td>
                </tr>
            </table>
            
            <!-- Input buttons -->
            <input type="button" id="submit" value="Submit" onclick="storeMarshie()">
            <input type="reset" id="clear" value="Clear">
        
        </form>
        <!-- If user gets anything wrong, text will appear here -->
        <p id="state"> </p>
        
        <!-- If user has already registered -->
        <div id="moveOut">
            <h2> Already a user? </h2>
            <img src="images/profile.png" id="character">
            <p> Good for you. You may proceed to mark your attendance. Login
                <a href="login.html">here...</a>
            </p>
        </div>
    <!-- Close registration -->
    </div>

<!-- Close contents -->    
</div>
        
<?php
    //Output the footer
    outputFooter();
?>