const accountId=12;
let accountEmail="rushidnikam00@gmail.com";
var accountPassword="12345"; /*prefer not to use because of issue in block scope and functional scope */
accoutCity="jaipur";
console.log(typeof(accoutCity));
//accountId=2;  // NOT ALLOWED
console.log(accountId);
console.table([accountEmail,accountId,accountPassword,accoutCity]);