const users =  {
    username : "rushi",
    loginCount : 8,
    signedIn  : true,

}
console.log(users.signedIn);

function user(username,loginCount,signedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.signedIn = signedIn;
    this.greeting  = function(){
        console.log(`Username : ${this.username}`);
    }
    return this;
}
const userOne = new user("rushikesh",12,false);
const usertwo = new user("rushi",11,true);
// console.log(userOne)
// console.log(usertwo)
console.log(userOne.constructor);