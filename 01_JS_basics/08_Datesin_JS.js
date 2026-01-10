// Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let mycreatedDate = new Date(2023, 0, 23)
console.log(mycreatedDate.toDateString());// months start from 0 in JS as in this the output 0 means January

let createdDate = new Date(2023, 0, 23, 5, 3)
console.log(createdDate.toLocaleString());// here we have assigned time on our the 5 and the 3 

let formatDate = new Date("2023-01-14")// Here format of date is given in string and its printed properly
console.log(formatDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(mycreatedDate.getTime());// gives time in miliseconds

let newDate = new Date()
console.log(newDate.getMonth());// there are many like this to find month date hours miliseconds seconds and many more

newDate.toLocaleString('default', {
    weekday: "long"
})
console.log(newDate);
