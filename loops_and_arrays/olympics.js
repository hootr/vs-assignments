//------ Prelims ----//
var numbers = [1, 2, 3, 4, 5, 6, 7 ,8 ,9]
for (var i = 0; i < numbers.length; i++){
    console.log(numbers[i])
}
for (var i = numbers.length - 1; i >= 0; i--){
    console.log(numbers[i])
}

const fruit = ["banana", "orange", "apple", "kiwi"]
for (var i = 0; i < fruit.length; i++){
    console.log(fruit[i])
}

//----- Going for Bronze Medal-------//
var blankarray = [];
for(var i = 0; i < 10; i++){
    blankarray.push(i);
}
console.log(blankarray);
for(var i = 0; i<= 100; i++){
    console.log((i % 2 == 0) ? i: "");
}
const thefruits = ["banana", "orange", "apple", "kiwi", "pear", "peach"];

var everyOtherFruit = [];
for (var i = 0; i < thefruits.length; i += 2){
    everyOtherFruit.push(thefruits[i]);
} 
console.log(thefruits);
console.log(everyOtherFruit);

//------- Going For Silver Medal//
const peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ];

  var nameArray = [];
  var occupationArray = [];

  for(var people of peopleArray){
      console.log(people.name);
      nameArray.push(people.name);
      occupationArray.push(people.occupation);
  }
  console.log(nameArray +"  "+ occupationArray);
  var everyOtherNameArray = [];
  var everyOtherOccupationArray = [];


  for(var i = 0; i < peopleArray.length; i += 2){
    everyOtherNameArray.push(peopleArray[i].name);
  }
  for(var i = 1; i < peopleArray.length; i += 2){
    everyOtherOccupationArray.push(peopleArray[i].occupation);
}
  console.log(everyOtherNameArray+"   "+everyOtherOccupationArray);



// Of course gotta try the gold //
var nestedArr = [];
for(var i = 0 ; i <= 2; i++){
    nestedArr.push([]);
    for(var j = 0; j <= 2; j++){
        nestedArr[i].push(0);
    }
}
console.log(nestedArr);


var nestedArr =[];
for(var i = 0; i <= 2; i++){
    nestedArr.push([]);
    for(var j = 0; j<= 2; j++){
        nestedArr[i].push(i);
    }
}
console.log(nestedArr);

var nestedArr =[];
for(var i = 0; i<= 2; i++){
    nestedArr.push([]);
    for(var j = 0; j <= 2; j++){
        nestedArr[i].push(j);
    }
}
console.log(nestedArr);

for(var arr in nestedArr){
    for(var innerValue in nestedArr[arr]){
        if(typeof(nestedArr[arr][innerValue]) =='number'){
            nestedArr[arr][innerValue] = 'X';
            
        }
    
    }
    
}
console.log(nestedArr);