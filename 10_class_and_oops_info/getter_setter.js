class user{
    constructor(email,password){
        this.email = email;
        this.password = password;
    }
    // modern syntax
    get email(){
       return `${this._email.toUpperCase()}`
    }
    set email(value){
       this._email =value;
    }
    get password(){
        return `${this._password}hitesh`
    }
    set password(value){
        this._password = value;
    }
}
const rushi =new user("rushi@gmail.com","acg")
console.log(rushi.password);
console.log(rushi.email);