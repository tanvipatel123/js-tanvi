//string denoted by '' (single) or ""(double) also.
const name ="tanvi"
const repo = 4

console.log(name + repo + "jg");//old syntax
console.log(`hello my name is ${name} and my repo count os ${repo}`);//best way 

const gameName = new String('TanviSoanni')

console.log(gameName[0]);
console.log(gameName.__proto__);//easy method empty object

console.log(gameName.length);
console.log(gameName.toLocaleUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('v'));//('') likhna compolsory hai because of char value hai lisliye.
const newString = gameName.substring(0, 4);//only starting ke 4 char hi ayenge count 0 se hoga 4 tak.
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newOne = "    kevin  "//extra space remove karne ke liye trim use hota hai.
console.log(newOne);
console.log(newOne.trim());

const url = "http://tanvi.com/tanvi%20sonani"
console.log(url.replace('%20', '-'));//%20 ko replace karta hai - .

console.log(url.includes('tanvi'))//find kar sakte hai ki value url me hai ki nahi hogi to true return karega otherwise false return karta hai.

const newstr = new String("kevin-sonani");
console.log(newstr.split('-'));//string ko split karta hai word me like ['kevin','sonani']

//-> functions
//to uppercase
//to lowercase
//length
//charAt -> kis position pe kya element hai vo show karta hai.
//substring method
//slice method
//trim method
//include