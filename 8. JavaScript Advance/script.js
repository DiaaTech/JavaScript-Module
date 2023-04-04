'use strict'

// Destructuring
let students = ['Fasil', 'Mussie', 'Ajay', 'Getchew']

// extracting data and storing to seprate variables
let [first, second, third, fourth] = students

console.log(second)

// in case of objects
let person = {
  name: 'Talha',
  age: 21,
  address: 'Pakistan',

  eat: function () {
    console.log(this.name + ' eating...')
  },
  play: function () {
    console.log(this.name + ' playing at the age of ' + this.age)
  },
}

let person2 = { ...person }
let { name, age } = person
console.log(name + ' has age of ' + age + ' years')

let { address } = person
console.log(address)

// Spread Operator
let numbers = [1, 2, 3, 4]
// in function call

const add = function (a, b, c, d) {
  return a + b + c + d
}

let sum = add(...numbers)
console.log(sum)

// In Arrays

let array1 = [1, 2]
let array2 = [3, 4, 5, 6, 3]

let array3 = [...array1, 10, ...array2]
console.log(array3)
