// Write a function that takes an array of numbers and returns the largest
const numArr = ([3, 5, 2, 8, 1]); // => 8
largest = 0;

numArr.forEach ((element) => {
    if (largest < element) {
        largest = element;
    }
})

console.log(`The largest number in the array : ${largest}`);

//Write a function that takes an array of words and a character and returns each word that has that character present.

function lettersWithStrings(array, x) {
    let matches = [];
    for (let i = 0; i < array.length; i++) {
        let arrayValue = array[i].split('');
        for (let k = 0; k < arrayValue.length; k++) {
            if (arrayValue[k] == x) {
                matches.push(arrayValue.join(''));
            } 
        }
    }
    return matches;
}

console.log(lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "#"))

//Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2.


let divisible = (num1, num2) => {
    if(num1 % num2 === 0) {
        console.log("true")
    }
    else{
        console.log("false")
    }
    
}

divisible(4, 2) // => true
divisible(9, 3) // => true
divisible(15, 4) // => false