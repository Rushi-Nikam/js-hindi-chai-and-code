let user = "rushi     "
let suber = "sakshi   "
console.log(user.length);
console.log(suber.length);

String.prototype.truelength = function(){


 return this.trim().length;

}
 const heros = ["thor","spiderman"]
const object1 = {
   "thor":"hamer",
   "spiderman": "spidersence",
    getspiderpower:function(){
        console.log(`Accessing spiderpower so this is ${this.spiderman}`);
   }
}
// that time object share power or functionality to all others like array, string etc.
Object.prototype.rushikesh = function(){
    console.log("rushikesh is now a object");
}
// they give power or functionality to specific array
 Array.prototype.heydada = function(){
    console.log(`dada is a marathi word`);
 }
// object1.rushikesh();
heros.rushikesh();
user.rushikesh();
console.log(user.truelength() , " is a truelength");
heros.heydada();
let teju = "tejaswini    "
console.log(teju.truelength())
// object1.heydada();  they are not a array so they are not accessible 
// user.heydada(); they are not a array so they are not accessible 

// inheritance

const users ={
    login:"rushikesh",
    email : "rushi@gmail.com",
}
const Teacher=  {
    makevideo : true,

}
const teachingSupport = {
    isAvailable : false,
}
const TASupport = {
    makeAssingment : "JS Assingment",
    fullTime : true,
    __proto__: teachingSupport,
}
Teacher.__proto__=users

//  modern syntax

Object.setPrototypeOf(teachingSupport,Teacher)
console.log(teachingSupport.makevideo)