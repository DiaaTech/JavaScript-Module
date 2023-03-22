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

square(5)
square(10)
square(15)

const isEven = function (num) {
  if (num % 2 == 0) {
    console.log('Even Number')
  } else {
    console.log('Odd Number')
  }
}

isEven(20)
isEven(50)
isEven(33)
