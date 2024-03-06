const user={
    _email : "rushi@gmail.com",
    _password:"134ec",
    get email(){
       return this._email.toUpperCase();
    },
    set email(value){
        this._email = value;
    },
    get password(){
       return this._password.toUpperCase();
    },
    set password(value){
        this._password = value;
    },
}
 const rushi = Object.create(user);
 console.log(rushi.email);
 console.log(rushi.password)