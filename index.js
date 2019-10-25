//Dom elements
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboard = document.getElementById('clipboard');

const randomFunc = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol
}
//generate event listen
generateEL.addEventListener('click', () => {
  const length = +lengthEl.value;
	const hasLower = lowercaseEl.checked;
	const hasUpper = uppercaseEl.checked;
	const hasNumber = numbersEl.checked;
	const hasSymbol = symbolsEl.checked;

  resultEl.innerText = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length
      );
});

//Generate password function
function generatePassword(lower, upper, number, symbol, length){
  //1. init pw var
  //2. filter out unchecked types
  //3. loop over length call generator function for each types
  //4. add final pw to the pw var and return

    
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
