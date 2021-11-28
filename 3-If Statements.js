/*
 * If Statements
 *
 */

// Strict equality operator

const shouldSayHi = true;

if (shouldSayHi === true) {
  alert('Hi there');
}

const numberFive = 5;
console.log(typeof numberFive);
const stringFive = '5';
console.log(typeof stringFive);
console.log(numberFive == stringFive); //true
console.log(numberFive === stringFive); //false

// If statement
// Tells the code: if this thing is true, run more code

// if (expression) {
// statement(s) to be executed if expression
// evaluates to truthy or falsey
// }

// operators: https://www.w3schools.com/js/js_comparisons.asp
const myArray = [1, 2, 3];
const myOtherArray = [1, 2, 3]; //vs =myArray
console.log(myArray == myOtherArray);

const bankAccountBalance = 100;
const costOfItem = 123;
const hasCreditCard = true;
const hasReachedCreditLimit = true;

if (bankAccountBalance >= costOfItem) {
  console.log('Congrats! You can pay for this with cash!');
} else if (hasCreditCard && !hasReachedCreditLimit) {
  console.log('You can pay for this with credit');
} else {
  console.log('Sorry, you cannot purchase this item! :(');
}
