let dateNow = new Date()
let userBorn = prompt('Enter birth year:')
let age = (dateNow.getFullYear() - userBorn)
age < 18
    ? console.log(`You are ${age}. You will be allowed to drive after ${18 - age} years`)
    : console.log(`You are ${age}. You are old enough to drive`)
