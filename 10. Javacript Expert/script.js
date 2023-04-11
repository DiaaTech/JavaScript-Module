// console.log('first')

// // It will only work one time after the seconds has passed
// setTimeout(function () {
//   console.log('Second')
// }, 3000)

// console.log('third')

// // it will keep repeating after specfied seconds in it
// setInterval(function () {
//   console.log('repeating itself after every 2 seconds')
// }, 2000)

// OOP
class Person {
  constructor(inName, inAge, inAddress) {
    this.name = inName
    this.age = inAge
    this.address = inAddress
  }

  eat() {
    console.log(this.name + ' is eating.....')
  }
  play() {
    console.log(this.name + ' is playing.....')
  }
  getDetails() {
    console.log(
      this.name + ' of age ' + this.age + ' is living in ' + this.address
    )
  }
}

// 3 Persons

const Talha = new Person('Talha', 22, 'Pakistan')

const GetChew = new Person('GetChew', 24, 'US')

const Moctar = new Person('Moctar', 25, 'Russia')

// Talha.eat()
// GetChew.eat()
// Moctar.eat()

// Talha.getDetails()

class Car {
  constructor(name, model, speed) {
    this.name = name
    this.model = model
    this.speed = speed
  }

  brake() {
    this.speed -= 10
  }
  accelrate() {
    this.speed += 20
  }
  getDetail() {
    console.log(
      this.name +
        ' of model ' +
        this.model +
        ' running at speed of ' +
        this.speed
    )
  }
}

const buggati = new Car('Buggati', '2022', 220)
const mercedes = new Car('Mercedes', '2023', 300)

// mercedes.getDetail()
// mercedes.brake()
// mercedes.getDetail()
// mercedes.accelrate()
// mercedes.getDetail()

// console.log('First Line')
// console.log('Second Line')

// for (let i = 0; i < 3; i++) {
//   console.log('inside loop: ' + i)
// }

// console.log('third Line')
// console.log('fourth Line')

// link, api using which I will communication with this website

let image = document.querySelector('.image')
let name = document.querySelector('.name')
let capital = document.querySelector('.capital')
let currency = document.querySelector('.currency')
let details = document.querySelector('.details')
let menuOption = document.querySelector('.menu')
let api = 'https://restcountries.com/v3.1/name/'

const showData = function () {
  console.log(menuOption)

  fetch(api + menuOption.value)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      name.innerHTML = data[0].name.common
      image.src = data[0].flags.png
      capital.innerHTML = data[0].capital[0]

      currency.innerHTML = Object.keys(data[0].currencies)[0]
    })
    .catch((err) => {
      console.log('Error | Can not fetch')
    })
}

details.addEventListener('click', showData)
