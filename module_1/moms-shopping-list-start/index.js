function $(selector){
    return document.querySelector(selector)
}
// Setting up Constants, with document.querySelector with the $ //
const form = $('#add-todo')
const input = $('#title')
const list = $('#list')
const submitBtn = $('form button')

let editing = false
let editingEl = null

let items = []

// Form Submit event listener //
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const title = input.value
    if(editing){
        editItem(title)
    }else{
        addItem(title)
    }
})

// Getting the Layout of the New Items that will be added to the list // 
function addItem(title){
    /*
//         <li>
//             <div>Milk</div>
//             <button>edit</button>
//             <button>X</button>
//         </li>
//     */
    const item = document.createElement('li')
    //<li>
    // <div>Milk</div>
    // <li>
    const div = document.createElement('div')
    div.innerText = title
    const editBtn = document.createElement('button')
    editBtn.innerText = 'edit'
    const deleteBtn = document.createElement('button')
    deleteBtn.innerText = 'X'

    deleteBtn.addEventListener('click', () => {
        items = items.filter(itm => itm != title)
        saveItems()
        list.removeChild(item)
    })
// this is how you edit the item once its been submitted // 
    editBtn.addEventListener('click', () => {
        input.value = title
        submitBtn.innerText = 'save'
        editing = true
        editingEl = div
    })
// all items that need to be appended to the add Element //
    item.appendChild(div)
    item.appendChild(editBtn)
    item.appendChild(deleteBtn)

    list.appendChild(item)
    input.value = ''

    items.push(title)
    saveItems()
}

// this lets the code differentiate between the sumbit and edit button
function editItem(title){
    let previous = editingEl.innerText

    let i = items.indexOf(previous)
    items[i] = title
    saveItems()

    editingEl.innerText = title
    input.value = ''
    submitBtn.innerText = 'submit'
    editing = false
    editingEl = null
}

// by utilizing local storage we are saving the items
// so when page is refreshed they do not disappear
// have to use stringify to put the array into a string in order to save to local storage

function saveItems(){
    localStorage.setItem('items', JSON.stringify(items))
}
// this will load items, by taking them out of string format and putting them back into an array
function loadItems(){
    const items = JSON.parse(localStorage.getItem('items'))
    if(items){
        items.forEach(item => {
            addItem(item)
        })
    }
}

loadItems()