// Level 1
let challange = "30 Days Of JavaScript"
console.log(challange)
console.log(challange.length)
console.log(challange.toUpperCase())
console.log(challange.toLowerCase())
console.log(challange.substr(3))
console.log(challange.substring(0, 3))
console.log(challange.includes("Script"))
console.log(challange.split(''))
console.log(challange.split(' '))
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(companies.split(', '))
console.log(challange.replace("JavaScript", "Python"))
console.log(challange.charAt(15))
console.log(challange.charCodeAt("J"))
console.log(challange.indexOf("a"))
console.log(challange.lastIndexOf("a"))
let sentence = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.indexOf("because"))
let trailing = "   This string has a lot of trailing whitespace              "
console.log(trailing.trim())
console.log(challange.startsWith("30"))
console.log(challange.endsWith("Script"))
console.log(challange.match(/a/gi))
let string1 = '30 Days of'
let string2 = 'JavaScript'
console.log(string1.concat(string2))
console.log(challange.repeat(2))

// Level 2
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")
console.log('"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead."')
console.log('10' === 10)
console.log(parseFloat('9.8') == 10)
let search = 'on'
let py = "python"
let ja = "jargon"
// If the value is above -1 it exist
console.log(py.search(search))
console.log(ja.search(search))
let sentence6 = "I hope this course is not full of jargon."
console.log(sentence6.search("jargon"))
console.log(Math.floor(Math.random() * 101))
console.log(Math.floor(Math.random() * (101 - 51) + 51))
console.log(Math.floor(Math.random() * 256))
let tString = 'JavaScript'
console.log(tString.charAt(Math.floor(Math.random() * tString.length)))
console.log("Just use a lot of space and the \\ character to cut to a new line")
let finalLv2Sentence = 'You cannot end a sentence with because because because is a conjunction'
let phrase = 'because because because'
console.log("This final excercise makes no sence, how am i supposed to use the *substr* to cut out a part")
console.log(finalLv2Sentence.substr(finalLv2Sentence.indexOf(phrase), finalLv2Sentence.indexOf(phrase) + phrase.length))
