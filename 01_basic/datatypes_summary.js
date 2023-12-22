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
let value = true;
// non-primitive datataype and reference type

// array and objects and functions

const Heros = ['IronMan','shaktiman','krish','naagraj','doga'];
console.log(Heros);
let data;
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
console.log(typeof id); 
console.log(typeof bignumber); 
console.log(typeof data); 
console.log( typeof value);

/* ****************************************************************** */
// stack(primitive type) , heap(non-primitive type) two type of memory

let mychannel= "rushikesh nikam";
let anotherchannel = mychannel;
console.log(anotherchannel);
anotherchannel= "rushi Nikam";
console.log(anotherchannel);
let userone = {
    email:"rushikesh00@gmail.com",
    upi : "redc@gedc",
}
let usertwo = userone;
usertwo.email = "rushiNikam00@gmail.com"
console.log(userone);
console.log(usertwo);