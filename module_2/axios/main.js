function getData() {
    axios.get("https://api.vschool.io/roberthooten/todo")
        .then(res => listData(res.data))
        .catch(err => console.log(err))
}

function listData(data) {
    clearList()

    for (let i = 0; i < data.length; i++) {
        const newLi = document.createElement('li')

        document.getElementById('myList').appendChild(newLi)
       
        const h1 = document.createElement('h1')
        h1.textContent = data[i].title
        newLi.appendChild(h1)


//** This is the Image for the added item  */ 
        const img = document.createElement('img')
        img.setAttribute("src", data[i].imgUrl)
        img.setAttribute("width", "400px")
        img.setAttribute("height", "400px")
        newLi.appendChild(img)

//** This is the item decription */
        const description = document.createElement('p')
        description.textContent = `Description: ${data[i].description}`
        newLi.appendChild(description)

 //** This is the item price */
        const price = document.createElement('p')
        price.setAttribute('id', 'price')
        price.textContent = `${data[i].price} `
        newLi.appendChild(price)



 //** This is the completed item where the check box will be and also where the line through is located */      
        const completed = document.createElement('input')
        completed.setAttribute("type", "checkbox")

        completed.style.height = '30px'
        completed.style.width = '30px'
        completed.setAttribute("name", "completed")
        completed.setAttribute("id", "completed")
       
        const completeLabel = document.createElement('label')
        completeLabel.setAttribute('for', 'completed')
        completeLabel.textContent = '-Mark Complete '
        completeLabel.style = 'font-size: 25px;'
        newLi.appendChild(completed)
        newLi.appendChild(completeLabel)

        completed.addEventListener('change', function (e) {
           
            e.preventDefault()

            if (this.checked) {
                axios.put(`https://api.vschool.io/roberthooten/todo/${data[i]._id}`, { 'completed': true })
                    .then(res => console.log(res))
                    .catch(err => console.log(err))
              
                h1.style.textDecoration = 'line-through'
                h1.style.color = 'green'
            } else {
                axios.put(`https://api.vschool.io/roberthooten/todo/${data[i]._id}`, { 'completed': false })
                    .then(res => getData())
                    .catch(err => console.log(err))
             
                h1.style.textDecoration = 'initial'
            }
        })
     
//** Everything to do with the edit and delete buttons for the item */
        const editItem = document.createElement('button')
        editItem.setAttribute('type', 'button')
        editItem.setAttribute('id', 'editButton')
        editItem.textContent = 'Edit'
        newLi.appendChild(editItem)


 
        const deleteItem = document.createElement('button')
        deleteItem.setAttribute('type', 'button')
        deleteItem.setAttribute('id', 'deleteButton')
        deleteItem.textContent = 'X'
        deleteItem.style = 'width: 10%; background-color: red;'

        newLi.appendChild(deleteItem)

        deleteItem.addEventListener('click', function (e) {
            e.preventDefault()

            axios.delete(`https://api.vschool.io/roberthooten/todo/${data[i]._id}`)
                .then(res => getData())
                .catch(err => console.log(err))
        })



        editItem.addEventListener('click', function (e) {
            e.preventDefault()

            const editInfo = document.createElement('form')
            editInfo.setAttribute('name', 'editInfo')
            newLi.appendChild(editInfo)

            const newLabel = document.createElement('label')
            newLabel.textContent = 'Title :'
            const editTitle = document.createElement('input')
            editTitle.setAttribute('name', 'editTitle')
            editTitle.setAttribute('type', 'text')
            editTitle.setAttribute('placeholder', `${data[i].title}`)
            editTitle.value = editTitle.placeholder
            editInfo.appendChild(editTitle)

            const descLabel = document.createElement('label')
            descLabel.textContent = 'Description :'
            const editDesc = document.createElement('input')
            editDesc.setAttribute('name', 'editDesc')
            editDesc.setAttribute('type', 'text')
            editDesc.setAttribute('placeholder', `${data[i].description}`)
            editDesc.value = editDesc.placeholder
            editInfo.appendChild(editDesc)
            

            const priceLabel = document.createElement('label')
            priceLabel.textContent = 'Price :'
            const editPrice = document.createElement('input')
            editPrice.setAttribute('name', 'editPrice')
            editPrice.setAttribute('type', 'number')
            editPrice.setAttribute('placeholder', `${data[i].price}`)
            editPrice.value = editPrice.placeholder
            editInfo.appendChild(editPrice)
            
            const imgLabel = document.createElement('label')
            imgLabel.textContent = 'Image :'
            const editImg = document.createElement('input')
            editImg.setAttribute('name', 'editImg')
            editImg.setAttribute('type', 'text')
            editImg.setAttribute('placeholder', `${data[i].imgUrl}`)
            editImg.value = editImg.placeholder
            editInfo.appendChild(editImg)

            h1.replaceWith(newLabel, editTitle)
            description.replaceWith(descLabel, editDesc)
            price.replaceWith(priceLabel, editPrice)
            img.replaceWith(imgLabel, editImg)

            const save = document.createElement('button')
            save.setAttribute('name', 'save')
            save.textContent = "Save"
            editItem.replaceWith(save)

            save.addEventListener('click', function (e) {
                e.preventDefault()
               
                axios.put(`https://api.vschool.io/roberthooten/todo/${data[i]._id}`, {
                    'title': `${editTitle.value}`,
                    'description': `${editDesc.value}`,
                    'price': `${editPrice.value}`,
                    'imgUrl': `${editImg.value}`
                })
                    .then(res => getData())
                    .catch(err => console.log(err))
            })
        })
    }
}



function clearList() {
    const el = document.getElementById('myList')
    while (el.firstChild) {
        el.removeChild(el.firstChild)
    }
}

getData()

const todoForm = document["itemForm"]

todoForm.addEventListener("submit", function (e) {
    e.preventDefault()
    /* class constructor */
    const newTodo = {
        title: todoForm.title.value,
        price: todoForm.price.value,
        description: todoForm.description.value,
        imgUrl: todoForm.image.value
    }
    
    todoForm.title.value = ""
    todoForm.price.value = ""
    todoForm.description.value = ""
    todoForm.image.value = ""
    
    axios.post("https://api.vschool.io/roberthooten/todo", newTodo)
        .then(res => getData())
        .catch(err => console.log(err))
})