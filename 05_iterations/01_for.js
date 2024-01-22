// for
// let array = [1,2,3,4,5,6] 
// for (let i = 0; i < array.length; i++) {
//     const element = array[i]
// console.log(element);

// }
//console.log("-------------")
// for (let data = 0; data <10; data++) {
//     const element = data
// console.log(element);

// }

for (let i = 0; i <= 10; i++) {
  // console.log(`outer value is ${i}`);
  for (let j = 0; j <= 10; j++) {
    //   console.log(`inner value is ${j} and outer value is ${i}`);
    // console.log(`${i} * ${j} = `+ i*j);
  }
}
let myarray = ['codewithharry', 'chai aur code', 'apna college', 'technical suneja', 'ezsippet'];
for (let index = 0; index < myarray.length; index++) {
  const element = myarray[index];
  console.log(element);
}
// break and continue
for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log('5 is detected ')
    break;
    // continue;
  }
  console.log(`value of i is ${index}`)

}
for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log('5 is detected ')
    continue;
  }
  console.log(`value of i is ${index}`)

}