const readlineSync = require('readline-sync');

const welcome = readlineSync.question('Welcome to the Cat Day trip RPG! You are now a cat going on about your normal cat day. Careful though there are dangerous animals on the lookout for you..  Please press enter to begin.')
console.log(welcome)

const userName = readlineSync.question('What is your name? ')
console.log('Hi ' + userName + '! Lets see how long you will survive as a cat, my guess is only about 2 fights!') 

let isAlive = true;

function randomDamage (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
  }

let playerInfo = {
    name: userName,
    hp: 100,
    items: ["Catnip ", "Jingly Bell" ],
    damage: randomDamage(5, 20),
}

function Enemy (name, hp,) {
    this.name = name
    this.hp = hp
}

function createEnemy () {
    let randomNum = Math.floor(Math.random() * 3)
    if (randomNum === 0){
        return new Enemy("itty bitty Kitty Cat", 100,);
    } else if (randomNum === 1){
        return new Enemy("Famous Flying Squirrel", 100,);
    } else {
        return new Enemy("Mighty Mouse", 100,);
    }
}



function walk (input) {
    if (input == "w") {
        let randomEnemy = Math.floor(Math.random() * 4)
        if (randomEnemy === 2) {
            let currentEnemy = createEnemy();
            console.log(`You have encountered The ${currentEnemy.name}!`)
            fight ();
        } if (randomEnemy === 1) {
            console.log ('Threat level is low, but you are never totally safe ')
        } else if (randomEnemy === 0) {
            console.log('Keep walking')
        }
    } else if (input === "p"){
        console.log (playerInfo)
    }
}

function run () {
    let runChance = Math.floor(Math.random () * 4)
    if (runChance > 3) {
        console.log ("You actually got away very impressive")
    } else if (runChance <= 3) {
        console.log ("The enemy isnt going to let you run, you might now have to fight Good luck!")
        attack ();
    }
}

function fight () {
    const fightRun = readlineSync.question('Would you like to fight [f], or run [r]?');
    console.log (" ")
    if (fightRun === "f"){
        attack ();
    } else if (fightRun === "r"){
        console.log ("You must be scared, you are running really fast!")
       run ();
    } else {
        console.log ("Its not super hard you must make a selection")
    }
}

function attack () {
    let fightEnemy = Math.floor(Math.random() * 5)
    if (fightEnemy === 1) {
        console.log('You are done for now, you encountered a known enemy ')
        playerDies();
    } else {
        console.log ("You have won against the enemy! You gained 10 HP and a new item!")
        playerInfo.hp = playerInfo.hp + 10;
        playerInfo.items = playerInfo.items + ", Super Cat Nip"; 
        console.log(`The damage you received was ${playerInfo.damage}!`)
    }
}



function playerDies () {
    isAlive = false
    console.log ("Game Over, you sure didnt last very long. guess you dont have nine lives")
    
}

while (isAlive == true) {
    const input = readlineSync.question("Press 'w' to walk, or press 'p' or type 'print' to check the player inventory and HP. ")
    walk (input);
}