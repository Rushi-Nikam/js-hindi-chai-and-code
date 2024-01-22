//for of 
// ['','','']
// [{},{},{}]
const arr = [1,2,3,4,5,6,7];
for (const num of arr) {
    // console.log(`The value of array is ${num}`);
}
console.log("----------------------")
const greeting = "Hello World";
for (const greet of greeting) {
    if(greet ==" "){
        continue;
    }
    // console.log(`The value of greeting is ${greet}`);
}
//Maps
let map = new Map();
map.set('IN',"India");
map.set('USA',"America");
map.set('FR',"France");
// console.log(map);
for (const [key,value] of map) {
    console.log(key,":-" , value);  // for of iteration working on map but not on object
}
let obje1={
    game1:"chess",
    game2:"batmainton"
}
for (const [game,value] of obje1) {
    // console.log(game,':-',value); // not working
}