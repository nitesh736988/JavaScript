// const score = 200

// if (score> 100){
//   const power = "fly"
//   console.log(`User Power:  ${power}`);
// }

// const balance = 1000
// if(balance>500){
//   console.log("Sufficient balance");
  
// }

//  const balance = 1000

//  if(balance < 500){
//   console.log("Less than")
//  } else if(balance<750){
//   console.log("Less than 750");
//  }

//  else{
//   console.log("Less than 1200")
//  }

//  const userLoggedIn = true
//  const debitCard = true
//  const loggedInFromGoogle = false
//  const loggedInFromEmail = true

//  if(userLoggedIn && debitCard){
//   console.log("Allow to buy courses");
  
//  }

//  if(loggedInFromEmail || loggedInFromGoogle){
//   console.log("Also logged In")
//  }


//  ********************* Switch ***************************

// const month = 5

// switch (month) {
//   case 1:
//     console.log("January");
    
//     break;
//   case 2:
//     console.log("Feb");
    
//     break;
//   case 3:
//     console.log("March");
    
//     break;

//   default:
//     console.log("Default case Match");
    
//     break;
// }

// Truthly and falsy value

// const userEmail = "nitesh3692@gmail.com"
// const userEmail = []
// if(userEmail){
//   console.log("Got user email");
  
// } else{
//   console.log("Don't have user email");
// }

// falsey value

// false, 0, -0, BigInt, "", null, undefined, NaN

// Truthy values

// "0", 'false'," ", [], {}, function(){}


// if (userEmail.length === 0){
//   console.log("Array is empty");
  
// }

// const emptyobj = {}

// if (Object.keys(emptyobj).length === 0){
//   console.log("Object is Empty");
  
// }

// Nullish Coalescing Operator(??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
val1 = null ?? 10 ?? 15
// console.log(val1)

// Terniary Operator

// condition ? true : false

// const iceTeaPrice = 100
// iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("More than 80")

