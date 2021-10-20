// using .filter method we are parsing the array, and only returning the numbers that equal or larger than 5
function fiveAndGreaterOnly(arr) {
    return arr.filter(num => num > 5);
  }

console.log(fiveAndGreaterOnly([3, 6, 8, 2]));

// using .filter method we are only returning the even numbers from the array
function evensOnly(arr) {
    return arr.filter(num => num % 2 === 0);
  }

console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]

// we are only return the items in the array that are 5 characters or less in length 
function fiveCharactersOrFewerOnly(arr) {
    return arr.filter(names => names.length < 5)
  }

console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]

// using .filter we are only going to return the names of the members who do not  belong to the club
function peopleWhoBelongToTheIlluminati(arr){
    return arr.filter(member => member.member === true)
  }

  console.log(peopleWhoBelongToTheIlluminati([
      { name: "Angelina Jolie", member: true },
      { name: "Eric Jones", member: false },
      { name: "Paris Hilton", member: true },
      { name: "Kayne West", member: false },
      { name: "Bob Ziroll", member: true }
  ]));

// we are going to filter all the people that are old enough to see the matrix movie. anyone older than 18
function ofAge(arr){
    return arr.filter(matrix => matrix.age < 17 === false)
  }
  console.log(ofAge([
      { name: "Angelina Jolie", age: 80 },
      { name: "Eric Jones", age: 2 },
      { name: "Paris Hilton", age: 5 },
      { name: "Kayne West", age: 16 },
      { name: "Bob Ziroll", age: 100 }
  ])); 