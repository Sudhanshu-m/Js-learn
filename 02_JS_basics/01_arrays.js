// array and these are resizeable

const myArray = [1,2,3,4,7,46,27,55]
//console.log(myArray[3]);// prints the value at that particular index

const myHeros = ["Krish", "dev", "Shaktiman"]
myHeros.push("Alokh")// pushes something new in the array 
myHeros.pop("Alokh")
console.log(myHeros);
//myArray.unshift("$$")// adds something at top of the array
//myArray.shift()// removes anything which is first in the array
//console.log(myArray);

//const newarr = myArray.join()// this join helps to convert the array into string
//console.log(newarr);

// slice and splice

console.log("A", myArray)
const myn1 = myArray.slice(1, 3)
console.log(myn1);

console.log("B", myArray)
const myn2 = myArray.splice(1, 3)
console.log(myn2);

console.log("C", myArray)
// The major difference in splice and slice is that slice does not manipulate the original array whereas splice does manipulate the original array