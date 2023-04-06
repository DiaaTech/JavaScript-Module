// Map Method

let array = [1, 2, 3, 4, 5]

// Noob Approach which changes my original data

// for (let i = 0; i < array.length; i++) {
//   array[i] = array[i] * 5
// }

// Map method which return a new array

const multiplyByFive = function (num) {
  return num * 5
}

let newArray = array.map(multiplyByFive)

console.log('Original Array', array)

console.log('Updated new Array', newArray)

// Example of Names
let names = ['Fasil', 'Getchew', 'Ajay', 'Mussie', 'Moctar']
const addMrToname = function (name) {
  let newName = 'Mr. ' + name
  return newName
}

let newNames = names.map(addMrToname)
console.log(newNames)

// Example of Salary
let salary = [1200, 1000, 2000, 500, 200]

const addBonus = function (salary) {
  return salary + 500
}
let newSalary = salary.map(addBonus)
console.log(newSalary)

// Filter Method
console.log('filter method')

// Even Number
let numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
]

let filteredNumbers = numbers.filter((number) => number % 2 === 0)

console.log(filteredNumbers)

// Employees Start with D
let employees = ['David', 'Doune', 'John', 'Samuel', 'Jack']

let newEArray = employees.filter(function (employeeName) {
  return employeeName[0] === 'D'
})
console.log(newEArray)

// Reduce Method

let myNumbers = [1, 2, 3, 4, 5]
let sum = myNumbers.reduce(function (acc, cur) {
  return acc + cur
}, 0)

console.log(sum)

let data = [5, 3, 2, 4, 1]
let sortedArray = data.sort(function (a, b) {
  return b - a
})
console.log(sortedArray)

// Chaining Methods

console.log('Chaining Methods')
let myData = [1, 2, 3, 4, 5]

let newData = myData
  .map(function (number) {
    return number * 10
  })
  .filter(function (num) {
    return num >= 30
  })
  .map(function (number) {
    return number * 2
  })

console.log(newData)
