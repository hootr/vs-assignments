// using multiple array methods we will take the array
// sort everyone over the age of 18
// sort everyone alphabetically by their last name and by their location
// we will then put each of the names that are returned into a html <li> tag with first name last name and age 

var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

function sortedOfAge(arr) {
    let people = arr

        .filter((person) => {
            if (person.age > 18) {
                return person;
            }
        })

        .sort((a, b) => {
            b.lastName - a.lastName
        })

        .map(name => "<li>" + name.firstName + " "+ name.lastName + " " + name.age +"</li>")
        
    return people;
}
console.log(sortedOfAge(peopleArray));
