function user(email,password){
 
    this._email = email;
    this._password = password;

    Object.defineProperty(this,'email',{
        get:function(){
            return this._email.toUpperCase();
        },
        set:function(value){
              this._email = value;
        }
    })
    Object.defineProperty(this,'password',{
        get:function(){
            return this._password.toUpperCase() + "redcded@";
        },
        set:function(value){
              this._passwordpa = value ;
        }
    })
}

let data = new user("rushikesh@gmail.com","rus");
console.log(data.email)
console.log(data.password)