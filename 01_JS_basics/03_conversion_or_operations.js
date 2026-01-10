let score = "33avb"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)/* here we are converting the string to number but if we add 
characters of alphabet to it then the the output of this will come as NaN which means "not a number"
if instead of a string we write "null" then it will convert it to 0 and if we write undefined instead of
string it will give NaN again. In case of boolean vlaues for example true or false it will return 1 or 0*/
console.log(typeof valueInNumber);
console.log(valueInNumber);

// Conversion and their output
// "33" => 33
// "33avb" => NaN
// null => 0
// undefined => NaN
// boolean => 0 or 1

// similarly things will happen same for other conversions also from number to boolean 
let isloggedin = 33
let booleanisloggedin = Boolean(isloggedin)
console.log(booleanisloggedin);
// in Boolean we saw
// if 1 => true
// 0 => false
// "" empty string gave => false
// "Sudhanshu" this gave => true

let somestring = 33
let stringNumber = String(somestring)
console.log(stringNumber);
console.log(typeof stringNumber);// here we saw conversion happened and we could see that 33's type changed from number to string

// *************************************** Operations *******************************************

console.log(2-2);
console.log(2**2);

let str1 = "Ram"
let str2 = " Kishore"
let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" +2 +2);// here it depends what is kept at first if it is string then rest will be treated as string
console.log(1 + 2 + "2");// if first one is number then next one if it number then it will be added and after that string is there so it will add it as string only

let gamecounter = 100
gamecounter++ // the increment operator increments and returns the value before incrementing.
++gamecounter // the increment operator increments and returns the value after incrementing.
console.log(gamecounter);

