//singleton
//constructor is singleton object 
//object literals
//  Object.create  // is a type of singleton
const mysyb = Symbol("myjs");

const js_user = {
    name:"rushikesh",
    [mysyb]:"myjs2", //how to add symbol in object
    age:18,
    gmail:"rushidnikam00@gmail.com",
    location:"pune",
    isLoggedIn:false,

}
// console.log(js_user.name)
// console.log(js_user["name"])
// console.log(js_user[mysyb])
js_user.gmail ="rushikeshdnikam00@gmail.com"
// Object.freeze(js_user);
js_user.gmail ="rushnikam2710@gmail.com"
// console.log(js_user);

js_user.greeting = function(){
    console.log("hello js users");
}
js_user.greetingtwo = function(){
    console.log(`The name of the user is  ${this.name}`);
}
console.log(js_user.greeting());
console.log(js_user.greetingtwo());
