// Stack (Primitive data type used), Heap (Non-Primitive data type used)

// Stack
let myname = "Sudhanshu"

let yourname = myname
yourname = "Ram"

console.log(myname);
console.log(yourname);// here the value will change because in stack we get copy of the refered variable which means previous one won't change

// Heap
let userone = {
    email: "sudhanshu@gmail.com",
    age: 22
}

let usertow = userone

usertow.email = "ram@gmail.com"

console.log(userone);
console.log(usertow);
// In this heap the value changed for both because reference is given to both not the copy of it due to which both values will change

// samajh na aye to run kar lena it will be clear 
