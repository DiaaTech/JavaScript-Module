// Varibales Learning

/* 
CalCulator Code 

let numberOne = prompt('Enter First Number')
let numberTwo = prompt('Enter Second Number')
let operator = prompt('Enter Operator')

// Sum | Minus | Multiply | Division
let sum = Number(numberOne) + Number(numberTwo)
console.log('Sum: ', sum)
console.log('Minus: ', numberOne - numberTwo)
console.log('Multply: ', numberOne * numberTwo)
console.log('Division: ', numberTwo / numberOne)
console.log('Power: ', Math.pow(numberOne, numberTwo))
*/

/*
// Strings
let name = 'Talha Tariq'
let school = 'DiaaTech'
let father = 'Tariq Javed'
let age = 10
let bank = 1000

let introduction =
  'My name is ' +
  'Mr. ' +
  name +
  ' and my Father name is ' +
  father +
  ' and my age is ' +
  (age + 10)
' and I am studing in school of ' + school

console.log(introduction)

let intro = `My name is ${'MR. ' + name} and my age is ${
  age + 10
} and my School is ${school}`
console.log(intro)
*/

// Condtions

// age = 22
// if (age < 18) {
//   console.log('This is a under 18 kind')
// } else {
//   if (age < 30) {
//     console.log('This is a Young Man')
//   } else {
//     console.log('This is a Old Person')
//   }
// }

/*
let raining = prompt('Is it raining?')
let cloudy = prompt('Is it cloudy?')

if (raining == 'YES' || cloudy == 'YES') {
  console.log('I will play')
} else {
  console.log('I will not play')
}
*/

//Challange 1
let age = 20
if (age < 5) {
  console.log('This is kid')
} else if (age > 5 && age < 15) {
  console.log('This is Teen')
} else if (age > 15 && age < 30) {
  console.log('This is a Adult')
} else if (age > 30 && age < 60) {
  console.log('This is a Young Man')
} else {
  console.log('This is a old Person')
}

// Challange 2 Part 1

let num1 = 10
let num2 = 20
let num3 = 60
let num4 = 50

if ((num1 == 10 && num2 == 20) || num3 == 30 || num4 == 40) {
  console.log('our true block is there')
} else {
  console.log('our false block is there')
}

let name = 'Talha'
if (!(name == 'Talha')) {
  console.log('This is my Name')
} else {
  console.log('This is not my Name')
}

// Loops
// Normal Flow
console.log('Talha')
console.log('Talha')
console.log('Talha')
console.log('Talha')
console.log('Talha')

// Loop Flow
for (let i = 0; i < 200; i = i + 1) {
  console.log('DiaaTech')
}

// Problem 1: Write a JavaScript program to accept two integers and check whether they are equal or not.
// let n1 = prompt('Enter Num 1: ')
// let n2 = prompt('Enter Num 2: ')

// if (n1 === n2) {
//   console.log('Both numbers are equal')
// } else {
//   console.log('Both numbers are not equal')
// }

// Problem 2: Write a C program to check whether a given number is positive or negative.
// let num = Number(prompt('Enter Number'))

// if (num > 0) {
//   console.log('Number is positive')
// } else {
//   console.log('Number is negative')
// }
/*
let n1 = 90
let n2 = 40
let n3 = 30

if (n1 > n2) {
  if (n1 > n3) {
    console.log('Number 1 is Greater')
  } else {
    console.log('Number 3 is Greater')
  }
} else {
  if (n2 > n3) {
    console.log('Number 2 is Greater')
  } else {
    console.log('Number 3 is Greater')
  }
}

*/
