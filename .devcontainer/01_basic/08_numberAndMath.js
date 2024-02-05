const score =100
console.log(score);//only output dikhata hai 
const balance = new Number(100)
console.log(balance)//ans plus data type bhi dikhata hai like numbers.
console.log(balance.toString().length);//output => 3 because 100 me 3 char hai islye 3 ata hai (number ko string me convert karta hai )
console.log(balance.toFixed(2));//tofix value ayegi like (100.00)

const otherNumber = 123.6754
console.log(otherNumber.toPrecision(3));//precise value  ans will be 124.

const hundrad = 100000
console.log(hundrad.toLocaleString('en-IN'));//1,00,000 inr me convert kar sakte hai 
console.log(hundrad.toLocaleString());//usually by default us standard me hota hai. 

///++++++++++++++++++++++++++++++++  maths  +++++++++++++++++++++++++++++++++++++++++++
console.log(Math);
console.log(Math.abs(-4));//absolute value minus value positive hota hai but positive minus me nahi hota
console.log(Math.round(4.6));//roungfigure karega value ko like 5
console.log(Math.ceil(4.2));//celing value top ki like 5
console.log(Math.floor(4.3));//lowest value hi lega value main he vo lega like 4
console.log(Math.min(4,3,2,1));//minimum value lega like 1
console.log(Math.max(9,4,6,2));//big value lega like 9
console.log(Math.random());//random value lega 0 or 1 ke bich me . 


const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max-min + 1)) + min);