const marvel = ["Ironman", "Captain America", "Thor"]
const dc = ["Batman", "Superman", "Flash"]

//marvel.push(dc)// this will not merge the array but it will push the dc array in marvel which will make it nested array
//console.log(marvel);
//console.log(marvel[3][2]);// This will help to get elements from the nested array

//const all_heros = marvel.concat(dc)// this will create a new aray only where all the elements of both the arrays will be there one limitation that it can combine only two arrays
//console.log(all_heros);

const heros = [...marvel, ...dc]// overcomes the limitation of concat here it can combine multiple arrays
console.log(heros);

const array = [1,2,3,[55,66,6], 4, 5, [7,8,[99,34,66]]]

const new_array = array.flat(Infinity)// here we can assign number for example there are 3 arrays inside then 3 or we can use 'Infinity' to make it one single array
console.log(new_array);

console.log(Array.isArray("Sudha"));// This tell whether the element exists in the array or not
console.log(Array.from("Sudhanshu"));// this will form an array fromt the string

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));// this will make arrays from the values

