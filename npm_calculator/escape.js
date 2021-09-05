var readlineSync = require("readline-sync")
let isAlive = true
let isLocked = true

var name = readlineSync.question("What is your name? ")
console.log(`Welcome ${name} You are NOW TRAPPED IN A ROOM!!!, You have three options choose wisely `
)

function handInHole() {
    const confirm = readlineSync.question("Is that what you choose? ")

    if (confirm === "yes" || confirm === "y") {
        console.log("You put your hand in the hole, and died... ")
        isAlive = false
    } else if (confirm === "no" || confirm === "n") {
        console.log("Good choice you are spared this time")
    } else {
        ("You must choose Yes or No....")
    }
}

function thekey() {
	if (option2 === "yes") {
		console.log("You have just aquired a key, what is it for?")
       
	} else if (option2 === "no") {
		console.log("Trying the hard way I see...")
        console.log('')
	} else {
		("You must choose yes or no... its not hard...")
        console.log('')
	}
	return "Is that your choice? lets hope you were right!!!"
}

function thedoor() {
    
    if (option3 === "yes") {
        console.log("Door is locked!")
    } else if (option3 === "no") {
        console.log("It would have been a waste of time without a key")
    }
    
    return "Is that your final decision? "
}

function giveOptions() {
    let response = readlineSync.question(
        "What do you want to do: Put hand in hole? Try Door? Find the key? "
    )
    console.log('')
    if (response === "1") {
        handInHole("yes")
    } else giveOptions()
}

// var certainDeath = readlineSync.question(
// 	"Do you want to put your hand in the hole?"
// )
// var option2 = readlineSync.question("Do you want to find the Key?")
// var option3 = readlineSync.question("Do you want to open the door?")
// var deadlyThings = ["Poisonous Spider", "Deadly Snake"]

// for (var i = 0; i < deadlyThings.length; i++){
//     var certainDeath;
//     if (i % 2 === 0) {
//         certainDeath = true
//     } else {
//         certainDeath = false
//     }
//     console.log(handinhole(certainDeath, deadlyThings[i]))
// }


// ----------* Logic *---------//
while (isAlive === true && isLocked === true) {
    giveOptions()

}