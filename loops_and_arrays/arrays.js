var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

// using the .pop method we are removing the last element in the vegetables array
vegetables.pop()
console.log("vegetables", vegetables)

console.log("=========================")
// using the .shift method we are removing the last element in the fruit  array
fruit.shift()
console.log("fruit", fruit)

console.log("======================")

// using .indexOf method we are getting the index of orange in the fruit array.
var orangeIndex = fruit.indexOf("orange")
console.log(orangeIndex)

console.log("=====================")

// using .push method we are pushing the number 2 which indicates the index of the element orange in the fruit array
fruit.push(2)
console.log("fruit", fruit)

console.log("=====================")

for(var i = 0; i <= vegetables.length; i++){

}
console.log([i])
// using the .push method we are pushing the number 5 which indicates the length of the vegetables  array
console.log("======================")
vegetables.push(5)
console.log("vegetables", vegetables)

// using .concat we are concatinating the array fruit and vegetables into one array containing both arrays.
console.log("==========================")
var food = fruit.concat(vegetables)
console.log(food)

// using .splice method, we are splicing 2 items from the array starting at the index of 4
console.log("=======================")
food.splice(4, 2)
console.log(food)

// Turning var Food into a string, and reversing it 
console.log("====================")
var allAtOnce = food.reverse().join(",")
console.log(allAtOnce)