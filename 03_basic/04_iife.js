//Immediately Invoked Function Expressions(iife)
(function executing(){
    // is a name iife //if function have  a name then they are name iife other are unname iife  
    console.log(`DB connected`);
})(); //don't forgot the semicolon, is a end point of a function  other wise they give an error
(
    ()=>{
        console.log(`DB connected Two`);
    }
)();
(
    (name)=>{
        console.log(`DB connected Two ${name}`);
    }
)("rushi");