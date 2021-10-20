var form = document.getElementById("airline");
var submit = document.getElementById("submit");
var query = document.querySelector;


function formAlert() {
    var firstName = form.elements["first-name"].value;
    var lastName = form.elements["last-name"].value;
    var age = form.elements["age"].value;
    var gender = form.elements["gender"].value;
    var location = form.elements["travel-location"].value;
    


    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location +  "\nThank you for your submission keep an eye out for your confirmation email");
}


submit.addEventListener("click", formAlert);