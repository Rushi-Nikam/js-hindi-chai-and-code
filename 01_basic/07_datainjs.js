// date
let mydate = new Date();
// console.log(mydate.toString());
// console.log(mydate.toISOString());
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleString());
// console.log( typeof mydate);

// let mynewdate = new Date(2023,0,23);
let mynewdate = new Date(2023,0,23,5,3);
// console.log(mynewdate);
// console.log(mynewdate.toDateString());
// console.log(mynewdate.toLocaleDateString());
// console.log(mynewdate.toLocaleString());
// let newDate = new Date("2023-01-14") //yy-mm-dd
let newDate = new Date('01-14-2023')
console.log(newDate.toLocaleString());

let mytimestamp = Date.now();
// console.log(mytimestamp);
// console.log(newDate.getTime());
console.log(Date.now());
console.log(Math.floor(Date.now()/1000));
console.log(mydate.getDay());
console.log(mydate.getMonth() + 1);
console.log(mydate);
console.log(newDate.toLocaleString('default',{
    weekday:"long"
}))