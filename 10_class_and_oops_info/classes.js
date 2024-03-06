class users{
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
    encrypted(){
        return `${this.password}abcec`;
    }
    CapitalizeUser(){
        return `${this.username[0].toUpperCase() + this.username.slice(1)}`;
    }
    UppercaseUser(){
        return `${this.username.toUpperCase()}`;
    }
}
let user1 = new users("rushikesh","rushi@gmail.com","1234");
console.log(user1.encrypted());
console.log(user1.CapitalizeUser());
console.log(user1.UppercaseUser())



//behind the scene

function Users(username,gmail,password){
    this.username = username;
    this.gmail = gmail;
    this.password = password;
}
Users.prototype.encrypted= function(){
    return `${this.password}abcec`;
    
}
Users.prototype.CapitalizeUser= function(){
    return `${this.username[0].toUpperCase() + this.username.slice(1)}`;   
}

let user2 = new users("rushi","rushiii@gmail.com","1234");
console.log(user2.encrypted());
console.log(user2.CapitalizeUser());
// console.log(user1.UppercaseUser())