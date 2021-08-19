
// Assignment Code
var newArray = []
var password = ''
var randomNumber
var numberOfCharacters
var choiceLowerCaseLetters
var choiceSpecialCharacters
var choiceUpperCaseLetters
var choiceNumbers
var generateBtn =  document.querySelector("#generate");
var upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var lowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var numbers = ['0','1,','2','3', '4', '5', '6', '7', '8', '9']  
var specialCharacters = ['!', '#', '$', '%', '&', '(', ')', ,'*', '+', ',' ,'-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '{', '}','~']


function generatePassword() {
  do {numberOfCharacters = prompt ('Pick a number between 8-128 and that will represent how the password you will generate will be.')

} while(numberOfCharacters < 8 || numberOfCharacters > 129)
  choiceUpperCaseLetters = confirm('Would you like your password to contain uppercase letters?')
  choiceLowerCaseLetters = confirm('Would you like your password to contain lowercase letters?')
  choiceSpecialCharacters = confirm('Would you like your password to contain special characters?')
  choiceNumbers = confirm('Would you like your password to containe numbers?')

  choiceUpperCaseLetters ?
    newArray = newArray.concat(upperCaseLetters)
  
  :choiceLowerCaseLetters ?
    newArray = newArray.concat(lowerCaseLetters)
  
  :choiceNumbers ?
    newArray = newArray.concat(numbers)
  
  :choiceSpecialCharacters
    newArray = newArray.concat(specialCharacters)

  
for (i = 0; i < numberOfCharacters; i++){
  randomNumber = Math.floor(Math.random()* newArray.length)
  password += newArray[randomNumber]}
return password;
}


// Write password to the #password input
function writePassword() {
  password= ''
var passwordText = document.querySelector("#password");
generatePassword()
passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword)
