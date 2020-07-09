// pulling HTML elements using getEleById and storing them within relative variables
const displayPassword = document.getElementById("displayPassword");
const passwordForm = document.getElementById("passwordForm");
const passwordLength = document.getElementById("passwordLength");
const passwordNumber = document.getElementById("passwordNumber");
const lowercaseElement = document.getElementById("lowercase");
const uppercaseElement = document.getElementById("uppercase");
const numbersElement = document.getElementById("numbers");
const symbolsElement = document.getElementById("symbols");

// declaring function for value of number and length of expected password to match to slidebar
function activateSlidebar(event) {
    let amount = event.target.value;
    passwordLength.value = amount;
    passwordNumber.value = amount;
};

// adding event listener for input(click) on slidebar
passwordLength.addEventListener("input", activateSlidebar);
passwordNumber.addEventListener("input", activateSlidebar);

//adding event listener for following; preventing refresh on submit, defining variables set with checked box to show when called, giving password amount value selected by slidebar
passwordForm.addEventListener("submit", function submitPassword(event) {
    event.preventDefault();
    const passwordAmount = passwordNumber.value;
    const lowers = lowercaseElement.checked;
    const uppers = uppercaseElement.checked;
    const numbers = numbersElement.checked;
    const symbols = symbolsElement.checked;
    const createdPassword = createPassword(passwordAmount, lowers, uppers, numbers, symbols);
    displayPassword.innerText = createdPassword;
});

// Array of special characters to be included in password
var symbolCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
  ];
  
  // Array of numeric characters to be included in password
  var numberCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  // Array of lowercase characters to be included in password
  var lowercaseCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];
  
  // Array of uppercase characters to be included in password
  var uppercaseCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ];


// creating function for if statements to code if a box is checked to make sure the value of said box is pushed into the for loop of math.random
function createPassword(passwordAmount, lowers, uppers, numbers, symbols) {
    let passwordValue = lowercaseCharacters[0];
    
    if (lowers) passwordValue = passwordValue.concat(lowercaseCharacters);
    if (uppers) passwordValue = passwordValue.concat(uppercaseCharacters);
    if (numbers) passwordValue = passwordValue.concat(numberCharacters);
    if (symbols) passwordValue = passwordValue.concat(symbolCharacters);

    // creating a blank array for random characters to be inserted after pushed as a string
    let passwordCharacters = []

    //creating a for loop and initializing math.random to go as long as set length, pushing the that set of characters and returning them as strings for the array
    for (let i = 0; i < passwordAmount; i++) {
        const randomPassword = passwordValue[Math.floor(Math.random() * passwordValue.length)];
        passwordCharacters.push(randomPassword)
    };
    // returning the stringified values and storing them into the array
    return passwordCharacters.join("");
};
