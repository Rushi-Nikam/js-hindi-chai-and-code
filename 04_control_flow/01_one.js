
// if(2=="2"){
//     console.log("executed");
// }

if(2==="2"){
    console.log("executed");
}
else{
    console.log('not executed')
}
let balance = 4000
// if(balance > 500) console.log(`test`);
// if(balance>3000) console.log("test"),console.log("test2"); is not good for production 
let userlogined = true;
let debitcardinfo = true;
if(userlogined && debitcardinfo){
    console.log("allow to buy a course");
}
let userloginedfromgoogle = true;
let userloginedfromlinked = false;
if(userloginedfromgoogle || userloginedfromlinked){
    console.log("allow to processed");
}
if(userloginedfromgoogle && userloginedfromlinked){
    console.log("allow to processed on");
}
//Nullish coalescing Operator(??):null , undefined

// let val1= 5 ?? 10
let val1 = null ?? 10;
console.log( val1);
let val2 = null ?? undefined ?? 30;
console.log(val2);

//Ternary Operator 
// condition ? ture : false;
let icecream = 100;
icecream <= 80 ? console.log('less than 80'):console.log('more than 80');