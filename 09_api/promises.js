const promiseOne = new Promise(function (resolve, reject) {
    //Do an async task
    //DB calls,cryptography , network
    setTimeout(() => {
        console.log('Async task is complete');
        resolve();
    }, 1000);
})

promiseOne.then(function () {
    console.log("promise consumed");
})

new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("Task 2 complete")
        resolve();
    }, 1000);
}).then(function () {
    console.log("promise consumed again")
})

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve({ username: "Rushikesh", password: 4352, email: "rushi@example.com" })

    }, 1000);
}).then(function (user) {
    console.log(user);
})
const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({ username: "Rushikesh", password: 4352, email: "rushi@example" });
        } else {
            reject("the is error something went wrong ")
        }
    }, 2000);
})

promiseFour.then(function (user) {
    console.log(user);
    return user.username;
}).then(function (user) {
    console.log(user)
}).catch(function (error) {
    console.log(error);
}).finally(function () {
    console.log("The promise either resolve or rejected");
})


const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ username: "Javascript", password: 4352, email: "rushi@example" });
        } else {
            reject("the is error something  went wrong ")
        }
    }, 2000);
});

// async await 

async function consumPromiseFive() {
try {
    const response = await promiseFive
    console.log(response);
    
} catch (error) {
    console.log(error);
}
   

}
consumPromiseFive();


async function getAllusers(){
    try {
         const response = await fetch('https://jsonplaceholder.typicode.com/users');
         const data = await response.json() ;
         console.log(data);
    } catch (error) {
        console.log(error);
    } 
}
getAllusers();

fetch('https://jsonplaceholder.typicode.com/users').then(function(response){
     return response.json();
}).then(function(data){
    console.log(data)
}).catch(function(error){
    console.log(error);
})