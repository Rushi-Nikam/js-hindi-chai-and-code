function multiple5(num){
    return num*5;
}
multiple5.power = 22;
console.log(multiple5(8));
console.log(multiple5.power);
console.log(multiple5.prototype);

function CreateUser(username,score){
    this.username = username;
    this.score = score;

}
CreateUser.prototype.increase = function(){
    this.score++;
}
CreateUser.prototype.printme = function(){
console.log(`The score is ${this.score}`);
}
const data = new CreateUser("rushi",222);
const data2 = new  CreateUser("rupesh",250);
data2.printme();
console.log(data2);