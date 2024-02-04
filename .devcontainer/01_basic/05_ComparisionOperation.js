console.log(2>1);
console.log(2 >=1);
console.log(2<1);
console.log(2 == 1);//false
console.log(2 === 5);//false
console.log(2!=1);

console.log("2" >1);//true
console.log("02">3);//false

//total confusing
console.log(null > 0);//false
console.log(null == 0);//false
console.log(null >= 0);//true


//undefined me false value hi return hogi.
console.log(undefined ==0);
console.log(undefined >0);
console.log(undefined <0);

//strict check ===
console.log("2" === 2);//false


//array
const cars = ["ferrari","pursche","bmw"]
//object
 let myObj={
    name : "Tanvi",
    age : 22,
}

//function
const myFunction = function(){
    console.log("hello world");
}
console.log(typeof myFunction);//function data type