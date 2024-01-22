let work = {
    username : "rushikesh",
    price : 499,
    welcomMessage:function(){
        console.log(`${this.username}, welcome to the jungale `);
        console.log(this);
    }

} 
   /* in browser the global object is window object */
// work.welcomMessage();
// work.username = "sumit"
// work.welcomMessage();
// console.log(this)

// function thisunderstanding(){
//     // console.log(this); // this is return some values in normal function 
//     let username = "rushikesh";
//     console.log(this.username); //it not applicable in the function they return undefined
// } 

// // thisunderstanding();
//  const thisunderstanding = function (){
//     // console.log(this);  // this is return some values in normal function 
//     let username = "rushikesh";
//     console.log(this.username); //it not applicable in the function they return undefined
// } 

// thisunderstanding();

/* arrow function  */
const understanding = () =>{
 const username = "rushikesh";
 console.log(this);  // this is return {} in the arrow function 
}
understanding();

// const adding_numbers=(add1,add2)=>{
//     return add1 + add2;
// }
// console.log(adding_numbers(44,33));

/* implicit return  */
// const adding_numbers=(add1,add2)=> add1 + add2;
// const adding_numbers=(add1,add2)=> (add1 + add2);
const adding_numbers=(add1,add2)=> ({username:"rushikesh"},add1 + add2);

console.log(adding_numbers(44,33));