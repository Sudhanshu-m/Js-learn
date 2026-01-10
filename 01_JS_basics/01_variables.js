const accountID = 12344
let accountEmail = "sudhanshu@google.com"
var accountPassword = "12345"
accountCity ="Mumbai"
let accountstate;// when the variable is declared but no value is assigned then it gives output as undefined 

// accountID = 3 // once const assigned then we cannot change the value

accountEmail = "sm@google.com"
accountPassword="54763"
accountCity = "Thane"

/*
Prefer not to use var
because of issues in block scope and functional scope 
*/

console.log(accountID);
console.table([accountEmail, accountID, accountPassword, accountCity, accountstate]);
