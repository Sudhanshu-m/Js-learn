let a = 50

if(true){
    let a = 100
    const b = 200
    var c = 300
    console.log("Inner: ", a);// this a is local scope or a block scope
    
}
console.log(a);// this a is global scope
//console.log(b);
console.log(c);// this will print because var is not block specific it is intialized globally be it inside a function or object

// Scopes part 2 //

function one(){
    const username = "Sudhanshu"

    function two(){
        const website = "YT"
        console.log(username);
    }
    //console.log(website); cannot call it here because we are calling it outside a function
    two()
    
}
one()

if (true){
    const username = "Sudhanshu"
    if(username === "Sudhanshu"){
        const website = " ACM"
        console.log(username + website);
    }
    //console.log(website); // this will not be printed because we are calling it out of the scope
    
}
// console.log(username); // this will not be printed because we are calling it out of the scope

console.log(addone (5)) // this will be printed even if it is intialized before because below we have declared a function
function addone(num){
    return num + 1
}

addTwo(5) // this will not be printed because we have instialized the below function as variable 
const addtwo = function(num){
    return num + 2
}