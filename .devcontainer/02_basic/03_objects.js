//singleton - jab hum literels ki tarah declare karte hai to singleton nahi banta hai.
//constructor se banega to singleton banega.

//object literals
//Object.create //constructor method through (isme singleton banta hai.)
//{}empty object
//{keys : value} key or values se define hota hai 


//mostly value (.) se define hogi.
//2. ([""]squre) se define hogi
//3. ([]only squre ) se define hogi.

const jsUser = {
    name : "Tanvi",
    "full name " : "tanvi patel",
    age : 22,
    location : "Ahmedabad",
    email : "tanvi@gmail.com",
    isLoggedin : false,
    isLastLoginDate : ["monday","sunday"]
}
//acces the objecft 
console.log(jsUser.email);//wrong way to access object.
console.log(jsUser["email"]);//email string mr deta rehta hai 
console.log(jsUser["full name "]);//full name bina sting ke access nahi dega.
//console.log(jsUser);

jsUser.email = "chatgpt.com"
//Object.freeze(jsUser)//value change nahi hogi 
console.log(jsUser);
jsUseremail = "microsoft.com"
//console.log(jsUser);


jsUser.greeting = function(){
    console.log("hello js user");//simply
}

jsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name} `);//value refer kar rahe hai value
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());