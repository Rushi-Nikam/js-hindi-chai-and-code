const coding = ['js','cpp','java','python','ruby'];
// method 1
coding.forEach(function (e){
    // console.log(e)
})
// method 2
 coding.forEach((e)=>{
// console.log(e);
 })
//  method 3
 function printval(e){
    // console.log(e);
 }
 coding.forEach(printval);
 //method 4
 coding.forEach((e,index,arr)=>{
    // console.log(e,index,arr);
 })

 const myobject1 = [
 {
    languagename:"javascript",
    extention:'js',
 },
 {
    languagename:"java",
    extention:'java',
 },
 {
    languagename:"python",
    extention:'py'
 }
 ]
 myobject1.forEach((e)=>{
    console.log(e.languagename);
    console.log(e.extention);
 })