// ******************** Arrow Function (ES6)******************

const user = {
  username: "nitesh",
  price: 999,

  welcomeMessage: function(){
    // console.log(`${this.username}, welcome to website`)
    // console.log(this)
  }
  
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);



// function chai(){
//   let username = "hitesh"
//   console.log(this.username);
// }

// chai()

// const chai = function (){
//   let username = "hitesh"
//   console.log(this.username)
// }

// chai()

// const chai = () =>{
//   let username = "hitesh"
//   console.log(this.username)
// }

// chai()

// const chai = () =>{
//   let username = "hitesh"
//   console.log(this)
// }

// chai()

const chai = () =>{
  let username = "hitesh"
  console.log(username)
}

// chai()

// const addTwo = (num1,num2) =>{
//   return num1 + num2
// }

// console.log(addTwo(2,3))

const addTwo = (num1,num2) =>(num1 + num2)


// console.log(addTwo(2,3))

//  Immediately Invoked Function Expression

  // name and unnamed effi

