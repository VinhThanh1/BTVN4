//Bai1
// function chialaydu(a, b) {
//     const divisionResult = Math.floor(a / b);
//     const remainder = a % b;
//     return { divisionResult, remainder };
//   }
//   const result = chialaydu(17, 4);
//   console.log(result);

//Bai2
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
