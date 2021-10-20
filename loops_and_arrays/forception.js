

var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"

function forception(people, alphabet){
    const newArr = []
    for (var i = 0; i < people.length; i++){
        newArr.push(people[i] + ":");

        for (var j = 0; j < alphabet.length; j++){
            newArr.push(alphabet[j].toUpperCase());
        }
    }
    return newArr;
}

console.log(forception(people, alphabet));