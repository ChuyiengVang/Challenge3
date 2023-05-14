// Assignment Code

var generateBtn = document.querySelector("#generate");
//MY HOMEWORK
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "[", "]", "{", "}", "|", ":", ";", "'", "<", ",", ">", ".", "/", "?","`", "~"];
var answer;
var lowerCaseChoice;
var upperCaseChoice;
var numbersChoice;
var specialCharChoice;

//MY HOMEWORK

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}
  // MY HOMEWORK
  function generatePassword() {

     var answer = parseInt(prompt("Length of password you desire, 8-128 characters"));  
     
     if (/^[a-zA-Z]+/.test(answer)) {
         alert("Please select between 8-128 characters");
         return "";
  }  else if (answer < 8) {
         alert("Please select more than 8 charcaters!!!"); 
         return "";
  }  else if (answer > 128) {
         alert("Please select less than 128 characters!!!")
         return "";
  }  else {
        lowerCaseChoice = confirm("Will your password contain lowercase letters?");
        upperCaseChoice = confirm("Will your password contain uppercase letters?");
        numbersChoice = confirm("Will your password contain numbers?");
        specialCharChoice = confirm("Will your password contain special charcters?");
  }
  
     if (!lowerCaseChoice && !upperCaseChoice && !numbersChoice && !specialCharChoice) {
        choice = alert("Please select atleast 1 choice to continue!!");
  }  else if (lowerCaseChoice && upperCaseChoice && numbersChoice && specialCharChoice) {
        choice = lowerCase.concat(upperCase, numbers, specialChar);
  }  else if (lowerCaseChoice && upperCaseChoice && numbersChoice) {
        choice = lowerCase.concat(upperCase, numbers);
  }  else if (lowerCaseChoice && specialCharChoice && numbersChoice) {
        choice = lowerCase.concat(specialChar, numbers);
  }  else if (lowerCaseChoice && upperCaseChoice && specialCharChoice) {
        choice = lowerCase.concat(upperCase, specialChar);
  }  else if (upperCaseChoice && numbersChoice && specialCharChoice) {
        choice = upperCase.concat(numbers, specialChar);
  }  else if (lowerCaseChoice && upperCaseChoice) {
        choice = lowerCase.concat(upperCase);
  }  else if (lowerCaseChoice && numbersChoice) {
        choice = lowerCase.concat(numbers); 
  }  else if (lowerCaseChoice && specialCharChoice) {
        choice = lowerCase.concat(specialChar);
  }  else if (upperCaseChoice && numbersChoice) {
        choice = upperCase.concat(numbers);
  }  else if (upperCaseChoice && specialCharChoice) {
        choice = upperCase.concat(specialChar);
  }  else if (numbersChoice & specialCharChoice) {
        choice = numbers.concat(specialChar);
  }  else if (numbersChoice) {
        choice = numbers;
  }  else if (lowerCaseChoice) {
        choice = lowerCase;
  }  else if (upperCaseChoice) {
        choice  = upperCase;
  }  else if (specialCharChoice) {
        choice = specialChar;
  }

     var password = [];

     for (var i = 0; i < answer; i++) {

       var finalChoice = choice[Math.floor(Math.random() * choice.length)];
       password.push(finalChoice)
  }

     return password.join("");

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);