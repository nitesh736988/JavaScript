// function addTwoNumber(number1,number2){
//   console.log(number1+number2)
// }

// addTwoNumber(10,20)  

function addTwoNumber(number1,number2){
  // let result = number1 +number2
  // return result

  return number1+number2
}
const result = addTwoNumber(10,20)  
// console.log("Result: ", result)

function loggingUserMessage(userName){
  return `${userName} Just Logged In`

}

// if user not pass any name data come in undefined
const userName = loggingUserMessage("Nitesh")
// console.log(userName)

// function calculateCartPrice(...num1){
//   return num1
// }

// console.log(calculateCartPrice(200,400,500))
 
function calculateCartPrice(val1,val2,...num1){
  return num1
}

// console.log(calculateCartPrice(2000, 3000,200,400,500))

const user ={
  userName: "Nitesh",
  price: 199
}

function handleObject(anyobject){
  console.log(`Username is ${anyobject.userName} and price is ${anyobject.price}`)
} 

handleObject(user)