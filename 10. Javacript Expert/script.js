console.log('first')

setTimeout(function () {
  console.log('Second')
}, 2000)

console.log('third')

setInterval(function () {
  console.log('repeating itself after every 2 seconds')
}, 2000)
