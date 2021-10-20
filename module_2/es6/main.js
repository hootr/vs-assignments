// Use let and const and try to use these new features,Replace all the vars with let and const,John is the pet owner, and his name should be stored differently than the other names.
const name = 'Spot'
let age = 101
let pets = ["cat", "dog"]

let petObjects = []

for (let i = 0; i < pets.length; i++) {
    let pet = {
        type: pets[i]
    }
    let name;
    if (pets[i] === "cat") {
        name = "fluffy"
    } else {
        name = "spot"
    }
    pet.name = name
    petObjects.push(pet)
}
console.log(petObjects);

// Fat arrow functions.
// re-write this .map() using a fat arrow function:
// Be aware that if JavaScript sees a { directly after the => it will think it's starting a function, and not starting an object, so the : will be an unexpected symbol.
// const vegetables = carrots.map(function(carrot){  
//     return {type: "carrot", name: carrot}
// })
//(map  = runs a function using every element in existing array to create a new array )
const carrots = [{
    type: "carrot",
    vegetables: "carrot"
}];
const vegetables = carrots.map(carrots => carrots.vegetables);
console.log(vegetables);



const person = [{
    name: "Robert",
    friendly: false
}];

const friends = person.filter(person => !person.friendly);
console.log(friends);


let doMathSum = (a, b) => a + b


let produceProduct = (a, b) => a * b
console.log(doMathSum(4, 2), produceProduct(6, 2));



const outPutSentence = (
    firstName = "Jane", 
    lastName = "Doe", 
    age = 100) => `hi ${firstName} ${lastName}, how does it feel to be ${age}`
    
console.log(outPutSentence());
console.log(outPutSentence("kat","Stark",40));


animals = [{
    type:"dog"
},{
    type:"cat"
}]

const dogs = animals.filter(animal => animal.type === "dog" ? true:false);
    console.log(dogs);

//Template Literals
// Write a function that will take location and name and output this if location="Hawaii" and name="Janice":

const output = (name,location) => `Hi ${name}!\n\nWelcome to ${location}.\n\nI hope you enjoy your stay. Please ask the president of Hawaii if you need anything`; 

console.log(output("Robert","Hawaii"));



// let name = "Jacob"
// let age = 20
// console.log('hello, my name is ${name} and I am ${age} years old')