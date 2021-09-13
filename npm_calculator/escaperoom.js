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
	
}

function tryTheDoor() {
    const confirm = readlineSync.question("Is that what you choose? ")


    if (confirm === "yes" || confirm === "y"   ) {
        console.log("Door is Locked has to be a way to open it ")
        escaped = true
        
       
    } else if (confirm === "yes" || confirm === "y") {
        console.log("It would have been a waste of time without a key")
        aquiredKey = true
        escaped = true
        
    } else {
		("You must choose yes or no... its not hard...")
        console.log('')
	}
    
    
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



// ----------* Logic *---------//
while (isAlive === true  && escaped === false ) {
    giveOptions()

} 


