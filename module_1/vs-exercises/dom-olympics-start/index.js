//  *** HEADER ELEMENT *** ///
const h1 = document.createElement("h1")
h1.textContent = "Javascript made this!!"
h1.className = "header"
document.getElementById("header").appendChild(h1)

const h2 = document.createElement("h2")
h2.style.textAlign = "center"
h2.innerHTML = '<span class="name">Robert Hooten</span> wrote the javascript'
document.getElementById("header").appendChild(h2)


const messagesContainer = document.querySelector('.messages')

const clearBtn = document.getElementById('clear-button')
clearBtn.addEventListener('click', function(){
	messagesContainer.innerHTML = ''
})
// *** Changing to Positive Text *** //
const messages = document.getElementsByClassName("message")

messages[0].textContent = "You are the absolute best"
messages[1].textContent = "Awe! thank you! I really needed that"
messages[2].textContent = "You are very welcome."
messages[3].textContent = "You are a fantastic human"

// *** Changing theme of the text *** ///
const themes = document.getElementById('theme-drop-down')
themes.onchange =  function(){
	let colors = themes.value.split("/") 
    // "blue/brown"
    // ["blue", "brown"]
	
	let leftMessages = document.querySelectorAll('.message.left')
	for(let i = 0; i < leftMessages.length; i++){
		leftMessages[i].style.background = colors[0]
	}
	
	let rightMessages = document.querySelectorAll('.message.right')
	for(let i = 0; i < rightMessages.length; i++){
		rightMessages[i].style.background = colors[1]
	}
}

// *** Adding new message with every other message going to oposite side *** ///
const input = document.getElementById('input')
const form = document.querySelector('form')
input.value = "Enter Message Here"
let right = false
form.addEventListener('submit', function(e){
	e.preventDefault()
	if(right){
		messagesContainer.innerHTML += '<div class="message right">' + input.value + '</div>'
	}else{
		messagesContainer.innerHTML += '<div class="message left">' + input.value + '</div>'
	}
	right = !right
})