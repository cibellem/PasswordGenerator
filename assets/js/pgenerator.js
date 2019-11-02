
//adding a event listener so it will watch for when the user clicks on it

document.getElementById("generate").addEventListener("click", generate);

var numChoices = '0123456789';
var specialCharList = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
var lowercaseList = 'abcdefghijklmnopqrstuvwxyz';
var uppercaseList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function generate() {

    //doing all the is to make sure user confirm at least 1
    var password = "";

    var passwordLength = parseInt(
        prompt("How many characters would you like your password to contain?")
    );


    if (isNaN(passwordLength)) {
        alert("Password lenght must be a number");
        return;
    }

    if (passwordLength < 8) {
        alert("Password length must be at least 8 charaters long")
        return;
    }


    if (passwordLength > 129) {
        alert("Password length must be less than 129 charaters");
        return;
    }


    //confirms always return booleans values 

    var specialCha = confirm('Click ok to confirm special characters');
    var numeric = confirm("Click ok to confirm numerical characters");
    var lowerCase = confirm("Click ok to confirm lowercase characters");
    var upperCase = confirm('Click ok to confirm uppercase characters');
    console.log(specialCha)


    if (!specialCha && !numeric && !lowerCase && !upperCase) {
        alert("You need to pick at least one condition to make your password safer!")
        return;

    }

    //here  I am lopping over each arry and will storing in the variable password 

    //console.log(userChoice)
    if (specialCha) {

        for (var i = 0; i < specialCharList.length; i++) {

            password += specialCharList.charAt(Math.floor(Math.random() * specialCharList.length));
            console.log(password);
            // userChoice.push(specialChaR)

        };

    }


    if (numeric) {

        for (var i = 0; i < numChoices.length; i++) {

            password += numChoices.charAt(Math.floor(Math.random() * numChoices.length));
            console.log(password);
        }

    }



    if (lowerCase) {

        for (var i = 0; i < lowercaseList.length; i++) {

            password += lowercaseList.charAt(Math.floor(Math.random() * lowercaseList.length));
            console.log(password);
        }



    }

    if (upperCase) {

        for (var i = 0; i < uppercaseList.length; i++) {

            password += uppercaseList.charAt(Math.floor(Math.random() * uppercaseList.length));
            console.log(password);

        }

    }
    var finalPassword = "";
    for (var i = 0; i < passwordLength; i++) {


        finalPassword += password.charAt(Math.floor(Math.random() * password.length));

        console.log(finalPassword)
    }
    //showing in scsreen the password that was generated 

    var showPassword = document.getElementById("password");
    showPassword.innerHTML = finalPassword;


    //copyng the content in the screen 
    var clip = document.getElementById("copy");
    clip.addEventListener("click", function () {
        showPassword.select();
        document.execCommand("copy");
        alert("Password Copied");
    })

}