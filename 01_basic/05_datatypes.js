//primitive datatype
// 7 ssnnbbu
// 7 types : string , symbol , number , null , boolean , BigInt , underfined

const id= Symbol('123')
const anotherid= Symbol('123')
console.log(id);
console.log(anotherid);
console.log(id === anotherid);
const bignumber = 23456786543234n;
console.log(typeof(bignumber));
// non-primitive datataype and reference type


// array and objects and functions

const Heros = ['IronMan','shaktiman','krish','naagraj','doga'];
console.log(Heros);

let myobj = {
    name :'rupesh',
    age  : '12',
}
const myfunc = function (){
    console.log("hello world");
}
myfunc();
console.log(typeof(myfunc));
console.log(typeof myobj);
console.log(typeof null ) // object