// *********** WELCOME TO JAVASCRIPT ******************

// const id = Symbol("123")
// const anotherid = Symbol("123")

// console.log(id===anotherid)


// *************Array, objects, Functions *****************

// const heros = ["shaktiman", "naageaj", "doga"]
// let myObj = {
//     name: "nitesh",
//     age: 22,
// }

// const myFunction = function(){
//     console.log("Hello World");
// }

// myFunction()

//  *****************String*****************

const name = "Nitesh Singh"
const repoCount = 50;

// console.log(`Hello My Name is ${name} and My RepoCount is ${repoCount}`)

const gameName = new String('Nitesh Singh')

// console.log(gameName[4]);
// console.log(gameName.__proto__)
// console.log(gameName.length)
// console.log(gameName.toUpperCase())

// in charAt pass number not character 
// console.log(gameName.charAt(5)); 

// in indexOf is pass character to find which number is element present
// console.log(gameName.indexOf('t'))

const newString = gameName.substring(0,3)
// console.log(newString);


// This code part showing issue

// const anotherString = gameName.slice(-8, 3)
// console.log("Show slice data: ", anotherString)

// Slice take negative value and Substring is not take negative value

// const newStringOne = "  nitesh  singh  "
// console.log(newStringOne)
// console.log(newStringOne.trim())

// const url = "https://88.222.214.93:3011"
// console.log(url.replace('3011', '5000'))

// console.log(url.includes('nitesh'))


// Split

// ************************Nums and Math******************

// const score = new Number(100)
// console.log(score)

// console.log(score.toString().length);
// console.log(score.toFixed(1))
// const otherNumber = 100.234
// console.log(otherNumber.toPrecision(4))

// const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'))

// *******************Math***************\

// console.log(Math)
// console.log(Math.abs(-4))
// console.log(Math.round(4.6))
// console.log(Math.ceil(4.2))
// console.log(Math.floor(4.9))
// console.log(Math.sqrt(25))
// console.log(Math.min(4,3,2,1))
// console.log(Math.max(4,3,6,8))

// console.log(Math.random())
// console.log(Math.random()*10)
// console.log((Math.random()*10)+1)

// const min =10
// const max = 20

// console.log(Math.floor(Math.random() * (max-min+1)) + min)

// ******************Dates ****************

// let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toUTCString())

// Object type
// console.log(typeof myDate)

// let myCreateDate = new Date(2023, 0, 23)
// console.log(myCreateDate.toDateString())

// Time Stamp

// let myCreateDate = new Date("01-14-2023")
// let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myCreateDate.getTime());

// console.log(Math.floor(Date.now()/1000));

// let newDate = new Date()
// console.log(newDate)
// console.log(newDate.getMonth())
// console.log(newDate.getDay())

// newDate.toLocaleString('default',{
//   weekday: "long",
// })

// console.log(newDate) 


//   ************Control Flow and Loops**************

const userLogedIn = true
const debitCard = true
const creditCard = true

if(userLogedIn && debitCard || creditCard){
    console.log("Allow to Shoping");
} else {
    console.log("You cant shoping");
}