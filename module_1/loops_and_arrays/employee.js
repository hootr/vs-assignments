let employees = []

function Employee(name, jobTitle, salary){
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.fullTime = "Full Time"
    this.printEmployeeForm = function (){
        console.log(this.name, this.jobTitle, this.salary, this.fullTime)
        return {
            name: this.name,
            jobTitle: this.jobTitle,
            salary: this.salary,
            status: this.fullTime
        }
    }
}

var person1 = new Employee ("Robert", "Machinist", "55k")
var person2 = new Employee ("John", "Shop Foreman", "95K")
var person3 = new Employee ("Dale", "Chief Operations Officer", "120K")

person1.fullTime = "Temporary"

employees.push(person1.printEmployeeForm());
employees.push(person2.printEmployeeForm());
employees.push(person3.printEmployeeForm());

console.log(employees)