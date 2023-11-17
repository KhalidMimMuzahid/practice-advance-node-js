// // normal way 
// const myModule = require("./local-1")
// console.log(myModule.add(2,3))
// console.log(myModule.a)



const {add,a}= require("./local-1")
const {add:add2,a:a2}= require("./local-2")
console.log(add(2,3))
console.log(a)

console.log(add2(2,3,4))
console.log(a2)



//built in module

const path= require("path")
// console.log(path.dirname("/media/khalid/Coding/node js/index.js"))
// console.log(path.parse("/media/khalid/Coding/node js/index.js"))
console.log(path.join("/media", "/khalid","/Coding","/node js","/index.js"))