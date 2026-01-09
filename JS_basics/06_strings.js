const name = "Sudhanshu"
const repoCount = 100

//console.log(name + repoCount);

console.log(`Hello my name is ${name} my repo count is ${repoCount}`);/* better way of adding 
strings it is known as string interpolation and other things instead of using the + thing in 4th line*/

const gameName = "Sudhanshu Hero"

console.log(gameName.__proto__);
console.log(gameName.toUpperCase());// to convert all to upper case One more thing here copy of the variable is given not the actual reference 
console.log(gameName.charAt(3));// here give the index value which and this will tell which letter is there at that position
console.log(gameName.length);
console.log(gameName.indexOf('u'));

console.log(gameName);

const newString = gameName.substring(0, 4)// It wil print from 0th index till 3rd index not till 4th one we cannot use negative values
console.log(newString);

const anotherString = gameName.slice(-11, -5)// same like substring difference is we can use negative values also
console.log(anotherString)

const newnew = "  Sudha   "
console.log(newnew);
console.log(newnew.trim());// trim helps in removong whote spaces
console.log(newnew.trimStart());// trims white spaces from start only
console.log(newnew.trimEnd());// trims white spaces from end only

const url = "www.sudhan.com"
console.log(url.replace('sudhan', 'sudhanshu'));// as the name suggests it is used to replace the value
console.log(url);
console.log(url.includes('www.'));// returns true or false value for the string whether it is in the string or not

console.log(gameName.split(' '));// turns the string into array



// if comments confuse run the code or refer previous codes
