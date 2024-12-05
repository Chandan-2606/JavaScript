// Primitive datatype

// 7 Types: String, Number, null , undefined ,Symbol, BigInt

const scroe = 100
const scroeValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId);

// const bigNumber = 23349494949938n






// Reference(non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "maagraj", "doga"]
let myObj = {
    name: "Chandan",
    age: 22,
}
const myFunction = function () {
    console.log("Hello world");
}
// console.log(typeof myFunction);

// https://262.ecma-internatinal.org/5.1/#sec-11.4.3

// ******************************************************

// Stack (Primitive), Heap(Non-Primitive)


let myYoutubename = "chandan"
let anothername = myYoutubename
anothername = "Chaiaurcode"

console.log(myYoutubename);
console.log(anothername);



let userOne = {
    eamil: "user@google.com",
    upi: "ser@vbl"

}
let userTwo = userOne

userTwo.email = "hitesh@goole.com"

console.log(userOne.email);
console.log(userTwo.email);



