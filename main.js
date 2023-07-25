// Bai1
function chialaydu(a, b) {
    const divisionResult = Math.floor(a / b);
    const remainder = a % b;
    return { divisionResult, remainder };
  }
  const result = chialaydu(17, 4);
  console.log(result);

// Bai2
function fruits() {
    return ["apple", "banana", "orange", "kiwi", "mango"];
  }
  
  function getLastWord() {
    const fruitArray = fruits();
    return fruitArray[fruitArray.length - 1];
  }
  
  function getFirstElement() {
    const fruitArray = fruits();
    return fruitArray[0];
  }
  
  // Call getLastWord function and console.log the result
  const lastFruit = getLastWord();
  console.log("Last fruit:", lastFruit); // Output: "Last fruit: mango"
  
  // Call getFirstElement function and console.log the result
  const firstFruit = getFirstElement();
  console.log("First fruit:", firstFruit); // Output: "First fruit: apple"
  
//Bai3
// A
var sum = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < sum.length; i++) {
  console.log(sum[i]);
}
//B
var sum = [1, 2, 3, 4, 5, 6];
var totalSum = 0;
var i = 0;
while (i < sum.length) {
  totalSum += sum[i];
  i++;
}
console.log("Total sum:", totalSum);

// Bai 4
var a = 8;
var b = 6;
var c = a - b;

if (c >= 2) {
  console.log("Result of c:", c);
} else {
  console.log("Result of c is smaller than 2. Please re-enter numbers a and b.");
}