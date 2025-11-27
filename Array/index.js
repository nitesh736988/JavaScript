// Array

// const myArr = [0,1,2,3,4,5]
// console.log(myArr[5])

// Array Methods


// ********Add Element in last*************
// myArr.push(6)
// console.log(myArr)

// ***********Remove Element in Last*************
// Add Pop
// myArr.pop()
// console.log(myArr)

// myArr.unshift(9);
// console.log(myArr)

// const myArr = [0,1,2,3,4,5]
// myArr.shift()
// console.log(myArr)

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(3))

// const newArr = myArr.join()
// console.log(myArr)
// console.log(typeof newArr)

// ****************Slice and Splice **************

// console.log("A ", myArr)

// const myArr = [0,1,2,3,4,5]
// const myn1 = myArr.slice(1,3)
// console.log(myn1)
// console.log("B ", myArr);

// console.log("C ", myArr)

// const myn2 = myArr.splice(1,3)
// console.log(myn2)
// console.log("D ", myArr);


const marvel_heroes = ["thor", "Ironman", "spiderman"]
const dc = ["spiderman hello", "nitesh", "all"]

// marvel_heroes.push(dc)
// console.log(marvel_heroes)

// const allHeroes = marvel_heroes.concat(dc)
// console.log(allHeroes)

const all_new_heroes = [...marvel_heroes, ...dc]
// console.log(all_new_heroes)


const another_array = [1,2,3, [4,5,6], 7, [6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

// console.log(Array.isArray("Hitesh"))
// console.log(Array.from("Hitesh"))
// console.log(Array.from({name: "nitesh"})); Interesting

// let score1 = 100
// let score2 = 200
// let score3 = 300

// console.log(Array.of(score1, score2, score3))

// isArray, from, of must learn 

// *********************Object , Singleton***********************

// if you are create a object through constructor then singleton and also if you are create a literal not a singleton

// Object Literals


const mySym = Symbol("key1")
const JsUser = {
  name: "Nitesh",
  "full Name": "Nitesh Singh",
   [mySym]: "mykey1",
  email: "nitesh233@gmail.com",
  age: 24,
  location : "delhi",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser);
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full Name"]);
// console.log(typeof JsUser.mySym)
// console.log(JsUser[mySym]);

// console.log(typeof JsUser[mySym]); doubt

Object.freeze = "nitesh233@gmail.com"
// console.log(JsUser)
JsUser.email = "nitesh333@gmail.com"


// JsUser.greeting = function(){
//   console.log("Hello Js User")
// }

// JsUser.greetingTwo = function(){
//   console.log(`Hello Js User , ${this.name}` )
// }

// console.log(JsUser.greeting())

// console.log(JsUser.greetingTwo())

// this is a singlton Object
// const tinderUser = new Object() 

// This is not singlton
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn=false
// console.log(tinderUser);
  

const regularUser = {
  email: "some@gmail.com",
  fullName: {
    userfullName:{
      firstName: "Nitesh",
      lastName: "Singh"
    }
  }
}

// console.log(regularUser.fullName)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3);

// const obj3 = {...obj1, ...obj2}
// console.log(obj3)

const users = [
  {
    id: 1,
    email: "niteshsolar@gmail.com"
  },

  {
    id: 2,
    email: "niteshsolar@gmail.com"
  },

  {
    id: 3,
    email: "hiteshsolar@gmail.com"
  }

]

users[1].email
// console.log(tinderUser)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLogged'))


const course = {
  courseName: "Nitesh",
  coursePrice: "999",
  courseTeacher: "Hitesh"
}

// const {courseTeacher} = course 
const {courseTeacher: Instructor} = course 
// console.log(Instructor)

// JSON FORMATOR TOOL