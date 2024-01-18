//singleton
// const  tinderUser = new Object();
const tinderUser ={}
tinderUser.id = "1234abcd";
tinderUser.name="passal";
tinderUser.age = 21;
// console.log(tinderUser);
const valuesofobj ={
    userinfo:"data",
    userdata: {
        userfullname:{
            userfirst:"rushikesh",
            userlast:"Nikam",
        }
    }
}

// console.log(valuesofobj.userdata.userfullname.userfirst);
// Objects merge in 1 Object
 const obj1 = {a:"1",b:"2",c:"3"};
  const obj2 = {d:"1",e:"2",f:"3"};
//   const obj3=Object.assign({},obj1,obj2); //  method one
 const obj3 = {...obj1,...obj2}; //  method second
//  console.log(obj3);
 const objarry =  [
    {
        id:"12",
        email:"r@gmail.com",
    },
    {
        id:"11",
        email:"rush@gmail.com",
    },
    {
        id:"10",
        email:"ru@gmail.com",
    },
 ]
//  console.log(objarry[1].email);
//  console.log(Object.keys(tinderUser));
//  console.log(Object.values(tinderUser));
//  console.log(Object.getPrototypeOf(tinderUser));
//  console.log(Object.entries(tinderUser));
//  console.log(obj1.hasOwnProperty('a'));

// destructuring 

 const course = {
    courseid : "#spidercoding",
    coursename : "js data structure",
    courseinstructor: "Rushikesh Nikam",
 }
//  console.log(course.courseinstructor) // it is a basic method
//  const {courseinstructor}=course; // it is another method
 const {courseinstructor:instructor} = course;
//  console.log(courseinstructor);
 console.log(instructor); 


//json
[
    {},
    {},
    {},
]