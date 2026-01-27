const user = {
    usernname: "Sudhanshu",
    price: 1000,

    welcomeMessage: function(){
        console.log(`${this.usernname}, welcome to website`);
        console.log(this);
        
        
    }
}
//user.welcomeMessage()
//user.usernname = "Raj"
//user.welcomeMessage()
console.log(this);// when is node environment this refers to the empty object because there is no global context

function mast(){
    let usernnamee= "sudhan"
    console.log(this.usernnamee);// this only works inside an object but not inside a function
    
}
mast()

const masti = () => {// this is nothing but arrow finction the arrow we have made
    let usename = "RAJA"
    console.log(this.usename);// here also this keuword wont work because again it is a function
    
}
masti()

const addone = (num1, num2)=> {
    return num1 + num2
}
console.log(addone(3,4));// this is basic arrow function 

const addtwo = (num1, num2)=> num1 + num2 // this type is called emplicit return arrow function and we dont need to add curly braces
console.log(addtwo(3,4));

const addthree = (num1, num2)=> ({userd: "Sudha"})// we need to wrap in paranthesis only then we will get values
console.log(addthree());


// If curly braces used in the function then we need to write return but when not used dont need to write return