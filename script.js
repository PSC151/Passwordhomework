// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



var amountRange = document.getElementById("amountRange")
var amountNumber = document.getElementById("amountNumber")
var includeLowercaseElement = document.getElementById("includeLowercase")
var includeUppercaseElement = document.getElementById("includeUppercase")
var includeNumbersElement = document.getElementById("includeNumbers")
var includeSpecialElement = document.getElementById("includeSpecial")

var form = document.getElementById("passwordGenerator")
var passwordDisplay = document.getElementById("passwordDisplay")

var UPPERCASE_CHAR_CODES = arrayFromHighToLow(65, 90)
var LOWERCASE_CHAR_CODES = arrayFromHighToLow(97, 122)
var NUMBERCASE_CHAR_CODES = arrayFromHighToLow(48, 57)
var SPECIALCASE_CHAR_CODES = arrayFromHighToLow(33, 47).concat(arrayFromHighToLow(58, 64)).concat(arrayFromHighToLow(91, 96)).concat(arrayFromHighToLow(123, 126))


amountNumber.addEventListener("input", syncCharacterAmount)
amountRange.addEventListener("input", syncCharacterAmount)

form.addEventListener("submit", e => {
    e.preventDefault()
    var characterAmount = amountNumber.value
    var includeUppercase = includeUppercaseElement.checked
    var includeLowercasecase = includeLowercaseElement.checked
    var includeNumbers = includeNumbersElement.checked
    var includeSpecial = includeSpecialElement.checked
    var password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeLowercase, includeSpecial)
    passwordDisplay.innerText = password
})

function generatePassword(characterAmount, includeUppercase, includeLowercase, includeNumbers, includeSpecial) {
    let charCodes = LOWERCASE_CHAR_CODES
    if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
    if (includeLowercase) charCodes = charCodes.concat(LOWERCASE_CHAR_CODES)
    if (includeNumbers) charCodes = charCodes.concat(NUMBERCASE_CHAR_CODES)
    if (includeSpecial) charCodes = charCodes.concat(SPECIALCASE_CHAR_CODES)

    var passwordCharacters = []
    for (let i = 0; i < characterAmount; i++) {
      var charactercode = charCodes[Math.floor(Math.random() * charCodes.length)]
      passwordCharacters.push(String.fromCharCode(charactercode))
    }
    return passwordCharacters.join("")
}

function arrayFromHighToLow(Low, high) {
    var array = []
    for (let i = low; i <= high; i++) {
      array.push(i)
    }
    return array
}

function syncCharacterAmount(e) {
    var value = e.target.value
    amountRange.value = value
    amountNumber.value = value
}