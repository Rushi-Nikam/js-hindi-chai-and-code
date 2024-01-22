const mynumber=[1,2,3,4,5,6,7,8,9,10];
//method 1
const num = mynumber.map( (e)=> e * 10);
// method 2
const nums = mynumber.map( (e)=> {return e * 10});

// console.log(num);
// const bookholder = [
//     {title:'book one',genre:'Non-fiction',publish:1981,edition:1989},
//     {title:'book Two',genre:'fiction',publish:1990,edition:2000},
//     {title:'book Three',genre:'Non-fiction',publish:1994,edition:2002},
//     {title:'book Four',genre:'history',publish:1998,edition:2004},
//     {title:'book Five',genre:'Science',publish:1999,edition:2008},
//     {title:'book Six',genre:'history',publish:2000,edition:2014},
//     {title:'book Seven',genre:'Non-fiction',publish:2001,edition:2017},
//     {title:'book Eight', genre:'science', publish:2004, edition:2023},
// ];
// const data = bookholder.map( (e)=> e + e);  not working 
// console.log(data);
 const numbers = mynumber.map( (e)=> e * 10).map( (e)=> e + 1).filter( (e)=>e >= 40);
 console.log(numbers)