/**
 * 
 * @param {String} name 
 * @param {Number} age 
 */
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.move = function() {
    console.log('move')
}
Person.prototype.eat = function() {
    console.log('eat')
}

function User() {}

function inheritance(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype)
    Child.prototype.constructor = Child

}

inheritance(User, Person)
User.prototype.go = function() {
    console.log('go')
}

User.prototype.to = function() {
    console.log('to')
}
let u = new User()
console.log(u)