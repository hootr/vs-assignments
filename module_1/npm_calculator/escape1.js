var readlineSync = require('readline-sync');
var name = readlineSync.question('What is your name? ');
console.log('Welcome ' + name + ' You are NOW TRAPPED IN A ROOM!!!, You have three options choose wisely');
var option1 = readlineSync.question('Do you want to put your hand in the hole?');
var option2 = readlineSync.question('Do you want to find the Key?');
var option3 = readlineSync.question('Do you want to open the door?');
var isAlive = true
function handinhole (option1){
    return 'Is that what you choose'
} if (option1 === 'yes') {
   console.log('You put your hand in the hole, and died... ')
    isAlive = false
} else if ( option1 === 'no') {
    console.log('Good choice you are sparred this time')
} else {
    'You must choose Yes or No....'
}
function thekey (option2){
    return 'Is that your choice? lets hope you were right!!!'
} if (option2 === 'yes') {
    console.log('You have just aquired a key, what is it for?')
} else if (option2 === 'no'){
    console.log('Trying the hard way I see...')
} else {
    'You must choose yes or no... its not hard...'
}
function thedoor (option3){
    return 'Is that your final decision? '
} if (option3 === 'yes') {
    console.log('Door is locked!')
} else if (option3 === 'no'){
    console.log('It would have been a waste of time without a key')
}

while (isAlive === true){
}