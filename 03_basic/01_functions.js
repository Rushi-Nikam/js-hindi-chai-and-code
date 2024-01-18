
function myfuc(){
    console.log("r")
    console.log("u")
    console.log("s")
    console.log("h")
    console.log("i")
}
// myfuc //it is a reference of function

// myfuc(); // and this is  execution of function 

// function add_number(number1,number2){ //(number1,number2) this is a parameters 
//     console.log(number1 + number2);
// }
// add_number(12,'3'); // this is a arguments

function add_number(number1,number2){
//   let result = number1 + number2;
//    return result;
return number1 + number2;
}
const result = add_number(12,4);
console.log("Result is " + result);

// function loginusermessage(username){
//     return ` ${username} just logged in `
// }
// function loginusermessage(username){
//     if(username === undefined){
//         console.log("please enter valid name");
//         return
//     }
//     return ` ${username} just logged in `
// }
function loginusermessage(username="sam"){
    if(!username){
        console.log("please enter a valid name");
        return
    }
    return ` ${username} just logged in `
}
// const logins = loginusermessage("rushikesh");

// console.log(logins)
// const logins = loginusermessage();
// console.log(logins); 

function calculatecartbill(...num1){
    return num1;
}
console.log(calculatecartbill(100,200,300));
const username = {
    userid:34,
    usermane:"rushikesh",
    price:12000
}
function handlerObject(anyother){

console.log(`username is , ${anyother.price})
} and ` )
}
handlerObject({
username:"rushi",
price:399
}
)
const myfunction =[100,300,200 ,400]
function returnsecondValue(getsArray){
    return getsArray[1];
}
console.log(returnsecondValue([100,200,300,400]));