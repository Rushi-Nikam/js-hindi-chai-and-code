
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