/*Jeremy Calhoun-Expermenting with code, outputs are 
comments below code*/ 

let one = 5 % 4
console.log(one)
//1

let x = 20 - 5
console.log(x)
//15

let number = 3 ** 4
console.log(number)
//81

let num = 10
num++
console.log(num * 5)
//55

let num = 10
num++
num = (num % 2) * (8 + 4)
console.log(num * 5)
//60

const two = 9 - 7
console.log(two)
//2

let hello = "Hello!"
console.log(hello.length)
//6

let char = "JavaScript"[4]
console.log(char)
//S

let lower = "HELLO".toLowerCase()
console.log(lower)
//hello

let replaced = "Hello World".replace("World", "JavaScript")
console.log(replaced)
//Hello JavaScript

//..........10 sections...........

let age = 18
let goVote = age >= 18 ? "Yes" : "No"
console.log(goVote)
//Yes

let fruits = ['apple', 'blueberry', 'cherry']
fruits.forEach(fruit => console.log(fruit))
// apple
// blueberry
// cherry

let person = { name: "John", age: 30 };
console.log(person.name)
console.log(person.age)
//John
//30

let name = "Jenny"
let greeting = `Hello, ${name}!`
console.log(greeting)
//Hello, Jenny!

let x = 1;
let y = 2 - 1
if (x === y) {
    console.log('It\'s a match!')
} else {
    console.log('What happened?')
}
//It's a match!

let upper = "hello".toUpperCase()
console.log(`${upper}!`)
//HELLO!

const roundUp = Math.round(4.7)
console.log(roundUp)
//5

const roundDown = Math.floor(4.7)
console.log(roundDown)
//4

let num = 0
while (num < 3) {
  console.log(num)
  num++
}
//0
//1
//2

let num = 5
while (num > 3) {
  console.log(num)
  num--
}
//5
//4

//........20 sections........

let num = 0
while (num < 3) {
  num++
  console.log(num)
}
//1
//2
//3

let joinedString = ["a", "b", "c"].join("-")
console.log(joinedString)
//a-b-c

let cars = ['honda', 'toyota', 'jeep']
cars.pop()
console.log(`What are good cars? ${cars.join(' & ')}`)
//What are good cars? honda & toyota

let numType = typeof 42
console.log(numType)
//number

let index = ["a", "b", "c"].indexOf("c")
console.log(index)
//2

let numbers = [1, 2, 3]
let doubled = numbers.map(num => num * 2)
console.log(doubled)
//[ 2, 4, 6 ]

let numbers = [1, 2, 3]
let doubled = numbers.map(num => num * 2)
console.log(...doubled)
//2 4 6

let numbers = [10, 20, 30, 40]
let maxNumber = Math.max(...numbers)
console.log(maxNumber)
//40

let combined = [[1, 2], [3, 4]];
console.log(combined)
//[ [ 1, 2 ], [ 3, 4 ] ]

let combined = [...[1, 2], ...[3, 4]];
console.log(combined)
//[ 1, 2, 3, 4 ]

//.........30 sections..........

let combined = [[1, 2], [3, 4]];
console.log(...combined)
//[ 1, 2 ] [ 3, 4 ]

let combined = [...[1, 2], ...[3, 4]];
console.log(...combined)
//1 2 3 4

let nums = ["5", "2", "4", "1", "3"]
nums.sort()
console.log(...nums)
//1 2 3 4 5

let temp = 98
if (temp > 80) {
  console.log("It's hot!")
} else {
  console.log("It's cold!")
}
//It's hot!

let x = null
console.log(x === null)
//ture

let x = Array.from("hello")
console.log(...x, ...x.reverse())
//123

let x = Array.from("hello")
console.log(...x, ...x.reverse())
//h e l l o o l l e h

let curDate = new Date()
console.log(curDate)
//2024-09-02T02:54:36.072Z

let sec = 150698
const daySec = 86400
const hourSec = 3600
const minSec = 60
let days = Math.floor(sec / daySec)
let hours = Math.floor((sec % daySec) / hourSec)
let mins = Math.floor((sec % hourSec) / minSec)
let secs = sec % minSec
console.log(`Days:${days}, Hours:${hours}, Minutes:${mins}, Seconds:${secs}`)
//Days:1, Hours:17, Minutes:51, Seconds:38

let x = ["a", "b", "c", "d"].slice(1, 3)
console.log(x)
//[ 'b', 'c' ]

//.........40 sections..........

let words = ["JavaScript", "is", "fun"]
let sentence = words.join(" ")
console.log(sentence)
//JavaScript is fun

function isEven(number) {
  return number % 2 === 0
}
console.log(isEven(4))
//true

function add(x, y) {
 return x + y
}
console.log(add(87, 93))
//180

function add(x, y) {
 return x + y
}
console.log((add(87, 93))*5)
//900

let add = (x, y) => x + y
console.log(add(87, 93))
//180

function max(x, y) {
  return x > y ? x : y
 }
 console.log(max(6854, 1968))
//6854

let lastLetter = "JavaScript".slice(-1)
console.log(lastLetter)
//t

let letters = ["a", "b", "c"].join(" | ")
console.log(letters)
//a | b | c

let letters = ["a", "b", "c"].join(" - ")
console.log(letters)
//a - b - c

let words = ["All", "Done"]
let finished = words.join(" ")
console.log(finished)
//All Done