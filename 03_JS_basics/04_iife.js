// Immediatly Invoked Function Expression (IIFE)
// IIFE is used to protect a function from global variable// say this in interview if ever asked

(function yoyo (){
    console.log(`DB Connected`);
    
})(); // the wrapping of a function in parenthesis is called IIFE
// in the above line if i dont put a semi colon then the other IIFE wont run because IIFE is invoked but doesn't know when to stop

((name)=> {
    console.log(`DB connected ${name}`);
    
})(`Sudhanshu`)