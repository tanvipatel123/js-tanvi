//memory in js 
//1) stack (primitive)//copy hi milega
//2)heap(non primitive)//reference hi milega original vlaue ko

let myname = "tanvi patel";

let anothername = myname 
anothername = "tanu sonani"
console.log(anothername);
console.log(myname);

let userOne ={
    email :"user@google.com",
    upi : "user@ybl"
}
let userTwo = userOne
userTwo.email = "tanu@123"

console.log(userOne.email);
console.log(userTwo.email);