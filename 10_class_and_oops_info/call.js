function SetUserName(username){
    this.username = username
    console.log("called");
}
function createUser(username,email,password){
    SetUserName.call(this, username)
    this.email = email;
    this.password = password;
}

let user1 = new createUser("rushikesh","rushi@gmail.com","123")
console.log(user1);