let myDiv = document.querySelector('button');
let scroll = document.querySelector('button');


myDiv.addEventListener('mouseover', () => {
    myDiv.style.backgroundColor = "blue"
})
myDiv.addEventListener('mouseout', () => {
    myDiv.style.backgroundColor = "blue"
})

myDiv.addEventListener('mousedown', () => {
    myDiv.style.backgroundColor = "red"
})

myDiv.addEventListener('mouseup', () => {
    myDiv.style.backgroundColor = "yellow"
})

myDiv.addEventListener('dblclick', () => {
    myDiv.style.backgroundColor = "green"
})

window.addEventListener('mousewheel', () => {
    myDiv.style.backgroundColor = "orange"
})


window.addEventListener('keydown', checkKeyPress, false);

function checkKeyPress(key){
    if (key.keyCode == "65"){
        alert('You pressed A')
    } else if (key.keyCode == "82"){
        myDiv.style.backgroundColor = "red"
    }else if (key.keyCode == "66"){
        myDiv.style.backgroundColor = "blue"
    }else if (key.keyCode == "89") {
        myDiv.style.backgroundColor = "yellow"
    }else if (key.keyCode == "71") {
        myDiv.style.backgroundColor = "green"
    }else if (key.keyCode == "79") {
        myDiv.style.backgroundColor = "orange"
    }
}
