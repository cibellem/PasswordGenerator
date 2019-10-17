
//adding a event listener so it will watch for when the user clicks on it

document.getElementById("generate").addEventListener("click", generate);

var numChoices = '0123456789';
var specialCharList = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
var lowercaseList = 'abcdefghijklmnopqrstuvwxyz';
var uppercaseList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function generate() {
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

    var specialCha = confirm('Click ok to confirm special characters');
    var numeric = confirm("Click ok to confirm numerical characters");
    var lowerCase = confirm("Click ok to confirm lowercase characters");
    var upperCase = confirm('Click ok to confirm uppercase characters');


    if (!specialCha && !numeric && !lowerCase && !upperCase) {
        alert("You need to pick at least one condition to make your password safer!")
        return;

    }

    var userChoice = {
        specialCha,
        numeric,
        lowerCase,
        upperCase
    };
    //console.log(userChoice)

    if (specialCha) {
        password += specialCharList.charAt(Math.floor((Math.random() * specialCharList.length)));
    }
    if (numeric) {
        password += numChoices.charAt(Math.floor((Math.random() * numChoices.length)));
    }
    if (lowerCase) {
        password += lowercaseList.charAt(Math.floor((Math.random() * lowercaseList.length)));
    }
    if (upperCase) {
        password += uppercaseList.charAt(Math.floor((Math.random() * uppercaseList.length)));
    }


    for (var i = password.length - 1; i < passwordLength; i++) {

        // I want to check if the user input it's true if so generate a random number.

        if (numeric) {
            var numChoice = specialCharList.charAt(Math.floor((Math.random() * specialCharList.length)));

            console.log(numChoice)

        }
        // checking if the user input it's true if so generate a random lowercase character.
        if (lowerCase) {
            var lowerChoice = Math.floor((Math.random() * 25) + 97)
            console.log(lowerChoice);

        }

        //  checking if the user input it's true if so generate a random uppercacse character.

        if (upperCase) {
            var upperChoice = Math.floor((Math.random() * (25)) + 60);
            console.log(upperChoice);

        }

        // checking if the user inpt it's true if so generate a random special character.
        if (specialCha) {

            password += specialCharList.charAt(Math.floor((Math.random() * specialCharList.length)));

        }
        console.log(password.substring(0, passwordLength));
    }


    //password will be displayd in the html.
    document.getElementById("password").innerHTML = "Your super-safe password should appear here "




    // I was not able to figure out the solution.

    // function makeid(passwordLength) {
    //     var result = '';
    //     var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    //     var charactersLength = characters.length;
    //     for (var i = 0; i < passwordLength; i++) {
    //         result += characters.charAt(Math.floor(Math.random() * charactersLength));
    //     }
    //     console(result);
    // }

    console.log(makeid(passwordLength));



}