// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var special = [" ", "!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"]
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var fullCharSet = lowercase.concat(uppercase, special, number);
var noLowers = uppercase.concat(special, number);
var noUppers = lowercase.concat(special, number);
var noSpecial = lowercase.concat(uppercase, number);
var noNumbers = lowercase.concat(uppercase, special);
var noLowersNoUppers = special.concat(number);
var noLowersNoNumber = special.concat(uppercase);
var noLowerNoSpecial = uppercase.concat(number);
var noUppersNoSpecial = lowercase.concat(number);
var noUppersNoNumber = lowercase.concat(special);
var noSpecialNoNumber = lowercase.concat(uppercase);


// Return a random password
function generatePassword() {
// logic goes here
var passwordLength = prompt("How many characters would you like your password to contain?");
  if (passwordLength < 8 || passwordLength > 168) {
    alert("Sorry, your password must contain between 8 and 168 characters.");
  } else if (passwordLength >= 8 && passwordLength <= 168) {
    var specialConfirm = confirm("Would you like your password to contain special characters?");
    var numberConfirm = confirm("Would you like your password to contain numbers?");
    var lowerConfirm = confirm("Would you like your password to contain lowercase letters?");
    var upperConfirm = confirm("Would you like your password to contain uppercase letters?");
  };

var randomPassword = "";

if (specialConfirm && numberConfirm && lowerConfirm && upperConfirm) {
  for (var i = 0; i <= passwordLength; i++) {
  randomPassword += fullCharSet[Math.floor(Math.random() * fullCharSet.length)];
  }
} else if (specialConfirm && numberConfirm && lowerConfirm) {
  for (var i = 0; i <= passwordLength; i++) {
    randomPassword += noUppers[Math.floor(Math.random() * noUppers.length)];
    }
} else if (specialConfirm && numberConfirm) {
  for (var i = 0; i <= passwordLength; i++) {
    randomPassword += noLowersNoUppers[Math.floor(Math.random() * noLowersNoUppers.length)];
    }
} else if (specialConfirm) {
  for (var i = 0; i <= passwordLength; i++) {
    randomPassword += special[Math.floor(Math.random() * special.length)];
    }
} else if (specialConfirm && numberConfirm && upperConfirm) {
  for (var i = 0; i <= passwordLength; i++) {
  randomPassword += noLowers[Math.floor(Math.random() * noLowers.length)];
  }
} else if (specialConfirm && upperConfirm) {
  for (var i = 0; i <= passwordLength; i++) {
    randomPassword += noLowersNoNumber[Math.floor(Math.random() * noLowersNoNumber.length)];
    }
} else if (specialConfirm && lowerConfirm) {
  for (var i = 0; i <= passwordLength; i++) {
    randomPassword += noUppersNoNumber[Math.floor(Math.random() * noUppersNoNumber.length)];
    }
} else if (numberConfirm && lowerConfirm && upperConfirm) {
  for (var i = 0; i <= passwordLength; i++) {
    randomPassword += noSpecial[Math.floor(Math.random() * noSpecial.length)];
    }
} else if (numberConfirm && lowerConfirm) {
  for (var i = 0; i <= passwordLength; i++) {
  randomPassword += noUppersNoSpecial[Math.floor(Math.random() * noUppersNoSpecial.length)];
  }
} else if (numberConfirm && upperConfirm) {
  for (var i = 0; i <= passwordLength; i++) {
    randomPassword += noLowerNoSpecial[Math.floor(Math.random() * noLowerNoSpecial.length)];
    }
} else if (numberConfirm) {
  for (var i = 0; i <= passwordLength; i++) {
    randomPassword += number[Math.floor(Math.random() * number.length)];
    }
} else if (specialConfirm && lowerConfirm && upperConfirm) {
  for (var i = 0; i <= passwordLength; i++) {
    randomPassword += noNumbers[Math.floor(Math.random() * noNumbers.length)];
    }
} else if (lowerConfirm && upperConfirm) {
  for (var i = 0; i <= passwordLength; i++) {
    randomPassword += noSpecialNoNumber[Math.floor(Math.random() * noSpecialNoNumber.length)];
    }
} else if (lowerConfirm) {
      for (var i = 0; i <= passwordLength; i++) {
        randomPassword += lowercase[Math.floor(Math.random() * lowercase.length)];
        }
} else if (upperConfirm) {
          for (var i = 0; i <= passwordLength; i++) {
            randomPassword += uppercase[Math.floor(Math.random() * uppercase.length)];
            }
};
// return password
return randomPassword;
console.log(randomPassword);

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Prompt: How many characters would you like your password to contain?
// Alert: If lower than 8, or higher than 128 characters, tell the user can't be done.
// Confirm: Click ok to confirm including special characters (ok = true, cancel = false)
// Confirm: Click ok to confirm including numeric characters (ok = true, cancel = false)
// Confirm: Click ok to confirm including lowercase characters (ok = true, cancel = false)
// Confirm: Click ok to confirm including uppercase characters (ok = true, cancel = false)