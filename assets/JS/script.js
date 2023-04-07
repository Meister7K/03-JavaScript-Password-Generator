// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  // return document.getElementById(password).append.innerHTML.password
};

function generatePassword() {
 var passwordLength = prompt("How many characters would you like your password to be? (between 8-128)");
 if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
  alert("Password length must be a NUMBER between 8 and 128");
  console.log(passwordLength);
  return "";
 }

//  
 var addLowercase = confirm("Would you like to add lowercase characters?");
 var addUppercase = confirm("Would you like to add UPPERCASE characters?");
 var addNumbers = confirm("W0u1d y0u 1ik3 t0 add numb3r character5?");
 var addSpecial = confirm("Would you like to add special (/?!@#) characters?");
 var lowercaseCharset = "abcdefghijklmnopqrstuvwxyz";
 var uppercaseCharset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 var numberCharset = "0123456789";
 var specialCharset = "!@#$%^&*()[]{}|;:',.<></>`~=+-";
 var passwordText = "";
 var charset = "";


//  alert of failed char selection
 if (!addLowercase && !addUppercase && !addNumbers && !addSpecial) {
  alert(" You must choose at least one character type to continue");
  return "";
 }

//  code for choosing random characters from charset based on input
 if(addLowercase) {
  charset += lowercaseCharset;
  passwordText += lowercaseCharset.charAt(Math.floor(Math.random() * lowercaseCharset.length));
 }
 if(addUppercase){
  charset += uppercaseCharset;
  passwordText += uppercaseCharset.charAt(Math.floor(Math.random() * uppercaseCharset.length));
 }
 if(addNumbers){
  charset += numberCharset;
  passwordText += numberCharset.charAt(Math.floor(Math.random() * numberCharset.length));
 }
 if(addSpecial){
  charset += specialCharset;
  passwordText += specialCharset.charAt(Math.floor(Math.random() * specialCharset.length));
 }

//  for loop to randomize each character/charset in character length 
 for (var i = passwordText.length; i < passwordLength; i++ ){
  passwordText += charset.charAt(Math.floor(Math.random() * charset.length));
 }

 console.log(passwordText);
 console.log(charset)
 return passwordText;
};
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
