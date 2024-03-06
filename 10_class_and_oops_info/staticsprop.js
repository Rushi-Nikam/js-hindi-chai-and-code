class users{
    constructor(username){
  this.username = username;
    }
    logme(){
        console.log(`Username is ${this.username}`)
    }
   static createId(){
        return `${Math.floor(Math.random()*100 + 1)}`
    }
}
const hitesh = new users("hitesh");
hitesh.logme();
// console.log(hitesh.createId());

class Tech extends users{
    constructor(username,email){
        super(username);
        this.email =email;
    }
}
const iphone = new Tech('iphone',"Apple@iso.com")
iphone.logme()

log(iphone.createId())