// var c = 40;
var data = 40;

{
    let data = 100;
    let data1 = 200;
    let data2 = 300;
    console.log("inner the scope :" + data);

}
console.log(data);
// console.log(data1);
function one(){
    const username = "rushikesh";
    function two(){
        const website= "youtube";
        console.log(website)
        console.log(username)
    }
    // console.log(website)
    // two();
}
// one();

if(true){
    const username = "rushikesh";
    if(username === "rushikesh"){
        const website = " Youtube";
        console.log(username + website);
      
    }
    // console.log(website); error
    
}
// console.log(username); error

console.log(addone(5))  // we don't face a problem 
function addone(num){
  return num + 1;
}
// addTwo(5);          // we face a prblem 
const addTwo = function(num){
    return num + 2;
}
addTwo(5)
