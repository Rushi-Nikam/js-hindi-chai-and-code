const coding = ['js','cpp','java','python','ruby'];

let values = coding.forEach( (e)=>{
    // console.log(e);
    return e;
})
// console.log(values) // forEach are not able to return values
const myvalues = [1,2,3,4,5,6,7,8,9,10];
//method 1
const myvaluesTwo=myvalues.filter( (e)=>(e > 4));
// console.log(myvaluesTwo);
//method 2
const myvaluesnext = [2,4,6,8,10,12,14,16,18,20];
const myvaluesagain = myvaluesnext.filter( (e)=>{
    return e > 4;
})
// console.log(myvaluesagain)
const newnums= [];
myvalues.forEach( (e)=>{
    if(e > 4){
        newnums.push(e);
    }
})
// console.log(newnums);

// book example

const bookholder = [
    {title:'book one',genre:'Non-fiction',publish:1981,edition:1989},
    {title:'book Two',genre:'fiction',publish:1990,edition:2000},
    {title:'book Three',genre:'Non-fiction',publish:1994,edition:2002},
    {title:'book Four',genre:'history',publish:1998,edition:2004},
    {title:'book Five',genre:'Science',publish:1999,edition:2008},
    {title:'book Six',genre:'history',publish:2000,edition:2014},
    {title:'book Seven',genre:'Non-fiction',publish:2001,edition:2017},
    {title:'book Eight', genre:'science', publish:2004, edition:2023},
];
let userReader = bookholder.filter( (bk)=>bk.genre=="history");
// userReader = bookholder.filter( (bk)=>{return bk.publish >= 2000})
userReader = bookholder.filter( (bk)=>{return bk.publish > 1995 && bk.genre === "history"})
 
console.log(userReader)