// Assignment Code
const symbols = "[]^_`!#$%&*(~,-./:;<=>{}|)+?@";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var possibleCharacters = "";
var password = "";

var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Write password to the #password input
function writePassword() {
  characterChoice = prompt(
    "Choose a number of characters between 8 and 128 to use for your custom password,"
  );
  if (characterChoice < 8 || characterChoice > 128) {
    alert(
      "Your amount of characters should be between 8 and 128. Please choose again"
    );
    writePassword();
  }
  var includeUpperCase = confirm(
    "Would you like to include uppercase letters in your password?"
  );
  var includeLowerCase = confirm(
    "Would you like to include lowercase letters in your password?"
  );
  var includeNumbers = confirm(
    "Would you like to include numbers in your password?"
  );
  var includeSymbols = confirm(
    "Would you like to include symbols in your password?"
  );
  if (includeUpperCase) {
    possibleCharacters += upperCase;
  }
  if (includeLowerCase) {
    possibleCharacters += lowerCase;
  }
  if (includeNumbers) {
    possibleCharacters += numbers;
  }
  if (includeSymbols) {
    possibleCharacters += symbols;
  }
  for (var i = 0; i < characterChoice; i++) {
    password +=
      possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)];
  }
  console.log(password);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  return "This will be replaced by my generated password";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
