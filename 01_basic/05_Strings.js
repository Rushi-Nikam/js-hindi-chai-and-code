let name ="rushi"
let count = 50
console.log(typeof name);
console.log(typeof String);
console.log(`The name of the student is ${name} and marks is ${count}`)
let anotherobj = new String("rushikesh-Nikam-go");
console.log(anotherobj[0]);
console.log(anotherobj.__proto__);
console.log(anotherobj.length);
console.log(anotherobj.toUpperCase());
console.log(anotherobj.charAt(3));
console.log(anotherobj.indexOf("s"));
const newString = anotherobj.substring(0,5);
console.log(newString);
const anotherString = anotherobj.slice(-12,5);
console.log(anotherString);
const newone = "  rushikesh     "
console.log(newone)
console.log(newone.trim());
const url = "https://rushi.com/rushi%20Nikam";
console.log(url.replace('%20','-'));
console.log(url.includes("ruh"));
console.log(anotherobj.split('-'));