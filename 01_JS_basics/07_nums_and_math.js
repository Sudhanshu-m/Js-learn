const score = 100
console.log(score);

const balance = new Number(100)// this is for specifically using Number
console.log(balance);

console.log(balance.toString().length);//converts to string and length is used to find the length
console.log(balance.toFixed(3));// this tells how many numbers we want after decimal

const otherNumber = 123.89533
console.log(otherNumber.toPrecision(3));// if 3 then it will give the approx value its output is 124
console.log(otherNumber.toPrecision(4));// it gave 123.9 which is again approx so if we take less then the whole value then it will give aprrox values

const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN'));// without en-IN will give seperation according to US standards 

// +++++++++++++++++++++ Maths++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));// gives output as positive value only
console.log(Math.round(-4.855));// it is round off function
console.log(Math.ceil(5.888));// it will give approx towards high value only
console.log(Math.floor(5.888));// it is opposite of ciel
console.log(Math.min(5,8,58,0));// min value
console.log(Math.max(5,8,58,0));// max value

console.log(Math.random());// it will give random values between 0 and 1
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min)) + min);// this will give values between 10 and 20 only
