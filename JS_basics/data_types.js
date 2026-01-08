"use strict"; // used to treat all JS code as newer version

// alert (3+3) // we are using nodeJS not browser 

let name = "Sudhanshu" // this is string data type
let age = 21 // this is integer data type
let isloggedIN = true // this is boolean data type

// Primitive types of Data types are below
// number => any number
// bigint => used when the integer is too large and its data type is bigint only
// string => to represent normal sentences
// boolean => true/ false or in simple words yes or no 
// NULL => it is representation of empty variabel 
// Undefined => means value not yet assigned 
// symbole => to define unique components  and its data type is symbol only
const id = Symbol('123')// Symbol example

const bignumber = 368575767647646747n // Bigint example


// typeof tells the data type of the variable
console.log(typeof undefined); // output will be undefined as it is a data type
console.log(typeof null); // output of this will be object


// Non primitive Data type 
// 1st Array
const heros = ["Me", "Super Man", "Krish"] // Array example its data type will be object 
// 2nd Objects its data type will be object
let myobj = {
    name: "Sudhanshu",
    age: 22,

}

// 3rd Functions,  in terminal it will show function but actually it is object function
const myfunction = function () {
    console.log("Hello World");
    
}

