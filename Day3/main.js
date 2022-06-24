let firstName = "Stian"
console.log(typeof(firstName))
// Dont want to do this to like 10 variables...
console.log('10' == 10)
console.log(parseInt('9.8') == 10)
// Allready understand boolean jumping over 4,5 & 6

let hight = prompt('Enter hight')
let width = prompt('Enter width')
console.log(`The area of the triangle is ${hight * width * 0.5}`)

let sideA = prompt('Enter side a')
let sideB = prompt('Enter side b')
let sideC = prompt('Enter side c')
console.log(`The perimeter of the triangle is ${sideA + sideB + sideC}`)

// ... know how to do math stuff ...

let hours = prompt('Enter hours:')
let rate = prompt('Enter rate per hour:')
console.log(`Your weekly earning is ${hours * rate}`)

let userName = prompt('Enter yout name:')
console.log((userName.length > 7) ? 'Your name is long' : 'Your name is short')

let dateNow = new Date()
let userBorn = prompt('Enter birth year:')
let age = (dateNow.getFullYear() - userBorn)
age < 18
    ? console.log(`You are ${age}. You will be allowed to drive after ${18 - age} years`)
    : console.log(`You are ${age}. You are old enough to drive`)

