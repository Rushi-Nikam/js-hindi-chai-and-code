// forin 
let myObject = {
    js:'javascript',
    py:'python',
    java:'java for coding',
    swift:'swift for apple',
    cpp:'c++',
    
}
for (const key in myObject) {
//    console.log(`the key is ${key} and value is ${myObject[key]}`);
}
let arry =[1,2,3,4,5,6,7];
for (const key in arry) {
    console.log(arry[key]);
}


let map = new Map();
map.set('IN',"India");
map.set('USA',"America");
map.set('FR',"France");
// console.log(map);
for (const key in  map) {

    // console.log(key);  // for in iteration working with map
}