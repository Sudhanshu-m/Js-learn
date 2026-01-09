console.log("2" > 1);// here js is converting string to number to compare
console.log(1<"2");

console.log(null > 0);// output of these will be different because js treats == different and comparisons differently 
console.log(null == 0);
console.log(null >=0);


console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined <0);

// === this is called strict check which means it will not only check the value but it will also check the data type

console.log("2" === 2);
