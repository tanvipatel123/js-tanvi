//array
//JavaScript arrays are resizable and can contain a mix of different data types.
//JavaScript arrays are zero-indexed
const myArray = [0,1,2,3,4,5];
const myHero =["narendramodi ji","yogi ji"];
console.log(myArray[3]);
const myArray2 = new Array(1,2,3,4)

//Array methods..
myArray.push(6)//value add in the last
console.log(myArray);
myArray.pop()//valye remove from the last
console.log(myArray);
myArray.unshift(9)//value add in array in start position.
console.log(myArray);
myArray.shift();
console.log(myArray);//value remove from starting
console.log(myArray.includes(9));//checkes the value 9 in the array or not if in the list then print true otherwise false.
console.log(myArray.indexOf(9));//value will be -1 because 9 is not in the array.if the array list than positive value show.
const newArr = myArray.join(); // binding and data type change into string
console.log(typeof(newArr));
console.log( myArray);

//slice or splice
// slice or splice diffrence : slice me value 1,2 show karega or splice me 1,2,3 print karega but jo original array he vo change ho jayega like 0,4,5.
console.log("A", myArray);
const myn1 = myArray.slice(1,3);
console.log(myn1);
console.log("B",myArray);

const myn2 = myArray.splice(1,3);
console.log(myn2);
console.log("C" , myArray);




