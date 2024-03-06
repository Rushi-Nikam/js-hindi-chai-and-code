const Descriptor = Object.getOwnPropertyDescriptor(Math,"PI");
console.log(Descriptor)

const user = {
    name : "rushikesh",
    role: "developer",
    description:"a react developer",
    getdata: function(){
        console.log("code not working");
    }
}
console.log(Object.getOwnPropertyDescriptor(user,"name"))
Object.defineProperty(user,"name",{
    writable:false,
    enumerable:false,
})

// console.log(Object.getOwnPropertyDescriptor(user,"name"))
for (let [key,value] of Object.entries(user)) {
    if(typeof value !== 'function'){
        console.log(`${key}:${value}`);
    }
    
}