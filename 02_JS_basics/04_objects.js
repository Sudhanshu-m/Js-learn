//const InstaUser = new Object()// this is also a way to create objects
const InstaUser = {}// this is also a way to create objects
InstaUser.id = 12345
InstaUser.name = "Sudhanshu"
InstaUser.age = 25
console.log(InstaUser)

const newUser = {
    fullname: {
        userfullname:{
            firstName: "Sudhanshu",
            lastName: "Mishra"
        }
    }
}// here we have put multiple objects in object 
console.log(newUser.fullname.userfullname.firstName);// this way we can call objects inside objects and dispaly them

const obj1 = {1: "A", 2: "B"}
const obj2 = {3:"C", 4:"D"}
//const obj3 = {...obj1, ...obj2}// one of the way like we do in arrays main function of assign is to combine data from multiple objects into one
const obj3 = Object.assign({}, obj1, obj2)// we added empty paranthesis because it means it is the target address where we are storing all data so whatever is at first is target and others are the source 
console.log(obj3);

const user = [
    {
        id: 1,
        name: "Sudhanshu"
    },
    {
        id: 1,
        name: "Sudhanshu"
    },
    {
        id: 1,
        name: "Sudhanshu"
    }
]
user[1].id

console.log(Object.keys(InstaUser));// prints the keys in the form of array
console.log(Object.values(InstaUser));// prints the values in the form of array
console.log(Object.entries(InstaUser));// prints the entries in the form of array here also we are getting arrays inside array
console.log(InstaUser.hasOwnProperty('age'));// tells whether there is such property or not


// Object de-structurization

const course = {
    courseName: "Ram ji",
    price: 1000,
    courseInstructor: "Sudhanshu"
}

const {courseInstructor: Instructor} = course
//console.log(courseInstructor);// this way also can be done just remove the colon and instructor 
console.log(Instructor);// this way can also be done to change the name 


