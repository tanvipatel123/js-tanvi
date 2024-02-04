let score = undefined

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number (score);
console.log(typeof valueInNumber);
console.log(valueInNumber);//output: nan (not a number)

//null = 0 ata he
//33abc = nan ata hai , string number me convert na ho tab nan ata hai.
//true = 1 ata hai 
//false = 0 ata hai 
//undefined = nan
//33 = 33

let isLoggedIn = ""
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

//1 = true
//"" = false
//"tanvi" = true
//0 = false

let number = 33
let stringNumber =  String(number)
console.log( typeof stringNumber);
//33 types of conver string me ans will be = string

let value = 3
let negvalue = -value
console.log(negvalue);//converting in negative value