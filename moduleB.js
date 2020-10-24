//using classic mode
module.exports = {
    hello: 'Hello World',
    myName: 'Cairo Lopes',
    myAge: "I'm 26 years old",
    introduceMe(){

        return  `${this.hello}, I'm ${this.myName}, and  ${this.myAge}` 
    }
}