// Variables
let number = document.querySelector('.number')
let plusBtn = document.querySelector('.plus')
let minusBtn = document.querySelector('.minus')
let resetBtn = document.querySelector('.reset')

// functions
const increment = function () {
  let previousNumber = Number(number.innerHTML)
  previousNumber = previousNumber + 1
  number.innerHTML = previousNumber
}
const decrement = function () {
  let previousNumber = Number(number.innerHTML)
  previousNumber = previousNumber - 1
  number.innerHTML = previousNumber
}
const reset = function () {
  number.innerHTML = '0'
}

// event listeners
plusBtn.addEventListener('click', increment)

minusBtn.addEventListener('click', decrement)

resetBtn.addEventListener('click', reset)
