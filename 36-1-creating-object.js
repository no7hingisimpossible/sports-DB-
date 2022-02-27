// Different ways to create object 

// 1. Creating object the classic way 
const student = { name: 'Fahim Madani', profession: 'student' }

// 2. Creating object constructor 
const person = new Object()
// console.log(person)

// 3. Inherit 
const citizen = Object.create(student)
// console.log(citizen.name)

// 4. Creating object with Class Syntactical Sugar (it is the new way of creating objects)
class People {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}
const people = new People('Fahim Madani', 28)
// console.log(people)

// 5. Creating objects with Function(it was the old way of creating objects)
function Life(name) {
    this.name = name

}
const manush = new Life('Fahim')
console.log(manush)
