// For Each Loop

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val)
// })

// coding.forEach( (val) => {
//     console.log(val)
// }),

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },

    {
        languageName: "java",
        languageFileName: "js"
    },

    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach((item) => {

    console.log(item.languageName)
})

