const myprice = [1,2,3];
// method 1
let mydata = myprice.reduce( (acc,data) => acc + data , 0);
 mydata = myprice.reduce( 
    (acc,data) => 
  {  console.log(`acc is ${acc},and data is ${data}`)
        return   acc + data }, 0);
console.log(mydata);
let shoppingcard = [
    {
        itemname: "js course",
        price : 2999,
    },
    {
        itemname: "python course",
        price : 4999,
    },
    {
        itemname: "java course",
        price : 5999,
    },
]
const payprice = shoppingcard.reduce( (acc , item)=> acc + item.price,0);
console.log(payprice);