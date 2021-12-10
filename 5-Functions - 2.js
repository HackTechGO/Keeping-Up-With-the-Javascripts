/*
 * Functions - 2
 *
 */



const users = [{
    name: "Chris",
    age: 60
  },
  {
    name: "Jane",
    age: 30
  },
  {
    name: "Billy",
    age: 45
  }
];
const mapUserNames = (myArr) => myArr.map((user) => user.age);


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evens = numbers.filter((n) => n % 2 === 0);
const odds = numbers.filter((n) => n % 2 !== 0);
const numberDoubler = (num) => {
  const numberContainer = [];
  num.forEach((n) => {
    const doubled = n * 2;
    numberContainer.push(doubled);
  });
  return numberContainer;
}
console.log(numberDoubler(numbers));


function numberMultiplier(x = 5, y = 10) {
  return x * y;
}

function numberMultiplier(x, y) {
  x = x || 5;
  y = y || 10;
  return x * y;
}


const initialString = "How are you?"

function stringSplitter(str = initialString) {
  return str.split(" ");
}


const bankAccount = {
  canSpendMoney: true,
  balance: 100
}


function purchaseItem(price, acct = bankAccount) {
  if (acct.canSpendMoney) {
    acct.balance -= price;
    if (acct.balance <= 0) {
      acct.canSpendMoney = false;
    }
    return true;
  } else {
    return false;
  }
}


function multiply(multiplier, ...nums) {
  return nums.map((n) => multiplier * n)
}


function Dog(years, breed) {
  this.age = years;
  this.type = breed;
  setInterval(() => {
    this.age += 1;
  }, 5000)
}

const spike = new Dog(3, "Golden Retriever");
const fido = new Dog(5, "Poodle");