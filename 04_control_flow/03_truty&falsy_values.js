/* falsy values */
// false , 0 , "" , -0 , BigInt 0n , null , undefined , NaN
/* truthy values */
// "value", "0",'false', true , " ", [], {}, function(){},
let userEmails = "rushik@ai"
if(userEmails){
    console.log("got emails");
}
else{
    console.log('dont got a email')
}
//how to check array and object is empty
let usearray = [];
if(usearray.length==0){
    console.log('yes array is empty');
}
else{
   console.log('not empty');
}

let obj1 = {}
if (Object.keys(obj1).length==0) {
    console.log('object is empty');
}
else{
    console.log('object is not empty');
}