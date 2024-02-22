//array part 2
//array methods
/* from()
of()
isArray()*/
const marvel = ["thor","ironman","spiderman"];
const dc =["superman","flash","batman"];

//marvel.push(dc);//array into array for ex marvel array into dc array.

//console.log(marvel);
marvel.concat(dc);
console.log(marvel);

const allhero = marvel.concat(dc);
console.log(allhero);//array merge in proper way.

const allhero2 = [...marvel, ...dc];//spread method value sprad karta hai 
console.log(allhero2);

const a2 = [1,2,3,[4,5,6],7,[8,9,[4,5]]]//value ko combine karta hai proper way me 
const a3 = a2.flat(Infinity);//depth deni hoti hai
console.log(a3);

console.log(Array.isArray("tanvi"));//false return because it is not array
console.log(Array.from("tanvi"));//convert into string..to .from() method using

console.log(Array.from({name : "tanvi"}));//interesting object key se array banega ya fir values se array abnega output will be empty [] array.

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));//array create karta hai using of method..