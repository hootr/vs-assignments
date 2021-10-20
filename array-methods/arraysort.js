// we will complete each array using the .sort method

// taking the array we will sort and put the numbers in order from smallest to largest
function leastToGreatest(arr) {
    return arr.sort((a, b) => a - b)
  }
  
  console.log(leastToGreatest([1, 3, 5, 2, 90, 20])); 

// we are taking an array and sorting the numbers largest to smallest
function greatestToLeast(arr) {
    return arr.sort((a, b) => b - a)
  }
  
  console.log(greatestToLeast([1, 3, 5, 2, 90, 20])); 

// parsing the array we are sorting from the largest string to the smallest
function lengthSort(arr) {
    return arr.sort((a, b) => a.length - b.length)
  }
  
  console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"])); 

// we are going to sort the array in alphabetical order. 
function alphabetical(arr) {
    return arr.sort()
}

console.log(alphabetical(["dog", "wolf", "by", "family", "eaten"])); 

// sorting the array by age from youngest to oldest
function byAge(arr){
    return arr.sort((a, b) => a.age - b.age)
  }
  
  console.log(byAge([
      { name: "Quiet Samurai", age: 22 },
      { name: "Arrogant Ambassador", age: 100 },
      { name: "Misunderstood Observer", age: 2 },
      { name: "Unlucky Swami", age: 77 }
  ]));