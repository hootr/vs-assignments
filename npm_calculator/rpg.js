const readlineSync = require('readline-sync');

const welcome = readlineSync.question('Welcome to the Colossal Adventure!')
console.log(welcome)

const userName = readlineSync.question('What is your name? ')
console.log('Hi ' + userName + '!') 

let isAlive = true;

let inventory ={
    name: userName,
    hp: 100,
    items: []
}

const items = ["sword", "first aid kit", "knife", "magic potion"];

let enemyOne = {
    name: "Cannibelle"
};

let enemyTwo = {
    name: "Barewolf"
};

let enemyThree = {
    name: "Lunatick"
};

const enemy = [enemyOne, enemyTwo, enemyThree];

function walking() {
    const input = readlineSync.keyInSelect('Press [W] to walk or [P] to print your inventory.')({limit:["w"]});
    if (input === "w"){
        let randomEnemy = Math.floor(Math.random() * 4 ) 
         if (randomEnemy === 1) {
            console.log('There is ' + enemy + 'ahead')
            fight();
    } else {
        console.log('There are no threats ahead, proceed with caution.')
    }
 } else if (input === "p"){
     console.log("These are the current items in your inventory.")
    }
}