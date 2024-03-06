class users{
    constructor(username){
        this.username = username;
    }
    logme(){

    console.log( `username is ${this.username}`);
    }
}
class Teacher extends users{
    constructor(username,email,password){
        super(username);
        this.email = email;
        this.password = password;
    }
    addCourses(){
        console.log(`A new course was added by ${this.username}`);
    }
}
let rushi = new Teacher("rushikesh","rushikesh@gmail.com","12334");
rushi.addCourses();
const user2 = new users("sakshi");
console.log(user2)
user2.logme();
rushi.logme();
console.log(rushi instanceof users);