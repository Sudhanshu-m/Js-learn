function sayMyName(){
    console.log("S");
    console.log("u");
    console.log("d");
    console.log("h");
    console.log("a");
    console.log("n");
    console.log("S");
    console.log("h");
    console.log("u");
}// here we have declared a function and the curly braces means the scope of the function basically the content inside it
sayMyName()// just the name of function without paranthesis it is called reference and with paranthesis it gets executed 

function addTwoNum(num1, num2){// num1 and num2 are parameters
    console.log(num1+num2);  
}
addTwoNum(3, 4)// it prints 7
addTwoNum(3, "4")// it prints 34 as one of the element is string
addTwoNum("3", "4")// things passed inside it are called argument 

function addNum(num1, num2){
    let result = num1+num2
    return result// below this we should not put anything it will not be printed alays put above it
}
const result = addNum(3, 7)// another way of printing as we are returning something and it can be easily stored somehwere
console.log("Result: ", result);

function loginuserName(Username = "Ram"){// this ram gets overwritten if value is passed below 
    if(Username === undefined){
        console.log("Please enter a username");
        return
    }
    return`${Username} just logged in`
}
console.log(loginuserName("Sudhanshu"));// ram gets over written here it will only work for empty values like below for undefined situation
console.log(loginuserName());// this prints undefined and the string message


// Function part 2 //

function CalculateCartPrice(...numb1){ // this ... is called as rest operator as well as a spread operator
    return numb1
}
console.log(CalculateCartPrice(200, 400, 500, 2000));


const user = {
    username: "Ramesh",
    Price: 20000
}

function handleobject(anyObject){
    console.log(`Username is ${anyObject.username} and Price is ${anyObject.Price}`);
    
}
handleobject(user)// through above function we are accessing data of the object

const newArray = [100, 200, 4000, 500]

function returnSecondvalue(getArray){
    return getArray[1]
}
console.log(returnSecondvalue(newArray));// printig second value from the newArray
