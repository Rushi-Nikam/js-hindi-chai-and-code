// javascript array-copy operations create shallow copy 
//array
let myarr = [0,1,2,3,4,5];
console.log(myarr[0]);
// myarr.push(6)
// myarr.push(7)
console.log(myarr)
// myarr.pop();
// myarr.pop();
// console.log(myarr)
// myarr.unshift(9);
// console.log(myarr);
// myarr.shift();
// console.log(myarr);
// console.log(myarr.includes(5));
// console.log(myarr.indexOf(3));
console.log('A',myarr);
const myn1 = myarr.slice(1,3); // is not manupulate original array 
console.log(myn1);
console.log('B',myarr);
const myn2 = myarr.splice(1,3);// is manipulate original array
console.log(myn2);
console.log(myarr);


