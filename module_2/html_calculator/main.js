let form = document["calculator"]
const add = form.querySelector('#addition').querySelector('#add')
add.addEventListener('click', function(event) {
    event.preventDefault()
    let add1 = form.add1.value
    let add2 = form.add2.value
    let addsum = Number(add1) + Number(add2)
    // console.log(addsum)
    // let newDiv = document.createElement('div')
    // form.appendChild(p)
    // newDiv.textContent = '${add1}' + '+' + '${add}' + '=' + '${addsum}'
    // console.log(addsum)
    let newP = document.createElement('p')
    newP.textContent = add1 + ' + ' + add2 + ' = ' + addsum
    let div = document.getElementById("addition")
    div.append(newP)
    form.add1.value = ""
    form.add2.value = ""
})

const sub = form.querySelector('#subtract').querySelector('#sub')
sub.addEventListener('click', function(event){
    event.preventDefault()
    let sub1 = form.sub1.value
    let sub2 = form.sub2.value
    let subsum = Number(sub1) - Number(sub2)
    let newP = document.createElement('p')
    newP.textContent = sub1 + ' - ' + sub2 + ' = ' + subsum
    let div = document.getElementById("subtract")
    div.append(newP)
    form.sub1.value = ""
    form.sub2.value = ""


})

const mult = form.querySelector('#multiply').querySelector('#multi')
mult.addEventListener('click', function(event){
    event.preventDefault()
    let multi1 = form.multi1.value
    let multi2 = form.multi2.value
    let multisum = Number(multi1) * Number(multi2)
    let newP = document.createElement('p')
    newP.textContent = multi1 + ' x ' + multi2 + ' = ' + multisum
    let div = document.getElementById('multiply')
    div.append(newP)
    form.multi1.value = ""
    form.multi2.value = ""
})
// const subResult = form.querySelector('#subtract').querySelector('#subResult')
// subResult.addEventListener('click', function(event) {
//     event.preventDefault()
//     let sub1 = form.sub1.value
//     let sub2 = form.sub2.value
//     let subtractSum = Number(sub1) - Number(sub2)
//     // console.log(addsum)
//     // let newDiv = document.createElement('div')
//     // form.appendChild(p)
//     // newDiv.textContent = '${add1}' + '+' + '${add}' + '=' + '${addsum}'
//     // console.log(addsum)
//     let newP = document.createElement('p')
//     newP.textContent = sub1 + ' + ' + sub2 + ' = ' + subtractSum
//     let div = document.getElementById("addition")
//     div.append(newP)
// })


// form.addEventListener('click', function(event){
//     event.preventDefault()
//      alert("its working")

//      const add1 = form.add1.value
//      const add2 = form.add2.value
//      form.add1.value = ""
//      form.add2.value = ""

//      console.log(add1 + " " + add2)

//      const sub1 = form.sub1.value
//      const sub2 = form.sub2.value
//      form.sub1.value = ""
//      form.sub2.value = ""

//      console.log(sub1 + " " + sub2)

//      const multi1 = form.multi1.value
//      const multi2 = form.multi2.value
//      form.multi1.value = ""
//      form.multi2.value = ""

//      console.log(multi1 + " " + multi2)

// })

// creating html element