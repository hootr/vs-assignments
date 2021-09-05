var readlineSync = require("readline-sync")
let isAlive = true
let isLocked = true
let aquiredKey = false
let escaped = false


var name = readlineSync.question("What is your name? ")
console.log(`Welcome ${name} You are NOW TRAPPED IN A ROOM!!!, You have three options choose wisely `
)

function handInHole() {
    const confirm = readlineSync.question("Is that what you choose? ")

    if (confirm === "yes" || confirm === "y") {
        isAlive = false
        console.log("You put your hand in the hole, and died... ")
        
    } else if (confirm === "no" || confirm === "n") {
        console.log("Good choice you are spared this time")
    } else {
        ("You must choose Yes or No.... Not that hard...")
    }

    return "Is that your final decision? "
}

function findTheKey() {
    const confirm = readlineSync.question("Is that what you choose? ")

	if (confirm === "yes" || confirm === "y") {
		console.log("You have just aquired a key, what is it for?")
        aquiredKey = true
	} else if (confirm === "no" || confirm === "n") {
		console.log("Trying the hard way I see...")
        console.log('')
	} else {
		("You must choose yes or no... its not hard...")
        console.log('')
	}
	return "Is that your choice? lets hope you were right!!!"
}

function tryTheDoor() {
    const confirm = readlineSync.question("Is that what you choose? ")


    if (confirm === "yes" || confirm === "y"   ) {
        console.log("Door is Locked has to be a way to open it ")
        escaped == false
        
       
    } else if (confirm === "no" || confirm === "n") {
        console.log("It would have been a waste of time without a key")
        aquiredKey = true
        escaped = true
        
    } else {
		("You must choose yes or no... its not hard...")
        console.log('')
	}
    
    return "Are you sure? "
}




function giveOptions() {
    let response = readlineSync.question(
        "What do you want to do: A: Put hand in hole? B: Find The Key? C: Try the door. "
    )
    console.log('')
    if (response === "A") {
        handInHole("yes")
    } else if (response === "A") {
        handInHole("no")
    } else if (response === "B") {
        findTheKey("yes") 
    } else if (response === "B") {
        findTheKey("no")
    } else if (response === "C") {
        tryTheDoor ("yes")
        
    } else if (response === "C") {
        tryTheDoor ("no")
    } 
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
while (isAlive === true  && escaped === false ) {
    giveOptions()

} 


