/* 
Need to prompt user how long password they want, whether to include uppercase, lowercase letters, 
special characters, or numbers

Thoughts for this include creating an array for uppercase letters, lowercase letters,
special characters, and numbers between 0-9. If selected by user, randomly generate number to pull data from array

Discussion with Eric suggested then pushing the random array data from each above into a larger array.
Generate random number to pull data from array and join it, based on number of characters selected. 
*/


//global variables - accessible by any part of the program
var generateBtn = document.querySelector("#generate");

var passwordLength 
var passwordUppercase
var passwordLowercase
var passwordSpecChar
var passwordNumber

var passwordArray = []

function generatePassword() {
  console.log("Button was clicked");

  passLengthPrompt();
  console.log(passwordLength)

  // check user input meets criteria of number of characters between 8 and 128
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength) || passwordLength == null) {
    alert("Please provide a number between 8 and 128.")
    passLengthPrompt();
    console.log(passwordLength);
  }

  passUpperPrompt();
  console.log(passwordUppercase);
    if (passwordUppercase = true) {
      //this section will generate random lowercase letters for password
    }
    else {
      //may not actually need an else?
    }

  passLowerPrompt();
  console.log(passwordLowercase);
    if (passwordLowercase = true) {
      //this section will generate random uppercase letters for password
    }
    else {
      //may not actually need an else?
    }

  passSpecCharPrompt();
  console.log(passwordSpecChar);
    if (passwordSpecChar = true) {
        //this section will generate random special characters for password
    }
    else {
      //not sure yet if need an else here
    }

  passNumberPrompt();  
  console.log(passwordNumber);
    if (passwordNumber = true) {
      //this section will generate random numbers for password
    }
    else {
      //not actually sure if need an else?
    }

    //need to include a way to verify that user has selected at least one true statement from prompt. 
    //All prompts cannot be false or no password will be generated.

  return "Generated password will go here!"; //return passwordArray after join?
}

//functions for prompting user
function passLengthPrompt() {
  //parseInt tells the program that whatever is received from the prompt has to be an integer
  passwordLength = parseInt(prompt("How many characters should the password be? Please choose between 8 and 128."));
}

function passUpperPrompt() {
  passwordUppercase = confirm("Do you want your password to include uppercase letters?"); 
}

function passLowerPrompt() {
  passwordLowercase = confirm("Do you want your password to include lowercase letters?");
}

function passSpecCharPrompt() {
  passwordSpecChar = confirm("Do you want your password to include special characters?")
}

function passNumberPrompt() {
  passwordNumber = confirm("Do you want your password to include numbers?")
}


// Write password to the #password input
function writePassword() {
  //local variables - only accessible by this function
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
