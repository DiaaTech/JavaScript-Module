'use strict'

// Changing the Content of the elements
let name = document.querySelector('.name')
let tagLine = document.querySelector('.tagLine')
name.innerHTML = 'Talha Tariq'
tagLine.innerHTML = 'I am a Graphic Designer'

// changing attributes of our Elements
let link = document.getElementById('link')
link.setAttribute('href', 'https://web.facebook.com/?_rdc=1&_rdr')

// Adding a New Element to HTML Document
let introduction = document.querySelector('.introduction')
let newElement = document.createElement('p')
newElement.innerHTML = 'This is new additon to Html'
introduction.appendChild(newElement)

introduction.removeChild(newElement)

// Changing Styles of our Html Document
let dummyBox = document.querySelector('.dummy')
dummyBox.style.background = 'red'
dummyBox.style.fontSize = '30px'
dummyBox.style.color = 'black'

// Event Listeners
let clickMe = document.getElementById('clickMe')
let pressMe = document.querySelector('.pressMe')

console.log(clickMe)

const changeName = function () {
  name.innerHTML = 'John David'
  dummyBox.style.background = 'white'
}
const backChange = function () {
  name.innerHTML = 'Talha Tariq'
  dummyBox.style.background = 'red'
}

clickMe.addEventListener('click', changeName)

pressMe.addEventListener('click', backChange)
