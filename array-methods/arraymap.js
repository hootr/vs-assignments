//using .map method we are multiplying the numbers by 2

function doubleNumbers(arr){
    return arr.map(num => num * 2);
  }
  
  console.log(doubleNumbers([2, 5, 100])); 

 // using .map method we are taking a array and making it return as a string
  
  function stringItUp(arr){
    return arr.map(num => num.toString())
  }
  
  console.log(stringItUp([2, 5, 100])); 

// using .map method we are capaitalizing the first letter of each name in the array

function capitalizeNames(arr){
    return arr.map(name => name.charAt(0).toUpperCase() + name.substring(1).toLowerCase())
  }
  
  console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));
  
// using .map method we are taking the objects of the array and only returning the names of the object

  function namesOnly(arr){
    return arr.map(names => names.name)
  }
  
  console.log(namesOnly([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ])); 

// using .map method we are taking another array object and parsing through the age to see if they are old enough to see the movie
// if they are old enough it will print can go to the matrix, if they are not old enough it will print is under age
  
  function makeStrings(arr){
    return arr.map(matrix => {
        if (matrix.age > 17){
            return matrix.name + " can go to The Matrix"
        } else {
            return matrix.name + " is under age!!"
        }
    })
  }
  
  console.log(makeStrings([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ])); 

// using .map we are taking objects from an array and putting the objects both name and age and putting them inside a h1 tag for name, and h2 tag for age

function readyToPutInTheDOM(arr){
    return arr.map(name => "<h1>" + name.name + "</h1><h2>" + name.age + "</h2>")
  }
  console.log(readyToPutInTheDOM([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ])); 