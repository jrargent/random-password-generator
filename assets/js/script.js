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

//arrays
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
//using Unicode for ASCII characters. Found a tutorial online for converting unicode to letters in an array
//and then converting lowercase to uppercase
const letterCodes = Array.from(Array(26)).map( (_, i) => i + 97);
const lowercaseLetters = letterCodes.map(code => String.fromCharCode(code));
const uppercaseLetters = lowercaseLetters.map(letter => letter.toUpperCase());


// Write password to the #password input
function writePassword() {
  reset();
  //local variables - only accessible by this function
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



//function for generating the password itself
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
  
  passLowerPrompt();
    console.log(passwordLowercase);
    
  passSpecCharPrompt();
    console.log(passwordSpecChar);
   
  passNumberPrompt();  
    console.log(passwordNumber);
   
    // validation for selecting at least one true value from the prompts
    if (passwordUppercase || passwordLowercase || passwordSpecChar || passwordNumber) {

      //for loop goes through function for creating a random number between 1 and 4. 
      //If number is 1 AND passwordUppercase is true, then random number function goes through 
      //and picks a random selection from listed array
      for(let i = 0; i < passwordLength; i++) {
    
      var charType = randomIntFromInterval(1,4);
          if(charType == 1 && passwordUppercase){
              passwordArray.push(uppercaseLetters[randomIntFromInterval(0, uppercaseLetters.length - 1)])
          }
            else if(charType == 2 && passwordLowercase){
              passwordArray.push(lowercaseLetters[randomIntFromInterval(0, lowercaseLetters.length - 1)]) 
          }
            else if(charType == 3 && passwordNumber){
              passwordArray.push(numbers[randomIntFromInterval(0, numbers.length - 1)])
          }
            else if(charType == 4 && passwordSpecChar){
              passwordArray.push(symbols[randomIntFromInterval(0, symbols.length - 1)])
            }

          else{
              i--;
              }
        }

        return(passwordArray.join('')) // returns password into generate password, which passes into password variable.
    }
      // if at least one prompt is not selected, generate password function will start again.
    else {
      window.alert("Please select at least one password criteria option.")
      return generatePassword();
      }
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

// function for randomly generating numbers for the arrays
function randomIntFromInterval(min, max) { 
  return Math.floor(Math.random() * (max - min + 1) + min) // 
}

// resets variables back to default, which is false
function reset() {

passwordLength = false;
passwordUppercase = false;
passwordLowercase = false;
passwordSpecChar = false;
passwordNumber = false;
passwordArray = [];
}