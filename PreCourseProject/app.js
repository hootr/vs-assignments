function clickme() {
    let button = document.getElementsByClassName("click-me", function(){
   
    })
    alert('You Clicked me GREAT JOB!!')
}

function nowme() {
    const favFood = ['Italian', 'German', 'Mexican', 'Chinese']
    for (i = 0; i < favFood.length; i++){
        alert(favFood[i])
    }
}

function truefalse() {
    document.getElementById("boolean").innerHTML = 27 > 26;
    if(27 > 6)
    console.log("twenty-Seven is greater than ")
}

function myFunction() {
    let number = document.getElementById("userinput").value;
    let text;
  
    
    if (number === "6") {
      text = "Great JOB You are CORRECT!";
      
    } else if (number === "5" || number === "7") {
      text = "Almost had it, but just a little off..";
      
    } else {
      text = "WOW! Not Even Close...";
    }
    document.getElementById("answer").innerHTML = text;
  }