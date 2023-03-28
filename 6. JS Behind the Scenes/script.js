'use strict'

// JavaScript Intermediate

// for (let start = 0; start < 10; start = start + 1) {
//   console.log(start, 'Talha')
// }

// Loop for prinint numbers till 30 only even number
// for (let start = 2; start <= 30; start = start + 2) {
//   console.log(start)
// }

// Loop | Print Table of 2
// for (let i = 1; i <= 10; i++) {
//   console.log('2 * ', i, '= ', i * 2)
// }

// // Nested Loops
// for (let i = 1; i <= 5; i++) {
//   console.log(i, ' Outer')

//   for (let j = 1; j <= 5; j++) {
//     console.log(j, ' Inner Loop')
//   }
// }

// let num1 = 30
// let num2 = 40
// console.log('Number 1 ', num1)
// console.log('Number 2 ', num2)
// console.log('Addition ', num1 + num2)
// console.log('Multiplication ', num1 * num2)

// let i = 'YES'
// if (i == 'YES') {
//   console.log(' I will Play')
// }
// ////
// ////
// num1 = 20
// num2 = 10
// console.log('Number 1 ', num1)
// console.log('Number 2 ', num2)
// console.log('Addition ', num1 + num2)
// console.log('Multiplication ', num1 * num2)

// /// If Else
// // Variables
// num1 = 5
// num2 = 7
// console.log('Number 1 ', num1)
// console.log('Number 2 ', num2)
// console.log('Addition ', num1 + num2)
// console.log('Multiplication ', num1 * num2)

function introduction() {
  // Body | Code
  console.log('Introduction')
  console.log('Talha Tariq')
  console.log('From Pakistan')
}

// introduction()
// let i = 'YES'
// if (i == 'YES') {
//   console.log(' I will Play')
// }
// ///////
// introduction()
////////////////
///////
/////
////
// introduction()

// const addition = (num1, num2) => {
//   console.log('Number 1 ', num1)
//   console.log('Number 2 ', num2)
//   return num1 + num2
// }

// let add = addition(10, 30)
// console.log(add)
// console.log('Some lines of code')

// 1. Find the Square of numbers

const square = function square(num) {
  console.log(num * num)
}

// square(5)
// square(10)
// square(15)

const isEven = function (num) {
  if (num % 2 == 0) {
    console.log('Even Number')
  } else {
    console.log('Odd Number')
  }
}

// isEven(20)
// isEven(50)
// isEven(33)

// // Arrays
// let stud1 = 'Talha'
// let stud2 = 'Moctar'
// let stud3 = 'Fasil'
// let stud4 = 'Ajay'
// let stud5 = 'Ibrahim'
// let stud6 = 'David'
// let stud7 = 'Ahmed'
// let stud8 = 'Romdon'
// let stud9 = 'Mussi'
// let stud10 = 'Samuel'

// let mark1 = 90
// let mark2 = 85
// let mark3 = 92
// let mark4 = 78
// let mark5 = 92
// let mark6 = 20
// let mark7 = 55
// let mark8 = 22
// let mark9 = 58
// let mark10 = 92

// console.log(stud1, ' : ', mark1)
// console.log(stud2, ' : ', mark2)
// console.log(stud3, ' : ', mark3)
// console.log(stud4, ' : ', mark4)
// console.log(stud5, ' : ', mark5)
// console.log(stud6, ' : ', mark6)
// console.log(stud7, ' : ', mark7)
// console.log(stud8, ' : ', mark8)
// console.log(stud9, ' : ', mark9)
// console.log(stud10, ' : ', mark10)

let studentsName = ['Talha', 'Samuel', 'Moctar', 'Fasil', 'David']
let studentMarks = [92, 56, 89, 87, 90]

// console.log(studentsName[0], ' | ', studentMarks[0])
// console.log(studentsName[1], ' | ', studentMarks[1])
// console.log(studentsName[2], ' | ', studentMarks[2])

// Arrays Methods?
studentsName.push('Ahmed')
studentsName.push('Ali')
studentsName.push('Willam')

studentsName.pop()

let pos = studentsName.indexOf('Talha')
console.log(pos)

studentsName.sort()

// for (let i = 0; i < studentsName.length; i++) {
//   console.log(studentsName[i])
// }

let student = {
  name: 'Talha',
  age: 18,
  school: 'DiaaTech',
  address: 'Russia',
  friends: ['Fasil', 'David', 'Moctar'],
}

// console.log(student.name)
// console.log(student.age)
// console.log(student.school)
// console.log(student.address)

// console.log(student['name'])

// console.log(student['age'])

// Types of Loops
// for (let i = 1; i <= 10; i++) {
//   console.log(i)
// }
// // }

// // while loop
// let i = 0
// while (i <= 10) {
//   if (i === 7) {
//     i++
//     break
//   }
//   console.log(i)
//   i++
// }

// // DO while
// let j = 10
// do {
//   console.log('Atleast one time')
//   console.log(j)
// } while (j > 20)

let num1 = 12
console.log(num1)

if (num1 === 12) {
  let text = 'inside block'
  console.log(text)

  console.log(num1)
}
for (let i = 0; i < 5; i++) {
  let insideVar = 3
}

const myFunction = function () {
  let functionvar = 10
  console.log('function var', functionvar)
}

myFunction()
console.log(functionvar)
