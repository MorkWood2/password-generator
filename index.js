//Dom elements
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEL = document.getElementById('clipboard');

const randomFunc = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol
}
//generate event listen
generateEl.addEventListener('click', () => {
  const length = +lengthEl.value;
  //unchecked dom elements don't have a variable
	const hasLower = lowercaseEl.checked;
	const hasUpper = uppercaseEl.checked;
	const hasNumber = numbersEl.checked;
	const hasSymbol = symbolsEl.checked;

//pass the values into generatePassword function

  resultEl.innerText = generatePassword(
    hasUpper,
    hasLower,
    hasNumber,
    hasSymbol,
    length
      );
});


//copy password to clipboard

clipboardEL.addEventListener('click', () => {
  const textarea = document.createElement('textarea');
  const password = resultEl.innerText;

  if(!password){
    return;
  }

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
  alert('password copied to clipboard!')
});

//Generate password function
function generatePassword(upper, lower, number, symbol, length){
  //1. init pw var
  //2. filter out unchecked types
  //3. loop over length call generator function for each types
  //4. add final pw to the pw var and return
let generatedPassword = ''; // set to an empty string

const typesCount = lower + upper + number + symbol;

// console.log('TypesCount: ', typesCount);

const typesArr = [{lower}, {upper}, {number}, {symbol}].filter
(item => Object.values(item)[0]
);

// console.log('types Arr:', typesArr);

if (typesCount === 0) {
  return '';
  }
  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach( type => {
      const funcName = Object.keys(type)[0];
        // console.log('funcName: ',  funcName);

      generatedPassword += randomFunc[funcName]();
    });
  }

const finalPassword = generatedPassword.slice(0, length);

return finalPassword;
}
//Generator functions - http://www.net-comber.com/charset.html

function getRandomLower(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber(){
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol(){
  const symbols =  '!@#$%^&*(){}[]=<>/,.'
  return symbols[Math.floor(Math.random() * symbols.length)];
}


