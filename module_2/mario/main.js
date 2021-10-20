var form = document.getElementById("price");
var Goomba = document.getElementById("goom");
var myGoombaCost = document.getElementById("goombaCost");
var kingBob = document.getElementById("bobs");
var kingBobCost = document.getElementById("bobCost");
var cheepCheeps = document.getElementById("cheepcheeps");
var cheepCheepsCost = document.getElementById("cheepCheepCost");
var totalPrice = document.getElementById("totalP");
// functions for keeping count of the total price
function goombaCount (event){
    goombaCost.value = event.target.value * 5;  
    grandTotalPrice(); 
}
goom.addEventListener("input", goombaCount); 
function bobCount (event){
    bobCost.value = event.target.value * 7;
    grandTotalPrice();
}
bobs.addEventListener("input",bobCount);

function cheepCheepCount(event){
    cheepCheepCost.value = event.target.value * 11;
    grandTotalPrice();
}
cheepcheeps.addEventListener("input",cheepCheepCount);

function grandTotalPrice (){
    totalPrice.innerHTML = parseInt(goombaCost.value) + parseInt(bobCost.value) + parseInt(cheepCheepCost.value)
    
}