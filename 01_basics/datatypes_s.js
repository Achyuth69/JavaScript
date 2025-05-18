// primitive

// 7 types :Strong,Number,Boolean,null,undefined,Symbol,BigInt

const score = 100
const scoreVal = 100.9

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('51565651')
const anotherId = Symbol('51565651')

console.log(id===anotherId)

const BigNumber= 6565546153453545354n


// Reference Type(non-primitive)

// Array,Objects,Functions

const heros=["shaktiman","naagraj","doga"];
let myObj={name:"sai",age:18,sex:"abihitak kiya nahi"}
const myFunction=function(){
    console.log("Hi!");
}

console.log(typeof BigNumber);
console.log(typeof myObj);
console.log(typeof heros);
console.log(typeof myFunction);