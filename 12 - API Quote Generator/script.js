'use strict'

// Variables
let quoteText = document.querySelector('.quoteText')
let button = document.querySelector('.btn')
let author = document.querySelector('.author')

let api = 'https://api.quotable.io/random'
// function to create a new Quote

const createNewQuote = async function () {
  const response = await fetch(api)
  const data = await response.json()

  quoteText.innerHTML = data.content
  author.innerHTML = data.author
}

// Event Listener
button.addEventListener('click', createNewQuote)
