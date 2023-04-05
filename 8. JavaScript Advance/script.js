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
  // taking 4 variables
  return a + b + c + d
}

let sum = add(...numbers)
console.log(sum)

// In Arrays

let array1 = [1, 2]
let array2 = [3, 4, 5, 6, 3]
let array3 = [2, 4]

let array4 = [...array1, 10, ...array2, 10, ...array3] // [1, 2, 10,  3, 4, 5, 6,10, 2, 4]
console.log(array4)

// for of loops
// for (let element of array2) {
//   console.log(element)
// }

// const addition = function (...parameters) {
//   let sum = 0
//   for (let i = 0; i < parameters.length; i = i + 1) {
//     sum += parameters[i]
//   }
//   console.log('Sum: ' + sum)
// }

// // addition(1, 2)
// // addition(1, 2, 3)
// // addition(1, 2, 3, 4)
// // addition(1, 2, 3, 4, 5)
// addition(1, 2, 3, 4, 5, 6)

// // Short Circuiting

let number = 2
const test = number === 3 && number === 2 && number === 10 && number === 2

const test2 = number === 2 || number === 8
console.log(test)

// Strings
// const myName = 'I am Talha'
// const myAge = '21'
// console.log(myName + ' ' + myAge)
// console.log('Length/Size of string', myName.length)

// console.log(myName.substring(5, 10))
// myName.replace('am', 'is')
// console.log(myName.replace('am', 'is'))

// const parts = myName.split(' ')
// console.log(parts)

// Pass by Value and Pass by Reference
const increment = function (num) {
  num = num + 10
  console.log('inside function', num)
}

let variable = 20
increment(variable)
console.log('outside function ', variable) // 30 will print there

// Pass by Reference
let newFunction = function (array) {
  array.push(20)
  array.push(30)
}

let array = [1, 5, 2]
newFunction(array)
console.log(array)

// High Order and First class citizen functions
let introduction = function () {
  console.log('talha is developer')
}

let myfunction = function (parameters) {
  parameters()

  return function () {
    console.log('welcome on baord')
  }
}

let newunction = myfunction(introduction)
newunction() // IFFI
;(function iffi() {
  console.log('iifif function')
})()
