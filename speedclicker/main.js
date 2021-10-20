const clicks = document.getElementById("button")
let count = localStorage.number || 0;

clicks.addEventListener('click', function() {
    count++
    clicks.textContent = count
    localStorage.number = count
    clicks.textContent = localStorage.number
     
})

const refresh = document.getElementById("refresh")

refresh.addEventListener('click', function(){
    localStorage.removeItem('number')
    count = 0
    clicks.textContent = count 
})

 var timer = 10

 setInterval(function (){
     timer--

     if(timer >= 1){
         id = document.getElementById('countdown')
         id.innerHTML = timer
     }

     if(timer === 0){
         id.innerHTML = "TIMES UP!"
         alert('you clicked ' +  count + ' times good job' )
     }

     
 }, 1000)


















// const startTiming = 20
// let time = startTiming * 60

// const timer = document.getElementById('p')

// function updateTimer(){
//     const minutes = Math.floor(time/60)
//     let seconds = time % 60

//     seconds = seconds < 10 ? '0' + seconds : seconds
//     timer.innerHTML = "minutes" + ":" + "seconds"
// }



// const time = document.querySelector('p')
// let timeSecond = 5

// time.innerHTML = '00:05'

// const countDown = setInterval(() => {
//     timeSecond--
//     time.innerHTML = '00:05'
//     if(timeSecond < 0 || timeSecond < 1){
//         clearInterval(countDown)

//     }
// }, 1000)

// const clicks = document.getElementById('button')
// let count = 0
// let num = localStorage.number || 0

// clicks.addEventListener('click', function(){
//     count++
//     clicks.textContent = count
//     localStorage.number = count
//     clicks.textContent = localStorage.number
// })

// const refresh = document.getElementById('refresh')

// refresh.addEventListener('click', function(){
//     window.reload
// })

// if (localStorageEnabled) localStorage.clear();
