const moduleA = require("./moduleA")
const moduleB = require("./moduleB")

console.log(`${moduleA.hello}, my name is  ${moduleA.myName}, and  ${moduleA.myAge}`)

console.log(moduleB.introduceMe())