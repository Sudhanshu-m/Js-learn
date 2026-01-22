// singleton meaning when we construct object using constructor then it is called singleton object

// Object literals 

const mySym = Symbol("Key1")
const Jsuser = {
    name: "Sudhanshu",
    [mySym]: "MyKey1",// to access symbol properly
    "full name": "Sudhanshu Mishra",
    age: 21,
    location: "India",
    email: "sudhanshu@gmail.com"
}

console.log(Jsuser.email);// it is right way
console.log(Jsuser["email"]);// this is also a right way but the things is when key is in doubble quots like the full name example then this square brackets help to print
console.log(Jsuser["full name"]);
console.log(Jsuser[mySym]);

Jsuser.email = "Sudhanshu33@gmail.com"
//Object.freeze(Jsuser)// this freezes the object meaning no changes allowed in it after here
Jsuser.email = "ramu@gmail.com"
console.log(Jsuser);

Jsuser.greetings = function(){
    console.log("Hello Js User");   
}
console.log(Jsuser.greetings);
Jsuser.greetingstwo = function(){
    console.log(`Hello ${this["full name"]} User`);   
}
console.log(Jsuser.greetingstwo());