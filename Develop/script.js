// Assignment Code (starter code)
var generateBtn = document.querySelector("#generate"); 

// // console.log(Math.floor(Math.random()*26) + 97);--- 
// used to generate random decimal, then multiply by 26 
// for total number in alphabet, then add unicode range for lowercase.
function getRandomLower(){return String.fromCharCode (Math.floor(Math.random()*26) + 97);
}

//changed from 97 to 65 because uppercase letters begin at unicode 65
function getRandomUpper() {return String.fromCharCode (Math.floor(Math.random()*26) + 65);

}

// changed from 26 to 10 because there are only 10 available numbers
function getRandomNumber() {return String.fromCharCode (Math.floor(Math.random()*10) + 48);

}

// created function with string to generate special characters
function getRandomSpecialCharacter() {
  var symbols = "!@#<`~$+{},>=%^./[]&*()?"
return symbols[Math.floor(Math.random()*symbols.length)]
}

// for testing functions
console.log(getRandomNumber())


// Generate Password Function
function generatePassword(){{
  var passwordArray = [""];
  var numberOfCharacters = parseInt(window.prompt("How many characters would you like your password to contain?", 25));

  if (numberOfCharacters <= 128 && numberOfCharacters >= 20){console.log ("The number of character is " +numberOfCharacters);

}
else { alert ("Please enter a number between 20 and 128");};

// Check for password criteria

const specialCharacter = window.confirm("Click Ok to confirm including special characters", "yes");
 console.log ("include special characters " + specialCharacter);

let numericValue = window.confirm("Click Ok to confirm including numeric values", "yes");
console.log ("include numberic Values " + numericValue);

let lowerCharacter = window.confirm("Click Ok to confirm including lowercase characters","yes");
console.log ("include lowercase characters " + lowerCharacter);

let upperCharacter = window.confirm("CLick ok to confirm including uppercase characters","yes");

console.log ("include upperCharacter " + upperCharacter);

 if (specialCharacter || numericValue || lowerCharacter ||upperCharacter ){

  {

    if (specialCharacter ===true) {passwordArray = passwordArray.concat (getRandomSpecialCharacter); 
    console.log ("yes")}
    if (numericValue) {passwordArray = passwordArray.concat (getRandomNumber);
    console.log ("yes")}
    if (lowerCharacter) {passwordArray = passwordArray.concat (getRandomLower);
    console.log ("yes")}
    if (upperCharacter) {passwordArray = passwordArray.concat (getRandomUpper);
    console.log("yes")}
    
    
    console.log(passwordArray)
    
    const passChars = [];
    for (let i = 0; i < numberOfCharacters; i++) {
      const characters =
      passwordArray[Math.floor(Math.random() * passwordArray.length)];
      passChars.push(String.fromCharCode(characters));
    return passChars.join ("");
    };
  
 }}

 else {alert ("Please select at least one Character Type");
  return "Please select at least one Character Type"
};
};

// else  {

// if (numberOfCharacters.indexOf(numberOfCharacters) >= 0) {
//   console.log("Length was selected appropriately");
//   let passwordArray = [];
// {
// if (specialCharacter ===true) {passwordArray = passwordArray.concat(getRandomSpecialCharacter);}
// if (numericValue) {passwordArray = passwordArray.concat(getRandomNumber);}
// if (lowerCharacter) {passwordArray = passwordArray.concat(getRandomLower);}
// if (upperCharacter) {passwordArray = passwordArray.concat(getRandomUpper);}

// }

// const passChars = [];
// for (let i = 0; i < pwdLength; i++) {
//   const characters =
//   passwordArray[Math.floor(Math.random() * passwordArray.length)];
//   passChars.push(String.fromCharCode(characters));
// } 
// };







// return passChars

// return passChars.join("");


// }








// Write password to the #password input (starter code)
function writePassword() {
  var password = generatePassword();
var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button (starter code)
generateBtn.addEventListener("click", writePassword);
}





// --------This is what we're building---------
// Click generate password button
//   1.) How many characters would you like your password to contain? 
//       a.)type a number 
//           1.)if less than 8 (error prompt)
//           2.) if more than 128 (error prompt)
//           3.)if other datatypes besides number is entered (error prompt)
//           4.) Number between 8-25 move to next step
// 2.) Click Ok to confirm including special characters 
//       a.)Ok - move to next step and include special characters
//       b.)Cancel- move to next step and do not include special characters
// 3.)Click ok to confirm including numeric values
        // a.)Ok - move to next step and include numeric values
//      b.)Cancel- move to next step and do not include numeric values
// 4.)Click ok to confirm including lowercase characters
//      a.)Ok - move to next step and include lowercase characters
//      b.)Cancel- move to next step and do not lowercase characters
// 5.)CLick ok to confirm including uppercase characters 
//      a.)Ok - move to next step and include uppercase characters
//      b.)Cancel- move to next step and do not include uppercase characters

// 6.)generate password