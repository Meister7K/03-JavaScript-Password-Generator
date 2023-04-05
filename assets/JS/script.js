// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

function generatePassword() {
 var passwordLength = prompt("How many characters would you like your password to be? (between 8-128)");
 if (passwordLength || passwordLength < 8 || passwordLength > 128) {
  alert("Password length must be a number between 8 and 128");
  return ;
 }

 var addLowercase = confirm("Would you like to add lowercase characters?");
 var addUppercase = confirm("Would you like to add UPPERCASE characters?");
 var addNumbers = confirm("W0u1d y0u 1ik3 t0 add numb3r character5?");
 var addSpecial = confirm("Would you like to add special (/?!@#) characters?");
 var lowercaseCharset = "abcdefghijklmnopqrstuvwxyz";
 var uppercaseCharset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 var numberCharset = "0123456789";
 var specialCharset = "!@#$%^&*()[]\{}|;:',.<></>`~=+-";

 if (!addLowercase && !addUppercase && !addNumbers && !addSpecial) {
  alert(" You must choose at least one character type to continue");
  return ;
 }

};
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
